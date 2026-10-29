// Direct Vite asset imports guarantee that images are properly bundled into dist/assets/
// on Netlify, Vercel, Hostinger, and local dev server.

import heroPortrait from './images/luxury_skincare_glow_1793284849294.jpg';
import aboutFacial from './images/luxury_facial_sculpting_1793284850543.jpg';
import servicesSkincare from './images/services_facial_skincare_1793280727497.jpg';
import servicesStones from './images/services_therapeutic_stones_1793280729422.jpg';
import expertiseLounge from './images/expertise_clinic_lounge_1793280728248.jpg';
import heroPortraitAlt from './images/hero_skincare_portrait_1793280726421.jpg';
import aboutFacialAlt from './images/about_facial_wellness_1793280727554.jpg';

export const clinicImages = {
  hero: heroPortrait || '/images/hero_portrait.jpg',
  heroAlt: heroPortraitAlt || '/images/hero_portrait_alt.jpg',
  about: aboutFacial || '/images/about_facial.jpg',
  aboutAlt: aboutFacialAlt || '/images/about_facial_alt.jpg',
  servicesSkincare: servicesSkincare || '/images/services_skincare.jpg',
  servicesStones: servicesStones || '/images/services_stones.jpg',
  expertiseLounge: expertiseLounge || '/images/expertise_lounge.jpg'
};
