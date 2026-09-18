# Kanban — Portfolio Moïse Techer

Tableau Trello opérationnel : https://trello.com/b/MkY5oUNp/portfolio-cadrage-suivi

**Charge totale estimée : 61 h**  
**Légende labels Trello :** vert = Cadrage · jaune = Contenu · orange = Design · bleu = Dev · violet = A11y/SEO · rouge = Déploiement

---

## À faire

### J4 — Wireframing et maquettage responsive
- **Estimation :** 6 h · **Priorité :** Haute · **Tag :** Design
- **Dépendances :** J3 — design system
- **Sous-tâches :**
  - [ ] Wireframe mobile 320 px (hero, bento, profil, contact)
  - [ ] Wireframe tablette 768 px
  - [ ] Maquette desktop 1280 / 1920
  - [ ] Valider hiérarchie, CTA et états vides

### J7 — Audit responsive 320px → 1920px+
- **Estimation :** 3 h · **Priorité :** Haute · **Tag :** A11y/SEO
- **Dépendances :** J6 intégration complète
- **Sous-tâches :**
  - [ ] Contrôle 320 / 768 / 1024 / 1440 / 1920
  - [ ] Tap targets ≥ 44 px
  - [ ] Modale utilisable sur mobile
  - [ ] Pas de débordement horizontal

### J7 — Audit accessibilité WCAG AA
- **Estimation :** 4 h · **Priorité :** Critique · **Tag :** A11y/SEO
- **Dépendances :** J6 + J3 contrastes
- **Sous-tâches :**
  - [ ] Navigation clavier complète
  - [ ] Lecteur d'écran (landmarks, titres, dialog)
  - [ ] Contrastes AA
  - [ ] `prefers-reduced-motion`

### J7 — SEO technique et métadonnées
- **Estimation :** 3 h · **Priorité :** Haute · **Tag :** A11y/SEO
- **Dépendances :** J2 contenu + J6
- **Sous-tâches :**
  - [ ] Title / description / Open Graph
  - [ ] JSON-LD Person
  - [ ] robots.txt + sitemap
  - [ ] Lighthouse ≥ 90

### J8 — Déploiement en production
- **Estimation :** 3 h · **Priorité :** Critique · **Tag :** Déploiement
- **Dépendances :** J7 audits validés
- **Sous-tâches :**
  - [ ] Build de production vert
  - [ ] Vercel ou Netlify (fallback GitHub Pages)
  - [ ] HTTPS, cache assets, domaine

### J8 — Recette finale sur l'URL publique
- **Estimation :** 2 h · **Priorité :** Haute · **Tag :** Déploiement
- **Dépendances :** J8 déploiement
- **Sous-tâches :**
  - [ ] Parcours navigation / filtres / modales
  - [ ] Formulaire + liens sociaux + CV
  - [ ] Correctifs mineurs post-mise en ligne

### J2 — Produire CV, photo et assets Open Graph
- **Estimation :** 2 h · **Priorité :** Moyenne · **Tag :** Contenu
- **Dépendances :** J1 cadrage
- **Sous-tâches :**
  - [ ] CV PDF définitif
  - [ ] Photo / avatar
  - [ ] Favicon + OG 1200×630

---

## En cours

### J3 — Définir le design system (tokens Tailwind)
- **Estimation :** 4 h · **Priorité :** Critique · **Tag :** Design
- **Dépendances :** Aucune (parallélisable avec le contenu)
- **Sous-tâches :**
  - [x] Palette dark `#090a0f` + indigo / cyan
  - [x] Typographies Inter + JetBrains Mono
  - [x] Tokens couleurs, rayons, glow
  - [ ] Revue contrastes AA formalisée

### J5 — Environnement de développement et architecture
- **Estimation :** 4 h · **Priorité :** Critique · **Tag :** Dev
- **Dépendances :** J3 tokens
- **Sous-tâches :**
  - [x] Vite + React + TypeScript
  - [x] Tailwind v4 + Framer Motion + Lucide
  - [x] Séparation `data/` vs `components/`
  - [ ] Lint Oxlint sur CI

### J6 — Intégrer Navbar, Hero et navigation par ancres
- **Estimation :** 4 h · **Priorité :** Haute · **Tag :** Dev
- **Dépendances :** J5 + J2 pitch
- **Sous-tâches :**
  - [x] Navbar fixe semi-transparente
  - [x] Skip-link + statut disponibilité
  - [x] Hero, CTA Projets / Contact / CV
  - [ ] Indicateur d'ancre affiné au scroll

### J6 — Intégrer Bento Grid projets et modales
- **Estimation :** 8 h · **Priorité :** Critique · **Tag :** Dev
- **Dépendances :** J2 fiches + J5
- **Sous-tâches :**
  - [x] Grille filtrable Formation / Personnels
  - [x] Cartes interactives
  - [x] Modale 6 points + focus trap + Escape
  - [ ] Liens démo live manquants

### J6 — Intégrer profil 6 actes et grille de compétences
- **Estimation :** 4 h · **Priorité :** Haute · **Tag :** Dev
- **Dépendances :** J2b + J5
- **Sous-tâches :**
  - [x] Section 6 actes
  - [x] Badges Front-End / Méthodes / Qualité
  - [ ] Relecture éditoriale

### J6 — Intégrer la timeline de parcours
- **Estimation :** 3 h · **Priorité :** Moyenne · **Tag :** Dev
- **Dépendances :** J1 + J5
- **Sous-tâches :**
  - [x] Timeline sémantique (`ol`)
  - [x] Jalons formation / projet
  - [ ] Dates exactes à confirmer

### J6 — Intégrer le formulaire de contact accessible
- **Estimation :** 3 h · **Priorité :** Haute · **Tag :** Dev
- **Dépendances :** J5
- **Sous-tâches :**
  - [x] Labels, `aria-invalid`, erreurs
  - [x] Validation nom / email / message
  - [x] Liens GitHub, LinkedIn, Email
  - [ ] Remplacer l'email placeholder

---

## À tester / Valider

_Colonne volontairement vide au lancement : y glisser chaque ticket J6 une fois l'intégration auto-revue, avant audit J7._

---

## Terminé

### J1 — Cadrer et sélectionner les projets à valoriser
- **Estimation :** 3 h · **Priorité :** Haute · **Tag :** Cadrage
- **Dépendances :** Aucune
- **Sous-tâches :**
  - [x] Critères : stack visible, impact, complémentarité
  - [x] Formation : Kasa, Argent Bank, Nina Carducci, Sophie Bluel, 724events, Qwenta
  - [x] Personnel : CogAssist
  - [x] Hors vitrine code : détails Wast'O conservés pour la timeline / pitch

### J2 — Rédiger les fiches projets en 6 points
- **Estimation :** 5 h · **Priorité :** Haute · **Tag :** Contenu
- **Dépendances :** J1
- **Sous-tâches :**
  - [x] 6 points par projet dans `src/data/projects.ts`
  - [x] Liens GitHub
  - [ ] Démos live à compléter

### J2 — Rédiger le pitch de profil en 6 actes
- **Estimation :** 3 h · **Priorité :** Haute · **Tag :** Contenu
- **Dépendances :** J1
- **Sous-tâches :**
  - [x] Accroche, parcours, stack, projets, rigueur, projection
  - [x] Données isolées dans `src/data/profile.ts`

---

## Tableau récapitulatif (import / recopie)

| Colonne | Tâche | Sous-tâches (résumé) | Heures | Priorité | Tag | Dépendances |
| --- | --- | --- | ---: | --- | --- | --- |
| Terminé | J1 — Sélection des projets | Critères + 6 formation + 1 perso | 3 | Haute | Cadrage | — |
| Terminé | J2 — Fiches projets 6 points | 6 sections + liens | 5 | Haute | Contenu | J1 |
| Terminé | J2 — Pitch profil 6 actes | 6 actes rédigés | 3 | Haute | Contenu | J1 |
| En cours | J3 — Design system | Palette, typos, tokens | 4 | Critique | Design | — |
| À faire | J4 — Wireframes responsive | 320 → 1920 | 6 | Haute | Design | J3 |
| En cours | J5 — Env. & architecture | Vite, data/, composants | 4 | Critique | Dev | J3 |
| En cours | J6 — Navbar + Hero | Ancres, CTA, skip-link | 4 | Haute | Dev | J5, J2 |
| En cours | J6 — Bento + modales | Filtres, 6 points, a11y dialog | 8 | Critique | Dev | J2, J5 |
| En cours | J6 — Profil + compétences | 6 actes, badges | 4 | Haute | Dev | J2, J5 |
| En cours | J6 — Timeline | `ol` jalons | 3 | Moyenne | Dev | J1, J5 |
| En cours | J6 — Contact | Validation + liens | 3 | Haute | Dev | J5 |
| À faire | J7 — Audit responsive | 5 viewports | 3 | Haute | A11y/SEO | J6 |
| À faire | J7 — Audit WCAG AA | Clavier, SR, contrastes | 4 | Critique | A11y/SEO | J6, J3 |
| À faire | J7 — SEO technique | OG, JSON-LD, Lighthouse | 3 | Haute | A11y/SEO | J2, J6 |
| À faire | J8 — Déploiement | Vercel / Netlify / Pages | 3 | Critique | Déploiement | J7 |
| À faire | J8 — Recette finale | Parcours URL publique | 2 | Haute | Déploiement | J8 |
| À faire | J2 — Assets CV / OG | PDF, photo, favicon | 2 | Moyenne | Contenu | J1 |
