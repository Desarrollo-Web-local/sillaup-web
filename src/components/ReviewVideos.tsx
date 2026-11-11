import { videoSource } from "@/lib/video";

/** One review video, 16:9, either an uploaded file or a YouTube/Vimeo embed. */
export function ReviewVideo({ url, title }: { url: string; title: string }) {
  const video = videoSource(url);
  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-brand-night border border-outline-variant shadow-sm">
      {video.kind === "embed" ? (
        <iframe
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          src={video.src}
          title={title}
        />
      ) : (
        <video aria-label={title} className="absolute inset-0 w-full h-full object-contain bg-black" controls playsInline preload="metadata" src={video.src} />
      )}
    </div>
  );
}

/** Grid of customer review videos; renders nothing when the admin has not added any. */
export default function ReviewVideos({ urls, className = "" }: { urls: string[]; className?: string }) {
  if (!urls.length) return null;
  const single = urls.length === 1;
  return (
    <div className={`grid gap-6 ${single ? "grid-cols-1 max-w-3xl mx-auto" : "grid-cols-1 md:grid-cols-2"} ${className}`}>
      {urls.map((url, i) => (
        <ReviewVideo key={url} title={`Video de reseña de cliente SillaUp ${i + 1}`} url={url} />
      ))}
    </div>
  );
}
