export const projectEnglish = {
  "kasa-project": {
    tag: "React application",
    tagline:
      "Property rental SPA: dynamic routing, gallery and reusable components.",
    context:
      "Kasa is modernising a peer-to-peer rental platform. The brief called for a React SPA faithful to the mockups.",
    objectives: [
      "Split the interface into reusable components",
      "Route the Housing, About and 404 pages",
      "Consume a housing data source",
      "Guarantee a responsive render",
    ],
    skills: [
      "React component architecture",
      "Routing",
      "Mockup integration",
    ],
    results: [
      "Complete SPA with dynamic routes",
      "Accessible gallery and collapses",
    ],
    nextSteps: ["Routing tests", "Improve the LCP"],
    architecture: "SPA · React Router",
    perf: "Vite",
    tests: "To be added",
  },
  ArgentBank: {
    tag: "Banking application",
    tagline:
      "Banking front end: JWT authentication, global state and protected routes.",
    context:
      "Argent Bank needed a modern banking application connected to a REST API.",
    objectives: [
      "Implement the JWT flow",
      "Centralise user state",
      "Update the profile",
      "Protect private routes",
    ],
    skills: ["Global state", "API calls", "Front-end security"],
    results: [
      "Working login → profile journey",
      "Session stays consistent on reload",
    ],
    nextSteps: ["Transaction CRUD", "Auth integration tests"],
    architecture: "Redux · JWT",
    perf: "Lazy routes",
    tests: "Manual",
  },
  "Nina-Carducci-Portfolio": {
    tag: "SEO & performance",
    tagline:
      "SEO, Lighthouse and accessibility audit of a photography portfolio.",
    context:
      "A photographer's site suffered from poor performance and accessibility issues.",
    objectives: [
      "Audit Lighthouse, SEO and accessibility",
      "Optimise images and markup",
      "Fix contrast and keyboard access",
    ],
    skills: ["Performance audit", "Technical SEO", "Accessibility"],
    results: ["Improved Lighthouse scores", "Actionable audit report"],
    nextSteps: ["Lighthouse CI", "Photograph schema"],
    architecture: "Semantic HTML",
    perf: "Optimised LCP",
    tests: "Lighthouse",
  },
  Sophie_Bluel_portfolio: {
    tag: "Gallery & back office",
    tagline:
      "Architect portfolio: filterable gallery, authentication and API CRUD.",
    context:
      "An architect's portfolio had to move from a static showcase to a dynamic gallery.",
    objectives: [
      "Display works from the API",
      "Filter by category",
      "Allow adding and deleting",
    ],
    skills: ["DOM and fetch", "Authentication", "Modals"],
    results: ["Dynamic gallery", "Working back office"],
    nextSteps: ["Strict MIME validation", "Testable API module"],
    architecture: "Vanilla JS · REST",
    perf: "Targeted fetch",
    tests: "Manual",
  },
  "Debuggez-une-application-en-React-Js": {
    tag: "Debug & tests",
    tagline:
      "Stabilising an events React SPA and getting the test suite back to green.",
    context:
      "An events SPA shipped with regressions: carousel, forms and broken tests.",
    objectives: [
      "Reproduce and isolate each bug",
      "Fix the state",
      "Repair the test suite",
    ],
    skills: ["React debugging", "Unit tests"],
    results: ["User journey restored", "Test suite green"],
    nextSteps: ["Carousel tests", "Gradual typing"],
    architecture: "Existing React",
    perf: "N/A",
    tests: "Jest",
  },
  Booki: {
    tag: "HTML/CSS integration",
    tagline:
      "Travel agency homepage: faithful integration, responsive desktop / tablet / mobile.",
    context:
      "First integration deliverable: recreate the Booki mockup in HTML and CSS, without a framework.",
    objectives: [
      "Match the mockup closely",
      "Structure semantic HTML",
      "Adapt the grid to three breakpoints",
    ],
    skills: ["Integration", "Flexbox", "Responsive"],
    results: ["Homepage delivered", "Working mobile version"],
    nextSteps: ["Accessibility of the search forms"],
    architecture: "HTML / CSS",
    perf: "Static",
    tests: "Visual check",
  },
  ohmyfood_: {
    tag: "CSS animations",
    tagline:
      "Fine-dining menus with CSS animations and a mobile-first layout.",
    context:
      "Ohmyfood wanted a mobile-first interface that could stage how a menu is composed.",
    objectives: [
      "Integrate the mobile-first mockups",
      "Animate the menus in pure CSS",
      "Structure the styles with Sass",
    ],
    skills: ["Sass", "Animations", "Mobile-first"],
    results: ["Animated restaurant journey", "Loading and likes in CSS"],
    nextSteps: ["Reduce motion for prefers-reduced-motion"],
    architecture: "Sass · BEM",
    perf: "CSS only",
    tests: "Visual check",
  },
  "Print-it": {
    tag: "JavaScript carousel",
    tagline:
      "A print shop site with an interactive carousel in vanilla JavaScript.",
    context:
      "Print It had a static showcase. A slideshow controllable by keyboard and mouse had to be added.",
    objectives: [
      "Build an infinite carousel",
      "Handle the dots and arrows",
      "Stay in vanilla JavaScript",
    ],
    skills: ["DOM", "Events", "UI state"],
    results: ["Carousel delivered", "Keyboard navigation possible"],
    nextSteps: ["Pause on hover", "aria-live for the active slide"],
    architecture: "Vanilla JS",
    perf: "Light",
    tests: "Manual",
  },
  "Simulateur-Physique-Vaisseau": {
    tag: "3D simulation",
    tagline:
      "3D web simulator: classical mechanics, Earth–Mars orbital paths and engineering drawings.",
    stack: ["TypeScript", "React Three Fiber", "Physics"],
    context:
      "A personal exploration project: visualise physics (parabolic shot, circular motion, UARM) and an interplanetary DSTV-80 craft.",
    objectives: [
      "Four interactive simulation modes",
      "Earth–Mars Hohmann transfer",
      "SVG/PNG drawing export",
      "Bilingual FR/EN interface",
    ],
    skills: ["3D rendering", "Physics modelling", "i18n"],
    results: [
      "Working simulation modes",
      "Real-time telemetry",
      "Documented Hohmann Δv (6.80 km/s)",
    ],
    nextSteps: ["Extra mission scenarios", "Solver tests"],
    architecture: "R3F · TypeScript",
    perf: "Real time",
    tests: "Workshop",
  },
  "Booster-Simulator": {
    tag: "Simulation & RL",
    tagline:
      "6-DOF vertical booster landing: PID + Soft Actor-Critic, C++ inference at 60 FPS.",
    context:
      "Simulate a Falcon-style booster landing in strong wind, by training a SAC agent and exporting it to a light C++ engine.",
    objectives: [
      "6-DOF physics model (variable mass, drag, grid fins)",
      "Hybrid PID + SAC control",
      "Six-stage learning curriculum",
      "Real-time OpenGL rendering",
    ],
    skills: ["Numerical physics", "RL", "C++ / OpenGL"],
    results: [
      "Autopilot able to handle extreme winds",
      "PyTorch weights exported to a custom C++ network",
      "RK4 simulation at 60 FPS",
    ],
    nextSteps: ["Widen the wind domain", "Replay interface"],
    architecture: "Python train · C++ runtime",
    perf: "60 FPS",
    tests: "SAC curriculum",
  },
  HominidAi: {
    tag: "AI & paleoanthropology",
    tagline:
      "A neural network to assist morphometric classification of hominins.",
    context:
      "Classifying subtle morphological traits (prognathism, cranial capacity) is still hard to make objective.",
    objectives: [
      "Help classify a newly described fossil",
      "Normalise a morphometric dataset",
      "Flag chronological inconsistencies",
    ],
    skills: ["Tabular ML", "Feature engineering", "Decision support"],
    results: [
      "~95% accuracy on major taxa",
      "Alerts when a sapiens profile is dated too early",
      "Experimental prototype, not an identifier of new species",
    ],
    nextSteps: ["Move to 3D volumes / CNNs", "Broaden the osteological dataset"],
    architecture: "MLP · scikit-learn",
    perf: "Tabular",
    tests: "Cross-validation",
  },
  MyAI: {
    tag: "Personal assistant",
    tagline: "Experiment with a local assistant in Python.",
    context:
      "A personal workshop around an assistant that stays useful without depending on a remote SaaS.",
    objectives: ["Explore a local architecture", "Iterate on a real use"],
    skills: ["Python", "Product thinking"],
    results: ["Public repository, iterations in progress"],
    nextSteps: ["Document the architecture", "Web interface"],
    architecture: "Python",
    perf: "Local",
    tests: "Workshop",
  },
  "MUD-test": {
    tag: "Go prototype",
    tagline: "A text-world (MUD) prototype written in Go.",
    context: "Exploring a text-game server: rooms, commands, network loop.",
    objectives: ["Set up a server loop in Go", "Model a text space"],
    skills: ["Go", "Networking", "Prototype"],
    results: ["Public experimental base"],
    nextSteps: ["Player commands", "Persistence"],
    architecture: "Go",
    perf: "Server",
    tests: "Workshop",
  },
};
