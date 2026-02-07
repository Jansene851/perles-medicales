'use client';

import { useState } from 'react';
import { 
  CheckCircle, 
  Search, 
  Filter, 
  Calendar,
  Clock,
  Users,
  Sparkles
} from 'lucide-react';
import Section from '../components/ui/Section';
import Card, { CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import { services } from '../data/data';
import Link from 'next/link';

const iconMap: { [key: string]: string } = {
  'Stethoscope': '🩺',
  'Shield': '🛡️',
  'Heart': '❤️',
  'Ambulance': '🚑',
  'Video': '📹',
  'Microscope': '🔬'
};

export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' || service.icon === filter;
    return matchesSearch && matchesFilter;
  });

  const specialties = [
    "Médecine générale",
    "Cardiologie",
    "Dermatologie",
    "Pédiatrie",
    "Gynécologie",
    "Radiologie",
    "Laboratoire d'analyses",
    "Médecine du sport",
    "Nutrition",
    "Médecine préventive"
  ];

  const processSteps = [
    {
      step: "01",
      title: "Contact initial",
      description: "Prenez rendez-vous par téléphone ou via notre plateforme en ligne"
    },
    {
      step: "02",
      title: "Première consultation",
      description: "Évaluation complète de votre état de santé et définition des objectifs"
    },
    {
      step: "03",
      title: "Plan de traitement",
      description: "Élaboration d'un plan personnalisé adapté à vos besoins"
    },
    {
      step: "04",
      title: "Suivi régulier",
      description: "Accompagnement continu et ajustements si nécessaire"
    }
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
            icon={<Sparkles className="h-4 w-4" />}
          >
            Tous nos services
          </Badge>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Nos services médicaux
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Des soins complets et personnalisés, de la médecine générale aux spécialités les plus pointues, 
            dans un seul et même établissement.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">
              <Link href="/rendez-vous">Prendre rendez-vous</Link>
            </Button>
            <Button variant="outline" size="lg">
              <Link href="/contact">Nous contacter</Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Barre de recherche */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="flex-1 w-full">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Rechercher un service..."
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Filter className="h-5 w-5 text-gray-400" />
                  <select
                    className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                  >
                    <option value="all">Tous les services</option>
                    <option value="Stethoscope">Consultations</option>
                    <option value="Shield">Prévention</option>
                    <option value="Heart">Spécialités</option>
                    <option value="Ambulance">Urgences</option>
                    <option value="Video">Télémédecine</option>
                    <option value="Microscope">Laboratoire</option>
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Tous les services */}
      <Section
        title="Nos services"
        subtitle={`${filteredServices.length} services disponibles`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <Card key={service.id} hover className="h-full group">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">
                      {iconMap[service.icon] || '🏥'}
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
                
                <div className="border-t border-gray-100 pt-6 mt-auto">
                  <Button 
                    variant="primary" 
                    size="sm" 
                    className="w-full group-hover:scale-[1.02] transition-transform"
                  >
                    <Link 
                      href={`/rendez-vous?service=${service.id}`} 
                      className="flex items-center justify-center gap-2"
                    >
                      <Calendar className="h-4 w-4" />
                      Prendre RDV pour ce service
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-gray-50 rounded-2xl p-12 max-w-md mx-auto">
              <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Aucun service trouvé</h3>
              <p className="text-gray-600">
                Aucun service ne correspond à votre recherche.
              </p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearchTerm('');
                  setFilter('all');
                }}
              >
                Réinitialiser la recherche
              </Button>
            </div>
          </div>
        )}
      </Section>

      {/* Processus de soins */}
      <Section
        background="gray"
        title="Notre processus"
        subtitle="Comment se déroule votre prise en charge"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <div key={index} className="relative">
              <Card hover className="h-full">
                <CardContent className="p-6 text-center">
                  <div className="text-5xl font-bold text-blue-700/20 mb-4">{step.step}</div>
                  <div className="absolute top-6 text-2xl font-bold text-blue-700">{step.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </Section>

      {/* Spécialités */}
      <Section
        title="Nos spécialités médicales"
        subtitle="Un large panel d'expertises à votre service"
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
            {specialties.map((specialty, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:border-blue-300 hover:shadow-md transition-all">
                <div className="text-2xl mb-2">❤️</div>
                <span className="text-sm font-medium text-gray-800">{specialty}</span>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Délais réduits</h3>
              <p className="text-gray-600">RDV disponibles sous 48h pour la plupart des spécialités</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Équipe pluridisciplinaire</h3>
              <p className="text-gray-600">Collaboration entre spécialistes pour des diagnostics précis</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Technologie de pointe</h3>
              <p className="text-gray-600">Équipements médicaux modernes pour des soins optimisés</p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section
        background="blue"
        className="text-center"
      >
        <div className="max-w-3xl mx-auto">
          <Calendar className="h-16 w-16  mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">
            Prêt à prendre soin de votre santé ?
          </h2>
          <p className="mb-8 text-lg">
            Réservez votre consultation en ligne ou par téléphone. Notre équipe est à votre écoute.
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