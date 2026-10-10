import { SITE, OG_IMAGE } from "@/lib/seo";

// Shared Product/Offer fields required by Google Merchant listings for the plan pages.
// Plans are digital (credentials by email), so shipping is free with no handling or transit time,
// and returns follow /refund-policy: all sales final once activated.
export const PRODUCT_IMAGE = [`${SITE}${OG_IMAGE}`];

export const OFFER_POLICIES = {
  shippingDetails: {
    "@type": "OfferShippingDetails",
    shippingRate: { "@type": "MonetaryAmount", value: "0.00", currency: "CAD" },
    shippingDestination: { "@type": "DefinedRegion", addressCountry: "CA" },
    deliveryTime: {
      "@type": "ShippingDeliveryTime",
      handlingTime: { "@type": "QuantitativeValue", minValue: 0, maxValue: 0, unitCode: "DAY" },
      transitTime: { "@type": "QuantitativeValue", minValue: 0, maxValue: 0, unitCode: "DAY" },
    },
  },
  hasMerchantReturnPolicy: {
    "@type": "MerchantReturnPolicy",
    applicableCountry: "CA",
    returnPolicyCategory: "https://schema.org/MerchantReturnNotPermitted",
    merchantReturnLink: `${SITE}/refund-policy`,
  },
};
