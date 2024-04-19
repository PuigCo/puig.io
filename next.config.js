const { withPlugins, optional } = require('next-compose-plugins')
const path = require('path')

// const {
//   PHASE_PRODUCTION_BUILD,
//   PHASE_PRODUCTION_SERVER,
//   PHASE_DEVELOPMENT_SERVER,
//   PHASE_EXPORT,
// } = require('next/constants');

const isProd = process.env.NODE_ENV === 'production'
const buildId = process.env.GITHUB_SHA || 'HEAD'

const nextPlugins = [];

const nextConfig = {
  distDir: `.next/${process.env.NODE_ENV}`,
  trailingSlash: true,
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    loader: isProd ? 'custom' : '',
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },

  generateBuildId: async () => {
    return buildId
  },
};

module.exports = withPlugins(nextPlugins, nextConfig);
