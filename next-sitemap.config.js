module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_ROOT,
  generateRobotsTxt: true,
  robotsTxtOptions: {
      policies: [{ userAgent: '*', allow: '/' }]
  },
};
