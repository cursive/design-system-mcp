import React from 'react';
import { RadioIcon } from './atoms/RadioIcon';
import { Icon } from './atoms/Icon';
import { PlaceholderIcon } from './atoms/placeholders';
import { CheckIcon } from './atoms/CheckIcon';
import { ChevronDownIcon } from './atoms/ChevronDownIcon';
import { PackageIcon } from './atoms/PackageIcon';
import { CalendarFoldIcon } from './atoms/CalendarFoldIcon';
import { CirclePauseIcon } from './atoms/CirclePauseIcon';
import { PanelHeader } from './molecules/PanelHeader';
import { Button } from './molecules/Button';

const DesignSystemCatalog: React.FC = () => {
    return (
        <div style={{ padding: '24px', fontFamily: 'var(--font-family-body)' }}>
            <h1 style={{
                fontSize: '32px',
                fontWeight: '600',
                marginBottom: '32px',
                color: 'var(--color-foreground-primary)'
            }}>
                Design System Catalog
            </h1>

            {/* Atoms Section */}
            <section style={{ marginBottom: '48px' }}>
                <h2 style={{
                    fontSize: '24px',
                    fontWeight: '600',
                    marginBottom: '24px',
                    color: 'var(--color-foreground-primary)'
                }}>
                    Atoms
                </h2>

                {/* RadioIcon */}
                <div style={{ marginBottom: '32px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>RadioIcon</h3>
                    <div style={{
                        display: 'flex',
                        gap: '16px',
                        alignItems: 'center',
                        padding: '16px',
                        border: '1px solid var(--color-stroke-horizontal-rule)',
                        borderRadius: '8px',
                        backgroundColor: '#dddddd'
                    }}>
                        <div style={{ textAlign: 'center' }}>
                            <RadioIcon size="regular" state="unchecked" />
                            <div style={{ fontSize: '12px', marginTop: '4px' }}>Regular Unchecked</div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <RadioIcon size="regular" state="checked" />
                            <div style={{ fontSize: '12px', marginTop: '4px' }}>Regular Checked</div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <RadioIcon size="small" state="unchecked" />
                            <div style={{ fontSize: '12px', marginTop: '4px' }}>Small Unchecked</div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <RadioIcon size="small" state="checked" />
                            <div style={{ fontSize: '12px', marginTop: '4px' }}>Small Checked</div>
                        </div>
                    </div>
                </div>

                {/* Icon */}
                <div style={{ marginBottom: '32px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Icon</h3>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(6, 1fr)',
                        gap: '16px',
                        padding: '16px',
                        border: '1px solid var(--color-stroke-horizontal-rule)',
                        borderRadius: '8px',
                        backgroundColor: '#dddddd'
                    }}>
                        {['search', 'edit', 'local-shipping', 'storefront', 'credit-card', 'account-circle'].map((iconName) => (
                            <div key={iconName} style={{ textAlign: 'center' }}>
                                <Icon name={iconName as any} size={24} />
                                <div style={{ fontSize: '12px', marginTop: '4px' }}>{iconName}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Large Icons */}
                <div style={{ marginBottom: '32px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Large Icons (40px)</h3>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(5, 1fr)',
                        gap: '16px',
                        padding: '16px',
                        border: '1px solid var(--color-stroke-horizontal-rule)',
                        borderRadius: '8px',
                        backgroundColor: '#dddddd'
                    }}>
                        {['gift-large', 'wine-large', 'car-large', 'chef-hat-large', 'house-large'].map((iconName) => (
                            <div key={iconName} style={{ textAlign: 'center' }}>
                                <Icon name={iconName as any} size={40} />
                                <div style={{ fontSize: '12px', marginTop: '4px' }}>{iconName}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* PlaceholderIcon */}
                <div style={{ marginBottom: '32px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>PlaceholderIcon</h3>
                    <div style={{
                        display: 'flex',
                        gap: '16px',
                        alignItems: 'center',
                        padding: '16px',
                        border: '1px solid var(--color-stroke-horizontal-rule)',
                        borderRadius: '8px',
                        backgroundColor: '#dddddd'
                    }}>
                        <PlaceholderIcon size={20} />
                        <PlaceholderIcon size={24} />
                        <PlaceholderIcon size={32} />
                        <PlaceholderIcon size={40} />
                    </div>
                </div>

                {/* Individual Icon Components */}
                <div style={{ marginBottom: '32px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Individual Icons</h3>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(5, 1fr)',
                        gap: '16px',
                        padding: '16px',
                        border: '1px solid var(--color-stroke-horizontal-rule)',
                        borderRadius: '8px',
                        backgroundColor: '#dddddd'
                    }}>
                        <div style={{ textAlign: 'center' }}>
                            <CheckIcon size={24} />
                            <div style={{ fontSize: '12px', marginTop: '4px' }}>CheckIcon</div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <ChevronDownIcon size={24} />
                            <div style={{ fontSize: '12px', marginTop: '4px' }}>ChevronDownIcon</div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <PackageIcon size={24} />
                            <div style={{ fontSize: '12px', marginTop: '4px' }}>PackageIcon</div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <CalendarFoldIcon size={24} />
                            <div style={{ fontSize: '12px', marginTop: '4px' }}>CalendarFoldIcon</div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <CirclePauseIcon size={24} />
                            <div style={{ fontSize: '12px', marginTop: '4px' }}>CirclePauseIcon</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Molecules Section */}
            <section style={{ marginBottom: '48px' }}>
                <h2 style={{
                    fontSize: '24px',
                    fontWeight: '600',
                    marginBottom: '24px',
                    color: 'var(--color-foreground-primary)'
                }}>
                    Molecules
                </h2>

                {/* Button */}
                <div style={{ marginBottom: '32px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Button</h3>

                    <div style={{ marginBottom: '16px' }}>
                        <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>All Styles</h4>
                        <div style={{
                            display: 'flex',
                            gap: '16px',
                            padding: '16px',
                            border: '1px solid var(--color-stroke-horizontal-rule)',
                            borderRadius: '8px',
                            backgroundColor: '#dddddd'
                        }}>
                            <Button style="accent">Accent</Button>
                            <Button style="primary">Primary</Button>
                            <Button style="secondary">Secondary</Button>
                        </div>
                    </div>

                    <div style={{ marginBottom: '16px' }}>
                        <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Disabled States</h4>
                        <div style={{
                            display: 'flex',
                            gap: '16px',
                            padding: '16px',
                            border: '1px solid var(--color-stroke-horizontal-rule)',
                            borderRadius: '8px',
                            backgroundColor: '#dddddd'
                        }}>
                            <Button style="accent" disabled>Accent Disabled</Button>
                            <Button style="primary" disabled>Primary Disabled</Button>
                            <Button style="secondary" disabled>Secondary Disabled</Button>
                        </div>
                    </div>

                    <div style={{ marginBottom: '16px' }}>
                        <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Without Icon</h4>
                        <div style={{
                            display: 'flex',
                            gap: '16px',
                            padding: '16px',
                            border: '1px solid var(--color-stroke-horizontal-rule)',
                            borderRadius: '8px',
                            backgroundColor: '#dddddd'
                        }}>
                            <Button style="accent" showIcon={false}>No Icon</Button>
                            <Button style="primary" showIcon={false}>No Icon</Button>
                            <Button style="secondary" showIcon={false}>No Icon</Button>
                        </div>
                    </div>
                </div>

                {/* PanelHeader */}
                <div style={{ marginBottom: '32px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>PanelHeader</h3>

                    <div style={{ marginBottom: '16px' }}>
                        <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Default Hierarchy</h4>
                        <div style={{
                            padding: '16px',
                            border: '1px solid var(--color-stroke-horizontal-rule)',
                            borderRadius: '8px',
                            backgroundColor: '#dddddd'
                        }}>
                            <PanelHeader
                                hierarchy="Default"
                                title="What you'll get"
                                eyebrow="What you'll get"
                                subtitle="Sub"
                            />
                        </div>
                    </div>

                    <div style={{ marginBottom: '16px' }}>
                        <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Secondary Hierarchy</h4>
                        <div style={{
                            padding: '16px',
                            border: '1px solid var(--color-stroke-horizontal-rule)',
                            borderRadius: '8px',
                            backgroundColor: '#dddddd'
                        }}>
                            <PanelHeader
                                hierarchy="Secondary"
                                title="What you'll get"
                                eyebrow="What you'll get"
                                subtitle="Sub"
                            />
                        </div>
                    </div>

                    <div style={{ marginBottom: '16px' }}>
                        <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Without Eyebrow</h4>
                        <div style={{
                            padding: '16px',
                            border: '1px solid var(--color-stroke-horizontal-rule)',
                            borderRadius: '8px',
                            backgroundColor: '#dddddd'
                        }}>
                            <PanelHeader
                                hierarchy="Default"
                                title="What you'll get"
                                showEyebrow={false}
                                subtitle="Sub"
                            />
                        </div>
                    </div>

                    <div style={{ marginBottom: '16px' }}>
                        <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Without Icon</h4>
                        <div style={{
                            padding: '16px',
                            border: '1px solid var(--color-stroke-horizontal-rule)',
                            borderRadius: '8px',
                            backgroundColor: '#dddddd'
                        }}>
                            <PanelHeader
                                hierarchy="Default"
                                title="What you'll get"
                                eyebrow="What you'll get"
                                showIcon={false}
                                subtitle="Sub"
                            />
                        </div>
                    </div>

                    <div style={{ marginBottom: '16px' }}>
                        <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Custom Content</h4>
                        <div style={{
                            padding: '16px',
                            border: '1px solid var(--color-stroke-horizontal-rule)',
                            borderRadius: '8px',
                            backgroundColor: '#dddddd'
                        }}>
                            <PanelHeader
                                hierarchy="Default"
                                title="Custom Title"
                                eyebrow="Custom Eyebrow"
                                subtitle="Custom subtitle text"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Design Tokens Section */}
            <section style={{ marginBottom: '48px' }}>
                <h2 style={{
                    fontSize: '24px',
                    fontWeight: '600',
                    marginBottom: '24px',
                    color: 'var(--color-foreground-primary)'
                }}>
                    Design Tokens
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '24px',
                    padding: '16px',
                    border: '1px solid var(--color-stroke-horizontal-rule)',
                    borderRadius: '8px'
                }}>
                    <div>
                        <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Colors</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <div style={{ width: '20px', height: '20px', backgroundColor: 'var(--color-foreground-primary)', borderRadius: '4px' }}></div>
                                <span>--color-foreground-primary (#141414)</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <div style={{ width: '20px', height: '20px', backgroundColor: 'var(--color-foreground-secondary)', borderRadius: '4px' }}></div>
                                <span>--color-foreground-secondary (rgba(0,0,0,0.6))</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <div style={{ width: '20px', height: '20px', backgroundColor: 'var(--color-foreground-invert-primary)', borderRadius: '4px' }}></div>
                                <span>--color-foreground-invert-primary (#ffffff)</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <div style={{ width: '20px', height: '20px', backgroundColor: 'var(--color-foreground-invert-secondary)', borderRadius: '4px' }}></div>
                                <span>--color-foreground-invert-secondary (rgba(255,255,255,0.8))</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <div style={{ width: '20px', height: '20px', backgroundColor: 'var(--color-background-primary)', border: '1px solid var(--color-stroke-primary)', borderRadius: '4px' }}></div>
                                <span>--color-background-primary (#ffffff)</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <div style={{ width: '20px', height: '20px', backgroundColor: 'var(--color-background-accent)', borderRadius: '4px' }}></div>
                                <span>--color-background-accent (#f08e80)</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <div style={{ width: '20px', height: '20px', backgroundColor: 'var(--color-background-invert-primary)', borderRadius: '4px' }}></div>
                                <span>--color-background-invert-primary (#141414)</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <div style={{ width: '20px', height: '20px', backgroundColor: 'var(--color-stroke-primary)', borderRadius: '4px' }}></div>
                                <span>--color-stroke-primary (#141414)</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <div style={{ width: '20px', height: '20px', backgroundColor: 'var(--color-form-controls-disabled)', borderRadius: '4px' }}></div>
                                <span>--color-form-controls-disabled (#d3d3d3)</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Typography</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <div style={{ fontSize: '24px', fontWeight: '600', lineHeight: '32px' }}>H2 Heading (24px/600)</div>
                            <div style={{ fontSize: '21px', fontWeight: '600', lineHeight: '28px' }}>H3 Heading (21px/600)</div>
                            <div style={{ fontSize: '16px', fontWeight: '400', lineHeight: '22px' }}>Body Text (16px/400)</div>
                            <div style={{ fontSize: '14px', fontWeight: '400', lineHeight: '18px' }}>Small Text (14px/400)</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DesignSystemCatalog;

