import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import deno from "@deno/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import flowbiteReact from "flowbite-react/plugin/vite";

import "react";
import "react-dom";

export default defineConfig({
  root: "./client",
  server: {
    port: 3000,
  },
  plugins: [
    react(),
    tailwindcss(),
    deno(),
    flowbiteReact(),
  ],
  optimizeDeps: {
    include: ["react/jsx-runtime"],
  },
});
