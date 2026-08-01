import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /*
    Dev-only. Next blocks cross-origin requests to /_next/* dev resources by
    default, so opening the dev server from a phone on the LAN (rather than
    localhost) fails to load the client bundle — the page renders from SSR HTML
    but never hydrates, leaving every interaction dead.

    Private ranges only; this has no effect on a production build.
  */
  allowedDevOrigins: [
    "192.168.18.3",
    "192.168.*.*",
    "10.*.*.*",
    "172.*.*.*",
    "*.local",
  ],
};

export default nextConfig;
