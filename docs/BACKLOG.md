# Portfolio V1 — Backlog

This backlog is the actionable implementation plan for the Angular + Nx portfolio.
It is derived from the project framing, architecture, roadmap, and feature breakdown defined in the source planning document.

---

## Epic

**Portfolio V1 — Angular + Nx**

Goal:
Build a sober, premium, engineering-oriented personal portfolio that highlights reliability, architecture, accessibility, quality, security awareness, and long-term software thinking.

---

## Milestone 0 — Setup

### T01 — Initialize Nx Angular workspace

**Goal**
Create the monorepo and the main Angular app.

**Scope**

* initialize Nx workspace
* create `portfolio` app
* remove useless boilerplate
* add minimal README

**Acceptance criteria**

* app runs locally
* build passes
* lint passes

**Commit**
`chore: initialize nx angular workspace`

---

### T02 — Configure Tailwind and global styles

**Goal**
Create the visual foundation of the app.

**Scope**

* Tailwind setup
* global stylesheet
* temporary tokens
* typography, spacing, containers
* base link/focus styles

**Acceptance criteria**

* global styles are applied
* focus states are visible
* contrast remains readable

**Commit**
`chore: configure tailwind and global styles`

---

### T03 — Create base Nx library structure

**Goal**
Prepare a maintainable workspace structure.

**Scope**

* create `libs/core`
* create `libs/ui`
* create `libs/layout`
* create `libs/features`
* create minimal barrel exports where useful

**Acceptance criteria**

* imports remain coherent
* build passes

**Commit**
`chore: add initial nx library structure`

---

### T04 — Add application routing

**Goal**
Define the initial navigation map.

**Scope**

* add main routes
* prepare routes for all V1 pages
* include future project detail route

**Acceptance criteria**

* routes resolve correctly
* app shell can host page navigation

**Commit**
`feat: add application routing`

---

## Milestone 1 — Layout foundations

### T05 — Create application shell layout

**Goal**
Set up the global site structure.

**Scope**

* main shell component
* page container
* content area
* layout skeleton

**Acceptance criteria**

* shell renders correctly
* content area is reusable
* responsive baseline works

**Commit**
`feat: add application shell layout`

---

### T06 — Add responsive header navigation

**Goal**
Implement the main site navigation.

**Scope**

* desktop navigation
* mobile navigation
* active state handling
* CTA slot if needed

**Acceptance criteria**

* navigation works on desktop and mobile
* keyboard access is preserved
* visible focus states exist

**Tests**

* unit tests for menu open/close behavior if needed

**Commit**
`feat: add responsive header navigation`

---

### T07 — Add global accessibility foundations

**Goal**
Make the base app structure accessible.

**Scope**

* skip link
* visible focus styles
* semantic landmarks
* heading consistency baseline

**Acceptance criteria**

* skip link works
* keyboard users can navigate reliably

**Commit**
`feat: add global accessibility foundations`

---

### T08 — Add footer

**Goal**
Complete the shell.

**Scope**

* footer layout
* GitHub / LinkedIn / contact links
* sober closing area

**Acceptance criteria**

* footer renders correctly
* required links are present

**Commit**
`feat: add application footer`

---

## Milestone 2 — UI primitives

### T09 — Add reusable button component

**Goal**
Provide a base button primitive.

**Scope**

* button variants
* disabled state if needed
* support button/link usage if useful

**Acceptance criteria**

* variants render correctly
* focus and hover states are clear

**Tests**

* label rendering
* disabled state if applicable

**Commit**
`feat: add reusable button component`

---

### T10 — Add section heading component

**Goal**
Standardize section intros.

**Scope**

* title
* eyebrow or subtitle if needed
* optional description

**Acceptance criteria**

* section heading supports consistent page composition

**Commit**
`feat: add section heading component`

---

### T11 — Add reusable card component

**Goal**
Provide a flexible content block container.

**Scope**

* generic card with projected content
* sober default styles

**Acceptance criteria**

* projected content renders correctly
* reusable across pages

**Tests**

* content projection test

**Commit**
`feat: add reusable card component`

---

### T12 — Add tags, badges, and icon links

**Goal**
Complete the UI primitive set for V1.

**Scope**

* tag component
* badge component
* icon link component

**Acceptance criteria**

* components render consistently
* links remain accessible

**Commit**
`feat: add tags badges and icon links`

---

## Milestone 3 — Home page

### T13 — Create home page structure

**Goal**
Set up the Home page composition.

**Scope**

* feature page structure
* placeholders or section composition
* route integration

**Acceptance criteria**

* home page route renders correctly

**Commit**
`feat: add home page structure`

---

### T14 — Add home hero section

**Goal**
Present the engineering positioning immediately.

**Scope**

* main `h1`
* short positioning statement
* CTA links
* optional trust signals

**Acceptance criteria**

* one `h1`
* semantic structure
* strong readability
* CTA visible and keyboard accessible

**Tests**

* unit test for rendering if needed
* e2e check for `h1` and CTA presence

**Commit**
`feat: add home hero section`

---

### T15 — Add expertise pillars section

**Goal**
Highlight core expertise themes.

**Scope**

* architecture & design
* quality & delivery
* accessibility
* security
* optional continuous learning angle

**Acceptance criteria**

* pillars are clear and concise
* content is not buzzword-heavy

**Commit**
`feat: add expertise pillars section`

---

### T16 — Add credibility highlights section

**Goal**
Display short trust-building signals.

**Scope**

* current role
* critical product context
* delivery/quality/a11y/security highlights
* growth mindset

**Acceptance criteria**

* concise credibility markers are visible

**Commit**
`feat: add credibility highlights section`

---

### T17 — Add featured projects section

**Goal**
Show selected work from the landing page.

**Scope**

* 2 to 4 featured project cards
* link to projects page

**Acceptance criteria**

* featured projects render correctly
* links work

**Commit**
`feat: add featured projects section`

---

### T18 — Add home CTA section

**Goal**
Close the landing page with a clean call to action.

**Scope**

* final message
* link to contact and/or projects

**Acceptance criteria**

* clear final CTA exists
* wording remains sober and professional

**Commit**
`feat: add home call to action section`

---

## Milestone 4 — About page

### T19 — Create about page structure

**Goal**
Set up the About page composition.

**Scope**

* route
* layout structure
* section placeholders if needed

**Acceptance criteria**

* page route works
* page structure is ready for content

**Commit**
`feat: add about page structure`

---

### T20 — Add philosophy section

**Goal**
Describe the engineering mindset.

**Scope**

* reliability over time
* clear boundaries
* strong testing
* pragmatic trade-offs

**Acceptance criteria**

* content reads as engineering philosophy, not generic bio

**Commit**
`feat: add about philosophy section`

---

### T21 — Add journey timeline

**Goal**
Show the path from learning to trusted contributor.

**Scope**

* L2 technical projects
* ENSICAEN phase
* Natixis progression
* increasing responsibility

**Acceptance criteria**

* chronological structure is clear
* story remains concise and readable

**Commit**
`feat: add about journey timeline`

---

### T22 — Add learning mindset section

**Goal**
Show ongoing progression and exploration.

**Scope**

* architecture
* microservices
* system design
* design system work
* continuous improvement

**Acceptance criteria**

* section communicates growth, not vague ambition

**Commit**
`feat: add learning mindset section`

---

## Milestone 5 — Experience page

### T23 — Create experience page structure

**Goal**
Prepare the main experience page.

**Scope**

* route
* layout skeleton
* dedicated areas for Natixis and practices

**Acceptance criteria**

* route works
* structure is ready

**Commit**
`feat: add experience page structure`

---

### T24 — Add Natixis experience summary

**Goal**
Feature the current role strongly.

**Scope**

* title and company
* critical product context
* progression in responsibility
* trust and ownership

**Acceptance criteria**

* experience summary feels impact-oriented and credible

**Commit**
`feat: add natixis experience summary`

---

### T25 — Add impact section

**Goal**
Make concrete contributions visible.

**Scope**

* full-stack delivery
* PR reviews
* quality and reliability
* accessibility work
* collaboration
* sensitive or urgent contributions

**Acceptance criteria**

* impact blocks are clear and structured

**Commit**
`feat: add experience impact section`

---

### T26 — Add stack and practices section

**Goal**
Present the technical ecosystem without turning it into a logo wall.

**Scope**

* Angular / TypeScript
* Spring Boot / Java / Kotlin
* tests
* CI/CD
* DDD / clean architecture
* design system / accessibility practices

**Acceptance criteria**

* technologies are grouped meaningfully
* content remains readable

**Commit**
`feat: add experience stack and practices section`

---

## Milestone 6 — Projects page

### T27 — Create projects page structure

**Goal**
Set up the project showcase page.

**Scope**

* route
* page structure
* project listing area

**Acceptance criteria**

* route works
* project list area is ready

**Commit**
`feat: add projects page structure`

---

### T28 — Add project content model

**Goal**
Separate project data from rendering.

**Scope**

* `Project` interface
* mock data structure
* slug, title, summary, problem, constraints, decisions, stack, highlights, links

**Acceptance criteria**

* model is simple and extensible
* data typing is clean

**Commit**
`feat: add project content model`

---

### T29 — Add reusable project card component

**Goal**
Create the main project preview block.

**Scope**

* title
* summary
* tags
* detail link if needed

**Acceptance criteria**

* card is reusable and accessible
* card content is readable

**Tests**

* title, summary, tags render correctly

**Commit**
`feat: add reusable project card component`

---

### T30 — Add projects grid section

**Goal**
Render projects clearly.

**Scope**

* map project data to cards
* responsive layout
* detail links

**Acceptance criteria**

* expected number of projects renders
* responsive grid works

**Commit**
`feat: add projects grid section`

---

### T31 — Seed initial project content

**Goal**
Populate the page with real, relevant projects.

**Scope**

* accessible games project
* knowledge management system
* corewar / battleship
* design system project
* scalable e-commerce project vision

**Acceptance criteria**

* content is credible and concise
* each project reflects problem/constraints/solution mindset

**Commit**
`feat: add initial project content`

---

## Milestone 7 — Project detail page

### T32 — Add project detail page template

**Goal**
Support case-study style project pages.

**Scope**

* dynamic route with slug
* template structure
* data lookup by slug
* fallback for unknown slug

**Acceptance criteria**

* page renders correct project from slug
* fallback is handled gracefully

**Commit**
`feat: add project detail page template`

---

### T33 — Add project detail content sections

**Goal**
Expose engineering decisions in depth.

**Scope**

* overview
* context
* constraints
* technical decisions
* testing
* accessibility / security
* outcomes
* learnings

**Acceptance criteria**

* section order is clear
* structure supports future project expansion

**Commit**
`feat: add project detail content sections`

---

## Milestone 8 — Engineering page

### T34 — Create engineering page structure

**Goal**
Create the page dedicated to engineering thinking.

**Scope**

* route
* layout
* section placeholders

**Acceptance criteria**

* route works
* structure is ready for content

**Commit**
`feat: add engineering page structure`

---

### T35 — Add engineering principles section

**Goal**
Present core engineering convictions.

**Scope**

* clear boundaries
* maintainability
* testing strategy
* pragmatic trade-offs
* long-term reliability

**Acceptance criteria**

* section reads as a genuine engineering stance

**Commit**
`feat: add engineering principles section`

---

### T36 — Add architecture, quality, a11y, and security sections

**Goal**
Structure the main domains of expertise.

**Scope**

* architecture & design
* quality & delivery
* accessibility
* security

**Acceptance criteria**

* themes are clearly separated
* content stays concrete and professional

**Commit**
`feat: add engineering focus sections`

---

## Milestone 9 — Contact page

### T37 — Add contact page

**Goal**
Create a clear professional contact page.

**Scope**

* route
* contact block
* GitHub / LinkedIn / email links

**Acceptance criteria**

* links render correctly
* page feels sober and trustworthy

**Commit**
`feat: add contact page`

---

### T38 — Add final contact CTA

**Goal**
End the experience with a professional invitation to connect.

**Scope**

* short collaboration message
* clear direct links

**Acceptance criteria**

* CTA is clear without sounding overly sales-driven

**Commit**
`feat: add contact call to action`

---

## Milestone 10 — Quality and release readiness

### T39 — Add unit tests for UI primitives

**Goal**
Protect reusable UI building blocks.

**Scope**

* button
* card
* section heading
* tag/badge
* icon link if relevant

**Acceptance criteria**

* core primitives have basic unit coverage

**Commit**
`test: add unit tests for ui primitives`

---

### T40 — Add unit tests for layout components

**Goal**
Protect navigation and shell behavior.

**Scope**

* header
* mobile menu
* shell
* skip link behavior if applicable

**Acceptance criteria**

* layout-critical behavior is covered

**Commit**
`test: add unit tests for layout components`

---

### T41 — Add e2e smoke coverage for main routes

**Goal**
Ensure the site is fundamentally stable.

**Scope**

* home
* about
* experience
* projects
* contact

**Acceptance criteria**

* main routes load successfully
* key visible elements exist

**Commit**
`test: add e2e smoke coverage for main routes`

---

### T42 — Add e2e navigation coverage

**Goal**
Verify core navigation flows.

**Scope**

* desktop header navigation
* mobile menu navigation
* route changes
* return to home if relevant

**Acceptance criteria**

* navigation works on desktop and mobile

**Commit**
`test: add e2e navigation coverage`

---

### T43 — Add accessibility checks for key pages

**Goal**
Make a11y part of release quality.

**Scope**

* axe checks on key pages
* check one `h1`
* check focus visibility and keyboard basics where possible

**Acceptance criteria**

* no major accessibility violations on critical pages

**Commit**
`test: add accessibility checks for key pages`

---

### T44 — Add basic SEO metadata

**Goal**
Prepare clean public publication.

**Scope**

* page title and descriptions
* social tags
* favicon
* basic metadata setup

**Acceptance criteria**

* metadata is present and aligned with positioning

**Commit**
`feat: add basic seo metadata`

---

### T45 — Add GitHub Actions CI workflow

**Goal**
Automate quality checks.

**Scope**

* lint
* unit tests
* build
* optionally separate e2e workflow

**Acceptance criteria**

* workflow is valid
* CI runs successfully

**Commit**
`chore: add github actions ci workflow`

---

### T46 — Prepare production deployment

**Goal**
Make the site publishable.

**Scope**

* production build config
* target hosting preparation
* minimal deployment notes or workflow

**Acceptance criteria**

* production build succeeds
* deployment path is documented or configured

**Commit**
`chore: prepare production deployment`

---

## Global implementation rules

Use these rules for every ticket:

* keep the implementation simple and maintainable
* use standalone Angular components
* follow the existing Nx structure
* do not introduce unnecessary abstractions
* keep content and rendering separate when relevant
* ensure semantic HTML
* keep accessibility in mind from the start
* ensure responsive behavior
* do not modify unrelated files

---

## Global PR checklist

Before opening any PR:

* run lint
* run relevant unit tests
* run build
* run e2e if relevant
* verify responsive behavior
* verify keyboard and focus behavior if relevant
* ensure no unrelated files were changed
* ensure naming is coherent

---

## Recommended execution order

1. T01 → T08
2. T09 → T12
3. T13 → T18
4. T19 → T22
5. T23 → T26
6. T27 → T33
7. T34 → T38
8. T39 → T46
