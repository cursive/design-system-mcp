// Design System Entry Point
export * from './tokens';

// Atoms
export * from './atoms';

// Molecules
export * from './molecules';

// Organisms
export * from './organisms';

// Templates
export * from './templates';

// Export manifest for atomic design structure
export { default as manifest } from './__manifests__/index.json';

// Export simple structure for easy access
export const structure = {
  atoms: ['RadioIcon', 'Icon', 'PlaceholderIcon', 'CheckIcon', 'ChevronDownIcon', 'CirclePauseIcon', 'PackageIcon'],
  molecules: ['PanelHeader', 'Button', 'Textfield', 'Select', 'TextArea', 'CheckboxLine', 'RadioInline', 'SelectItem', 'SelectList', 'Tile', 'TileMultiItem', 'IconLine', 'Banner', 'CarouselNav', 'CarouselPips', 'PageHeader', 'FooterPDP', 'PageDivider', 'FAQCell', 'StarRating', 'AddOn', 'Dialogue', 'Lists'],
  organisms: ['Carousel', 'Supporting', 'Reviews', 'FAQ', 'HowItWorks', 'Membership', 'Hero'],
  templates: ['PDPTemplate'],
  tokens: ['colors', 'spacing', 'typography']
};

// Import base styles
import './tokens/base.css';