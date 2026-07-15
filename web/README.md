# GOFLOW Homepage - Web

Next.js 14 Frontend

## Setup

```bash
cd web
npm install
npm run dev
```

Open http://localhost:3000

## Structure

```
src/
├── app/       - Pages & layout
├── components/ - React components
├── services/  - API client
├── stores/    - Zustand state
└── types/     - TypeScript types
```

## Components to Build

- [ ] Hero Section
- [ ] Products Section
- [ ] Enterprise Core
- [ ] Why GOFLOW
- [ ] Business Model
- [ ] Investment Section
- [ ] Navigation
- [ ] Footer

## API Integration

Backend runs on `http://localhost:3000`

Frontend calls:
- `/api/hero`
- `/api/products`
- `/api/business-model`
- `/api/investment`
