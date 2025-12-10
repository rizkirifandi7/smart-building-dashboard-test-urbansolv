# Urbansolv Smart Building Dashboard

Dashboard monitoring gedung pintar yang menampilkan data sensor real-time, visualisasi energi, dan tampilan 3D gedung interaktif.

![Dashboard Preview](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-38bdf8?style=for-the-badge&logo=tailwind-css)

## 🎯 Fitur Utama

### ✅ Dashboard Monitoring
- **KPI Cards** - Menampilkan ringkasan cepat konsumsi energi, rata-rata suhu, dan kualitas udara
- **Tabel Ruangan** - Data detail setiap ruangan dengan status real-time
- **Filter Lantai** - Filter data berdasarkan lantai gedung
- **Status Badge** - Indikator visual untuk kondisi ruangan (Normal/Warning/Alert)

### 📊 Visualisasi Data
- **Grafik Konsumsi Energi** - Tren konsumsi energi 24 jam dalam bentuk area chart
- **Grafik Suhu** - Tren suhu rata-rata per jam dalam bentuk line chart
- **Responsif** - Tampilan optimal di semua ukuran layar

### 🏢 3D Building View
- **Model 3D Interaktif** - Visualisasi gedung dengan kontrol rotasi, zoom, dan pan
- **Color Coding** - Lantai dengan alert ditampilkan merah, normal biru
- **Building Info** - Informasi detail gedung dan jumlah ruangan per lantai

## 🚀 Cara Menjalankan

### Persyaratan Sistem
- Node.js 18+ 
- npm atau yarn

### Instalasi

1. **Clone atau extract project**
   ```bash
   cd test-case-fe-urbansolv
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Jalankan development server**
   ```bash
   npm run dev
   ```

4. **Buka di browser**
   ```
   http://localhost:3000
   ```

### Build untuk Production

```bash
npm run build
npm start
```

## 🛠️ Tech Stack

### Core Framework
- **Next.js 15** - React framework dengan App Router
- **React 19** - Library UI
- **TypeScript** - Type safety

### UI Components & Styling
- **shadcn/ui** - Reusable component library
- **TailwindCSS** - Utility-first CSS framework
- **Lucide React** - Icon library

### Data Visualization
- **Recharts** - Chart library untuk grafik energi dan suhu
- **Three.js** - 3D graphics library
- **@react-three/fiber** - React renderer untuk Three.js
- **@react-three/drei** - Helper components untuk R3F

## 📁 Struktur Project

```
test-case-fe-urbansolv/
├── src/
│   ├── app/
│   │   ├── page.tsx                 # Halaman dashboard utama
│   │   ├── building-view/
│   │   │   └── page.tsx             # Halaman 3D building view
│   │   ├── layout.tsx               # Root layout
│   │   └── globals.css              # Global styles
│   │
│   ├── components/
│   │   ├── Header.tsx               # Header dengan branding
│   │   ├── SummaryCards.tsx         # KPI cards component
│   │   ├── RoomsTable.tsx           # Tabel daftar ruangan
│   │   ├── EnergyChart.tsx          # Grafik energi & suhu
│   │   └── ui/                      # shadcn/ui components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── table.tsx
│   │       ├── badge.tsx
│   │       ├── select.tsx
│   │       └── chart.tsx
│   │
│   ├── data/
│   │   └── building-data.json       # Dummy data gedung & sensor
│   │
│   └── lib/
│       └── utils.ts                 # Utility functions
│
├── public/                          # Static assets
├── components.json                  # shadcn/ui config
├── tailwind.config.ts              # Tailwind configuration
├── tsconfig.json                   # TypeScript configuration
├── next.config.ts                  # Next.js configuration
└── package.json                    # Dependencies
```

## 📊 Format Data

Data gedung disimpan dalam `src/data/building-data.json`:

```json
{
  "building": "Gedung A",
  "summary": {
    "energyTodayKwh": 1250,
    "avgTemperature": 24.5,
    "avgCO2": 650,
    "airQuality": "Baik"
  },
  "rooms": [
    {
      "id": 1,
      "name": "Ruang Meeting 1.1",
      "floor": 1,
      "temperature": 24.0,
      "co2": 700,
      "humidity": 65,
      "status": "Normal"
    }
  ],
  "energyTrend": [
    { "hour": "00:00", "kwh": 20 }
  ],
  "temperatureTrend": [
    { "hour": "00:00", "temp": 22.5 }
  ]
}
```

## 🎨 Komponen Reusable

### Header
Menampilkan branding dan nama gedung dengan gradient styling.

### SummaryCards
Kartu ringkasan dengan icon, nilai, dan trend indicator. Responsive dengan grid layout.

### RoomsTable
Tabel dengan filter lantai, badge status berwarna, dan data sensor lengkap.

### EnergyChart
Dual chart (area & line) untuk visualisasi tren energi dan suhu.

## 🎮 Interaksi 3D Building View

- **Rotate**: Click kiri + drag
- **Pan**: Click kanan + drag  
- **Zoom**: Scroll mouse

## 🔧 Customization

### Menambah Data Ruangan
Edit file `src/data/building-data.json` dan tambahkan objek ruangan baru:

```json
{
  "id": 13,
  "name": "Ruang Baru",
  "floor": 5,
  "temperature": 24.0,
  "co2": 650,
  "humidity": 60,
  "status": "Normal"
}
```

### Mengubah Warna Tema
Modifikasi `src/app/globals.css` pada bagian CSS variables:

```css
:root {
  --primary: 221.2 83.2% 53.3%;
  --secondary: 210 40% 96.1%;
}
```

## 🎯 Fitur Implementasi

### React Hooks yang Digunakan
- `useState` - Untuk state management filter lantai
- `useMemo` - Untuk optimasi perhitungan data (filtering & stats)

### Component Structure
Setiap komponen dibuat modular dan reusable dengan:
- Props yang jelas dan ter-type dengan TypeScript
- Pemisahan logic dan presentation
- Styling menggunakan TailwindCSS utility classes

### State Management
- Filter lantai tersimpan dalam state lokal
- Data ruangan di-filter secara reaktif menggunakan useMemo
- Stats dihitung otomatis berdasarkan filtered data

## 📝 Lisensi

Project ini dibuat untuk test case Frontend Developer Urbansolv.

## 👨‍💻 Developer

**[Nama Kandidat]**
- GitHub: [username]
- Email: [email]

---

**Built with ❤️ using Next.js, shadcn/ui, and Three.js**
