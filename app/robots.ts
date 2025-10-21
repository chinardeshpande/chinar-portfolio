import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/private/'],
      },
    ],
    sitemap: 'https://www.chinardeshpande.tech/sitemap.xml',
    host: 'https://www.chinardeshpande.tech',
  };
}
