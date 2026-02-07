// src/components/sections/Team.tsx
import { Star, GraduationCap, Globe, Calendar } from 'lucide-react';
import Section from '../ui/Section';
import Card, { CardContent } from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { teamMembers } from '../../data/data';

export default function Team() {
  return (
    <Section
      id="team"
      title="Notre Équipe Médicale"
      subtitle="Des professionnels qualifiés et dévoués à votre bien-être"
      background="white"
    >
      {/* Introduction */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <p className="text-lg text-gray-600">
          Notre équipe est composée de médecins expérimentés, formés dans les meilleures 
          universités et régulièrement mis à jour sur les dernières avancées médicales.
        </p>
      </div>

      {/* Grille des médecins */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member) => (
          <Card 
            key={member.id} 
            hover 
            className="group overflow-hidden"
          >
            <CardContent className="p-0 h-full flex flex-col">
              {/* En-tête avec avatar */}
              <div className="relative">
                <div className="bg-linear-to-br from-blue-100 to-blue-200 h-48 flex items-center justify-center">
                  <div className="text-6xl font-bold text-blue-700">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                
                {/* Badge d'expérience */}
                <div className="absolute top-4 right-4">
                  <Badge variant="primary">
                    {member.experience} ans
                  </Badge>
                </div>
              </div>

              {/* Contenu */}
              <div className="p-6 grow">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-700 font-medium mb-4">
                  {member.position}
                </p>
                
                <p className="text-gray-600 text-sm mb-6">
                  {member.description}
                </p>

                {/* Informations détaillées */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-700">{member.specialty}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-700">
                      {member.languages.join(', ')}
                    </span>
                  </div>
                </div>

                {/* Qualifications */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">
                    Diplômes :
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {member.qualifications.slice(0, 2).map((qualif, idx) => (
                      <Badge key={idx} variant="outline" size="sm">
                        {qualif}
                      </Badge>
                    ))}
                    {member.qualifications.length > 2 && (
                      <Badge variant="outline" size="sm">
                        +{member.qualifications.length - 2}
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Évaluation et disponibilité */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(member.rating) 
                              ? 'text-yellow-400 fill-current' 
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      {member.rating}/5
                    </span>
                  </div>
                  
                  <Badge variant="default" size="sm">
                    {member.availability}
                  </Badge>
                </div>
              </div>

              {/* Bouton RDV */}
              <div className="border-t border-gray-100 p-6">
                <Button 
                  variant="primary" 
                  size="sm" 
                  className="w-full group-hover:scale-[1.02] transition-transform"
                >
                  <a 
                    href={`/rendez-vous?doctor=${member.id}`}
                    className="flex items-center justify-center gap-2"
                  >
                    <Calendar className="h-4 w-4" />
                    Prendre RDV
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Section paramédicale */}
      <div className="mt-16 bg-linear-to-r from-blue-700 to-blue-800 rounded-2xl p-8 text-white">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Équipe paramédicale complète
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl">
              Notre équipe comprend également des infirmiers diplômés, des techniciens de laboratoire 
              et une équipe administrative dévouée pour vous assurer une prise en charge complète.
            </p>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">6</div>
                <div className="text-blue-200 text-sm">Infirmiers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">4</div>
                <div className="text-blue-200 text-sm">Techniciens labo</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">5</div>
                <div className="text-blue-200 text-sm">Administratifs</div>
              </div>
            </div>
          </div>
          
          <Button variant="secondary" size="lg">
            <a href="/contact" className="flex items-center gap-2">
              Contacter l'équipe
            </a>
          </Button>
        </div>
      </div>
    </Section>
  );
}