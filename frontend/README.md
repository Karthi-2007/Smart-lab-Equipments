# Smart Lab Equipments - Frontend

A modern React + Vite frontend application for managing smart lab equipment.

## Tech Stack

- **React** 19.2.6 - UI library
- **Vite** 8.0.12 - Build tool & dev server
- **React Router** 7.17.0 - Client-side routing
- **Bootstrap** 5.3.8 - CSS framework
- **Recharts** 3.9.0 - Data visualization
- **Axios** 1.18.1 - HTTP client
- **React Icons** 5.6.0 - Icon library

## Project Structure

```
frontend/
├── src/
│   ├── components/        # Reusable UI components
│   ├── pages/            # Page components
│   ├── routes/           # Route configuration
│   ├── services/         # API services
│   ├── context/          # React Context
│   ├── data/             # Static data & constants
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/               # Static assets
├── index.html
├── vite.config.js
└── package.json
```

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Starts the development server at `http://localhost:5173`

### Build

```bash
npm run build
```

Creates an optimized production build in the `dist/` directory

### Preview

```bash
npm run preview
```

Preview the production build locally

### Linting

```bash
npm run lint
```

Run ESLint to check code quality

## Environment Variables

Create a `.env` file in the frontend directory:

```env
VITE_API_URL=http://localhost:3000
```

## Contributing

1. Follow ESLint rules
2. Keep components modular and reusable
3. Use React Context for state management when needed
4. Document complex components with comments
