import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    TanStackRouterVite(),
    // VitePWA({
    //   registerType: "autoUpdate",
    //   includeAssets: ["favicon.ico", "apple-touch-icon.png"],
    //   injectRegister: "auto",
    //   manifest: {
    //     name: "Rhythmate",
    //     short_name: "Rhythmate",
    //     description: "ゲーム感覚で習慣化を達成できるRhtymateというWebアプリです。",
    //     start_url: "/",
    //     theme_color: "#FFFFFF",
    //     background_color: "#D9D9D9",
    //     lang: "ja",
    //     icons: [
    //       {
    //         src: "/icons/rhyth-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/icons/rhyth-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/icons/rhyth-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //         purpose: "any",
    //       },
    //       {
    //         src: "/icons/rhyth-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //         purpose: "maskable",
    //       },
    //     ],
    //   },
    // }),
  ],
});
