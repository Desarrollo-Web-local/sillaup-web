"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition, type FormEvent, type ReactNode } from "react";
import type { ContentField, ContentPage, Texts } from "@/lib/content";
import { formatPrice } from "@/lib/products";
import { createBrowserSupabase } from "@/lib/supabase-browser";
import { saveProduct, saveTexts, signOut, type ActionResult } from "./actions";

/** Current values of a product's editable fields (defaults merged with the database row). */
export type ProductForm = {
  slug: string;
  defaultName: string;
  name: string;
  tagline: string;
  summary: string;
  card_summary: string;
  home_summary: string;
  price: number;
  discount_percent: number;
  offer_label: string;
  offer_ends_at: string;
  in_stock: boolean;
  mercado_pago_url: string;
  image_url: string;
  home_image_url: string;
  gallery: string[];
};

type Props = {
  email: string;
  texts: Texts;
  defaults: Texts;
  customized: string[];
  pages: ContentPage[];
  products: ProductForm[];
  loadError?: string;
};

const input =
  "w-full px-4 py-2.5 rounded-xl border border-outline-variant bg-white text-on-surface text-body-sm placeholder:text-outline focus:outline-none focus:border-primary-container focus:ring-4 focus:ring-primary-container/20 transition-all";
const label = "block text-label-md font-label-md text-on-surface mb-1.5";
const hint = "text-xs text-on-surface-variant mt-1";

export default function AdminPanel({ email, texts, defaults, customized, pages, products, loadError }: Props) {
  const [tab, setTab] = useState("products");
  const page = pages.find((p) => p.id === tab);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-brand-night text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-primary-container flex items-center justify-center">
              <span className="material-symbols-outlined text-xl">accessible_forward</span>
            </div>
            <div>
              <p className="font-extrabold leading-tight">SillaUp · Administración</p>
              <p className="text-xs text-white/70">{email}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a className="inline-flex items-center gap-1.5 rounded-full border border-white/30 px-4 py-2 text-sm font-bold hover:bg-white/10" href="/" rel="noopener noreferrer" target="_blank">
              <span className="material-symbols-outlined text-base">open_in_new</span>
              Ver sitio
            </a>
            <form action={signOut}>
              <button className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-2 text-sm font-bold hover:bg-white/20" type="submit">
                <span className="material-symbols-outlined text-base">logout</span>
                Cerrar sesión
              </button>
            </form>
          </div>
        </div>
      </header>

      <div className="flex-1 max-w-7xl w-full mx-auto px-4 md:px-8 py-6 md:py-8 grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-6">
        <nav aria-label="Secciones del panel" className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
          <TabButton active={tab === "products"} icon="sell" onClick={() => setTab("products")}>
            Productos y precios
          </TabButton>
          <p className="hidden lg:block text-xs font-extrabold uppercase tracking-wider text-on-surface-variant mt-4 mb-1 px-3">Textos e imágenes</p>
          {pages.map((p) => (
            <TabButton active={tab === p.id} icon="edit_note" key={p.id} onClick={() => setTab(p.id)}>
              {p.label}
            </TabButton>
          ))}
        </nav>

        <main className="min-w-0">
          {loadError && (
            <p className="mb-4 p-4 rounded-2xl bg-error-container text-on-error-container text-body-sm font-bold" role="alert">
              No se pudieron cargar los cambios guardados: {loadError}
            </p>
          )}
          {page ? (
            <TextsForm customized={customized} defaults={defaults} key={page.id} page={page} texts={texts} />
          ) : (
            <ProductsEditor products={products} />
          )}
        </main>
      </div>
    </div>
  );
}

function TabButton({ active, icon, onClick, children }: { active: boolean; icon: string; onClick: () => void; children: ReactNode }) {
  return (
    <button
      aria-current={active ? "page" : undefined}
      className={`shrink-0 inline-flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-bold text-left transition-colors ${
        active ? "bg-primary-container text-white shadow-sm" : "text-on-surface hover:bg-surface-container"
      }`}
      onClick={onClick}
      type="button"
    >
      <span className="material-symbols-outlined text-lg">{icon}</span>
      {children}
    </button>
  );
}

/** Submits a form to a Server Action and reports the result. */
function useSave(action: (data: FormData) => Promise<ActionResult>) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [result, setResult] = useState<ActionResult | null>(null);
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setResult(null);
    startTransition(async () => {
      const res = await action(data);
      setResult(res);
      if (res.ok) router.refresh();
    });
  };
  return { pending, result, onSubmit };
}

function SaveBar({ pending, result, children = "Guardar y publicar" }: { pending: boolean; result: ActionResult | null; children?: ReactNode }) {
  return (
    <div className="sticky bottom-0 -mx-4 md:mx-0 mt-6 bg-white/95 backdrop-blur border-t md:border border-outline-variant md:rounded-2xl px-4 py-3 flex flex-wrap items-center justify-between gap-3 shadow-lg">
      <p aria-live="polite" className={`text-sm font-bold ${result?.ok === false ? "text-error" : "text-tertiary"}`}>
        {result ? (result.ok ? `✓ ${result.message}: el sitio ya muestra los cambios` : result.error) : ""}
      </p>
      <button
        className="ml-auto inline-flex items-center gap-2 rounded-full bg-primary-container text-white font-bold px-6 py-3 shadow-md hover:bg-primary active:scale-95 transition-all disabled:opacity-60"
        disabled={pending}
        type="submit"
      >
        <span className="material-symbols-outlined text-lg">publish</span>
        {pending ? "Guardando..." : children}
      </button>
    </div>
  );
}

function Card({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="bg-white rounded-2xl border border-outline-variant p-5 md:p-6 shadow-sm">
      <h2 className="text-headline-sm font-headline-sm font-extrabold text-on-surface mb-4">{title}</h2>
      <div className="space-y-5">{children}</div>
    </section>
  );
}

// ---------------------------------------------------------------------------------------------
// Textos

function TextsForm({ page, texts, defaults, customized }: { page: ContentPage; texts: Texts; defaults: Texts; customized: string[] }) {
  const { pending, result, onSubmit } = useSave(saveTexts);
  return (
    <form className="space-y-6" onSubmit={onSubmit}>
      <div>
        <h1 className="text-headline-md font-headline-md font-extrabold text-on-surface">{page.label}</h1>
        <p className="text-body-sm text-on-surface-variant mt-1">
          Edita los textos e imágenes de esta página. Deja un campo vacío o usa «Restablecer» para volver al texto original
        </p>
      </div>
      {page.sections.map((section) => (
        <Card key={section.label} title={section.label}>
          {section.fields.map((field) => (
            <TextField
              customized={customized.includes(field.key)}
              defaultValue={defaults[field.key]}
              field={field}
              initial={texts[field.key]}
              key={field.key}
            />
          ))}
        </Card>
      ))}
      <SaveBar pending={pending} result={result} />
    </form>
  );
}

function TextField({ field, initial, defaultValue, customized }: { field: ContentField; initial: string; defaultValue: string; customized: boolean }) {
  const [value, setValue] = useState(initial);
  const id = `f-${field.key}`;
  const reset = value !== defaultValue && (
    <button className="text-xs font-bold text-primary hover:underline" onClick={() => setValue(defaultValue)} type="button">
      Restablecer
    </button>
  );

  return (
    <div>
      <div className="flex items-center justify-between gap-3 mb-1.5">
        <label className="text-label-md font-label-md text-on-surface" htmlFor={id}>
          {field.label}
          {customized && <span className="ml-2 align-middle text-[10px] font-extrabold uppercase bg-secondary-fixed text-on-secondary-fixed px-2 py-0.5 rounded-full">Editado</span>}
        </label>
        {reset}
      </div>
      {field.kind === "image" ? (
        <ImageInput folder="paginas" id={id} name={field.key} onChange={setValue} value={value} />
      ) : field.kind === "textarea" ? (
        <textarea className={input} id={id} name={field.key} onChange={(e) => setValue(e.target.value)} rows={Math.min(8, Math.max(2, Math.ceil(value.length / 90)))} value={value} />
      ) : (
        <input className={input} id={id} name={field.key} onChange={(e) => setValue(e.target.value)} type="text" value={value} />
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------------------------
// Imágenes

async function uploadImage(file: File, folder: string): Promise<string> {
  const supabase = createBrowserSupabase();
  if (!supabase) throw new Error("Supabase no está configurado");
  const ext = file.name.split(".").pop()?.toLowerCase() ?? "jpg";
  const path = `${folder}/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
  const { error } = await supabase.storage.from("site-images").upload(path, file, { cacheControl: "31536000", contentType: file.type });
  if (error) throw new Error(error.message);
  return supabase.storage.from("site-images").getPublicUrl(path).data.publicUrl;
}

function useUpload(folder: string) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const upload = async (files: FileList | null, onDone: (urls: string[]) => void) => {
    if (!files?.length) return;
    setUploading(true);
    setError("");
    try {
      onDone(await Promise.all([...files].map((file) => uploadImage(file, folder))));
    } catch (e) {
      setError(`No se pudo subir la imagen: ${e instanceof Error ? e.message : "error desconocido"}`);
    } finally {
      setUploading(false);
    }
  };
  return { uploading, error, upload };
}

function UploadButton({ uploading, multiple, onFiles }: { uploading: boolean; multiple?: boolean; onFiles: (files: FileList | null) => void }) {
  return (
    <label className={`inline-flex items-center gap-1.5 rounded-full border border-primary-container text-primary font-bold text-sm px-4 py-2 cursor-pointer hover:bg-primary-container/5 ${uploading ? "opacity-60 pointer-events-none" : ""}`}>
      <span className="material-symbols-outlined text-base">upload</span>
      {uploading ? "Subiendo..." : multiple ? "Subir fotos" : "Subir foto"}
      <input
        accept="image/jpeg,image/png,image/webp,image/avif,image/gif"
        className="sr-only"
        multiple={multiple}
        onChange={(e) => {
          onFiles(e.target.files);
          e.target.value = "";
        }}
        type="file"
      />
    </label>
  );
}

function ImageInput({ id, name, value, onChange, folder }: { id: string; name: string; value: string; onChange: (url: string) => void; folder: string }) {
  const { uploading, error, upload } = useUpload(folder);
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="w-full sm:w-40 h-28 shrink-0 rounded-xl border border-outline-variant bg-surface-container-low overflow-hidden flex items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {value ? <img alt="" className="w-full h-full object-cover" src={value} /> : <span className="text-xs text-outline">Sin imagen</span>}
      </div>
      <div className="flex-1 min-w-0 space-y-2">
        <input className={input} id={id} name={name} onChange={(e) => onChange(e.target.value)} placeholder="https://..." type="url" value={value} />
        <div className="flex flex-wrap items-center gap-3">
          <UploadButton onFiles={(files) => upload(files, ([url]) => onChange(url))} uploading={uploading} />
          <span className={hint}>JPG, PNG o WebP de hasta 8 MB, o pega la dirección de una imagen</span>
        </div>
        {error && <p className="text-xs font-bold text-error">{error}</p>}
      </div>
    </div>
  );
}

function GalleryInput({ initial }: { initial: string[] }) {
  const [urls, setUrls] = useState(initial);
  const [draft, setDraft] = useState("");
  const { uploading, error, upload } = useUpload("productos");
  const move = (from: number, to: number) =>
    setUrls((list) => {
      const next = [...list];
      [next[from], next[to]] = [next[to], next[from]];
      return next;
    });
  const addDraft = () => {
    if (!draft.trim()) return;
    setUrls((list) => [...list, draft.trim()]);
    setDraft("");
  };

  return (
    <div>
      <input name="gallery" type="hidden" value={urls.join("\n")} />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {urls.map((url, i) => (
          <div className="relative rounded-xl border border-outline-variant bg-surface-container-low overflow-hidden" key={`${url}-${i}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt={`Foto ${i + 1}`} className="w-full h-28 object-cover" src={url} />
            {i === 0 && <span className="absolute top-1.5 left-1.5 text-[10px] font-extrabold uppercase bg-primary-container text-white px-2 py-0.5 rounded-full">Principal</span>}
            <div className="flex justify-between bg-white border-t border-outline-variant">
              <button aria-label="Mover a la izquierda" className="p-1.5 disabled:opacity-30" disabled={i === 0} onClick={() => move(i, i - 1)} type="button">
                <span className="material-symbols-outlined text-base">chevron_left</span>
              </button>
              <button aria-label="Quitar foto" className="p-1.5 text-error" onClick={() => setUrls((list) => list.filter((_, j) => j !== i))} type="button">
                <span className="material-symbols-outlined text-base">delete</span>
              </button>
              <button aria-label="Mover a la derecha" className="p-1.5 disabled:opacity-30" disabled={i === urls.length - 1} onClick={() => move(i, i + 1)} type="button">
                <span className="material-symbols-outlined text-base">chevron_right</span>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row gap-2 mt-3">
        <input
          className={input}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              addDraft();
            }
          }}
          placeholder="Pega la dirección de una foto y presiona Agregar"
          type="url"
          value={draft}
        />
        <button className="shrink-0 rounded-full bg-surface-container px-4 py-2 text-sm font-bold hover:bg-surface-container-high" onClick={addDraft} type="button">
          Agregar
        </button>
        <UploadButton multiple onFiles={(files) => upload(files, (added) => setUrls((list) => [...list, ...added]))} uploading={uploading} />
      </div>
      {error && <p className="text-xs font-bold text-error mt-2">{error}</p>}
      <p className={hint}>La primera foto es la que se ve al abrir la ficha. Sin fotos se usan las originales</p>
    </div>
  );
}

// ---------------------------------------------------------------------------------------------
// Productos

function ProductsEditor({ products }: { products: ProductForm[] }) {
  const [slug, setSlug] = useState(products[0].slug);
  const product = products.find((p) => p.slug === slug) ?? products[0];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-headline-md font-headline-md font-extrabold text-on-surface">Productos y precios</h1>
        <p className="text-body-sm text-on-surface-variant mt-1">Precios, ofertas, disponibilidad, fotos y textos principales de cada producto</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {products.map((p) => (
          <button
            className={`rounded-full px-4 py-2 text-sm font-bold border transition-colors ${
              p.slug === slug ? "bg-brand-teal border-brand-teal text-white" : "bg-white border-outline-variant text-on-surface hover:border-brand-teal"
            }`}
            key={p.slug}
            onClick={() => setSlug(p.slug)}
            type="button"
          >
            {p.name}
            {p.discount_percent > 0 && <span className="ml-1.5 text-[10px] font-extrabold bg-error text-white px-1.5 py-0.5 rounded-full">-{p.discount_percent}%</span>}
          </button>
        ))}
      </div>
      {/* key: a fresh form (and state) per product */}
      <ProductFormView key={product.slug} product={product} />
    </div>
  );
}

function ProductFormView({ product }: { product: ProductForm }) {
  const { pending, result, onSubmit } = useSave(saveProduct);
  const [price, setPrice] = useState(String(product.price));
  const [discount, setDiscount] = useState(String(product.discount_percent || ""));
  const [image, setImage] = useState(product.image_url);
  const [homeImage, setHomeImage] = useState(product.home_image_url);

  const priceValue = Number(price.replace(/[^\d]/g, ""));
  const discountValue = Number(discount) || 0;
  const sale = Math.round((priceValue * (100 - discountValue)) / 100 / 10) * 10;

  return (
    <form className="space-y-6" onSubmit={onSubmit}>
      <input name="slug" type="hidden" value={product.slug} />

      <Card title="Precio y oferta">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className={label} htmlFor="price">Precio normal (CLP, IVA incluido)</label>
            <input className={input} id="price" inputMode="numeric" name="price" onChange={(e) => setPrice(e.target.value)} required value={price} />
            <p className={hint}>Solo números, por ejemplo 390000</p>
          </div>
          <div>
            <label className={label} htmlFor="discount_percent">Descuento (%)</label>
            <input className={input} id="discount_percent" max={90} min={0} name="discount_percent" onChange={(e) => setDiscount(e.target.value)} placeholder="0 = sin oferta" type="number" value={discount} />
          </div>
          <div>
            <label className={label} htmlFor="offer_label">Nombre de la oferta</label>
            <input className={input} defaultValue={product.offer_label} id="offer_label" maxLength={60} name="offer_label" placeholder="Ej. Cyber Day, Oferta de lanzamiento" />
          </div>
          <div>
            <label className={label} htmlFor="offer_ends_at">La oferta termina el (opcional)</label>
            <input className={input} defaultValue={product.offer_ends_at} id="offer_ends_at" name="offer_ends_at" type="date" />
            <p className={hint}>Incluye ese día. Después vuelve sola al precio normal</p>
          </div>
        </div>
        <div className="rounded-xl bg-surface-container-low border border-outline-variant p-4 text-sm">
          <span className="font-bold text-on-surface-variant">Así se verá: </span>
          {priceValue > 0 ? (
            discountValue > 0 ? (
              <>
                <s className="text-on-surface-variant">{formatPrice(priceValue)}</s>{" "}
                <strong className="text-on-surface text-base">{formatPrice(sale)}</strong>{" "}
                <span className="font-extrabold text-error">-{discountValue}%</span>
              </>
            ) : (
              <strong className="text-on-surface text-base">{formatPrice(priceValue)}</strong>
            )
          ) : (
            <span className="text-error font-bold">ingresa un precio</span>
          )}
        </div>
      </Card>

      <Card title="Venta y disponibilidad">
        <label className="flex items-center gap-3 cursor-pointer">
          <input className="w-5 h-5 rounded text-primary-container focus:ring-primary-container" defaultChecked={product.in_stock} name="in_stock" type="checkbox" />
          <span className="text-label-md font-label-md text-on-surface">En stock (si no, la ficha muestra «Consultar stock»)</span>
        </label>
        <div>
          <label className={label} htmlFor="mercado_pago_url">Link de pago de Mercado Pago</label>
          <input className={input} defaultValue={product.mercado_pago_url} id="mercado_pago_url" name="mercado_pago_url" placeholder="https://mpago.la/..." type="url" />
          <p className={hint}>
            Vacío: la compra se coordina por WhatsApp. El monto del link se define en Mercado Pago: si cambias el precio o aplicas un descuento, crea un link nuevo con el monto final
          </p>
        </div>
      </Card>

      <Card title="Textos">
        <div>
          <label className={label} htmlFor="name">Nombre</label>
          <input className={input} defaultValue={product.name} id="name" maxLength={120} name="name" placeholder={product.defaultName} />
        </div>
        <div>
          <label className={label} htmlFor="tagline">Frase destacada (ficha)</label>
          <input className={input} defaultValue={product.tagline} id="tagline" maxLength={300} name="tagline" />
        </div>
        <div>
          <label className={label} htmlFor="summary">Descripción (ficha)</label>
          <textarea className={input} defaultValue={product.summary} id="summary" maxLength={1000} name="summary" rows={3} />
        </div>
        <div>
          <label className={label} htmlFor="card_summary">Descripción corta (catálogo y «Otros productos»)</label>
          <textarea className={input} defaultValue={product.card_summary} id="card_summary" maxLength={500} name="card_summary" rows={2} />
        </div>
        <div>
          <label className={label} htmlFor="home_summary">Descripción corta (carrusel de inicio)</label>
          <textarea className={input} defaultValue={product.home_summary} id="home_summary" maxLength={500} name="home_summary" rows={2} />
        </div>
      </Card>

      <Card title="Fotos">
        <div>
          <p className={label}>Foto del catálogo</p>
          <ImageInput folder="productos" id="image_url" name="image_url" onChange={setImage} value={image} />
        </div>
        <div>
          <p className={label}>Foto del carrusel de inicio</p>
          <ImageInput folder="productos" id="home_image_url" name="home_image_url" onChange={setHomeImage} value={homeImage} />
        </div>
        <div>
          <p className={label}>Galería de la ficha</p>
          <GalleryInput initial={product.gallery} />
        </div>
      </Card>

      <SaveBar pending={pending} result={result}>
        Guardar producto
      </SaveBar>
    </form>
  );
}
