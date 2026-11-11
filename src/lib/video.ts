/** A review video: an uploaded file (played with <video>) or a YouTube/Vimeo link (embedded). */
export type VideoSource = { kind: "file"; src: string } | { kind: "embed"; src: string; provider: "youtube" | "vimeo" };

export const VIDEO_MIME_TYPES = ["video/mp4", "video/webm", "video/quicktime"];

/** Turns a stored video URL into something the page can play. */
export function videoSource(url: string): VideoSource {
  try {
    const u = new URL(url);
    const host = u.hostname.replace(/^www\.|^m\./, "");
    if (host === "youtu.be") return youtube(u.pathname.slice(1));
    if (host === "youtube.com" || host === "youtube-nocookie.com") {
      const id = u.searchParams.get("v") ?? u.pathname.match(/^\/(?:embed|shorts|live)\/([\w-]+)/)?.[1];
      if (id) return youtube(id);
    }
    if (host === "vimeo.com" || host === "player.vimeo.com") {
      const id = u.pathname.match(/(\d{6,})/)?.[1];
      if (id) return { kind: "embed", provider: "vimeo", src: `https://player.vimeo.com/video/${id}` };
    }
  } catch {
    // Not a valid URL: treat it as a file and let the browser report it
  }
  return { kind: "file", src: url };
}

const youtube = (id: string): VideoSource => ({
  kind: "embed",
  provider: "youtube",
  src: `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?rel=0`,
});

/** Newline-separated list (as stored in site_content) → URLs. */
export const videoList = (value: string) =>
  value
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
