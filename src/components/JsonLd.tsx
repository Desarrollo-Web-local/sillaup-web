/** Structured data (schema.org) for search engines. `<` is escaped so the JSON can't close the script tag. */
export default function JsonLd({ data }: { data: object | object[] }) {
  return <script dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} type="application/ld+json" />;
}
