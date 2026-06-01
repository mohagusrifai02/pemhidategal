'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import ResponsiveNavbar from '@/components/ResponsiveNavbar';

interface News {
  _id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  publishedAt: string;
  views?: number;
  likesCount?: number;
}

export default function NewsPage() {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('semua');
  const [likesMap, setLikesMap] = useState<Record<string, number>>({});

  useEffect(() => {
    fetchNews();
    fetchLikesSummary();
  }, [selectedCategory]);

  const fetchNews = async () => {
    try {
      setLoading(true);
      const url = selectedCategory === 'semua' 
        ? '/api/news'
        : `/api/news?category=${selectedCategory}`;
      const response = await fetch(url);
      const data = await response.json();
      if (data.success) {
        setNews(data.data);
      }
    } catch (error) {
      console.error('Error fetching news:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchLikesSummary = async () => {
    try {
      const response = await fetch('/api/likes/summary');
      const data = await response.json();
      if (data.success) {
        setLikesMap(data.data);
      }
    } catch (error) {
      console.error('Error fetching likes summary:', error);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <ResponsiveNavbar activePage="news" />

      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-12 scroll-reveal scroll-reveal-delay-100">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Berita & Artikel</h1>
          <p className="text-green-100">Informasi terkini dari Pemuda Hidayatullah Tegal</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Category Filter */}
        <div className="flex gap-2 mb-8 flex-wrap scroll-reveal scroll-reveal-delay-200">
          {['semua', 'berita', 'artikel', 'kegiatan'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full font-semibold transition ${
                selectedCategory === cat
                  ? 'bg-green-700 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center py-12">Loading...</div>
        ) : news.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            <p>Tidak ada berita dalam kategori ini</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {news.map((item, index) => (
              <Link key={item._id} href={`/news/${item._id}`}>
                <div
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition cursor-pointer scroll-reveal"
                  style={{ transitionDelay: `${index * 70 + 220}ms` }}
                >
                  <div className="relative w-full h-64">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      unoptimized
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full mb-3">
                      {item.category}
                    </span>
                    <h3 className="font-bold text-xl text-gray-800 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {item.excerpt}
                    </p>
                    <div className="flex justify-between items-center gap-4 flex-wrap">
                      <span className="text-gray-500 text-sm">
                        {new Date(item.publishedAt).toLocaleDateString('id-ID')}
                      </span>
                      <div className="flex gap-3 text-gray-500 text-sm">
                        <span>👁️ {item.views ?? 0}</span>
                        <span>❤️ {likesMap[item._id] ?? 0}</span>
                      </div>
                      <div className="text-green-700 font-semibold">
                        Baca Selengkapnya →
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
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
