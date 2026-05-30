import type { Metadata } from 'next';

interface News {
  _id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  publishedAt: string;
}

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { id } = await params;
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/api/news/${id}`, {
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    
    const data = await response.json();
    const news: News = data.data;

    if (!news) {
      return {
        title: 'Berita Tidak Ditemukan - Pemhida Tegal',
      };
    }

    return {
      title: news.title,
      description: news.excerpt,
      openGraph: {
        title: news.title,
        description: news.excerpt,
        type: 'article',
        url: `https://pemhida-tegal.vercel.app/news/${news._id}`,
        siteName: 'Pemhida Tegal',
        images: [
          {
            url: news.image,
            width: 1200,
            height: 630,
            alt: news.title,
          },
        ],
        locale: 'id_ID',
        publishedTime: news.publishedAt,
        authors: ['Pemhida Tegal'],
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Berita - Pemhida Tegal',
      description: 'Portal resmi Pemuda Hidayatullah Tegal',
    };
  }
}

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
