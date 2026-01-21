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
  metadataBase: new URL('https://avinea-hadpsar.com'), 
  
  title: {
    default: 'Avinea Vyom Sigma Hadapsar | Luxury 2, 3, 4 & 6.5 BHK Apartments',
    template: '%s | Avinea Vyom Sigma Pune',
  },
  description: 'Experience ultra-luxury at Avinea Vyom Sigma by Vyom Sigma Buildcon. G+32 storeys in Hadapsar, Pune with 55+ amenities.',
  keywords: ['avinya vyom sigma', 'avinea vyom sigma hadapsar', 'pune apartments'],
  
  openGraph: {
    title: 'Avinea Vyom Sigma | Ultra-Luxury Living in Hadapsar',
    description: '7 Tectonic Towers with 115m glass elevation.',
    url: 'https://avinea-hadpsar.com/',
    siteName: 'Avinea Vyom Sigma',
    images: [{ url: '/images/avinea-vyom-sigma-exterior.jpg' }], // Now resolves correctly
    locale: 'en_IN',
    type: 'website',
  },

  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const googleAdsId = process.env.GOOGLE_ADS_ID;

  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans antialiased">
        {/* Recommended: Move JsonLd to the top of body or use Metadata "other" field */}
        <JsonLd />
        
        <ContextProvider>
          {children}
        </ContextProvider>

        {/* Use 'lazyOnload' for Ads to improve your LCP (Largest Contentful Paint) score */}
        {googleAdsId && (
          <>
            <Script
              strategy="lazyOnload"
              src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`}
            />
            <Script id="google-ads-init" strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${googleAdsId}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  )
}