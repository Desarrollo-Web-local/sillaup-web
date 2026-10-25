-- SillaUp: tablas para los formularios del sitio.
-- Ejecutar en Supabase > SQL Editor (o como migración).

create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null check (char_length(name) between 1 and 120),
  email text not null check (char_length(email) between 3 and 160),
  phone text check (char_length(phone) <= 40),
  interest text check (char_length(interest) <= 120),
  message text not null check (char_length(message) between 1 and 2000),
  source text check (char_length(source) <= 60)
);

create table if not exists public.testimonials (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null check (char_length(name) between 1 and 120),
  product text not null check (char_length(product) between 1 and 120),
  rating smallint not null check (rating between 1 and 5),
  comment text not null check (char_length(comment) between 1 and 1000),
  approved boolean not null default false
);

alter table public.contact_messages enable row level security;
alter table public.testimonials enable row level security;

-- Visitors may submit, but never read, contact messages.
drop policy if exists "anon can insert contact messages" on public.contact_messages;
create policy "anon can insert contact messages"
  on public.contact_messages for insert to anon
  with check (true);

-- Testimonials are submitted unapproved; only approved ones are public.
drop policy if exists "anon can submit testimonials" on public.testimonials;
create policy "anon can submit testimonials"
  on public.testimonials for insert to anon
  with check (approved = false);

drop policy if exists "approved testimonials are public" on public.testimonials;
create policy "approved testimonials are public"
  on public.testimonials for select to anon
  using (approved = true);
