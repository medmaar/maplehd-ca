import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  eslint: { ignoreDuringBuilds: true },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host" as const, value: "www.maplehd.ca" }],
        destination: "https://maplehd.ca/:path*",
        permanent: true,
      },
    ];
  },
  output: "export",
};
export default nextConfig;
