import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import AdminSidebar from '@/app/admin/components/AdminSidebar';
import AdminHeader from '@/app/admin/components/AdminHeader';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tableau de bord administrateur - Société Médicale Les Perles',
  description: 'Interface d\'administration pour la gestion du centre médical',
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-gray-50`}>
        <div className="flex min-h-screen">
          <AdminSidebar />
          <div className="flex-1">
            <AdminHeader />
            <main className="p-6">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}