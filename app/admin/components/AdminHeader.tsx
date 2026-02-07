'use client';

import { Search, Bell, HelpCircle } from 'lucide-react';
import { useState } from 'react';

export default function AdminHeader() {
  const [notifications] = useState([
    { id: 1, title: 'Nouveau rendez-vous', description: 'Marie Dubois a pris rendez-vous', time: '5 min ago' },
    { id: 2, title: 'Rapport mensuel', description: 'Le rapport de janvier est prêt', time: '2 hours ago' },
    { id: 3, title: 'Maintenance', description: 'Mise à jour système prévue ce soir', time: '1 day ago' },
  ]);

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Search */}
          <div className="flex-1 max-w-lg">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="search"
                placeholder="Rechercher..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Bell className="h-5 w-5 text-gray-600" />
              {notifications.length > 0 && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              )}
            </button>
            
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <HelpCircle className="h-5 w-5 text-gray-600" />
            </button>

            {/* Quick stats */}
            <div className="hidden lg:flex items-center gap-6">
              <div className="text-right">
                <div className="text-sm font-medium text-gray-900">1,248</div>
                <div className="text-xs text-gray-500">Patients actifs</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-gray-900">98.2%</div>
                <div className="text-xs text-gray-500">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}