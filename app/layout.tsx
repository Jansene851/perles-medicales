import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Société Médicale Les Perles - Votre santé, notre priorité',
  description: 'Centre médical moderne offrant des soins complets dans un environnement accueillant et rassurant',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} text-gray-900 antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}