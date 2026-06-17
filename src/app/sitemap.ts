// app/sitemap.ts
import { MetadataRoute } from "next";
import {connectDB} from "@/lib/mongodb";
import { News } from "@/models/News";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://pemhida.alishlahtegal.net";

  await connectDB();
  // Ambil data langsung dari MongoDB
  const allNews = await News.find({}).select('_id updatedAt').lean();

  const newsUrls = allNews.map((item: any) => ({
    url: `${baseUrl}/news/${item._id}`, // atau item.id / item.slug
    lastModified: item.updatedAt
      ? new Date(item.updatedAt)
      : new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/news`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...newsUrls,
  ];
}