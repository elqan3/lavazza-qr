import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lkeyysbvuvdpbohufsvn.supabase.co",
      },
    ],
  },
};

export default nextConfig;