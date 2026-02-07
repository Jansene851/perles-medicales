import { Building, Award, Users, Clock, Target, Shield } from 'lucide-react';
import Section from '../components/ui/Section';
import Card, { CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import { companyInfo } from '../data/data';
import Link from 'next/link';

export default function AboutPage() {
  const milestones = [
    { year: 2010, title: "Fondation", description: "Création de la Société Médicale Les Perles avec 3 médecins" },
    { year: 2012, title: "Première extension", description: "Ouverture de 5 nouvelles salles de consultation" },
    { year: 2015, title: "Certification", description: "Obtention de la certification HAS et ISO 9001" },
    { year: 2018, title: "Innovation", description: "Mise en place de la téléconsultation et du dossier patient numérique" },
    { year: 2020, title: "Urgences 24/7", description: "Ouverture du service d'urgence permanent" },
    { year: 2023, title: "Modernisation", description: "Rénovation complète des infrastructures et nouveaux équipements" }
  ];

  const teamStats = [
    { value: "12", label: "Médecins", description: "Spécialistes expérimentés" },
    { value: "6", label: "Infirmiers", description: "Diplômés d'État" },
    { value: "4", label: "Techniciens", description: "Laboratoire d'analyses" },
    { value: "5", label: "Administratifs", description: "À votre service" }
  ];

  return (
    <main>
      {/* Hero Section */}
      <Section
        background="blue"
        className="relative overflow-hidden"
      >
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Badge 
            variant="secondary" 
            className="mb-6 backdrop-blur-sm"
            icon={<Building className="h-4 w-4" />}
          >
            Notre histoire
          </Badge>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            À propos de la Société Médicale Les Perles
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Depuis {companyInfo.founded}, nous nous engageons à offrir des soins médicaux d'excellence 
            dans un environnement chaleureux et rassurant.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="primary" size="lg">
              <Link href="/rendez-vous">Prendre rendez-vous</Link>
            </Button>
            <Button variant="outline" size="lg">
              <Link href="/contact">Nous contacter</Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Notre histoire */}
      <Section
        title="Notre histoire"
        subtitle="Un parcours d'excellence depuis 2010"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Une vision innovante de la médecine
            </h3>
            <div className="space-y-4 text-gray-700">
              <p>
                Fondée en 2010 par le Dr. Marie Lambert, la Société Médicale Les Perles est née d'une vision simple 
                mais ambitieuse : créer un centre médical où l'excellence scientifique s'allie à l'humanité des soins.
              </p>
              <p>
                Dès ses débuts, notre établissement s'est distingué par son approche holistique de la santé, 
                considérant chaque patient dans sa globalité plutôt que comme un ensemble de symptômes.
              </p>
              <p>
                Au fil des années, nous avons su évoluer avec les avancées médicales tout en conservant notre engagement 
                fondamental : mettre le patient au cœur de nos préoccupations.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-6">
              <Card hover>
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-blue-700 mb-2">500m²</div>
                  <div className="text-gray-600">Surface médicale moderne</div>
                </CardContent>
              </Card>
              <Card hover>
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-blue-700 mb-2">20+</div>
                  <div className="text-gray-600">Salles de consultation</div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="bg-linear-to-br from-blue-50 to-white p-8 rounded-2xl shadow-xl">
            <h4 className="text-2xl font-bold text-gray-900 mb-6">Nos valeurs fondamentales</h4>
            <div className="space-y-6">
              {companyInfo.values.map((value, index) => {
                const icons = [Target, Users, Shield, Award];
                const Icon = icons[index] || Target;
                
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-xl shrink-0">
                      <Icon className="h-6 w-6 text-blue-700" />
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900 mb-1">{value.title}</h5>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Section>

      {/* Frise chronologique */}
      <Section
        background="gray"
        title="Notre parcours"
        subtitle="Les grandes dates de notre histoire"
      >
        <div className="relative">
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="md:w-1/4">
                    <div className="bg-blue-700 text-white font-bold px-4 py-2 rounded-lg inline-block">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <Card hover>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                {index < milestones.length - 1 && (
                  <div className="hidden md:block absolute left-1/4 top-12 bottom-0 w-0.5 bg-blue-200 transform translate-x-6"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Notre équipe */}
      <Section
        title="Notre équipe"
        subtitle="Une équipe pluridisciplinaire à votre service"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {teamStats.map((stat, index) => (
            <Card key={index} hover>
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-blue-700 mb-2">{stat.value}</div>
                <div className="font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-linear-to-r from-blue-700 to-blue-800 rounded-2xl p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Award className="h-8 w-8" />
                <h3 className="text-2xl font-bold">Certifications & Accréditations</h3>
              </div>
              <p className="text-blue-100 mb-6 max-w-2xl">
                Notre centre est accrédité par les plus hautes instances médicales françaises 
                et répond aux normes de qualité les plus strictes.
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
                <div className="text-3xl font-bold mb-2">ISO</div>
                <div className="text-blue-200">Qualité</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">HAS</div>
                <div className="text-blue-200">Accréditation</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Final */}
      <Section
        background="gray"
        className="text-center"
      >
        <div className="max-w-3xl mx-auto">
          <Clock className="h-16 w-16 text-blue-700 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-blue-700 mb-4">
            Prêt à prendre rendez-vous ?
          </h2>
          <p className="text-blue-700 mb-8 text-lg">
            Rejoignez notre communauté de patients satisfaits et découvrez la différence Les Perles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="px-8">
              <Link href="/rendez-vous">Prendre rendez-vous en ligne</Link>
            </Button>
            <Button variant="outline" size="lg" className="px-8 text-white border-white hover:bg-white/10">
              <Link href="/contact">Nous appeler</Link>
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}