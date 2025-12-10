# Smart Building Dashboard - UrbanSolv Test Case

Dashboard pemantauan gedung pintar yang interaktif dan modern, dikembangkan sebagai bagian dari test case Frontend Developer. Aplikasi ini memvisualisasikan data gedung, konsumsi energi, dan kondisi ruangan menggunakan teknologi web modern dan visualisasi 3D.

## 🚀 Fitur Utama

- **Visualisasi Gedung 3D Interaktif**: Model 3D yang dapat diputar, di-zoom, dan diklik untuk memfilter data per lantai.
- **Monitoring Real-time**: Kartu ringkasan untuk konsumsi energi, suhu rata-rata, dan kualitas udara.
- **Analitik Data**: Grafik tren penggunaan energi dan suhu menggunakan Recharts.
- **Manajemen Ruangan**: Tabel detail ruangan dengan fitur filtering, sorting, dan indikator status (Normal/Warning/Alert).
- **Mode Gelap/Terang**: Dukungan tema otomatis yang responsif.
- **Performa Tinggi**: Optimasi lazy loading untuk komponen 3D berat.

## 🛠️ Tech Stack

Project ini dibangun menggunakan teknologi terkini:

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Bahasa**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Library**: [Shadcn UI](https://ui.shadcn.com/) (Radix UI based)
- **3D Visualization**: 
  - [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) (Three.js renderer for React)
  - [Drei](https://github.com/pmndrs/drei) (Helpers for R3F)
- **Charting**: [Recharts](https://recharts.org/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 📦 Cara Menjalankan Aplikasi

Pastikan Anda telah menginstal Node.js (versi 18+ direkomendasikan).

1.  **Clone Repository**
    ```bash
    git clone https://github.com/rizkirifandi7/smart-building-dashboard-test-urbansolv.git
    cd test-case-fe-urbansolv
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    # atau
    yarn install
    # atau
    pnpm install
    ```

3.  **Jalankan Development Server**
    ```bash
    npm run dev
    ```

4.  **Buka Aplikasi**
    Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

## 📂 Struktur Folder & Komponen

Berikut adalah penjelasan singkat mengenai struktur project:

```
src/
├── app/                    # Next.js App Router pages & layouts
│   ├── page.tsx            # Halaman Dashboard Utama
│   └── layout.tsx          # Root layout (Theme provider, fonts)
│
├── components/             # Komponen React
│   ├── 3d/                 # Komponen khusus Visualisasi 3D
│   │   ├── Building3DScene.tsx # Scene utama (Kamera, Cahaya, Model)
│   │   └── Floor3D.tsx     # Komponen lantai individual
│   │
│   ├── ui/                 # Komponen UI Reusable (Shadcn)
│   │
│   ├── BuildingViewCard.tsx # Wrapper 3D dengan Lazy Loading & Legend
│   ├── EnergyChart.tsx     # Grafik konsumsi energi
│   ├── FloorFilterSection.tsx # Sidebar kontrol & filter lantai
│   ├── RoomsTable.tsx      # Tabel data ruangan & ringkasan status
│   ├── SummaryCards.tsx    # Kartu KPI (Key Performance Indicators)
│   └── Header.tsx          # Navigasi atas & Theme toggle
│
├── data/                   # Mock data (JSON)
│   └── building-data.json  # Data dummy untuk gedung & ruangan
│
├── hooks/                  # Custom React Hooks
│   ├── useBuildingData.ts  # Logika pemrosesan data lantai untuk 3D
│   └── useRoomData.ts      # Logika filtering & statistik ruangan
│
├── lib/                    # Utility functions
│   └── utils.ts            # Helper class merger (clsx/tailwind-merge)
│
└── types/                  # TypeScript interfaces
    └── building.ts         # Definisi tipe data (Room, BuildingData)
```

## 📝 Catatan Pengembangan

- **Optimasi 3D**: Komponen 3D dimuat menggunakan `next/dynamic` dengan `ssr: false` untuk menghindari masalah hidrasi dan mempercepat *First Contentful Paint*.
- **State Management**: Menggunakan React Hooks standar (`useState`, `useMemo`) karena kompleksitas state masih dapat ditangani tanpa library eksternal seperti Redux/Zustand.
