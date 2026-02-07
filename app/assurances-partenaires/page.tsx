'use client';

import { useState } from 'react';
import { 
  Shield, 
  Handshake, 
  CheckCircle, 
  Search, 
  Filter, 
  ExternalLink,
  Phone,
  Globe,
  CreditCard,
  Clock,
  Scale,
  Building,
  Pill,
  Microscope,
  Cpu,
  School,
  ChevronRight
} from 'lucide-react';
import Section from '../components/ui/Section';
import Card, { CardContent, CardHeader } from '../components/ui/Card';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import { 
  insuranceProviders, 
  partners, 
  coverageInfo 
} from '../data/data';

export default function AssurancesPartenairesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<string>('all');
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const filteredInsurances = insuranceProviders.filter(insurance => {
    const matchesSearch = insurance.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         insurance.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || insurance.type === filterType;
    return matchesSearch && matchesType;
  });

  const filteredPartners = partners.filter(partner => {
    const matchesSearch = partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         partner.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || partner.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main>
      {/* Hero Section */}
      <Section
        id="hero"
        title="Assurances & Partenaires"
        subtitle="Vos garanties, nos partenaires"
        background="blue"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Handshake className="h-5 w-5" />
            <span className="text-sm font-medium">Notre réseau de partenaires</span>
          </div>
          
          <p className="text-lg text-gray-600 mb-8">
            La Société Médicale Les Perles travaille avec les principaux acteurs de la santé 
            pour vous offrir les meilleures garanties et les soins les plus innovants.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Badge variant="primary">30+ mutuelles</Badge>
            <Badge variant="secondary">Tiers payant intégral</Badge>
            <Badge variant="outline">Partenaires de renom</Badge>
          </div>
        </div>
      </Section>

      {/* Barre de recherche */}
      <Section>
        <div className="max-w-6xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="flex-1 w-full">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Rechercher une assurance ou un partenaire..."
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2">
                    <Filter className="h-5 w-5 text-gray-400" />
                    <select
                      className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      value={filterType}
                      onChange={(e) => setFilterType(e.target.value)}
                    >
                      <option value="all">Tous types</option>
                      <option value="mutuelle">Mutuelles</option>
                      <option value="assurance">Assurances</option>
                    </select>
                  </div>
                  
                  <select
                    className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    value={filterCategory}
                    onChange={(e) => setFilterCategory(e.target.value)}
                  >
                    <option value="all">Toutes catégories</option>
                    <option value="pharmaceutical">Pharmaceutique</option>
                    <option value="laboratory">Laboratoire</option>
                    <option value="technology">Technologie</option>
                    <option value="institution">Institution</option>
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Informations sur la prise en charge */}
      <Section
        title="Notre politique de prise en charge"
        subtitle="Transparence et simplicité"
        background="gray"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coverageInfo.map((info, index) => {
              const Icon = {
                'CreditCard': CreditCard,
                'ShieldCheck': Shield,
                'Clock': Clock,
                'Scale': Scale
              }[info.icon] || Shield;
              
              return (
                <Card key={index} hover className="h-full">
                  <CardContent className="p-6 text-center">
                    <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Icon className="h-8 w-8 text-blue-700" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{info.title}</h3>
                    <p className="text-gray-600 mb-4">{info.description}</p>
                    <ul className="space-y-2 text-left">
                      {info.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 shrink-0" />
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Liste des assurances */}
      <Section
        title="Nos assurances partenaires"
        subtitle={`${filteredInsurances.length} assureurs et mutuelles acceptés dans notre centre`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-6">
              <Button 
                variant={filterType === 'all' ? 'primary' : 'outline'} 
                size="sm"
                onClick={() => setFilterType('all')}
              >
                Tous ({insuranceProviders.length})
              </Button>
              <Button 
                variant={filterType === 'mutuelle' ? 'primary' : 'outline'} 
                size="sm"
                onClick={() => setFilterType('mutuelle')}
              >
                Mutuelles ({insuranceProviders.filter(i => i.type === 'mutuelle').length})
              </Button>
              <Button 
                variant={filterType === 'assurance' ? 'primary' : 'outline'} 
                size="sm"
                onClick={() => setFilterType('assurance')}
              >
                Assurances ({insuranceProviders.filter(i => i.type === 'assurance').length})
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredInsurances.map((insurance) => (
              <Card key={insurance.id} hover className="h-full">
                <CardHeader className="p-6 border-b border-gray-100">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-linear-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
                        <span className="text-xl font-bold text-blue-700">
                          {insurance.name.split(' ').map(word => word[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{insurance.name}</h3>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge variant={insurance.type === 'mutuelle' ? 'primary' : 'success'}>
                            {insurance.type === 'mutuelle' ? 'Mutuelle' : 'Assurance'}
                          </Badge>
                          <Badge variant="default">
                            Tiers payant
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-6">{insurance.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Couvertures principales</h4>
                    <div className="flex flex-wrap gap-2">
                      {insurance.coverage.map((item, idx) => (
                        <Badge 
                          key={idx}
                          variant="primary"
                          size="sm"
                          icon={<CheckCircle className="h-3 w-3" />}
                        >
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-100 pt-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                          <Phone className="h-4 w-4" />
                          <span className="font-medium">Contact</span>
                        </div>
                        <p className="font-semibold text-gray-900">{insurance.contact}</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                          <Globe className="h-4 w-4" />
                          <span className="font-medium">Site web</span>
                        </div>
                        <a 
                          href={insurance.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                        >
                          Visiter
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredInsurances.length === 0 && (
            <div className="text-center py-12">
              <div className="bg-gray-50 rounded-2xl p-12 max-w-md mx-auto">
                <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Aucun résultat</h3>
                <p className="text-gray-600">
                  Aucune assurance ne correspond à vos critères de recherche.
                </p>
              </div>
            </div>
          )}
        </div>
      </Section>

      {/* Liste des partenaires */}
      <Section
        title="Nos partenaires médicaux"
        subtitle="Excellence et innovation"
        background="gray"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-6">
              <Button 
                variant={filterCategory === 'all' ? 'primary' : 'outline'} 
                size="sm"
                onClick={() => setFilterCategory('all')}
              >
                Tous ({partners.length})
              </Button>
              <Button 
                variant={filterCategory === 'pharmaceutical' ? 'primary' : 'outline'} 
                size="sm"
                onClick={() => setFilterCategory('pharmaceutical')}
              >
                Pharmaceutique ({partners.filter(p => p.category === 'pharmaceutical').length})
              </Button>
              <Button 
                variant={filterCategory === 'laboratory' ? 'primary' : 'outline'} 
                size="sm"
                onClick={() => setFilterCategory('laboratory')}
              >
                Laboratoire ({partners.filter(p => p.category === 'laboratory').length})
              </Button>
              <Button 
                variant={filterCategory === 'technology' ? 'primary' : 'outline'} 
                size="sm"
                onClick={() => setFilterCategory('technology')}
              >
                Technologie ({partners.filter(p => p.category === 'technology').length})
              </Button>
              <Button 
                variant={filterCategory === 'institution' ? 'primary' : 'outline'} 
                size="sm"
                onClick={() => setFilterCategory('institution')}
              >
                Institution ({partners.filter(p => p.category === 'institution').length})
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredPartners.map((partner) => {
              const Icon = {
                'medical': Building,
                'pharmaceutical': Pill,
                'laboratory': Microscope,
                'technology': Cpu,
                'institution': School
              }[partner.category] || Building;
              
              return (
                <Card key={partner.id} hover className="h-full">
                  <CardContent className="p-6">
                    <div className="w-20 h-20 bg-linear-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-blue-700">
                        {partner.name.split(' ').map(word => word[0]).join('')}
                      </span>
                    </div>
                    
                    <div className="text-center mb-4">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{partner.name}</h3>
                      <div className="flex items-center justify-center gap-2 mb-3">
                        <Icon className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-500">
                          {partner.category === 'pharmaceutical' && 'Pharmaceutique'}
                          {partner.category === 'laboratory' && 'Laboratoire'}
                          {partner.category === 'technology' && 'Technologie'}
                          {partner.category === 'institution' && 'Institution'}
                          {partner.category === 'medical' && 'Médical'}
                        </span>
                      </div>
                      <Badge variant="default">
                        Depuis {partner.partnershipSince}
                      </Badge>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-6 text-center">{partner.description}</p>
                    
                    <div className="border-t border-gray-100 pt-6">
                      <a 
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                      >
                        <span>Visiter le site</span>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {filteredPartners.length === 0 && (
            <div className="text-center py-12">
              <div className="bg-gray-50 rounded-2xl p-12 max-w-md mx-auto">
                <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Aucun résultat</h3>
                <p className="text-gray-600">
                  Aucun partenaire ne correspond à vos critères de recherche.
                </p>
              </div>
            </div>
          )}
        </div>
      </Section>

      {/* FAQ Assurances */}
      <Section
        title="Questions fréquentes sur les assurances"
        subtitle="Tout comprendre"
        background="blue"
      >
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {[
              {
                question: "Comment savoir si ma mutuelle est partenaire ?",
                answer: "Toutes les mutuelles listées sur cette page sont partenaires. Si votre mutuelle n'apparaît pas, contactez-nous pour vérifier sa prise en charge."
              },
              {
                question: "Le tiers payant est-il systématique ?",
                answer: "Oui, le tiers payant est appliqué pour toutes les mutuelles partenaires. Il vous suffit de présenter votre carte vitale et votre attestation de mutuelle."
              },
              {
                question: "Que faire si ma mutuelle n'est pas partenaire ?",
                answer: "Vous pouvez toujours consulter dans notre centre. Vous devrez avancer les frais et vous faire rembourser par votre mutuelle selon les conditions de votre contrat."
              },
              {
                question: "Les dépassements d'honoraires sont-ils pris en charge ?",
                answer: "La plupart de nos mutuelles partenaires prennent en charge les dépassements d'honoraires dans la limite des plafonds conventionnels."
              },
              {
                question: "Comment changer de mutuelle pour bénéficier de meilleures garanties ?",
                answer: "Nous pouvons vous orienter vers nos conseillers en protection sociale qui vous aideront à comparer les offres."
              }
            ].map((item, index) => (
              <Card key={index} hover>
                <CardContent className="p-6">
                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer list-none">
                      <h3 className="text-lg font-semibold text-gray-900 group-open:text-blue-700">
                        {item.question}
                      </h3>
                      <div className="text-blue-700 group-open:rotate-180 transition-transform">
                        <ChevronRight className="h-5 w-5" />
                      </div>
                    </summary>
                    <p className="mt-4 text-gray-600">{item.answer}</p>
                  </details>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section
        title="Vous avez des questions sur votre couverture ?"
        subtitle="Notre équipe administrative est à votre disposition"
      >
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-blue-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Handshake className="h-10 w-10 text-blue-700" />
          </div>
          
          <p className="text-gray-600 mb-8">
            Nous pouvons vérifier votre couverture et vous accompagner dans vos démarches de remboursement.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" className="px-8">
              <a href="/contact" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Nous contacter
              </a>
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              <a href="/rendez-vous">
                Prendre rendez-vous
              </a>
            </Button>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-100">
            <p className="text-sm text-gray-500">
              <strong>Service administratif :</strong> Lundi au vendredi, 8h30-12h30 et 13h30-18h30
              <br />
              <strong>Téléphone :</strong> 01 23 45 67 88 (spécial assurances)
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
}