# Tic Tac Toe Game - Technical Style Guide

## Color Palette

### Primary Colors
- `--primary-bg`: #FFFFFF (White background)
- `--primary-text`: #333333 (Dark gray text)
- `--accent-x`: #FF5252 (Red for X player)
- `--accent-o`: #2196F3 (Blue for O player)

### Secondary Colors
- `--grid-lines`: #CCCCCC (Light gray for grid lines)
- `--hover-bg`: #F5F5F5 (Very light gray for hover states)
- `--win-highlight`: #4CAF50 (Green for win highlighting)
- `--draw-color`: #9E9E9E (Medium gray for draw state)

### UI Element Colors
- `--button-bg`: #E0E0E0 (Light gray button background)
- `--button-hover`: #D0D0D0 (Slightly darker button hover)
- `--button-text`: #333333 (Dark text on buttons)
- `--shadow-color`: rgba(0, 0, 0, 0.1) (Subtle shadow)

## Typography

### Font Families
- **Primary Font**: 'Roboto', 'Helvetica Neue', Arial, sans-serif
- **Display Font** (for game title): 'Poppins', 'Roboto', sans-serif
- **Monospace Font** (alternative for markers): 'Roboto Mono', monospace

### Font Sizes
- Game Title: 28px (desktop), 24px (mobile)
- Subtitle/Tagline: 16px
- Game Status: 18px (desktop), 16px (mobile)
- Button Text: 16px
- X/O Markers: Dynamic sizing based on cell dimensions (approximately 60% of cell width)

### Font Weights
- Game Title: 700 (Bold)
- Status Text: 400 (Regular)
- Button Text: 500 (Medium)
- X/O Markers: 700 (Bold)

### Letter Spacing
- Game Title: 0.05em
- Button Text: 0.03em

## Spacing System

### Base Unit
- Base spacing unit: 8px

### Margins & Padding
- Container padding: 16px (mobile), 24px (tablet), 32px (desktop)
- Game board outer margin: 24px top, 16px bottom
- Cell padding: 8px (for marker placement)
- Button padding: 8px 16px

### Grid Specifications
- Grid gap: 8px (mobile), 12px (desktop)
- Cell dimensions: Equal width and height, responsive to viewport
- Minimum cell size: 80px × 80px (desktop), 64px × 64px (mobile)
- Maximum cell size: 120px × 120px

## Layout

### Container
- Max width: 500px
- Centered in viewport
- 16px minimum margin on all sides

### Grid Layout
- CSS Grid: 3×3 with equal column and row dimensions
- Gap: 8px between cells
- Line thickness: 3px solid var(--grid-lines)

### Positioning
- Primary layout: Flex column for vertical stacking
- Board positioning: Centered horizontally
- Status and controls: Centered below board

## Navigation & Controls

### Button Styles
- Height: 40px
- Border-radius: 8px
- Transition: 0.2s ease for hover/active states
- Box-shadow: 0 2px 4px var(--shadow-color)
- Hover effect: Slight darkening and shadow increase

## Interactive Elements

### Game Cell States
1. **Empty Cell**
   - Background: var(--primary-bg)
   - Border: 3px solid var(--grid-lines)
   - Cursor: pointer

2. **Hover State** (empty cells only)
   - Background: var(--hover-bg)
   - Transition: background-color 0.15s ease

3. **X Cell**
   - Content: "X" character or custom SVG
   - Color: var(--accent-x)
   - Centered in cell

4. **O Cell**
   - Content: "O" character or custom SVG
   - Color: var(--accent-o)
   - Centered in cell

5. **Win Highlighted Cell**
   - Border or background: Adjusted to var(--win-highlight)
   - Possible animation: Pulse or glow effect

### Button States
1. **Default**
   - Background: var(--button-bg)
   - Color: var(--button-text)

2. **Hover**
   - Background: var(--button-hover)
   - Cursor: pointer

3. **Active/Pressed**
   - Transform: scale(0.98)
   - Box-shadow: 0 1px 2px var(--shadow-color)

## Animations & Transitions

### Timing
- Fast transitions: 150-200ms
- Medium transitions: 200-300ms
- Slow animations: 400-500ms

### Animation Types
1. **Marker Placement**: Fade in or scale up when X or O is placed
2. **Win Detection**: Highlight winning row/column/diagonal with color change
3. **Reset/New Game**: Quick fade transition for board reset

### Easing Functions
- Default transitions: ease or ease-out
- Emphasis animations: cubic-bezier(0.175, 0.885, 0.32, 1.275)

## Responsive Breakpoints

- **Small Mobile**: < 375px
  - Cell size: ~64px
  - Font sizes reduced by 10%
  - Compact spacing

- **Mobile**: 376px - 767px
  - Cell size: ~80px
  - Standard mobile font sizes
  - Standard spacing

- **Tablet**: 768px - 1023px
  - Cell size: ~100px
  - Increased spacing between elements

- **Desktop**: > 1024px
  - Cell size: 100-120px
  - Full spacing system
  - Enhanced hover states

## Accessibility Guidelines

- Contrast ratio minimum: 4.5:1 for text, 3:1 for UI elements
- Focus indicators: 2px solid outline for keyboard navigation
- Touch targets: Minimum 44×44px for all interactive elements
- Screen reader text: Status changes announced via ARIA live regions
- Keyboard navigation: Full support for tab navigation and space/enter activation

## Technical Implementation Notes

- Use CSS custom properties (variables) for consistent theming
- Implement responsive grid using CSS Grid layout
- Use flexbox for vertical element stacking
- Consider SVG for X and O markers for crisp rendering at all sizes
- Use media queries to adjust sizes and spacing at different breakpoints
- Implement game logic separate from UI rendering for clean architecture
