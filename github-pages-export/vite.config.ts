import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Relative assets work on both /69-labs-studio/ and a future custom domain.
  base: "./",
  plugins: [react()],
});
