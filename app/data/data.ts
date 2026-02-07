// src/data/data.ts

// Interfaces de base
export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  details: string[];
  duration?: string;
  price?: string;
}

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  specialty: string;
  experience: number;
  description: string;
  image: string;
  qualifications: string[];
  languages: string[];
  rating: number;
  availability: string;
}

export interface InsuranceProvider {
  id: number;
  name: string;
  logo: string;
  description: string;
  coverage: string[];
  contact: string;
  website: string;
  type: 'mutuelle' | 'assurance' | 'tiers-payant';
  rating: number;
}

export interface Partner {
  id: number;
  name: string;
  logo: string;
  description: string;
  category: 'medical' | 'pharmaceutical' | 'laboratory' | 'technology' | 'institution' | 'equipment';
  website: string;
  partnershipSince: number;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  date: string;
  service?: string;
}

export interface Statistic {
  id: number;
  value: string;
  label: string;
  icon: string;
  description: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: 'general' | 'insurance' | 'appointment' | 'services';
}

export interface CoverageInfo {
  id: number;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export interface ContactInfo {
  address: string;
  phone: string;
  emergencyPhone: string;
  email: string;
  administrativePhone: string;
  hours: {
    days: string;
    hours: string;
    note?: string;
  }[];
}

export interface NavItem {
  title: string;
  href: string;
  highlight?: boolean;
}

// Données de l'entreprise
export const companyInfo = {
  name: "Société Médicale Les Perles",
  shortName: "Les Perles",
  slogan: "Votre santé, notre priorité",
  description: "Un centre médical d'excellence offrant des soins complets et personnalisés à nos patients.",
  founded: 2010,
  certifications: ["HAS", "ISO 9001", "NF Service"],
  values: [
    {
      title: "Excellence médicale",
      description: "Des soins basés sur les dernières avancées scientifiques"
    },
    {
      title: "Approche humaine",
      description: "Une écoute attentive et un accompagnement personnalisé"
    },
    {
      title: "Innovation",
      description: "Équipements modernes et techniques de pointe"
    },
    {
      title: "Accessibilité",
      description: "Des rendez-vous rapides et un service d'urgence 24/7"
    }
  ]
};

// Services
export const services: Service[] = [
  {
    id: 1,
    title: "Consultations générales",
    description: "Consultations médicales complètes pour tous les membres de la famille",
    icon: "Stethoscope",
    details: ["Examen physique complet", "Diagnostic et traitement", "Suivi médical régulier", "Prescriptions médicales"],
    duration: "30 min",
    price: "Convention secteur 2"
  },
  {
    id: 2,
    title: "Médecine préventive",
    description: "Programmes de prévention et dépistage pour une santé durable",
    icon: "Shield",
    details: ["Vaccinations", "Dépistage précoce", "Bilan de santé annuel", "Conseils en prévention"],
    duration: "45 min",
    price: "Prise en charge mutuelle"
  },
  {
    id: 3,
    title: "Soins spécialisés",
    description: "Accès à diverses spécialités médicales pour des besoins spécifiques",
    icon: "Heart",
    details: ["Cardiologie", "Dermatologie", "Pédiatrie", "Gynécologie", "Radiologie"],
    duration: "45 min",
    price: "Selon spécialité"
  },
  {
    id: 4,
    title: "Urgences médicales",
    description: "Prise en charge rapide et efficace des situations urgentes",
    icon: "Ambulance",
    details: ["Disponibilité 24/7", "Équipement d'urgence", "Coordination avec hôpitaux", "Suivi post-urgence"],
    duration: "Variable",
    price: "Urgence"
  },
  {
    id: 5,
    title: "Télémédecine",
    description: "Consultations à distance pour plus de flexibilité",
    icon: "Video",
    details: ["Consultations vidéo sécurisées", "Prescriptions électroniques", "Suivi en ligne", "Résultats accessibles"],
    duration: "25 min",
    price: "Identique consultation"
  },
  {
    id: 6,
    title: "Laboratoire d'analyses",
    description: "Analyses médicales sur place avec résultats rapides",
    icon: "Microscope",
    details: ["Prélèvements sanguins", "Analyses urinaires", "Tests spécialisés", "Résultats sous 24h"],
    duration: "15 min",
    price: "Conventionné"
  }
];

// Équipe médicale
export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Dr. Marie Lambert",
    position: "Médecin Généraliste",
    specialty: "Médecine Générale",
    experience: 15,
    description: "Spécialisée en médecine préventive et suivi des maladies chroniques. Formée à la médecine intégrative.",
    image: "/images/team/dr-lambert.jpg",
    qualifications: ["DES Médecine Générale", "DU Nutrition", "DU Addictologie"],
    languages: ["Français", "Anglais", "Espagnol"],
    rating: 4.9,
    availability: "Lun-Ven 8h-19h"
  },
  {
    id: 2,
    name: "Dr. Jean Dubois",
    position: "Cardiologue",
    specialty: "Cardiologie",
    experience: 12,
    description: "Expert en maladies cardiovasculaires et réadaptation cardiaque. Ancien interne des Hôpitaux de Paris.",
    image: "/images/team/dr-dubois.jpg",
    qualifications: ["DES Cardiologie", "PhD Physiologie Cardiaque", "DU Échographie"],
    languages: ["Français", "Anglais"],
    rating: 4.8,
    availability: "Mar-Jeu 9h-18h"
  },
  {
    id: 3,
    name: "Dr. Sophie Martin",
    position: "Pédiatre",
    specialty: "Pédiatrie",
    experience: 10,
    description: "Dédiée à la santé des enfants et adolescents. Spécialiste en développement de l'enfant.",
    image: "/images/team/dr-martin.jpg",
    qualifications: ["DES Pédiatrie", "DU Allergologie", "DU Néonatalogie"],
    languages: ["Français", "Anglais", "Arabe"],
    rating: 4.9,
    availability: "Lun-Sam 8h30-18h"
  },
  {
    id: 4,
    name: "Dr. Pierre Leroy",
    position: "Dermatologue",
    specialty: "Dermatologie",
    experience: 8,
    description: "Spécialiste des maladies de la peau, chirurgie dermatologique et esthétique médicale.",
    image: "/images/team/dr-leroy.jpg",
    qualifications: ["DES Dermatologie", "DU Cancérologie Cutanée", "DU Médecine Esthétique"],
    languages: ["Français", "Anglais", "Italien"],
    rating: 4.7,
    availability: "Lun-Ven 9h-19h"
  }
];

// Assurances
export const insuranceProviders: InsuranceProvider[] = [
  {
    id: 1,
    name: "Harmonie Mutuelle",
    logo: "/logos/harmonie-mutuelle.svg",
    description: "Première mutuelle de France en nombre d'adhérents",
    coverage: ["Médecine générale", "Spécialistes", "Hospitalisation", "Optique", "Dentaire", "Médecine douce"],
    contact: "09 69 39 39 39",
    website: "https://www.harmonie-mutuelle.fr",
    type: "mutuelle",
    rating: 4.5
  },
  {
    id: 2,
    name: "MGEN",
    logo: "/logos/mgen.svg",
    description: "Mutuelle des professionnels de l'éducation, de la recherche et de la culture",
    coverage: ["Médecine générale", "Spécialistes", "Prévention", "Médecine douce", "Hospitalisation", "Dentaire"],
    contact: "0 810 10 10 10",
    website: "https://www.mgen.fr",
    type: "mutuelle",
    rating: 4.6
  },
  {
    id: 3,
    name: "AXA",
    logo: "/logos/axa.svg",
    description: "Assureur leader en France et dans le monde",
    coverage: ["Médecine générale", "Spécialistes", "Chirurgie", "Dentaire", "Optique", "Hospitalisation"],
    contact: "01 55 21 32 32",
    website: "https://www.axa.fr",
    type: "assurance",
    rating: 4.4
  },
  {
    id: 4,
    name: "Allianz",
    logo: "/logos/allianz.svg",
    description: "Groupe d'assurance international",
    coverage: ["Médecine générale", "Hospitalisation", "Dentaire", "Optique", "Médecine préventive", "Invalidité"],
    contact: "0 820 820 820",
    website: "https://www.allianz.fr",
    type: "assurance",
    rating: 4.3
  }
];

// Partenaires
export const partners: Partner[] = [
  {
    id: 1,
    name: "Laboratoires Roche",
    logo: "/logos/roche.svg",
    description: "Leader mondial de la biotechnologie et du diagnostic",
    category: "pharmaceutical",
    website: "https://www.roche.fr",
    partnershipSince: 2015
  },
  {
    id: 2,
    name: "Sanofi",
    logo: "/logos/sanofi.svg",
    description: "Groupe pharmaceutique mondial",
    category: "pharmaceutical",
    website: "https://www.sanofi.fr",
    partnershipSince: 2012
  },
  {
    id: 3,
    name: "Cerba HealthCare",
    logo: "/logos/cerba.svg",
    description: "Laboratoire d'analyses médicales de référence",
    category: "laboratory",
    website: "https://www.cerbahealthcare.fr",
    partnershipSince: 2014
  },
  {
    id: 4,
    name: "GE Healthcare",
    logo: "/logos/ge-healthcare.svg",
    description: "Équipements médicaux de pointe",
    category: "equipment",
    website: "https://www.gehealthcare.fr",
    partnershipSince: 2018
  }
];

// Témoignages
export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Marie Dubois",
    role: "Patient depuis 2015",
    content: "Un accueil exceptionnel et des soins de qualité. Les Perles a complètement changé ma vision de la médecine. Je recommande vivement !",
    rating: 5,
    date: "2024-01-15",
    service: "Médecine générale"
  },
  {
    id: 2,
    name: "Pierre Martin",
    role: "Patient en cardiologie",
    content: "Le Dr. Dubois a su diagnostiquer rapidement mon problème cardiaque. Professionnel et humain, je me sens en sécurité entre ses mains.",
    rating: 5,
    date: "2024-02-03",
    service: "Cardiologie"
  },
  {
    id: 3,
    name: "Sophie Laurent",
    role: "Mère de famille",
    content: "Parfait pour les enfants ! Le pédiatre est patient et explique tout avec douceur. Mon fils n'a plus peur des consultations.",
    rating: 5,
    date: "2024-01-28",
    service: "Pédiatrie"
  }
];

// Statistiques
export const statistics: Statistic[] = [
  {
    id: 1,
    value: "10,000+",
    label: "Patients satisfaits",
    icon: "Users",
    description: "Depuis notre création en 2010"
  },
  {
    id: 2,
    value: "15 min",
    label: "Délai moyen d'attente",
    icon: "Clock",
    description: "Dans nos salles d'attente"
  },
  {
    id: 3,
    value: "98%",
    label: "Taux de satisfaction",
    icon: "Award",
    description: "Selon nos enquêtes patients"
  },
  {
    id: 4,
    value: "24/7",
    label: "Service d'urgence",
    icon: "Shield",
    description: "Tous les jours de l'année"
  }
];

// FAQ
export const faqs: FAQ[] = [
  {
    id: 1,
    question: "Comment prendre rendez-vous rapidement ?",
    answer: "Vous pouvez prendre rendez-vous via notre plateforme en ligne, par téléphone au 01 23 45 67 89, ou en vous rendant à l'accueil. Les RDV en ligne sont traités immédiatement.",
    category: "appointment"
  },
  {
    id: 2,
    question: "Quels documents apporter à la première consultation ?",
    answer: "Votre carte vitale, votre carte de mutuelle, vos derniers examens médicaux et ordonnances en cours, ainsi qu'une pièce d'identité.",
    category: "general"
  },
  {
    id: 3,
    question: "Le centre accepte-t-il les nouvelles mutuelles ?",
    answer: "Oui, nous travaillons avec toutes les mutuelles. Le tiers payant est appliqué pour la plupart des contrats. Vérifiez auprès de votre mutuelle pour les spécificités.",
    category: "insurance"
  },
  {
    id: 4,
    question: "Y a-t-il un service d'urgences ?",
    answer: "Oui, notre service d'urgence est ouvert 24h/24 et 7j/7. Composez le 01 23 45 67 90 pour les urgences.",
    category: "services"
  }
];

// Informations de prise en charge
export const coverageInfo: CoverageInfo[] = [
  {
    id: 1,
    title: "Tiers payant intégral",
    description: "Pas d'avance de frais pour la plupart des actes",
    icon: "CreditCard",
    details: ["Carte vitale obligatoire", "Mutuelle partenaire", "Pas d'avance de frais", "Remboursement direct"]
  },
  {
    id: 2,
    title: "Couverture étendue",
    description: "Prise en charge de nombreuses spécialités",
    icon: "ShieldCheck",
    details: ["Médecine générale", "Spécialités médicales", "Analyses biologiques", "Imagerie médicale"]
  },
  {
    id: 3,
    title: "Délais de remboursement",
    description: "Traitement rapide des dossiers",
    icon: "Clock",
    details: ["48h pour les mutuelles", "72h pour les assurances", "Télédéclaration", "Suivi en ligne"]
  },
  {
    id: 4,
    title: "Conventionnement secteur 2",
    description: "Dépassements d'honoraires maîtrisés",
    icon: "Scale",
    details: ["Honoraires libres", "Dépassements raisonnables", "Transparence des tarifs", "Accords avec les mutuelles"]
  }
];

// Informations de contact
export const contactInfo: ContactInfo = {
  address: "123 Avenue de la Santé, 75000 Paris, France",
  phone: "+33 1 23 45 67 89",
  emergencyPhone: "+33 1 23 45 67 90",
  email: "contact@lesperles-medical.fr",
  administrativePhone: "+33 1 23 45 67 88",
  hours: [
    { days: "Lundi - Vendredi", hours: "8h00 - 19h00" },
    { days: "Samedi", hours: "9h00 - 17h00" },
    { days: "Dimanche", hours: "Urgences uniquement", note: "Sur rendez-vous" }
  ]
};

// Navigation
export const navItems: NavItem[] = [
  { title: "Accueil", href: "/" },
  { title: "À propos", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Équipe", href: "/team" },
  { title: "Assurances & Partenaires", href: "/assurances-partenaires" },
  { title: "Contact", href: "/contact" },
  { title: "RDV en ligne", href: "/rendez-vous", highlight: true }
];

// Fonctions utilitaires
export const getIconComponent = (iconName: string): React.ComponentType<any> | null => {
  const iconMap: { [key: string]: string } = {
    'Stethoscope': 'Stethoscope',
    'Shield': 'Shield',
    'Heart': 'Heart',
    'Ambulance': 'Ambulance',
    'Video': 'Video',
    'Microscope': 'Microscope',
    'Users': 'Users',
    'Clock': 'Clock',
    'Award': 'Award',
    'CreditCard': 'CreditCard',
    'ShieldCheck': 'Shield',
    'Scale': 'Scale'
  };
  
  // Dans un vrai projet, vous importeriez les icônes de lucide-react
  return null;
};

export const getCategoryIcon = (category: string): React.ComponentType<any> | null => {
  const categoryMap: { [key: string]: string } = {
    'medical': 'Building',
    'pharmaceutical': 'Pill',
    'laboratory': 'Microscope',
    'technology': 'Cpu',
    'institution': 'School',
    'equipment': 'Cpu'
  };
  
  return null;
};