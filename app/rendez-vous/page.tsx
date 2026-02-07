'use client';

import { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  Stethoscope, 
  Phone, 
  Mail, 
  CheckCircle,
  ArrowRight,
  Sparkles,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
import Card, { CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';
import { services, teamMembers } from '../data/data';

type TimeSlot = {
  time: string;
  available: boolean;
};

type DaySlots = {
  date: Date;
  slots: TimeSlot[];
};

export default function RendezVousPage() {
  // État du formulaire
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    doctor: '',
    date: '',
    time: '',
    patientType: 'new',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    reason: ''
  });

  // État pour les créneaux
  const [availableDays, setAvailableDays] = useState<DaySlots[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');

  // Générer les jours disponibles (prochaines 2 semaines)
  useEffect(() => {
    const generateAvailableDays = () => {
      const days: DaySlots[] = [];
      const today = new Date();
      
      for (let i = 1; i <= 14; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        
        // Exclure les dimanches
        if (date.getDay() !== 0) {
          const slots: TimeSlot[] = [];
          
          // Générer des créneaux de 30 minutes de 8h à 19h
          for (let hour = 8; hour < 19; hour++) {
            for (let minute = 0; minute < 60; minute += 30) {
              const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
              // Simuler la disponibilité (80% de chance d'être disponible)
              const available = Math.random() > 0.2;
              slots.push({ time, available });
            }
          }
          
          days.push({ date, slots });
        }
      }
      
      setAvailableDays(days);
      if (days.length > 0) {
        setSelectedDate(days[0].date);
      }
    };
    
    generateAvailableDays();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceSelect = (serviceId: string) => {
    setFormData(prev => ({ ...prev, service: serviceId }));
    setStep(2);
  };

  const handleDoctorSelect = (doctorId: string) => {
    setFormData(prev => ({ ...prev, doctor: doctorId }));
    setStep(3);
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    const formattedDate = date.toISOString().split('T')[0];
    setFormData(prev => ({ ...prev, date: formattedDate }));
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setFormData(prev => ({ ...prev, time }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulation d'envoi
    console.log('Rendez-vous réservé:', formData);
    
    // Passer à l'étape de confirmation
    setStep(5);
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('fr-FR', {
      weekday: 'short',
      day: 'numeric',
      month: 'short'
    }).format(date);
  };

  const getDayName = (date: Date) => {
    return new Intl.DateTimeFormat('fr-FR', { weekday: 'long' }).format(date);
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-blue-800 to-blue-900 text-white overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-48 h-48 bg-white rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-white rounded-full"></div>
        </div>
        <Container size="lg">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Calendar className="h-4 w-4" />
              <span className="text-sm font-medium">Prise de rendez-vous</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Prenez rendez-vous en ligne</h1>
            <p className="text-xl text-blue-100 mb-8">
              Réservez votre consultation en quelques clics. Simple, rapide et sécurisé.
            </p>
          </div>
        </Container>
      </section>

      {/* Indicateur d'étapes */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="flex justify-between mb-8">
              {[
                { number: 1, label: 'Service', active: step >= 1 },
                { number: 2, label: 'Médecin', active: step >= 2 },
                { number: 3, label: 'Date & Heure', active: step >= 3 },
                { number: 4, label: 'Informations', active: step >= 4 },
                { number: 5, label: 'Confirmation', active: step >= 5 }
              ].map((stepItem, index) => (
                <div key={index} className="flex flex-col items-center relative z-10">
                  <div className={`
                    w-12 h-12 rounded-full flex items-center justify-center mb-2
                    ${stepItem.active ? 'bg-blue-700 text-white' : 'bg-gray-100 text-gray-400'}
                    ${step === stepItem.number ? 'ring-4 ring-blue-100' : ''}
                  `}>
                    {stepItem.active ? (
                      <CheckCircle className="h-6 w-6" />
                    ) : (
                      <span className="text-lg font-bold">{stepItem.number}</span>
                    )}
                  </div>
                  <span className={`text-sm font-medium ${stepItem.active ? 'text-gray-900' : 'text-gray-500'}`}>
                    {stepItem.label}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Ligne de progression */}
            <div className="absolute top-6 left-0 right-0 h-1 bg-gray-200 -z-10">
              <div 
                className="h-full bg-blue-700 transition-all duration-300"
                style={{ width: `${((step - 1) / 4) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Contenu des étapes */}
          <div className="mt-12">
            {step === 1 && (
              <div>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Choisissez un service</h2>
                  <p className="text-gray-600">Sélectionnez le service médical dont vous avez besoin</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {services.map((service) => (
                    <Card 
                      key={service.id} 
                      hover 
                      className={`cursor-pointer ${formData.service === service.id.toString() ? 'ring-2 ring-blue-500' : ''}`}
                      onClick={() => handleServiceSelect(service.id.toString())}
                    >
                      <CardContent className="p-8">
                        <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                          <Stethoscope className="h-8 w-8 text-blue-700" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                        <p className="text-gray-600 mb-6">{service.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-blue-700 font-medium">Sélectionner</span>
                          <ArrowRight className="h-5 w-5 text-blue-700" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <div className="mt-8 text-center">
                  <p className="text-gray-600 mb-4">Vous ne savez pas quel service choisir ?</p>
                  <Button variant="outline">
                    Nous contacter pour un conseil
                  </Button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <div className="text-center mb-12">
                  <Button 
                    variant="primary" 
                    onClick={() => setStep(1)}
                    className="mb-6"
                  >
                    <ChevronLeft className="h-4 w-4 mr-2" />
                    Retour aux services
                  </Button>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Choisissez un médecin</h2>
                  <p className="text-gray-600">Sélectionnez un médecin disponible pour ce service</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {teamMembers.map((doctor) => (
                    <Card 
                      key={doctor.id} 
                      hover 
                      className={`cursor-pointer ${formData.doctor === doctor.id.toString() ? 'ring-2 ring-blue-500' : ''}`}
                      onClick={() => handleDoctorSelect(doctor.id.toString())}
                    >
                      <CardContent className="p-8">
                        <div className="flex items-start gap-6">
                          <div className="bg-blue-100 w-20 h-20 rounded-2xl flex items-center justify-center">
                            <span className="text-2xl font-bold text-blue-700">
                              {doctor.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{doctor.name}</h3>
                            <p className="text-blue-700 font-medium mb-2">{doctor.position}</p>
                            <p className="text-gray-600 text-sm">{doctor.description}</p>
                            <div className="flex items-center gap-4 mt-4">
                              <span className="text-sm text-gray-500">{doctor.experience} ans d'expérience</span>
                              <span className="text-sm text-gray-500">•</span>
                              <span className="text-sm text-gray-500">Disponible cette semaine</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <div className="mt-8 text-center">
                  <p className="text-gray-600 mb-4">Vous préférez être assigné au premier médecin disponible ?</p>
                  <Button variant="outline" onClick={() => {
                    setFormData(prev => ({ ...prev, doctor: 'any' }));
                    setStep(3);
                  }}>
                    Premier médecin disponible
                  </Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <div className="text-center mb-12">
                  <Button 
                    variant="primary" 
                    onClick={() => setStep(2)}
                    className="mb-6"
                  >
                    <ChevronLeft className="h-4 w-4 mr-2" />
                    Retour aux médecins
                  </Button>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Choisissez une date et une heure</h2>
                  <p className="text-gray-600">Sélectionnez un créneau disponible pour votre consultation</p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Calendrier */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Calendrier</h3>
                    <div className="grid grid-cols-7 gap-2 mb-6">
                      {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'].map((day) => (
                        <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                          {day}
                        </div>
                      ))}
                      
                      {availableDays.slice(0, 14).map((day, index) => (
                        <button
                          key={index}
                          onClick={() => handleDateSelect(day.date)}
                          className={`
                            p-3 rounded-lg text-center transition-all
                            ${selectedDate?.toDateString() === day.date.toDateString()
                              ? 'bg-blue-700 text-white'
                              : 'bg-gray-50 hover:bg-gray-100 text-gray-900'
                            }
                            ${day.date.getDay() === 0 ? 'opacity-50 cursor-not-allowed' : ''}
                          `}
                          disabled={day.date.getDay() === 0}
                        >
                          <div className="text-sm font-medium">{day.date.getDate()}</div>
                          <div className="text-xs mt-1">
                            {selectedDate?.toDateString() === day.date.toDateString()
                              ? 'Sélectionné'
                              : day.slots.filter(s => s.available).length > 0
                                ? `${day.slots.filter(s => s.available).length} créneaux`
                                : 'Complet'
                            }
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Créneaux horaires */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      {selectedDate ? `Créneaux disponibles le ${formatDate(selectedDate)}` : 'Sélectionnez une date'}
                    </h3>
                    
                    {selectedDate && (
                      <div className="grid grid-cols-3 gap-3">
                        {availableDays
                          .find(day => day.date.toDateString() === selectedDate.toDateString())
                          ?.slots.filter(slot => slot.available)
                          .map((slot, index) => (
                            <button
                              key={index}
                              onClick={() => handleTimeSelect(slot.time)}
                              className={`
                                p-4 rounded-lg text-center transition-all
                                ${selectedTime === slot.time
                                  ? 'bg-blue-700 text-white'
                                  : 'bg-gray-50 hover:bg-gray-100 text-gray-900'
                                }
                              `}
                            >
                              <div className="text-lg font-semibold">{slot.time}</div>
                              <div className="text-xs mt-1">Disponible</div>
                            </button>
                          ))}
                      </div>
                    )}
                    
                    {selectedDate && selectedTime && (
                      <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h4 className="font-semibold text-gray-900">Rendez-vous sélectionné</h4>
                            <p className="text-gray-600">
                              {getDayName(selectedDate)} {formatDate(selectedDate)} à {selectedTime}
                            </p>
                          </div>
                          <Button onClick={() => setStep(4)}>
                            Continuer
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div>
                <div className="text-center mb-12">
                  <Button 
                    variant="primary" 
                    onClick={() => setStep(3)}
                    className="mb-6"
                  >
                    <ChevronLeft className="h-4 w-4 mr-2" />
                    Retour aux horaires
                  </Button>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Vos informations personnelles</h2>
                  <p className="text-gray-600">Renseignez vos coordonnées pour finaliser le rendez-vous</p>
                </div>
                
                <div className="max-w-2xl mx-auto">
                  <Card>
                    <CardContent className="p-8">
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="patientType" className="block text-sm font-medium text-gray-700 mb-2">
                              Type de patient *
                            </label>
                            <select
                              id="patientType"
                              name="patientType"
                              required
                              value={formData.patientType}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                            >
                              <option value="new">Nouveau patient</option>
                              <option value="existing">Patient existant</option>
                            </select>
                          </div>
                          
                          <div>
                            <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-2">
                              Motif de consultation *
                            </label>
                            <input
                              type="text"
                              id="reason"
                              name="reason"
                              required
                              value={formData.reason}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                              placeholder="Ex: Consultation de routine"
                            />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                              Prénom *
                            </label>
                            <input
                              type="text"
                              id="firstName"
                              name="firstName"
                              required
                              value={formData.firstName}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                              placeholder="Votre prénom"
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                              Nom *
                            </label>
                            <input
                              type="text"
                              id="lastName"
                              name="lastName"
                              required
                              value={formData.lastName}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                              placeholder="Votre nom"
                            />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                              placeholder="votre@email.com"
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                              Téléphone *
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              required
                              value={formData.phone}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                              placeholder="+33 1 23 45 67 89"
                            />
                          </div>
                        </div>
                        
                        <div className="pt-6 border-t border-gray-200">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-semibold text-gray-900">Récapitulatif</h4>
                              <p className="text-sm text-gray-600">
                                {selectedDate && `${formatDate(selectedDate)} à ${selectedTime}`}
                              </p>
                            </div>
                            <Button type="submit" size="lg">
                              Confirmer le rendez-vous
                            </Button>
                          </div>
                        </div>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {step === 5 && (
              <div className="text-center py-12">
                <div className="max-w-md mx-auto">
                  <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle className="h-12 w-12 text-green-600" />
                  </div>
                  
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Rendez-vous confirmé !</h2>
                  
                  <Card className="mb-8">
                    <CardContent className="p-8">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Date</span>
                          <span className="font-semibold">
                            {selectedDate && `${formatDate(selectedDate)} à ${selectedTime}`}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Service</span>
                          <span className="font-semibold">
                            {services.find(s => s.id.toString() === formData.service)?.title}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Médecin</span>
                          <span className="font-semibold">
                            {formData.doctor === 'any' 
                              ? 'Premier médecin disponible'
                              : teamMembers.find(d => d.id.toString() === formData.doctor)?.name
                            }
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Patient</span>
                          <span className="font-semibold">{formData.firstName} {formData.lastName}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      Un email de confirmation a été envoyé à <strong>{formData.email}</strong> 
                      avec tous les détails de votre rendez-vous.
                    </p>
                    
                    <div className="bg-blue-50 rounded-xl p-6">
                      <h4 className="font-semibold text-gray-900 mb-2">À ne pas oublier :</h4>
                      <ul className="text-sm text-gray-600 space-y-1 text-left">
                        <li>• Votre carte vitale et carte de mutuelle</li>
                        <li>• Vos ordonnances en cours</li>
                        <li>• Arriver 10 minutes avant l'heure du rendez-vous</li>
                        <li>• Annuler ou reporter au moins 24h à l'avance si besoin</li>
                      </ul>
                    </div>
                    
                    <div className="pt-6 space-y-3">
                      <Button variant="primary" className="w-full">
                        Ajouter à mon calendrier
                      </Button>
                      <Button variant="outline" className="w-full" onClick={() => {
                        setStep(1);
                        setFormData({
                          service: '',
                          doctor: '',
                          date: '',
                          time: '',
                          patientType: 'new',
                          firstName: '',
                          lastName: '',
                          email: '',
                          phone: '',
                          reason: ''
                        });
                        setSelectedDate(null);
                        setSelectedTime('');
                      }}>
                        Prendre un nouveau rendez-vous
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* Infos pratiques */}
      <Section background="blue" title="Informations pratiques" subtitle="Ce qu'il faut savoir avant votre rendez-vous">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <User className="h-8 w-8 text-blue-700" />
            </div>
            <h3 className="text-xl font-bold text-lin mb-3">Documents à apporter</h3>
            <p className="text-blue-500">
              Carte vitale, carte de mutuelle, pièce d'identité et ordonnances en cours
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Clock className="h-8 w-8 text-blue-700" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Arriver à l'avance</h3>
            <p className="text-blue-100">
              Prévoyez 10 minutes d'avance pour les formalités administratives
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Phone className="h-8 w-8 text-blue-700" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Annulation</h3>
            <p className="text-blue-100">
              Annulez ou reportez votre RDV au moins 24h à l'avance par téléphone
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
}