import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HYNOX | #1 Software Development Company in Coimbatore, Tamil Nadu",
  description:
    "HYNOX is the best software development company in Coimbatore, Tamil Nadu. We build custom software, websites, mobile apps (iOS & Android), ERP systems, Shopify stores, and Generative AI automation (ChatGPT, Claude, Gemini). Trusted by 15+ businesses across India, UK & Finland.",
  keywords: [
    "software company in Coimbatore",
    "software development company Coimbatore",
    "best software company Coimbatore",
    "top IT company Coimbatore",
    "web development company Coimbatore",
    "website development Coimbatore",
    "mobile app development Coimbatore",
    "Android app development Coimbatore",
    "iOS app development Coimbatore",
    "ERP software Coimbatore",
    "custom ERP development Tamil Nadu",
    "Shopify development Coimbatore",
    "ecommerce website Coimbatore",
    "AI solutions Coimbatore",
    "digital marketing Coimbatore",
    "performance marketing Coimbatore",
    "HYNOX",
    "HYNOX Coimbatore",
    "hynox.in",
    "software developers Tamil Nadu",
    "IT services Coimbatore",
    "custom software development India",
    "startup technology partner Coimbatore",
    "web design Coimbatore",
    "React Next.js developer Coimbatore",
    "top app developers in Coimbatore",
    "AI software development company",
    "best web development agency in Tamil Nadu",
    "custom mobile app development company",
    "AI software development in Coimbatore",
    "Generative AI solutions Coimbatore",
    "ChatGPT integration company Coimbatore",
    "Claude AI integration services",
    "Gemini AI development company",
    "AI chatbot development Coimbatore",
    "custom AI solutions like ChatGPT Claude Gemini"
  ],
  authors: [{ name: "HYNOX", url: "https://hynox.in" }],
  creator: "HYNOX",
  publisher: "HYNOX",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  alternates: { canonical: "https://hynox.in" },
  openGraph: {
    title: "HYNOX | #1 Software Development Company in Coimbatore, Tamil Nadu",
    description:
      "HYNOX builds custom software, websites, mobile apps, ERP systems, Shopify stores, and AI automation for businesses in Coimbatore, Tamil Nadu, and globally.",
    locale: "en_IN",
    type: "website",
    url: "https://hynox.in",
    siteName: "HYNOX",
    images: [{ url: "https://hynox.in/og-image.png", width: 1200, height: 630, alt: "HYNOX - Software Development Company in Coimbatore" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "HYNOX | Software Development Company in Coimbatore",
    description: "Custom software, web & mobile app development company in Coimbatore, Tamil Nadu.",
    site: "@hynoxin",
    images: ["https://hynox.in/og-image.png"],
  },
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Coimbatore",
    "geo.position": "11.1085;77.3411",
    "ICBM": "11.1085, 77.3411",
    "article:publisher": "https://hynox.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "name": "HYNOX",
    "alternateName": ["HYNOX Software Company", "HYNOX Coimbatore"],
    "url": "https://hynox.in",
    "logo": "https://hynox.in/hynox-logo.png",
    "image": "https://hynox.in/og-image.png",
    "description": "HYNOX is the leading software development company in Coimbatore, Tamil Nadu. We build custom websites, mobile apps (Android & iOS), ERP systems, Shopify stores, and cutting-edge Generative AI automation (like ChatGPT, Claude, Gemini) to help businesses grow globally.",
    "slogan": "Build Smarter. Grow Faster.",
    "foundingDate": "2022",
    "telephone": "+91 88705 24355",
    "email": "thehynoxofficial@gmail.com",
    "priceRange": "$$",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, Bank Transfer, UPI",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Coimbatore",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN",
      "postalCode": "641001"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 11.1085,
      "longitude": 77.3411
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "knowsAbout": [
      "Custom Software Development",
      "Web Development",
      "Mobile App Development",
      "ERP Systems",
      "E-commerce Development",
      "Shopify Development",
      "AI Automation",
      "Digital Marketing",
      "Performance Marketing"
    ],
    "areaServed": [
      { "@type": "City", "name": "Coimbatore" },
      { "@type": "State", "name": "Tamil Nadu" },
      { "@type": "Country", "name": "India" },
      { "@type": "Country", "name": "United Kingdom" },
      { "@type": "Country", "name": "Finland" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Software & Digital Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Software Development", "description": "Tailored software solutions for businesses in Coimbatore and beyond" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Development", "description": "Fast, modern websites built with React and Next.js" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile App Development", "description": "Native and cross-platform iOS & Android apps" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "ERP Software", "description": "Custom ERP systems for manufacturing, retail, and logistics" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Shopify E-commerce", "description": "Shopify store development and optimization" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Automation", "description": "AI-powered automation and machine learning solutions" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Performance Marketing", "description": "Google Ads, Meta Ads, and digital marketing" } }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "15",
      "bestRating": "5"
    },
    "sameAs": [
      "https://facebook.com/hynox",
      "https://instagram.com/hynox",
      "https://linkedin.com/company/hynox"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the best software development company in Coimbatore?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "HYNOX is the leading software development company in Coimbatore, Tamil Nadu. We specialize in custom software, web development, mobile apps, ERP systems, and AI solutions for businesses across India and globally."
        }
      },
      {
        "@type": "Question",
        "name": "Which IT company in Coimbatore builds custom software?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "HYNOX builds fully custom software solutions in Coimbatore including websites, mobile applications, ERP systems, Shopify stores, and AI automation (including ChatGPT, Claude, Gemini integrations) for businesses across India, UK, and Finland."
        }
      },
      {
        "@type": "Question",
        "name": "Who provides AI software development like ChatGPT, Claude, or Gemini in Coimbatore?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "HYNOX is the top AI software development company in Coimbatore, specializing in Generative AI, integrating LLMs like ChatGPT, Claude, and Gemini to build smart chatbots and automation tools for businesses."
        }
      },
      {
        "@type": "Question",
        "name": "Does HYNOX offer web development services in Coimbatore?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, HYNOX offers full-stack web development, Next.js/React websites, WordPress development, and e-commerce solutions from Coimbatore, Tamil Nadu."
        }
      },
      {
        "@type": "Question",
        "name": "What services does HYNOX offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "HYNOX offers custom software development, website development, mobile app development (Android & iOS), ERP systems, Shopify e-commerce stores, AI/ML automation, performance marketing, and digital marketing services from Coimbatore, Tamil Nadu."
        }
      },
      {
        "@type": "Question",
        "name": "How to contact HYNOX software company in Coimbatore?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can contact HYNOX at +91 88705 24355 or email thehynoxofficial@gmail.com. We are based in Coimbatore, Tamil Nadu, India and serve clients globally."
        }
      },
      {
        "@type": "Question",
        "name": "Is HYNOX a good software company for startups in Coimbatore?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, HYNOX is an excellent technology partner for startups in Coimbatore. We offer affordable custom software, MVP development, mobile apps, and digital marketing to help startups launch and scale."
        }
      }
    ]
  };

  return (
    <html lang="en" prefix="og: https://ogp.me/ns#" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </head>
      <body>
        {children}
        <a
          href="https://wa.me/918870524355"
          className="whatsapp-float-btn"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.066 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.772-.725 2.02-1.425.25-.7.25-1.3 0-1.425-.075-.125-.27-.199-.57-.35zM12 2C6.477 2 2 6.477 2 12c0 1.74.443 3.37 1.217 4.793L2 22l5.377-1.411A9.947 9.947 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.634 0-3.153-.443-4.466-1.214l-.32-.189-3.32.872.887-3.218-.207-.33A7.94 7.94 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
          </svg>
        </a>
      </body>
    </html>
  );
}
