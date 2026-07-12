import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Performance Marketing Agency in Coimbatore | Google & Meta Ads | HYNOX',
  description:
    'HYNOX is a data-driven performance marketing agency in Coimbatore, Tamil Nadu. We specialize in Meta Ads, Google Ads, ROAS scaling, and D2C growth for apparel, fashion, retail, and ecommerce brands across India and globally.',
  keywords: [
    'performance marketing Coimbatore',
    'performance marketing agency Tamil Nadu',
    'Meta ads agency Coimbatore',
    'Google ads company Coimbatore',
    'Google ads agency Tamil Nadu',
    'Facebook ads agency Coimbatore',
    'Instagram ads Coimbatore',
    'ecommerce ads agency Coimbatore',
    'ROAS scaling experts India',
    'D2C marketing agency Coimbatore',
    'digital marketing Coimbatore',
    'digital marketing agency Tamil Nadu',
    'paid ads agency Coimbatore',
    'ecommerce marketing Tamil Nadu',
    'apparel brand marketing India',
    'fashion brand ads Coimbatore',
    'HYNOX marketing agency',
    'social media marketing Coimbatore',
    'conversion rate optimization Tamil Nadu',
    'lead generation Coimbatore',
  ],
  authors: [{ name: 'HYNOX', url: 'https://hynox.in' }],
  creator: 'HYNOX',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  },
  alternates: { canonical: 'https://hynox.in/services/performance-marketing' },
  openGraph: {
    title: 'Performance Marketing Agency in Coimbatore | Google & Meta Ads | HYNOX',
    description:
      'Scale your online sales with data-driven Meta Ads, Google Ads, and ROAS optimization. HYNOX is Coimbatore\'s top performance marketing agency for D2C and ecommerce brands.',
    type: 'website',
    url: 'https://hynox.in/services/performance-marketing',
    siteName: 'HYNOX',
    locale: 'en_IN',
    images: [{ url: 'https://hynox.in/og-image.png', width: 1200, height: 630, alt: 'HYNOX Performance Marketing Agency - Coimbatore' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Performance Marketing Agency in Coimbatore | HYNOX',
    description: 'Meta Ads, Google Ads & ROAS scaling for D2C and ecommerce brands in Coimbatore, Tamil Nadu by HYNOX.',
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

export default function PerformanceMarketingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
