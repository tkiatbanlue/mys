# GEMINI.md: Interactive Muscle Map Website and Webapp

## Project Overview

This project is to create a single-page web application that allows users to explore and find bodyweight exercises by interacting with a visual muscle map. The application is designed to be a simple and intuitive tool for beginners and intermediates looking for home-based workout routines.

The core of the application is an interactive SVG-based muscle map. Users can click on specific muscle regions to view a curated list of exercises targeting that area. The exercise data is stored in a structured JSON format, making it easy to manage and update. The initial version will be built with vanilla JavaScript, HTML5, and CSS, with a strong emphasis on mobile-first design, performance, and accessibility.

## Building and Running

As the project is in its initial phase, there are no build commands yet. The application will be a static website that can be served from any web server.

**Running the application:**

-   Once the initial HTML, CSS, and JavaScript files are created, you can open the `index.html` file directly in your browser to run the application locally.
-   For development, it is recommended to use a simple local web server to avoid potential issues with file loading (e.g., using `python -m http.server` or a similar tool).

**Testing:**

-   The project will use Lighthouse for performance and accessibility audits.
-   Manual testing will be required to ensure the application works as expected on different devices and screen sizes.

## Development Conventions

-   **Code Style:** Follow the coding standards outlined in `AGENT.md`. This includes using ES6+ for JavaScript, semantic HTML5, and CSS custom properties.
-   **Version Control:** The project will use GitHub for version control. All changes should be made through pull requests.
-   **Task Management:** Tasks are defined in `TASKS.md` and should be tracked using GitHub Issues.
-   **Accessibility:** The application must be accessible, with a target of at least AA compliance. This includes providing ARIA labels for all interactive elements and ensuring keyboard navigation.
-   **Performance:** The application must be performant, with a Cumulative Layout Shift (CLS) of less than 0.1 and a Largest Contentful Paint (LCP) of less than 2.5 seconds on a 4G connection.
