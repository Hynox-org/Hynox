import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom ERP Software Development Company in Coimbatore | HYNOX',
  description:
    'HYNOX builds custom ERP systems, CRM software, inventory management dashboards, and business automation software for manufacturing, retail, and logistics companies in Coimbatore, Tamil Nadu, and globally.',
  keywords: [
    'ERP software Coimbatore',
    'custom ERP development Coimbatore',
    'ERP software company Coimbatore',
    'ERP development Tamil Nadu',
    'best ERP developers Coimbatore',
    'CRM software Coimbatore',
    'inventory management software Coimbatore',
    'business automation software India',
    'manufacturing ERP Tamil Nadu',
    'retail ERP Coimbatore',
    'logistics software Tamil Nadu',
    'custom software development Coimbatore',
    'enterprise software Coimbatore',
    'HYNOX ERP software',
    'HYNOX custom software',
    'ERP implementation Coimbatore',
    'cloud ERP Tamil Nadu',
    'HR software Coimbatore',
  ],
  authors: [{ name: 'HYNOX', url: 'https://hynox.in' }],
  creator: 'HYNOX',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  },
  alternates: { canonical: 'https://hynox.in/services/erp-software' },
  openGraph: {
    title: 'Custom ERP Software Development Company in Coimbatore | HYNOX',
    description:
      'Custom ERP systems, CRM, and business automation software for manufacturing, retail, and logistics businesses in Coimbatore, Tamil Nadu, built by HYNOX.',
    type: 'website',
    url: 'https://hynox.in/services/erp-software',
    siteName: 'HYNOX',
    locale: 'en_IN',
    images: [{ url: 'https://hynox.in/og-image.png', width: 1200, height: 630, alt: 'HYNOX Custom ERP Software - Coimbatore' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom ERP Software in Coimbatore | HYNOX',
    description: 'Custom ERP, CRM & business automation software for companies in Coimbatore and Tamil Nadu by HYNOX.',
    site: '@hynoxin',
    images: ['https://hynox.in/og-image.png'],
  },
  other: {
    'geo.region': 'IN-TN',
    'geo.placename': 'Coimbatore',
    'geo.position': '11.1085;77.3411',
    'ICBM': '11.1085, 77.3411',
  },
};

export default function ERPLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
