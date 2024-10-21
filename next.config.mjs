/** @type {import('next').NextConfig} */
const nextConfig = {
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
