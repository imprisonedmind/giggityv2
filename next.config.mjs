/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.quicket.co.za",
        port: "",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
