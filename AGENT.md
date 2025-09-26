# Agent Instructions for Interactive Muscle Map Website and Webapp

## General Instructions
- Follow `PROJECT.md` for project scope and milestones.
- Prioritize mobile-first design (375–414px width) and accessibility (≥ AA, ARIA labels, keyboard navigation).
- Write concise, maintainable code with clear comments.
- Use vanilla JS for v1; avoid frameworks unless specified.
- Optimize for performance: CLS < 0.1, LCP < 2.5s on 4G.

## Coding Standards
- **JavaScript**: ES6+, camelCase, no unused variables, lint with ESLint.
- **HTML/CSS**: Semantic HTML5, CSS custom properties, minify for production.
- **SVGs**: Use `<path>` elements with unique IDs matching muscle ID map in `PROJECT.md`. Inline critical SVGs, lazy-load others.
- **JSON**: Validate exercise data schema; keep payloads < 100KB.
- **Accessibility**: Add `aria-label` for muscle regions, ensure keyboard navigation, and test with screen readers.

## Tools & Integrations
- **Repo**: Use `@github` for issue tracking and PRs.
- **Deployment**: Vercel or Surge for hosting.
- **Testing**: Run Lighthouse for performance and accessibility audits.
- **Content**: Store exercises in JSON; support EN/TH localization.
- **CLI Commands**:
  - `gemini /write-file` to update JSON or Markdown.
  - `gemini /tasks add` to append tasks to `TASKS.md`.
  - `gemini @github create-issue` for task tracking.

## Safety & Ethics
- Include medical disclaimer: “Educational use only; consult a professional.”
- Highlight contraindications for exercises stressing sensitive joints.
- Avoid collecting user data in v1 (use local storage for progress).

## AI Behavior
- Suggest optimizations for performance and accessibility.
- Cross-reference `PROJECT.md` and `TASKS.md` before generating code.
- For large tasks (>10K tokens), delegate to `gemini -p 'Analyze: [code/task]'` and integrate results.
- Provide diffs for code changes and seek user approval via `edit` command.
