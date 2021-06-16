const withPlugins = require('next-compose-plugins');

const nextConfig = {
  trailingSlash: false,
  reactStrictMode: true
};

module.exports = withPlugins(
  [],
  nextConfig
);
