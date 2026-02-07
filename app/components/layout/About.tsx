// src/components/sections/About.tsx
import { Target, Users, Shield, Award } from 'lucide-react';
import Section from '../ui/Section';
import Card, { CardContent } from '../ui/Card';
import Badge from '../ui/Badge';
import { companyInfo } from '../../data/data';

export default function About() {
  return (
    <Section
      id="about"
      title="À propos de nous"
      subtitle={`${companyInfo.name} - ${companyInfo.slogan}`}
      background="blue"
    >
      {/* Introduction */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <p className="text-lg text-gray-600">
          Fondée en {companyInfo.founded}, la Société Médicale Les Perles s'est imposée 
          comme une référence dans le paysage médical français grâce à son engagement 
          envers l'excellence et l'innovation.
        </p>
      </div>

      {/* Valeurs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {companyInfo.values.map((value, index) => {
          const icons = [Target, Users, Shield, Award];
          const Icon = icons[index] || Target;
          
          return (
            <Card key={index} hover className="h-full">
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon className="h-8 w-8 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Certifications et chiffres */}
      <div className="bg-linear-to-r from-blue-700 to-blue-800 rounded-2xl p-8 text-white">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Certifications et accréditations
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl">
              Notre centre est accrédité par les plus hautes instances médicales 
              françaises et répond aux normes de qualité les plus strictes.
            </p>
            <div className="flex flex-wrap gap-3">
              {companyInfo.certifications.map((certif, idx) => (
                <Badge key={idx} variant="secondary">
                  {certif}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">500m²</div>
              <div className="text-blue-200">Surface médicale</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">20+</div>
              <div className="text-blue-200">Salles de consultation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">3M€</div>
              <div className="text-blue-200">Investis</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">ISO</div>
              <div className="text-blue-200">Qualité</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}