'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

interface News {
  _id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  publishedAt: string;
}

export default function Home() {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    fetchLatestNews();
  }, []);

  const fetchLatestNews = async () => {
    try {
      const response = await fetch('/api/news?limit=6');
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

  const getImageSrc = (src: unknown) => {
    const fallback =
      'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D';

    if (typeof src !== 'string') {
      return fallback;
    }

    const trimmed = src.trim();
    if (!trimmed) {
      return fallback;
    }

    if (trimmed.startsWith('/') || trimmed.startsWith('data:')) {
      return trimmed;
    }

    try {
      new URL(trimmed);
      return trimmed;
    } catch {
      return fallback;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-green-700 text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 text-2xl font-bold">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsbY_DWz2LNFOwCo6LnUS6ttF-GL_H86f6bg&s"
              alt="Pemhida Tegal"
              width={40}
              height={40}
              unoptimized
              className="rounded-full object-cover"
            />
            <span className="hidden sm:inline">Pemhida Tegal</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6">
            <Link href="/" className="hover:text-green-200 transition">Beranda</Link>
            <Link href="/news" className="hover:text-green-200 transition">Berita</Link>
            <Link href="/services" className="hover:text-green-200 transition">Jasa</Link>
            <Link href="/contact" className="hover:text-green-200 transition">Kontak</Link>
          </div>

          {/* Mobile Hamburger Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-white transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-white transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-white transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-green-800 px-4 py-3 space-y-2">
            <Link
              href="/"
              className="block px-4 py-2 hover:bg-green-700 rounded transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Beranda
            </Link>
            <Link
              href="/news"
              className="block px-4 py-2 hover:bg-green-700 rounded transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Berita
            </Link>
            <Link
              href="/services"
              className="block px-4 py-2 hover:bg-green-700 rounded transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Jasa
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-2 hover:bg-green-700 rounded transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Kontak
            </Link>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-green-800 text-white scroll-reveal">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Tegal City"
            fill
            unoptimized
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-green-950/75 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <h1 className="text-5xl font-bold mb-4">Pemuda Hidayatullah Tegal</h1>
          <p className="text-xl mb-8 max-w-2xl">
            Organisasi kepemudaan nasional berbasis Islam di bawah naungan ormas Hidayatullah
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/news" className="px-6 py-3 bg-white text-green-700 font-semibold rounded-lg hover:bg-green-50">
              Baca Berita & Artikel
            </Link>
            <Link href="/services" className="px-6 py-3 bg-green-900 text-white font-semibold rounded-lg hover:bg-green-950 border-2 border-white">
              Layanan Kami
            </Link>
          </div>
        </div>
      </div>

      {/* Company Profile */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16 scroll-reveal scroll-reveal-delay-100">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Tentang Kami</h2>
            <p className="text-gray-600 mb-4 text-lg">
              <strong>Pemuda Hidayatullah (Pemhida)</strong> yaitu organisasi kepemudaan nasional berbasis Islam di bawah naungan ormas Hidayatullah. Organisasi ini mengusung tagline "Progresif Beradab" dan aktif membina generasi muda melalui program sosial, olahraga, hingga kerelawanan.
            </p>
            <Link href="/about" className="px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 inline-block">
              Pelajari Lebih Lanjut
            </Link>
          </div>
          <div className="bg-green-100 rounded-lg p-8 text-center">
            <div className="text-6xl mb-4">🌱</div>
            <h3 className="text-2xl font-bold text-green-800 mb-2">Visi & Misi</h3>
            <div className="text-left">
              <h4 className="font-semibold text-green-700 mb-2">Visi:</h4>
              <p className="text-gray-700 mb-4">Visi kami adalah Pemuda Hidayatullah berasaskan Islam sesuai al-qur'an dan as-sunnah serta menurut pemahaman Ahlus Sunnah wal jamaah, mengikuti manhaj Nabawi dengan pola dasar Sistematika Wahyu sebagai manhaj gerakan tarbiyah dan Dakwah.</p>
              <h4 className="font-semibold text-green-700 mb-2">Misi:</h4>
              <ul className="text-gray-700 space-y-1">
                <li>✓ Melahirkan kader pemuda bertauhid yang memiliki wawasan serta komitmen keumatan dan kebangsaan.</li>
                <li>✓ Mewujudkan kekuatan pemuda Islam dalam berbagai bidang kehidupan.</li>
                <li>✓ Melahirkan kader untuk gerakan amar ma'ruf nahi munkar.</li>
                <li>✓ Menjaga harkat dan martabat pemuda Islam.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Latest News */}
      <div className="bg-gray-50 py-16 scroll-reveal scroll-reveal-delay-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-4xl font-bold text-gray-800">Berita & Artikel Terbaru</h2>
            <Link href="/news" className="text-green-700 hover:text-green-800 font-semibold">
              Lihat Semua →
            </Link>
          </div>

          {loading ? (
            <div className="text-center py-12">Loading...</div>
          ) : news.length === 0 ? (
            <div className="text-center py-12 text-gray-500">Belum ada berita</div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {news.slice(0, 6).map((item, index) => (
                <Link key={item._id} href={`/news/${item._id}`}>
                  <div
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition cursor-pointer scroll-reveal"
                    style={{ transitionDelay: `${index * 70 + 100}ms` }}
                  >
                    <div className="relative w-full h-48">
                      <Image
                        src={getImageSrc(item.image)}
                        alt={item.title}
                        fill
                        unoptimized
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-4">
                      <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full mb-2">
                        {item.category}
                      </span>
                      <h3 className="font-bold text-lg text-gray-800 mb-2 line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                        {item.excerpt}
                      </p>
                      <div className="text-green-700 font-semibold text-sm">
                        Baca Selengkapnya →
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Services Preview */}
      <div className="max-w-7xl mx-auto px-4 py-16 scroll-reveal scroll-reveal-delay-300">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Layanan Kami</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-green-50 p-6 rounded-lg text-center hover:bg-green-100 transition scroll-reveal scroll-reveal-delay-100">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-semibold text-green-800 mb-2">Jasa Desain Grafis</h3>
            <p className="text-gray-600">Desain grafis kreatif untuk brand, poster, dan konten promosi</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg text-center hover:bg-green-100 transition scroll-reveal scroll-reveal-delay-200">
            <div className="text-4xl mb-4">📖</div>
            <h3 className="text-xl font-semibold text-green-800 mb-2">Publish Novel</h3>
            <p className="text-gray-600">Pemhida membuat karya novel yang bisa dibaca di website, serta jasa ketik, ide, plot, dan penerbitan</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg text-center hover:bg-green-100 transition scroll-reveal scroll-reveal-delay-300">
            <div className="text-4xl mb-4">💻</div>
            <h3 className="text-xl font-semibold text-green-800 mb-2">Jasa Website</h3>
            <p className="text-gray-600">Pembuatan website profesional untuk bisnis</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg text-center hover:bg-green-100 transition scroll-reveal scroll-reveal-delay-400">
            <div className="text-4xl mb-4">🧾</div>
            <h3 className="text-xl font-semibold text-green-800 mb-2">Jasa Accounting</h3>
            <p className="text-gray-600">Layanan akuntansi dan pembukuan untuk UKM dan usaha kecil</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link href="/services" className="px-8 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 inline-block font-semibold">
            Pelajari Semua Layanan
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Pemhida Tegal</h3>
            <p className="text-green-100">
              Organisasi sosial yang peduli dengan pemberdayaan masyarakat dan pembangunan berkelanjutan.
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
