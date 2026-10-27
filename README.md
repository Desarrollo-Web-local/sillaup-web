# SillaUp — sitio web

Rediseño del sitio de SillaUp (dispositivos de movilidad asistida, fabricación chilena), migrado desde las pantallas de Google Stitch a **Next.js 16 + Tailwind CSS 3**.

## Desarrollo local

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producción
npm run lint
```

## Rutas

| Ruta | Pantalla de Stitch |
|---|---|
| `/` | sillaup_inicio_home |
| `/productos` | sillaup_productos_cat_logo |
| `/productos/grua-electrica` | sillaup_ficha_de_producto_gr_a_el_ctrica |
| `/nosotros` | sillaup_nosotros |
| `/testimonios` | sillaup_testimonios |
| `/preguntas-frecuentes` | sillaup_preguntas_frecuentes |
| `/contacto` | sillaup_contacto |

## Estructura

- `src/app/(site)/` — páginas públicas y su layout (barra superior, encabezado, pie, botón de WhatsApp).
- `src/app/admin/` — panel de administración (CMS).
- `src/app/actions.ts` — Server Actions de los formularios.
- `src/components/pages/` — contenido de cada página.
- `src/lib/site.ts` — datos de contacto y navegación.
- `src/lib/content.ts` — textos e imágenes editables desde el panel, con sus valores por defecto.
- `src/lib/products.ts` — catálogo de productos (valores por defecto).
- `src/lib/cms.ts` — combina los valores por defecto con los cambios guardados en Supabase.
- `tailwind.config.ts` — tokens de diseño exportados de Stitch.
- `supabase/schema.sql` — tablas `contact_messages` y `testimonials` con RLS.
- `supabase/cms.sql` — tablas del panel (`site_content`, `product_overrides`, `admin_users`) y bucket de fotos `site-images`.

## Supabase

1. Ejecuta `supabase/schema.sql` y luego `supabase/cms.sql` en el SQL Editor del proyecto.
2. Copia `.env.example` a `.env.local` y completa `NEXT_PUBLIC_SUPABASE_URL` y `NEXT_PUBLIC_SUPABASE_ANON_KEY`.

Sin estas variables, los formularios funcionan igual pero solo registran el envío en la consola del servidor.

## Panel de administración (`/admin`)

Permite editar sin tocar código los textos de cada página, las imágenes de portada y, por producto: precio, descuento y oferta (con fecha de término opcional), stock, link de Mercado Pago, textos y fotos. Al guardar, el sitio público se actualiza al instante (la caché se invalida y las pestañas abiertas se refrescan vía Supabase Realtime).

Para dar acceso a una persona:

1. Supabase → Authentication → Users → **Add user** (correo y contraseña, marcando *Auto Confirm User*).
2. En el SQL Editor: `insert into public.admin_users (email) values (correo@ejemplo.cl);`

Solo los correos de `admin_users` pueden entrar al panel y modificar datos (protegido con RLS).

## Vercel

Importa el repositorio en Vercel (framework: Next.js) y define las mismas variables de entorno más `NEXT_PUBLIC_SITE_URL`.
