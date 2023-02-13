import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig ({
	plugins: [react({ plugins: [["@swc/plugin-styled-components", {}]]})],
	server: {
		port: 4000
	},
	root: "./src",
	publicDir: "./src/public"
})