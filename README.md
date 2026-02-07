# Kara | Minimal Portfolio

A digital garden and personal portfolio, designed with minimalism, subtle interactions, and performance in mind. Built to showcase work and thoughts without distraction.

## Overview

This project is a React-based single-page application (SPA) featuring a responsive bento-grid layout for the portfolio and a dedicated, distraction-free section for writings. The aesthetic is strictly dark mode, utilizing custom CSS variables for easy theming and Framer Motion for seamless micro-interactions.

## Key Features

- **Bento Grid Architecture**: A modular, responsive grid layout that adapts fluidly across desktop, tablet, and mobile breakpoints.
- **Writings Section**: A dedicated route (`/writings`) featuring a minimal, accordion-style list for essays and notes. Focuses purely on typography and content.
- **Micro-Interactions**: Subtle hover states, smooth page transitions, and reveal animations powered by Framer Motion.
- **Performance First**: Built on Vite for lightning-fast HMR and optimized production builds.
- **Data-Driven Content**: All portfolio items and writings are managed via simple data files in `src/data/`, making updates effortless.

## Tech Stack

- **React 18**
- **Vite**
- **Framer Motion**
- **CSS Modules / Variables**
- **React Router DOM**
- **Lucide React Icons**

## Getting Started

1.  **Clone & Install**
    ```bash
    git clone https://github.com/whysokara/port.git
    cd port
    npm install
    ```

2.  **Develop**
    ```bash
    npm run dev
    ```

3.  **Build**
    ```bash
    npm run build
    ```

## Structure

- `src/components/`: Reusable UI components (BentoCard, Header, Writings, etc.)
- `src/data/`: Content sources (`portfolioData.js`, `writings.js`)
- `src/index.css`: Global styles, design tokens, and typography system.

---
Designed & Developed by Kara © 2026
