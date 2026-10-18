/**
 * Darma Properti — Data Galeri Proyek
 * 
 * ATURAN KONTEN KETAT (design.md & prompt-implementasi.md):
 * - Aset fotografi aktual milik Darma Properti saat ini belum diserahkan oleh klien.
 * - Oleh karena itu, SEMUA item diberi flag `isPlaceholder: true`.
 * - Tampilan publik secara jujur melabeli item sebagai "Visual Referensi" / "Reference Visual"
 *   dan tidak mengarang klien fiktif atau data proyek palsu.
 * - Begitu foto proyek asli tersedia, cukup ganti path file di `public/images/` dan ubah `isPlaceholder: false`.
 */

export const projectsData = [
  {
    id: "ref-project-01",
    title: {
      id: "Paviliun Beton & Kayu Tropis",
      en: "Tropical Concrete & Timber Pavilion",
    },
    category: {
      id: "Studi Konstruksi Residensial",
      en: "Residential Construction Study",
    },
    typology: {
      id: "Hunian Pribadi",
      en: "Private Residence",
    },
    image: "/images/hero-architecture.jpg",
    imageAlt: {
      id: "Visual referensi desain: Hunian modern dua lantai beton ekspos dengan kolam renang reflektif",
      en: "Reference visual: Two-storey exposed concrete modern residence with reflective swimming pool",
    },
    spanType: "feature", // Menempati 7 dari 12 kolom
    aspectRatio: "16/9",
    isPlaceholder: true,
  },
  {
    id: "ref-project-02",
    title: {
      id: "Monolit Tangga & Ruang Skylight",
      en: "Monolithic Staircase & Skylight Well",
    },
    category: {
      id: "Studi Struktur Vertikal",
      en: "Vertical Structure Study",
    },
    typology: {
      id: "Elemen Arsitektural",
      en: "Architectural Element",
    },
    image: "/images/project-vertical.jpg",
    imageAlt: {
      id: "Visual referensi desain: Menara atrium beton dengan tangga spiral dan pencahayaan skylight dramatis",
      en: "Reference visual: Concrete atrium tower featuring spiral staircase and dramatic natural skylight",
    },
    spanType: "tall", // Menempati 5 dari 12 kolom vertikal
    aspectRatio: "3/4",
    isPlaceholder: true,
  },
  {
    id: "ref-project-03",
    title: {
      id: "Paviliun Batu Hitam & Kisi Kayu",
      en: "Black Basalt & Timber Slats Pavilion",
    },
    category: {
      id: "Studi Integrasi Lanskap",
      en: "Landscape Integration Study",
    },
    typology: {
      id: "Villa Santai",
      en: "Leisure Villa",
    },
    image: "/images/project-wide.jpg",
    imageAlt: {
      id: "Visual referensi desain: Villa beratap datar dengan dinding batu alam hitam dan kolam air tenang",
      en: "Reference visual: Flat-roof villa with black natural stone walls and serene reflecting pool",
    },
    spanType: "wide", // Rentang horizontal lebar
    aspectRatio: "16/9",
    isPlaceholder: true,
  },
];
