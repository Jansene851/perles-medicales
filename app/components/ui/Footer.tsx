import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Stethoscope } from 'lucide-react';
import Link from 'next/link';
import { contactInfo, companyInfo } from '../../data/data';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-white p-1.5 rounded-md">
                <Stethoscope className="h-6 w-6 text-blue-800" />
              </div>
              <div>
                <h3 className="text-xl font-bold">{companyInfo.name}</h3>
                <p className="text-blue-200 text-sm">{companyInfo.slogan}</p>
              </div>
            </div>
            <p className="text-blue-200 mb-6">
              {companyInfo.description}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Liens Rapides</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-blue-200 hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-blue-200 hover:text-white transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-blue-200 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-blue-200 hover:text-white transition-colors">
                  Notre équipe
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-200 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Nos Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">
                  Consultations générales
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">
                  Médecine préventive
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">
                  Soins spécialisés
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">
                  Urgences médicales
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-300 mt-0.5" />
                <span className="text-blue-200">{contactInfo.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-300" />
                <span className="text-blue-200">{contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-300" />
                <span className="text-blue-200">{contactInfo.email}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-12 pt-8 text-center text-blue-300">
          <p>&copy; {currentYear} {companyInfo.name}. Tous droits réservés.</p>
          <p className="mt-2 text-sm">Site médical informatif - Consultez toujours un professionnel de santé</p>
        </div>
      </div>
    </footer>
  );
}