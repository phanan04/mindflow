/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://gameflow.page',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ['/admin/*', '/api/*', '/slice-simulator/*', '/_next/*'],
  changefreq: 'daily',
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/', '/slice-simulator/'],
      },
    ],
  },
  transform: async (config, path) => {
    // Đặt priority cao hơn cho trang chủ và các trang blog
    let priority = config.priority;
    if (path === '/') {
      priority = 1.0;
    } else if (path.startsWith('/blog/')) {
      priority = 0.8;
    } else if (path.startsWith('/categories/')) {
      priority = 0.6;
    }
    
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priority,
      lastmod: new Date().toISOString(),
    };
  },
};
