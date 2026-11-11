-- Videos de reseñas (Testimonios): el bucket de imágenes del panel también acepta videos.
-- Límite por archivo: 50 MB (el panel valida 8 MB para imágenes y 50 MB para videos).
-- Las fotos reales de cada producto y la lista de videos se guardan en public.site_content
-- (claves product.realPhotos.<slug> y testimonials.videos), sin columnas nuevas.
update storage.buckets
set file_size_limit = 52428800,
    allowed_mime_types = array[
      'image/jpeg','image/png','image/webp','image/avif','image/gif',
      'video/mp4','video/webm','video/quicktime'
    ]
where id = 'site-images';
