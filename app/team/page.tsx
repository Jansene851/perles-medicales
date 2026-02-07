'use client';

import { useState } from 'react';
import { 
  Star, 
  GraduationCap, 
  Globe, 
  Calendar,
  Search,
  Filter,
  Award,
  Users,
  Phone,
  Mail
} from 'lucide-react';
import Section from '../components/ui/Section';
import Card, { CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import { teamMembers } from '../data/data';
import Link from 'next/link';

export default function TeamPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  const filteredMembers = teamMembers.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' || member.specialty.toLowerCase().includes(filter.toLowerCase());
    return matchesSearch && matchesFilter;
  });

  const specialties = Array.from(new Set(teamMembers.map(member => member.specialty)));

  const paramedicalTeam = [
    { role: "Infirmiers diplômés", count: 6, description: "Soins techniques et éducation thérapeutique", icon: "👨‍⚕️" },
    { role: "Techniciens de laboratoire", count: 4, description: "Analyses médicales précises et rapides", icon: "👩‍🔬" },
    { role: "Accueil et secrétariat", count: 5, description: "Gestion efficace de vos rendez-vous", icon: "👩‍💼" },
    { role: "Aides-soignants", count: 3, description: "Accompagnement au quotidien", icon: "🤲" }
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
            icon={<Users className="h-4 w-4" />}
          >
            Notre équipe
          </Badge>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Notre équipe médicale
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Des professionnels passionnés et expérimentés, dévoués à votre bien-être et à votre santé.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Badge variant="primary">{teamMembers.length} médecins</Badge>
            <Badge variant="secondary">Équipe certifiée</Badge>
            <Badge variant="outline">15+ ans d'expérience moyenne</Badge>
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
                      placeholder="Rechercher un médecin ou une spécialité..."
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
                    <option value="all">Toutes les spécialités</option>
                    {specialties.map((specialty, index) => (
                      <option key={index} value={specialty}>{specialty}</option>
                    ))}
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Médecins */}
      <Section
        title="Nos médecins"
        subtitle={`${filteredMembers.length} médecins disponibles`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredMembers.map((member) => (
            <Card key={member.id} hover className="h-full group">
              <CardContent className="p-0 h-full flex flex-col">
                {/* En-tête avec avatar */}
                <div className="relative">
                  <div className="bg-linear-to-br from-blue-100 to-blue-200 h-48 flex items-center justify-center">
                    <div className="text-6xl font-bold text-blue-700">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  
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

                {/* Boutons d'action */}
                <div className="border-t border-gray-100 p-6">
                  <div className="space-y-2">
                    <Button 
                      variant="primary" 
                      size="sm" 
                      className="w-full group-hover:scale-[1.02] transition-transform"
                    >
                      <Link 
                        href={`/rendez-vous?doctor=${member.id}`}
                        className="flex items-center justify-center gap-2"
                      >
                        <Calendar className="h-4 w-4" />
                        Prendre RDV
                      </Link>
                    </Button>
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1"
                        
                      >
                        <Link href={`tel:${member.id}`}>
                          <Phone className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1"
                        
                      >
                        <Link href={`mailto:contact@lesperles-medical.fr`}>
                          <Mail className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredMembers.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-gray-50 rounded-2xl p-12 max-w-md mx-auto">
              <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Aucun médecin trouvé</h3>
              <p className="text-gray-600">
                Aucun médecin ne correspond à votre recherche.
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

      {/* Équipe paramédicale */}
      <Section
        background="gray"
        title="Notre équipe paramédicale"
        subtitle="Un soutien essentiel à votre parcours de soins"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {paramedicalTeam.map((member, index) => (
            <Card key={index} hover className="h-full">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{member.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{member.role}</h3>
                <div className="text-3xl font-bold text-blue-700 mb-2">{member.count}</div>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section
        background="blue"
        className="text-center"
      >
        <div className="max-w-3xl mx-auto">
          <Award className="h-16 w-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Consultez nos experts en toute confiance
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Tous nos médecins sont diplômés d'État, régulièrement formés aux dernières avancées médicales 
            et engagés dans une démarche qualité continue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="px-8">
              <Link href="/rendez-vous">Prendre rendez-vous</Link>
            </Button>
            <Button variant="outline" size="lg" className="px-8 text-white border-white hover:bg-white/10">
              <Link href="/contact">Contacter un médecin</Link>
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}