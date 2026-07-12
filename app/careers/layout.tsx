import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers at HYNOX | Software Jobs & Internships in Coimbatore, Tamil Nadu',
  description:
    'Join HYNOX — the leading software development company in Coimbatore. Explore full-time jobs and internships in software development, UI/UX design, digital marketing, and AI. Build your career with a fast-growing tech company in Tamil Nadu.',
  keywords: [
    'careers at HYNOX',
    'software jobs Coimbatore',
    'IT jobs Coimbatore',
    'software internships Coimbatore',
    'tech jobs Tamil Nadu',
    'web development jobs Coimbatore',
    'mobile app developer jobs Coimbatore',
    'UI UX designer jobs Coimbatore',
    'digital marketing jobs Coimbatore',
    'AI jobs Tamil Nadu',
    'HYNOX careers',
    'HYNOX internship',
    'fresher software jobs Coimbatore',
    'entry level developer jobs Tamil Nadu',
    'software company hiring Coimbatore',
  ],
  authors: [{ name: 'HYNOX', url: 'https://hynox.in' }],
  creator: 'HYNOX',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  },
  alternates: { canonical: 'https://hynox.in/careers' },
  openGraph: {
    title: 'Careers at HYNOX | Software Jobs & Internships in Coimbatore',
    description:
      'Join HYNOX — the leading software development company in Coimbatore, Tamil Nadu. We are hiring software developers, designers, marketers, and AI engineers.',
    type: 'website',
    url: 'https://hynox.in/careers',
    siteName: 'HYNOX',
    locale: 'en_IN',
    images: [{ url: 'https://hynox.in/og-image.png', width: 1200, height: 630, alt: 'Careers at HYNOX - Software Jobs in Coimbatore' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers at HYNOX | Software Jobs in Coimbatore',
    description: 'Join HYNOX, Coimbatore\'s top software company. Full-time jobs and internships available in development, design, marketing & AI.',
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

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
