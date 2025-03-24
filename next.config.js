/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  output: "export",
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, "css")],
  },
  trailingSlash: true,
  devIndicators: {
    buildActivity: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  // assetPrefix: "https://demo.thedarklight.in/",
  // images: {
  // domains: ["demo.thedarklight.in"],
  // },
};

module.exports = nextConfig;
