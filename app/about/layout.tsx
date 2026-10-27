import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About HYNOX | Software Development & Digital Solutions in Coimbatore',
  description:
    'Learn about HYNOX, a premier software development and creative firm in Coimbatore. We build custom software, web & mobile apps, ERP systems, and specialized videography and photography for architects.',
  keywords: [
    'about HYNOX',
    'software company Coimbatore',
    'web development company Coimbatore',
    'mobile app development Tamil Nadu',
    'ERP software Coimbatore',
    'photography and videography specialist for architects',
    'architectural photography Coimbatore',
    'HYNOX team',
    'HYNOX Coimbatore',
  ],
  openGraph: {
    title: 'About HYNOX | Premier Software & Digital Solutions Firm',
    description:
      'HYNOX builds scalable custom software, web & mobile applications, AI systems, and specialized architectural visual media from Coimbatore to the world.',
    type: 'website',
    url: 'https://hynox.in/about',
    siteName: 'HYNOX',
    locale: 'en_IN',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
