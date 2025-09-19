import React, { useState, useEffect } from 'react';
import { manifest, structure } from 'cursive-design-system';

const ComponentShowcase: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        try {
            setLoading(false);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Unknown error');
            setLoading(false);
        }
    }, []);

    if (loading) {
        return (
            <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
                Loading components from npm package...
            </div>
        );
    }

    if (error) {
        return (
            <div style={{ background: '#fee', color: '#c33', padding: '20px', borderRadius: '8px', margin: '20px 0' }}>
                Error: {error}
            </div>
        );
    }

    const totalComponents = manifest.components.length;
    const componentsWithProps = manifest.components.filter(c => c.props && Object.keys(c.props).length > 0).length;
    const componentsWithVariants = manifest.components.filter(c => c.variants && c.variants.length > 0).length;

    const categories = {
        atoms: manifest.components.filter(c => c.kind === 'atom'),
        molecules: manifest.components.filter(c => c.kind === 'molecule'),
        organisms: manifest.components.filter(c => c.kind === 'organism'),
        templates: manifest.components.filter(c => c.kind === 'template')
    };

    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
            {/* Header */}
            <div style={{
                textAlign: 'center',
                marginBottom: '40px',
                padding: '40px 0',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                borderRadius: '12px'
            }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Design System Component Showcase</h1>
                <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>Complete component library from cursive-design-system@1.0.5</p>
            </div>

            {/* Stats */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '20px',
                marginBottom: '40px'
            }}>
                <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', textAlign: 'center' }}>
                    <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#667eea', marginBottom: '5px' }}>{totalComponents}</div>
                    <div style={{ color: '#666', fontSize: '0.9rem' }}>Total Components</div>
                </div>
                <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', textAlign: 'center' }}>
                    <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#667eea', marginBottom: '5px' }}>{componentsWithProps}</div>
                    <div style={{ color: '#666', fontSize: '0.9rem' }}>With Props</div>
                </div>
                <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', textAlign: 'center' }}>
                    <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#667eea', marginBottom: '5px' }}>{componentsWithVariants}</div>
                    <div style={{ color: '#666', fontSize: '0.9rem' }}>With Variants</div>
                </div>
                <div style={{ background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', textAlign: 'center' }}>
                    <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#667eea', marginBottom: '5px' }}>{structure.atoms.length + structure.molecules.length + structure.organisms.length + structure.templates.length}</div>
                    <div style={{ color: '#666', fontSize: '0.9rem' }}>By Category</div>
                </div>
            </div>

            {/* Components by Category */}
            {Object.entries(categories).map(([categoryName, components]) => {
                if (components.length === 0) return null;

                return (
                    <div key={categoryName} style={{ marginBottom: '40px' }}>
                        <div style={{
                            background: 'white',
                            padding: '20px',
                            borderRadius: '8px 8px 0 0',
                            borderBottom: '3px solid #667eea',
                            marginBottom: '0'
                        }}>
                            <div style={{ fontSize: '1.8rem', color: '#333', marginBottom: '5px' }}>{categoryName.toUpperCase()}</div>
                            <div style={{ color: '#666', fontSize: '1rem' }}>{components.length} components</div>
                        </div>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                            gap: '20px',
                            background: 'white',
                            padding: '20px',
                            borderRadius: '0 0 8px 8px',
                            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                        }}>
                            {components.map(component => (
                                <ComponentCard key={component.id} component={component} />
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

const ComponentCard: React.FC<{ component: any }> = ({ component }) => {
    const hasProps = component.props && Object.keys(component.props).length > 0;
    const hasVariants = component.variants && component.variants.length > 0;

    return (
        <div style={{
            border: '1px solid #e1e5e9',
            borderRadius: '8px',
            padding: '20px',
            transition: 'all 0.3s ease'
        }}>
            <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#333', marginBottom: '8px' }}>
                {component.name}
            </div>
            <div style={{
                fontSize: '0.8rem',
                color: '#666',
                background: '#f1f3f4',
                padding: '2px 8px',
                borderRadius: '4px',
                display: 'inline-block',
                marginBottom: '10px'
            }}>
                {component.id}
            </div>
            <div style={{
                fontSize: '0.9rem',
                color: '#888',
                fontFamily: 'Monaco, Menlo, monospace',
                marginBottom: '15px'
            }}>
                {component.path}
            </div>

            {hasProps ? (
                <div style={{ marginTop: '15px' }}>
                    <div style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#333', marginBottom: '8px' }}>
                        Props ({Object.keys(component.props).length})
                    </div>
                    <ul style={{ listStyle: 'none' }}>
                        {Object.entries(component.props).map(([propName, propInfo]: [string, any]) => (
                            <li key={propName} style={{ fontSize: '0.8rem', color: '#555', marginBottom: '4px', padding: '2px 0' }}>
                                <span style={{ fontWeight: 'bold', color: '#333' }}>{propName}</span>:
                                <span style={{ color: '#667eea', fontFamily: 'Monaco, Menlo, monospace' }}> {propInfo.type}</span>
                                <span style={{ color: propInfo.required ? '#e74c3c' : '#27ae60', fontSize: '0.7rem' }}>
                                    ({propInfo.required ? 'required' : 'optional'})
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div style={{ color: '#999', fontStyle: 'italic', fontSize: '0.9rem' }}>No props defined</div>
            )}

            {hasVariants && (
                <div style={{ marginTop: '10px' }}>
                    <div style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#333', marginBottom: '5px' }}>Variants</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                        {component.variants.map((variant: any) => (
                            <span key={variant.name} style={{
                                background: '#667eea',
                                color: 'white',
                                padding: '2px 8px',
                                borderRadius: '12px',
                                fontSize: '0.7rem'
                            }}>
                                {variant.name}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ComponentShowcase;
