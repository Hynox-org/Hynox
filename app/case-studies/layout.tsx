import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies | HYNOX Client Success Stories | Software Company Coimbatore',
  description:
    'Explore real client success stories from HYNOX — the leading software development company in Coimbatore, Tamil Nadu. See how we delivered custom software, mobile apps, ERP systems, Shopify stores, and AI solutions for businesses across India, UK, and Finland.',
  keywords: [
    'HYNOX case studies',
    'software development case studies Coimbatore',
    'client success stories HYNOX',
    'web development portfolio Coimbatore',
    'mobile app projects Tamil Nadu',
    'ERP implementation case study India',
    'Shopify development success story',
    'AI automation case study',
    'software company portfolio Coimbatore',
    'HYNOX projects',
    'best IT projects Coimbatore',
    'software solutions delivered Tamil Nadu',
  ],
  authors: [{ name: 'HYNOX', url: 'https://hynox.in' }],
  creator: 'HYNOX',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  },
  alternates: { canonical: 'https://hynox.in/case-studies' },
  openGraph: {
    title: 'Case Studies | HYNOX Client Success Stories | Coimbatore',
    description:
      'See how HYNOX delivered impactful software, mobile apps, ERP systems, and AI solutions for clients across India, UK, and Finland.',
    type: 'website',
    url: 'https://hynox.in/case-studies',
    siteName: 'HYNOX',
    locale: 'en_IN',
    images: [{ url: 'https://hynox.in/og-image.png', width: 1200, height: 630, alt: 'HYNOX Case Studies - Software Solutions Coimbatore' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies | HYNOX Client Success Stories',
    description: 'Real results from HYNOX — custom software, apps, ERP & AI solutions for businesses in India and globally.',
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

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
