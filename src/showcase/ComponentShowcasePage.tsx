import React, { useState, useEffect } from 'react';
import {
    Banner, Button, Carousel, Dialogue, FAQ, Reviews, Supporting,
    HowItWorks, Membership, StarRating, RadioInline,
    TileMultiItem, CarouselNav, CarouselPips, IconLine, CheckIcon,
    PanelHeader, Textfield, TextArea, Select, SelectItem, SelectList,
    CheckboxLine, AddOn, PageDivider, PageHeader, FooterPDP, Lists,
    Tile, RadioIcon, ChevronDownIcon, CirclePauseIcon, PackageIcon,
    CalendarFoldIcon, Hero, FAQCell, PlaceholderIcon, PDPTemplate
} from 'cursive-design-system';
import 'cursive-design-system/dist/style.css';

const ComponentShowcasePage: React.FC = () => {
    const [manifest, setManifest] = useState<any>(null);
    const [structure, setStructure] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedComponent, setSelectedComponent] = useState<any>(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        loadComponents();
    }, []);

    async function loadComponents() {
        try {
            // Import from the published npm package
            const { manifest: manifestData, structure: structureData } = await import('cursive-design-system');

            if (!manifestData) {
                throw new Error('Could not load manifest from npm package');
            }

            setManifest(manifestData);
            setStructure(structureData);
            setLoading(false);
        } catch (err) {
            console.error('Error loading components:', err);
            setError(err instanceof Error ? err.message : 'Unknown error');
            setLoading(false);
        }
    }

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
    const componentsWithProps = manifest.components.filter((c: any) => c.props && Object.keys(c.props).length > 0).length;
    const componentsWithVariants = manifest.components.filter((c: any) => c.variants && c.variants.length > 0).length;

    const categories = {
        atoms: manifest.components.filter((c: any) => c.kind === 'atom'),
        molecules: manifest.components.filter((c: any) => c.kind === 'molecule'),
        organisms: manifest.components.filter((c: any) => c.kind === 'organism'),
        templates: manifest.components.filter((c: any) => c.kind === 'template')
    };

    return (
        <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '20px',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            background: '#f8f9fa',
            minHeight: '100vh'
        }}>
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
                    <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#667eea', marginBottom: '5px' }}>
                        {structure.atoms.length + structure.molecules.length + structure.organisms.length + structure.templates.length}
                    </div>
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
                            {components.map((component: any) => (
                                <ComponentCard
                                    key={component.id}
                                    component={component}
                                    onClick={() => {
                                        setSelectedComponent(component);
                                        setShowModal(true);
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                );
            })}

            {/* Modal */}
            {showModal && selectedComponent && (
                <ComponentModal
                    component={selectedComponent}
                    onClose={() => setShowModal(false)}
                />
            )}
        </div>
    );
};

const ComponentCard: React.FC<{ component: any; onClick: () => void }> = ({ component, onClick }) => {
    const hasProps = component.props && Object.keys(component.props).length > 0;
    const hasVariants = component.variants && component.variants.length > 0;

    return (
        <div style={{
            border: '1px solid #e1e5e9',
            borderRadius: '8px',
            padding: '20px',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
        }}
            onClick={onClick}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
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
                    <ul style={{ listStyle: 'none', padding: 0 }}>
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

const ComponentModal: React.FC<{ component: any; onClose: () => void }> = ({ component, onClose }) => {
    const [selectedVariant, setSelectedVariant] = useState(component.defaultVariant || 'default');

    const componentMap: { [key: string]: any } = {
        Banner, Button, Carousel, Dialogue, FAQ, Reviews, Supporting,
        HowItWorks, Membership, StarRating, RadioInline,
        TileMultiItem, CarouselNav, CarouselPips, IconLine, CheckIcon,
        PanelHeader, Textfield, TextArea, Select, SelectItem, SelectList,
        CheckboxLine, AddOn, PageDivider, PageHeader, FooterPDP, Lists,
        Tile, RadioIcon, ChevronDownIcon, CirclePauseIcon, PackageIcon,
        CalendarFoldIcon, Hero, FAQCell, PlaceholderIcon, PDPTemplate
    };

    const ComponentToRender = componentMap[component.name];

    const getDefaultProps = () => {
        const props: any = {};
        if (component.props) {
            Object.entries(component.props).forEach(([propName, propInfo]: [string, any]) => {
                if (propInfo.default !== undefined) {
                    props[propName] = propInfo.default;
                }
            });
        }
        if (component.variants && component.variants.length > 0) {
            props.variant = selectedVariant;
        }
        return props;
    };

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '20px'
        }}>
            <div style={{
                background: 'white',
                borderRadius: '12px',
                maxWidth: '90vw',
                maxHeight: '90vh',
                overflow: 'auto',
                position: 'relative'
            }}>
                {/* Header */}
                <div style={{
                    padding: '20px',
                    borderBottom: '1px solid #e1e5e9',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <div>
                        <h2 style={{ margin: 0, fontSize: '1.5rem', color: '#333' }}>{component.name}</h2>
                        <p style={{ margin: '5px 0 0 0', color: '#666', fontSize: '0.9rem' }}>{component.path}</p>
                    </div>
                    <button
                        onClick={onClose}
                        style={{
                            background: 'none',
                            border: 'none',
                            fontSize: '1.5rem',
                            cursor: 'pointer',
                            color: '#666',
                            padding: '5px'
                        }}
                    >
                        ×
                    </button>
                </div>

                {/* Variant Selector */}
                {component.variants && component.variants.length > 0 && (
                    <div style={{ padding: '20px', borderBottom: '1px solid #e1e5e9' }}>
                        <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>
                            Variant:
                        </label>
                        <select
                            value={selectedVariant}
                            onChange={(e) => setSelectedVariant(e.target.value)}
                            style={{
                                padding: '8px 12px',
                                borderRadius: '6px',
                                border: '1px solid #ddd',
                                fontSize: '1rem'
                            }}
                        >
                            {component.variants.map((variant: any) => (
                                <option key={variant.name} value={variant.name}>
                                    {variant.name}
                                </option>
                            ))}
                        </select>
                    </div>
                )}

                {/* Component Preview */}
                <div style={{ padding: '20px' }}>
                    <h3 style={{ margin: '0 0 15px 0', color: '#333' }}>Preview:</h3>
                    <div style={{
                        border: '2px dashed #ddd',
                        borderRadius: '8px',
                        padding: '20px',
                        minHeight: '100px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: '#f9f9f9',
                        fontFamily: 'inherit',
                        fontSize: 'inherit',
                        lineHeight: 'inherit'
                    }}>
                        {ComponentToRender ? (
                            <ComponentToRender {...getDefaultProps()} />
                        ) : (
                            <div style={{ color: '#999', fontStyle: 'italic' }}>
                                Component "{component.name}" not found in imports
                            </div>
                        )}
                    </div>
                </div>

                {/* Props Info */}
                {component.props && Object.keys(component.props).length > 0 && (
                    <div style={{ padding: '20px', borderTop: '1px solid #e1e5e9' }}>
                        <h3 style={{ margin: '0 0 15px 0', color: '#333' }}>Props:</h3>
                        <div style={{ fontFamily: 'Monaco, Menlo, monospace', fontSize: '0.9rem' }}>
                            {Object.entries(component.props).map(([propName, propInfo]: [string, any]) => (
                                <div key={propName} style={{ marginBottom: '8px', padding: '8px', background: '#f5f5f5', borderRadius: '4px' }}>
                                    <span style={{ fontWeight: 'bold', color: '#333' }}>{propName}</span>
                                    <span style={{ color: '#667eea' }}>: {propInfo.type}</span>
                                    <span style={{ color: propInfo.required ? '#e74c3c' : '#27ae60', fontSize: '0.8rem' }}>
                                        ({propInfo.required ? 'required' : 'optional'})
                                    </span>
                                    {propInfo.description && (
                                        <div style={{ color: '#666', fontSize: '0.8rem', marginTop: '4px' }}>
                                            {propInfo.description}
                                        </div>
                                    )}
                                    {propInfo.default !== undefined && (
                                        <div style={{ color: '#888', fontSize: '0.8rem', marginTop: '2px' }}>
                                            Default: {JSON.stringify(propInfo.default)}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ComponentShowcasePage;
