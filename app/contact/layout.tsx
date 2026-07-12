import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact HYNOX | Software Company in Coimbatore | +91 88705 24355',
  description:
    'Contact HYNOX — the best software development company in Coimbatore, Tamil Nadu. Reach us at +91 88705 24355 or thehynoxofficial@gmail.com for custom software, web development, mobile apps, ERP, and AI solutions.',
  keywords: [
    'contact HYNOX',
    'HYNOX phone number',
    'HYNOX email',
    'HYNOX Coimbatore contact',
    'software company contact Coimbatore',
    'hire software developer Coimbatore',
    'get a quote software development Coimbatore',
    'IT company contact Tamil Nadu',
    'HYNOX office address',
    'custom software inquiry Coimbatore',
    'web development quote Coimbatore',
    'mobile app quote Tamil Nadu',
    'HYNOX WhatsApp',
    '+91 88705 24355',
    'thehynoxofficial@gmail.com',
  ],
  authors: [{ name: 'HYNOX', url: 'https://hynox.in' }],
  creator: 'HYNOX',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  },
  alternates: { canonical: 'https://hynox.in/contact' },
  openGraph: {
    title: 'Contact HYNOX | Software Company in Coimbatore',
    description:
      'Get in touch with HYNOX. Call +91 88705 24355 or email thehynoxofficial@gmail.com for custom software, web development, mobile apps, and AI solutions in Coimbatore, Tamil Nadu.',
    type: 'website',
    url: 'https://hynox.in/contact',
    siteName: 'HYNOX',
    locale: 'en_IN',
    images: [{ url: 'https://hynox.in/og-image.png', width: 1200, height: 630, alt: 'Contact HYNOX - Software Company in Coimbatore' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact HYNOX | Software Company in Coimbatore',
    description: 'Reach HYNOX at +91 88705 24355 or thehynoxofficial@gmail.com for custom software, apps, ERP & AI solutions.',
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

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
