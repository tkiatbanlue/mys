# Interactive Muscle Map Website and Webapp — Project Plan

## Overview
- **Goal**: Build a single-page webapp where users can click/tap a body region to view curated bodyweight muscle-building exercises, with optional equipment-based exercises.
- **Success Criteria**:
  - Time-to-first-exercise < 5s on mobile.
  - < 2 taps from home to exercise detail.
  - Cumulative Layout Shift (CLS) < 0.1, Largest Contentful Paint (LCP) < 2.5s on 4G.
  - Accessibility ≥ AA (keyboard + screen reader support).
- **Timeline**: 8 weeks, targeting completion by November 21, 2025.
- **Audience**: Beginners to intermediates seeking home exercises.
- **Platforms**: Mobile-first (375–414px width), tablet, desktop.

## Scope
- **In-Scope**:
  - Interactive SVG body map (front/side views) with clickable muscle regions.
  - Exercise library with filters (muscle, movement pattern, equipment, difficulty).
  - Basic progress tracking (“saved”/“done” exercises).
  - JSON-based content with localization support (EN/TH).
- **Out-of-Scope (v1)**:
  - User accounts, social features, workout plans, timers, video hosting.

## Muscle ID Map

This map defines the `id` attributes for the clickable `<path>` elements in the SVG body maps.

### Front View
| Muscle Group | ID |
|---|---|
| Neck | `neck` |
| Shoulders | `shoulders` |
| Biceps | `biceps` |
| Forearms | `forearms` |
| Chest | `chest` |
| Abs | `abs` |
| Obliques | `obliques` |
| Quads | `quads` |
| Adductors | `adductors` |

### Side/Back View
| Muscle Group | ID |
|---|---|
| Traps | `traps` |
| Triceps | `triceps` |
| Lats | `lats` |
| Middle Back | `middle-back` |
| Lower Back | `lower-back` |
| Glutes | `glutes` |
| Hamstrings | `hamstrings` |
| Calves | `calves` |

## Milestones
1. **Week 1-2 (Sep 26–Oct 10, 2025)**: Set up repo, finalize muscle ID map, draft initial exercise set.
2. **Week 3-4 (Oct 11–Oct 24, 2025)**: Build SVG maps, implement front-end (vanilla JS), and integrate JSON content.
3. **Week 5-6 (Oct 25–Nov 7, 2025)**: Add filters, progress tracking, and accessibility features.
4. **Week 7-8 (Nov 8–Nov 21, 2025)**: QA, performance optimization, and deployment.

## AI Instructions
- Reference `TASKS.md` for actionable tasks.
- Use `AGENT.md` for coding standards and tools.
- Prioritize mobile-first design and accessibility.
- Suggest tasks weekly based on milestones.
- Use `@github` to create issues for tasks and track progress.
