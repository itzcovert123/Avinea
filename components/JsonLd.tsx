export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ApartmentComplex",
        "@id": 'https://avinea-hadpsar.com/',
        "name": "Avinea by Vyom Buildzone",
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
        "name": "Luxury Apartments for Sale in Hadapsar - Avinea by Vyom Buildzone",
        "mainEntity": { "@id": 'https://avinea-hadpsar.com/' },
        "datePosted": "2026-01-21",
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "INR",
          "lowPrice": "12900000",
          "highPrice": "36600000",
          "offerCount": "500",
          "availability": "https://schema.org/InStock"
        }
      },
      {
        "@type": "RealEstateAgent",
        "@id": 'https://avinea-hadpsar.com/',
        "name": "Vyom Buildzone",
        "description": "Sustainable luxury residences in Hadapsar, Pune by Vyom Buildzone.",
        "url": 'https://avinea-hadpsar.com/',
        "parentOrganization": [
          { "@type": "Organization", "name": "Vyom Buildzone" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the configuration and carpet area of the apartments at Avinea by Vyom Buildzone?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Avinea by Vyom Buildzone offers 2 BHK, 3 BHK, 4 BHK, 4.5 BHK, and 5.5 BHK configurations. Carpet areas range from 946 sq. ft. up to 2,470 sq. ft."
            }
          },
          {
            "@type": "Question",
            "name": "Is Avinea by Vyom Buildzone RERA registered?",
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