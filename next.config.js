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
        permanent: false, // 如果重定向是永久的，设置为true
      },
    ];
  },
};

module.exports = nextConfig;
