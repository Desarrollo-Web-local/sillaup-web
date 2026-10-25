import { site } from "@/lib/site";

/** Interactive Google Map (zoom, drag) pinned on the showroom. Fills its positioned parent. */
export default function ShowroomMap() {
  return (
    <iframe
      allowFullScreen
      className="absolute inset-0 w-full h-full border-0"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      src={site.mapsEmbedUrl}
      title={`Mapa del showroom SillaUp: ${site.address}`}
    ></iframe>
  );
}
