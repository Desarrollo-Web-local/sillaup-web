"use client";

import { useState } from "react";

const labels: Record<number, string> = {
  1: "1 de 5 estrellas (Regular)",
  2: "2 de 5 estrellas (Aceptable)",
  3: "3 de 5 estrellas (Bueno)",
  4: "4 de 5 estrellas (Muy bueno)",
  5: "5 de 5 estrellas (Excelente)",
};

/** Star picker that submits its value as the `rating` form field. */
export default function StarRating({
  name = "rating",
  buttonClassName = "p-1 hover:scale-110 transition-transform",
  iconClassName = "text-2xl",
  showLabel = false,
  labelClassName = "text-xs text-on-surface-variant font-semibold ml-2",
}: {
  name?: string;
  buttonClassName?: string;
  iconClassName?: string;
  showLabel?: boolean;
  labelClassName?: string;
}) {
  const [rating, setRating] = useState(5);

  return (
    <div className="flex items-center gap-1" role="radiogroup" aria-label="Calificación">
      <input name={name} type="hidden" value={rating} />
      {[1, 2, 3, 4, 5].map((value) => (
        <button
          key={value}
          aria-checked={rating === value}
          aria-label={`${value} estrella${value > 1 ? "s" : ""}`}
          className={`${buttonClassName} ${value <= rating ? "text-amber-500" : "text-outline-variant"}`}
          onClick={() => setRating(value)}
          role="radio"
          type="button"
        >
          <span className={`material-symbols-outlined ${iconClassName}`} style={{ fontVariationSettings: `'FILL' ${value <= rating ? 1 : 0}` }}>
            star
          </span>
        </button>
      ))}
      {showLabel && <span className={labelClassName}>{labels[rating]}</span>}
    </div>
  );
}
