# DuckSolutions — Landing Page

Landing page de [DuckSolutions](https://ducksolutions.com.ar): sistema de control operativo para plantas alimenticias pymes en Argentina.

## Stack

- **React 18** + **Vite**
- **TailwindCSS** (utility-first styling)
- **react-icons** (iconografía)
- JavaScript (JSX) — sin TypeScript

## Setup

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Preview de build
npm run preview
```

## Estructura del proyecto

```
src/
├── components/
│   ├── ui/          → Primitivos reutilizables (Button, Card, Input, etc.)
│   ├── layout/      → Header, Footer, MobileMenu
│   └── sections/    → Secciones de la landing (Hero, Pain, Solution, etc.)
├── data/
│   └── content.es.js → Todo el contenido/copy centralizado (editable)
├── styles/
│   ├── globals.css   → Estilos globales + Tailwind directives
│   └── tokens.js     → Design tokens (colores, spacing, etc.)
├── lib/
│   └── utils.js      → Utilidades (cn, smoothScroll, validación)
├── App.jsx           → Layout principal con todas las secciones
└── main.jsx          → Entry point
```

## Editar contenido

Todo el copy está centralizado en `src/data/content.es.js`. Podés editar textos, agregar items a listas, modificar opciones de formulario, etc. sin tocar los componentes.

## Personalización

### Colores

Los colores principales están definidos en `tailwind.config.js`. El color primario (amarillo Duck) se puede cambiar modificando la escala `primary`.

### Imágenes

La landing usa placeholders. Para reemplazar:

1. **Hero dashboard**: colocar imagen en `/public/placeholder-dashboard.webp` y actualizar el componente `Hero.jsx`
2. **Favicon**: reemplazar `/public/favicon.svg`
3. **OG Image**: actualizar URLs en `index.html`

### Prompts para generar assets con IA

**Dashboard hero:**
> "Clean, modern industrial dashboard UI mockup on a monitor in a food manufacturing plant. Shows temperature charts, lot tracking, alert indicators, and process timelines. Light background, amber/yellow accent color, minimalist design. Isometric or 3/4 view. Professional, premium feel. No text. 16:10 aspect ratio."

**OG Image:**
> "Professional social media card for DuckSolutions, a food plant monitoring system. Amber/yellow accent, dark background, clean typography, tech-industrial feel. 1200x630px."

## TODOs de integración

- [ ] Conectar formulario de contacto con backend (API REST, Formspree, Google Sheets, etc.)
- [ ] Agregar analytics (Google Analytics, Plausible, etc.)
- [ ] Reemplazar imágenes placeholder con assets finales
- [ ] Agregar página de política de privacidad
- [ ] Configurar dominio y deploy (Vercel, Netlify, etc.)
- [ ] Agregar tracking de eventos en CTAs

## Deploy

La app es estática. Se puede deployar en:

- **Vercel**: `npm run build` → output en `/dist`
- **Netlify**: conectar repo, build command: `npm run build`, publish: `dist`
- **Cualquier hosting estático**: subir contenido de `/dist`

## Licencia

Privado — © DuckSolutions.
