import { createContext, useContext, useEffect, useMemo, useState } from "react";

const copy = {
  fr: {
    meta: {
      title: "Moïse Techer — Développeur frontend",
      description:
        "Portfolio de Moïse Techer, développeur frontend à Paris. Interfaces React accessibles, performantes et soignées.",
    },
    langLabel: "Langue",
    skip: "Aller au contenu",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    navLabel: "Navigation principale",
    contactCta: "Me contacter",
    nav: [
      { id: "projets", href: "#projets", label: "Projets" },
      { id: "philosophie", href: "#philosophie", label: "Philosophie" },
      { id: "parcours", href: "#parcours", label: "Parcours" },
    ],
    role: "Développeur frontend",
    location: "Paris, Île-de-France",
    headline: "Façonner des interfaces nettes, accessibles et maintenables.",
    summary:
      "Développeur frontend formé à l'intégration web. Je relie exigence produit, qualité de code et rigueur de livraison — du cadrage jusqu'à la mise en production.",
    portraitAlt: "Portrait de Moïse Techer",
    explore: "Explorer les projets",
    philosophyTitle: "L'amélioration continue appliquée au code",
    philosophyQuote:
      "La clarté d'un système ne provient pas de l'accumulation d'éléments décoratifs, mais de l'élimination rigoureuse de toute friction inutile.",
    philosophyBody: [
      "Mon travail privilégie la lisibilité typographique, des espacements réguliers et un HTML sémantique : chaque composant a une raison d'exister, chaque interaction un état clavier.",
      "Je découpe, j'estime, je documente. Même réflexe dans le code : données séparées de l'UI, états d'erreur visibles, lecteurs d'écran traités comme des utilisateurs premiers.",
    ],
    principles: [
      {
        title: "Contrat de lecture",
        body: "Contraste supérieur à 4.5:1 (AA) pour tous les textes fondamentaux.",
      },
      {
        title: "Zéro friction",
        body: "Données isolées, composants réutilisables, états d'erreur explicites.",
      },
    ],
    timelineTitle: "Parcours & évolution",
    timeline: [
      {
        id: "2026-portfolio",
        period: "2026",
        title: "Portfolio personnel",
        organization: "Projet de fin de parcours",
        description:
          "Design system, Bento Grid, accessibilité WCAG AA et mise en production d'une vitrine professionnelle.",
      },
      {
        id: "2026-argent",
        period: "2026",
        title: "Argent Bank",
        organization: "Formation Intégrateur Web",
        description:
          "Front-end bancaire : authentification JWT, état global et routes protégées.",
      },
      {
        id: "2026-kasa",
        period: "2026",
        title: "Kasa",
        organization: "Formation Intégrateur Web",
        description:
          "SPA React de location immobilière, routage dynamique et composants réutilisables.",
      },
      {
        id: "2026-qwenta",
        period: "2026",
        title: "Menu Maker by Qwenta",
        organization: "Gestion de projet",
        description:
          "Cadrage, comparatif technique et Kanban de suivi pour un outil restaurateur.",
      },
      {
        id: "2026-debug",
        period: "2026",
        title: "724events",
        organization: "Debug & tests",
        description:
          "Stabilisation d'une SPA React et remise à vert de la suite de tests.",
      },
      {
        id: "2025-nina",
        period: "2025–2026",
        title: "Nina Carducci",
        organization: "SEO & accessibilité",
        description:
          "Audit et optimisation des performances, du référencement et de l'accessibilité.",
      },
      {
        id: "2025-sophie",
        period: "2025",
        title: "Sophie Bluel",
        organization: "JavaScript & API",
        description:
          "Galerie dynamique, authentification et back-office de gestion des travaux.",
      },
    ],
    skills: [
      "HTML sémantique",
      "CSS / Tailwind",
      "JavaScript",
      "TypeScript",
      "React",
      "React Router",
      "Vite",
      "Sass",
      "Kanban / Trello",
      "Git & GitHub",
      "User stories",
      "Veille techno",
      "Cahier des charges",
      "Revues de code",
      "WCAG AA",
      "SEO technique",
      "Lighthouse",
      "Responsive mobile-first",
      "Jest / Testing Library",
      "Chrome DevTools",
    ],
    projectsTitle: "Projets & Études de Cas",
    filterLabel: "Filtrer les projets",
    filterAll: "Tous",
    filterTraining: "Formation",
    filterPersonal: "Personnels",
    syncLead: "Liste synchronisée avec",
    loading: " — chargement…",
    syncError: " — GitHub indisponible, affichage du catalogue local.",
    seeDetails: "Voir le détail",
    modal: {
      closeWindow: "Fermer la fenêtre",
      close: "Fermer la modale",
      architecture: "Architecture",
      performance: "Performance",
      tests: "Couverture tests",
      context: "1. Contexte",
      objectives: "2. Objectifs",
      stack: "3. Stack technique",
      skills: "4. Compétences développées",
      results: "5. Résultats & impact",
      repo: "Dépôt GitHub",
      demo: "Démo live",
    },
    contact: {
      title: "Construisons une interface d'exception ensemble.",
      intro:
        "Refonte, design system, accessibilité ou mise en production : écrivez-moi. Le formulaire valide les champs, puis ouvre votre client mail.",
      github: "GitHub",
      linkedin: "LinkedIn",
      cv: "Télécharger le CV (PDF)",
      offers: "Offres",
      name: "Votre nom ou entité",
      email: "Adresse e-mail de contact",
      message: "Projet ou besoin",
      namePlaceholder: "ex. Agence Studio / Marie Dupont",
      emailPlaceholder: "marie@entreprise.com",
      messagePlaceholder:
        "Décrivez succinctement les objectifs ou le calendrier envisagé...",
      nameError: "Indiquez un nom d'au moins 2 caractères.",
      emailError: "Indiquez une adresse email valide.",
      messageError: "Le message doit contenir au moins 20 caractères.",
      submit: "Transmettre le message",
      subject: "Contact portfolio",
      prepared: "Message préparé. Votre client mail devrait s'ouvrir.",
      mailLabel: "Courriel direct",
      copy: "Copier",
      copied: "Adresse e-mail copiée dans le presse-papier !",
      copyFallback: "Sélectionnez",
    },
  },
  en: {
    meta: {
      title: "Moïse Techer — Frontend developer",
      description:
        "Portfolio of Moïse Techer, frontend developer in Paris. Accessible, fast and carefully crafted React interfaces.",
    },
    langLabel: "Language",
    skip: "Skip to content",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    navLabel: "Main navigation",
    contactCta: "Contact me",
    nav: [
      { id: "projets", href: "#projets", label: "Projects" },
      { id: "philosophie", href: "#philosophie", label: "Philosophy" },
      { id: "parcours", href: "#parcours", label: "Path" },
    ],
    role: "Frontend developer",
    location: "Paris, France",
    headline: "Shaping interfaces that are clear, accessible and maintainable.",
    summary:
      "Frontend developer trained in web integration. I connect product standards, code quality and delivery discipline — from scoping through to production.",
    portraitAlt: "Portrait of Moïse Techer",
    explore: "Explore the projects",
    philosophyTitle: "Continuous improvement, applied to code",
    philosophyQuote:
      "The clarity of a system does not come from stacking decoration, but from rigorously removing every useless friction.",
    philosophyBody: [
      "My work favours typographic readability, regular spacing and semantic HTML: every component has a reason to exist, every interaction a keyboard state.",
      "I slice the work, estimate it and document it. The same reflex in code: data kept apart from the UI, visible error states, and screen readers treated as first-class users.",
    ],
    principles: [
      {
        title: "Reading contract",
        body: "Contrast above 4.5:1 (AA) for every essential text.",
      },
      {
        title: "Zero friction",
        body: "Isolated data, reusable components, explicit error states.",
      },
    ],
    timelineTitle: "Path & evolution",
    timeline: [
      {
        id: "2026-portfolio",
        period: "2026",
        title: "Personal portfolio",
        organization: "End-of-course project",
        description:
          "Design system, bento grid, WCAG AA accessibility and production release of a professional site.",
      },
      {
        id: "2026-argent",
        period: "2026",
        title: "Argent Bank",
        organization: "Web integrator training",
        description:
          "Banking front end: JWT authentication, global state and protected routes.",
      },
      {
        id: "2026-kasa",
        period: "2026",
        title: "Kasa",
        organization: "Web integrator training",
        description:
          "React SPA for property rentals, with dynamic routing and reusable components.",
      },
      {
        id: "2026-qwenta",
        period: "2026",
        title: "Menu Maker by Qwenta",
        organization: "Project management",
        description:
          "Scoping, technical comparison and a tracking Kanban for a restaurant tool.",
      },
      {
        id: "2026-debug",
        period: "2026",
        title: "724events",
        organization: "Debug & tests",
        description: "Stabilising a React SPA and turning the test suite green.",
      },
      {
        id: "2025-nina",
        period: "2025–2026",
        title: "Nina Carducci",
        organization: "SEO & accessibility",
        description:
          "Audit and optimisation of performance, search and accessibility.",
      },
      {
        id: "2025-sophie",
        period: "2025",
        title: "Sophie Bluel",
        organization: "JavaScript & API",
        description:
          "Dynamic gallery, authentication and a back office for managing works.",
      },
    ],
    skills: [
      "Semantic HTML",
      "CSS / Tailwind",
      "JavaScript",
      "TypeScript",
      "React",
      "React Router",
      "Vite",
      "Sass",
      "Kanban / Trello",
      "Git & GitHub",
      "User stories",
      "Tech watch",
      "Specifications",
      "Code reviews",
      "WCAG AA",
      "Technical SEO",
      "Lighthouse",
      "Mobile-first responsive",
      "Jest / Testing Library",
      "Chrome DevTools",
    ],
    projectsTitle: "Projects & case studies",
    filterLabel: "Filter projects",
    filterAll: "All",
    filterTraining: "Training",
    filterPersonal: "Personal",
    syncLead: "List synced with",
    loading: " — loading…",
    syncError: " — GitHub is unavailable, showing the local catalogue.",
    seeDetails: "View details",
    modal: {
      closeWindow: "Close the window",
      close: "Close the dialog",
      architecture: "Architecture",
      performance: "Performance",
      tests: "Test coverage",
      context: "1. Context",
      objectives: "2. Objectives",
      stack: "3. Technical stack",
      skills: "4. Skills developed",
      results: "5. Results & impact",
      repo: "GitHub repository",
      demo: "Live demo",
    },
    contact: {
      title: "Let's build an exceptional interface together.",
      intro:
        "Redesign, design system, accessibility or production release: write to me. The form checks the fields, then opens your mail client.",
      github: "GitHub",
      linkedin: "LinkedIn",
      cv: "Download the CV (PDF)",
      offers: "Offers",
      name: "Your name or organisation",
      email: "Contact email",
      message: "Project or need",
      namePlaceholder: "e.g. Studio Agency / Marie Dupont",
      emailPlaceholder: "marie@company.com",
      messagePlaceholder: "Briefly describe the goals or the expected timeline...",
      nameError: "Enter a name of at least 2 characters.",
      emailError: "Enter a valid email address.",
      messageError: "The message must contain at least 20 characters.",
      submit: "Send the message",
      subject: "Portfolio contact",
      prepared: "Message prepared. Your mail client should open.",
      mailLabel: "Direct email",
      copy: "Copy",
      copied: "Email address copied to the clipboard!",
      copyFallback: "Select",
    },
  },
};

const LanguageContext = createContext(null);

function storedLang() {
  try {
    const saved = localStorage.getItem("portfolio-lang");
    if (saved === "en" || saved === "fr") return saved;
  } catch {
    /* ignore */
  }
  return "fr";
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(storedLang);
  const t = copy[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t.meta.title;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", t.meta.description);
    try {
      localStorage.setItem("portfolio-lang", lang);
    } catch {
      /* ignore */
    }
  }, [lang, t]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);
  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useI18n() {
  const value = useContext(LanguageContext);
  if (!value) throw new Error("useI18n must be used within LanguageProvider");
  return value;
}
