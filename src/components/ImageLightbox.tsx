"use client";

import { useEffect, useRef, useState, type PointerEvent, type WheelEvent } from "react";

type Image = { src: string; alt: string };

const MIN_ZOOM = 1;
const MAX_ZOOM = 4;
const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

/**
 * Full-screen image viewer: zoom with buttons, mouse wheel, double click or pinch;
 * drag to pan while zoomed; arrows/keyboard to move between images; Esc to close.
 */
export default function ImageLightbox({
  images,
  index,
  label,
  onClose,
  onIndexChange,
}: {
  images: Image[];
  index: number;
  label: string;
  onClose: () => void;
  onIndexChange: (index: number) => void;
}) {
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const pointers = useRef(new Map<number, { x: number; y: number }>());
  const pinchStart = useRef<{ distance: number; zoom: number } | null>(null);
  // Where the current press started, to tell a backdrop click from a drag or a click on the image
  const press = useRef<{ x: number; y: number; onBackdrop: boolean } | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const many = images.length > 1;

  const setZoomLevel = (next: number) => {
    const value = clamp(next, MIN_ZOOM, MAX_ZOOM);
    setZoom(value);
    if (value === MIN_ZOOM) setOffset({ x: 0, y: 0 });
  };

  const go = (step: number) => {
    setZoom(1);
    setOffset({ x: 0, y: 0 });
    onIndexChange((index + step + images.length) % images.length);
  };

  // Keyboard shortcuts, scroll lock and initial focus
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      else if (event.key === "ArrowRight" && many) go(1);
      else if (event.key === "ArrowLeft" && many) go(-1);
      else if (event.key === "+" || event.key === "=") setZoomLevel(zoom + 0.5);
      else if (event.key === "-") setZoomLevel(zoom - 0.5);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  function onWheel(event: WheelEvent) {
    setZoomLevel(zoom * (event.deltaY < 0 ? 1.15 : 1 / 1.15));
  }

  function onPointerDown(event: PointerEvent) {
    // Let the navigation buttons receive their own clicks
    if ((event.target as Element).closest("button")) return;
    if (pointers.current.size === 0) press.current = { x: event.clientX, y: event.clientY, onBackdrop: event.target === event.currentTarget };
    event.currentTarget.setPointerCapture(event.pointerId);
    pointers.current.set(event.pointerId, { x: event.clientX, y: event.clientY });
    setDragging(true);
    if (pointers.current.size === 2) {
      const [a, b] = [...pointers.current.values()];
      pinchStart.current = { distance: Math.hypot(a.x - b.x, a.y - b.y), zoom };
    }
  }

  function onPointerMove(event: PointerEvent) {
    const previous = pointers.current.get(event.pointerId);
    if (!previous) return;
    pointers.current.set(event.pointerId, { x: event.clientX, y: event.clientY });
    if (pointers.current.size === 2 && pinchStart.current) {
      const [a, b] = [...pointers.current.values()];
      setZoomLevel((pinchStart.current.zoom * Math.hypot(a.x - b.x, a.y - b.y)) / pinchStart.current.distance);
    } else if (zoom > 1) {
      setOffset((current) => ({ x: current.x + event.clientX - previous.x, y: current.y + event.clientY - previous.y }));
    }
  }

  function onPointerUp(event: PointerEvent) {
    pointers.current.delete(event.pointerId);
    if (pointers.current.size < 2) pinchStart.current = null;
    if (pointers.current.size === 0) setDragging(false);
  }

  const image = images[index];
  const controlButton =
    "w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors disabled:opacity-30 disabled:hover:bg-white/10";

  const overlayButton = "rounded-full bg-[#0D141A]/70 hover:bg-[#0D141A]/90 text-white border border-white/20 shadow-lg flex items-center justify-center transition-colors";

  return (
    <div
      aria-label={`${label}: imagen ampliada`}
      aria-modal="true"
      className="fixed inset-0 z-[60] bg-[#0D141A]/95 backdrop-blur-sm flex flex-col"
      role="dialog"
    >
      {/* Barra superior */}
      <div className="flex items-center justify-between gap-4 px-4 sm:px-6 py-3 text-white">
        <span className="text-label-md font-label-md">
          {label}
          {many && <span className="text-white/60 ml-2">{`${index + 1} / ${images.length}`}</span>}
        </span>
        <div className="flex items-center gap-2">
          <button aria-label="Alejar" className={controlButton} disabled={zoom <= MIN_ZOOM} onClick={() => setZoomLevel(zoom - 0.5)} type="button">
            <span className="material-symbols-outlined">zoom_out</span>
          </button>
          <span className="w-12 text-center text-label-sm font-label-sm tabular-nums">{Math.round(zoom * 100)}%</span>
          <button aria-label="Acercar" className={controlButton} disabled={zoom >= MAX_ZOOM} onClick={() => setZoomLevel(zoom + 0.5)} type="button">
            <span className="material-symbols-outlined">zoom_in</span>
          </button>
          <button aria-label="Cerrar vista ampliada" className={`${controlButton} ml-2`} onClick={onClose} ref={closeRef} type="button">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
      </div>

      {/* Imagen */}
      <div
        className={`relative flex-1 overflow-hidden touch-none select-none ${zoom > 1 ? "cursor-grab active:cursor-grabbing" : "cursor-zoom-in"}`}
        onClick={(event) => {
          const start = press.current;
          const moved = start ? Math.hypot(event.clientX - start.x, event.clientY - start.y) > 5 : true;
          if (start?.onBackdrop && !moved && zoom === 1) onClose();
        }}
        onDoubleClick={() => setZoomLevel(zoom > 1 ? 1 : 2.5)}
        onPointerCancel={onPointerUp}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onWheel={onWheel}
      >
        <img
          alt={label}
          className="absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] object-contain"
          data-alt={image.alt}
          draggable={false}
          src={image.src}
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})`,
            transition: dragging ? "none" : "transform 150ms ease-out",
          }}
        />
        {many && (
          <>
            <button aria-label="Imagen anterior" className={`${overlayButton} absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12`} onClick={() => go(-1)} type="button">
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <button aria-label="Imagen siguiente" className={`${overlayButton} absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12`} onClick={() => go(1)} type="button">
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </>
        )}
      </div>

      <p className="text-center text-xs text-white/60 py-3 px-4">
        Doble clic o rueda del mouse para hacer zoom · Arrastra para moverte · Esc para cerrar
      </p>
    </div>
  );
}
