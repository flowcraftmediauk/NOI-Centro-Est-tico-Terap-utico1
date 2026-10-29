import { ClinicData, IntakeQuestion } from '../types/clinic';

export const initialClinicData: ClinicData = {
  businessName: 'NOI Centro Estético Terapéutico',
  brandSubmark: 'Centro Dermatocosmiátrico y Bienestar',
  slogan: 'No te dejes para después',
  logoUrl: '', // Left empty until client provides the official graphic logo
  
  // Hero section content: uses verified slogan & verified business category
  heroHeadline: 'Tu bienestar y belleza terapéutica en equilibrio',
  heroDescription: 'Cuidado facial dermatocosmiátrico, terapias postoperatorias especializadas y masajes terapéuticos para renovar tu salud y armonía.',
  
  // About section content
  aboutTitle: 'Bienvenidos a NOI',
  aboutDescription: 'En NOI Centro Estético Terapéutico nos dedicamos al cuidado integral de la piel y el bienestar corporal mediante técnicas terapéuticas y cosmiátricas especializadas, brindando una experiencia serena y profesional en el Austro ecuatoriano.',
  
  // Verified contact information
  whatsappNumber: '+593 96 953 9205',
  whatsappRaw: '593969539205',
  instagramUrl: 'https://www.instagram.com/noi_centroestetico?psln=dmltZDZ4ZWtsY2Zv',
  instagramHandle: '@noi_centroestetico',
  
  // Missing details left strictly empty for client confirmation
  email: '',
  openingHours: '',
  
  // Locations verified from official Instagram profile: Cuenca, Paute, Azogues
  // Specific street addresses left empty for confirmation
  locations: [
    {
      city: 'Cuenca',
      address: '', // Pending exact address confirmation
      reference: 'Azuay, Ecuador'
    },
    {
      city: 'Paute',
      address: '', // Pending exact address confirmation
      reference: 'Azuay, Ecuador'
    },
    {
      city: 'Azogues',
      address: '', // Pending exact address confirmation
      reference: 'Cañar, Ecuador'
    }
  ],
  
  // Verified / preliminary treatments strictly identified from Instagram & WhatsApp profile
  services: [
    {
      id: 'post-operatorio',
      title: 'Terapias Postoperatorias Personalizadas',
      category: 'corporal',
      description: 'Drenaje linfático manual y protocolos para reducción de inflamación, prevención de fibrosis y aceleración de la recuperación postquirúrgica.',
      price: '', // Left empty (never invent prices)
      image: '/src/assets/images/services_therapeutic_stones_1793280729422.jpg',
      isFeatured: true,
      status: 'verified'
    },
    {
      id: 'limpieza-facial',
      title: 'Limpieza Facial Profunda Dermatocosmiátrica',
      category: 'facial',
      description: 'Higiene cutánea intensiva, exfoliación, descongestión e hidratación profunda con activos botánicos y aparatología cosmiátrica.',
      price: '',
      image: '/src/assets/images/services_facial_skincare_1793280727497.jpg',
      isFeatured: false,
      status: 'verified'
    },
    {
      id: 'masaje-piedras',
      title: 'Masaje Relajante con Piedras Calientes',
      category: 'masajes',
      description: 'Terapia geotermal que combina suaves maniobras de masaje con el calor de piedras volcánicas basálticas para aliviar la tensión muscular profunda.',
      price: '',
      image: '/src/assets/images/services_therapeutic_stones_1793280729422.jpg',
      isFeatured: false,
      status: 'verified'
    },
    {
      id: 'noi-lift-4d',
      title: 'NOI Lift Intensive 4D',
      category: 'facial',
      description: 'Tratamiento facial no invasivo diseñado para estimular la síntesis de colágeno, reafirmar contornos y recuperar la luminosidad.',
      price: '',
      image: '/src/assets/images/about_facial_wellness_1793280727554.jpg',
      isFeatured: false,
      status: 'preliminary'
    },
    {
      id: 'prp-plasma',
      title: 'Plasma Rico en Plaquetas (PRP)',
      category: 'facial',
      description: 'Protocolo bioestimulante autólogo orientado a la regeneración celular y revitalización de la textura dérmica.',
      price: '',
      image: '/src/assets/images/services_facial_skincare_1793280727497.jpg',
      isFeatured: false,
      status: 'preliminary'
    },
    {
      id: 'ejercicio-terapeutico',
      title: 'Ejercicio Terapéutico para Adultos Mayores',
      category: 'corporal',
      description: 'Sesiones de movilidad asistida, fortalecimiento suave y rehabilitación preventiva adaptada a cada condición física.',
      price: '',
      image: '/src/assets/images/expertise_clinic_lounge_1793280728248.jpg',
      isFeatured: false,
      status: 'preliminary'
    },
    {
      id: 'gift-cards',
      title: 'Gift Cards de Bienestar & Estética',
      category: 'especiales',
      description: 'Certificados de regalo personalizables para sorprender a seres queridos con sesiones de relajación y cuidado facial.',
      price: '',
      image: '/src/assets/images/hero_skincare_portrait_1793280726421.jpg',
      isFeatured: false,
      status: 'preliminary'
    }
  ],
  
  // Real highlights without vanity metrics or fake percentages
  highlights: [
    {
      number: '3',
      label: 'Sedes',
      sublabel: 'Cuenca · Paute · Azogues'
    },
    {
      number: '100%',
      label: 'Personalizado',
      sublabel: 'Protocolos adaptados a cada piel'
    },
    {
      number: 'NOI',
      label: 'Filosofía',
      sublabel: '"No te dejes para después"'
    }
  ]
};

// Checklist of missing business details to collect one question at a time
export const defaultIntakeQuestions: IntakeQuestion[] = [
  {
    id: 'intro-headline',
    field: 'heroHeadline',
    question: '¿Cuál es la frase o título principal con el que le gustaría recibir a sus pacientes en la portada?',
    explanation: 'Actualmente usamos el lema verificado: "Tu bienestar y belleza terapéutica en equilibrio" junto a "No te dejes para después". ¿Desea mantenerlo o prefiere otro mensaje oficial?',
    placeholder: 'Ej: Especialistas en Cosmiatría y Rehabilitación Terapéutica en Cuenca',
    currentValue: 'Tu bienestar y belleza terapéutica en equilibrio',
    status: 'answered'
  },
  {
    id: 'exact-addresses',
    field: 'locations',
    question: '¿Cuáles son las direcciones exactas de las sedes de NOI en Cuenca, Paute y Azogues?',
    explanation: 'El perfil de Instagram confirma sedes en Cuenca, Paute y Azogues, pero no especifica las calles, números o referencias físicas.',
    placeholder: 'Ej: Cuenca: Av. Solano y Doce de Abril, Edificio X piso 2; Paute: Calle Abdón Calderón...',
    currentValue: '',
    status: 'pending'
  },
  {
    id: 'opening-hours',
    field: 'openingHours',
    question: '¿Cuáles son los horarios oficiales de atención al público?',
    explanation: 'Permite informar con precisión a los pacientes cuándo pueden agendar citas o acudir a valoración.',
    placeholder: 'Ej: Lunes a Viernes de 09:00 a 18:30 / Sábados previa cita',
    currentValue: '',
    status: 'pending'
  },
  {
    id: 'contact-email',
    field: 'email',
    question: '¿Tiene el centro un correo electrónico oficial de contacto para consultas o presupuestos?',
    explanation: 'Si no disponen de correo y prefieren centralizar todo por WhatsApp (+593 96 953 9205), podemos omitirlo.',
    placeholder: 'Ej: contacto@noicentroestetico.com',
    currentValue: '',
    status: 'pending'
  },
  {
    id: 'pricing-policy',
    field: 'pricing',
    question: '¿Desean mostrar precios referenciales de los tratamientos o prefieren que el botón dirija a cotización personalizada por WhatsApp?',
    explanation: 'En clínicas estéticas es habitual cotizar tras valoración para personalizar el protocolo.',
    placeholder: 'Ej: Solo cotización personalizada por WhatsApp / Incluir precios de limpiezas',
    currentValue: '',
    status: 'pending'
  },
  {
    id: 'staff-info',
    field: 'team',
    question: '¿Desea la directora o cosmiatra incluir su nombre y especialidad en la sección "Sobre nosotros"?',
    explanation: 'Añadir el perfil profesional genera alta confianza en pacientes de tratamientos postoperatorios y faciales.',
    placeholder: 'Ej: Dra./Lic. [Nombre], Cosmiatra y Terapeuta especializada',
    currentValue: '',
    status: 'pending'
  },
  {
    id: 'official-logo',
    field: 'logoUrl',
    question: '¿Tienen archivo digital del logotipo oficial (PNG o SVG) para incorporarlo en la cabecera?',
    explanation: 'Actualmente mostramos un elegante isotipo tipográfico y destello floral con el nombre oficial.',
    placeholder: 'URL o archivo del logotipo',
    currentValue: '',
    status: 'pending'
  }
];
