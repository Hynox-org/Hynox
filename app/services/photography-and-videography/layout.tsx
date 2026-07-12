import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Photography & Videography Production in Coimbatore | HYNOX',
  description:
    'HYNOX offers professional photography and videography production, including UGC video creation, product shoots, and corporate videos for brands in Coimbatore and globally.',
  keywords: [
    'photography Coimbatore',
    'videography production Coimbatore',
    'UGC video creation Coimbatore',
    'User generated content agency India',
    'product video shoots Tamil Nadu',
    'best video ads company Coimbatore',
    'HYNOX videos',
  ],
  openGraph: {
    title: 'Photography & Videography Production | HYNOX',
    description:
      'High-quality product shoots, ad creatives, and UGC videos created by HYNOX.',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function PhotographyVideographyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
