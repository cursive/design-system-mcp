import React from 'react';
import './DesignSystemCatalog.css';
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
import { TileMultiItem, TileMultiItemOption } from './molecules/TileMultiItem';
import { IconLine } from './molecules/IconLine';
import { Banner } from './molecules/Banner';
import { CarouselNav } from './molecules/CarouselNav';
import { CarouselPips } from './molecules/CarouselPips';
import { PageHeader } from './molecules/PageHeader';
import { FooterPDP } from './molecules/FooterPDP';
import { PageDivider } from './molecules/PageDivider';
import { FAQCell } from './molecules/FAQCell';
import { StarRating } from './molecules/StarRating';
import { AddOn, AddOnOption } from './molecules/AddOn';
import { Dialogue } from './molecules/Dialogue';
import { Lists, ListItem } from './molecules/Lists';

const DesignSystemCatalog: React.FC = () => {
    return (
        <div className="design-system-catalog-page">
            <h1 className="page-title">
                Design System
            </h1>

            {/* Atoms Section */}
            <section className="component-section">
                <h2 className="section-title">
                    Atoms
                </h2>

                {/* RadioIcon */}
                <div className="component-section">
                    <h3 className="component-title">RadioIcon</h3>
                    <div className="grid-demo">
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
                <div className="component-section">
                    <h3 className="component-title">Icon</h3>
                    <div className="grid-demo">
                        {['search', 'edit', 'local-shipping', 'storefront', 'credit-card', 'account-circle'].map((iconName) => (
                            <div key={iconName} style={{ textAlign: 'center' }}>
                                <Icon name={iconName as any} size={24} />
                                <div style={{ fontSize: '12px', marginTop: '4px' }}>{iconName}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Large Icons */}
                <div className="component-section">
                    <h3 className="component-title">Large Icons (40px)</h3>
                    <div className="container">
                        <div className="grid-demo-5">
                            {['gift-large', 'wine-large', 'car-large', 'chef-hat-large', 'house-large'].map((iconName) => (
                                <div key={iconName} style={{ textAlign: 'center' }}>
                                    <Icon name={iconName as any} size={40} />
                                    <div style={{ fontSize: '12px', marginTop: '4px' }}>{iconName}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* PlaceholderIcon */}
                <div className="component-section">
                    <h3 className="component-title">PlaceholderIcon</h3>
                    <div className="container">
                        <div className="flex-demo">
                            <PlaceholderIcon size={20} />
                            <PlaceholderIcon size={24} />
                            <PlaceholderIcon size={32} />
                            <PlaceholderIcon size={40} />
                        </div>
                    </div>
                </div>

                {/* Individual Icon Components */}
                <div className="component-section">
                    <h3 className="component-title">Individual Icons</h3>
                    <div className="container">
                        <div className="grid-demo-5">
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
                </div>
            </section>

            {/* Molecules Section */}
            <section className="component-section">
                <h2 className="section-title">
                    Molecules
                </h2>

                {/* Button */}
                <div className="component-section">
                    <h3 className="component-title">Button</h3>

                    <div className="component-demo">
                        <div className="left">
                            {(() => {
                                const [buttonStyle, setButtonStyle] = React.useState<'accent' | 'primary' | 'secondary'>('accent');
                                const [state, setState] = React.useState<'default' | 'disabled' | 'hover'>('default');
                                const [showIcon, setShowIcon] = React.useState<boolean>(true);
                                const [disabled, setDisabled] = React.useState<boolean>(false);
                                const [label, setLabel] = React.useState<string>('Label');
                                const [className, setClassName] = React.useState<string>('');

                                // expose state setters via a tiny inline context to controls pane
                                (window as any).__CATALOG_BUTTON__ = {
                                    buttonStyle, setButtonStyle,
                                    state, setState,
                                    showIcon, setShowIcon,
                                    disabled, setDisabled,
                                    label, setLabel,
                                    className, setClassName,
                                };

                                return (
                                    <Button
                                        style={buttonStyle}
                                        state={state}
                                        showIcon={showIcon}
                                        disabled={disabled}
                                        className={className}
                                    >
                                        {label}
                                    </Button>
                                );
                            })()}
                        </div>

                        <div className="right">
                            <h4 className="subtitle">Controls</h4>

                            <div className="control-group">
                                <label>Label</label>
                                <input
                                    type="text"
                                    defaultValue="Label"
                                    onInput={(e) => (window as any).__CATALOG_BUTTON__?.setLabel?.((e.target as HTMLInputElement).value)}
                                />
                            </div>

                            <div className="control-group">
                                <label>Style</label>
                                <select
                                    defaultValue="accent"
                                    onChange={(e) => (window as any).__CATALOG_BUTTON__?.setButtonStyle?.(e.target.value as 'accent' | 'primary' | 'secondary')}
                                >
                                    <option value="accent">accent</option>
                                    <option value="primary">primary</option>
                                    <option value="secondary">secondary</option>
                                </select>
                            </div>

                            <div className="control-group">
                                <label>State</label>
                                <select
                                    defaultValue="default"
                                    onChange={(e) => (window as any).__CATALOG_BUTTON__?.setState?.(e.target.value as 'default' | 'disabled' | 'hover')}
                                >
                                    <option value="default">Default</option>
                                    <option value="hover">Hover</option>
                                    <option value="disabled">Disabled</option>
                                </select>
                            </div>

                            <div className="control-group">
                                <label>
                                    <input
                                        type="checkbox"
                                        defaultChecked
                                        onChange={(e) => (window as any).__CATALOG_BUTTON__?.setShowIcon?.(e.currentTarget.checked)}
                                    />
                                    Show Icon
                                </label>
                            </div>

                            <div className="control-group">
                                <label>
                                    <input
                                        type="checkbox"
                                        onChange={(e) => (window as any).__CATALOG_BUTTON__?.setDisabled?.(e.currentTarget.checked)}
                                    />
                                    Disabled
                                </label>
                            </div>

                        </div>
                    </div>
                </div>

                {/* PanelHeader */}
                <div className="component-section">
                    <h3 className="component-title">PanelHeader</h3>

                    <div className="component-demo">
                        <div className="left">
                            {(() => {
                                const [hierarchy, setHierarchy] = React.useState<'Default' | 'Secondary'>('Default');
                                const [showEyebrow, setShowEyebrow] = React.useState<boolean>(true);
                                const [showIcon, setShowIcon] = React.useState<boolean>(true);
                                const [showSub, setShowSub] = React.useState<boolean>(true);
                                const [title, setTitle] = React.useState<string>("What you'll get");
                                const [eyebrow, setEyebrow] = React.useState<string>("What you'll get");
                                const [subtitle, setSubtitle] = React.useState<string>("Sub");
                                const [className, setClassName] = React.useState<string>('');

                                // expose state setters via a tiny inline context to controls pane
                                (window as any).__CATALOG_PANELHEADER__ = {
                                    hierarchy, setHierarchy,
                                    showEyebrow, setShowEyebrow,
                                    showIcon, setShowIcon,
                                    showSub, setShowSub,
                                    title, setTitle,
                                    eyebrow, setEyebrow,
                                    subtitle, setSubtitle,
                                    className, setClassName,
                                };

                                return (
                                    <PanelHeader
                                        hierarchy={hierarchy}
                                        showEyebrow={showEyebrow}
                                        showIcon={showIcon}
                                        showSub={showSub}
                                        title={title}
                                        eyebrow={eyebrow}
                                        subtitle={subtitle}
                                        className={className}
                                    />
                                );
                            })()}
                        </div>

                        <div className="right">
                            <h4 className="subtitle">Controls</h4>

                            <div className="control-group">
                                <label>Title</label>
                                <input
                                    type="text"
                                    defaultValue="What you'll get"
                                    onInput={(e) => (window as any).__CATALOG_PANELHEADER__?.setTitle?.((e.target as HTMLInputElement).value)}
                                />
                            </div>

                            <div className="control-group">
                                <label>Eyebrow</label>
                                <input
                                    type="text"
                                    defaultValue="What you'll get"
                                    onInput={(e) => (window as any).__CATALOG_PANELHEADER__?.setEyebrow?.((e.target as HTMLInputElement).value)}
                                />
                            </div>

                            <div className="control-group">
                                <label>Subtitle</label>
                                <input
                                    type="text"
                                    defaultValue="Sub"
                                    onInput={(e) => (window as any).__CATALOG_PANELHEADER__?.setSubtitle?.((e.target as HTMLInputElement).value)}
                                />
                            </div>

                            <div className="control-group">
                                <label>Hierarchy</label>
                                <select
                                    defaultValue="Default"
                                    onChange={(e) => (window as any).__CATALOG_PANELHEADER__?.setHierarchy?.(e.target.value as 'Default' | 'Secondary')}
                                >
                                    <option value="Default">Default</option>
                                    <option value="Secondary">Secondary</option>
                                </select>
                            </div>

                            <div className="control-group">
                                <label>
                                    <input
                                        type="checkbox"
                                        defaultChecked
                                        onChange={(e) => (window as any).__CATALOG_PANELHEADER__?.setShowEyebrow?.(e.currentTarget.checked)}
                                    />
                                    Show Eyebrow
                                </label>
                            </div>

                            <div className="control-group">
                                <label>
                                    <input
                                        type="checkbox"
                                        defaultChecked
                                        onChange={(e) => (window as any).__CATALOG_PANELHEADER__?.setShowIcon?.(e.currentTarget.checked)}
                                    />
                                    Show Icon
                                </label>
                            </div>

                            <div className="control-group">
                                <label>
                                    <input
                                        type="checkbox"
                                        defaultChecked
                                        onChange={(e) => (window as any).__CATALOG_PANELHEADER__?.setShowSub?.(e.currentTarget.checked)}
                                    />
                                    Show Subtitle
                                </label>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Textfield */}
                <div className="component-section">
                    <h3 className="component-title">Textfield</h3>

                    <div className="component-demo">
                        <div className="left">
                            {(() => {
                                const [state, setState] = React.useState<'default' | 'hover' | 'active' | 'filled' | 'disabled' | 'error' | 'error-filled'>('default');
                                const [showLabel, setShowLabel] = React.useState<boolean>(true);
                                const [showIcon, setShowIcon] = React.useState<boolean>(false);
                                const [label, setLabel] = React.useState<string>('Label');
                                const [placeholder, setPlaceholder] = React.useState<string>('Enter text');
                                const [value, setValue] = React.useState<string>('');
                                const [errorMessage, setErrorMessage] = React.useState<string>('');
                                const [className, setClassName] = React.useState<string>('');

                                (window as any).__CATALOG_TEXTFIELD__ = {
                                    state, setState,
                                    showLabel, setShowLabel,
                                    showIcon, setShowIcon,
                                    label, setLabel,
                                    placeholder, setPlaceholder,
                                    value, setValue,
                                    errorMessage, setErrorMessage,
                                    className, setClassName,
                                };

                                return (
                                    <div style={{ width: '300px' }}>
                                        <Textfield
                                            state={state}
                                            showLabel={showLabel}
                                            showIcon={showIcon}
                                            label={label}
                                            placeholder={placeholder}
                                            value={value}
                                            errorMessage={errorMessage}
                                            disabled={state === 'disabled'}
                                            className={className}
                                        />
                                    </div>
                                );
                            })()}
                        </div>

                        <div className="right">
                            <h4 className="subtitle">Controls</h4>

                            <div className="control-group">
                                <label>State</label>
                                <select
                                    defaultValue="default"
                                    onChange={(e) => (window as any).__CATALOG_TEXTFIELD__?.setState?.(e.target.value as any)}
                                >
                                    <option value="default">Default</option>
                                    <option value="hover">Hover</option>
                                    <option value="active">Active</option>
                                    <option value="filled">Filled</option>
                                    <option value="disabled">Disabled</option>
                                    <option value="error">Error</option>
                                    <option value="error-filled">Error Filled</option>
                                </select>
                            </div>

                            <div className="control-group">
                                <label>
                                    <input
                                        type="checkbox"
                                        defaultChecked
                                        onChange={(e) => (window as any).__CATALOG_TEXTFIELD__?.setShowLabel?.(e.currentTarget.checked)}
                                    />
                                    Show Label
                                </label>
                            </div>

                            <div className="control-group">
                                <label>
                                    <input
                                        type="checkbox"
                                        onChange={(e) => (window as any).__CATALOG_TEXTFIELD__?.setShowIcon?.(e.currentTarget.checked)}
                                    />
                                    Show Icon
                                </label>
                            </div>

                            <div className="control-group">
                                <label>Label</label>
                                <input
                                    type="text"
                                    defaultValue="Label"
                                    onInput={(e) => (window as any).__CATALOG_TEXTFIELD__?.setLabel?.((e.target as HTMLInputElement).value)}
                                />
                            </div>

                            <div className="control-group">
                                <label>Placeholder</label>
                                <input
                                    type="text"
                                    defaultValue="Enter text"
                                    onInput={(e) => (window as any).__CATALOG_TEXTFIELD__?.setPlaceholder?.((e.target as HTMLInputElement).value)}
                                />
                            </div>

                            <div className="control-group">
                                <label>Value</label>
                                <input
                                    type="text"
                                    onInput={(e) => (window as any).__CATALOG_TEXTFIELD__?.setValue?.((e.target as HTMLInputElement).value)}
                                />
                            </div>

                            <div className="control-group">
                                <label>Error Message</label>
                                <input
                                    type="text"
                                    onInput={(e) => (window as any).__CATALOG_TEXTFIELD__?.setErrorMessage?.((e.target as HTMLInputElement).value)}
                                />
                            </div>

                        </div>
                    </div>
                </div>

                {/* Select */}
                <div className="component-section">
                    <h3 className="component-title">Select</h3>

                    <div className="component-demo">
                        <div className="left">
                            {(() => {
                                const [state, setState] = React.useState<'default' | 'hover' | 'active'>('default');
                                const [value, setValue] = React.useState<string>('');
                                const [label, setLabel] = React.useState<string>('Label');
                                const [placeholder, setPlaceholder] = React.useState<string>('Select a country');
                                const [hint, setHint] = React.useState<string>('Choose your country');
                                const [showLabel, setShowLabel] = React.useState<boolean>(true);
                                const [showHint, setShowHint] = React.useState<boolean>(true);
                                const [disabled, setDisabled] = React.useState<boolean>(false);
                                const [className, setClassName] = React.useState<string>('');

                                (window as any).__CATALOG_SELECT__ = {
                                    state, setState,
                                    value, setValue,
                                    label, setLabel,
                                    placeholder, setPlaceholder,
                                    hint, setHint,
                                    showLabel, setShowLabel,
                                    showHint, setShowHint,
                                    disabled, setDisabled,
                                    className, setClassName,
                                };

                                return (
                                    <div style={{ width: '300px' }}>
                                        <Select
                                            state={state}
                                            value={value}
                                            label={label}
                                            placeholder={placeholder}
                                            hint={hint}
                                            showLabel={showLabel}
                                            showHint={showHint}
                                            disabled={disabled}
                                            className={className}
                                        />
                                    </div>
                                );
                            })()}
                        </div>

                        <div className="right">
                            <h4 className="subtitle">Controls</h4>

                            <div className="control-group">
                                <label>State</label>
                                <select
                                    defaultValue="default"
                                    onChange={(e) => (window as any).__CATALOG_SELECT__?.setState?.(e.target.value as any)}
                                >
                                    <option value="default">Default</option>
                                    <option value="hover">Hover</option>
                                    <option value="active">Active</option>
                                </select>
                            </div>

                            <div className="control-group">
                                <label>Value</label>
                                <input
                                    type="text"
                                    onInput={(e) => (window as any).__CATALOG_SELECT__?.setValue?.((e.target as HTMLInputElement).value)}
                                />
                            </div>

                            <div className="control-group">
                                <label>Label</label>
                                <input
                                    type="text"
                                    defaultValue="Label"
                                    onInput={(e) => (window as any).__CATALOG_SELECT__?.setLabel?.((e.target as HTMLInputElement).value)}
                                />
                            </div>

                            <div className="control-group">
                                <label>Placeholder</label>
                                <input
                                    type="text"
                                    defaultValue="Select a country"
                                    onInput={(e) => (window as any).__CATALOG_SELECT__?.setPlaceholder?.((e.target as HTMLInputElement).value)}
                                />
                            </div>

                            <div className="control-group">
                                <label>Hint</label>
                                <input
                                    type="text"
                                    defaultValue="Choose your country"
                                    onInput={(e) => (window as any).__CATALOG_SELECT__?.setHint?.((e.target as HTMLInputElement).value)}
                                />
                            </div>

                            <div className="control-group">
                                <label>
                                    <input
                                        type="checkbox"
                                        defaultChecked
                                        onChange={(e) => (window as any).__CATALOG_SELECT__?.setShowLabel?.(e.currentTarget.checked)}
                                    />
                                    Show Label
                                </label>
                            </div>

                            <div className="control-group">
                                <label>
                                    <input
                                        type="checkbox"
                                        defaultChecked
                                        onChange={(e) => (window as any).__CATALOG_SELECT__?.setShowHint?.(e.currentTarget.checked)}
                                    />
                                    Show Hint
                                </label>
                            </div>

                            <div className="control-group">
                                <label>
                                    <input
                                        type="checkbox"
                                        onChange={(e) => (window as any).__CATALOG_SELECT__?.setDisabled?.(e.currentTarget.checked)}
                                    />
                                    Disabled
                                </label>
                            </div>

                        </div>
                    </div>
                </div>

                {/* TextArea */}
                <div className="component-section">
                    <h3 className="component-title">TextArea</h3>

                    <div className="component-demo">
                        <div className="left">
                            {(() => {
                                const [state, setState] = React.useState<'default' | 'hover' | 'active' | 'filled' | 'error' | 'error-filled'>('default');
                                const [label, setLabel] = React.useState<string>('Label');
                                const [placeholder, setPlaceholder] = React.useState<string>('Enter your message');
                                const [value, setValue] = React.useState<string>('');
                                const [errorMessage, setErrorMessage] = React.useState<string>('');
                                const [showLabel, setShowLabel] = React.useState<boolean>(true);
                                const [showError, setShowError] = React.useState<boolean>(false);
                                const [disabled, setDisabled] = React.useState<boolean>(false);
                                const [rows, setRows] = React.useState<number>(4);
                                const [className, setClassName] = React.useState<string>('');

                                (window as any).__CATALOG_TEXTAREA__ = {
                                    state, setState,
                                    label, setLabel,
                                    placeholder, setPlaceholder,
                                    value, setValue,
                                    errorMessage, setErrorMessage,
                                    showLabel, setShowLabel,
                                    showError, setShowError,
                                    disabled, setDisabled,
                                    rows, setRows,
                                    className, setClassName,
                                };

                                return (
                                    <div style={{ width: '300px' }}>
                                        <TextArea
                                            state={state}
                                            label={label}
                                            placeholder={placeholder}
                                            value={value}
                                            errorMessage={errorMessage}
                                            showLabel={showLabel}
                                            showError={showError}
                                            disabled={disabled}
                                            rows={rows}
                                            className={className}
                                        />
                                    </div>
                                );
                            })()}
                        </div>

                        <div className="right">
                            <h4 className="subtitle">Controls</h4>

                            <div className="control-group">
                                <label>State</label>
                                <select
                                    defaultValue="default"
                                    onChange={(e) => (window as any).__CATALOG_TEXTAREA__?.setState?.(e.target.value as any)}
                                >
                                    <option value="default">Default</option>
                                    <option value="hover">Hover</option>
                                    <option value="active">Active</option>
                                    <option value="filled">Filled</option>
                                    <option value="error">Error</option>
                                    <option value="error-filled">Error Filled</option>
                                </select>
                            </div>

                            <div className="control-group">
                                <label>
                                    <input
                                        type="checkbox"
                                        defaultChecked
                                        onChange={(e) => (window as any).__CATALOG_TEXTAREA__?.setShowLabel?.(e.currentTarget.checked)}
                                    />
                                    Show Label
                                </label>
                            </div>

                            <div className="control-group">
                                <label>Label</label>
                                <input
                                    type="text"
                                    defaultValue="Label"
                                    onInput={(e) => (window as any).__CATALOG_TEXTAREA__?.setLabel?.((e.target as HTMLInputElement).value)}
                                />
                            </div>

                            <div className="control-group">
                                <label>Placeholder</label>
                                <input
                                    type="text"
                                    defaultValue="Enter your message"
                                    onInput={(e) => (window as any).__CATALOG_TEXTAREA__?.setPlaceholder?.((e.target as HTMLInputElement).value)}
                                />
                            </div>

                            <div className="control-group">
                                <label>Value</label>
                                <input
                                    type="text"
                                    onInput={(e) => (window as any).__CATALOG_TEXTAREA__?.setValue?.((e.target as HTMLInputElement).value)}
                                />
                            </div>

                            <div className="control-group">
                                <label>
                                    <input
                                        type="checkbox"
                                        onChange={(e) => (window as any).__CATALOG_TEXTAREA__?.setShowError?.(e.currentTarget.checked)}
                                    />
                                    Show Error
                                </label>
                            </div>

                            <div className="control-group">
                                <label>Error Message</label>
                                <input
                                    type="text"
                                    onInput={(e) => (window as any).__CATALOG_TEXTAREA__?.setErrorMessage?.((e.target as HTMLInputElement).value)}
                                />
                            </div>

                            <div className="control-group">
                                <label>Rows</label>
                                <input
                                    type="number"
                                    defaultValue="4"
                                    onInput={(e) => (window as any).__CATALOG_TEXTAREA__?.setRows?.(parseInt((e.target as HTMLInputElement).value) || 4)}
                                />
                            </div>

                            <div className="control-group">
                                <label>
                                    <input
                                        type="checkbox"
                                        onChange={(e) => (window as any).__CATALOG_TEXTAREA__?.setDisabled?.(e.currentTarget.checked)}
                                    />
                                    Disabled
                                </label>
                            </div>

                        </div>
                    </div>
                </div>

                {/* CheckboxLine */}
                <div className="component-section">
                    <h3 className="component-title">CheckboxLine</h3>

                    <div className="component-demo">
                        <div className="left">
                            {(() => {
                                const [state, setState] = React.useState<'default' | 'active'>('default');
                                const [label, setLabel] = React.useState<string>('This is a gift');
                                const [checked, setChecked] = React.useState<boolean>(false);
                                const [disabled, setDisabled] = React.useState<boolean>(false);
                                const [className, setClassName] = React.useState<string>('');

                                (window as any).__CATALOG_CHECKBOXLINE__ = {
                                    state, setState,
                                    label, setLabel,
                                    checked, setChecked,
                                    disabled, setDisabled,
                                    className, setClassName,
                                };

                                return (
                                    <div style={{ width: '300px' }}>
                                        <CheckboxLine
                                            state={state}
                                            label={label}
                                            checked={checked}
                                            disabled={disabled}
                                            className={className}
                                        />
                                    </div>
                                );
                            })()}
                        </div>

                        <div className="right">
                            <h4 className="subtitle">Controls</h4>

                            <div className="control-group">
                                <label>State</label>
                                <select
                                    defaultValue="default"
                                    onChange={(e) => (window as any).__CATALOG_CHECKBOXLINE__?.setState?.(e.target.value as any)}
                                >
                                    <option value="default">Default</option>
                                    <option value="active">Active</option>
                                </select>
                            </div>

                            <div className="control-group">
                                <label>Label</label>
                                <input
                                    type="text"
                                    defaultValue="This is a gift"
                                    onInput={(e) => (window as any).__CATALOG_CHECKBOXLINE__?.setLabel?.((e.target as HTMLInputElement).value)}
                                />
                            </div>

                            <div className="control-group">
                                <label>
                                    <input
                                        type="checkbox"
                                        onChange={(e) => (window as any).__CATALOG_CHECKBOXLINE__?.setChecked?.(e.currentTarget.checked)}
                                    />
                                    Checked
                                </label>
                            </div>

                            <div className="control-group">
                                <label>
                                    <input
                                        type="checkbox"
                                        onChange={(e) => (window as any).__CATALOG_CHECKBOXLINE__?.setDisabled?.(e.currentTarget.checked)}
                                    />
                                    Disabled
                                </label>
                            </div>

                        </div>
                    </div>
                </div>

                {/* RadioInline */}
                <div className="component-section">
                    <h3 className="component-title">RadioInline</h3>

                    <div className="component-demo">
                        <div className="left">
                            {(() => {
                                const [state, setState] = React.useState<'unchecked' | 'hover' | 'checked'>('unchecked');
                                const [label, setLabel] = React.useState<string>('Breakfast Kit — Chicken');
                                const [price, setPrice] = React.useState<string>('$40');
                                const [selected, setSelected] = React.useState<boolean>(false);
                                const [disabled, setDisabled] = React.useState<boolean>(false);
                                const [showDivider, setShowDivider] = React.useState<boolean>(true);
                                const [className, setClassName] = React.useState<string>('');

                                (window as any).__CATALOG_RADIOINLINE__ = {
                                    state, setState,
                                    label, setLabel,
                                    price, setPrice,
                                    selected, setSelected,
                                    disabled, setDisabled,
                                    showDivider, setShowDivider,
                                    className, setClassName,
                                };

                                return (
                                    <div style={{ width: '300px' }}>
                                        <RadioInline
                                            state={state}
                                            label={label}
                                            price={price}
                                            selected={selected}
                                            disabled={disabled}
                                            showDivider={showDivider}
                                            className={className}
                                        />
                                    </div>
                                );
                            })()}
                        </div>

                        <div className="right">
                            <h4 className="subtitle">Controls</h4>

                            <div className="control-group">
                                <label>State</label>
                                <select
                                    defaultValue="unchecked"
                                    onChange={(e) => (window as any).__CATALOG_RADIOINLINE__?.setState?.(e.target.value as any)}
                                >
                                    <option value="unchecked">Unchecked</option>
                                    <option value="hover">Hover</option>
                                    <option value="checked">Checked</option>
                                </select>
                            </div>

                            <div className="control-group">
                                <label>Label</label>
                                <input
                                    type="text"
                                    defaultValue="Breakfast Kit — Chicken"
                                    onInput={(e) => (window as any).__CATALOG_RADIOINLINE__?.setLabel?.((e.target as HTMLInputElement).value)}
                                />
                            </div>

                            <div className="control-group">
                                <label>Price</label>
                                <input
                                    type="text"
                                    defaultValue="$40"
                                    onInput={(e) => (window as any).__CATALOG_RADIOINLINE__?.setPrice?.((e.target as HTMLInputElement).value)}
                                />
                            </div>

                            <div className="control-group">
                                <label>
                                    <input
                                        type="checkbox"
                                        onChange={(e) => (window as any).__CATALOG_RADIOINLINE__?.setSelected?.(e.currentTarget.checked)}
                                    />
                                    Selected
                                </label>
                            </div>

                            <div className="control-group">
                                <label>
                                    <input
                                        type="checkbox"
                                        onChange={(e) => (window as any).__CATALOG_RADIOINLINE__?.setDisabled?.(e.currentTarget.checked)}
                                    />
                                    Disabled
                                </label>
                            </div>

                            <div className="control-group">
                                <label>
                                    <input
                                        type="checkbox"
                                        defaultChecked
                                        onChange={(e) => (window as any).__CATALOG_RADIOINLINE__?.setShowDivider?.(e.currentTarget.checked)}
                                    />
                                    Show Divider
                                </label>
                            </div>

                        </div>
                    </div>
                </div>

                {/* SelectItem */}
                <div className="component-section">
                    <h3 className="component-title">SelectItem</h3>

                    <div className="component-demo">
                        <div className="left">
                            {(() => {
                                const [state, setState] = React.useState<'default' | 'hover'>('default');
                                const [selected, setSelected] = React.useState<boolean>(false);
                                const [disabled, setDisabled] = React.useState<boolean>(false);
                                const [children, setChildren] = React.useState<string>('No peanuts');
                                const [className, setClassName] = React.useState<string>('');

                                (window as any).__CATALOG_SELECTITEM__ = {
                                    state, setState,
                                    selected, setSelected,
                                    disabled, setDisabled,
                                    children, setChildren,
                                    className, setClassName,
                                };

                                return (
                                    <div style={{ width: '200px' }}>
                                        <SelectItem
                                            state={state}
                                            selected={selected}
                                            disabled={disabled}
                                            className={className}
                                        >
                                            {children}
                                        </SelectItem>
                                    </div>
                                );
                            })()}
                        </div>

                        <div className="right">
                            <h4 className="subtitle">Controls</h4>

                            <div className="control-group">
                                <label>State</label>
                                <select
                                    defaultValue="default"
                                    onChange={(e) => (window as any).__CATALOG_SELECTITEM__?.setState?.(e.target.value as any)}
                                >
                                    <option value="default">Default</option>
                                    <option value="hover">Hover</option>
                                </select>
                            </div>

                            <div className="control-group">
                                <label>Text</label>
                                <input
                                    type="text"
                                    defaultValue="No peanuts"
                                    onInput={(e) => (window as any).__CATALOG_SELECTITEM__?.setChildren?.((e.target as HTMLInputElement).value)}
                                />
                            </div>

                            <div className="control-group">
                                <label>
                                    <input
                                        type="checkbox"
                                        onChange={(e) => (window as any).__CATALOG_SELECTITEM__?.setSelected?.(e.currentTarget.checked)}
                                    />
                                    Selected
                                </label>
                            </div>

                            <div className="control-group">
                                <label>
                                    <input
                                        type="checkbox"
                                        onChange={(e) => (window as any).__CATALOG_SELECTITEM__?.setDisabled?.(e.currentTarget.checked)}
                                    />
                                    Disabled
                                </label>
                            </div>

                        </div>
                    </div>
                </div>

                {/* SelectList */}
                <div className="component-section">
                    <h3 className="component-title">SelectList</h3>

                    <div className="component-demo">
                        <div className="left">
                            {(() => {
                                const [selectedIndex, setSelectedIndex] = React.useState<number>(-1);
                                const [items, setItems] = React.useState<string[]>(['Option 1', 'Option 2', 'Option 3', 'Option 4']);
                                const [disabled, setDisabled] = React.useState<boolean>(false);
                                const [className, setClassName] = React.useState<string>('');

                                (window as any).__CATALOG_SELECTLIST__ = {
                                    selectedIndex, setSelectedIndex,
                                    items, setItems,
                                    disabled, setDisabled,
                                    className, setClassName,
                                };

                                return (
                                    <div style={{ width: '200px' }}>
                                        <SelectList
                                            selectedIndex={selectedIndex}
                                            items={items}
                                            disabled={disabled}
                                            className={className}
                                        />
                                    </div>
                                );
                            })()}
                        </div>

                        <div className="right">
                            <h4 className="subtitle">Controls</h4>

                            <div className="control-group">
                                <label>Selected Index</label>
                                <input
                                    type="number"
                                    defaultValue="-1"
                                    onInput={(e) => (window as any).__CATALOG_SELECTLIST__?.setSelectedIndex?.(parseInt((e.target as HTMLInputElement).value) || -1)}
                                />
                            </div>

                            <div className="control-group">
                                <label>Items (comma-separated)</label>
                                <input
                                    type="text"
                                    defaultValue="Option 1, Option 2, Option 3, Option 4"
                                    onInput={(e) => (window as any).__CATALOG_SELECTLIST__?.setItems?.((e.target as HTMLInputElement).value.split(',').map(item => item.trim()))}
                                />
                            </div>

                            <div className="control-group">
                                <label>
                                    <input
                                        type="checkbox"
                                        onChange={(e) => (window as any).__CATALOG_SELECTLIST__?.setDisabled?.(e.currentTarget.checked)}
                                    />
                                    Disabled
                                </label>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Tile */}
                <div className="component-section">
                    <h3 className="component-title">Tile</h3>

                    <div className="component-demo">
                        <div className="left">
                            {(() => {
                                const [state, setState] = React.useState<'default' | 'active'>('default');
                                const [title, setTitle] = React.useState<string>('');
                                const [description, setDescription] = React.useState<string>('');
                                const [rightLabel, setRightLabel] = React.useState<string>('');
                                const [showRightLabel, setShowRightLabel] = React.useState<boolean>(true);
                                const [showDescription, setShowDescription] = React.useState<boolean>(true);
                                const [showPill, setShowPill] = React.useState<boolean>(false);
                                const [showIcon, setShowIcon] = React.useState<boolean>(false);
                                const [disabled, setDisabled] = React.useState<boolean>(false);
                                const [className, setClassName] = React.useState<string>('');

                                (window as any).__CATALOG_TILE__ = {
                                    state, setState,
                                    title, setTitle,
                                    description, setDescription,
                                    rightLabel, setRightLabel,
                                    showRightLabel, setShowRightLabel,
                                    showDescription, setShowDescription,
                                    showPill, setShowPill,
                                    showIcon, setShowIcon,
                                    disabled, setDisabled,
                                    className, setClassName,
                                };

                                return (
                                    <div style={{ width: '350px' }}>
                                        <Tile
                                            state={state}
                                            title={title}
                                            description={description}
                                            rightLabel={rightLabel}
                                            showRightLabel={showRightLabel}
                                            showDescription={showDescription}
                                            showPill={showPill}
                                            showIcon={showIcon}
                                            disabled={disabled}
                                            className={className}
                                        />
                                    </div>
                                );
                            })()}
                        </div>

                        <div className="right">
                            <h4 className="subtitle">Controls</h4>

                            <div className="control-group">
                                <label>State</label>
                                <select
                                    defaultValue="default"
                                    onChange={(e) => (window as any).__CATALOG_TILE__?.setState?.(e.target.value as any)}
                                >
                                    <option value="default">Default</option>
                                    <option value="active">Active</option>
                                </select>
                            </div>

                            <div className="control-group">
                                <label>Title</label>
                                <input
                                    type="text"
                                    onInput={(e) => (window as any).__CATALOG_TILE__?.setTitle?.((e.target as HTMLInputElement).value)}
                                />
                            </div>

                            <div className="control-group">
                                <label>Description</label>
                                <input
                                    type="text"
                                    onInput={(e) => (window as any).__CATALOG_TILE__?.setDescription?.((e.target as HTMLInputElement).value)}
                                />
                            </div>

                            <div className="control-group">
                                <label>Right Label</label>
                                <input
                                    type="text"
                                    onInput={(e) => (window as any).__CATALOG_TILE__?.setRightLabel?.((e.target as HTMLInputElement).value)}
                                />
                            </div>

                            <div className="control-group">
                                <label>
                                    <input
                                        type="checkbox"
                                        defaultChecked
                                        onChange={(e) => (window as any).__CATALOG_TILE__?.setShowRightLabel?.(e.currentTarget.checked)}
                                    />
                                    Show Right Label
                                </label>
                            </div>

                            <div className="control-group">
                                <label>
                                    <input
                                        type="checkbox"
                                        defaultChecked
                                        onChange={(e) => (window as any).__CATALOG_TILE__?.setShowDescription?.(e.currentTarget.checked)}
                                    />
                                    Show Description
                                </label>
                            </div>

                            <div className="control-group">
                                <label>
                                    <input
                                        type="checkbox"
                                        onChange={(e) => (window as any).__CATALOG_TILE__?.setShowPill?.(e.currentTarget.checked)}
                                    />
                                    Show Pill
                                </label>
                            </div>

                            <div className="control-group">
                                <label>
                                    <input
                                        type="checkbox"
                                        onChange={(e) => (window as any).__CATALOG_TILE__?.setShowIcon?.(e.currentTarget.checked)}
                                    />
                                    Show Icon
                                </label>
                            </div>

                            <div className="control-group">
                                <label>
                                    <input
                                        type="checkbox"
                                        onChange={(e) => (window as any).__CATALOG_TILE__?.setDisabled?.(e.currentTarget.checked)}
                                    />
                                    Disabled
                                </label>
                            </div>

                        </div>
                    </div>
                </div>

                {/* TileMultiItem */}
                <div className="component-section">
                    <h3 className="component-title">TileMultiItem</h3>

                    <div className="component-demo">
                        <div className="left">
                            {(() => {
                                const [options, setOptions] = React.useState<TileMultiItemOption[]>([
                                    { id: '1', label: '2 bottles', price: '+ $45' },
                                    { id: '2', label: '4 bottles', price: '+ $90' },
                                    { id: '3', label: 'No, thank you', price: '', selected: true }
                                ]);
                                const [selectedId, setSelectedId] = React.useState<string>('3');
                                const [disabled, setDisabled] = React.useState<boolean>(false);
                                const [className, setClassName] = React.useState<string>('');

                                (window as any).__CATALOG_TILEMULTIITEM__ = {
                                    options, setOptions,
                                    selectedId, setSelectedId,
                                    disabled, setDisabled,
                                    className, setClassName,
                                };

                                return (
                                    <div style={{ width: '350px' }}>
                                        <TileMultiItem
                                            options={options}
                                            selectedId={selectedId}
                                            disabled={disabled}
                                            className={className}
                                        />
                                    </div>
                                );
                            })()}
                        </div>

                        <div className="right">
                            <h4 className="subtitle">Controls</h4>

                            <div className="control-group">
                                <label>Selected ID</label>
                                <input
                                    type="text"
                                    defaultValue="3"
                                    onInput={(e) => (window as any).__CATALOG_TILEMULTIITEM__?.setSelectedId?.((e.target as HTMLInputElement).value)}
                                />
                            </div>

                            <div className="control-group">
                                <label>Options (JSON format)</label>
                                <textarea
                                    rows={4}
                                    defaultValue={JSON.stringify([
                                        { id: '1', label: '2 bottles', price: '+ $45' },
                                        { id: '2', label: '4 bottles', price: '+ $90' },
                                        { id: '3', label: 'No, thank you', price: '', selected: true }
                                    ], null, 2)}
                                    onInput={(e) => {
                                        try {
                                            const parsed = JSON.parse((e.target as HTMLTextAreaElement).value);
                                            (window as any).__CATALOG_TILEMULTIITEM__?.setOptions?.(parsed);
                                        } catch (e) {
                                            // Invalid JSON, ignore
                                        }
                                    }}
                                />
                            </div>

                            <div className="control-group">
                                <label>
                                    <input
                                        type="checkbox"
                                        onChange={(e) => (window as any).__CATALOG_TILEMULTIITEM__?.setDisabled?.(e.currentTarget.checked)}
                                    />
                                    Disabled
                                </label>
                            </div>

                        </div>
                    </div>
                </div>

                {/* IconLine */}
                <div className="component-section">
                    <h3 className="component-title">IconLine</h3>

                    <div className="component-demo">
                        <div className="left">
                            {(() => {
                                const [children, setChildren] = React.useState<string>('Custom text content');
                                const [disabled, setDisabled] = React.useState<boolean>(false);
                                const [className, setClassName] = React.useState<string>('');

                                (window as any).__CATALOG_ICONLINE__ = {
                                    children, setChildren,
                                    disabled, setDisabled,
                                    className, setClassName,
                                };

                                return (
                                    <div style={{ width: '350px' }}>
                                        <IconLine
                                            disabled={disabled}
                                            className={className}
                                        >
                                            {children}
                                        </IconLine>
                                    </div>
                                );
                            })()}
                        </div>

                        <div className="right">
                            <h4 className="subtitle">Controls</h4>

                            <div className="control-group">
                                <label>Text Content</label>
                                <input
                                    type="text"
                                    defaultValue="Custom text content"
                                    onInput={(e) => (window as any).__CATALOG_ICONLINE__?.setChildren?.((e.target as HTMLInputElement).value)}
                                />
                            </div>

                            <div className="control-group">
                                <label>
                                    <input
                                        type="checkbox"
                                        onChange={(e) => (window as any).__CATALOG_ICONLINE__?.setDisabled?.(e.currentTarget.checked)}
                                    />
                                    Disabled
                                </label>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Banner */}
                <div className="component-section">
                    <h3 className="component-title">Banner</h3>

                    <div className="component-demo">
                        <div className="left">
                            {(() => {
                                const [children, setChildren] = React.useState<string>('Success! Your changes have been saved.');
                                const [type, setType] = React.useState<'default' | 'success' | 'warning' | 'alert'>('success');
                                const [showLeftIcon, setShowLeftIcon] = React.useState<boolean>(true);
                                const [showRightIcon, setShowRightIcon] = React.useState<boolean>(true);
                                const [dismissible, setDismissible] = React.useState<boolean>(true);
                                const [className, setClassName] = React.useState<string>('');

                                (window as any).__CATALOG_BANNER__ = {
                                    children, setChildren,
                                    type, setType,
                                    showLeftIcon, setShowLeftIcon,
                                    showRightIcon, setShowRightIcon,
                                    dismissible, setDismissible,
                                    className, setClassName,
                                };

                                return (
                                    <div style={{ width: '450px' }}>
                                        <Banner
                                            type={type}
                                            showLeftIcon={showLeftIcon}
                                            showRightIcon={showRightIcon}
                                            dismissible={dismissible}
                                            className={className}
                                        >
                                            {children}
                                        </Banner>
                                    </div>
                                );
                            })()}
                        </div>

                        <div className="right">
                            <h4 className="subtitle">Controls</h4>

                            <div className="control-group">
                                <label>Content</label>
                                <input
                                    type="text"
                                    defaultValue="Success! Your changes have been saved."
                                    onInput={(e) => (window as any).__CATALOG_BANNER__?.setChildren?.((e.target as HTMLInputElement).value)}
                                />
                            </div>

                            <div className="control-group">
                                <label>Type</label>
                                <select
                                    defaultValue="success"
                                    onChange={(e) => (window as any).__CATALOG_BANNER__?.setType?.(e.target.value as any)}
                                >
                                    <option value="default">Default</option>
                                    <option value="success">Success</option>
                                    <option value="warning">Warning</option>
                                    <option value="alert">Alert</option>
                                </select>
                            </div>

                            <div className="control-group">
                                <label>
                                    <input
                                        type="checkbox"
                                        defaultChecked
                                        onChange={(e) => (window as any).__CATALOG_BANNER__?.setShowLeftIcon?.(e.currentTarget.checked)}
                                    />
                                    Show Left Icon
                                </label>
                            </div>

                            <div className="control-group">
                                <label>
                                    <input
                                        type="checkbox"
                                        defaultChecked
                                        onChange={(e) => (window as any).__CATALOG_BANNER__?.setShowRightIcon?.(e.currentTarget.checked)}
                                    />
                                    Show Right Icon
                                </label>
                            </div>

                            <div className="control-group">
                                <label>
                                    <input
                                        type="checkbox"
                                        defaultChecked
                                        onChange={(e) => (window as any).__CATALOG_BANNER__?.setDismissible?.(e.currentTarget.checked)}
                                    />
                                    Dismissible
                                </label>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Navigation Molecules Section */}
            <section style={{ marginBottom: '48px' }}>
                <h2 style={{
                    fontSize: '24px',
                    fontWeight: '600',
                    marginBottom: '24px',
                    color: 'var(--color-foreground-primary)'
                }}>
                    Navigation Molecules
                </h2>

                {/* CarouselNav */}
                <div className="component-section">
                    <h3 className="component-title">CarouselNav</h3>

                    <div className="component-demo">
                        <div className="left">
                            {(() => {
                                const [prevDisabled, setPrevDisabled] = React.useState<boolean>(false);
                                const [nextDisabled, setNextDisabled] = React.useState<boolean>(false);
                                const [className, setClassName] = React.useState<string>('');

                                (window as any).__CATALOG_CAROUSELNAV__ = {
                                    prevDisabled, setPrevDisabled,
                                    nextDisabled, setNextDisabled,
                                    className, setClassName,
                                };

                                return (
                                    <div style={{ width: '200px' }}>
                                        <CarouselNav
                                            prevDisabled={prevDisabled}
                                            nextDisabled={nextDisabled}
                                            className={className}
                                        />
                                    </div>
                                );
                            })()}
                        </div>

                        <div className="right">
                            <h4 className="subtitle">Controls</h4>

                            <div className="control-group">
                                <label>
                                    <input
                                        type="checkbox"
                                        onChange={(e) => (window as any).__CATALOG_CAROUSELNAV__?.setPrevDisabled?.(e.currentTarget.checked)}
                                    />
                                    Previous Disabled
                                </label>
                            </div>

                            <div className="control-group">
                                <label>
                                    <input
                                        type="checkbox"
                                        onChange={(e) => (window as any).__CATALOG_CAROUSELNAV__?.setNextDisabled?.(e.currentTarget.checked)}
                                    />
                                    Next Disabled
                                </label>
                            </div>

                        </div>
                    </div>
                </div>

                {/* CarouselPips */}
                <div className="component-section">
                    <h3 className="component-title">CarouselPips</h3>

                    <div className="component-demo">
                        <div className="left">
                            {(() => {
                                const [totalItems, setTotalItems] = React.useState<number>(3);
                                const [activeIndex, setActiveIndex] = React.useState<number>(0);
                                const [className, setClassName] = React.useState<string>('');

                                (window as any).__CATALOG_CAROUSELPIPS__ = {
                                    totalItems, setTotalItems,
                                    activeIndex, setActiveIndex,
                                    className, setClassName,
                                };

                                return (
                                    <div style={{ width: '200px' }}>
                                        <CarouselPips
                                            totalItems={totalItems}
                                            activeIndex={activeIndex}
                                            className={className}
                                        />
                                    </div>
                                );
                            })()}
                        </div>

                        <div className="right">
                            <h4 className="subtitle">Controls</h4>

                            <div className="control-group">
                                <label>Total Items</label>
                                <input
                                    type="number"
                                    defaultValue="3"
                                    min="1"
                                    max="10"
                                    onInput={(e) => (window as any).__CATALOG_CAROUSELPIPS__?.setTotalItems?.(parseInt((e.target as HTMLInputElement).value) || 3)}
                                />
                            </div>

                            <div className="control-group">
                                <label>Active Index</label>
                                <input
                                    type="number"
                                    defaultValue="0"
                                    min="0"
                                    onInput={(e) => (window as any).__CATALOG_CAROUSELPIPS__?.setActiveIndex?.(parseInt((e.target as HTMLInputElement).value) || 0)}
                                />
                            </div>

                        </div>
                    </div>
                </div>

                {/* PageHeader */}
                <div className="component-section">
                    <h3 className="component-title">PageHeader</h3>

                    <div className="component-demo">
                        <div className="left">
                            {(() => {
                                const [backText, setBackText] = React.useState<string>('Back');
                                const [title, setTitle] = React.useState<string>('Page Title');
                                const [subtitle, setSubtitle] = React.useState<string>('Page Subtitle');
                                const [showBackButton, setShowBackButton] = React.useState<boolean>(true);
                                const [className, setClassName] = React.useState<string>('');

                                (window as any).__CATALOG_PAGEHEADER__ = {
                                    backText, setBackText,
                                    title, setTitle,
                                    subtitle, setSubtitle,
                                    showBackButton, setShowBackButton,
                                    className, setClassName,
                                };

                                return (
                                    <div style={{ width: '400px' }}>
                                        <PageHeader
                                            backText={backText}
                                            title={title}
                                            subtitle={subtitle}
                                            showBackButton={showBackButton}
                                            className={className}
                                        />
                                    </div>
                                );
                            })()}
                        </div>

                        <div className="right">
                            <h4 className="subtitle">Controls</h4>

                            <div className="control-group">
                                <label>Back Text</label>
                                <input
                                    type="text"
                                    defaultValue="Back"
                                    onInput={(e) => (window as any).__CATALOG_PAGEHEADER__?.setBackText?.((e.target as HTMLInputElement).value)}
                                />
                            </div>

                            <div className="control-group">
                                <label>Title</label>
                                <input
                                    type="text"
                                    defaultValue="Page Title"
                                    onInput={(e) => (window as any).__CATALOG_PAGEHEADER__?.setTitle?.((e.target as HTMLInputElement).value)}
                                />
                            </div>

                            <div className="control-group">
                                <label>Subtitle</label>
                                <input
                                    type="text"
                                    defaultValue="Page Subtitle"
                                    onInput={(e) => (window as any).__CATALOG_PAGEHEADER__?.setSubtitle?.((e.target as HTMLInputElement).value)}
                                />
                            </div>

                            <div className="control-group">
                                <label>
                                    <input
                                        type="checkbox"
                                        defaultChecked
                                        onChange={(e) => (window as any).__CATALOG_PAGEHEADER__?.setShowBackButton?.(e.currentTarget.checked)}
                                    />
                                    Show Back Button
                                </label>
                            </div>

                        </div>
                    </div>
                </div>

                {/* FooterPDP */}
                <div className="component-section">
                    <h3 className="component-title">FooterPDP</h3>

                    <div className="component-demo">
                        <div className="left">
                            {(() => {
                                const [device, setDevice] = React.useState<'mobile' | 'desktop'>('mobile');
                                const [buttonText, setButtonText] = React.useState<string>('Add to Cart');
                                const [priceText, setPriceText] = React.useState<string>('$29.99');
                                const [className, setClassName] = React.useState<string>('');

                                (window as any).__CATALOG_FOOTERPDP__ = {
                                    device, setDevice,
                                    buttonText, setButtonText,
                                    priceText, setPriceText,
                                    className, setClassName,
                                };

                                return (
                                    <div style={{ width: '300px' }}>
                                        <FooterPDP
                                            device={device}
                                            buttonText={buttonText}
                                            priceText={priceText}
                                            className={className}
                                        />
                                    </div>
                                );
                            })()}
                        </div>

                        <div className="right">
                            <h4 className="subtitle">Controls</h4>

                            <div className="control-group">
                                <label>Device</label>
                                <select
                                    defaultValue="mobile"
                                    onChange={(e) => (window as any).__CATALOG_FOOTERPDP__?.setDevice?.(e.target.value as 'mobile' | 'desktop')}
                                >
                                    <option value="mobile">Mobile</option>
                                    <option value="desktop">Desktop</option>
                                </select>
                            </div>

                            <div className="control-group">
                                <label>Button Text</label>
                                <input
                                    type="text"
                                    defaultValue="Add to Cart"
                                    onInput={(e) => (window as any).__CATALOG_FOOTERPDP__?.setButtonText?.((e.target as HTMLInputElement).value)}
                                />
                            </div>

                            <div className="control-group">
                                <label>Price Text</label>
                                <input
                                    type="text"
                                    defaultValue="$29.99"
                                    onInput={(e) => (window as any).__CATALOG_FOOTERPDP__?.setPriceText?.((e.target as HTMLInputElement).value)}
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Layout Molecules Section */}
            <section style={{ marginBottom: '48px' }}>
                <h2 style={{
                    fontSize: '24px',
                    fontWeight: '600',
                    marginBottom: '24px',
                    color: 'var(--color-foreground-primary)'
                }}>
                    Layout Molecules
                </h2>

                {/* PageDivider */}
                <div className="component-section">
                    <h3 className="component-title">PageDivider</h3>

                    <div className="component-demo">
                        <div className="left">
                            {(() => {
                                const [variant, setVariant] = React.useState<'default' | 'labelled' | 'blank' | 'desktop'>('default');
                                const [label, setLabel] = React.useState<string>('Or pay by card');
                                const [className, setClassName] = React.useState<string>('');

                                (window as any).__CATALOG_PAGEDIVIDER__ = {
                                    variant, setVariant,
                                    label, setLabel,
                                    className, setClassName,
                                };

                                return (
                                    <div style={{ width: '400px' }}>
                                        <PageDivider
                                            variant={variant}
                                            label={label}
                                            className={className}
                                        />
                                    </div>
                                );
                            })()}
                        </div>

                        <div className="right">
                            <h4 className="subtitle">Controls</h4>

                            <div className="control-group">
                                <label>Variant</label>
                                <select
                                    defaultValue="default"
                                    onChange={(e) => (window as any).__CATALOG_PAGEDIVIDER__?.setVariant?.(e.target.value as any)}
                                >
                                    <option value="default">Default</option>
                                    <option value="labelled">Labelled</option>
                                    <option value="blank">Blank</option>
                                    <option value="desktop">Desktop</option>
                                </select>
                            </div>

                            <div className="control-group">
                                <label>Label</label>
                                <input
                                    type="text"
                                    defaultValue="Or pay by card"
                                    onInput={(e) => (window as any).__CATALOG_PAGEDIVIDER__?.setLabel?.((e.target as HTMLInputElement).value)}
                                />
                            </div>

                        </div>
                    </div>
                </div>

                {/* FAQCell */}
                <div className="component-section">
                    <h3 className="component-title">FAQCell</h3>

                    <div className="component-demo">
                        <div className="left">
                            {(() => {
                                const [question, setQuestion] = React.useState<string>('How do I cancel my subscription?');
                                const [answer, setAnswer] = React.useState<string>('You can cancel your subscription at any time by going to your account settings.');
                                const [className, setClassName] = React.useState<string>('');

                                (window as any).__CATALOG_FAQCELL__ = {
                                    question, setQuestion,
                                    answer, setAnswer,
                                    className, setClassName,
                                };

                                return (
                                    <div style={{ width: '300px' }}>
                                        <FAQCell
                                            question={question}
                                            answer={answer}
                                            className={className}
                                        />
                                    </div>
                                );
                            })()}
                        </div>

                        <div className="right">
                            <h4 className="subtitle">Controls</h4>

                            <div className="control-group">
                                <label>Question</label>
                                <input
                                    type="text"
                                    defaultValue="How do I cancel my subscription?"
                                    onInput={(e) => (window as any).__CATALOG_FAQCELL__?.setQuestion?.((e.target as HTMLInputElement).value)}
                                />
                            </div>

                            <div className="control-group">
                                <label>Answer</label>
                                <textarea
                                    rows={3}
                                    defaultValue="You can cancel your subscription at any time by going to your account settings."
                                    onInput={(e) => (window as any).__CATALOG_FAQCELL__?.setAnswer?.((e.target as HTMLTextAreaElement).value)}
                                />
                            </div>

                        </div>
                    </div>
                </div>

                {/* StarRating */}
                <div className="component-section">
                    <h3 className="component-title">StarRating</h3>

                    <div className="component-demo">
                        <div className="left">
                            {(() => {
                                const [rating, setRating] = React.useState<number>(3);
                                const [maxRating, setMaxRating] = React.useState<number>(5);
                                const [interactive, setInteractive] = React.useState<boolean>(false);
                                const [size, setSize] = React.useState<number>(20);
                                const [className, setClassName] = React.useState<string>('');

                                (window as any).__CATALOG_STARRATING__ = {
                                    rating, setRating,
                                    maxRating, setMaxRating,
                                    interactive, setInteractive,
                                    size, setSize,
                                    className, setClassName,
                                };

                                return (
                                    <div style={{ width: '200px' }}>
                                        <StarRating
                                            rating={rating}
                                            maxRating={maxRating}
                                            interactive={interactive}
                                            size={size}
                                            className={className}
                                        />
                                    </div>
                                );
                            })()}
                        </div>

                        <div className="right">
                            <h4 className="subtitle">Controls</h4>

                            <div className="control-group">
                                <label>Rating</label>
                                <input
                                    type="number"
                                    defaultValue="3"
                                    min="0"
                                    max="5"
                                    onInput={(e) => (window as any).__CATALOG_STARRATING__?.setRating?.(parseInt((e.target as HTMLInputElement).value) || 0)}
                                />
                            </div>

                            <div className="control-group">
                                <label>Max Rating</label>
                                <input
                                    type="number"
                                    defaultValue="5"
                                    min="1"
                                    max="10"
                                    onInput={(e) => (window as any).__CATALOG_STARRATING__?.setMaxRating?.(parseInt((e.target as HTMLInputElement).value) || 5)}
                                />
                            </div>

                            <div className="control-group">
                                <label>Size (px)</label>
                                <input
                                    type="number"
                                    defaultValue="20"
                                    min="10"
                                    max="50"
                                    onInput={(e) => (window as any).__CATALOG_STARRATING__?.setSize?.(parseInt((e.target as HTMLInputElement).value) || 20)}
                                />
                            </div>

                            <div className="control-group">
                                <label>
                                    <input
                                        type="checkbox"
                                        onChange={(e) => (window as any).__CATALOG_STARRATING__?.setInteractive?.(e.currentTarget.checked)}
                                    />
                                    Interactive
                                </label>
                            </div>

                        </div>
                    </div>
                </div>

                {/* AddOn */}
                <div className="component-section">
                    <h3 className="component-title">AddOn</h3>

                    <div className="component-demo">
                        <div className="left">
                            {(() => {
                                const [title, setTitle] = React.useState<string>('Optional wine pairing');
                                const [description, setDescription] = React.useState<string>('Tailored to each month\'s menu.');
                                const [imageUrl, setImageUrl] = React.useState<string>('');
                                const [options, setOptions] = React.useState<AddOnOption[]>([
                                    { id: 'none', label: 'No, thank you', price: '', selected: true },
                                    { id: 'red', label: '1 bottle of red', price: '+ $35' },
                                    { id: 'white', label: '1 bottle of white', price: '+ $35' },
                                ]);
                                const [selectedOptionId, setSelectedOptionId] = React.useState<string>('none');
                                const [className, setClassName] = React.useState<string>('');

                                (window as any).__CATALOG_ADDON__ = {
                                    title, setTitle,
                                    description, setDescription,
                                    imageUrl, setImageUrl,
                                    options, setOptions,
                                    selectedOptionId, setSelectedOptionId,
                                    className, setClassName,
                                };

                                return (
                                    <div style={{ width: '300px' }}>
                                        <AddOn
                                            title={title}
                                            description={description}
                                            imageUrl={imageUrl}
                                            options={options}
                                            selectedOptionId={selectedOptionId}
                                            className={className}
                                        />
                                    </div>
                                );
                            })()}
                        </div>

                        <div className="right">
                            <h4 className="subtitle">Controls</h4>

                            <div className="control-group">
                                <label>Title</label>
                                <input
                                    type="text"
                                    defaultValue="Optional wine pairing"
                                    onInput={(e) => (window as any).__CATALOG_ADDON__?.setTitle?.((e.target as HTMLInputElement).value)}
                                />
                            </div>

                            <div className="control-group">
                                <label>Description</label>
                                <textarea
                                    rows={2}
                                    defaultValue="Tailored to each month's menu."
                                    onInput={(e) => (window as any).__CATALOG_ADDON__?.setDescription?.((e.target as HTMLTextAreaElement).value)}
                                />
                            </div>

                            <div className="control-group">
                                <label>Image URL</label>
                                <input
                                    type="text"
                                    onInput={(e) => (window as any).__CATALOG_ADDON__?.setImageUrl?.((e.target as HTMLInputElement).value)}
                                />
                            </div>

                            <div className="control-group">
                                <label>Selected Option ID</label>
                                <input
                                    type="text"
                                    defaultValue="none"
                                    onInput={(e) => (window as any).__CATALOG_ADDON__?.setSelectedOptionId?.((e.target as HTMLInputElement).value)}
                                />
                            </div>

                            <div className="control-group">
                                <label>Options (JSON format)</label>
                                <textarea
                                    rows={4}
                                    defaultValue={JSON.stringify([
                                        { id: 'none', label: 'No, thank you', price: '', selected: true },
                                        { id: 'red', label: '1 bottle of red', price: '+ $35' },
                                        { id: 'white', label: '1 bottle of white', price: '+ $35' },
                                    ], null, 2)}
                                    onInput={(e) => {
                                        try {
                                            const parsed = JSON.parse((e.target as HTMLTextAreaElement).value);
                                            (window as any).__CATALOG_ADDON__?.setOptions?.(parsed);
                                        } catch (e) {
                                            // Invalid JSON, ignore
                                        }
                                    }}
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Complex Molecules Section */}
            <section style={{ marginBottom: '48px' }}>
                <h2 style={{
                    fontSize: '24px',
                    fontWeight: '600',
                    marginBottom: '24px',
                    color: 'var(--color-foreground-primary)'
                }}>
                    Complex Molecules
                </h2>

                {/* Dialogue */}
                <div className="component-section">
                    <h3 className="component-title">Dialogue</h3>

                    <div className="component-demo">
                        <div className="left">
                            {(() => {
                                const [title, setTitle] = React.useState<string>('Modal template');
                                const [description, setDescription] = React.useState<string>('Body copy');
                                const [primaryButtonText, setPrimaryButtonText] = React.useState<string>('Primary');
                                const [secondaryButtonText, setSecondaryButtonText] = React.useState<string>('Secondary');
                                const [showTextArea, setShowTextArea] = React.useState<boolean>(true);
                                const [textAreaPlaceholder, setTextAreaPlaceholder] = React.useState<string>('Text area');
                                const [variant, setVariant] = React.useState<'default' | 'desktop'>('default');
                                const [isOpen, setIsOpen] = React.useState<boolean>(true);
                                const [inline, setInline] = React.useState<boolean>(true);
                                const [className, setClassName] = React.useState<string>('');

                                (window as any).__CATALOG_DIALOGUE__ = {
                                    title, setTitle,
                                    description, setDescription,
                                    primaryButtonText, setPrimaryButtonText,
                                    secondaryButtonText, setSecondaryButtonText,
                                    showTextArea, setShowTextArea,
                                    textAreaPlaceholder, setTextAreaPlaceholder,
                                    variant, setVariant,
                                    isOpen, setIsOpen,
                                    inline, setInline,
                                    className, setClassName,
                                };

                                return (
                                    <div style={{ width: '400px' }}>
                                        <Dialogue
                                            title={title}
                                            description={description}
                                            primaryButtonText={primaryButtonText}
                                            secondaryButtonText={secondaryButtonText}
                                            showTextArea={showTextArea}
                                            textAreaPlaceholder={textAreaPlaceholder}
                                            variant={variant}
                                            isOpen={isOpen}
                                            inline={inline}
                                            className={className}
                                        />
                                    </div>
                                );
                            })()}
                        </div>

                        <div className="right">
                            <h4 className="subtitle">Controls</h4>

                            <div className="control-group">
                                <label>Title</label>
                                <input
                                    type="text"
                                    defaultValue="Modal template"
                                    onInput={(e) => (window as any).__CATALOG_DIALOGUE__?.setTitle?.((e.target as HTMLInputElement).value)}
                                />
                            </div>

                            <div className="control-group">
                                <label>Description</label>
                                <input
                                    type="text"
                                    defaultValue="Body copy"
                                    onInput={(e) => (window as any).__CATALOG_DIALOGUE__?.setDescription?.((e.target as HTMLInputElement).value)}
                                />
                            </div>

                            <div className="control-group">
                                <label>Primary Button Text</label>
                                <input
                                    type="text"
                                    defaultValue="Primary"
                                    onInput={(e) => (window as any).__CATALOG_DIALOGUE__?.setPrimaryButtonText?.((e.target as HTMLInputElement).value)}
                                />
                            </div>

                            <div className="control-group">
                                <label>Secondary Button Text</label>
                                <input
                                    type="text"
                                    defaultValue="Secondary"
                                    onInput={(e) => (window as any).__CATALOG_DIALOGUE__?.setSecondaryButtonText?.((e.target as HTMLInputElement).value)}
                                />
                            </div>

                            <div className="control-group">
                                <label>Text Area Placeholder</label>
                                <input
                                    type="text"
                                    defaultValue="Text area"
                                    onInput={(e) => (window as any).__CATALOG_DIALOGUE__?.setTextAreaPlaceholder?.((e.target as HTMLInputElement).value)}
                                />
                            </div>

                            <div className="control-group">
                                <label>Variant</label>
                                <select
                                    defaultValue="default"
                                    onChange={(e) => (window as any).__CATALOG_DIALOGUE__?.setVariant?.(e.target.value as 'default' | 'desktop')}
                                >
                                    <option value="default">Default</option>
                                    <option value="desktop">Desktop</option>
                                </select>
                            </div>

                            <div className="control-group">
                                <label>
                                    <input
                                        type="checkbox"
                                        defaultChecked
                                        onChange={(e) => (window as any).__CATALOG_DIALOGUE__?.setShowTextArea?.(e.currentTarget.checked)}
                                    />
                                    Show Text Area
                                </label>
                            </div>

                            <div className="control-group">
                                <label>
                                    <input
                                        type="checkbox"
                                        defaultChecked
                                        onChange={(e) => (window as any).__CATALOG_DIALOGUE__?.setIsOpen?.(e.currentTarget.checked)}
                                    />
                                    Is Open
                                </label>
                            </div>

                            <div className="control-group">
                                <label>
                                    <input
                                        type="checkbox"
                                        defaultChecked
                                        onChange={(e) => (window as any).__CATALOG_DIALOGUE__?.setInline?.(e.currentTarget.checked)}
                                    />
                                    Inline
                                </label>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Lists */}
                <div className="component-section">
                    <h3 className="component-title">Lists</h3>

                    <div className="component-demo">
                        <div className="left">
                            {(() => {
                                const [title, setTitle] = React.useState<string>('title');
                                const [items, setItems] = React.useState<ListItem[]>([
                                    { id: '1', text: 'Text' },
                                    { id: '2', text: 'Text' },
                                    { id: '3', text: 'Text' },
                                ]);
                                const [className, setClassName] = React.useState<string>('');

                                (window as any).__CATALOG_LISTS__ = {
                                    title, setTitle,
                                    items, setItems,
                                    className, setClassName,
                                };

                                return (
                                    <div style={{ width: '250px' }}>
                                        <Lists
                                            title={title}
                                            items={items}
                                            className={className}
                                        />
                                    </div>
                                );
                            })()}
                        </div>

                        <div className="right">
                            <h4 className="subtitle">Controls</h4>

                            <div className="control-group">
                                <label>Title</label>
                                <input
                                    type="text"
                                    defaultValue="title"
                                    onInput={(e) => (window as any).__CATALOG_LISTS__?.setTitle?.((e.target as HTMLInputElement).value)}
                                />
                            </div>

                            <div className="control-group">
                                <label>Items (JSON format)</label>
                                <textarea
                                    rows={4}
                                    defaultValue={JSON.stringify([
                                        { id: '1', text: 'Text' },
                                        { id: '2', text: 'Text' },
                                        { id: '3', text: 'Text' },
                                    ], null, 2)}
                                    onInput={(e) => {
                                        try {
                                            const parsed = JSON.parse((e.target as HTMLTextAreaElement).value);
                                            (window as any).__CATALOG_LISTS__?.setItems?.(parsed);
                                        } catch (e) {
                                            // Invalid JSON, ignore
                                        }
                                    }}
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Design Tokens Section */}
            <section className="component-section">
                <h2 className="section-title">
                    Design Tokens
                </h2>

                <div className="tokens-grid">
                    <div>
                        <h3 className="component-title">Colors</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <div className="token-item">
                                <div className="token-name">--color-foreground-primary</div>
                                <div className="token-value">#141414</div>
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
                        <h3 className="component-title">Typography</h3>
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

