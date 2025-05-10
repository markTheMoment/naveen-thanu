import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/naveen-thanu", // IMPORTANT
  server: {
    allowedHosts: [
      "localhost",
      "https://markTheMoment.github.io/naveen-thanu/", // replace with your exact ngrok host
    ],
  },
});
