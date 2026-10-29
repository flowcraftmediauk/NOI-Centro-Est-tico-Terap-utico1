export interface ClinicService {
  id: string;
  title: string;
  category: 'facial' | 'corporal' | 'masajes' | 'especiales';
  description: string;
  price?: string; // empty if unverified
  image: string;
  isFeatured?: boolean;
  status: 'verified' | 'preliminary' | 'custom';
}

export interface ClinicLocation {
  city: string;
  address: string; // empty if pending
  reference?: string;
  googleMapsUrl?: string;
}

export interface ClinicData {
  businessName: string;
  brandSubmark: string;
  slogan: string;
  logoUrl: string;
  heroHeadline: string;
  heroDescription: string;
  aboutTitle: string;
  aboutDescription: string;
  whatsappNumber: string;
  whatsappRaw: string;
  instagramUrl: string;
  instagramHandle: string;
  email: string; // empty if pending
  openingHours: string; // empty if pending
  locations: ClinicLocation[];
  services: ClinicService[];
  highlights: {
    number: string;
    label: string;
    sublabel: string;
  }[];
  customNotes?: string;
}

export interface IntakeQuestion {
  id: string;
  field: keyof ClinicData | string;
  question: string;
  explanation: string;
  placeholder: string;
  currentValue: string;
  status: 'answered' | 'pending' | 'skipped';
}
