# BRTSML

Portfolio personale di Bertocco Samuele — Technology Entrepreneur.

## Stack

- **React 18** + TypeScript (strict mode)
- **Vite 5** con SWC per il build veloce
- **Tailwind CSS 3** per lo styling
- **Three.js** + React Three Fiber per la scena 3D hero
- **React Router v6** con lazy loading e prefetching
- **Lucide React** per le icone
- **ESLint** + `eslint-plugin-unused-imports` per la qualità del codice

## Sviluppo

```bash
# Installa le dipendenze
bun install

# Avvia il server di sviluppo
bun run dev

# Build di produzione
bun run build

# Lint
bun run lint

# Preview della build
bun run preview
```

## Struttura

- `src/pages/` — Pagine del sito (Home, Services, Projects, About, Contact, 404)
- `src/data/services.ts` — Dati centralizzati dei servizi con dettagli, processo, FAQ
- `src/components/` — Componenti condivisi (Layout, Navbar, Footer, HeroScene)
- `src/hooks/` — Hook custom (usePageMeta, useInView)

## Deploy

Il sito è deployato automaticamente via GitHub Actions su GitHub Pages.
