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
import { Textfield } from './molecules/Textfield';
import { Select } from './molecules/Select';
import { TextArea } from './molecules/TextArea';
import { CheckboxLine } from './molecules/CheckboxLine';
import { RadioInline } from './molecules/RadioInline';
import { SelectItem } from './molecules/SelectItem';
import { SelectList } from './molecules/SelectList';
import { Tile } from './molecules/Tile';
import { TileMultiItem } from './molecules/TileMultiItem';
import { IconLine } from './molecules/IconLine';
import { Banner } from './molecules/Banner';

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

                {/* Textfield */}
                <div style={{ marginBottom: '32px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Textfield</h3>

                    <div style={{ marginBottom: '16px' }}>
                        <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>All States</h4>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '16px',
                            padding: '16px',
                            border: '1px solid var(--color-stroke-horizontal-rule)',
                            borderRadius: '8px',
                            backgroundColor: '#dddddd'
                        }}>
                            <div style={{ width: '300px' }}>
                                <Textfield state="default" label="Default" placeholder="Enter text" />
                            </div>
                            <div style={{ width: '300px' }}>
                                <Textfield state="hover" label="Hover" placeholder="Enter text" />
                            </div>
                            <div style={{ width: '300px' }}>
                                <Textfield state="active" label="Active" placeholder="Enter text" />
                            </div>
                            <div style={{ width: '300px' }}>
                                <Textfield state="filled" label="Filled" value="Sample text" />
                            </div>
                            <div style={{ width: '300px' }}>
                                <Textfield state="disabled" label="Disabled" placeholder="Enter text" disabled />
                            </div>
                            <div style={{ width: '300px' }}>
                                <Textfield state="error" label="Error" placeholder="Enter text" errorMessage="Required" />
                            </div>
                            <div style={{ width: '300px' }}>
                                <Textfield state="error-filled" label="Error Filled" value="Invalid text" errorMessage="Explainer" />
                            </div>
                        </div>
                    </div>

                    <div style={{ marginBottom: '16px' }}>
                        <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Without Label</h4>
                        <div style={{
                            padding: '16px',
                            border: '1px solid var(--color-stroke-horizontal-rule)',
                            borderRadius: '8px',
                            backgroundColor: '#dddddd'
                        }}>
                            <div style={{ width: '300px' }}>
                                <Textfield showLabel={false} placeholder="No label" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Select */}
                <div style={{ marginBottom: '32px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Select</h3>

                    <div style={{ marginBottom: '16px' }}>
                        <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>All States</h4>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '16px',
                            padding: '16px',
                            border: '1px solid var(--color-stroke-horizontal-rule)',
                            borderRadius: '8px',
                            backgroundColor: '#dddddd'
                        }}>
                            <div style={{ width: '300px' }}>
                                <Select state="default" label="Default" placeholder="Select a country" hint="Choose your country" />
                            </div>
                            <div style={{ width: '300px' }}>
                                <Select state="hover" label="Hover" placeholder="Select a country" hint="Choose your country" />
                            </div>
                            <div style={{ width: '300px' }}>
                                <Select state="active" label="Active" placeholder="Select a country" hint="Choose your country" />
                            </div>
                        </div>
                    </div>

                    <div style={{ marginBottom: '16px' }}>
                        <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>With Selected Value</h4>
                        <div style={{
                            padding: '16px',
                            border: '1px solid var(--color-stroke-horizontal-rule)',
                            borderRadius: '8px',
                            backgroundColor: '#dddddd'
                        }}>
                            <div style={{ width: '300px' }}>
                                <Select value="us" label="Country" placeholder="Select a country" hint="Choose your country" />
                            </div>
                        </div>
                    </div>

                    <div style={{ marginBottom: '16px' }}>
                        <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Disabled</h4>
                        <div style={{
                            padding: '16px',
                            border: '1px solid var(--color-stroke-horizontal-rule)',
                            borderRadius: '8px',
                            backgroundColor: '#dddddd'
                        }}>
                            <div style={{ width: '300px' }}>
                                <Select disabled label="Disabled" placeholder="Select a country" hint="Choose your country" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* TextArea */}
                <div style={{ marginBottom: '32px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>TextArea</h3>

                    <div style={{ marginBottom: '16px' }}>
                        <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>All States</h4>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '16px',
                            padding: '16px',
                            border: '1px solid var(--color-stroke-horizontal-rule)',
                            borderRadius: '8px',
                            backgroundColor: '#dddddd'
                        }}>
                            <div style={{ width: '300px' }}>
                                <TextArea state="default" label="Default" placeholder="Enter your message" />
                            </div>
                            <div style={{ width: '300px' }}>
                                <TextArea state="hover" label="Hover" placeholder="Enter your message" />
                            </div>
                            <div style={{ width: '300px' }}>
                                <TextArea state="active" label="Active" placeholder="Enter your message" />
                            </div>
                            <div style={{ width: '300px' }}>
                                <TextArea state="filled" label="Filled" value="This is some sample text that fills the textarea to demonstrate the filled state." />
                            </div>
                            <div style={{ width: '300px' }}>
                                <TextArea state="error" label="Error" placeholder="Enter your message" errorMessage="Required" />
                            </div>
                            <div style={{ width: '300px' }}>
                                <TextArea state="error-filled" label="Error Filled" value="This text has an error." errorMessage="Explainer" />
                            </div>
                        </div>
                    </div>

                    <div style={{ marginBottom: '16px' }}>
                        <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Disabled</h4>
                        <div style={{
                            padding: '16px',
                            border: '1px solid var(--color-stroke-horizontal-rule)',
                            borderRadius: '8px',
                            backgroundColor: '#dddddd'
                        }}>
                            <div style={{ width: '300px' }}>
                                <TextArea disabled label="Disabled" placeholder="Enter your message" />
                            </div>
                        </div>
                    </div>

                    <div style={{ marginBottom: '16px' }}>
                        <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Custom Rows</h4>
                        <div style={{
                            padding: '16px',
                            border: '1px solid var(--color-stroke-horizontal-rule)',
                            borderRadius: '8px',
                            backgroundColor: '#dddddd'
                        }}>
                            <div style={{ width: '300px' }}>
                                <TextArea rows={6} label="Large TextArea" placeholder="Enter your message" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* CheckboxLine */}
                <div style={{ marginBottom: '32px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>CheckboxLine</h3>

                    <div style={{ marginBottom: '16px' }}>
                        <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>All States</h4>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '16px',
                            padding: '16px',
                            border: '1px solid var(--color-stroke-horizontal-rule)',
                            borderRadius: '8px',
                            backgroundColor: '#dddddd'
                        }}>
                            <div style={{ width: '300px' }}>
                                <CheckboxLine state="default" label="This is a gift" />
                            </div>
                            <div style={{ width: '300px' }}>
                                <CheckboxLine state="active" label="This is a gift" />
                            </div>
                        </div>
                    </div>

                    <div style={{ marginBottom: '16px' }}>
                        <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Disabled</h4>
                        <div style={{
                            padding: '16px',
                            border: '1px solid var(--color-stroke-horizontal-rule)',
                            borderRadius: '8px',
                            backgroundColor: '#dddddd'
                        }}>
                            <div style={{ width: '300px' }}>
                                <CheckboxLine disabled label="This is a gift" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* RadioInline */}
                <div style={{ marginBottom: '32px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>RadioInline</h3>

                    <div style={{ marginBottom: '16px' }}>
                        <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>All States</h4>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '16px',
                            padding: '16px',
                            border: '1px solid var(--color-stroke-horizontal-rule)',
                            borderRadius: '8px',
                            backgroundColor: '#dddddd'
                        }}>
                            <div style={{ width: '300px' }}>
                                <RadioInline state="unchecked" label="Breakfast Kit — Chicken" price="$40" />
                            </div>
                            <div style={{ width: '300px' }}>
                                <RadioInline state="hover" label="Breakfast Kit — Chicken" price="$40" />
                            </div>
                            <div style={{ width: '300px' }}>
                                <RadioInline state="checked" label="Breakfast Kit — Chicken" price="$40" />
                            </div>
                        </div>
                    </div>

                    <div style={{ marginBottom: '16px' }}>
                        <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Without Divider</h4>
                        <div style={{
                            padding: '16px',
                            border: '1px solid var(--color-stroke-horizontal-rule)',
                            borderRadius: '8px',
                            backgroundColor: '#dddddd'
                        }}>
                            <div style={{ width: '300px' }}>
                                <RadioInline showDivider={false} label="Breakfast Kit — Chicken" price="$40" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* SelectItem */}
                <div style={{ marginBottom: '32px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>SelectItem</h3>

                    <div style={{ marginBottom: '16px' }}>
                        <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>All States</h4>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0px',
                            padding: '16px',
                            border: '1px solid var(--color-stroke-horizontal-rule)',
                            borderRadius: '8px',
                            backgroundColor: '#dddddd'
                        }}>
                            <div style={{ width: '200px' }}>
                                <SelectItem state="default">No peanuts</SelectItem>
                            </div>
                            <div style={{ width: '200px' }}>
                                <SelectItem state="hover">No peanuts</SelectItem>
                            </div>
                            <div style={{ width: '200px' }}>
                                <SelectItem selected>No peanuts</SelectItem>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SelectList */}
                <div style={{ marginBottom: '32px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>SelectList</h3>

                    <div style={{ marginBottom: '16px' }}>
                        <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Default</h4>
                        <div style={{
                            padding: '16px',
                            border: '1px solid var(--color-stroke-horizontal-rule)',
                            borderRadius: '8px',
                            backgroundColor: '#dddddd'
                        }}>
                            <div style={{ width: '200px' }}>
                                <SelectList />
                            </div>
                        </div>
                    </div>

                    <div style={{ marginBottom: '16px' }}>
                        <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>With Selection</h4>
                        <div style={{
                            padding: '16px',
                            border: '1px solid var(--color-stroke-horizontal-rule)',
                            borderRadius: '8px',
                            backgroundColor: '#dddddd'
                        }}>
                            <div style={{ width: '200px' }}>
                                <SelectList selectedIndex={1} />
                            </div>
                        </div>
                    </div>

                    <div style={{ marginBottom: '16px' }}>
                        <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Custom Items</h4>
                        <div style={{
                            padding: '16px',
                            border: '1px solid var(--color-stroke-horizontal-rule)',
                            borderRadius: '8px',
                            backgroundColor: '#dddddd'
                        }}>
                            <div style={{ width: '200px' }}>
                                <SelectList items={['Option 1', 'Option 2', 'Option 3', 'Option 4']} selectedIndex={2} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tile */}
                <div style={{ marginBottom: '32px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Tile</h3>

                    <div style={{ marginBottom: '16px' }}>
                        <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Default</h4>
                        <div style={{
                            padding: '16px',
                            border: '1px solid var(--color-stroke-horizontal-rule)',
                            borderRadius: '8px',
                            backgroundColor: '#dddddd'
                        }}>
                            <div style={{ width: '350px' }}>
                                <Tile />
                            </div>
                        </div>
                    </div>

                    <div style={{ marginBottom: '16px' }}>
                        <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Active</h4>
                        <div style={{
                            padding: '16px',
                            border: '1px solid var(--color-stroke-horizontal-rule)',
                            borderRadius: '8px',
                            backgroundColor: '#dddddd'
                        }}>
                            <div style={{ width: '350px' }}>
                                <Tile state="active" />
                            </div>
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
                            <div style={{ width: '350px' }}>
                                <Tile
                                    title="Premium Package"
                                    description="Includes all features and priority support"
                                    rightLabel="$99"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* TileMultiItem */}
                <div style={{ marginBottom: '32px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>TileMultiItem</h3>

                    <div style={{ marginBottom: '16px' }}>
                        <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Default</h4>
                        <div style={{
                            padding: '16px',
                            border: '1px solid var(--color-stroke-horizontal-rule)',
                            borderRadius: '8px',
                            backgroundColor: '#dddddd'
                        }}>
                            <div style={{ width: '350px' }}>
                                <TileMultiItem />
                            </div>
                        </div>
                    </div>

                    <div style={{ marginBottom: '16px' }}>
                        <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>With Selection</h4>
                        <div style={{
                            padding: '16px',
                            border: '1px solid var(--color-stroke-horizontal-rule)',
                            borderRadius: '8px',
                            backgroundColor: '#dddddd'
                        }}>
                            <div style={{ width: '350px' }}>
                                <TileMultiItem selectedId="2" />
                            </div>
                        </div>
                    </div>

                    <div style={{ marginBottom: '16px' }}>
                        <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Custom Options</h4>
                        <div style={{
                            padding: '16px',
                            border: '1px solid var(--color-stroke-horizontal-rule)',
                            borderRadius: '8px',
                            backgroundColor: '#dddddd'
                        }}>
                            <div style={{ width: '350px' }}>
                                <TileMultiItem
                                    options={[
                                        { id: '1', label: 'Basic Plan', price: '$9/month' },
                                        { id: '2', label: 'Pro Plan', price: '$19/month' },
                                        { id: '3', label: 'Enterprise', price: '$49/month' },
                                    ]}
                                    selectedId="2"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* IconLine */}
                <div style={{ marginBottom: '32px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>IconLine</h3>

                    <div style={{ marginBottom: '16px' }}>
                        <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Default</h4>
                        <div style={{
                            padding: '16px',
                            border: '1px solid var(--color-stroke-horizontal-rule)',
                            borderRadius: '8px',
                            backgroundColor: '#dddddd'
                        }}>
                            <div style={{ width: '350px' }}>
                                <IconLine />
                            </div>
                        </div>
                    </div>

                    <div style={{ marginBottom: '16px' }}>
                        <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Custom Text</h4>
                        <div style={{
                            padding: '16px',
                            border: '1px solid var(--color-stroke-horizontal-rule)',
                            borderRadius: '8px',
                            backgroundColor: '#dddddd'
                        }}>
                            <div style={{ width: '350px' }}>
                                <IconLine>Custom text content</IconLine>
                            </div>
                        </div>
                    </div>

                    <div style={{ marginBottom: '16px' }}>
                        <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>With Check Icon</h4>
                        <div style={{
                            padding: '16px',
                            border: '1px solid var(--color-stroke-horizontal-rule)',
                            borderRadius: '8px',
                            backgroundColor: '#dddddd'
                        }}>
                            <div style={{ width: '350px' }}>
                                <IconLine icon={<CheckIcon size={20} color="var(--color-foreground-primary)" />}>
                                    Completed task
                                </IconLine>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Banner */}
                <div style={{ marginBottom: '32px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Banner</h3>

                    <div style={{ marginBottom: '16px' }}>
                        <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Default</h4>
                        <div style={{
                            padding: '16px',
                            border: '1px solid var(--color-stroke-horizontal-rule)',
                            borderRadius: '8px',
                            backgroundColor: '#dddddd'
                        }}>
                            <div style={{ width: '450px' }}>
                                <Banner />
                            </div>
                        </div>
                    </div>

                    <div style={{ marginBottom: '16px' }}>
                        <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Success</h4>
                        <div style={{
                            padding: '16px',
                            border: '1px solid var(--color-stroke-horizontal-rule)',
                            borderRadius: '8px',
                            backgroundColor: '#dddddd'
                        }}>
                            <div style={{ width: '450px' }}>
                                <Banner type="success">Success! Your changes have been saved.</Banner>
                            </div>
                        </div>
                    </div>

                    <div style={{ marginBottom: '16px' }}>
                        <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Warning</h4>
                        <div style={{
                            padding: '16px',
                            border: '1px solid var(--color-stroke-horizontal-rule)',
                            borderRadius: '8px',
                            backgroundColor: '#dddddd'
                        }}>
                            <div style={{ width: '450px' }}>
                                <Banner type="warning">Warning: This action cannot be undone.</Banner>
                            </div>
                        </div>
                    </div>

                    <div style={{ marginBottom: '16px' }}>
                        <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Alert</h4>
                        <div style={{
                            padding: '16px',
                            border: '1px solid var(--color-stroke-horizontal-rule)',
                            borderRadius: '8px',
                            backgroundColor: '#dddddd'
                        }}>
                            <div style={{ width: '450px' }}>
                                <Banner type="alert">Error: Something went wrong. Please try again.</Banner>
                            </div>
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

