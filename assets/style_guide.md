# TicTacToe Classic Style Guide

This document provides technical specifications for implementing the TicTacToe Classic UI.

## CSS Variables

```css
:root {
  /* Colors */
  --primary-background: #121212;
  --game-board-border: #ffffff;
  --grid-background: #292929;
  --x-symbol: #4a90e2;
  --o-symbol: #e6594e;
  --text-primary: #ffffff;
  --text-secondary: #e0e0e0;
  --button-background: #3a3a3a;
  --button-hover: #4a4a4a;
  --button-text: #ffffff;
  --status-text-shadow: rgba(0, 0, 0, 0.5);
  --panel-background: rgba(41, 41, 41, 0.9);
  
  /* Spacing */
  --spacing-xs: 8px;
  --spacing-sm: 16px;
  --spacing-md: 24px;
  --spacing-lg: 32px;
  --spacing-xl: 48px;
  
  /* Typography */
  --font-family-primary: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  --font-family-title: 'Montserrat', 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  
  /* Border Radius */
  --border-radius-sm: 4px;
  --border-radius-md: 8px;
  
  /* Transition */
  --transition-fast: 150ms ease;
  --transition-normal: 300ms ease;
}
```

## Base Layout

```css
body {
  font-family: var(--font-family-primary);
  background-color: var(--primary-background);
  color: var(--text-primary);
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: var(--spacing-md);
}

.game-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
}

.game-title {
  font-family: var(--font-family-title);
  font-weight: 700;
  font-size: 28px;
  text-align: center;
  margin-bottom: var(--spacing-md);
}
```

## Game Board

```css
.game-board {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 2px;
  width: 100%;
  aspect-ratio: 1 / 1;
  max-width: 450px;
  background-color: var(--game-board-border);
  border-radius: var(--border-radius-sm);
  overflow: hidden;
}

.cell {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--grid-background);
  cursor: pointer;
  font-size: 64px;
  font-weight: bold;
  transition: background-color var(--transition-fast);
}

.cell.x {
  color: var(--x-symbol);
}

.cell.o {
  color: var(--o-symbol);
}

/* Animation for symbol appearance */
@keyframes symbol-appear {
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.cell.x::before,
.cell.o::before {
  animation: symbol-appear var(--transition-normal);
}

/* Cell hover state when empty */
.cell:not(.x):not(.o):hover {
  background-color: rgba(255, 255, 255, 0.1);
}
```

## Status Display

```css
.status {
  margin: var(--spacing-md) 0;
  font-size: 20px;
  text-align: center;
  font-weight: 500;
  height: 30px; /* Fixed height to prevent layout shift */
  text-shadow: 1px 1px 3px var(--status-text-shadow);
}

.status.x-turn {
  color: var(--x-symbol);
}

.status.o-turn {
  color: var(--o-symbol);
}
```

## Game Controls

```css
.controls {
  display: flex;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-md);
}

.button {
  background-color: var(--button-background);
  color: var(--button-text);
  border: none;
  border-radius: var(--border-radius-sm);
  padding: 10px 20px;
  font-family: var(--font-family-primary);
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color var(--transition-fast), transform var(--transition-fast);
  min-width: 120px;
  text-align: center;
}

.button:hover {
  background-color: var(--button-hover);
}

.button:active {
  transform: scale(0.97);
}

.button:focus {
  outline: 2px solid rgba(255, 255, 255, 0.5);
  outline-offset: 2px;
}
```

## Game Pieces (SVG Recommended Implementation)

```css
/* For SVG implementation */
.x-symbol svg {
  width: 70%;
  height: 70%;
  stroke: var(--x-symbol);
  stroke-width: 10%;
  stroke-linecap: round;
  fill: none;
}

.o-symbol svg {
  width: 70%;
  height: 70%;
  stroke: var(--o-symbol);
  stroke-width: 10%;
  fill: none;
}
```

```html
<!-- SVG Templates -->
<template id="x-template">
  <svg viewBox="0 0 100 100">
    <line x1="20" y1="20" x2="80" y2="80" />
    <line x1="80" y1="20" x2="20" y2="80" />
  </svg>
</template>

<template id="o-template">
  <svg viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="30" />
  </svg>
</template>
```

## Game Over Modal

```css
.game-over-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 10;
  opacity: 0;
  visibility: hidden;
  transition: opacity var(--transition-normal), visibility var(--transition-normal);
}

.game-over-modal.active {
  opacity: 1;
  visibility: visible;
}

.modal-content {
  background-color: var(--panel-background);
  padding: var(--spacing-lg);
  border-radius: var(--border-radius-md);
  text-align: center;
  max-width: 300px;
  width: 100%;
  transform: translateY(20px);
  transition: transform var(--transition-normal);
}

.game-over-modal.active .modal-content {
  transform: translateY(0);
}

.result-message {
  font-size: 24px;
  margin-bottom: var(--spacing-md);
}

.result-x {
  color: var(--x-symbol);
}

.result-o {
  color: var(--o-symbol);
}

.result-draw {
  color: var(--text-primary);
}
```

## Responsive Design

```css
@media (max-width: 480px) {
  .game-title {
    font-size: 24px;
  }
  
  .status {
    font-size: 18px;
  }
  
  .cell {
    font-size: 50px;
  }
  
  .controls {
    flex-direction: column;
    align-items: stretch;
  }
  
  .button {
    width: 100%;
  }
}

@media (min-width: 768px) {
  .game-container {
    padding: var(--spacing-lg);
  }
  
  .game-board {
    gap: 3px;
  }
}
```

## JavaScript Animation Options

For implementing the animations with JavaScript, consider these timing values:

```javascript
const animations = {
  symbolAppear: 300, // ms
  winHighlight: 500, // ms
  boardReset: 200, // ms
  modalFade: 300, // ms
};
```

## Accessibility

- Ensure all interactive elements have proper focus states
- Use appropriate ARIA labels for game status
- Ensure sufficient color contrast (WCAG AA compliance)
- Consider keyboard navigation between cells
- Example aria attributes:

```html
<div class="cell" tabindex="0" aria-label="Cell 1-1, empty" role="button"></div>
<div class="cell x" aria-label="Cell 1-2, marked with X" role="button"></div>
<div class="status" aria-live="polite">Player X's turn</div>
```
