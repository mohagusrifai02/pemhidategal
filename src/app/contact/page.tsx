'use client';

import Link from 'next/link';
import { useState } from 'react';
import ResponsiveNavbar from '@/components/ResponsiveNavbar';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      <ResponsiveNavbar activePage="contact" />

      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-12 scroll-reveal">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Hubungi Kami</h1>
          <p className="text-green-100">Kami siap mendengarkan dan membantu Anda</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-12 scroll-reveal scroll-reveal-delay-100">
          <div className="bg-green-50 p-6 rounded-lg text-center scroll-reveal scroll-reveal-delay-100">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="text-xl font-semibold text-green-800 mb-2">Lokasi</h3>
            <p className="text-gray-600">
              Jalan Pendidikan No. 1<br />
              Tegal, Jawa Tengah 52114<br />
              Indonesia
            </p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg text-center scroll-reveal scroll-reveal-delay-200">
            <div className="text-4xl mb-4">📞</div>
            <h3 className="text-xl font-semibold text-green-800 mb-2">Telepon</h3>
            <p className="text-gray-600">
              (+62) 283 - XXX XXXX<br />
              WhatsApp: +62 8XX XXXX XXXX<br />
              Operasional: Sen-Jum 08:00-17:00
            </p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg text-center scroll-reveal scroll-reveal-delay-300">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="text-xl font-semibold text-green-800 mb-2">Email</h3>
            <p className="text-gray-600">
              info@pemhida.tegal<br />
              support@pemhida.tegal<br />
              website@pemhida.tegal
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto scroll-reveal scroll-reveal-delay-200">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Kirim Pesan</h2>
            
            {submitted && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                ✓ Terima kasih! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Nama</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                    placeholder="Nama lengkap Anda"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                    placeholder="Email Anda"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Nomor Telepon</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                    placeholder="No. telepon"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Subjek</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                    placeholder="Subjek pesan"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Pesan</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  placeholder="Jelaskan pesan Anda"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-green-700 text-white rounded-lg font-semibold hover:bg-green-800 transition"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 scroll-reveal scroll-reveal-delay-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Temui Kami</h2>
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center text-gray-600">
              <p className="text-lg mb-2">📍 Lokasi: Tegal, Jawa Tengah</p>
              <p className="text-sm">Map akan ditampilkan di sini</p>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-12 text-center scroll-reveal scroll-reveal-delay-300">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Ikuti Kami</h3>
          <div className="flex gap-6 justify-center">
            <a href="#" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Facebook
            </a>
            <a href="#" className="px-6 py-3 bg-blue-400 text-white rounded-lg hover:bg-blue-500">
              Twitter
            </a>
            <a href="#" className="px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600">
              Instagram
            </a>
            <a href="#" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
              WhatsApp
            </a>
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
