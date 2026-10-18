/**
 * Darma Properti — Data Listing Properti
 * 
 * ATURAN KONTEN KETAT (design.md & prompt-implementasi.md):
 * - Jangan mengarang data listing, harga, luas tanah/bangunan, legalitas, atau ketersediaan palsu.
 * - Array `verifiedProperties` dibiarkan kosong `[]` secara default hingga data listing terverifikasi diberikan oleh pemilik.
 * - Bila data kosong, website menampilkan "Intentional Empty State" editorial yang elegan dengan tombol WhatsApp untuk menanyakan unit yang sedang tersedia secara langsung.
 * - Objek `draftTemplates` disediakan hanya sebagai acuan struktur data untuk mempermudah klien/developer saat memasukkan listing asli.
 */

export const propertyCategories = [
  { id: "all", label: { id: "Semua Kategori", en: "All Categories" } },
  { id: "house", label: { id: "Rumah Residensial", en: "Houses" } },
  { id: "villa", label: { id: "Villa Tropis", en: "Villas" } },
  { id: "land", label: { id: "Kavling Tanah", en: "Land Plots" } },
];

// Array listing publik terverifikasi (Kosong sampai disuplai data resmi oleh klien)
export const verifiedProperties = [];

// Template draft untuk panduan pengisian listing resmi di masa mendatang
export const draftTemplates = [
  {
    id: "draft-sample-01",
    title: {
      id: "[DRAFT] Villa Tropis Minimalis",
      en: "[DRAFT] Minimalist Tropical Villa",
    },
    category: "villa",
    typeLabel: {
      id: "Villa Residensial",
      en: "Residential Villa",
    },
    location: {
      id: "Lokasi Belum Terverifikasi",
      en: "Unverified Location",
    },
    priceDisplay: {
      id: "Hubungi untuk Informasi Harga",
      en: "Inquire for Pricing",
    },
    status: "draft", // "available" | "reserved" | "sold" | "draft"
    description: {
      id: "Format draf untuk pengisian listing villa resmi. Hubungi admin untuk melengkapi data.",
      en: "Draft format for official villa listing. Contact admin to populate actual data.",
    },
    image: "/images/service-property.jpg",
    specs: {
      landSize: "-",
      buildingSize: "-",
      bedrooms: "-",
      bathrooms: "-",
    },
  },
];
