import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Gemini Stiftung",
  DESCRIPTION: "Forschungsstiftung für digitale Zwillinge. Blockchain-basierte Bindungstechnologien für Wissenschaft und Gemeinwohl.",
  AUTHOR: "Gemini Stiftung",
}

// Work Page  
export const WORK: Page = {
  TITLE: "Unsere Forschung",
  DESCRIPTION: "Wissenschaftliche Arbeiten und Forschungsprojekte der Gemini Stiftung.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Publikationen", 
  DESCRIPTION: "Wissenschaftliche Artikel und Forschungsergebnisse zu digitalen Zwillingen und Blockchain-Technologie.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Prototypen",
  DESCRIPTION: "Open Source Forschungsprototypen und experimentelle Implementierungen.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Suche",
  DESCRIPTION: "Durchsuchen Sie alle Inhalte nach Stichworten.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Über uns", 
    HREF: "/about", 
  },
  { 
    TEXT: "Unsere Forschung", 
    HREF: "/work", 
  },
  { 
    TEXT: "Publikationen", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Prototypen", 
    HREF: "/projects", 
  }
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "contact@gemini-foundation.org",
    HREF: "mailto:contact@gemini-foundation.org",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "gemini-foundation",
    HREF: "https://github.com/gemini-foundation"
  },
]

