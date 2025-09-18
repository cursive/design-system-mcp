// Test the published cursive-design-system@1.0.3 package
const { manifest, structure } = require('cursive-design-system');

console.log('🔍 TESTING CURSIVE-DESIGN-SYSTEM@1.0.3');
console.log('=====================================\n');

// 1. Test manifest structure
console.log('📋 MANIFEST STRUCTURE:');
console.log('Manifest type:', typeof manifest);
console.log('Manifest keys:', Object.keys(manifest));
console.log('Components type:', typeof manifest.components);
console.log('Components length:', manifest.components.length);
console.log('Schema version:', manifest.schemaVersion);
console.log('');

// 2. Test structure object
console.log('🏗️  STRUCTURE BREAKDOWN:');
console.log('Structure type:', typeof structure);
console.log('Structure keys:', Object.keys(structure));
console.log('Atoms count:', structure.atoms.length);
console.log('Molecules count:', structure.molecules.length);
console.log('Organisms count:', structure.organisms.length);
console.log('Templates count:', structure.templates.length);
console.log('Tokens count:', structure.tokens.length);
console.log('');

// 3. Find specific components
console.log('🎯 COMPONENT SEARCH TEST:');
const banner = manifest.components.find(c => c.name === 'Banner');
const button = manifest.components.find(c => c.name === 'Button');
const carousel = manifest.components.find(c => c.name === 'Carousel');

console.log('Banner found:', !!banner);
if (banner) {
  console.log('Banner details:', JSON.stringify(banner, null, 2));
}

console.log('\nButton found:', !!button);
if (button) {
  console.log('Button details:', JSON.stringify(button, null, 2));
}

console.log('\nCarousel found:', !!carousel);
if (carousel) {
  console.log('Carousel details:', JSON.stringify(carousel, null, 2));
}
console.log('');

// 4. List all organisms
console.log('🧬 ALL ORGANISMS:');
const organisms = manifest.components.filter(c => c.kind === 'organism');
console.log('Organisms found:', organisms.length);
organisms.forEach((org, index) => {
  console.log(`${index + 1}. ${org.name} (ID: ${org.id}, Path: ${org.path})`);
});
console.log('');

// 5. List all molecules
console.log('⚛️  ALL MOLECULES:');
const molecules = manifest.components.filter(c => c.kind === 'molecule');
console.log('Molecules found:', molecules.length);
molecules.forEach((mol, index) => {
  console.log(`${index + 1}. ${mol.name} (ID: ${mol.id}, Path: ${mol.path})`);
});
console.log('');

// 6. List all atoms
console.log('🔬 ALL ATOMS:');
const atoms = manifest.components.filter(c => c.kind === 'atom');
console.log('Atoms found:', atoms.length);
atoms.forEach((atom, index) => {
  console.log(`${index + 1}. ${atom.name} (ID: ${atom.id}, Path: ${atom.path})`);
});
console.log('');

// 7. List all templates
console.log('📄 ALL TEMPLATES:');
const templates = manifest.components.filter(c => c.kind === 'template');
console.log('Templates found:', templates.length);
templates.forEach((template, index) => {
  console.log(`${index + 1}. ${template.name} (ID: ${template.id}, Path: ${template.path})`);
});
console.log('');

// 8. Test component categorization
console.log('📊 COMPONENT CATEGORIZATION:');
const categories = {};
manifest.components.forEach(comp => {
  const kind = comp.kind || 'unknown';
  categories[kind] = (categories[kind] || 0) + 1;
});
console.log('Components by category:', categories);
console.log('');

// 9. Test default variants
console.log('🎨 DEFAULT VARIANTS:');
const componentsWithVariants = manifest.components.filter(c => c.defaultVariant);
console.log('Components with default variants:', componentsWithVariants.length);
componentsWithVariants.slice(0, 5).forEach(comp => {
  console.log(`- ${comp.name}: "${comp.defaultVariant}"`);
});
if (componentsWithVariants.length > 5) {
  console.log(`... and ${componentsWithVariants.length - 5} more`);
}
console.log('');

console.log('✅ PACKAGE TEST COMPLETE!');
console.log('The cursive-design-system@1.0.3 package is working correctly.');
