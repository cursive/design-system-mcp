import React from 'react';
import { ComponentSection } from '../components';
import { Button } from '../molecules/Button';
import { PanelHeader } from '../molecules/PanelHeader';
import { Textfield } from '../molecules/Textfield';
import { Select } from '../molecules/Select';
import { TextArea } from '../molecules/TextArea';
import { CheckboxLine } from '../molecules/CheckboxLine';
import { RadioInline } from '../molecules/RadioInline';
import { SelectItem } from '../molecules/SelectItem';
import { SelectList } from '../molecules/SelectList';
import { Tile } from '../molecules/Tile';
import { TileMultiItem, TileMultiItemOption } from '../molecules/TileMultiItem';
import { IconLine } from '../molecules/IconLine';
import { Banner } from '../molecules/Banner';
import { CarouselNav } from '../molecules/CarouselNav';
import { CarouselPips } from '../molecules/CarouselPips';
import { PageHeader } from '../molecules/PageHeader';
import { FooterPDP } from '../molecules/FooterPDP';
import { PageDivider } from '../molecules/PageDivider';
import { FAQCell } from '../molecules/FAQCell';
import { StarRating } from '../molecules/StarRating';
import { AddOn, AddOnOption } from '../molecules/AddOn';
import { Dialogue } from '../molecules/Dialogue';
import { Lists, ListItem } from '../molecules/Lists';

export const MoleculesSection: React.FC = () => {
    return (
        <section>
            <h2 className="section-title">Molecules</h2>

            {/* Basic Form Molecules */}
            <ComponentSection
                title="Button"
                component={
                    (() => {
                        const [state, setState] = React.useState<'default' | 'hover' | 'active' | 'disabled'>('default');
                        const [variant, setVariant] = React.useState<'primary' | 'secondary' | 'tertiary'>('primary');
                        const [size, setSize] = React.useState<'small' | 'medium' | 'large'>('medium');
                        const [showIcon, setShowIcon] = React.useState<boolean>(false);
                        const [label, setLabel] = React.useState<string>('Button');

                        (window as any).__CATALOG_BUTTON__ = {
                            state, setState,
                            variant, setVariant,
                            size, setSize,
                            showIcon, setShowIcon,
                            label, setLabel,
                        };

                        return (
                            <div style={{ width: '200px' }}>
                                <Button
                                    style={variant === 'primary' ? 'primary' : variant === 'secondary' ? 'secondary' : 'accent'}
                                    state={state === 'disabled' ? 'disabled' : state === 'hover' ? 'hover' : 'default'}
                                    disabled={state === 'disabled'}
                                    showIcon={showIcon}
                                >
                                    {label}
                                </Button>
                            </div>
                        );
                    })()
                }
                controls={
                    <div>
                        <div className="control-group">
                            <label>State</label>
                            <select
                                defaultValue="default"
                                onChange={(e) => (window as any).__CATALOG_BUTTON__?.setState?.(e.target.value as any)}
                            >
                                <option value="default">Default</option>
                                <option value="hover">Hover</option>
                                <option value="active">Active</option>
                                <option value="disabled">Disabled</option>
                            </select>
                        </div>

                        <div className="control-group">
                            <label>Variant</label>
                            <select
                                defaultValue="primary"
                                onChange={(e) => (window as any).__CATALOG_BUTTON__?.setVariant?.(e.target.value as any)}
                            >
                                <option value="primary">Primary</option>
                                <option value="secondary">Secondary</option>
                                <option value="tertiary">Tertiary</option>
                            </select>
                        </div>

                        <div className="control-group">
                            <label>Size</label>
                            <select
                                defaultValue="medium"
                                onChange={(e) => (window as any).__CATALOG_BUTTON__?.setSize?.(e.target.value as any)}
                            >
                                <option value="small">Small</option>
                                <option value="medium">Medium</option>
                                <option value="large">Large</option>
                            </select>
                        </div>

                        <div className="control-group">
                            <label>
                                <input
                                    type="checkbox"
                                    onChange={(e) => (window as any).__CATALOG_BUTTON__?.setShowIcon?.(e.currentTarget.checked)}
                                />
                                Show Icon
                            </label>
                        </div>

                        <div className="control-group">
                            <label>Label</label>
                            <input
                                type="text"
                                defaultValue="Button"
                                onInput={(e) => (window as any).__CATALOG_BUTTON__?.setLabel?.((e.target as HTMLInputElement).value)}
                            />
                        </div>
                    </div>
                }
            />

            <ComponentSection
                title="Textfield"
                component={
                    (() => {
                        const [state, setState] = React.useState<'default' | 'hover' | 'active' | 'filled' | 'disabled' | 'error' | 'error-filled'>('default');
                        const [showLabel, setShowLabel] = React.useState<boolean>(true);
                        const [showIcon, setShowIcon] = React.useState<boolean>(false);
                        const [label, setLabel] = React.useState<string>('Label');
                        const [placeholder, setPlaceholder] = React.useState<string>('Enter text');
                        const [value, setValue] = React.useState<string>('');
                        const [errorMessage, setErrorMessage] = React.useState<string>('');

                        (window as any).__CATALOG_TEXTFIELD__ = {
                            state, setState,
                            showLabel, setShowLabel,
                            showIcon, setShowIcon,
                            label, setLabel,
                            placeholder, setPlaceholder,
                            value, setValue,
                            errorMessage, setErrorMessage,
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
                                />
                            </div>
                        );
                    })()
                }
                controls={
                    <div>
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
                }
            />

            <ComponentSection
                title="Select"
                component={
                    (() => {
                        const [state, setState] = React.useState<'default' | 'hover' | 'active'>('default');
                        const [value, setValue] = React.useState<string>('');
                        const [label, setLabel] = React.useState<string>('Label');
                        const [placeholder, setPlaceholder] = React.useState<string>('Select a country');
                        const [hint, setHint] = React.useState<string>('Choose your country');
                        const [showLabel, setShowLabel] = React.useState<boolean>(true);
                        const [showHint, setShowHint] = React.useState<boolean>(true);
                        const [disabled, setDisabled] = React.useState<boolean>(false);

                        (window as any).__CATALOG_SELECT__ = {
                            state, setState,
                            value, setValue,
                            label, setLabel,
                            placeholder, setPlaceholder,
                            hint, setHint,
                            showLabel, setShowLabel,
                            showHint, setShowHint,
                            disabled, setDisabled,
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
                                    onChange={(v) => setValue(v)}
                                />
                            </div>
                        );
                    })()
                }
                controls={
                    <div>
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
                    </div>
                }
            />

            <ComponentSection
                title="TextArea"
                component={
                    (() => {
                        const [state, setState] = React.useState<'default' | 'hover' | 'active' | 'filled' | 'error' | 'error-filled'>('default');
                        const [label, setLabel] = React.useState<string>('Label');
                        const [placeholder, setPlaceholder] = React.useState<string>('Enter text');
                        const [value, setValue] = React.useState<string>('');
                        const [errorMessage, setErrorMessage] = React.useState<string>('');
                        const [showLabel, setShowLabel] = React.useState<boolean>(true);
                        const [showError, setShowError] = React.useState<boolean>(false);
                        const [disabled, setDisabled] = React.useState<boolean>(false);

                        (window as any).__CATALOG_TEXTAREA__ = {
                            state, setState,
                            label, setLabel,
                            placeholder, setPlaceholder,
                            value, setValue,
                            errorMessage, setErrorMessage,
                            showLabel, setShowLabel,
                            showError, setShowError,
                            disabled, setDisabled,
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
                                    onChange={(v) => setValue(v)}
                                />
                            </div>
                        );
                    })()
                }
                controls={
                    <div>
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
                            <label>
                                <input
                                    type="checkbox"
                                    onChange={(e) => (window as any).__CATALOG_TEXTAREA__?.setShowError?.(e.currentTarget.checked)}
                                />
                                Show Error
                            </label>
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
                                defaultValue="Enter text"
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
                            <label>Error Message</label>
                            <input
                                type="text"
                                onInput={(e) => (window as any).__CATALOG_TEXTAREA__?.setErrorMessage?.((e.target as HTMLInputElement).value)}
                            />
                        </div>
                    </div>
                }
            />

            <ComponentSection
                title="CheckboxLine"
                component={
                    (() => {
                        const [checked, setChecked] = React.useState<boolean>(false);
                        const [disabled, setDisabled] = React.useState<boolean>(false);

                        (window as any).__CATALOG_CHECKBOXLINE__ = {
                            checked, setChecked,
                            disabled, setDisabled,
                        };

                        return (
                            <div style={{ width: '300px' }}>
                                <CheckboxLine
                                    label="Label"
                                    checked={checked}
                                    disabled={disabled}
                                    onChange={(v) => setChecked(v)}
                                />
                            </div>
                        );
                    })()
                }
                controls={
                    <div>
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
                }
            />

            <ComponentSection
                title="RadioInline"
                component={
                    (() => {
                        const [selected, setSelected] = React.useState<boolean>(false);
                        const [disabled, setDisabled] = React.useState<boolean>(false);
                        const [showDivider, setShowDivider] = React.useState<boolean>(true);

                        (window as any).__CATALOG_RADIOINLINE__ = {
                            selected, setSelected,
                            disabled, setDisabled,
                            showDivider, setShowDivider,
                        };

                        return (
                            <div style={{ width: '300px' }}>
                                <RadioInline
                                    label="Monthly plan"
                                    price="$9.99/mo"
                                    selected={selected}
                                    disabled={disabled}
                                    showDivider={showDivider}
                                    onChange={(v) => setSelected(v)}
                                />
                            </div>
                        );
                    })()
                }
                controls={
                    <div>
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
                }
            />

            <ComponentSection
                title="SelectItem"
                component={
                    (() => {
                        const [disabled, setDisabled] = React.useState<boolean>(false);

                        (window as any).__CATALOG_SELECTITEM__ = {
                            disabled, setDisabled,
                        };

                        return (
                            <div style={{ width: '300px' }}>
                                <SelectItem label="USA" selected={false} disabled={disabled} />
                            </div>
                        );
                    })()
                }
                controls={
                    <div>
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
                }
            />

            <ComponentSection
                title="SelectList"
                component={
                    (() => {
                        const [disabled, setDisabled] = React.useState<boolean>(false);
                        const [value, setValue] = React.useState<string>('');

                        (window as any).__CATALOG_SELECTLIST__ = {
                            disabled, setDisabled,
                            value, setValue,
                        };

                        return (
                            <div style={{ width: '300px' }}>
                                <SelectList
                                    options={[{ label: 'USA', value: 'us' }, { label: 'Canada', value: 'ca' }]}
                                    value={value}
                                    disabled={disabled}
                                    onChange={(v) => setValue(v)}
                                />
                            </div>
                        );
                    })()
                }
                controls={
                    <div>
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
                }
            />

            <ComponentSection
                title="Tile"
                component={
                    (() => {
                        const [state, setState] = React.useState<'default' | 'active'>('default');
                        const [title, setTitle] = React.useState<string>('Title');
                        const [description, setDescription] = React.useState<string>('Description');
                        const [rightLabel, setRightLabel] = React.useState<string>('Label');
                        const [showRightLabel, setShowRightLabel] = React.useState<boolean>(true);
                        const [showDescription, setShowDescription] = React.useState<boolean>(true);
                        const [showPill, setShowPill] = React.useState<boolean>(false);
                        const [showIcon, setShowIcon] = React.useState<boolean>(true);
                        const [disabled, setDisabled] = React.useState<boolean>(false);

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
                        };

                        return (
                            <div style={{ width: '360px' }}>
                                <Tile
                                    state={state}
                                    title={title}
                                    description={showDescription ? description : undefined}
                                    rightLabel={showRightLabel ? rightLabel : undefined}
                                    showPill={showPill}
                                    showIcon={showIcon}
                                    disabled={disabled}
                                />
                            </div>
                        );
                    })()
                }
                controls={
                    <div>
                        <div className="control-group">
                            <label>State</label>
                            <select defaultValue="default" onChange={(e) => (window as any).__CATALOG_TILE__?.setState?.(e.target.value as any)}>
                                <option value="default">Default</option>
                                <option value="active">Active</option>
                            </select>
                        </div>
                        <div className="control-group">
                            <label>Title</label>
                            <input type="text" defaultValue="Title" onInput={(e) => (window as any).__CATALOG_TILE__?.setTitle?.((e.target as HTMLInputElement).value)} />
                        </div>
                        <div className="control-group">
                            <label>Description</label>
                            <input type="text" defaultValue="Description" onInput={(e) => (window as any).__CATALOG_TILE__?.setDescription?.((e.target as HTMLInputElement).value)} />
                        </div>
                        <div className="control-group">
                            <label>Right Label</label>
                            <input type="text" defaultValue="Label" onInput={(e) => (window as any).__CATALOG_TILE__?.setRightLabel?.((e.target as HTMLInputElement).value)} />
                        </div>
                        <div className="control-group">
                            <label><input type="checkbox" defaultChecked onChange={(e) => (window as any).__CATALOG_TILE__?.setShowRightLabel?.(e.currentTarget.checked)} /> Show Right Label</label>
                        </div>
                        <div className="control-group">
                            <label><input type="checkbox" defaultChecked onChange={(e) => (window as any).__CATALOG_TILE__?.setShowDescription?.(e.currentTarget.checked)} /> Show Description</label>
                        </div>
                        <div className="control-group">
                            <label><input type="checkbox" onChange={(e) => (window as any).__CATALOG_TILE__?.setShowPill?.(e.currentTarget.checked)} /> Show Pill</label>
                        </div>
                        <div className="control-group">
                            <label><input type="checkbox" defaultChecked onChange={(e) => (window as any).__CATALOG_TILE__?.setShowIcon?.(e.currentTarget.checked)} /> Show Icon</label>
                        </div>
                        <div className="control-group">
                            <label><input type="checkbox" onChange={(e) => (window as any).__CATALOG_TILE__?.setDisabled?.(e.currentTarget.checked)} /> Disabled</label>
                        </div>
                    </div>
                }
            />

            <ComponentSection
                title="TileMultiItem"
                component={
                    (() => {
                        const [options, setOptions] = React.useState<Array<{ id: string, label: string, price?: string, selected?: boolean }>>([
                            { id: '1', label: 'Option A', price: '$10', selected: true },
                            { id: '2', label: 'Option B', price: '$20' },
                            { id: '3', label: 'Option C', price: '$30' },
                        ]);
                        const [selectedId, setSelectedId] = React.useState<string>('1');
                        const [disabled, setDisabled] = React.useState<boolean>(false);

                        (window as any).__CATALOG_TILEMULTIITEM__ = {
                            options, setOptions,
                            selectedId, setSelectedId,
                            disabled, setDisabled,
                        };

                        return (
                            <div style={{ width: '360px' }}>
                                <TileMultiItem
                                    options={options}
                                    selectedId={selectedId}
                                    disabled={disabled}
                                    onOptionSelect={(id) => setSelectedId(id)}
                                />
                            </div>
                        );
                    })()
                }
                controls={
                    <div>
                        <div className="control-group">
                            <label><input type="checkbox" onChange={(e) => (window as any).__CATALOG_TILEMULTIITEM__?.setDisabled?.(e.currentTarget.checked)} /> Disabled</label>
                        </div>
                    </div>
                }
            />

            <ComponentSection
                title="IconLine"
                component={<div style={{ width: '300px' }}><IconLine>Text</IconLine></div>}
                controls={<div className="control-group"><label>Simple text-only line</label></div>}
            />

            <ComponentSection
                title="Banner"
                component={
                    (() => {
                        const [type, setType] = React.useState<'default' | 'success' | 'warning' | 'alert'>('default');
                        const [showLeftIcon, setShowLeftIcon] = React.useState<boolean>(true);
                        const [showRightIcon, setShowRightIcon] = React.useState<boolean>(true);
                        const [dismissible, setDismissible] = React.useState<boolean>(false);
                        const [children, setChildren] = React.useState<string>('Your order was placed successfully.');
                        return (
                            <div style={{ width: '500px' }}>
                                <Banner type={type} showLeftIcon={showLeftIcon} showRightIcon={showRightIcon} dismissible={dismissible}>
                                    {children}
                                </Banner>
                            </div>
                        );
                    })()
                }
                controls={
                    <div>
                        <div className="control-group">
                            <label>Type</label>
                            <select defaultValue="default" onChange={(e) => (window as any).__CATALOG_BANNER__?.setType?.(e.target.value as any)}>
                                <option value="default">Default</option>
                                <option value="success">Success</option>
                                <option value="warning">Warning</option>
                                <option value="alert">Alert</option>
                            </select>
                        </div>
                        <div className="control-group"><label><input type="checkbox" defaultChecked onChange={(e) => (window as any).__CATALOG_BANNER__?.setShowLeftIcon?.(e.currentTarget.checked)} /> Show Left Icon</label></div>
                        <div className="control-group"><label><input type="checkbox" defaultChecked onChange={(e) => (window as any).__CATALOG_BANNER__?.setShowRightIcon?.(e.currentTarget.checked)} /> Show Right Icon</label></div>
                        <div className="control-group"><label><input type="checkbox" onChange={(e) => (window as any).__CATALOG_BANNER__?.setDismissible?.(e.currentTarget.checked)} /> Dismissible</label></div>
                        <div className="control-group"><label>Text</label><input type="text" defaultValue="Your order was placed successfully." onInput={(e) => (window as any).__CATALOG_BANNER__?.setChildren?.((e.target as HTMLInputElement).value)} /></div>
                    </div>
                }
            />

            <ComponentSection
                title="CarouselNav"
                component={
                    (() => {
                        const [prevDisabled, setPrevDisabled] = React.useState<boolean>(false);
                        const [nextDisabled, setNextDisabled] = React.useState<boolean>(false);
                        return (
                            <div style={{ width: '360px' }}>
                                <CarouselNav prevDisabled={prevDisabled} nextDisabled={nextDisabled} />
                            </div>
                        );
                    })()
                }
                controls={
                    <div>
                        <div className="control-group"><label><input type="checkbox" onChange={(e) => (window as any).__CATALOG_CAROUSELNAV__?.setPrevDisabled?.(e.currentTarget.checked)} /> Prev Disabled</label></div>
                        <div className="control-group"><label><input type="checkbox" onChange={(e) => (window as any).__CATALOG_CAROUSELNAV__?.setNextDisabled?.(e.currentTarget.checked)} /> Next Disabled</label></div>
                    </div>
                }
            />

            <ComponentSection
                title="CarouselPips"
                component={
                    (() => {
                        const [totalItems, setTotalItems] = React.useState<number>(5);
                        const [activeIndex, setActiveIndex] = React.useState<number>(2);
                        return (
                            <div style={{ width: '360px' }}>
                                <CarouselPips totalItems={totalItems} activeIndex={activeIndex} onPipClick={(i) => setActiveIndex(i)} />
                            </div>
                        );
                    })()
                }
                controls={
                    <div>
                        <div className="control-group"><label>Total Items</label><input type="number" defaultValue={5 as any} min="1" onInput={(e) => (window as any).__CATALOG_CAROUSELPIPS__?.setTotalItems?.(parseInt((e.target as HTMLInputElement).value) || 1)} /></div>
                        <div className="control-group"><label>Active Index</label><input type="number" defaultValue={2 as any} min="0" onInput={(e) => (window as any).__CATALOG_CAROUSELPIPS__?.setActiveIndex?.(parseInt((e.target as HTMLInputElement).value) || 0)} /></div>
                    </div>
                }
            />

            <ComponentSection
                title="Lists"
                component={
                    (() => {
                        const [title, setTitle] = React.useState<string>('title');
                        const [items, setItems] = React.useState<Array<{ id: string; text: string }>>([
                            { id: '1', text: 'Text' },
                            { id: '2', text: 'Text' },
                            { id: '3', text: 'Text' },
                        ]);

                        (window as any).__CATALOG_LISTS__ = {
                            title, setTitle,
                            items, setItems,
                        };

                        return (
                            <div style={{ width: '360px' }}>
                                <Lists title={title} items={items} />
                            </div>
                        );
                    })()
                }
                controls={
                    <div>
                        <div className="control-group">
                            <label>Title</label>
                            <input
                                type="text"
                                defaultValue="title"
                                onInput={(e) => (window as any).__CATALOG_LISTS__?.setTitle?.((e.target as HTMLInputElement).value)}
                            />
                        </div>
                    </div>
                }
            />

            {/* Add more molecule components here as needed */}
        </section>
    );
};
