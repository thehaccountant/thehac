## HAC – The Home of Accounting Consulting

This is a React + Vite + TypeScript single‑page application for HAC, “The Home of Accounting Consulting”.  
It uses shadcn‑ui and Tailwind CSS for UI components and styling, and React Router for client‑side routing.

### Tech stack

- Vite
- React 18
- TypeScript
- shadcn‑ui
- Tailwind CSS
- React Router

### Local development

```sh
git clone https://github.com/thehaccountant/thehac.git
cd thehac
npm install
npm run dev
```

The app will be available on the port printed in the terminal (by default `http://localhost:5173`).

### Production build

```sh
npm run build
```

This generates a static production build in the `dist` directory, suitable for hosting on services like Cloudflare Pages.

### Preview the production build locally

```sh
npm run preview
```

### Deployment

You can deploy the contents of the `dist` directory to any static hosting provider (e.g. Cloudflare Pages, Netlify, Vercel, S3 + CDN). For Cloudflare Pages, use:

- Build command: `npm run build`
- Build output directory: `dist`
