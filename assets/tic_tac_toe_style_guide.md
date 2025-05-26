# Tic Tac Toe Game - Technical Style Guide

## Overview
This document provides comprehensive design specifications for the Tic Tac Toe game interface. The game features a modern, clean design with a dark color scheme, rounded elements, and clear visual indicators for game state.

## Color Palette

### Primary Colors
- `--bg-primary`: #1E1F23 (Dark background)
- `--bg-secondary`: #2C2D33 (Game board background)
- `--accent-primary`: #5269DF (Blue accent color for "X" player)
- `--accent-secondary`: #FFCC33 (Yellow accent color for "O" player)
- `--text-primary`: #FFFFFF (White text)
- `--text-secondary`: #92939A (Muted text)
- `--divider-color`: #3A3B41 (Grid lines/dividers)
- `--button-hover`: #34353B (Button hover state)

## Typography

- **Primary Font**: Inter, Helvetica Neue, Arial, sans-serif
- **Heading Sizes**:
  - Game title: 28px, bold
  - Player turn indicator: 18px, medium
  - Score labels: 14px, medium
  - Score numbers: 24px, bold
- **Button Text**: 16px, medium
- **Player Markers**: 64px, bold (for the X and O symbols in the grid)

## Layout

### Game Container
- Width: 360px - 400px
- Height: ~600px
- Background: `--bg-primary`
- Padding: 24px
- Border radius: 16px
- Box shadow: 0px 8px 24px rgba(0, 0, 0, 0.2)

### Header
- Display: flex
- Justify content: space-between
- Align items: center
- Margin bottom: 24px

### Game Board
- Display: grid
- Grid template: 3×3
- Gap: 12px
- Background: `--bg-secondary`
- Border radius: 12px
- Padding: 12px

### Game Cells
- Width: ~90px
- Height: ~90px
- Background: `--bg-primary`
- Border radius: 8px
- Display: flex
- Justify content: center
- Align items: center
- Cursor: pointer
- Transition: background-color 0.2s ease

### Score Container
- Display: flex
- Justify content: space-between
- Margin top: 24px
- Gap: 12px

### Score Cards
- Flex: 1
- Background: `--bg-secondary`
- Border radius: 12px
- Padding: 16px
- Text align: center

### Action Buttons
- Padding: 12px 16px
- Border radius: 8px
- Background: `--bg-secondary`
- Border: none
- Cursor: pointer
- Transition: background-color 0.2s ease
- Hover background: `--button-hover`

## Game State Indicators

### Player Turn
- Current player's name is highlighted with their respective color
- Respective marker icon (X or O) appears next to the active player

### Win State
- Winning cells have a subtle glow or highlight effect
- Winner's score increments immediately

### Restart Button
- Located at the bottom of the screen
- Text color: `--text-primary`
- Icon: refresh/restart icon to the left of the text

## Icons and Graphics

### Player Markers
- X marker: Custom "X" in `--accent-primary` color
- O marker: Custom "O" in `--accent-secondary` color

### Action Icons
- Restart icon: Simple circular arrow icon
- All icons should maintain consistent stroke width and style

## Responsive Behavior
- Game container maintains aspect ratio
- Minimum width: 320px
- On smaller screens (< 360px), reduce padding to 16px
- Game board cells should always maintain a square aspect ratio

## Animations

### Marker Placement
- Subtle fade-in animation when a marker is placed
- Duration: 200ms
- Timing function: ease-out

### Win Condition
- Winning line could have a pulse or glow animation
- Duration: 500ms
- Timing function: ease-in-out

### Button Interactions
- Scale slightly (1.05x) on hover
- Duration: 100ms
- Timing function: ease

## Accessibility Guidelines

- Maintain color contrast ratio of at least 4.5:1 for text
- Include focus states for all interactive elements
- Game board cells should have appropriate aria labels
- Include a game status announcer for screen readers

## Component Spacing

### Vertical Spacing
- Between title and game board: 24px
- Between game board and scores: 24px
- Between scores and action buttons: 24px

### Internal Component Padding
- Game board cells: 12px
- Score containers: 16px
- Buttons: 12px 16px (vertical, horizontal)

This style guide provides the foundation for implementing a visually consistent and usable Tic Tac Toe game interface.
