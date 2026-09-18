import compression from "compression";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";

function inlineCss() {
  return {
    name: "inline-css",
    apply: "build",
    transformIndexHtml: {
      order: "post",
      handler(html, ctx) {
        if (!ctx.bundle) return html;
        let css = "";
        for (const asset of Object.values(ctx.bundle)) {
          if (asset.type === "asset" && asset.fileName.endsWith(".css")) {
            css += asset.source;
          }
        }
        if (!css) return html;
        return html.replace(/<link rel="stylesheet"[\s\S]*?>/, `<style>${css}</style>`);
      },
    },
  };
}

function gzipPreview() {
  return {
    name: "gzip-preview",
    configurePreviewServer(server) {
      server.middlewares.use(compression());
    },
  };
}

// Pages GitHub sert le site sous /Portfolio/. Le preview Vite sert dist à la racine.
const base = process.env.GITHUB_ACTIONS ? "/Portfolio/" : "/";

function syncScssBase() {
  return {
    name: "sync-scss-asset-base",
    enforce: "pre",
    transform(code, id) {
      if (!id.replace(/\\/g, "/").endsWith("/src/styles/_variables.scss")) {
        return null;
      }
      return {
        code: code.replace(/\$asset-base:\s*"[^"]*";/, `$asset-base: "${base}";`),
        map: null,
      };
    },
  };
}

function prefixPublicUrlsInCss() {
  return {
    name: "prefix-public-urls-in-css",
    apply: "build",
    generateBundle(_opts, bundle) {
      if (base === "/") return;
      const prefix = base.replace(/\/$/, "");
      for (const item of Object.values(bundle)) {
        if (item.type !== "asset" || !item.fileName.endsWith(".css")) continue;
        item.source = String(item.source).replaceAll(
          "url(/fonts/",
          `url(${prefix}/fonts/`,
        );
      }
    },
  };
}

export default defineConfig({
  base,
  plugins: [react(), syncScssBase(), prefixPublicUrlsInCss(), inlineCss(), gzipPreview()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  preview: {
    port: 4173,
  },
  build: {
    target: "es2022",
    cssMinify: true,
    modulePreload: false,
  },
});
