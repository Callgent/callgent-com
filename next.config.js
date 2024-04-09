/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/discord',
        destination: 'https://discord.com/invite/V9HKBukSRp',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
