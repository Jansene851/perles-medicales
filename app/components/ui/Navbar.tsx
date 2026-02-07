'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Stethoscope } from 'lucide-react';
import { navItems } from '../../data/data';
import Button from './Button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-blue-100 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-blue-700 p-2 rounded-lg">
              <Stethoscope className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-blue-800">Les Perles</span>
              <span className="block text-xs text-gray-500">Société Médicale</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-blue-700 font-medium transition-colors"
              >
                {item.title}
              </Link>
            ))}
            <Button variant="primary" size="md">
              Prendre RDV
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-700 font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              <Button variant="primary" size="md" className="w-full">
                Prendre RDV
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}