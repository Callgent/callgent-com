module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_ROOT,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
    additionalSitemaps: [
      process.env.NEXT_PUBLIC_DOCUMENTATION_URL + '/sitemap.xml',
    ],
  },
};
