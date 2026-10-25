import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";
import containerQueries from "@tailwindcss/container-queries";

// Design tokens exported from Google Stitch (see stitch_sillaup_website_redesign/sillaup_mobility/DESIGN.md)
const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      "colors": {
        "background": "#f7f9ff",
        "brand-blue": "#1A6CDE",
        "brand-border": "#DADADB",
        "brand-night": "#0D141A",
        "brand-teal": "#174A5A",
        "brand-whatsapp": "#25D366",
        "error": "#ba1a1a",
        "error-container": "#ffdad6",
        "inverse-on-surface": "#ebf1fa",
        "inverse-primary": "#aec6ff",
        "inverse-surface": "#2a3138",
        "on-background": "#151c23",
        "on-error": "#ffffff",
        "on-error-container": "#93000a",
        "on-primary": "#ffffff",
        "on-primary-container": "#f4f5ff",
        "on-primary-fixed": "#001a42",
        "on-primary-fixed-variant": "#004395",
        "on-secondary": "#ffffff",
        "on-secondary-container": "#3a697a",
        "on-secondary-fixed": "#001f28",
        "on-secondary-fixed-variant": "#1a4c5d",
        "on-surface": "#151c23",
        "on-surface-variant": "#424753",
        "on-tertiary": "#ffffff",
        "on-tertiary-container": "#dbffdb",
        "on-tertiary-fixed": "#002109",
        "on-tertiary-fixed-variant": "#005322",
        "outline": "#727785",
        "outline-variant": "#c2c6d6",
        "primary": "#0054b6",
        "primary-container": "#1a6cde",
        "primary-fixed": "#d8e2ff",
        "primary-fixed-dim": "#aec6ff",
        "secondary": "#366475",
        "secondary-container": "#b7e7fb",
        "secondary-fixed": "#baeafd",
        "secondary-fixed-dim": "#9fcee1",
        "surface": "#f7f9ff",
        "surface-bright": "#f7f9ff",
        "surface-container": "#e8eef7",
        "surface-container-high": "#e2e9f2",
        "surface-container-highest": "#dce3ec",
        "surface-container-low": "#eef4fd",
        "surface-container-lowest": "#ffffff",
        "surface-dim": "#d4dbe3",
        "surface-tint": "#005ac2",
        "surface-variant": "#dce3ec",
        "tertiary": "#00662c",
        "tertiary-container": "#008239",
        "tertiary-fixed": "#66ff8e",
        "tertiary-fixed-dim": "#3de273",
        "whatsapp": "#25D366"
      },
      "borderRadius": {
        "DEFAULT": "1rem",
        "full": "9999px",
        "lg": "2rem",
        "xl": "3rem"
      },
      "spacing": {
        "gutter": "1.5rem",
        "gutter-mobile": "1rem",
        "margin": "3rem",
        "margin-mobile": "1.25rem",
        "space-lg": "2rem",
        "space-md": "1.25rem",
        "space-sm": "0.75rem",
        "space-xl": "3.5rem",
        "space-xs": "0.375rem"
      },
      "fontFamily": {
        "body-lg": [
          "var(--font-mulish)",
          "var(--font-jakarta)",
          "sans-serif"
        ],
        "body-md": [
          "var(--font-mulish)",
          "var(--font-jakarta)",
          "sans-serif"
        ],
        "body-sm": [
          "var(--font-mulish)",
          "var(--font-jakarta)",
          "sans-serif"
        ],
        "display-lg": [
          "var(--font-mulish)",
          "var(--font-jakarta)",
          "sans-serif"
        ],
        "display-lg-mobile": [
          "var(--font-mulish)",
          "var(--font-jakarta)",
          "sans-serif"
        ],
        "headline-lg": [
          "var(--font-mulish)",
          "var(--font-jakarta)",
          "sans-serif"
        ],
        "headline-lg-mobile": [
          "var(--font-mulish)",
          "var(--font-jakarta)",
          "sans-serif"
        ],
        "headline-md": [
          "var(--font-mulish)",
          "var(--font-jakarta)",
          "sans-serif"
        ],
        "headline-sm": [
          "var(--font-mulish)",
          "var(--font-jakarta)",
          "sans-serif"
        ],
        "label-lg": [
          "var(--font-mulish)",
          "var(--font-jakarta)",
          "sans-serif"
        ],
        "label-md": [
          "var(--font-mulish)",
          "var(--font-jakarta)",
          "sans-serif"
        ],
        "label-sm": [
          "var(--font-mulish)",
          "var(--font-jakarta)",
          "sans-serif"
        ]
      },
      "fontSize": {
        "body-lg": [
          "1.125rem",
          {
            "lineHeight": "1.75rem",
            "fontWeight": "400"
          }
        ],
        "body-md": [
          "1rem",
          {
            "lineHeight": "1.5rem",
            "fontWeight": "400"
          }
        ],
        "body-sm": [
          "0.875rem",
          {
            "lineHeight": "1.375rem",
            "fontWeight": "500"
          }
        ],
        "display-lg": [
          "3.5rem",
          {
            "lineHeight": "4rem",
            "letterSpacing": "-0.03em",
            "fontWeight": "800"
          }
        ],
        "display-lg-mobile": [
          "2.25rem",
          {
            "lineHeight": "2.75rem",
            "letterSpacing": "-0.02em",
            "fontWeight": "800"
          }
        ],
        "headline-lg": [
          "2.5rem",
          {
            "lineHeight": "3rem",
            "letterSpacing": "-0.02em",
            "fontWeight": "800"
          }
        ],
        "headline-lg-mobile": [
          "1.75rem",
          {
            "lineHeight": "2.25rem",
            "letterSpacing": "-0.015em",
            "fontWeight": "800"
          }
        ],
        "headline-md": [
          "1.75rem",
          {
            "lineHeight": "2.25rem",
            "letterSpacing": "-0.015em",
            "fontWeight": "700"
          }
        ],
        "headline-sm": [
          "1.25rem",
          {
            "lineHeight": "1.75rem",
            "letterSpacing": "-0.01em",
            "fontWeight": "700"
          }
        ],
        "label-lg": [
          "1rem",
          {
            "lineHeight": "1.5rem",
            "letterSpacing": "0.01em",
            "fontWeight": "700"
          }
        ],
        "label-md": [
          "0.875rem",
          {
            "lineHeight": "1.25rem",
            "letterSpacing": "0.02em",
            "fontWeight": "700"
          }
        ],
        "label-sm": [
          "0.75rem",
          {
            "lineHeight": "1rem",
            "letterSpacing": "0.04em",
            "fontWeight": "800"
          }
        ]
      },
      "boxShadow": {
        "level-1": "0 4px 20px -2px rgba(13, 20, 26, 0.05)",
        "level-2": "0 12px 32px -4px rgba(13, 20, 26, 0.08)",
        "level-3": "0 16px 40px -6px rgba(13, 20, 26, 0.16)"
      }
    },
  },
  plugins: [forms, containerQueries],
};

export default config;
