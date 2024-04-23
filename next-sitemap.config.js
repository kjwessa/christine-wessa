module.exports = {
  siteUrl: "https://www.christinewessa.com",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
    additionalSitemaps: ["https://www.christinewessa.com/sitemap.xml"],
  },
  generateIndexSitemap: false,
};
