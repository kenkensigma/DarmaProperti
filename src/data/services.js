/**
 * Darma Properti — Data Layanan (Services)
 * 
 * Sesuai ketentuan design.md & prompt-implementasi.md:
 * - 3 pilar bisnis inti: Konstruksi, Renovasi, Layanan Properti.
 * - Tidak mengklaim layanan tambahan di luar konfirmasi pemilik (misal: jasa arsitektur mandiri, legal khusus, dsb.).
 */

export const servicesData = [
  {
    id: "construction",
    number: "01",
    title: {
      id: "Konstruksi Presisi",
      en: "Precision Construction",
    },
    shortTag: {
      id: "Struktur & Bangun Baru",
      en: "New Builds & Structures",
    },
    description: {
      id: "Pelaksanaan pembangunan fisik residensial dan komersial dengan standar struktur kokoh, pengawasan ketat, pemilihan material berkualitas, dan presisi tinggi sesuai cetak biru arsitektur.",
      en: "Physical execution of residential and commercial developments built to rigorous structural standards, meticulous site supervision, curated materials, and high architectural fidelity.",
    },
    image: "/images/service-construction.jpg",
    imageAlt: {
      id: "Pekerjaan konstruksi struktur modern berdinding beton dan kaca lebar",
      en: "Modern structural concrete and wide glass architectural construction",
    },
    contextType: "construction",
  },
  {
    id: "renovation",
    number: "02",
    title: {
      id: "Renovasi & Transformasi Ruang",
      en: "Renovation & Spatial Transformation",
    },
    shortTag: {
      id: "Penyegaran & Pemugaran",
      en: "Refurbishment & Reconfiguration",
    },
    description: {
      id: "Pemugaran terencana untuk meningkatkan kualitas ruang hidup, optimalisasi sirkulasi udara dan cahaya alami, peremajaan finishing interior-eksterior, serta penguatan fungsionalitas bangunan eksisting.",
      en: "Planned refurbishment to elevate living spaces, optimize airflow and daylight, modernize interior and exterior finishes, and enhance the longevity and functionality of existing properties.",
    },
    image: "/images/service-renovation.jpg",
    imageAlt: {
      id: "Transformasi interior arsitektural minimalis dengan pencahayaan hangat dan taman dalam",
      en: "Minimalist architectural interior renovation with warm lighting and indoor garden",
    },
    contextType: "renovation",
  },
  {
    id: "property",
    number: "03",
    title: {
      id: "Layanan & Pemasaran Properti",
      en: "Property Services & Advisory",
    },
    shortTag: {
      id: "Katalog & Konsultasi Unit",
      en: "Listings & Consultation",
    },
    description: {
      id: "Pendampingan komprehensif bagi pembeli, pemilik, maupun investor dalam transaksi properti residensial, kurasi kavling tanah potensial, serta rekomendasi unit villa berkualitas.",
      en: "Comprehensive guidance for buyers, owners, and investors navigating residential transactions, curating prime land plots, and matching clients with bespoke villas.",
    },
    image: "/images/service-property.jpg",
    imageAlt: {
      id: "Villa tropis kontemporer dengan kolam renang dan lanskap asri saat senja",
      en: "Contemporary tropical villa with swimming pool and lush landscape at dusk",
    },
    contextType: "property",
  },
];
