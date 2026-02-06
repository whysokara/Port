# Minimal Bento Portfolio

A modern, dark-themed bento grid portfolio built with React, Vite, and CSS. Designed for high impact and extensive customizability.

## Features
- **Dark Mode Aesthetic**: Deep black background, noise textures, and glassmorphism.
- **Bento Grid Layout**: Responsive grid that adapts to Desktop (4 cols), Tablet (2 cols), and Mobile (1 col).
- **Micro-Interactions**: Hover effects, smooth transitions, and link reveals.
- **Data-Driven**: All content is managed in a single file (`src/data/portfolioData.js`).

## Getting Started

1.  **Install dependencies**
    ```bash
    npm install
    ```

2.  **Start the development server**
    ```bash
    npm run dev
    ```

3.  **Build for production**
    ```bash
    npm run build
    ```

## Customization

### Editing Content
Go to `src/data/portfolioData.js`. You can update:
- **Tiles**: Add, remove, or reorder the array items.
- **Links**: Update URLs in the `links` array for each card.
- **Icons**: Import new icons from `lucide-react`.

### Editing Styles
- `src/index.css`: Global variables, colors, and the noise texture.
- `src/components/BentoCard.css`: Card specific styles and hover animations.

## Deployment
This project is ready to deploy on **Vercel** or **Netlify**.
1. Push this code to GitHub.
2. Import the repo in Vercel/Netlify.
3. It will automatically detect `Vite` and deploy.
