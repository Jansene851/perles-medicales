'use client';

import { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Card, { CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';
import { contactInfo } from '../data/data';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'rendez-vous',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Formulaire envoyé:', formData);
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Réinitialiser après succès
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'rendez-vous',
        message: ''
      });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Téléphone",
      details: ["Standard: +33 1 23 45 67 89", "Urgences: +33 1 23 45 67 90"],
      description: "Du lundi au samedi de 8h à 19h"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["contact@lesperles-medical.fr", "urgences@lesperles-medical.fr"],
      description: "Réponse sous 24h ouvrées"
    },
    {
      icon: MapPin,
      title: "Adresse",
      details: ["123 Avenue de la Santé", "75000 Paris, France"],
      description: "Métro: Ligne 4 - Santé"
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-blue-800 to-blue-900 text-white overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-white rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white rounded-full"></div>
        </div>
        <Container size="lg">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <MessageSquare className="h-4 w-4" />
              <span className="text-sm font-medium">Contactez-nous</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Nous contacter</h1>
            <p className="text-xl text-blue-100 mb-8">
              Notre équipe est à votre écoute pour répondre à toutes vos questions et prendre rendez-vous.
            </p>
          </div>
        </Container>
      </section>

      {/* Informations de contact */}
      <Section title="Comment nous joindre" subtitle="Plusieurs moyens de nous contacter">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <Card key={index} hover className="h-full">
                <CardContent className="h-full flex flex-col p-8">
                  <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="h-8 w-8 text-blue-700" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{method.title}</h3>
                  <div className="space-y-2 mb-4">
                    {method.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-700">{detail}</p>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 mt-auto">{method.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Formulaire & Carte */}
      <Section background="blue">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulaire */}
          <div>
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
                <Send className="h-4 w-4" />
                <span className="text-sm font-medium">Formulaire de contact</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Envoyez-nous un message</h2>
              <p className="text-blue-100">
                Remplissez ce formulaire et nous vous répondrons dans les plus brefs délais.
              </p>
            </div>
            
            {isSubmitted ? (
              <Card>
                <CardContent className="text-center p-12">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Message envoyé !</h3>
                  <p className="text-gray-600 mb-6">
                    Merci de nous avoir contactés. Nous vous répondrons dans les plus brefs délais.
                  </p>
                  <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                    Envoyer un autre message
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Nom complet *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                          placeholder="Votre nom"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                          placeholder="votre@email.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        placeholder="+33 1 23 45 67 89"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Sujet *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                      >
                        <option value="rendez-vous">Prise de rendez-vous</option>
                        <option value="information">Demande d'information</option>
                        <option value="urgence">Urgence médicale</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none"
                        placeholder="Décrivez votre demande..."
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      variant="primary" 
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center gap-2">
                          <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                          <span>Envoi en cours...</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center gap-2">
                          <Send className="h-5 w-5" />
                          <span>Envoyer le message</span>
                        </div>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
          
          {/* Carte et horaires */}
          <div className="space-y-8">
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="h-6 w-6 text-blue-700" />
                  <h3 className="text-xl font-bold text-gray-900">Nous trouver</h3>
                </div>
                
                <div className="bg-linear-to-br from-blue-100 to-blue-50 rounded-xl p-6 mb-6">
                  <p className="text-gray-800 mb-2 font-medium">{contactInfo.address}</p>
                  <p className="text-sm text-gray-600">
                    Métro: Ligne 4 - Station Santé<br />
                    Bus: 21, 67, 96<br />
                    Parking: 50 places disponibles
                  </p>
                </div>
                
                {/* Carte simplifiée */}
                <div className="relative h-64 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-br from-blue-200 to-blue-300 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-blue-700 mx-auto mb-4" />
                      <p className="text-blue-900 font-semibold">Société Médicale Les Perles</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-lg shadow-sm">
                    <span className="text-sm font-medium text-gray-700">Voir sur Google Maps</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="h-6 w-6 text-blue-700" />
                  <h3 className="text-xl font-bold text-gray-900">Horaires d'ouverture</h3>
                </div>
                
                <div className="space-y-4">
                  {contactInfo.hours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center pb-3 border-b border-gray-100 last:border-0">
                      <span className="text-gray-700">{schedule.days}</span>
                      <span className="font-medium text-gray-900">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <span className="font-medium text-blue-700">⚠️ Urgences:</span> Disponible 24h/24 et 7j/7. 
                    Appelez notre numéro d'urgence pour être redirigé.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section title="Questions fréquentes" subtitle="Les réponses à vos interrogations">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {[
              {
                question: "Comment prendre rendez-vous rapidement ?",
                answer: "Vous pouvez prendre rendez-vous via notre plateforme en ligne, par téléphone au 01 23 45 67 89, ou en vous rendant à l'accueil du centre. Les rendez-vous en ligne sont traités immédiatement."
              },
              {
                question: "Quels documents apporter à la première consultation ?",
                answer: "Votre carte vitale, votre carte de mutuelle, vos derniers examens médicaux et ordonnances en cours, ainsi qu'une pièce d'identité."
              },
              {
                question: "Le centre accepte-t-il les nouvelles mutuelles ?",
                answer: "Oui, nous travaillons avec toutes les mutuelles. Le tiers payant est appliqué pour la plupart des contrats. Vérifiez auprès de votre mutuelle pour les spécificités."
              },
              {
                question: "Y a-t-il un service d'urgences ?",
                answer: "Oui, notre service d'urgence est ouvert 24h/24 et 7j/7. Composez le 01 23 45 67 90 pour les urgences."
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
                        <Sparkles className="h-5 w-5" />
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
    </main>
  );
}