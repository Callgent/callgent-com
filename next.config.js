/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["localhost", "dummyimage.com"],

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
        source: '/',
        destination: '/en',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
