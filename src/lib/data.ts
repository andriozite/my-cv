export const PROFILE = {
  name: "ANDRIAN PERMANA DIHARJA",
  firstName: "ANDRIAN",
  lastName: "PERMANA",
  thirdName: "DIHARJA",
  role: "Sortation Operations / Team Leader",
  phone: "+62 897-5639-111",
  phoneHref: "tel:+628975639111",
  email: "andrianpermana187@gmail.com",
  location: "Depok, Jawa Barat",
  coordinates: "6.4025° S — 106.7942° E",
  manifestNo: "APD-187/DEPOK/2026",
  hub: "DEPOK HUB — JAWA BARAT",
};

export const SUMMARY =
  "Profesional logistik yang termotivasi dengan pengalaman 6+ tahun di operasi sortasi volume tinggi, manajemen gudang (warehouse management), dan proses return barang (reverse logistics). Rekam jejak terbukti dalam memimpin shift di pusat distribusi yang memproses 15.000–20.000+ paket setiap hari dengan akurasi 99,9%, termasuk penanganan ribuan paket return harian. Terampil dalam mengkoordinasikan tim, mengoptimalkan pemanfaatan WMS, mengelola inventaris gudang, dan melaksanakan perencanaan tenaga kerja strategis untuk menjaga keunggulan operasional serta memenuhi SLA pengiriman 15 menit di lingkungan 24/7 yang bergerak cepat.";

export interface Stat {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
  sub: string;
}

export const STATS: Stat[] = [
  { value: 6, suffix: "+", label: "TAHUN PENGALAMAN", sub: "logistik & gudang" },
  { value: 20, suffix: "RB+", label: "PAKET / HARI", sub: "volume sortasi puncak" },
  { value: 99.9, suffix: "%", decimals: 1, label: "AKURASI SORTASI", sub: "konsisten tercapai" },
  { value: 50, label: "PERSONEL / SHIFT", sub: "koordinasi tim" },
  { value: 22, suffix: "%", prefix: "+", label: "THROUGHPUT NAIK", sub: "tanpa tambah headcount" },
  { value: 0, label: "KECELAKAAN KERJA", sub: "2 tahun berturut-turut" },
];

export const TICKER_ITEMS = [
  "INBOUND",
  "SORTASI",
  "ROUTING ZONA",
  "OUTBOUND",
  "REVERSE LOGISTICS",
  "STOCK OPNAME",
  "FIFO / FEFO",
  "5R / K3",
  "SLA 15 MENIT",
  "WMS REAL-TIME",
  "PDA SCANNER",
  "ZERO ACCIDENT",
  "OPERASI 24/7",
];

export interface SkillZone {
  code: string;
  title: string;
  icon: "sort" | "rack" | "return" | "team" | "tech";
  desc: string;
  wide?: boolean;
  skills: { name: string; level: number }[];
  chips?: string[];
}

export const ZONES: SkillZone[] = [
  {
    code: "ZONE A",
    title: "Operasional Sortasi",
    icon: "sort",
    desc: "Siklus penuh dari penerimaan truk hingga serah terima line haul.",
    skills: [
      { name: "Manajemen Sortasi", level: 98 },
      { name: "Pemrosesan Inbound / Outbound", level: 96 },
      { name: "Quality Assurance", level: 94 },
      { name: "Kepatuhan 5R / K3", level: 95 },
    ],
  },
  {
    code: "ZONE B",
    title: "Manajemen Gudang",
    icon: "rack",
    desc: "Inventaris, penyimpanan, dan arus barang yang tertata presisi.",
    skills: [
      { name: "Pengelolaan Inventaris", level: 95 },
      { name: "Stock Opname", level: 96 },
      { name: "FIFO / FEFO", level: 93 },
      { name: "Layout & Picking–Packing", level: 90 },
    ],
  },
  {
    code: "ZONE C",
    title: "Return Management",
    icon: "return",
    desc: "Reverse logistics end-to-end: verifikasi, inspeksi, klasifikasi.",
    skills: [
      { name: "Verifikasi & Inspeksi Return", level: 97 },
      { name: "Klasifikasi Kondisi Barang", level: 95 },
      { name: "Refund / Replacement", level: 92 },
      { name: "Koordinasi CS & Merchant", level: 94 },
    ],
  },
  {
    code: "ZONE D",
    title: "Kepemimpinan",
    icon: "team",
    desc: "Memimpin 35–50 personel per shift di lingkungan 24/7.",
    skills: [
      { name: "Koordinasi Tim", level: 96 },
      { name: "Penjadwalan Shift", level: 94 },
      { name: "Perencanaan Tenaga Kerja", level: 92 },
      { name: "Evaluasi & Pembinaan Kinerja", level: 90 },
    ],
  },
  {
    code: "ZONE E",
    title: "Teknis & Sistem",
    icon: "tech",
    desc: "Perkakas digital yang dipakai harian di lantai operasional.",
    wide: true,
    skills: [
      { name: "Warehouse Management System (WMS)", level: 95 },
      { name: "Operasi PDA Scanner", level: 97 },
      { name: "Analisis Data Operasional", level: 88 },
      { name: "MS Office", level: 92 },
    ],
    chips: ["WMS", "PDA SCANNER", "MS OFFICE", "EXCEL POWER PIVOT", "ANALISIS DATA", "SOP WRITING"],
  },
];

export interface TrackingEvent {
  time: string;
  title: string;
  loc: string;
  note: string;
  current?: boolean;
}

export const TRACKING: TrackingEvent[] = [
  {
    time: "2016",
    title: "PICKED UP",
    loc: "PT FEDERAL INTERNATIONAL FINANCE",
    note: "Memulai karier sebagai Junior Remedial Field — penagihan & negosiasi lapangan.",
  },
  {
    time: "2019",
    title: "DEPARTED FACILITY",
    loc: "FIF — PORTOFOLIO REMEDIAL",
    note: "Menuntaskan 3 tahun dengan tingkat penyelesaian 95%+ di atas target.",
  },
  {
    time: "2020",
    title: "ARRIVED AT SORT HUB",
    loc: "PT SWAKARYA INSAN MANDIRI — LAZADA LOGISTICS, CIMANGGIS",
    note: "Masuk ke operasi sortasi volume tinggi 15.000–20.000+ paket/hari.",
  },
  {
    time: "2022",
    title: "QC PASSED — ZERO ACCIDENT",
    loc: "AUDIT K3 INTERNAL",
    note: "Rekor nol kecelakaan & nol kerugian 2 tahun berturut-turut.",
  },
  {
    time: "2026",
    title: "ON DUTY — TEAM LEADER",
    loc: "DEPOK HUB — OPERASI 24/7",
    note: "Memimpin multi-shift: akurasi 99,9%, SLA < 15 menit, throughput +22%.",
    current: true,
  },
];

export interface JobCategory {
  icon: "sort" | "rack" | "return" | "team" | "shield";
  title: string;
  tag: string;
  points: string[];
  sub?: { lead: string; items: string[] };
}

export interface Job {
  id: string;
  company: string;
  client?: string;
  role: string;
  period: string;
  location: string;
  code: string;
  highlights: { k: string; v: string }[];
  intro?: string;
  categories?: JobCategory[];
  points?: string[];
  compact?: boolean;
}

export const JOBS: Job[] = [
  {
    id: "sim",
    company: "PT Swakarya Insan Mandiri",
    client: "Lazada Logistics",
    role: "Sortation Operations / Team Leader",
    period: "2020 — 2026",
    location: "Cimanggis, Jawa Barat",
    code: "LOT-01",
    highlights: [
      { k: "Volume harian", v: "15.000–20.000+ paket" },
      { k: "Akurasi sortasi", v: "99,9%" },
      { k: "Kepatuhan SLA", v: "100% — kirim < 15 menit" },
      { k: "Tim per shift", v: "35–50 personel" },
      { k: "Return diproses", v: "500–1.000+ paket/hari" },
      { k: "Rekor K3", v: "0 kecelakaan, 2 tahun" },
    ],
    intro:
      "Memimpin operasi multi-shift yang menangani 15.000–20.000+ paket setiap hari, secara konsisten mencapai 100% kepatuhan SLA dengan akurasi 99,9% dan pengiriman tepat waktu di bawah 15 menit.",
    categories: [
      {
        icon: "sort",
        title: "Manajemen Sortasi",
        tag: "4 PROSES",
        points: [
          "Mengelola proses sortasi siklus penuh, termasuk penerimaan truk, routing zona, staging, dan serah terima, memanfaatkan pemantauan WMS real-time untuk mencegah kemacetan.",
          "Bertindak sebagai Shift Leader selama musim promosi puncak (menangani lonjakan volume hingga 200%), memastikan operasi 24/7 berjalan lancar dan alokasi sumber daya optimal.",
          "Berkolaborasi erat dengan tim Warehouse, Line Haul, QC, dan 3PL untuk menghilangkan kesalahan sortir dan menjamin jadwal pengiriman tepat waktu.",
        ],
      },
      {
        icon: "rack",
        title: "Manajemen Gudang (Warehouse)",
        tag: "5 PROSES",
        points: [
          "Mengelola penerimaan barang dari supplier dan alokasi penyimpanan di area gudang dengan sistem FIFO dan FEFO untuk menjaga kualitas produk.",
          "Melakukan stock opname rutin dan memastikan akurasi inventaris mencapai 99,5% melalui sistem WMS terintegrasi.",
          "Mengoptimalkan tata letak gudang untuk memaksimalkan kapasitas penyimpanan dan memperlancar arus barang inbound dan outbound.",
          "Mengelola proses picking dan packing untuk memastikan kesesuaian pesanan sebelum dikirim ke pelanggan.",
          "Mengawasi kondisi penyimpanan barang sensitif (seperti elektronik dan produk perishable) sesuai standar kualitas yang ditetapkan.",
        ],
      },
      {
        icon: "return",
        title: "Manajemen Return (Reverse Logistics)",
        tag: "5 PROSES",
        points: [
          "Mengelola proses return barang secara end-to-end, mulai dari penerimaan paket return, verifikasi, inspeksi kondisi barang, hingga proses sortasi ulang untuk dikirim kembali ke gudang atau merchant.",
          "Mengkoordinasikan tim khusus return yang berjumlah 10–15 personel per shift untuk memproses 500–1.000+ paket return harian dengan akurasi 100%.",
          "Menerapkan sistem klasifikasi kondisi barang return (layak jual kembali, rusak ringan, rusak berat, atau perlu perbaikan) untuk mempercepat proses refund dan replacement.",
          "Berkolaborasi dengan tim Customer Service dan Merchant untuk memverifikasi kelengkapan dokumen return dan mempercepat proses penyelesaian klaim pelanggan.",
          "Mengembangkan SOP khusus untuk penanganan return barang termasuk prosedur pengecekan kemasan, pencocokan data, dan pelaporan kondisi fisik barang.",
        ],
      },
      {
        icon: "team",
        title: "Kepemimpinan & Pengembangan Tim",
        tag: "6 PROSES",
        points: [
          "Mengkoordinasikan dan membimbing tim berjumlah 35–50 personel per shift, memimpin briefing harian untuk menyelaraskan target, protokol keselamatan, dan metrik operasional.",
          "Melaksanakan perencanaan tenaga kerja strategis berdasarkan perkiraan volume yang akurat, yang berhasil meningkatkan throughput sortasi sebesar 22% tanpa memerlukan tambahan headcount.",
          "Melakukan evaluasi kinerja secara berkala dan memberikan pembinaan kepada anggota tim, yang menghasilkan peningkatan produktivitas individu dan pengurangan tingkat kesalahan.",
          "Mengembangkan dan mengimplementasikan prosedur serah terima shift standar, memastikan transisi yang mulus antar shift dan meminimalkan waktu henti operasional.",
          "Memimpin analisis akar penyebab untuk masalah operasional, mengimplementasikan tindakan perbaikan yang mengurangi insiden kesalahan sortir return sebesar 30%.",
          "Membimbing supervisor junior dan staf berpotensi tinggi, membangun jalur suksesi yang kuat untuk posisi kepemimpinan.",
        ],
      },
      {
        icon: "shield",
        title: "Keselamatan & Kepatuhan",
        tag: "4 PROSES",
        points: [
          "Mempertahankan rekor nol kecelakaan dan nol kerugian selama 2 tahun berturut-turut dengan menerapkan secara ketat K3, 5R, dan prosedur operasi standar (SOP).",
          "Mengawasi kepatuhan keselamatan di seluruh shift, melakukan audit keselamatan rutin dan toolbox talks untuk mempertahankan budaya nol kecelakaan.",
          "Mengelola komunikasi real-time dengan tim Line Haul dan Transportasi untuk mengkoordinasikan jadwal pengiriman, mengurangi waktu tunggu sebesar 15%.",
          "Menginisiasi dan memimpin proyek perbaikan berkelanjutan, termasuk optimasi alur kerja dan penyesuaian tata letak, meningkatkan efisiensi sortasi secara keseluruhan.",
        ],
      },
    ],
  },
  {
    id: "fif",
    company: "PT Federal International Finance",
    role: "Junior Remedial Field",
    period: "2016 — 2019",
    location: "Jabodetabek",
    code: "LOT-02",
    compact: true,
    highlights: [
      { k: "Penyelesaian target", v: "95%+ tiap bulan" },
      { k: "Fokus", v: "Penagihan & negosiasi" },
      { k: "Lingkup", v: "Portofolio nasabah bermasalah" },
    ],
    points: [
      "Melaksanakan strategi penagihan lapangan yang terarah, secara konsisten melampaui target pemulihan bulanan dengan mencapai tingkat penyelesaian 95%+.",
      "Menganalisis portofolio nasabah bermasalah untuk memetakan prioritas kunjungan secara strategis dan mempersonalisasi pendekatan negosiasi.",
      "Memfasilitasi komunikasi profesional dengan nasabah, berhasil menyelesaikan kewajiban yang belum dibayar melalui rencana restrukturisasi pembayaran yang efektif.",
      "Berkoordinasi dengan tim hukum internal dan surveyor untuk memverifikasi kelengkapan dokumen dan memperlancar proses eksekusi aset.",
    ],
  },
];

export const EDUCATION = {
  school: "SMK PGRI 1 Cibinong",
  year: "LULUS 2011",
  major: "Sekolah Menengah Kejuruan — Teknik Komputer & Jaringan",
  note: "Fondasi teknis jaringan & komputer yang kini menopang operasi WMS, PDA scanner, dan analisis data operasional.",
};

export interface Cert {
  code: string;
  title: string;
  issuer: string;
}

export const CERTS: Cert[] = [
  { code: "CERT-001", title: "Manajemen Proyek", issuer: "LinkedIn Learning" },
  { code: "CERT-002", title: "Dasar-Dasar Keamanan Jaringan", issuer: "Open University" },
  { code: "CERT-003", title: "Excel Power Pivot", issuer: "LinkedIn Learning" },
];

export const LANGUAGES = [
  { name: "Indonesia", level: "BAHASA IBU", cells: 5, note: "Komunikasi harian, briefing tim, dan penulisan SOP." },
  { name: "Inggris", level: "LANCAR", cells: 4, note: "Korespondensi operasional dan dokumentasi sistem." },
];

export const NAV_ITEMS = [
  { id: "profil", label: "PROFIL" },
  { id: "zona", label: "ZONA SKILL" },
  { id: "rekam", label: "REKAM JEJAK" },
  { id: "kredensial", label: "KREDENSIAL" },
  { id: "kontak", label: "DOCK KONTAK" },
];
