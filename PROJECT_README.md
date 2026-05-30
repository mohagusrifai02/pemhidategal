# Portal Pemuda Hidayatullah (Pemhida) Tegal

Portal website resmi Pemuda Hidayatullah Tegal yang menampilkan company profile, portal berita/artikel, dan jasa pembuatan website. Dibangun dengan Next.js 16, React 19, Mongoose, dan API Routes.

## 🚀 Fitur Utama

### Public Website
- **Company Profile** - Profil lengkap tentang Pemhida Tegal
- **Portal Berita & Artikel** - Publikasi berita, artikel, dan kegiatan
- **Halaman Layanan** - Informasi lengkap tentang jasa yang ditawarkan
- **Halaman Kontak** - Form kontak dan informasi lokasi
- **Responsive Design** - Optimal di semua perangkat

### Admin Dashboard
- **Manajemen Berita/Artikel** - CRUD penuh untuk berita dan artikel
- **Manajemen User** - Kelola daftar pengguna/subscriber
- **Kategori Konten** - Berita, Artikel, dan Kegiatan
- **Preview Gambar** - Support URL gambar dari internet

### Teknologi
- Next.js 16 (Framework React modern)
- React 19 (UI library)
- TypeScript (Type-safe)
- Mongoose (MongoDB ODM)
- Tailwind CSS (Styling)
- REST API Routes

## 📁 Struktur Folder

```
src/
├── app/
│   ├── api/
│   │   ├── users/
│   │   │   ├── route.ts           # GET all, POST create user
│   │   │   └── [id]/route.ts      # GET, PUT, DELETE user
│   │   └── news/
│   │       ├── route.ts           # GET, POST news
│   │       └── [id]/route.ts      # GET, PUT, DELETE news
│   ├── dashboard/
│   │   ├── page.tsx               # Admin dashboard (News & Users)
│   │   └── users/
│   │       └── page.tsx           # User management
│   ├── news/
│   │   ├── page.tsx               # News listing page
│   │   └── [id]/
│   │       └── page.tsx           # News detail page
│   ├── services/
│   │   └── page.tsx               # Services/Jasa page
│   ├── contact/
│   │   └── page.tsx               # Contact page
│   ├── about/
│   │   └── page.tsx               # About us page
│   ├── page.tsx                   # Home page
│   ├── globals.css
│   └── layout.tsx
├── lib/
│   └── mongodb.ts                 # Mongoose connection
└── models/
    ├── User.ts                    # User schema
    └── News.ts                    # News/Article schema
```

## 🛠️ Installation & Setup

### 1. Clone atau Setup Project
```bash
cd my-app
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure MongoDB
Edit file `.env.local` dan konfigurasi MongoDB URI:

#### Local MongoDB
```env
MONGODB_URI=mongodb://localhost:27017/pemhida
```

#### MongoDB Atlas (Cloud)
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/pemhida
```

### 4. Run Development Server
```bash
npm run dev
```

Server akan berjalan di `http://localhost:3000`

## 🌐 URL & Halaman

### Public Pages
- **Home**: `http://localhost:3000`
- **About**: `http://localhost:3000/about`
- **News/Articles**: `http://localhost:3000/news`
- **News Detail**: `http://localhost:3000/news/[id]`
- **Services**: `http://localhost:3000/services`
- **Contact**: `http://localhost:3000/contact`

### Admin Pages
- **Dashboard**: `http://localhost:3000/dashboard`
- **User Management**: `http://localhost:3000/dashboard/users`

## 🔌 API Endpoints

### News API
```
GET    /api/news              - Get semua news (support filter category & limit)
POST   /api/news              - Create news baru
GET    /api/news/[id]         - Get news by ID
PUT    /api/news/[id]         - Update news
DELETE /api/news/[id]         - Delete news
```

### Users API
```
GET    /api/users             - Get semua user
POST   /api/users             - Create user baru
GET    /api/users/[id]        - Get user by ID
PUT    /api/users/[id]        - Update user
DELETE /api/users/[id]        - Delete user
```

## 📝 Database Schema

### News Schema
```typescript
{
  _id: ObjectId,
  title: string (required),
  slug: string (unique),
  category: 'berita' | 'artikel' | 'kegiatan',
  content: string (required),
  excerpt: string (required),
  image: string (URL),
  author: string (required),
  publishedAt: Date,
  createdAt: timestamp,
  updatedAt: timestamp
}
```

### User Schema
```typescript
{
  _id: ObjectId,
  name: string (required, min 3),
  email: string (required, unique, valid),
  phone: string (required),
  address: string (required),
  createdAt: timestamp,
  updatedAt: timestamp
}
```

## 📚 API Usage Examples

### Create News
```bash
curl -X POST http://localhost:3000/api/news \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Pemhida Buka Beasiswa 2024",
    "category": "berita",
    "content": "Pemhida membuka kesempatan beasiswa...",
    "excerpt": "Beasiswa untuk pelajar berprestasi",
    "image": "https://example.com/image.jpg",
    "author": "Admin"
  }'
```

### Get News with Filter
```bash
# Get all news
curl http://localhost:3000/api/news

# Get news by category
curl http://localhost:3000/api/news?category=berita

# Get limited news
curl http://localhost:3000/api/news?limit=5

# Combined
curl http://localhost:3000/api/news?category=artikel&limit=10
```

### Update News
```bash
curl -X PUT http://localhost:3000/api/news/[id] \
  -H "Content-Type: application/json" \
  -d '{"title": "Updated Title"}'
```

### Delete News
```bash
curl -X DELETE http://localhost:3000/api/news/[id]
```

## 🎨 Konten Web

### Layanan Pemhida (di halaman Services)
1. **Jasa Pembuatan Website** - Website profesional untuk bisnis
2. **Program Pendidikan** - Beasiswa dan bimbingan akademik
3. **Pelatihan Keterampilan** - Workshop dan training
4. **Pemberdayaan Masyarakat** - Bantuan ekonomi dan pengembangan usaha

### Kategori Berita
- **Berita**: Informasi terkini dari Pemhida
- **Artikel**: Artikel edukatif dan inspiratif
- **Kegiatan**: Laporan kegiatan dan event

## 📊 Scripts

```bash
npm run dev      # Development server
npm run build    # Build production
npm start        # Run production
npm run lint     # Run ESLint
```

## 🔒 Keamanan

- Input validation di client dan server
- Unique constraint untuk email
- MongoDB connection pooling
- Type-safe dengan TypeScript

## 📱 Responsive Design

- Mobile-first approach
- Tested pada: Desktop, Tablet, Mobile
- Tailwind CSS responsive utilities

## 🌍 Lokalisasi

- Format tanggal: Indonesian (id-ID)
- Bahasa konten: Bahasa Indonesia
- Currency: IDR (jika diperlukan)

## 💡 Tips Development

### Menambah Kategori News Baru
1. Update enum di `src/models/News.ts`
2. Update filter buttons di halaman news
3. API akan otomatis support kategori baru

### Upload Gambar
Saat ini menggunakan URL eksternal. Untuk upload lokal:
- Setup storage (AWS S3, Cloudinary, etc)
- Update form handling di dashboard
- Simpan URL di database

### Menambah Halaman Baru
1. Buat folder di `src/app/[page-name]/`
2. Buat `page.tsx`
3. Update navigation di header
4. Add link di footer

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Mongoose Documentation](https://mongoosejs.com)
- [Tailwind CSS](https://tailwindcss.com)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

## 🐛 Troubleshooting

### Mongoose Not Found
```bash
npm install mongoose dotenv
```

### MongoDB Connection Error
- Pastikan MongoDB running (local atau Atlas)
- Check MONGODB_URI di `.env.local`
- Verifikasi network access (untuk Atlas)

### Port Already in Use
```bash
# Gunakan port lain
PORT=3001 npm run dev
```

## 📧 Support

Untuk pertanyaan atau bantuan, silakan hubungi team development Pemhida Tegal.

---

**Dibuat dengan ❤️ untuk Pemuda Hidayatullah Tegal**
**Updated: May 2026**

