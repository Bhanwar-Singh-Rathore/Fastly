import type { NextConfig } from "next";
import { uploadthingPlugin } from "uploadthing/tw";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'uploadthing.com',
      'utfs.io',
      'img.clerk.com'
    ]
  },
  typescript: {
    ignoreBuildErrors: true
  },
  reactStrictMode: false,
};

export default nextConfig;
