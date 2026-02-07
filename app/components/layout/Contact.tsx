// src/components/sections/Contact.tsx
'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import Section from '../ui/Section';
import Card, { CardContent } from '../ui/Card';
import Button from '../ui/Button';
import { contactInfo } from '../../data/data';

export default function Contact() {
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
    
    // Réinitialiser après 5 secondes
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

  return (
    <Section
      id="contact"
      title="Contactez-nous"
      subtitle="Prenez rendez-vous ou posez-nous vos questions"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Formulaire */}
        <div className="lg:col-span-2">
          {isSubmitted ? (
            <Card>
              <CardContent className="text-center p-12">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Message envoyé avec succès !
                </h3>
                <p className="text-gray-600 mb-6">
                  Merci de nous avoir contactés. Nous vous répondrons dans les plus brefs délais.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => setIsSubmitted(false)}
                >
                  Envoyer un autre message
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="p-8">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Envoyez-nous un message
                  </h3>
                  <p className="text-gray-600">
                    Remplissez ce formulaire et nous vous répondrons dans les plus brefs délais.
                  </p>
                </div>

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
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        <option value="assurance">Question assurance</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>
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
                    className="w-full md:w-auto"
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
        
        {/* Informations de contact */}
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="h-6 w-6 text-blue-700" />
                <h3 className="text-xl font-bold text-gray-900">Adresse</h3>
              </div>
              
              <p className="text-gray-700 mb-2">{contactInfo.address}</p>
              <p className="text-sm text-gray-600 mb-4">
                Métro: Ligne 4 - Station Santé<br />
                Bus: 21, 67, 96<br />
                Parking: 50 places disponibles
              </p>
              
              <div className="mt-6">
                <a 
                  href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm inline-flex items-center gap-1"
                >
                  Voir sur Google Maps
                  <span>→</span>
                </a>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <Phone className="h-6 w-6 text-blue-700" />
                <h3 className="text-xl font-bold text-gray-900">Téléphone</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Standard</div>
                  <a 
                    href={`tel:${contactInfo.phone}`}
                    className="font-semibold text-gray-900 hover:text-blue-700"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
                
                <div>
                  <div className="text-sm text-gray-600 mb-1">Urgences 24/7</div>
                  <a 
                    href={`tel:${contactInfo.emergencyPhone}`}
                    className="font-semibold text-red-600 hover:text-red-800"
                  >
                    {contactInfo.emergencyPhone}
                  </a>
                </div>
                
                <div>
                  <div className="text-sm text-gray-600 mb-1">Administratif</div>
                  <a 
                    href={`tel:${contactInfo.administrativePhone}`}
                    className="font-semibold text-gray-900 hover:text-blue-700"
                  >
                    {contactInfo.administrativePhone}
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="h-6 w-6 text-blue-700" />
                <h3 className="text-xl font-bold text-gray-900">Horaires</h3>
              </div>
              
              <div className="space-y-4">
                {contactInfo.hours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-start">
                    <span className="text-gray-700">{schedule.days}</span>
                    <div className="text-right">
                      <span className="font-medium text-gray-900 block">{schedule.hours}</span>
                      {schedule.note && (
                        <span className="text-xs text-gray-500">{schedule.note}</span>
                      )}
                    </div>
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
  );
}