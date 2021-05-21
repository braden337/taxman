import { defineConfig } from "vite";
import svelte from "@sveltejs/vite-plugin-svelte";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    VitePWA({
      manifest: {
        background_color: "#000000",
        icons: [
          {
            src: "Taxman.png",
            sizes: "256x256",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
