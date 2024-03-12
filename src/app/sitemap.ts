import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://capic.com',
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: 'https://capic.com/#about',
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: 'https://capic.com/#services',
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: 'https://capic.com/#contact',
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}
