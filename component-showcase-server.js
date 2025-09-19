const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static('.'));

// Proxy for npm packages
app.use('/node_modules', createProxyMiddleware({
    target: 'https://unpkg.com',
    changeOrigin: true,
    pathRewrite: {
        '^/node_modules': ''
    }
}));

// Main route
app.get('/', (req, res) => {
    res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Design System Component Showcase</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #333;
            background: #f8f9fa;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }

        .header {
            text-align: center;
            margin-bottom: 40px;
            padding: 40px 0;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border-radius: 12px;
        }

        .header h1 {
            font-size: 2.5rem;
            margin-bottom: 10px;
        }

        .header p {
            font-size: 1.2rem;
            opacity: 0.9;
        }

        .stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-bottom: 40px;
        }

        .stat-card {
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            text-align: center;
        }

        .stat-number {
            font-size: 2rem;
            font-weight: bold;
            color: #667eea;
            margin-bottom: 5px;
        }

        .stat-label {
            color: #666;
            font-size: 0.9rem;
        }

        .category {
            margin-bottom: 40px;
        }

        .category-header {
            background: white;
            padding: 20px;
            border-radius: 8px 8px 0 0;
            border-bottom: 3px solid #667eea;
            margin-bottom: 0;
        }

        .category-title {
            font-size: 1.8rem;
            color: #333;
            margin-bottom: 5px;
        }

        .category-count {
            color: #666;
            font-size: 1rem;
        }

        .components-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 20px;
            background: white;
            padding: 20px;
            border-radius: 0 0 8px 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .component-card {
            border: 1px solid #e1e5e9;
            border-radius: 8px;
            padding: 20px;
            transition: all 0.3s ease;
        }

        .component-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        }

        .component-name {
            font-size: 1.2rem;
            font-weight: bold;
            color: #333;
            margin-bottom: 8px;
        }

        .component-id {
            font-size: 0.8rem;
            color: #666;
            background: #f1f3f4;
            padding: 2px 8px;
            border-radius: 4px;
            display: inline-block;
            margin-bottom: 10px;
        }

        .component-path {
            font-size: 0.9rem;
            color: #888;
            font-family: 'Monaco', 'Menlo', monospace;
            margin-bottom: 15px;
        }

        .props-section {
            margin-top: 15px;
        }

        .props-title {
            font-size: 0.9rem;
            font-weight: bold;
            color: #333;
            margin-bottom: 8px;
        }

        .props-list {
            list-style: none;
        }

        .prop-item {
            font-size: 0.8rem;
            color: #555;
            margin-bottom: 4px;
            padding: 2px 0;
        }

        .prop-name {
            font-weight: bold;
            color: #333;
        }

        .prop-type {
            color: #667eea;
            font-family: 'Monaco', 'Menlo', monospace;
        }

        .prop-required {
            color: #e74c3c;
            font-size: 0.7rem;
        }

        .prop-optional {
            color: #27ae60;
            font-size: 0.7rem;
        }

        .variants-section {
            margin-top: 10px;
        }

        .variants-title {
            font-size: 0.9rem;
            font-weight: bold;
            color: #333;
            margin-bottom: 5px;
        }

        .variants-list {
            display: flex;
            flex-wrap: wrap;
            gap: 5px;
        }

        .variant-tag {
            background: #667eea;
            color: white;
            padding: 2px 8px;
            border-radius: 12px;
            font-size: 0.7rem;
        }

        .no-props {
            color: #999;
            font-style: italic;
            font-size: 0.9rem;
        }

        .loading {
            text-align: center;
            padding: 40px;
            color: #666;
        }

        .error {
            background: #fee;
            color: #c33;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
        }

        @media (max-width: 768px) {
            .container {
                padding: 10px;
            }
            
            .header h1 {
                font-size: 2rem;
            }
            
            .components-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div id="root"></div>

    <script type="text/babel">
        const { useState, useEffect } = React;

        function ComponentShowcase() {
            const [manifest, setManifest] = useState(null);
            const [structure, setStructure] = useState(null);
            const [loading, setLoading] = useState(true);
            const [error, setError] = useState(null);

            useEffect(() => {
                loadComponents();
            }, []);

            async function loadComponents() {
                try {
                    // Fetch the manifest from the npm package
                    const response = await fetch('https://unpkg.com/cursive-design-system@1.0.5/dist/index.js');
                    const text = await response.text();
                    
                    // Create a module-like object to extract exports
                    const module = { exports: {} };
                    const exports = {};
                    
                    // Execute the module code in a safe context
                    const func = new Function('module', 'exports', text);
                    func(module, exports);
                    
                    // Extract manifest and structure
                    const manifestData = module.exports.manifest || exports.manifest;
                    const structureData = module.exports.structure || exports.structure;
                    
                    if (!manifestData) {
                        throw new Error('Could not load manifest from package');
                    }
                    
                    setManifest(manifestData);
                    setStructure(structureData);
                    setLoading(false);
                } catch (err) {
                    console.error('Error loading components:', err);
                    setError(err.message);
                    setLoading(false);
                }
            }

            if (loading) {
                return (
                    <div className="container">
                        <div className="header">
                            <h1>Design System Component Showcase</h1>
                            <p>Complete component library from cursive-design-system@1.0.5</p>
                        </div>
                        <div className="loading">
                            Loading components from npm package...
                        </div>
                    </div>
                );
            }

            if (error) {
                return (
                    <div className="container">
                        <div className="header">
                            <h1>Design System Component Showcase</h1>
                            <p>Complete component library from cursive-design-system@1.0.5</p>
                        </div>
                        <div className="error">
                            Error: {error}
                        </div>
                    </div>
                );
            }

            return (
                <div className="container">
                    <div className="header">
                        <h1>Design System Component Showcase</h1>
                        <p>Complete component library from cursive-design-system@1.0.5</p>
                    </div>

                    <Stats manifest={manifest} structure={structure} />
                    <Components manifest={manifest} />
                </div>
            );
        }

        function Stats({ manifest, structure }) {
            const totalComponents = manifest.components.length;
            const componentsWithProps = manifest.components.filter(c => c.props && Object.keys(c.props).length > 0).length;
            const componentsWithVariants = manifest.components.filter(c => c.variants && c.variants.length > 0).length;

            return (
                <div className="stats">
                    <div className="stat-card">
                        <div className="stat-number">{totalComponents}</div>
                        <div className="stat-label">Total Components</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-number">{componentsWithProps}</div>
                        <div className="stat-label">With Props</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-number">{componentsWithVariants}</div>
                        <div className="stat-label">With Variants</div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-number">{structure.atoms.length + structure.molecules.length + structure.organisms.length + structure.templates.length}</div>
                        <div className="stat-label">By Category</div>
                    </div>
                </div>
            );
        }

        function Components({ manifest }) {
            const categories = {
                atoms: manifest.components.filter(c => c.kind === 'atom'),
                molecules: manifest.components.filter(c => c.kind === 'molecule'),
                organisms: manifest.components.filter(c => c.kind === 'organism'),
                templates: manifest.components.filter(c => c.kind === 'template')
            };

            return (
                <div>
                    {Object.entries(categories).map(([categoryName, components]) => {
                        if (components.length === 0) return null;
                        
                        return (
                            <div key={categoryName} className="category">
                                <div className="category-header">
                                    <div className="category-title">{categoryName.toUpperCase()}</div>
                                    <div className="category-count">{components.length} components</div>
                                </div>
                                <div className="components-grid">
                                    {components.map(component => (
                                        <ComponentCard key={component.id} component={component} />
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            );
        }

        function ComponentCard({ component }) {
            const hasProps = component.props && Object.keys(component.props).length > 0;
            const hasVariants = component.variants && component.variants.length > 0;

            return (
                <div className="component-card">
                    <div className="component-name">{component.name}</div>
                    <div className="component-id">{component.id}</div>
                    <div className="component-path">{component.path}</div>
                    
                    {hasProps ? (
                        <div className="props-section">
                            <div className="props-title">Props ({Object.keys(component.props).length})</div>
                            <ul className="props-list">
                                {Object.entries(component.props).map(([propName, propInfo]) => (
                                    <li key={propName} className="prop-item">
                                        <span className="prop-name">{propName}</span>: 
                                        <span className="prop-type">{propInfo.type}</span>
                                        <span className={propInfo.required ? 'prop-required' : 'prop-optional'}>
                                            ({propInfo.required ? 'required' : 'optional'})
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        <div className="no-props">No props defined</div>
                    )}
                    
                    {hasVariants && (
                        <div className="variants-section">
                            <div className="variants-title">Variants</div>
                            <div className="variants-list">
                                {component.variants.map(variant => (
                                    <span key={variant.name} className="variant-tag">{variant.name}</span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            );
        }

        ReactDOM.render(<ComponentShowcase />, document.getElementById('root'));
    </script>
</body>
</html>
  `);
}

app.listen(PORT, () => {
    console.log(`🚀 Component Showcase Server running at http://localhost:${PORT}`);
    console.log(`📦 Loading components from cursive-design-system@1.0.5`);
});
