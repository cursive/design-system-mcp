#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to extract props from TypeScript interface
function extractPropsFromTypes(content) {
    const props = {};

    // Find interface definitions
    const interfaceRegex = /export interface (\w+)Props\s*\{([^}]+)\}/g;
    let match;

    while ((match = interfaceRegex.exec(content)) !== null) {
        const interfaceName = match[1];
        const interfaceBody = match[2];

        // Extract individual properties
        const propRegex = /\/\*\*\s*([^*]+)\s*\*\/\s*(\w+)\??:\s*([^;]+);/g;
        let propMatch;

        while ((propMatch = propRegex.exec(interfaceBody)) !== null) {
            const description = propMatch[1].trim();
            const propName = propMatch[2];
            const propType = propMatch[3].trim();
            const isOptional = propMatch[0].includes('?');

            // Parse the type and extract options if it's a union type
            let type = propType;
            let options = null;
            let defaultValue = null;

            // Handle union types like 'default' | 'success' | 'warning' | 'alert'
            if (propType.includes('|')) {
                const unionTypes = propType.split('|').map(t => t.trim().replace(/'/g, ''));
                if (unionTypes.every(t => /^[a-zA-Z0-9_-]+$/.test(t))) {
                    type = 'string';
                    options = unionTypes;
                    defaultValue = unionTypes[0];
                }
            }

            // Handle React types
            if (propType.includes('React.ReactNode')) {
                type = 'React.ReactNode';
            } else if (propType.includes('React.ReactElement')) {
                type = 'React.ReactElement';
            } else if (propType.includes('() => void')) {
                type = 'function';
            } else if (propType.includes('boolean')) {
                type = 'boolean';
            } else if (propType.includes('string')) {
                type = 'string';
            } else if (propType.includes('number')) {
                type = 'number';
            } else if (propType.includes('[]')) {
                type = 'array';
            }

            props[propName] = {
                type: type,
                description: description,
                required: !isOptional
            };

            if (options) {
                props[propName].options = options;
            }

            if (defaultValue) {
                props[propName].default = defaultValue;
            }
        }
    }

    return props;
}

// Function to find all component directories
function findComponentDirectories(srcPath) {
    const components = [];

    function scanDirectory(dir, category) {
        const items = fs.readdirSync(dir);

        for (const item of items) {
            const fullPath = path.join(dir, item);
            const stat = fs.statSync(fullPath);

            if (stat.isDirectory()) {
                // Check if this directory contains a component
                const indexPath = path.join(fullPath, 'index.ts');
                const typesPath = path.join(fullPath, `${item}.types.ts`);

                // For templates, check for .tsx files instead of index.ts
                const isTemplate = category === 'templates';
                const componentFile = isTemplate ? path.join(fullPath, `${item}.tsx`) : indexPath;

                if (fs.existsSync(componentFile)) {
                    const relativePath = path.relative(srcPath, fullPath);
                    components.push({
                        name: item,
                        category: category,
                        path: relativePath,
                        typesPath: fs.existsSync(typesPath) ? typesPath : null
                    });
                }
            } else if (category === 'templates' && item.endsWith('.tsx')) {
                // For templates, also check for .tsx files directly in the directory
                const componentName = item.replace('.tsx', '');
                const typesPath = path.join(dir, `${componentName}.types.ts`);

                components.push({
                    name: componentName,
                    category: category,
                    path: path.relative(srcPath, dir),
                    typesPath: fs.existsSync(typesPath) ? typesPath : null
                });
            }
        }
    }

    // Scan each category
    const categories = ['atoms', 'molecules', 'organisms', 'templates'];
    for (const category of categories) {
        const categoryPath = path.join(srcPath, category);
        if (fs.existsSync(categoryPath)) {
            scanDirectory(categoryPath, category);
        }
    }

    return components;
}

// Function to generate component manifest entry
function generateComponentEntry(component, index) {
    const entry = {
        id: `${component.category.charAt(0).toUpperCase()}${index + 1}`,
        name: component.name,
        kind: component.category.slice(0, -1), // Remove 's' from atoms, molecules, etc.
        path: component.path,
        hash: `${component.category.charAt(0).toLowerCase()}${index + 1}${Math.random().toString(36).substr(2, 3)}`,
        defaultVariant: "default"
    };

    // Add props if types file exists
    if (component.typesPath && fs.existsSync(component.typesPath)) {
        try {
            const typesContent = fs.readFileSync(component.typesPath, 'utf8');
            const props = extractPropsFromTypes(typesContent);

            if (Object.keys(props).length > 0) {
                entry.props = props;

                // Generate variants based on props with options
                const variants = [];
                const variantProps = {};

                for (const [propName, propInfo] of Object.entries(props)) {
                    if (propInfo.options && propInfo.options.length > 0) {
                        variantProps[propName] = propInfo.default || propInfo.options[0];
                    } else if (propInfo.default !== undefined) {
                        variantProps[propName] = propInfo.default;
                    }
                }

                if (Object.keys(variantProps).length > 0) {
                    entry.defaultVariant = variantProps;

                    // Create variants for each option of the first prop with options
                    const firstPropWithOptions = Object.entries(props).find(([_, info]) => info.options);
                    if (firstPropWithOptions) {
                        const [propName, propInfo] = firstPropWithOptions;
                        for (const option of propInfo.options) {
                            const variantProps = { ...entry.defaultVariant };
                            variantProps[propName] = option;
                            variants.push({
                                name: option,
                                props: variantProps
                            });
                        }
                    }
                }

                if (variants.length > 0) {
                    entry.variants = variants;
                }
            }
        } catch (error) {
            console.warn(`Warning: Could not parse types for ${component.name}: ${error.message}`);
        }
    }

    return entry;
}

// Main function
function generateManifest() {
    const srcPath = path.join(__dirname, 'src');
    const manifestPath = path.join(srcPath, '__manifests__', 'index.json');

    console.log('🔍 Scanning for components...');
    const components = findComponentDirectories(srcPath);
    console.log(`Found ${components.length} components`);

    // Group components by category
    const componentsByCategory = {
        atoms: components.filter(c => c.category === 'atoms'),
        molecules: components.filter(c => c.category === 'molecules'),
        organisms: components.filter(c => c.category === 'organisms'),
        templates: components.filter(c => c.category === 'templates')
    };

    // Generate manifest entries
    const manifestEntries = [];
    let idCounter = 1;

    for (const [category, categoryComponents] of Object.entries(componentsByCategory)) {
        for (const component of categoryComponents) {
            const entry = generateComponentEntry(component, idCounter - 1);
            entry.id = `${category.charAt(0).toUpperCase()}${idCounter}`;
            manifestEntries.push(entry);
            idCounter++;
        }
    }

    // Create the complete manifest
    const manifest = {
        schemaVersion: 1,
        components: manifestEntries,
        edges: [],
        icons: {
            placeholderPath: "atoms/placeholders/PlaceholderIcon"
        }
    };

    // Write the manifest
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 4));
    console.log(`✅ Generated manifest with ${manifestEntries.length} components`);
    console.log(`📁 Manifest written to: ${manifestPath}`);

    // Print summary
    console.log('\n📊 Component Summary:');
    for (const [category, categoryComponents] of Object.entries(componentsByCategory)) {
        console.log(`  ${category}: ${categoryComponents.length} components`);
    }

    console.log('\n🎯 Components with detailed props:');
    for (const entry of manifestEntries) {
        if (entry.props && Object.keys(entry.props).length > 0) {
            console.log(`  ${entry.name} (${entry.kind}): ${Object.keys(entry.props).length} props`);
        }
    }
}

// Run the script
if (require.main === module) {
    generateManifest();
}

module.exports = { generateManifest };
