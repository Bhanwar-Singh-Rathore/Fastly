import type { NextConfig } from "next";
import { uploadthingPlugin } from "uploadthing/tw";

const nextConfig: NextConfig = {
  images:{
    domains:[
      'uploadthing.com',
      'utfs.io',
      'img.clerk.com'

    ]
  },
  reactStrictMode:false
};

export default nextConfig;
