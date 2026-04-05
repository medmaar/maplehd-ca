import type { NextConfig } from "next";
import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";

if (process.env.NODE_ENV === "development") {
  await setupDevPlatform();
}

const nextConfig: NextConfig = {
  eslint: { ignoreDuringBuilds: true },
  async redirects() {
    return [
      { source: "/pricing/1-month",   destination: "/1-month",   permanent: true },
      { source: "/pricing/3-months",  destination: "/3-months",  permanent: true },
      { source: "/pricing/6-months",  destination: "/6-months",  permanent: true },
      { source: "/pricing/12-months", destination: "/12-months", permanent: true },
    ];
  },
};

export default nextConfig;
