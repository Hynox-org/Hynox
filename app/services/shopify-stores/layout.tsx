import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shopify Store Development Company in Coimbatore | HYNOX',
  description:
    'HYNOX designs and builds custom Shopify e-commerce stores, custom theme setups, API integrations, and checkout optimization for fashion and retail brands in Coimbatore, India, and globally.',
  keywords: [
    'Shopify developer Coimbatore',
    'ecommerce store setup India',
    'Shopify agency Tamil Nadu',
    'garment online store developers',
    'best Shopify company Coimbatore',
    'HYNOX Shopify development',
  ],
  openGraph: {
    title: 'Shopify Store Development Company | HYNOX',
    description:
      'Launch your premium Shopify e-commerce store with high-performance theme customization and integrations by HYNOX.',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function ShopifyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
