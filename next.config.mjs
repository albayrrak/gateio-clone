/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    unoptimized: false,
    domains: ["gimg2.gateimg.com", "static.airpackapp.com", "www.gate.io"],
  },
};

export default nextConfig;
