'use client';

import Link from 'next/link';
import { useState } from 'react';

interface NavbarProps {
  activePage?: 'home' | 'news' | 'services' | 'contact' | 'login';
}

const navItems = [
  { href: '/', label: 'Beranda', key: 'home' },
  { href: '/news', label: 'Berita', key: 'news' },
  { href: '/services', label: 'Jasa', key: 'services' },
  { href: '/contact', label: 'Kontak', key: 'contact' },
  { href: '/login', label: 'Login Admin', key: 'login' },
];

export default function ResponsiveNavbar({ activePage = 'home' }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-green-700 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 text-2xl font-bold">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white">
            P
          </span>
          <span className="hidden sm:inline">Pemhida Tegal</span>
        </Link>

        <div className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={`transition-colors ${
                activePage === item.key ? 'text-white border-b-2 border-white' : 'text-white/90 hover:text-white'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="md:hidden flex flex-col items-end gap-1.5 p-2"
          aria-label="Toggle navigation menu"
        >
          <span className={`block h-0.5 w-6 bg-white transition ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-0.5 w-6 bg-white transition ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-white transition ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-green-800 px-4 pb-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`block rounded-lg px-4 py-2 transition ${
                activePage === item.key ? 'bg-green-700 text-white' : 'text-green-100 hover:bg-green-700/80'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
