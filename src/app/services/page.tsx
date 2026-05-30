'use client';

import Link from 'next/link';
import { useState } from 'react';
import ResponsiveNavbar from '@/components/ResponsiveNavbar';

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState('website');

  const services = {
    website: {
      title: 'Jasa Pembuatan Website',
      description: 'Kami menyediakan layanan pembuatan website profesional untuk bisnis Anda',
      features: [
        'Design modern dan responsif',
        'SEO-friendly',
        'Cepat dan aman',
        'Support dan maintenance',
        'Domain dan hosting assistance',
        'Integrasi payment gateway'
      ],
      price: 'Konsultasi gratis untuk penawaran terbaik'
    },
    education: {
      title: 'Jasa Desain Grafis',
      description: 'Layanan desain grafis profesional untuk brand, poster, dan konten visual',
      features: [
        'Logo dan identitas visual',
        'Desain poster dan brosur',
        'Konten media sosial',
        'Branding konsisten',
        'Desain majalah dan katalog',
        'Revisi desain cepat'
      ],
      price: 'Harga kompetitif sesuai kebutuhan proyek'
    },
    training: {
      title: 'Publish Novel',
      description: 'Pemhida membuat karya novel yang bisa dibaca di website, plus layanan ketik, ide, plot, dan penerbitan.',
      features: [
        'Pembuatan karya novel untuk website Pemhida',
        'Jasa ketik dan penulisan naskah',
        'Pengembangan ide dan penyusunan plot',
        'Editing dan proofreading profesional',
        'Desain sampul dan format distribusi',
        'Publikasi digital di platform Pemhida'
      ],
      price: 'Paket publish novel terjangkau'
    },
    community: {
      title: 'Jasa Accounting',
      description: 'Layanan accounting dan pembukuan untuk usaha kecil dan menengah',
      features: [
        'Pembukuan harian dan bulanan',
        'Laporan keuangan lengkap',
        'Persiapan pajak dan SPT',
        'Analisis biaya dan profit',
        'Konsultasi cash flow',
        'Pendampingan audit'
      ],
      price: 'Layanan akuntansi fleksibel untuk bisnis Anda'
    }
  };

  const currentService = services[activeTab as keyof typeof services];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <ResponsiveNavbar activePage="services" />

      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-12 scroll-reveal">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Layanan Kami</h1>
          <p className="text-green-100">Berbagai layanan berkualitas untuk kemajuan bersama</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Service Tabs */}
        <div className="flex gap-4 mb-12 flex-wrap scroll-reveal scroll-reveal-delay-100">
          {Object.entries(services).map(([key, service]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                activeTab === key
                  ? 'bg-green-700 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              {service.title.includes('Website') ? '💻 Website'
                : service.title.includes('Desain') ? '🎨 Desain'
                : service.title.includes('Publish') ? '📖 Publish'
                : service.title.includes('Accounting') ? '🧾 Accounting'
                : '🔧 Layanan'}
            </button>
          ))}
        </div>

        {/* Service Details */}
        <div className="grid md:grid-cols-2 gap-12 scroll-reveal scroll-reveal-delay-200">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {currentService.title}
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              {currentService.description}
            </p>
            <h3 className="text-xl font-semibold text-green-700 mb-4">Fitur Utama:</h3>
            <ul className="space-y-3">
              {currentService.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-lg">✓</span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 p-4 bg-green-50 rounded-lg">
              <p className="text-gray-700">
                <strong>Harga:</strong> {currentService.price}
              </p>
            </div>
          </div>

          <div className="bg-green-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-green-800 mb-6">Hubungi Kami</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Nama</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  placeholder="Nama Anda"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  placeholder="Email Anda"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Nomor Telepon</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  placeholder="No. Telepon"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Pesan</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  placeholder="Jelaskan kebutuhan Anda"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-green-700 text-white rounded-lg font-semibold hover:bg-green-800 transition"
              >
                Kirim Pertanyaan
              </button>
            </form>
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="mt-16 pt-12 border-t scroll-reveal scroll-reveal-delay-300">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Semua Layanan Kami</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg text-center scroll-reveal scroll-reveal-delay-100">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Website & Aplikasi</h3>
              <p className="text-gray-600">Pembuatan website profesional dan aplikasi mobile</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg text-center scroll-reveal scroll-reveal-delay-200">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold text-purple-800 mb-2">Jasa Desain Grafis</h3>
              <p className="text-gray-600">Desain grafis kreatif untuk branding dan promosi</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg text-center scroll-reveal scroll-reveal-delay-300">
              <div className="text-4xl mb-4">📖</div>
              <h3 className="text-xl font-semibold text-orange-800 mb-2">Publish Novel</h3>
              <p className="text-gray-600">Bimbingan penerbitan novel dari naskah sampai distribusi</p>
            </div>
            <div className="bg-red-50 p-6 rounded-lg text-center scroll-reveal scroll-reveal-delay-400">
              <div className="text-4xl mb-4">🧾</div>
              <h3 className="text-xl font-semibold text-red-800 mb-2">Jasa Accounting</h3>
              <p className="text-gray-600">Akuntansi dan pembukuan untuk usaha kecil dan menengah</p>
            </div>
          </div>
        </div>
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
            <p className="text-green-100 mb-2">📞 +62 (0)283 XXX XXXX</p>
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
