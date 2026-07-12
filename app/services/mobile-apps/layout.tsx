import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobile App Development Company in Coimbatore | Android & iOS Apps | HYNOX',
  description:
    'HYNOX is a top mobile app development company in Coimbatore, Tamil Nadu. We build custom Android apps, iOS apps, Flutter and React Native cross-platform apps for businesses, startups, and ecommerce brands across India, UK, and Finland.',
  keywords: [
    'mobile app development company in Coimbatore',
    'Android app development Coimbatore',
    'iOS app development Coimbatore',
    'app development company Coimbatore',
    'mobile app development Tamil Nadu',
    'Flutter app development Coimbatore',
    'React Native app development Coimbatore',
    'cross-platform app development Tamil Nadu',
    'custom mobile app development Coimbatore',
    'best app development company Coimbatore',
    'best app development company Tamil Nadu',
    'ecommerce app development Coimbatore',
    'startup app development Coimbatore',
    'HYNOX mobile apps',
    'Android iOS app Coimbatore',
    'app development company India',
    'mobile app developers Tamil Nadu',
    'on-demand app development Coimbatore',
    'SaaS app development India',
  ],
  authors: [{ name: 'HYNOX', url: 'https://hynox.in' }],
  creator: 'HYNOX',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  },
  alternates: { canonical: 'https://hynox.in/services/mobile-apps' },
  openGraph: {
    title: 'Mobile App Development Company in Coimbatore | Android & iOS | HYNOX',
    description:
      'Custom Android, iOS, Flutter & React Native apps for businesses in Coimbatore and across India. From idea to App Store — HYNOX handles everything.',
    type: 'website',
    url: 'https://hynox.in/services/mobile-apps',
    siteName: 'HYNOX',
    locale: 'en_IN',
    images: [{ url: 'https://hynox.in/og-image.png', width: 1200, height: 630, alt: 'HYNOX Mobile App Development - Coimbatore' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobile App Development in Coimbatore | Android & iOS | HYNOX',
    description: 'Custom Android, iOS & Flutter apps for startups and businesses in Coimbatore, Tamil Nadu by HYNOX.',
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

export default function AppDevLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
