
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
  experimental: {
    
  },
  allowedDevOrigins: [
    "https://9000-firebase-studio-1753663047046.cluster-73qgvk7hjjadkrjeyexca5ivva.cloudworkstations.dev",
    "https://6000-firebase-studio-1753663047046.cluster-73qgvk7hjjadkrjeyexca5ivva.cloudworkstations.dev"
  ],
};

export default nextConfig;
