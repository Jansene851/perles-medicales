'use client';

import { 
  LayoutDashboard, 
  Calendar, 
  Users, 
  DollarSign, 
  FileText, 
  Settings,
  Bell,
  HelpCircle,
  LogOut,
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/admin/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { href: '/admin/appointments', icon: Calendar, label: 'Rendez-vous' },
  { href: '/admin/patients', icon: Users, label: 'Patients' },
  { href: '/admin/revenue', icon: DollarSign, label: 'Revenus' },
  { href: '/admin/reports', icon: FileText, label: 'Rapports' },
  { href: '/admin/settings', icon: Settings, label: 'Paramètres' },
];

const secondaryItems = [
  { href: '/admin/notifications', icon: Bell, label: 'Notifications', badge: 3 },
  { href: '/admin/help', icon: HelpCircle, label: 'Aide' },
];

export default function AdminSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Bouton mobile */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-40 w-64 bg-white border-r border-gray-200
        transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0
        transition-transform duration-200 ease-in-out
      `}>
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <Link href="/admin/dashboard" className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <LayoutDashboard className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="font-bold text-gray-900">Les Perles</div>
              <div className="text-xs text-gray-500">Administration</div>
            </div>
          </Link>
        </div>

        {/* Navigation principale */}
        <nav className="p-4">
          <div className="mb-8">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-3">
              Principal
            </h3>
            <div className="space-y-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`
                      flex items-center gap-3 px-3 py-2 rounded-lg transition-colors
                      ${isActive 
                        ? 'bg-blue-50 text-blue-700' 
                        : 'text-gray-700 hover:bg-gray-50'
                      }
                    `}
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.label}</span>
                    {isActive && (
                      <div className="ml-auto w-2 h-2 bg-blue-600 rounded-full"></div>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Navigation secondaire */}
          <div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-3">
              Support
            </h3>
            <div className="space-y-1">
              {secondaryItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`
                      flex items-center gap-3 px-3 py-2 rounded-lg transition-colors
                      ${isActive 
                        ? 'bg-blue-50 text-blue-700' 
                        : 'text-gray-700 hover:bg-gray-50'
                      }
                    `}
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>

        {/* Profil utilisateur */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="font-bold text-blue-700">A</span>
            </div>
            <div className="flex-1">
              <div className="font-medium text-gray-900">Administrateur</div>
              <div className="text-xs text-gray-500">admin@lesperles-medical.fr</div>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <LogOut className="h-5 w-5 text-gray-400" />
            </button>
          </div>
        </div>
      </aside>

      {/* Overlay mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}