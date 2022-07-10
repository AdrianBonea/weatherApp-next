// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
/** @type {import('next').NextConfig} */

const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  experimental: {
    outputStandalone: true,
    styledComponents: true,
  },
};

module.exports = nextConfig;
