// src/components/sections/Hero.tsx
import { Calendar, Phone, Sparkles, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import { companyInfo, statistics } from '../../data/data';

export default function Hero() {
  return (
    <section className="relative bg-linear-to-br from-blue-800 via-blue-700 to-blue-900 text-white overflow-hidden">
      {/* Éléments décoratifs optimisés */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="border-r border-white"></div>
            ))}
          </div>
        </div>
      </div>

      <div className="container relative mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl">
          {/* Badge d'accentuation */}
          <Badge 
            variant="secondary" 
            className="mb-6 backdrop-blur-sm"
            icon={<Sparkles className="h-3 w-3" />}
          >
            Depuis {companyInfo.founded} • Centre agréé
          </Badge>

          {/* Titre principal */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Votre santé entre de bonnes mains avec{' '}
            <span className="text-blue-200 relative">
              Les Perles
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-400/50"></span>
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed">
            {companyInfo.description} Un centre médical moderne offrant des soins complets dans 
            un environnement accueillant et rassurant, où chaque patient est unique.
          </p>

          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button 
              variant="secondary" 
              size="lg" 
              className="group flex items-center justify-center gap-2 shadow-lg"
            >
              <Calendar className="h-5 w-5 transition-transform group-hover:scale-110" />
              Prendre rendez-vous
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white/10 group"
            >
              <Phone className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
              Nous appeler
            </Button>
          </div>

          {/* Statistiques */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/20">
            {statistics.map((stat) => (
              <div key={stat.id} className="text-center">
                <div className="text-2xl md:text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-blue-200 font-medium">{stat.label}</div>
                <div className="text-sm text-blue-300/80 mt-1">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vague décorative */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          className="w-full h-12 md:h-16 text-white" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            fill="currentColor" 
            opacity="0.25"
          ></path>
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35,6.36,119.13-6.29,32-10.63,60.58-28.32,84.8-50.81,27-24.84,47.26-55.56,65.25-87.67,16-28.34,27.2-61.81,33.91-96.72,0.56-3.12,1.12-6.23,1.69-9.34V0Z" 
            fill="currentColor" 
            opacity="0.5"
          ></path>
        </svg>
      </div>
    </section>
  );
}