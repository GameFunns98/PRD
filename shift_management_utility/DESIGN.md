---
name: Shift Management Utility
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#c7c4d7'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#908fa0'
  outline-variant: '#464554'
  surface-tint: '#c0c1ff'
  primary: '#c0c1ff'
  on-primary: '#1000a9'
  primary-container: '#8083ff'
  on-primary-container: '#0d0096'
  inverse-primary: '#494bd6'
  secondary: '#89ceff'
  on-secondary: '#00344d'
  secondary-container: '#00a2e6'
  on-secondary-container: '#00344e'
  tertiary: '#ffb783'
  on-tertiary: '#4f2500'
  tertiary-container: '#d97721'
  on-tertiary-container: '#452000'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#c9e6ff'
  secondary-fixed-dim: '#89ceff'
  on-secondary-fixed: '#001e2f'
  on-secondary-fixed-variant: '#004c6e'
  tertiary-fixed: '#ffdcc5'
  tertiary-fixed-dim: '#ffb783'
  on-tertiary-fixed: '#301400'
  on-tertiary-fixed-variant: '#703700'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display:
    fontFamily: Geist
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  title-md:
    fontFamily: Geist
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  mono-data:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
  container-max: 1440px
---

## Brand & Style
The design system is engineered for high-performance scheduling and workforce logistics. It prioritizes operational efficiency over decorative flair, adopting a **Minimalist-Utility** aesthetic. The core philosophy is "Status at a Glance," ensuring that shift managers and employees can parse complex temporal data with zero friction.

The UI utilizes a "Technical Dark" foundation—leveraging deep grays and rich indigos to reduce eye strain during long periods of monitoring. The emotional response is one of reliability, precision, and systemic order. High-contrast borders and surgical typography replace traditional shadows to maintain a crisp, information-dense environment that feels like a professional tool rather than a consumer social app.

## Colors
The palette is anchored in a **Dark Mode** base to evoke a command-center atmosphere. 

- **Primary (Indigo):** Used for primary actions, active shift states, and critical navigation. It provides enough luminance against the dark background to meet AAA accessibility standards.
- **Secondary (Cyan):** Used for secondary metrics, "available" placeholders, and interactive highlights.
- **Surface Strategy:** We use a tonal layering system. The base background is the darkest shade, while "Editable Templates" occupy a slightly lighter surface (`#1E293B`). "Available Placeholders" are represented with dashed borders and a 10% opacity fill of the primary color to distinguish them from confirmed data.
- **Status Colors:** High-saturation tokens for Success, Warning, and Error are used sparingly to flag scheduling conflicts or approved requests.

## Typography
The system uses **Geist** for its neutral, technical character and exceptional legibility in dark environments. 

For shift times, durations, and employee IDs, we introduce **JetBrains Mono** to ensure tabular alignment. This prevents visual "jitter" when scrolling through long lists of numerical data. All labels for shift statuses use a "Label-Caps" style to provide a clear distinction between metadata and content. Line heights are kept tight but readable to maximize information density on dashboard views.

## Layout & Spacing
A **strict 4px/8px grid** governs all spatial relationships. This ensures a "utility-first" feel where elements feel locked into a logical system.

- **Desktop:** 12-column fluid grid. Calendars and shift-boards occupy the main span (8-10 columns), while filters and stats are pinned to a side drawer (2-4 columns).
- **Mobile:** Single column with fixed bottom navigation for quick shift-swapping.
- **Density:** We employ a "Compact" spacing model. Gutters are 16px to allow for high data density without elements touching. 
- **Reflow:** On smaller screens, horizontal "Day" views in the scheduler transition to vertical "Agenda" views to maintain high-contrast readability.

## Elevation & Depth
In this design system, depth is communicated through **Tonal Layers and Outlines** rather than soft shadows. 

1.  **Level 0 (Base):** The dark canvas.
2.  **Level 1 (Cards/Containers):** Raised one tone higher with a subtle 1px border (`#334155`).
3.  **Level 2 (Modals/Popovers):** These use a more pronounced border and a slight "Glow" (a 0 0 15px primary-colored shadow at 10% opacity) to signify focus.

**Editable vs. Static:** 
- **Templates:** Solid borders with a slight inner-tint.
- **Placeholders:** Dashed borders (`2px dash, 4px gap`) to indicate "vacancy" or "drop-zone" functionality.

## Shapes
We use **Soft (0.25rem)** roundedness. This small radius keeps the UI feeling disciplined and modern without the "aggression" of perfectly sharp corners. 

Buttons and input fields share this 4px radius. The only exception is Status Badges (Pills), which are fully rounded to differentiate them from interactive buttons. This helps users quickly distinguish between "This is a state" (Pill) and "I can click this" (Button).

## Components
- **Buttons:** Primary buttons are solid Indigo with white text. Secondary buttons use a ghost style (outline only) to reduce visual noise.
- **Shift Cards:** High-density containers with JetBrains Mono for time-stamps. A vertical color bar on the left edge indicates the department or priority.
- **Placeholders:** Elements intended for "Shift Picking" must have a dashed border and a hover state that transitions from 10% to 20% opacity.
- **Input Fields:** Flat dark background with a 1px border that turns Primary Indigo on focus. No drop shadows.
- **Lists:** Clean, border-bottom separation only. High-contrast text for names, muted text for secondary details.
- **Toggle/Switch:** Small, rectangular thumb (4px radius) rather than a circular one, reinforcing the utility/industrial aesthetic.
- **Conflict Indicator:** A small red "Warning" icon that appears in the top-right corner of a Shift Card, utilizing the `status_error` token.