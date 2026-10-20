import type { Metadata } from 'next';
import { Inter, Sora } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Paulista Guincho 24 Horas | Auto Socorro Rápido em São Paulo - SP',
  description: 'Guincho 24 Horas em São Paulo e região. Chegada rápida em até 30 minutos nas Marginais, Centro, Zona Sul, Norte, Leste e Oeste. Ligue agora ou chame no WhatsApp!',
  keywords: [
    'guincho sp',
    'guincho 24 horas são paulo',
    'auto socorro sp',
    'guincho plataforma',
    'guincho urgente marginal tiete',
    'paulista guincho'
  ],
  authors: [{ name: 'Paulista Guincho' }],
  openGraph: {
    title: 'Paulista Guincho 24 Horas | Auto Socorro Rápido em SP',
    description: 'Atendimento de emergência para carros, motos e vans em toda a capital paulista.',
    url: 'https://paulistaguincho.com.br',
    siteName: 'Paulista Guincho',
    locale: 'pt_BR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EmergencyService',
    'name': 'Paulista Guincho 24 Horas',
    'image': 'https://paulistaguincho.com.br/logo.png',
    '@id': 'https://paulistaguincho.com.br',
    'url': 'https://paulistaguincho.com.br',
    'telephone': '+5511982434255',
    'priceRange': '$$',
    'description': 'Serviço de guincho 24 horas e auto socorro emergencial em São Paulo Capital. Resgate rápido com caminhão plataforma nas Marginais Tietê e Pinheiros, Zona Leste, Zona Sul, Zona Norte, Zona Oeste e Centro.',
    'knowsAbout': [
      'Guincho 24 Horas em São Paulo',
      'Guincho Plataforma Hidráulica',
      'Resgate Veicular nas Marginais Tietê e Pinheiros',
      'Auto Socorro para Carros e Blindados em SP',
      'Transporte Especializado de Motocicletas',
      'Guincho para Vans e Utilitários',
      'Auxílio de Bateria e Pane Elétrica',
      'Troca de Pneu e Pane Seca',
      'Guincho na Zona Leste de SP',
      'Guincho na Zona Sul e Berrini',
      'Guincho no Centro e Avenida Paulista',
      'Guincho na Zona Norte e Zona Oeste de SP'
    ],
    'subjectOf': {
      '@type': 'WebPageElement',
      '@id': 'https://paulistaguincho.com.br/#tese-autoridade',
      'name': 'Tese de Autoridade: Guincho 24 Horas em São Paulo'
    },
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'São Paulo',
      'addressRegion': 'SP',
      'addressCountry': 'BR',
    },
    'hasMap': 'https://maps.app.goo.gl/S12W19uLmVsTQ9rF7',
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': -23.6060599,
      'longitude': -46.5019439,
    },
    'areaServed': [
      { '@type': 'City', 'name': 'São Paulo' },
      { '@type': 'AdministrativeArea', 'name': 'Zona Leste de São Paulo' },
      { '@type': 'AdministrativeArea', 'name': 'Zona Sul de São Paulo' },
      { '@type': 'AdministrativeArea', 'name': 'Zona Norte de São Paulo' },
      { '@type': 'AdministrativeArea', 'name': 'Zona Oeste de São Paulo' },
      { '@type': 'AdministrativeArea', 'name': 'Centro de São Paulo' }
    ],
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      'opens': '00:00',
      'closes': '23:59'
    },
    'sameAs': [
      'https://maps.app.goo.gl/S12W19uLmVsTQ9rF7'
    ]
  };

  return (
    <html lang="pt-BR" className={`${inter.variable} ${sora.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-[#FAFAF7] text-slate-900 selection:bg-amber-400 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}