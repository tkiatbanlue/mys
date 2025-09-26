# QWEN.md: Interactive Muscle Map Website and Webapp

## Project Overview

This project is for creating a single-page web application that allows users to explore and find bodyweight exercises by interacting with a visual muscle map. The application features an interactive SVG-based muscle map where users can click on specific muscle regions to view a curated list of exercises targeting that area. The exercise data is stored in a structured JSON format. The initial version is built with vanilla JavaScript, HTML5, and CSS, with a strong emphasis on mobile-first design, performance, and accessibility.

**Key Features:**
- Interactive SVG body map (front/side views) with clickable muscle regions
- Exercise library with filters (muscle, movement pattern, equipment, difficulty)
- Basic progress tracking ("saved"/"done" exercises)
- JSON-based content with localization support (EN/TH)

**Target Audience:** Beginners to intermediates seeking home exercises

## Project Structure

The project currently consists of several key documentation files:
- `PROJECT.md` - Main project plan with overview, scope, and milestones
- `TASKS.md` - Active tasks with due dates and progress tracking
- `AGENT.md` - Detailed coding standards and development instructions
- `GEMINI.md` - Project overview and development conventions (alternative project description)
- `QWEN.md` - This file for AI assistant context

## Building and Running

The application is a static website built with vanilla JavaScript, HTML, and CSS. There are no complex build commands required.

**Running the application:**
- Open the `index.html` file directly in your browser to run the application locally
- For development, use a local web server (e.g., `python -m http.server`) to avoid file loading issues

**Testing:**
- Use Lighthouse for performance and accessibility audits
- Manual testing on different devices and screen sizes

## Development Conventions

### Code Style
- **JavaScript**: ES6+, camelCase, lint with ESLint
- **HTML/CSS**: Semantic HTML5, CSS custom properties, minify for production
- **SVGs**: Use `<path>` elements with unique IDs matching muscle ID map
- **JSON**: Validate exercise data schema; keep payloads < 100KB

### Project Milestones
1. **Week 1-2 (Sep 26–Oct 10, 2025)**: Set up repo, finalize muscle ID map, draft initial exercise set
2. **Week 3-4 (Oct 11–Oct 24, 2025)**: Build SVG maps, implement front-end (vanilla JS), and integrate JSON content
3. **Week 5-6 (Oct 25–Nov 7, 2025)**: Add filters, progress tracking, and accessibility features
4. **Week 7-8 (Nov 8–Nov 21, 2025)**: QA, performance optimization, and deployment

### Performance & Accessibility
- Target Cumulative Layout Shift (CLS) < 0.1
- Target Largest Contentful Paint (LCP) < 2.5s on 4G
- Accessibility ≥ AA compliance with ARIA labels and keyboard navigation
- Mobile-first design for 375–414px width screens

### Safety & Ethics
- Include medical disclaimer: "Educational use only; consult a professional"
- Highlight contraindications for exercises stressing sensitive joints
- Avoid collecting user data in v1 (use local storage for progress)

## Active Tasks
- [ ] Initialize GitHub repo with `PROJECT.md`, `TASKS.md`, `AGENT.md` (Due: Sep 28, 2025)
- [ ] Finalize muscle ID map for front/side views (Due: Oct 3, 2025)
- [ ] Draft 3–7 exercises per muscle region in JSON format (Due: Oct 10, 2025)
- [ ] Create two SVGs (front/side) with clickable `<path>` elements (Due: Oct 17, 2025)
- [ ] Implement vanilla JS front-end with dynamic content loading (Due: Oct 24, 2025)
- [ ] Add global search and filters (muscle, equipment, difficulty) (Due: Oct 31, 2025)
- [ ] Implement progress tracking ("saved"/"done") with local storage (Due: Nov 7, 2025)
- [ ] Ensure accessibility (ARIA labels, keyboard navigation) (Due: Nov 7, 2025)
- [ ] Run Lighthouse audit for performance (CLS < 0.1, LCP < 2.5s) (Due: Nov 14, 2025)
- [ ] Deploy to Vercel or Surge (Due: Nov 21, 2025)

## Tools & Integrations
- **Repo**: Use GitHub for issue tracking and PRs
- **Deployment**: Vercel or Surge for hosting
- **Testing**: Lighthouse for performance and accessibility audits
- **Content**: Store exercises in JSON with EN/TH localization
- **CLI Commands**:
  - `gemini /write-file` to update JSON or Markdown
  - `gemini /tasks add` to append tasks to `TASKS.md`
  - `gemini @github create-issue` for task tracking