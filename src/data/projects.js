import { asset } from "@/lib/asset";

export const projectDetails = {
  "kasa-project": {
    title: "Kasa",
    tag: "Application React",
    tagline:
      "SPA de location immobilière : routage dynamique, galerie et composants réutilisables.",
    category: "formation",
    schematic: "bars",
    stack: ["React", "React Router", "Vite", "TypeScript"],
    context:
      "Kasa modernise une plateforme de location entre particuliers. Le brief imposait une SPA React fidèle aux maquettes.",
    objectives: [
      "Découper l'interface en composants réutilisables",
      "Router les pages Logement, À propos et 404",
      "Consommer une source de données logements",
      "Garantir un rendu responsive",
    ],
    skills: [
      "Architecture de composants React",
      "Routage",
      "Intégration de maquettes",
    ],
    results: [
      "SPA complète avec routes dynamiques",
      "Galerie et collapses accessibles",
    ],
    nextSteps: ["Tests de routing", "Optimiser le LCP"],
    architecture: "SPA · React Router",
    perf: "Vite",
    tests: "À brancher",
    snippet:
      "const { id } = useParams(); return <LodgingCard housing={getById(id)} />;",
  },
  ArgentBank: {
    title: "Argent Bank",
    tag: "Application bancaire",
    tagline:
      "Front-end bancaire : authentification JWT, état global et routes protégées.",
    category: "formation",
    schematic: "nodes",
    stack: ["React", "Redux", "REST API", "JWT"],
    context:
      "Argent Bank avait besoin d'une application bancaire moderne branchée sur une API REST.",
    objectives: [
      "Implémenter le flux JWT",
      "Centraliser l'état utilisateur",
      "Mettre à jour le profil",
      "Protéger les routes privées",
    ],
    skills: ["État global", "Appels API", "Sécurité front"],
    results: [
      "Parcours login → profil opérationnel",
      "Session cohérente au rechargement",
    ],
    nextSteps: ["CRUD des transactions", "Tests d'intégration auth"],
    architecture: "Redux · JWT",
    perf: "Routes lazy",
    tests: "Manuels",
    snippet: "dispatch(loginUser({ email, password }));",
  },
  "Nina-Carducci-Portfolio": {
    title: "Nina Carducci",
    tag: "SEO & performance",
    tagline:
      "Audit SEO, Lighthouse et accessibilité d'un portfolio photographique.",
    category: "formation",
    schematic: "chart",
    stack: ["HTML", "CSS", "JavaScript", "Lighthouse"],
    context:
      "Le site d'une photographe souffrait de performances faibles et de défauts d'accessibilité.",
    objectives: [
      "Auditer Lighthouse, SEO et a11y",
      "Optimiser images et balisage",
      "Corriger contrastes et clavier",
    ],
    skills: ["Audit de performance", "SEO technique", "Accessibilité"],
    results: ["Scores Lighthouse améliorés", "Rapport d'audit actionnable"],
    nextSteps: ["Lighthouse CI", "Schema Photograph"],
    architecture: "HTML sémantique",
    perf: "LCP optimisé",
    tests: "Lighthouse",
    snippet: '<meta name="description" content="Photographe à Bordeaux">',
  },
  Sophie_Bluel_portfolio: {
    title: "Sophie Bluel",
    tag: "Galerie & back-office",
    tagline:
      "Portfolio d'architecte : galerie filtrable, authentification et CRUD API.",
    category: "formation",
    schematic: "bars",
    stack: ["JavaScript", "REST API", "JWT"],
    context:
      "Le portfolio d'une architecte devait passer d'une vitrine statique à une galerie dynamique.",
    objectives: [
      "Afficher les travaux depuis l'API",
      "Filtrer par catégorie",
      "Permettre l'ajout et la suppression",
    ],
    skills: ["DOM et fetch", "Authentification", "Modales"],
    results: ["Galerie dynamique", "Back-office opérationnel"],
    nextSteps: ["Validation MIME stricte", "Module API testable"],
    architecture: "Vanilla JS · REST",
    perf: "Fetch ciblé",
    tests: "Manuels",
    snippet: "const works = await fetch('/api/works').then((r) => r.json());",
  },
  "Debuggez-une-application-en-React-Js": {
    title: "724events",
    tag: "Debug & tests",
    tagline:
      "Stabilisation d'une SPA React événementielle et remise à vert des tests.",
    category: "formation",
    schematic: "buffer",
    stack: ["React", "Jest", "Testing Library"],
    context:
      "Une SPA événementielle livrée avec des régressions : carrousel, formulaires et tests cassés.",
    objectives: [
      "Reproduire et isoler chaque bug",
      "Corriger le state",
      "Réparer la suite de tests",
    ],
    skills: ["Debugging React", "Tests unitaires"],
    results: ["Parcours utilisateur rétabli", "Suite de tests verte"],
    nextSteps: ["Tests carrousel", "Typage progressif"],
    architecture: "React existant",
    perf: "N/A",
    tests: "Jest",
    snippet:
      "expect(screen.getByRole('button', { name: /envoyer/i })).toBeEnabled();",
  },
  Booki: {
    title: "Booki",
    tag: "Intégration HTML/CSS",
    tagline:
      "Page d'accueil d'une agence de voyage : intégration fidèle, responsive desktop / tablette / mobile.",
    category: "formation",
    schematic: "bars",
    stack: ["HTML", "CSS", "Responsive"],
    context:
      "Premier livrable d'intégration : recréer la maquette Booki en HTML et CSS, sans framework.",
    objectives: [
      "Respecter la maquette pixel-proche",
      "Structurer un HTML sémantique",
      "Adapter la grille aux trois breakpoints",
    ],
    skills: ["Intégration", "Flexbox", "Responsive"],
    results: ["Page d'accueil livrée", "Version mobile opérationnelle"],
    nextSteps: ["Accessibilité des formulaires de recherche"],
    architecture: "HTML / CSS",
    perf: "Statique",
    tests: "Recette visuelle",
  },
  ohmyfood_: {
    title: "Ohmyfood",
    tag: "Animations CSS",
    tagline:
      "Menu de restaurants gastronomiques avec animations CSS et mobile-first.",
    category: "formation",
    schematic: "nodes",
    stack: ["HTML", "Sass", "Animations CSS"],
    context:
      "Ohmyfood voulait une interface mobile-first capable de mettre en scène la composition d'un menu.",
    objectives: [
      "Intégrer les maquettes mobile-first",
      "Animer les menus en CSS pur",
      "Structurer les styles avec Sass",
    ],
    skills: ["Sass", "Animations", "Mobile-first"],
    results: ["Parcours restaurants animé", "Chargement et likes en CSS"],
    nextSteps: ["Réduire le motion pour prefers-reduced-motion"],
    architecture: "Sass · BEM",
    perf: "CSS only",
    tests: "Recette visuelle",
  },
  "Print-it": {
    title: "Print It",
    tag: "Carrousel JavaScript",
    tagline:
      "Site d'une imprimerie enrichi d'un carrousel interactif en JavaScript vanilla.",
    category: "formation",
    schematic: "chart",
    stack: ["HTML", "CSS", "JavaScript"],
    context:
      "Print It avait une vitrine statique. Il fallait y ajouter un diaporama contrôlable au clavier et à la souris.",
    objectives: [
      "Créer un carrousel infini",
      "Gérer les dots et les flèches",
      "Rester en JavaScript vanilla",
    ],
    skills: ["DOM", "Événements", "État UI"],
    results: ["Carrousel livré", "Navigation clavier possible"],
    nextSteps: ["Pause au survol", "aria-live pour le slide actif"],
    architecture: "JS vanilla",
    perf: "Léger",
    tests: "Manuels",
    snippet: "slides[current].classList.add('active');",
  },
  "Simulateur-Physique-Vaisseau": {
    title: "Simulateur DSTV-80",
    tag: "Simulation 3D",
    tagline:
      "Simulateur web 3D : mécanique classique, trajectoires orbitales Terre–Mars et plans d'ingénierie.",
    category: "personnel",
    schematic: "chart",
    stack: ["TypeScript", "React Three Fiber", "Physique"],
    context:
      "Projet personnel d'exploration : visualiser la physique (tir parabolique, circulaire, MRUA) et un vaisseau interplanétaire DSTV-80.",
    objectives: [
      "Quatre modes de simulation interactive",
      "Trajectoire Hohmann Terre–Mars",
      "Export de plans SVG/PNG",
      "Interface bilingue FR/EN",
    ],
    skills: ["Rendu 3D", "Modélisation physique", "i18n"],
    results: [
      "Modes de simulation opérationnels",
      "Télémétrie temps réel",
      "Δv Hohmann documenté (6,80 km/s)",
    ],
    nextSteps: ["Scénarios de mission supplémentaires", "Tests des solveurs"],
    architecture: "R3F · TypeScript",
    perf: "Temps réel",
    tests: "Atelier",
  },
  "Booster-Simulator": {
    title: "Booster Simulator",
    tag: "Simulation & RL",
    tagline:
      "Atterrissage vertical 6-DOF d'un booster : PID + Soft Actor-Critic, inférence C++ à 60 FPS.",
    category: "personnel",
    schematic: "chart",
    stack: ["C++", "OpenGL", "PyTorch", "Reinforcement Learning"],
    context:
      "Simuler l'atterrissage d'un booster type Falcon sous vent violent, en entraînant un agent SAC puis en l'exportant vers un moteur C++ léger.",
    objectives: [
      "Modèle physique 6-DOF (masse variable, traînée, grid fins)",
      "Contrôle hybride PID + SAC",
      "Curriculum d'apprentissage en 6 étapes",
      "Rendu OpenGL temps réel",
    ],
    skills: ["Physique numérique", "RL", "C++ / OpenGL"],
    results: [
      "Autopilote capable de gérer des vents extrêmes",
      "Poids PyTorch exportés vers un réseau C++ custom",
      "Simulation RK4 à 60 FPS",
    ],
    nextSteps: ["Élargir le domaine de vent", "Interface de replay"],
    architecture: "Python train · C++ runtime",
    perf: "60 FPS",
    tests: "Curriculum SAC",
  },
  HominidAi: {
    title: "HominidAi",
    tag: "IA & paléoanthropologie",
    tagline:
      "Réseau de neurones pour assister la classification morphométrique d'homininés.",
    category: "personnel",
    schematic: "buffer",
    stack: ["Python", "Scikit-learn", "NumPy"],
    context:
      "La classification de traits morphologiques subtils (prognathisme, capacité crânienne) reste difficile à objectiver.",
    objectives: [
      "Aider la classification d'un fossile nouvellement décrit",
      "Normaliser un jeu morphométrique",
      "Signaler les incohérences chronologiques",
    ],
    skills: ["ML tabulaire", "Feature engineering", "Aide à la décision"],
    results: [
      "Précision ~95 % sur les grands taxons",
      "Alertes si un profil sapiens est daté trop ancien",
      "Prototype expérimental, pas un identificateur d'espèces nouvelles",
    ],
    nextSteps: ["Passage aux volumes 3D / CNN", "Élargir le jeu ostéologique"],
    architecture: "MLP · scikit-learn",
    perf: "Tabulaire",
    tests: "Validation croisée",
  },
  MyAI: {
    title: "MyAI",
    tag: "Assistant personnel",
    tagline: "Expérimentation d'assistant local en Python.",
    category: "personnel",
    schematic: "buffer",
    stack: ["Python"],
    context:
      "Atelier personnel autour d'un assistant capable de rester utile sans dépendre d'un SaaS distant.",
    objectives: [
      "Explorer une architecture locale",
      "Itérer sur un usage réel",
    ],
    skills: ["Python", "Product thinking"],
    results: ["Dépôt public, itérations en cours"],
    nextSteps: ["Documenter l'architecture", "Interface web"],
    architecture: "Python",
    perf: "Local",
    tests: "Atelier",
  },
  "MUD-test": {
    title: "MUD",
    tag: "Prototype Go",
    tagline: "Prototype de monde textuel (MUD) écrit en Go.",
    category: "personnel",
    schematic: "nodes",
    stack: ["Go"],
    context:
      "Exploration d'un serveur de jeu textuel : salles, commandes, boucle réseau.",
    objectives: [
      "Poser une boucle serveur en Go",
      "Modéliser un espace textuel",
    ],
    skills: ["Go", "Réseau", "Prototype"],
    results: ["Socle expérimental public"],
    nextSteps: ["Commandes joueur", "Persistance"],
    architecture: "Go",
    perf: "Serveur",
    tests: "Atelier",
  },
};
export function detailsToProject(repoName, details, githubUrl, year) {
  return {
    id: repoName,
    title: details.title,
    tagline: details.tagline,
    tag: details.tag,
    schematic: details.schematic,
    category: details.category,
    year,
    stack: details.stack,
    context: details.context,
    objectives: details.objectives,
    skills: details.skills,
    results: details.results,
    nextSteps: details.nextSteps,
    architecture: details.architecture,
    perf: details.perf,
    tests: details.tests,
    snippet: details.snippet,
    cover: asset(`projects/${repoName}.webp`),
    links: {
      github: githubUrl,
      demo: details.demo,
    },
  };
}
const schematics = ["bars", "nodes", "chart", "buffer"];
export function fallbackProject(
  repoName,
  githubUrl,
  language,
  description,
  year,
) {
  const index = repoName.length % schematics.length;
  const title = repoName.replaceAll("_", " ").replaceAll("-", " ");
  return {
    id: repoName,
    title,
    tagline: description ?? `Dépôt GitHub ${repoName}.`,
    tag: language ?? "GitHub",
    schematic: schematics[index] ?? "bars",
    category: "personnel",
    year,
    stack: language ? [language] : ["GitHub"],
    context: description ?? "Projet public hébergé sur GitHub.",
    objectives: ["Consulter le dépôt pour le détail des objectifs"],
    skills: language ? [language] : ["Développement"],
    results: ["Code source public"],
    nextSteps: ["Enrichir la fiche depuis le README"],
    architecture: language ?? "N/A",
    perf: "N/A",
    tests: "N/A",
    cover: asset(`projects/${repoName}.webp`),
    links: { github: githubUrl },
  };
}
export const fallbackProjects = Object.entries(projectDetails).map(
  ([repoName, details]) =>
    detailsToProject(
      repoName,
      details,
      `https://github.com/vinapol/${repoName}`,
      "2026",
    ),
);
