'use client';

import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-green-700 text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            🌙 Pemhida Tegal
          </Link>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-green-200">Beranda</Link>
            <Link href="/news" className="hover:text-green-200">Berita</Link>
            <Link href="/services" className="hover:text-green-200">Jasa</Link>
            <Link href="/contact" className="hover:text-green-200">Kontak</Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-12 scroll-reveal">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Tentang Pemhida</h1>
          <p className="text-green-100">Mengenal lebih dekat organisasi kami</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Sejarah */}
        <section className="mb-16 scroll-reveal scroll-reveal-delay-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Sejarah Kami</h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <p className="text-gray-700 mb-4 text-lg">
              Pemuda Hidayatullah (Pemhida) didirikan dengan visi berasaskan Islam sesuai al-qur'an dan as-sunnah serta menurut pemahaman Ahlus Sunnah wal jamaah, mengikuti manhaj Nabawi dengan pola dasar Sistematika Wahyu sebagai manhaj gerakan tarbiyah dan Dakwah. Manhaj perjuangan Pemuda Hidayatullah adalah jamaah imamah berdasarkan Khittah perjuangan Hidayatullah dengan visi adalah membangun generasi rabbani.
            </p>
            <p className="text-gray-700 mb-4 text-lg">
              Organisasi ini awalnya bernama Syabab Hidayatullah berdiri pada hari kamis, tanggal 11 rabiul akhir 1421/13 juli 2000 di Balikpapan, Kalimantan Timur., yang bersamaan dengan gelaran Musyawarah Nasional Ke-1 Hidayatullah.
            </p>
            <p className="text-gray-700 text-lg">
              Pemuda Hidayatullah terus melandaskan gerakannya pada semangat spiritualisme Islam sebagai upaya peneladanan ajaran agama kita yang luhur yang diiringi dengan tradisi intelektual, progresif dan beradab.
            </p>
          </div>
        </section>

        {/* Visi Misi */}
        <section className="mb-16 grid md:grid-cols-2 gap-8 scroll-reveal scroll-reveal-delay-200">
          <div className="bg-green-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-green-800 mb-4">Visi Kami</h3>
            <p className="text-gray-700 text-lg">
              Pemuda Hidayatullah berasaskan Islam sesuai al-qur'an dan as-sunnah serta menurut pemahaman Ahlus Sunnah wal jamaah, mengikuti manhaj Nabawi dengan pola dasar Sistematika Wahyu sebagai manhaj gerakan tarbiyah dan Dakwah. Manhaj perjuangan Pemuda Hidayatullah adalah jamaah imamah berdasarkan Khittah perjuangan Hidayatullah dengan visi adalah membangun generasi rabbani.
            </p>
          </div>
          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">Misi Kami</h3>
            <ul className="space-y-2 text-gray-700 text-lg">
              <li>✓ Melahirkan kader pemuda bertauhid yang memiliki wawasan serta komitmen keumatan dan kebangsaan.</li>
                <li>✓ Mewujudkan kekuatan pemuda Islam dalam berbagai bidang kehidupan.</li>
                <li>✓ Melahirkan kader untuk gerakan amar ma'ruf nahi munkar.</li>
                <li>✓ Menjaga harkat dan martabat pemuda Islam.</li>
            </ul>
          </div>
        </section>

        {/* Nilai Nilai */}
        <section className="mb-16 scroll-reveal scroll-reveal-delay-300">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Nilai-Nilai Kami</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 border-2 border-green-200 rounded-lg hover:shadow-lg transition scroll-reveal scroll-reveal-delay-100">
              <div className="text-4xl mb-4">❤️</div>
              <h4 className="text-xl font-semibold text-green-800 mb-2">Kepedulian</h4>
              <p className="text-gray-600">Kami peduli dengan nasib setiap orang dalam masyarakat</p>
            </div>
            <div className="text-center p-6 border-2 border-green-200 rounded-lg hover:shadow-lg transition scroll-reveal scroll-reveal-delay-200">
              <div className="text-4xl mb-4">🤝</div>
              <h4 className="text-xl font-semibold text-green-800 mb-2">Kerjasama</h4>
              <p className="text-gray-600">Bersama-sama kita lebih kuat untuk mencapai tujuan</p>
            </div>
            <div className="text-center p-6 border-2 border-green-200 rounded-lg hover:shadow-lg transition">
              <div className="text-4xl mb-4">💪</div>
              <h4 className="text-xl font-semibold text-green-800 mb-2">Komitmen</h4>
              <p className="text-gray-600">Kami berkomitmen penuh dalam setiap program</p>
            </div>
            <div className="text-center p-6 border-2 border-green-200 rounded-lg hover:shadow-lg transition scroll-reveal scroll-reveal-delay-300">
              <div className="text-4xl mb-4">✨</div>
              <h4 className="text-xl font-semibold text-green-800 mb-2">Integritas</h4>
              <p className="text-gray-600">Transparan dan jujur dalam setiap tindakan</p>
            </div>
          </div>
        </section>

        {/* Program Utama */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Program Utama</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-blue-800 mb-3">📚 Program Pendidikan</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Beasiswa penuh untuk pelajar berprestasi</li>
                <li>• Bimbingan belajar gratis</li>
                <li>• Pelatihan keterampilan akademik</li>
                <li>• Mentoring untuk persiapan ujian</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-purple-800 mb-3">💼 Program Ekonomi</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Pelatihan keterampilan usaha</li>
                <li>• Modal usaha mikro</li>
                <li>• Pendampingan bisnis</li>
                <li>• Akses pasar untuk produk UMKM</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-green-800 mb-3">💻 Program Digital</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Kursus digital marketing</li>
                <li>• Pembuatan website untuk UMKM</li>
                <li>• Pelatihan online</li>
                <li>• Literasi digital</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Statistik */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Dampak Kami</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-lg text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">5000+</div>
              <p className="text-gray-700">Masyarakat Terlayani</p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-lg text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">1000+</div>
              <p className="text-gray-700">Penerima Beasiswa</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-lg text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">500+</div>
              <p className="text-gray-700">UMKM Diberdayakan</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <p className="text-gray-700">Program Aktif</p>
            </div>
          </div>
        </section>

        {/* Organisasi */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Struktur Organisasi</h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-700 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎩</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Ketua</h4>
                <p className="text-gray-700 mb-2">Moh. Agus Rifai, S.Ak.</p>
                <p className="text-gray-600 text-sm">Memimpin organisasi secara keseluruhan</p>
              </div>
              <div className="text-center">
                <div className="bg-green-700 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📝</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Sekretaris</h4>
                <p className="text-gray-700 mb-2">Abdul Aziz Muslim, S.Pd.</p>
                <p className="text-gray-600 text-sm">Mengeksekusi program-program Pemhida</p>
              </div>
              <div className="text-center">
                <div className="bg-green-700 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">�</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Bendahara</h4>
                <p className="text-gray-700 mb-2">Andi Yasbakhun, S.Pd.</p>
                <p className="text-gray-600 text-sm">Mengelola keuangan organisasi</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-green-50 p-12 rounded-lg text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Bergabunglah Dengan Kami</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Kami membuka kesempatan bagi Anda untuk berkontribusi dalam pemberdayaan masyarakat. Bersama kita bisa membuat perbedaan!
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/services" className="px-8 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 font-semibold">
              Lihat Layanan Kami
            </Link>
            <Link href="/contact" className="px-8 py-3 bg-white text-green-700 border-2 border-green-700 rounded-lg hover:bg-green-50 font-semibold">
              Hubungi Kami
            </Link>
          </div>
        </section>
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
