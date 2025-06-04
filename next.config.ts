import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images:{
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ]
  },
  allowedDevOrigins: [
    '192.168.254.101',
    'http://localhost:5173',
  ],
  experimental: {
      scrollRestoration: true,
  }
};

export default nextConfig;
