import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI & Machine Learning Solutions Company in Coimbatore | HYNOX',
  description:
    'HYNOX builds custom AI solutions, automated chatbots, data processing models, NLP applications, and predictive analytics tools for businesses in Coimbatore, Tamil Nadu, India, and globally. The best AI development company in Coimbatore.',
  keywords: [
    'AI solutions Coimbatore',
    'AI development company Coimbatore',
    'machine learning company Coimbatore',
    'artificial intelligence company Tamil Nadu',
    'AI automation Coimbatore',
    'custom AI chatbots Coimbatore',
    'NLP solutions Tamil Nadu',
    'predictive analytics India',
    'AI developers Tamil Nadu',
    'machine learning company India',
    'AI automation tools Tamil Nadu',
    'business AI solutions India',
    'HYNOX AI solutions',
    'generative AI Coimbatore',
    'LLM integration India',
    'AI software company Tamil Nadu',
    'computer vision solutions India',
    'AI consulting Coimbatore',
  ],
  authors: [{ name: 'HYNOX', url: 'https://hynox.in' }],
  creator: 'HYNOX',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  },
  alternates: { canonical: 'https://hynox.in/services/ai-solutions' },
  openGraph: {
    title: 'AI & Machine Learning Solutions Company in Coimbatore | HYNOX',
    description:
      'Automate your business with custom AI models, chatbots, NLP, and predictive analytics. HYNOX is the leading AI development company in Coimbatore, Tamil Nadu.',
    type: 'website',
    url: 'https://hynox.in/services/ai-solutions',
    siteName: 'HYNOX',
    locale: 'en_IN',
    images: [{ url: 'https://hynox.in/og-image.png', width: 1200, height: 630, alt: 'HYNOX AI & Machine Learning Solutions - Coimbatore' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI & ML Solutions in Coimbatore | HYNOX',
    description: 'Custom AI automation, chatbots, NLP & ML models for businesses in Coimbatore and Tamil Nadu by HYNOX.',
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

export default function AILayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
