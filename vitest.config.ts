import { resolve } from "node:path";
import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        environment: "jsdom",
        include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
        exclude: ["node_modules", "dist"],
        // setupFiles: "./src/test/setup.ts",
        globals: true
    },
    resolve: {
        alias: [{ find: "@", replacement: resolve(__dirname, "./src") }]
    }
});
