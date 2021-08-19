module.exports = {
  reactStrictMode: true,
  eslint: {
    // allow production builds to successfully complete even if
    // the project has ESLint errors.
    ignoreDuringBuilds: true
  },
  async rewrites() {
    return [
      {
        source: '/apps/:appid',
        destination: 'http://127.0.0.1:8000/loadapp/:appid'
      }
    ];
  }
};
