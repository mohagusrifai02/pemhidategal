'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';
import ResponsiveNavbar from '@/components/ResponsiveNavbar';

interface News {
  _id: string;
  title: string;
  content: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  publishedAt: string;
  views: number;
}

export default function NewsDetail() {
  const params = useParams();
  const id = params.id as string;
  const [news, setNews] = useState<News | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const hasIncrementedRef = useRef(false);

  useEffect(() => {
    if (id) {
      fetchNews();
    }
  }, [id]);

  const fetchNews = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/news/${id}`);
      const data = await response.json();
      if (data.success) {
        setNews(data.data);
        if (!hasIncrementedRef.current) {
          hasIncrementedRef.current = true;
          await incrementViews();
        }
      } else {
        setError('Berita tidak ditemukan');
      }
    } catch (err) {
      setError('Error loading news');
    } finally {
      setLoading(false);
    }
  };

  const incrementViews = async () => {
    try {
      const response = await fetch(`/api/news/${id}/view`, {
        method: 'POST',
      });
      const data = await response.json();
      if (data.success) {
        setNews((current) =>
          current ? { ...current, views: data.data.views } : current
        );
      }
    } catch (err) {
      console.error('Gagal mencatat views:', err);
    }
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (error || !news) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <Link href="/news" className="text-green-700 hover:text-green-800">
            Kembali ke Berita
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <ResponsiveNavbar activePage="news" />

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 py-12 scroll-reveal scroll-reveal-delay-100">
        <Link href="/news" className="text-green-700 hover:text-green-800 mb-6 inline-block">
          ← Kembali ke Berita
        </Link>

        <article>
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full mb-4">
              {news.category}
            </span>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{news.title}</h1>
            <div className="flex gap-6 flex-wrap text-gray-600 text-sm">
              <span>📝 {news.author}</span>
              <span>📅 {new Date(news.publishedAt).toLocaleDateString('id-ID', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
              <span>👁️ {news.views ?? 0} kali dilihat</span>
            </div>
          </div>

          <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
            <Image
              src={news.image}
              alt={news.title}
              fill
              unoptimized
              className="object-cover"
              sizes="100vw"
            />
          </div>

          <div className="prose prose-green max-w-full mb-12">
            <p className="text-lg text-gray-700 mb-6">{news.excerpt}</p>
            <div className="text-gray-700 whitespace-pre-wrap break-words">
              {news.content}
            </div>
          </div>

          {/* Share Section */}
          <div className="border-t border-gray-200 pt-8">
            <h3 className="font-semibold text-gray-800 mb-4">Bagikan Artikel Ini</h3>
            <div className="flex gap-4">
              <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(news.title)}`} 
                className="px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-500">
                Twitter
              </a>
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${typeof window !== 'undefined' ? window.location.href : ''}`}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Facebook
              </a>
            </div>
          </div>
        </article>
      </div>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Pemhida Tegal</h3>
            <p className="text-green-100">
              Organisasi sosial yang peduli dengan pemberdayaan masyarakat.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Menu Utama</h4>
            <ul className="space-y-2 text-green-100">
              <li><Link href="/" className="hover:text-white">Beranda</Link></li>
              <li><Link href="/news" className="hover:text-white">Berita & Artikel</Link></li>
              <li><Link href="/services" className="hover:text-white">Layanan</Link></li>
              <li><Link href="/contact" className="hover:text-white">Kontak</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Kontak</h4>
            <p className="text-green-100 mb-2">📍 Tegal, Jawa Tengah</p>
            <p className="text-green-100 mb-2">📞 +6289516589293</p>
            <p className="text-green-100">📧 info@pemhida.tegal</p>
          </div>
        </div>
        <div className="border-t border-green-800 mt-8 pt-8 text-center text-green-100">
          <p>&copy; 2026 Pemuda Hidayatullah Tegal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
