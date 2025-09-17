# Design System Components

This is a React component library built from Figma designs using atomic design principles.

## Usage

### Option A: Import individual components (recommended for tree-shaking)
```javascript
import { Button } from './components/Button';
import { Carousel } from './components/Carousel';
import { Supporting } from './components/Supporting';
```

### Option B: Import everything from main entry
```javascript
import { Button, Carousel, Supporting } from './index';
```

### Option C: Import design tokens separately
```javascript
import { tokens } from './tokens';
```

## Structure

- `components/` - Individual component files for tree-shaking
- `tokens.js` - Design tokens (colors, spacing, typography)
- `index.js` - Main entry point - exports everything
- `style.css` - All component styles

## Available Components

### Molecules
- `Button` - Interactive button component
- `PanelHeader` - Section header with optional icon
- `StarRating` - Star rating display

### Organisms
- `Carousel` - Image carousel with navigation
- `Supporting` - "Who you're supporting" section
- `Reviews` - Customer reviews section
- `FAQ` - Frequently asked questions
- `HowItWorks` - Step-by-step process explanation
- `Membership` - Membership selection interface
- `Hero` - Hero banner component

### Templates
- `PDPTemplate` - Product detail page template

## Styling

Import the main CSS file to get all component styles:
```javascript
import './style.css';
```

## Design Tokens

Access design tokens for consistent theming:
```javascript
import { colors, spacing, typography } from './tokens';
```
