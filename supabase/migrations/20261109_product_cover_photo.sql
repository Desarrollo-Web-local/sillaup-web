-- Un solo conjunto de fotos por producto, con la primera como foto de portada.
-- Reemplaza las fotos separadas por uso (catálogo / carrusel de inicio / galería de la ficha).

-- 1. La foto de catálogo que se había subido pasa a ser la portada (primera del arreglo).
--    Si el producto no tenía galería propia, se completa con las demás fotos al guardar desde el panel.
update public.product_overrides
set gallery = (
  select jsonb_agg(url order by ord)
  from (
    select url, min(ord) as ord
    from (
      select image_url as url, 0 as ord where image_url is not null
      union all
      select value #>> '{}', ordinality from jsonb_array_elements(coalesce(gallery, '[]'::jsonb)) with ordinality
      union all
      select home_image_url, 1000 where home_image_url is not null
    ) all_urls
    group by url
  ) deduped
)
where image_url is not null or home_image_url is not null;

-- 2. Columnas que ya no se usan (aplicar después de desplegar el código nuevo).
alter table public.product_overrides drop column if exists image_url;
alter table public.product_overrides drop column if exists home_image_url;

alter table public.product_overrides drop constraint if exists product_overrides_gallery_check;
alter table public.product_overrides add constraint product_overrides_gallery_check
  check (gallery is null or (jsonb_typeof(gallery) = 'array' and jsonb_array_length(gallery) <= 12));
