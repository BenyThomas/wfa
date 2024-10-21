import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation resources
const resources = {
  en: {
    translation: {
      "hero_title": "Better Hearing, Better Life",
      "hero_subtitle": "Providing innovative hearing solutions to improve your quality of life.",
      "hero_button": "Discover Our Hearing Aids",
      "home": "Home",
      "services": "Services",
      "testimonials": "Testimonials",
      "about_us": "About Us",
      "contact": "Contact",
      "language": "Language",
      "equipment": "Products",
      "technology": "Technology"
      // Add more key-value pairs for translations
    }
  },
  sw: {
    translation: {
      "hero_title": "Sikio Bora, Maisha Bora",
      "hero_subtitle": "Kutoa suluhisho za ubunifu za kusikia kuboresha ubora wa maisha yako.",
      "hero_button": "Gundua Vifaa Vyetu vya Usikilizaji",
      "home": "Nyumbani",
      "services": "Huduma",
      "testimonials": "Ushuhuda",
      "about_us": "Kuhusu Sisi",
      "contact": "Wasiliana Nasi",
      "language": "Lugha",
      "equipment": "Bidha",
      "technology": "Teknolojia"
      // Add more key-value pairs for translations
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language if translation is missing
    interpolation: {
      escapeValue: false // React already escapes values
    }
  });

export default i18n;
