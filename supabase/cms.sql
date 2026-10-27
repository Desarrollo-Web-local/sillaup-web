-- SillaUp: panel de administración (CMS).
-- Ejecutar en Supabase > SQL Editor (o como migración) después de schema.sql.
-- Para dar acceso a una persona: créala en Authentication > Users y luego
--   insert into public.admin_users (email) values ('correo@ejemplo.cl');

-- Administradores del panel: correos autorizados a editar contenido
create table if not exists public.admin_users (
  email text primary key check (email = lower(email)),
  created_at timestamptz not null default now()
);
alter table public.admin_users enable row level security;

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1 from public.admin_users
    where email = lower(coalesce(auth.jwt() ->> 'email', ''))
  );
$$;
-- Solo dice si quien llama es admin; el panel lo usa para autorizar el acceso
revoke execute on function public.is_admin() from public, anon;
grant execute on function public.is_admin() to authenticated;

drop policy if exists "admins can read admin list" on public.admin_users;
create policy "admins can read admin list" on public.admin_users
  for select to authenticated using ((select public.is_admin()));

-- Textos e imágenes editables del sitio (clave -> valor). Sin fila = valor por defecto del código.
create table if not exists public.site_content (
  key text primary key check (char_length(key) between 1 and 120),
  value text not null check (char_length(value) <= 5000),
  updated_at timestamptz not null default now()
);
alter table public.site_content enable row level security;

drop policy if exists "site content is public" on public.site_content;
create policy "site content is public" on public.site_content
  for select to anon, authenticated using (true);
drop policy if exists "admins manage site content" on public.site_content;
create policy "admins manage site content" on public.site_content
  for all to authenticated
  using ((select public.is_admin())) with check ((select public.is_admin()));

-- Ajustes por producto (precio, oferta, imágenes, textos). Columnas null = valor por defecto del código.
create table if not exists public.product_overrides (
  slug text primary key check (slug in ('grua-electrica','elevador-de-inodoro','grua-manual','elevador-multiuso','elevador-de-cama')),
  name text check (char_length(name) <= 120),
  tagline text check (char_length(tagline) <= 300),
  summary text check (char_length(summary) <= 1000),
  card_summary text check (char_length(card_summary) <= 500),
  home_summary text check (char_length(home_summary) <= 500),
  price integer check (price >= 0),
  discount_percent smallint check (discount_percent between 0 and 90),
  offer_label text check (char_length(offer_label) <= 60),
  offer_ends_at date,
  in_stock boolean,
  mercado_pago_url text check (char_length(mercado_pago_url) <= 500),
  image_url text check (char_length(image_url) <= 1000),
  home_image_url text check (char_length(home_image_url) <= 1000),
  gallery jsonb check (gallery is null or jsonb_typeof(gallery) = 'array'),
  updated_at timestamptz not null default now()
);
alter table public.product_overrides enable row level security;

drop policy if exists "product overrides are public" on public.product_overrides;
create policy "product overrides are public" on public.product_overrides
  for select to anon, authenticated using (true);
drop policy if exists "admins manage product overrides" on public.product_overrides;
create policy "admins manage product overrides" on public.product_overrides
  for all to authenticated
  using ((select public.is_admin())) with check ((select public.is_admin()));

-- Tiempo real: el sitio público escucha cambios para refrescarse solo
do $$
begin
  if not exists (select 1 from pg_publication_tables where pubname = 'supabase_realtime' and tablename = 'site_content') then
    alter publication supabase_realtime add table public.site_content;
  end if;
  if not exists (select 1 from pg_publication_tables where pubname = 'supabase_realtime' and tablename = 'product_overrides') then
    alter publication supabase_realtime add table public.product_overrides;
  end if;
end $$;

-- Bucket público para fotos subidas desde el panel
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('site-images', 'site-images', true, 8388608, array['image/jpeg','image/png','image/webp','image/avif','image/gif'])
on conflict (id) do update set public = true, file_size_limit = excluded.file_size_limit, allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "admins upload site images" on storage.objects;
create policy "admins upload site images" on storage.objects
  for insert to authenticated
  with check (bucket_id = 'site-images' and (select public.is_admin()));
drop policy if exists "admins update site images" on storage.objects;
create policy "admins update site images" on storage.objects
  for update to authenticated
  using (bucket_id = 'site-images' and (select public.is_admin()));
drop policy if exists "admins delete site images" on storage.objects;
create policy "admins delete site images" on storage.objects
  for delete to authenticated
  using (bucket_id = 'site-images' and (select public.is_admin()));
