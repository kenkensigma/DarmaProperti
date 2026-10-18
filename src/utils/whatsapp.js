import { siteConfig } from '../config/site.js';

/**
 * Memeriksa apakah nomor WhatsApp bisnis telah diverifikasi dan dikonfigurasi.
 */
export function isWhatsAppConfigured() {
  const num = (siteConfig.whatsappNumber || '').trim();
  return num.length >= 8 && /^\d+$/.test(num);
}

/**
 * Menghasilkan link WhatsApp wa.me dengan pesan prefilled yang ter-encode.
 * Jika nomor belum dikonfigurasi, mengembalikan null.
 * 
 * @param {string} lang - 'id' atau 'en'
 * @param {string} [contextType='general'] - 'general' | 'construction' | 'renovation' | 'property'
 * @param {string} [propertyTitle=''] - Nama listing spesifik jika ada
 * @returns {string|null} URL wa.me lengkap atau null jika belum dikonfigurasi
 */
export function getWhatsAppUrl(lang = 'id', contextType = 'general', propertyTitle = '') {
  if (!isWhatsAppConfigured()) {
    return null;
  }

  const cleanNumber = siteConfig.whatsappNumber.replace(/\D/g, '');
  let message = '';

  if (lang === 'en') {
    switch (contextType) {
      case 'construction':
        message = `Hello ${siteConfig.brandName}, I would like to consult about a new architectural construction project.`;
        break;
      case 'renovation':
        message = `Hello ${siteConfig.brandName}, I would like to discuss a property renovation project.`;
        break;
      case 'property':
        message = propertyTitle
          ? `Hello ${siteConfig.brandName}, I would like to ask about availability and details for "${propertyTitle}".`
          : `Hello ${siteConfig.brandName}, I would like to inquire about currently available property listings.`;
        break;
      case 'general':
      default:
        message = `Hello ${siteConfig.brandName}, I would like to inquire about your architectural and property services.`;
        break;
    }
  } else {
    // Default: Bahasa Indonesia
    switch (contextType) {
      case 'construction':
        message = `Halo ${siteConfig.brandName}, saya ingin berkonsultasi mengenai rencana proyek pembangunan/konstruksi baru.`;
        break;
      case 'renovation':
        message = `Halo ${siteConfig.brandName}, saya ingin mendiskusikan kebutuhan renovasi bangunan/properti.`;
        break;
      case 'property':
        message = propertyTitle
          ? `Halo ${siteConfig.brandName}, saya tertarik dan ingin menanyakan ketersediaan serta detail mengenai "${propertyTitle}".`
          : `Halo ${siteConfig.brandName}, saya ingin menanyakan informasi unit dan ketersediaan listing properti saat ini.`;
        break;
      case 'general':
      default:
        message = `Halo ${siteConfig.brandName}, saya ingin berkonsultasi mengenai layanan konstruksi, renovasi, dan informasi properti Anda.`;
        break;
    }
  }

  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}
