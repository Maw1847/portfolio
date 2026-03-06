# Portfolio V1 — Agent Context

## 1) Project overview

This project is a **personal portfolio website** built with **Angular (latest)** and **Nx**.

The portfolio must present its owner as a **software engineer first**, not as a generic “frontend developer” and not as a design-only profile.

The website must communicate:

* engineering rigor
* long-term reliability
* maintainability
* architecture thinking
* strong quality standards
* accessibility by design
* security awareness
* pragmatic delivery
* continuous learning and progression

This context comes from the project framing document and backlog prepared for the portfolio V1.

---

## 2) V1 goal

Build a portfolio that is:

* very software-engineering oriented
* sober, premium, readable
* accessible
* maintainable
* easy to evolve
* compatible later with a reusable design system

The V1 must be intentionally simple:

* no microfrontends
* no CMS
* no backend
* no premature abstraction
* no separate full design system package yet

---

## 3) Main positioning

The owner of this portfolio is:

* a software engineer in a full-stack role
* currently working on a critical product at Natixis Interépargne
* focused on software that stays reliable over time
* interested in architecture, quality, accessibility, security, and system design
* preparing for more advanced engineering responsibilities over time

Core positioning statement:

> Build software that remains reliable over time through clear boundaries, sound architecture, strong testing, pragmatic trade-offs, accessibility, and secure delivery.

The UI and copy must constantly reinforce this positioning.

---

## 4) Professional background to reflect

### Current role

**Full-Stack Software Engineer — Natixis Interépargne**

* critical product environment
* strong constraints: security, quality, accessibility
* contributes to web and mobile applications for the Espace Épargnant
* progressively took more responsibility after an initial observation/learning phase
* became a trusted contributor on delivery, maintainability, and sensitive/urgent topics

### Main contributions to highlight

* full-stack feature design and implementation from technical framing to production
* PR reviews and engineering best practices
* test strategy: unit, integration, e2e
* reduction of regression risk and continuous improvement
* accessibility work: RGAA mindset, keyboard flows, ARIA, design system consistency
* collaboration through pair/mob programming and Agile rituals
* architecture and delivery discussions
* contribution on sensitive topics including MFA-related work

### Stack and practices

* Angular / TypeScript
* Ionic
* Spring Boot / Java / Kotlin
* REST
* Jenkins / SonarQube
* Cucumber / Playwright
* DDD / Clean Architecture
* Design System thinking
* Git / Maven
* SQL / MongoDB
* NgRx / Redux
* Tailwind

---

## 5) Projects and experience to feature

The portfolio should include selected projects and case studies, not just screenshots.

### Key projects to surface

1. **Accessible games entry point**

    * Angular web application as an accessible entry point for mini-games
    * aimed at users with severe disabilities
    * accessibility used as an architectural driver
    * strong testing and CI/CD
    * explicit documentation of technical choices

2. **Knowledge management system**

    * strong domain understanding
    * structured engineering approach
    * system design mindset

3. **Corewar and Battleship projects**

    * complex problem solving
    * algorithmic reasoning
    * systems thinking

4. **Design System initiative**

    * major frontend-oriented effort
    * reusable foundations for future projects
    * consistency, maintainability, accessibility, scalable UI engineering

5. **Future flagship project: scalable e-commerce platform**

    * modern architecture ambition
    * microservices and system thinking in future evolution
    * reliability, observability, delivery discipline

Every project should emphasize:

* context
* problem
* constraints
* solution
* technical decisions
* testing / accessibility / security considerations when relevant
* lessons learned

---

## 6) Product and design intent

This portfolio is not a flashy marketing website.

### The intended feeling

Visitors should think:

* “This engineer can be trusted on serious products.”
* “He understands architecture, delivery, maintainability, accessibility, and risk.”
* “He can contribute beyond implementation and grow toward tech lead / architect responsibilities.”

### Visual direction

The site should feel:

* sober
* premium
* modern
* technical
* calm
* structured
* readable
* elegant without gimmicks

### Avoid

* noisy startup aesthetics
* excessive gradients
* overly playful interactions
* design choices that reduce clarity
* heavy animations that weaken credibility

### UX principles

* obvious hierarchy
* low cognitive load
* excellent scanability
* semantic structure
* accessible by default
* responsive by design
* reusable patterns and components

---

## 7) Technical scope

### Target stack

* Angular latest
* Nx workspace
* standalone components
* Tailwind
* ESLint + Prettier
* unit tests
* Playwright e2e
* basic accessibility checks
* GitHub Actions
* simple deployment later

### Architecture style for V1

Keep the architecture simple and clean.

Recommended structure:

* `apps/portfolio` → application entry point
* `libs/core` → models, content, config, utils
* `libs/ui` → reusable UI primitives
* `libs/layout` → shell, header, footer, containers
* `libs/features` → home, about, experience, projects, project-detail, engineering, contact
* `e2e/portfolio-e2e` → e2e tests

### Important scope decision

Do **not** introduce microfrontends in V1.
Do **not** over-abstract.
Do **not** create a separate design system package yet.
Use local app components cleanly so they can later evolve toward a stronger design system.

---

## 8) Expected pages

Essential V1 pages:

1. Home
2. About
3. Experience
4. Projects
5. Project detail
6. Engineering / Philosophy
7. Contact

### Home page should include

* strong hero statement
* concise intro
* expertise pillars
* credibility highlights
* featured projects
* CTA

### About page should include

* engineering philosophy
* journey / progression
* motivation
* learning mindset

### Experience page should include

* Natixis featured as main experience
* context and constraints
* responsibilities
* impact
* stack and practices

### Projects page should include

* project cards
* concise case-study angle
* room for future expansion

### Project detail page should include

* overview
* context
* constraints
* architecture choices
* stack
* testing
* accessibility / security
* outcomes
* learnings

### Engineering page should include

* clear boundaries
* maintainability
* testing strategy
* pragmatic trade-offs
* DDD / clean architecture
* accessibility by design
* secure delivery
* long-term thinking

### Contact page should include

* simple CTA
* GitHub
* LinkedIn
* email
* opportunities / collaboration tone

---

## 9) Coding guidelines

The agent must follow these rules for every implementation task:

* keep the implementation simple and maintainable
* use standalone Angular components
* follow the existing Nx structure
* do not introduce unnecessary abstractions
* keep content and rendering separate when relevant
* use semantic HTML
* keep accessibility in mind from the start
* ensure responsive behavior
* do not modify unrelated files

Implementation approach:

1. understand the exact scope
2. identify files to create or update
3. stay inside the scope
4. prefer small standalone components
5. separate content and rendering when it improves clarity
6. think about accessibility immediately
7. add relevant tests
8. verify responsive behavior
9. open a clean PR

---

## 10) Accessibility expectations

Accessibility is not optional. It is part of the engineering identity of the portfolio.

At minimum, verify:

* semantic structure
* one `h1` per page
* coherent heading order
* visible focus states
* keyboard-friendly navigation
* accessible names for actionable elements
* sufficient contrast
* functional skip link

---

## 11) Testing expectations

### Unit tests

Focus mostly on:

* reusable UI components
* header / mobile menu
* project cards
* layout components
* sections with light logic

### E2E tests

Cover at least:

* main routes load correctly
* navigation works
* mobile menu works
* key pages render
* basic accessibility checks run

### Definition of done for a feature

Before a PR is considered ready:

* build passes
* lint passes
* relevant unit tests pass
* e2e passes if relevant
* responsive behavior verified
* keyboard/focus behavior verified if relevant
* no obvious dead code

---

## 12) Git conventions

### Branch naming

Use simple branch names:

* `feat/home-hero`
* `feat/about-page`
* `feat/experience-page`
* `fix/mobile-nav-a11y`
* `test/e2e-navigation`
* `chore/github-actions`

### Commit naming

Use simple conventional prefixes:

* `feat: add home hero section`
* `fix: improve mobile navigation accessibility`
* `refactor: extract reusable project card`
* `test: add unit tests for header component`
* `chore: configure github actions ci`
* `docs: update project roadmap`

### PR title format

Keep it simple:

* `feat: add home hero section`
* `feat: add projects page and project cards`
* `fix: improve keyboard navigation in mobile header`

---

## 13) PR checklist

Every PR should contain one clear scope.
Do not group unrelated work together.

Before opening a PR, verify:

* build OK
* lint OK
* tests OK
* responsive checked
* focus visibility checked
* naming coherent

Minimal PR template:

```md
## What
Brief description of the change.

## Why
Why this change is needed.

## Scope
- Added:
- Updated:
- Not included:

## Checks
- [ ] Build
- [ ] Lint
- [ ] Unit tests
- [ ] E2E if relevant
- [ ] Accessibility checked
- [ ] Responsive checked

## Notes
Anything important for review.
```

---

## 14) Suggested implementation order

Recommended development order:

1. setup workspace
2. global styles + UI primitives
3. shell + routing
4. home
5. about
6. experience
7. projects
8. project detail
9. engineering
10. contact
11. tests / a11y / seo
12. deploy

---

## 15) Agent behavior expectations

The agent must:

* solve only the requested feature
* keep PRs small
* not refactor unrelated code opportunistically
* prefer readability over cleverness
* preserve architecture clarity
* preserve accessibility
* preserve future evolvability toward a stronger design system

The agent must avoid:

* premature abstraction
* overengineering
* cross-cutting refactors without explicit request
* noisy UI choices
* brittle tests
