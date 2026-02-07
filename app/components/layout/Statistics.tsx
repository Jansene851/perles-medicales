// src/components/sections/Statistics.tsx
import { Users, Clock, Award, Shield } from 'lucide-react';
import { statistics } from '../../data/data';

const iconMap: { [key: string]: React.ComponentType<any> } = {
  'Users': Users,
  'Clock': Clock,
  'Award': Award,
  'Shield': Shield
};

export default function Statistics() {
  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {statistics.map((stat) => {
            const Icon = iconMap[stat.icon];
            return (
              <div 
                key={stat.id}
                className="text-center p-6 transition-transform hover:scale-105 duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-linear-to-br from-blue-50 to-blue-100 rounded-2xl mb-4">
                  {Icon && <Icon className="h-7 w-7 text-blue-600" />}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-gray-700 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-500">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}