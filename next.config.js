/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};
const withImages = require("next-images");
module.exports = withImages();
module.exports = nextConfig;
module.exports = {
  images: {
    loader: 'akamai',
    path: '',
  },
}