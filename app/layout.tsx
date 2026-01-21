import type { Metadata, Viewport } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import ContextProvider from "@/components/contextProvider";
import './globals.css'
import JsonLd from '@/components/JsonLd';
import Script from 'next/script';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  // 1. Core SEO
  title: {
    default: 'Avinea Vyom Sigma Hadapsar | Luxury 2, 3, 4 & 6.5 BHK Apartments',
    template: '%s | Avinea Vyom Sigma Pune',
  },
  description: 'Experience ultra-luxury at Avinea Vyom Sigma by Vyom Sigma Buildcon. G+32 storeys in Hadapsar, Pune with 55+ amenities, Mi-Van tech, and 65% green space. Starting ₹1.29 Cr.',
  keywords: [
    'avinya vyom sigma', 'avinea vyom sigma hadapsar', 'Avinea Vyom buildcon Hadapsar',
    'vyom sigma avinya pune', 'vyom sigma avinea pune', 'avinya pune apartments',
    'avinea pune apartments', 'avinya hadapsar flats', 'Avinea hadapsar flats',
    'avinya vyom sigma price', 'avinya vyom sigma brochure', 'Avinea vyom sigma site visit',
    'Holystico Astrana', 'Luxury flats in Hadapsar', '3 BHK flats near Amanora Mall'
  ],

  // 2. Open Graph (Social Media Sharing)
  openGraph: {
    title: 'Avinea Vyom Sigma | Ultra-Luxury Living in Hadapsar, Pune',
    description: '7 Tectonic Towers (Altair to Avalon) with 115m glass elevation. 3-side open flats, 12,000 sq.ft fitness center, and IGBC 5-star rating.',
    url: 'https://avinea-hadpsar.com/', // Replace with actual URL
    siteName: 'Avinea Vyom Sigma',
    images: [
      {
        url: '/images/avinea-vyom-sigma-exterior.jpg', // Path to your main render
        width: 1200,
        height: 630,
        alt: 'Avinea Vyom Sigma Tower Elevation',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },

  // 3. Twitter Metadata
  twitter: {
    card: 'summary_large_image',
    title: 'Avinea Vyom Sigma Hadapsar - Premium 2 to 6.5 BHK',
    description: 'Mi-Van construction, 55+ world-class amenities, and proximity to Magarpatta IT Park. Possession Dec 2028.',
    images: ['/images/twitter-card.jpg'],
  },

  // 4. Search Engine Directives
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // 5. App-specific and Verification
  verification: {
    google: 'your-google-verification-code', // Recommended for Search Console
  },

  // 6. Project specific extras
  alternates: {
    canonical: 'https://avinea-hadpsar.com/',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const googleAdsId = process.env.GOOGLE_ADS_ID;
  return (
    <html lang="en">
      <head>
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <JsonLd />
        <ContextProvider>{children}</ContextProvider>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`}
        />
        <Script id="google-ads-init" strategy="afterInteractive">
          {
            ` window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${googleAdsId}');`
          }
        </Script>
      </body>
    </html>
  )
}