import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Development Company in Coimbatore | Custom Websites & Web Apps – HYNOX',
  description:
    'HYNOX is a leading web development company in Coimbatore, Tamil Nadu. We build custom websites, web applications, eCommerce stores, admin dashboards and SaaS platforms for businesses across India.',
  keywords: [
    'web development company in Coimbatore',
    'website development Coimbatore',
    'custom web application development Tamil Nadu',
    'web development company Tamil Nadu',
    'website design Coimbatore',
    'ecommerce website development Coimbatore',
    'web app development company India',
    'best web development company Coimbatore',
    'HYNOX web development',
    'software company Coimbatore',
  ],
  openGraph: {
    title: 'Web Development Company in Coimbatore | HYNOX',
    description:
      'Custom websites, web applications and eCommerce platforms built for businesses in Coimbatore and across India.',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function WebDevLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
