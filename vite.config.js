import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/marriageInvitation-Naveen-Thanu/", // IMPORTANT
  server: {
    allowedHosts: [
      "localhost",
      "34f1-2401-4900-91fa-66fd-a84a-c826-761c-a423.ngrok-free.app", // replace with your exact ngrok host
    ],
  },
});
