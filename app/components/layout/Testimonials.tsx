// src/components/sections/Testimonials.tsx
import { Star, Quote } from 'lucide-react';
import Section from '../ui/Section';
import Card, { CardContent } from '../ui/Card';
import Badge from '../ui/Badge';
import { testimonials } from '../../data/data';

export default function Testimonials() {
  return (
    <Section
      id="testimonials"
      title="Ce que disent nos patients"
      subtitle="La confiance de plus de 10,000 patients"
      background="blue"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} hover className="h-full">
            <CardContent className="p-6 h-full flex flex-col">
              {/* En-tête avec citation */}
              <div className="mb-6">
                <Quote className="h-10 w-10 text-blue-100 mb-4" />
                
                {/* Évaluation */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonial.rating 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  {testimonial.service && (
                    <Badge variant="outline" size="sm">
                      {testimonial.service}
                    </Badge>
                  )}
                </div>
              </div>

              {/* Contenu du témoignage */}
              <blockquote className="mb-6 grow">
                <p className="text-gray-700 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
              </blockquote>

              {/* Informations du patient */}
              <div className="border-t border-gray-100 pt-6">
                <div>
                  <div className="font-bold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600 mb-1">
                    {testimonial.role}
                  </div>
                  <div className="text-xs text-gray-500">
                    {new Date(testimonial.date).toLocaleDateString('fr-FR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* CTA pour laisser un avis */}
      <div className="mt-12 text-center">
        <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto shadow-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Partagez votre expérience
          </h3>
          <p className="text-gray-600 mb-6">
            Votre avis nous aide à améliorer nos services chaque jour.
          </p>
          <a 
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
          >
            Laisser un avis sur Google
            <span className="text-lg">→</span>
          </a>
        </div>
      </div>
    </Section>
  );
}