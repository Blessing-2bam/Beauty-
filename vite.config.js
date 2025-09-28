import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
  plugins: [
    react(),

    // Image optimizer plugin
    ViteImageOptimizer({
      // Target formats
      png: { quality: 80 },  // compress PNGs
      jpeg: { quality: 80 }, // compress JPEGs
      jpg: { quality: 80 },  // compress JPGs
      webp: { quality: 80 }, // generate WebP for modern browsers
      avif: { quality: 50 }, // optional: generate AVIF
      gifsicle: { optimizationLevel: 3 }, // for GIFs
      svgo: true, // for SVG files
      // Optional: you can set a directory for optimized images
      // outputDir: 'public/optimized-images'
    }),
  ],

  // Important if deploying to a GitHub Pages subfolder
 base: process.env.NODE_ENV === "production" ? "/Beauty-/" : "/",
});

