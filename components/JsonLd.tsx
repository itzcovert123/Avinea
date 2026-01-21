export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ApartmentComplex",
        "@id": 'https://avinea-hadpsar.com/',
        "name": "Vyom Sigma Avinea",
        "description": "An ultra-luxury residential project in Hadapsar, Pune featuring 7 towers (G+5P+32) with Mi-Van construction and 65% open green space.",
        "url": 'https://avinea-hadpsar.com/',
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "DP Road, near Amanora Park Town",
          "addressLocality": "Hadapsar",
          "addressRegion": "Pune",
          "postalCode": "411028",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "18.5089",
          "longitude": "73.9259"
        },
        "identifier": "RERA ID: P52100079047",
        "amenityFeature": [
          { "@type": "LocationFeatureSpecification", "name": "Swimming Pool with Jacuzzi", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "12,000 sq. ft. Fitness Center", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Co-working Space & Library", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Mi-Van Construction Technology", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "IGBC 5-Star Green Rating", "value": true }
        ]
      },
      {
        "@type": "RealEstateListing",
        "@id": 'https://avinea-hadpsar.com/',
        "name": "Luxury Apartments for Sale in Hadapsar - Avinea Vyom Sigma",
        "mainEntity": { "@id": 'https://avinea-hadpsar.com/' },
        "datePosted": "2026-01-21",
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "INR",
          "lowPrice": "12900000",
          "highPrice": "34500000",
          "offerCount": "500",
          "availability": "https://schema.org/InStock"
        }
      },
      {
        "@type": "RealEstateAgent",
        "@id": 'https://avinea-hadpsar.com/',
        "name": "Vyom Sigma Buildzone",
        "description": "A strategic alliance between Vyom Buildcon and Sigma Buildzone specializing in sustainable luxury residences.",
        "url": 'https://avinea-hadpsar.com/',
        "parentOrganization": [
          { "@type": "Organization", "name": "Vyom Buildcon" },
          { "@type": "Organization", "name": "Sigma Buildzone" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the configuration and carpet area of the apartments at Vyom Sigma Avinea?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Vyom Sigma Avinea offers 2 BHK, 3 BHK, 4 BHK, and 5 BHK configurations. Carpet areas range from 940 sq. ft. up to 2,500 sq. ft."
            }
          },
          {
            "@type": "Question",
            "name": "Is Vyom Sigma Avinea RERA registered?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, the project is RERA registered under No. P52100079047 and PR1261012501542."
            }
          }
        ]
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}