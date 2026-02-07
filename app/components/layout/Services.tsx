// src/components/sections/Services.tsx
import { CheckCircle } from 'lucide-react';
import Section from '../ui/Section';
import Card, { CardContent } from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { services } from '../../data/data';

const iconComponents: { [key: string]: string } = {
  'Stethoscope': '🩺',
  'Shield': '🛡️',
  'Heart': '❤️',
  'Ambulance': '🚑',
  'Video': '📹',
  'Microscope': '🔬'
};

export default function Services() {
  return (
    <Section
      id="services"
      title="Nos Services Médicaux"
      subtitle="Des soins complets adaptés à tous vos besoins de santé"
      background="gray"
    >
      {/* Introduction */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <p className="text-lg text-gray-600">
          Notre centre médical propose une gamme complète de services pour prendre soin 
          de votre santé à chaque étape de votre vie.
        </p>
      </div>

      {/* Grille des services */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Card 
            key={service.id} 
            hover 
            className="group hover:shadow-xl transition-all duration-300"
          >
            <CardContent className="p-6 h-full flex flex-col">
              {/* En-tête avec icône */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">
                    {iconComponents[service.icon] || '🏥'}
                  </div>
                  <div className="flex gap-2">
                    {service.duration && (
                      <Badge variant="outline" size="sm">
                        {service.duration}
                      </Badge>
                    )}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
              </div>

              {/* Détails */}
              <div className="mb-6 grow">
                <h4 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wider">
                  Ce service inclut :
                </h4>
                <ul className="space-y-2">
                  {service.details.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                      <span className="text-gray-700 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pied de carte */}
              <div className="border-t border-gray-100 pt-6 mt-auto">
                <div className="flex items-center justify-between">
                  {service.price && (
                    <span className="text-sm text-gray-500">{service.price}</span>
                  )}
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="group-hover:bg-blue-50"
                  >
                    <a href={`/rendez-vous?service=${service.id}`} className="flex items-center gap-2">
                      Prendre RDV
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <div className="bg-linear-to-r from-blue-50 to-white rounded-2xl p-8 max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Vous ne trouvez pas le service dont vous avez besoin ?
          </h3>
          <p className="text-gray-600 mb-6">
            Contactez-nous pour discuter de vos besoins spécifiques. 
            Notre équipe pourra vous orienter vers la meilleure solution.
          </p>
          <Button variant="primary" size="lg">
            <a href="/contact" className="flex items-center gap-2">
              Nous contacter
            </a>
          </Button>
        </div>
      </div>
    </Section>
  );
}