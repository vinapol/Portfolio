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

export default defineConfig({
  plugins: [react(), inlineCss(), gzipPreview()],
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
