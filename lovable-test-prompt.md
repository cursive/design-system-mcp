# Lovable Test: Complete Component Interface Verification

Please test that you can read the `cursive-design-system@1.0.5` package correctly by running this comprehensive verification:

## 1. Import and Basic Verification
```javascript
import { manifest, structure } from 'cursive-design-system';
```

First, verify the basic structure:
- `manifest.components.length` should be 39
- `structure.atoms.length` should be 8
- `structure.molecules.length` should be 23
- `structure.organisms.length` should be 7
- `structure.templates.length` should be 1

## 2. Test Key Components with Complete Props

### Banner Component (Molecule)
Find the Banner component and show:
- All 7 props: children, type, showLeftIcon, showRightIcon, dismissible, className, onClose
- Each prop's type and description
- Confirm it has the BannerType union type

### Button Component (Molecule)
Find the Button component and show:
- Whether it has props defined or not
- If it has props, list them all

### Carousel Component (Organism)
Find the Carousel component and show:
- All 3 props: variant, images, className
- The variant options: [desktop, default, mobile-desktop]
- Confirm it has variants defined

### Dialogue Component (Molecule)
Find the Dialogue component and show:
- All 13 props (this is the most complex component)
- The DialogueVariant union type options

## 3. Complete Component Breakdown

List ALL components by category with their prop counts:

**ATOMS (8 components):**
- List each atom and whether it has props

**MOLECULES (23 components):**
- List each molecule with prop count
- Show the 3 most complex ones (highest prop counts)

**ORGANISMS (7 components):**
- List each organism with prop count
- Show which ones have variants

**TEMPLATES (1 component):**
- List the template and its props

## 4. Union Type Verification

Find and list all components that have union type options in their props (like `[desktop | default | mobile-desktop]`).

## 5. Raw Manifest Access

Display the raw manifest entry for the Banner component to prove you can access the complete prop information including types, descriptions, and requirements.

## 6. Summary Statistics

Provide these exact numbers:
- Total components: ?
- Components with props: ?
- Components with variants: ?
- Most complex component (highest prop count): ?
- Components with union types: ?

## Expected Results

You should be able to show that the Banner component has exactly these 7 props:
1. `children: string` - Banner content text
2. `type: BannerType` - Banner type/color scheme  
3. `showLeftIcon: boolean` - Whether to show the left icon
4. `showRightIcon: boolean` - Whether to show the right close icon
5. `dismissible: boolean` - Whether the banner is dismissible
6. `className: string` - Additional CSS class name
7. `onClose: function` - Close handler for dismissible banners

This will prove that the package now exposes ALL component props with complete metadata, types, descriptions, and requirements!
