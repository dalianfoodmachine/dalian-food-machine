import { defineConfig } from "@playwright/test";

// API checks run against the built Worker, without downloading a browser.
export default defineConfig({
  testDir: "./e2e/cloudflare",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: 2,
  reporter: "list",
  use: {
    baseURL: "http://127.0.0.1:8788",
  },
  webServer: {
    command: "pnpm exec wrangler dev --env preview --local --port 8788",
    url: "http://127.0.0.1:8788/zh-TW",
    reuseExistingServer: false,
    timeout: 60_000,
  },
});
