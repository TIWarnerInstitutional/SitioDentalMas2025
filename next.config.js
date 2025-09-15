// Archivo de configuración básico para Next.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,
  },
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "randomuser.me"],
  },
};

module.exports = nextConfig;
