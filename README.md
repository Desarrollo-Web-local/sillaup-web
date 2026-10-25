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

- `src/app/` — rutas, layout (barra superior, encabezado, pie, botón de WhatsApp) y Server Actions de formularios (`actions.ts`).
- `src/components/pages/` — contenido de cada página.
- `src/lib/site.ts` — datos de contacto y navegación.
- `tailwind.config.ts` — tokens de diseño exportados de Stitch.
- `supabase/schema.sql` — tablas `contact_messages` y `testimonials` con RLS.

## Supabase

1. Ejecuta `supabase/schema.sql` en el SQL Editor del proyecto.
2. Copia `.env.example` a `.env.local` y completa `NEXT_PUBLIC_SUPABASE_URL` y `NEXT_PUBLIC_SUPABASE_ANON_KEY`.

Sin estas variables, los formularios funcionan igual pero solo registran el envío en la consola del servidor.

## Vercel

Importa el repositorio en Vercel (framework: Next.js) y define las mismas variables de entorno más `NEXT_PUBLIC_SITE_URL`.
