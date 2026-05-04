"use client"

import { createContext, useContext, useState, ReactNode } from "react"

type Language = "en" | "fr"

interface Translations {
  [key: string]: {
    en: string
    fr: string
  }
}

export const translations: Translations = {
  // Navigation
  "nav.services": {
    en: "Services",
    fr: "Services",
  },
  "nav.pricing": {
    en: "Pricing",
    fr: "Tarifs",
  },
  "nav.partners": {
    en: "Partners",
    fr: "Partenaires",
  },
  "nav.contact": {
    en: "Contact",
    fr: "Contact",
  },
  
  // Hero Section
  "hero.tagline": {
    en: "Swiss Digital Excellence",
    fr: "Excellence Digitale Suisse",
  },
  "hero.title": {
    en: "Crafting Digital Experiences with Swiss Precision",
    fr: "Créer des Expériences Digitales avec la Précision Suisse",
  },
  "hero.subtitle": {
    en: "Premium web design and digital solutions from Geneva & Founex. We blend timeless elegance with cutting-edge technology.",
    fr: "Conception web haut de gamme et solutions digitales depuis Genève & Founex. Nous allions élégance intemporelle et technologie de pointe.",
  },
  "hero.cta": {
    en: "Start Your Project",
    fr: "Démarrer Votre Projet",
  },
  "hero.secondary_cta": {
    en: "View Our Work",
    fr: "Voir Nos Réalisations",
  },
  
  // Services Section
  "services.tagline": {
    en: "Our Expertise",
    fr: "Notre Expertise",
  },
  "services.title": {
    en: "Digital Solutions Tailored to Your Vision",
    fr: "Solutions Digitales Adaptées à Votre Vision",
  },
  "services.subtitle": {
    en: "We deliver bespoke digital experiences that elevate your brand and drive results.",
    fr: "Nous créons des expériences digitales sur mesure qui élèvent votre marque et génèrent des résultats.",
  },
  "services.webdesign.title": {
    en: "Bespoke Web Design",
    fr: "Conception Web Sur Mesure",
  },
  "services.webdesign.description": {
    en: "Elegant, responsive websites crafted with Swiss precision. Every pixel purposefully placed.",
    fr: "Sites web élégants et responsifs, conçus avec la précision suisse. Chaque pixel placé avec intention.",
  },
  "services.mobile.title": {
    en: "Mobile Optimization",
    fr: "Optimisation Mobile",
  },
  "services.mobile.description": {
    en: "Seamless experiences across all devices. Your website, perfected for every screen.",
    fr: "Expériences fluides sur tous les appareils. Votre site web, perfectionné pour chaque écran.",
  },
  "services.seo.title": {
    en: "SEO & Performance",
    fr: "SEO & Performance",
  },
  "services.seo.description": {
    en: "Strategic optimization to ensure your brand is discovered by the right audience.",
    fr: "Optimisation stratégique pour garantir que votre marque soit découverte par le bon public.",
  },
  "services.brand.title": {
    en: "Brand Identity",
    fr: "Identité de Marque",
  },
  "services.brand.description": {
    en: "Distinctive visual identities that capture the essence of your brand.",
    fr: "Identités visuelles distinctives qui capturent l'essence de votre marque.",
  },
  
  // Pricing Section
  "pricing.tagline": {
    en: "Transparent Pricing",
    fr: "Tarification Transparente",
  },
  "pricing.title": {
    en: "Alpine Starter Package",
    fr: "Forfait Alpine Starter",
  },
  "pricing.subtitle": {
    en: "Everything you need to establish a powerful digital presence.",
    fr: "Tout ce dont vous avez besoin pour établir une présence digitale puissante.",
  },
  "pricing.featured": {
    en: "Most Popular",
    fr: "Le Plus Populaire",
  },
  "pricing.price": {
    en: "495",
    fr: "495",
  },
  "pricing.currency": {
    en: "CHF",
    fr: "CHF",
  },
  "pricing.feature1": {
    en: "Bespoke One-Page Design",
    fr: "Design Une Page Sur Mesure",
  },
  "pricing.feature2": {
    en: "Mobile Optimization",
    fr: "Optimisation Mobile",
  },
  "pricing.feature3": {
    en: "SEO Indexing",
    fr: "Indexation SEO",
  },
  "pricing.feature4": {
    en: "48-Hour Delivery",
    fr: "Livraison en 48 Heures",
  },
  "pricing.cta": {
    en: "Get Started",
    fr: "Commencer",
  },
  
  // Trust Section
  "trust.tagline": {
    en: "Trusted Locally",
    fr: "Confiance Locale",
  },
  "trust.title": {
    en: "Partnering with Swiss Excellence",
    fr: "Partenariats d'Excellence Suisse",
  },
  "trust.subtitle": {
    en: "Proud to collaborate with forward-thinking businesses across the Lemanic region.",
    fr: "Fiers de collaborer avec des entreprises visionnaires de la région lémanique.",
  },
  
  // Contact Section
  "contact.tagline": {
    en: "Let's Connect",
    fr: "Contactez-Nous",
  },
  "contact.title": {
    en: "Start Your Project",
    fr: "Démarrez Votre Projet",
  },
  "contact.subtitle": {
    en: "Ready to elevate your digital presence? Tell us about your vision.",
    fr: "Prêt à élever votre présence digitale? Parlez-nous de votre vision.",
  },
  "contact.name": {
    en: "Full Name",
    fr: "Nom Complet",
  },
  "contact.company": {
    en: "Company",
    fr: "Entreprise",
  },
  "contact.email": {
    en: "Email Address",
    fr: "Adresse Email",
  },
  "contact.project_type": {
    en: "Project Type",
    fr: "Type de Projet",
  },
  "contact.project_type.website": {
    en: "Website Design",
    fr: "Conception de Site Web",
  },
  "contact.project_type.ecommerce": {
    en: "E-commerce",
    fr: "E-commerce",
  },
  "contact.project_type.branding": {
    en: "Brand Identity",
    fr: "Identité de Marque",
  },
  "contact.project_type.other": {
    en: "Other",
    fr: "Autre",
  },
  "contact.budget": {
    en: "Budget Range",
    fr: "Fourchette de Budget",
  },
  "contact.budget.essential": {
    en: "Essential (< 500 CHF)",
    fr: "Essentiel (< 500 CHF)",
  },
  "contact.budget.professional": {
    en: "Professional (500-1500 CHF)",
    fr: "Professionnel (500-1500 CHF)",
  },
  "contact.budget.custom": {
    en: "Custom (1500+ CHF)",
    fr: "Sur Mesure (1500+ CHF)",
  },
  "contact.privacy": {
    en: "I agree to the Privacy Policy and consent to the processing of my data in accordance with Swiss FADP regulations.",
    fr: "J'accepte la Politique de Confidentialité et consens au traitement de mes données conformément à la réglementation suisse LPD.",
  },
  "contact.submit": {
    en: "Send Message",
    fr: "Envoyer le Message",
  },
  "contact.info.title": {
    en: "Contact Information",
    fr: "Informations de Contact",
  },
  "contact.info.location": {
    en: "Geneva & Founex, Switzerland",
    fr: "Genève & Founex, Suisse",
  },
  
  // Footer
  "footer.tagline": {
    en: "Crafting digital excellence from the heart of Switzerland.",
    fr: "Créer l'excellence digitale depuis le cœur de la Suisse.",
  },
  "footer.rights": {
    en: "All rights reserved.",
    fr: "Tous droits réservés.",
  },
  "footer.privacy": {
    en: "Privacy Policy",
    fr: "Politique de Confidentialité",
  },
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    const translation = translations[key]
    if (!translation) {
      console.warn(`Translation missing for key: ${key}`)
      return key
    }
    return translation[language]
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
