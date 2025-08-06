# Tech Talk with Diana

This project is a personal content hub built with:

- **React** – front‑end UI library.
- **Vite** – build tool for rapid development and hot‑module replacement.
- **Tailwind CSS** – utility‑first CSS framework.
- **React Router** – client‑side routing between pages.
- **JSON data files** – stored in `src/data` for articles, videos and social links.
- **Component‑based architecture** – reusable UI components under `src/components`.
- **Pages** – separate views for Home, Articles and Videos under `src/pages`.
- **Assets** – images in `src/assets`.
- **GitHub Actions & Azure Static Web Apps** – automated build and deploy pipeline.

## Development

1. Install dependencies: `npm install`
2. Run the development server: `npm run dev`
3. Build for production: `npm run build`

## Architecture

- The project uses simple JSON data sources, so there’s no backend to set up.
- React functional components and Tailwind classes handle the UI.
- Filtering logic lives in the Articles and Videos pages.
- Vite handles bundling and hot reload during development.
