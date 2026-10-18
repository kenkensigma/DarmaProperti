/**
 * Darma Properti — Central Site Configuration
 * 
 * PANDUAN PENGATURAN:
 * 1. whatsappNumber: Masukkan nomor WhatsApp resmi dengan kode negara tanpa tanda '+' atau spasi (contoh: "6281234567890").
 *    Biarkan kosong "" hingga nomor resmi diverifikasi.
 * 2. phoneDisplay: Tampilan nomor telepon yang dibaca pengguna (contoh: "+62 812-3456-7890").
 * 3. address & email: Hanya isi jika data resmi telah terkonfirmasi. Jika kosong, UI otomatis menyembunyikan item ini.
 */
export const siteConfig = {
  brandName: "Darma Properti",
  tagline: {
    id: "Konstruksi, Renovasi & Layanan Properti",
    en: "Construction, Renovation & Property Services",
  },
  // Nomor WhatsApp resmi terverifikasi
  whatsappNumber: "6289695915622", 
  phoneDisplay: "+62 896-9591-5622",
  address: "",
  email: "",
  operatingHours: {
    id: "Senin – Sabtu: 08.00 – 17.00 WITA",
    en: "Monday – Saturday: 08:00 – 17:00 WITA",
  },
  // Lokasi wilayah layanan umum (hanya ditampilkan jika diverifikasi)
  regionDisplay: {
    id: "Indonesia",
    en: "Indonesia",
  },
  socials: {
    instagram: "", // Isi jika akun resmi tersedia
  },
};
