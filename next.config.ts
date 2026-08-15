import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.1.72'],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i0.wp.com",
        port: "",
      }
    ]
  }
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
