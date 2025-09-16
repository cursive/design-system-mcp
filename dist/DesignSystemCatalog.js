import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
import { CarouselNav } from './molecules/CarouselNav';
import { CarouselPips } from './molecules/CarouselPips';
import { PageHeader } from './molecules/PageHeader';
import { FooterPDP } from './molecules/FooterPDP';
import { PageDivider } from './molecules/PageDivider';
import { FAQCell } from './molecules/FAQCell';
import { StarRating } from './molecules/StarRating';
import { AddOn } from './molecules/AddOn';
import { Dialogue } from './molecules/Dialogue';
import { Lists } from './molecules/Lists';
const DesignSystemCatalog = () => {
    return (_jsxs("div", { style: { padding: '24px', fontFamily: 'var(--font-family-body)' }, children: [_jsx("h1", { style: {
                    fontSize: '32px',
                    fontWeight: '600',
                    marginBottom: '32px',
                    color: 'var(--color-foreground-primary)'
                }, children: "Design System Catalog" }), _jsxs("section", { style: { marginBottom: '48px' }, children: [_jsx("h2", { style: {
                            fontSize: '24px',
                            fontWeight: '600',
                            marginBottom: '24px',
                            color: 'var(--color-foreground-primary)'
                        }, children: "Atoms" }), _jsxs("div", { style: { marginBottom: '32px' }, children: [_jsx("h3", { style: { fontSize: '18px', fontWeight: '600', marginBottom: '16px' }, children: "RadioIcon" }), _jsxs("div", { style: {
                                    display: 'flex',
                                    gap: '16px',
                                    alignItems: 'center',
                                    padding: '16px',
                                    border: '1px solid var(--color-stroke-horizontal-rule)',
                                    borderRadius: '8px',
                                    backgroundColor: '#dddddd'
                                }, children: [_jsxs("div", { style: { textAlign: 'center' }, children: [_jsx(RadioIcon, { size: "regular", state: "unchecked" }), _jsx("div", { style: { fontSize: '12px', marginTop: '4px' }, children: "Regular Unchecked" })] }), _jsxs("div", { style: { textAlign: 'center' }, children: [_jsx(RadioIcon, { size: "regular", state: "checked" }), _jsx("div", { style: { fontSize: '12px', marginTop: '4px' }, children: "Regular Checked" })] }), _jsxs("div", { style: { textAlign: 'center' }, children: [_jsx(RadioIcon, { size: "small", state: "unchecked" }), _jsx("div", { style: { fontSize: '12px', marginTop: '4px' }, children: "Small Unchecked" })] }), _jsxs("div", { style: { textAlign: 'center' }, children: [_jsx(RadioIcon, { size: "small", state: "checked" }), _jsx("div", { style: { fontSize: '12px', marginTop: '4px' }, children: "Small Checked" })] })] })] }), _jsxs("div", { style: { marginBottom: '32px' }, children: [_jsx("h3", { style: { fontSize: '18px', fontWeight: '600', marginBottom: '16px' }, children: "Icon" }), _jsx("div", { style: {
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(6, 1fr)',
                                    gap: '16px',
                                    padding: '16px',
                                    border: '1px solid var(--color-stroke-horizontal-rule)',
                                    borderRadius: '8px',
                                    backgroundColor: '#dddddd'
                                }, children: ['search', 'edit', 'local-shipping', 'storefront', 'credit-card', 'account-circle'].map((iconName) => (_jsxs("div", { style: { textAlign: 'center' }, children: [_jsx(Icon, { name: iconName, size: 24 }), _jsx("div", { style: { fontSize: '12px', marginTop: '4px' }, children: iconName })] }, iconName))) })] }), _jsxs("div", { style: { marginBottom: '32px' }, children: [_jsx("h3", { style: { fontSize: '18px', fontWeight: '600', marginBottom: '16px' }, children: "Large Icons (40px)" }), _jsx("div", { style: {
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(5, 1fr)',
                                    gap: '16px',
                                    padding: '16px',
                                    border: '1px solid var(--color-stroke-horizontal-rule)',
                                    borderRadius: '8px',
                                    backgroundColor: '#dddddd'
                                }, children: ['gift-large', 'wine-large', 'car-large', 'chef-hat-large', 'house-large'].map((iconName) => (_jsxs("div", { style: { textAlign: 'center' }, children: [_jsx(Icon, { name: iconName, size: 40 }), _jsx("div", { style: { fontSize: '12px', marginTop: '4px' }, children: iconName })] }, iconName))) })] }), _jsxs("div", { style: { marginBottom: '32px' }, children: [_jsx("h3", { style: { fontSize: '18px', fontWeight: '600', marginBottom: '16px' }, children: "PlaceholderIcon" }), _jsxs("div", { style: {
                                    display: 'flex',
                                    gap: '16px',
                                    alignItems: 'center',
                                    padding: '16px',
                                    border: '1px solid var(--color-stroke-horizontal-rule)',
                                    borderRadius: '8px',
                                    backgroundColor: '#dddddd'
                                }, children: [_jsx(PlaceholderIcon, { size: 20 }), _jsx(PlaceholderIcon, { size: 24 }), _jsx(PlaceholderIcon, { size: 32 }), _jsx(PlaceholderIcon, { size: 40 })] })] }), _jsxs("div", { style: { marginBottom: '32px' }, children: [_jsx("h3", { style: { fontSize: '18px', fontWeight: '600', marginBottom: '16px' }, children: "Individual Icons" }), _jsxs("div", { style: {
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(5, 1fr)',
                                    gap: '16px',
                                    padding: '16px',
                                    border: '1px solid var(--color-stroke-horizontal-rule)',
                                    borderRadius: '8px',
                                    backgroundColor: '#dddddd'
                                }, children: [_jsxs("div", { style: { textAlign: 'center' }, children: [_jsx(CheckIcon, { size: 24 }), _jsx("div", { style: { fontSize: '12px', marginTop: '4px' }, children: "CheckIcon" })] }), _jsxs("div", { style: { textAlign: 'center' }, children: [_jsx(ChevronDownIcon, { size: 24 }), _jsx("div", { style: { fontSize: '12px', marginTop: '4px' }, children: "ChevronDownIcon" })] }), _jsxs("div", { style: { textAlign: 'center' }, children: [_jsx(PackageIcon, { size: 24 }), _jsx("div", { style: { fontSize: '12px', marginTop: '4px' }, children: "PackageIcon" })] }), _jsxs("div", { style: { textAlign: 'center' }, children: [_jsx(CalendarFoldIcon, { size: 24 }), _jsx("div", { style: { fontSize: '12px', marginTop: '4px' }, children: "CalendarFoldIcon" })] }), _jsxs("div", { style: { textAlign: 'center' }, children: [_jsx(CirclePauseIcon, { size: 24 }), _jsx("div", { style: { fontSize: '12px', marginTop: '4px' }, children: "CirclePauseIcon" })] })] })] })] }), _jsxs("section", { style: { marginBottom: '48px' }, children: [_jsx("h2", { style: {
                            fontSize: '24px',
                            fontWeight: '600',
                            marginBottom: '24px',
                            color: 'var(--color-foreground-primary)'
                        }, children: "Molecules" }), _jsxs("div", { style: { marginBottom: '32px' }, children: [_jsx("h3", { style: { fontSize: '18px', fontWeight: '600', marginBottom: '16px' }, children: "Button" }), _jsxs("div", { style: { marginBottom: '16px' }, children: [_jsx("h4", { style: { fontSize: '16px', fontWeight: '600', marginBottom: '8px' }, children: "All Styles" }), _jsxs("div", { style: {
                                            display: 'flex',
                                            gap: '16px',
                                            padding: '16px',
                                            border: '1px solid var(--color-stroke-horizontal-rule)',
                                            borderRadius: '8px',
                                            backgroundColor: '#dddddd'
                                        }, children: [_jsx(Button, { style: "accent", children: "Accent" }), _jsx(Button, { style: "primary", children: "Primary" }), _jsx(Button, { style: "secondary", children: "Secondary" })] })] }), _jsxs("div", { style: { marginBottom: '16px' }, children: [_jsx("h4", { style: { fontSize: '16px', fontWeight: '600', marginBottom: '8px' }, children: "Disabled States" }), _jsxs("div", { style: {
                                            display: 'flex',
                                            gap: '16px',
                                            padding: '16px',
                                            border: '1px solid var(--color-stroke-horizontal-rule)',
                                            borderRadius: '8px',
                                            backgroundColor: '#dddddd'
                                        }, children: [_jsx(Button, { style: "accent", disabled: true, children: "Accent Disabled" }), _jsx(Button, { style: "primary", disabled: true, children: "Primary Disabled" }), _jsx(Button, { style: "secondary", disabled: true, children: "Secondary Disabled" })] })] }), _jsxs("div", { style: { marginBottom: '16px' }, children: [_jsx("h4", { style: { fontSize: '16px', fontWeight: '600', marginBottom: '8px' }, children: "Without Icon" }), _jsxs("div", { style: {
                                            display: 'flex',
                                            gap: '16px',
                                            padding: '16px',
                                            border: '1px solid var(--color-stroke-horizontal-rule)',
                                            borderRadius: '8px',
                                            backgroundColor: '#dddddd'
                                        }, children: [_jsx(Button, { style: "accent", showIcon: false, children: "No Icon" }), _jsx(Button, { style: "primary", showIcon: false, children: "No Icon" }), _jsx(Button, { style: "secondary", showIcon: false, children: "No Icon" })] })] })] }), _jsxs("div", { style: { marginBottom: '32px' }, children: [_jsx("h3", { style: { fontSize: '18px', fontWeight: '600', marginBottom: '16px' }, children: "PanelHeader" }), _jsxs("div", { style: { marginBottom: '16px' }, children: [_jsx("h4", { style: { fontSize: '16px', fontWeight: '600', marginBottom: '8px' }, children: "Default Hierarchy" }), _jsx("div", { style: {
                                            padding: '16px',
                                            border: '1px solid var(--color-stroke-horizontal-rule)',
                                            borderRadius: '8px',
                                            backgroundColor: '#dddddd'
                                        }, children: _jsx(PanelHeader, { hierarchy: "Default", title: "What you'll get", eyebrow: "What you'll get", subtitle: "Sub" }) })] }), _jsxs("div", { style: { marginBottom: '16px' }, children: [_jsx("h4", { style: { fontSize: '16px', fontWeight: '600', marginBottom: '8px' }, children: "Secondary Hierarchy" }), _jsx("div", { style: {
                                            padding: '16px',
                                            border: '1px solid var(--color-stroke-horizontal-rule)',
                                            borderRadius: '8px',
                                            backgroundColor: '#dddddd'
                                        }, children: _jsx(PanelHeader, { hierarchy: "Secondary", title: "What you'll get", eyebrow: "What you'll get", subtitle: "Sub" }) })] }), _jsxs("div", { style: { marginBottom: '16px' }, children: [_jsx("h4", { style: { fontSize: '16px', fontWeight: '600', marginBottom: '8px' }, children: "Without Eyebrow" }), _jsx("div", { style: {
                                            padding: '16px',
                                            border: '1px solid var(--color-stroke-horizontal-rule)',
                                            borderRadius: '8px',
                                            backgroundColor: '#dddddd'
                                        }, children: _jsx(PanelHeader, { hierarchy: "Default", title: "What you'll get", showEyebrow: false, subtitle: "Sub" }) })] }), _jsxs("div", { style: { marginBottom: '16px' }, children: [_jsx("h4", { style: { fontSize: '16px', fontWeight: '600', marginBottom: '8px' }, children: "Without Icon" }), _jsx("div", { style: {
                                            padding: '16px',
                                            border: '1px solid var(--color-stroke-horizontal-rule)',
                                            borderRadius: '8px',
                                            backgroundColor: '#dddddd'
                                        }, children: _jsx(PanelHeader, { hierarchy: "Default", title: "What you'll get", eyebrow: "What you'll get", showIcon: false, subtitle: "Sub" }) })] }), _jsxs("div", { style: { marginBottom: '16px' }, children: [_jsx("h4", { style: { fontSize: '16px', fontWeight: '600', marginBottom: '8px' }, children: "Custom Content" }), _jsx("div", { style: {
                                            padding: '16px',
                                            border: '1px solid var(--color-stroke-horizontal-rule)',
                                            borderRadius: '8px',
                                            backgroundColor: '#dddddd'
                                        }, children: _jsx(PanelHeader, { hierarchy: "Default", title: "Custom Title", eyebrow: "Custom Eyebrow", subtitle: "Custom subtitle text" }) })] })] }), _jsxs("div", { style: { marginBottom: '32px' }, children: [_jsx("h3", { style: { fontSize: '18px', fontWeight: '600', marginBottom: '16px' }, children: "Textfield" }), _jsxs("div", { style: { marginBottom: '16px' }, children: [_jsx("h4", { style: { fontSize: '16px', fontWeight: '600', marginBottom: '8px' }, children: "All States" }), _jsxs("div", { style: {
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '16px',
                                            padding: '16px',
                                            border: '1px solid var(--color-stroke-horizontal-rule)',
                                            borderRadius: '8px',
                                            backgroundColor: '#dddddd'
                                        }, children: [_jsx("div", { style: { width: '300px' }, children: _jsx(Textfield, { state: "default", label: "Default", placeholder: "Enter text" }) }), _jsx("div", { style: { width: '300px' }, children: _jsx(Textfield, { state: "hover", label: "Hover", placeholder: "Enter text" }) }), _jsx("div", { style: { width: '300px' }, children: _jsx(Textfield, { state: "active", label: "Active", placeholder: "Enter text" }) }), _jsx("div", { style: { width: '300px' }, children: _jsx(Textfield, { state: "filled", label: "Filled", value: "Sample text" }) }), _jsx("div", { style: { width: '300px' }, children: _jsx(Textfield, { state: "disabled", label: "Disabled", placeholder: "Enter text", disabled: true }) }), _jsx("div", { style: { width: '300px' }, children: _jsx(Textfield, { state: "error", label: "Error", placeholder: "Enter text", errorMessage: "Required" }) }), _jsx("div", { style: { width: '300px' }, children: _jsx(Textfield, { state: "error-filled", label: "Error Filled", value: "Invalid text", errorMessage: "Explainer" }) })] })] }), _jsxs("div", { style: { marginBottom: '16px' }, children: [_jsx("h4", { style: { fontSize: '16px', fontWeight: '600', marginBottom: '8px' }, children: "Without Label" }), _jsx("div", { style: {
                                            padding: '16px',
                                            border: '1px solid var(--color-stroke-horizontal-rule)',
                                            borderRadius: '8px',
                                            backgroundColor: '#dddddd'
                                        }, children: _jsx("div", { style: { width: '300px' }, children: _jsx(Textfield, { showLabel: false, placeholder: "No label" }) }) })] })] }), _jsxs("div", { style: { marginBottom: '32px' }, children: [_jsx("h3", { style: { fontSize: '18px', fontWeight: '600', marginBottom: '16px' }, children: "Select" }), _jsxs("div", { style: { marginBottom: '16px' }, children: [_jsx("h4", { style: { fontSize: '16px', fontWeight: '600', marginBottom: '8px' }, children: "All States" }), _jsxs("div", { style: {
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '16px',
                                            padding: '16px',
                                            border: '1px solid var(--color-stroke-horizontal-rule)',
                                            borderRadius: '8px',
                                            backgroundColor: '#dddddd'
                                        }, children: [_jsx("div", { style: { width: '300px' }, children: _jsx(Select, { state: "default", label: "Default", placeholder: "Select a country", hint: "Choose your country" }) }), _jsx("div", { style: { width: '300px' }, children: _jsx(Select, { state: "hover", label: "Hover", placeholder: "Select a country", hint: "Choose your country" }) }), _jsx("div", { style: { width: '300px' }, children: _jsx(Select, { state: "active", label: "Active", placeholder: "Select a country", hint: "Choose your country" }) })] })] }), _jsxs("div", { style: { marginBottom: '16px' }, children: [_jsx("h4", { style: { fontSize: '16px', fontWeight: '600', marginBottom: '8px' }, children: "With Selected Value" }), _jsx("div", { style: {
                                            padding: '16px',
                                            border: '1px solid var(--color-stroke-horizontal-rule)',
                                            borderRadius: '8px',
                                            backgroundColor: '#dddddd'
                                        }, children: _jsx("div", { style: { width: '300px' }, children: _jsx(Select, { value: "us", label: "Country", placeholder: "Select a country", hint: "Choose your country" }) }) })] }), _jsxs("div", { style: { marginBottom: '16px' }, children: [_jsx("h4", { style: { fontSize: '16px', fontWeight: '600', marginBottom: '8px' }, children: "Disabled" }), _jsx("div", { style: {
                                            padding: '16px',
                                            border: '1px solid var(--color-stroke-horizontal-rule)',
                                            borderRadius: '8px',
                                            backgroundColor: '#dddddd'
                                        }, children: _jsx("div", { style: { width: '300px' }, children: _jsx(Select, { disabled: true, label: "Disabled", placeholder: "Select a country", hint: "Choose your country" }) }) })] })] }), _jsxs("div", { style: { marginBottom: '32px' }, children: [_jsx("h3", { style: { fontSize: '18px', fontWeight: '600', marginBottom: '16px' }, children: "TextArea" }), _jsxs("div", { style: { marginBottom: '16px' }, children: [_jsx("h4", { style: { fontSize: '16px', fontWeight: '600', marginBottom: '8px' }, children: "All States" }), _jsxs("div", { style: {
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '16px',
                                            padding: '16px',
                                            border: '1px solid var(--color-stroke-horizontal-rule)',
                                            borderRadius: '8px',
                                            backgroundColor: '#dddddd'
                                        }, children: [_jsx("div", { style: { width: '300px' }, children: _jsx(TextArea, { state: "default", label: "Default", placeholder: "Enter your message" }) }), _jsx("div", { style: { width: '300px' }, children: _jsx(TextArea, { state: "hover", label: "Hover", placeholder: "Enter your message" }) }), _jsx("div", { style: { width: '300px' }, children: _jsx(TextArea, { state: "active", label: "Active", placeholder: "Enter your message" }) }), _jsx("div", { style: { width: '300px' }, children: _jsx(TextArea, { state: "filled", label: "Filled", value: "This is some sample text that fills the textarea to demonstrate the filled state." }) }), _jsx("div", { style: { width: '300px' }, children: _jsx(TextArea, { state: "error", label: "Error", placeholder: "Enter your message", errorMessage: "Required" }) }), _jsx("div", { style: { width: '300px' }, children: _jsx(TextArea, { state: "error-filled", label: "Error Filled", value: "This text has an error.", errorMessage: "Explainer" }) })] })] }), _jsxs("div", { style: { marginBottom: '16px' }, children: [_jsx("h4", { style: { fontSize: '16px', fontWeight: '600', marginBottom: '8px' }, children: "Disabled" }), _jsx("div", { style: {
                                            padding: '16px',
                                            border: '1px solid var(--color-stroke-horizontal-rule)',
                                            borderRadius: '8px',
                                            backgroundColor: '#dddddd'
                                        }, children: _jsx("div", { style: { width: '300px' }, children: _jsx(TextArea, { disabled: true, label: "Disabled", placeholder: "Enter your message" }) }) })] }), _jsxs("div", { style: { marginBottom: '16px' }, children: [_jsx("h4", { style: { fontSize: '16px', fontWeight: '600', marginBottom: '8px' }, children: "Custom Rows" }), _jsx("div", { style: {
                                            padding: '16px',
                                            border: '1px solid var(--color-stroke-horizontal-rule)',
                                            borderRadius: '8px',
                                            backgroundColor: '#dddddd'
                                        }, children: _jsx("div", { style: { width: '300px' }, children: _jsx(TextArea, { rows: 6, label: "Large TextArea", placeholder: "Enter your message" }) }) })] })] }), _jsxs("div", { style: { marginBottom: '32px' }, children: [_jsx("h3", { style: { fontSize: '18px', fontWeight: '600', marginBottom: '16px' }, children: "CheckboxLine" }), _jsxs("div", { style: { marginBottom: '16px' }, children: [_jsx("h4", { style: { fontSize: '16px', fontWeight: '600', marginBottom: '8px' }, children: "All States" }), _jsxs("div", { style: {
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '16px',
                                            padding: '16px',
                                            border: '1px solid var(--color-stroke-horizontal-rule)',
                                            borderRadius: '8px',
                                            backgroundColor: '#dddddd'
                                        }, children: [_jsx("div", { style: { width: '300px' }, children: _jsx(CheckboxLine, { state: "default", label: "This is a gift" }) }), _jsx("div", { style: { width: '300px' }, children: _jsx(CheckboxLine, { state: "active", label: "This is a gift" }) })] })] }), _jsxs("div", { style: { marginBottom: '16px' }, children: [_jsx("h4", { style: { fontSize: '16px', fontWeight: '600', marginBottom: '8px' }, children: "Disabled" }), _jsx("div", { style: {
                                            padding: '16px',
                                            border: '1px solid var(--color-stroke-horizontal-rule)',
                                            borderRadius: '8px',
                                            backgroundColor: '#dddddd'
                                        }, children: _jsx("div", { style: { width: '300px' }, children: _jsx(CheckboxLine, { disabled: true, label: "This is a gift" }) }) })] })] }), _jsxs("div", { style: { marginBottom: '32px' }, children: [_jsx("h3", { style: { fontSize: '18px', fontWeight: '600', marginBottom: '16px' }, children: "RadioInline" }), _jsxs("div", { style: { marginBottom: '16px' }, children: [_jsx("h4", { style: { fontSize: '16px', fontWeight: '600', marginBottom: '8px' }, children: "All States" }), _jsxs("div", { style: {
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '16px',
                                            padding: '16px',
                                            border: '1px solid var(--color-stroke-horizontal-rule)',
                                            borderRadius: '8px',
                                            backgroundColor: '#dddddd'
                                        }, children: [_jsx("div", { style: { width: '300px' }, children: _jsx(RadioInline, { state: "unchecked", label: "Breakfast Kit \u2014 Chicken", price: "$40" }) }), _jsx("div", { style: { width: '300px' }, children: _jsx(RadioInline, { state: "hover", label: "Breakfast Kit \u2014 Chicken", price: "$40" }) }), _jsx("div", { style: { width: '300px' }, children: _jsx(RadioInline, { state: "checked", label: "Breakfast Kit \u2014 Chicken", price: "$40" }) })] })] }), _jsxs("div", { style: { marginBottom: '16px' }, children: [_jsx("h4", { style: { fontSize: '16px', fontWeight: '600', marginBottom: '8px' }, children: "Without Divider" }), _jsx("div", { style: {
                                            padding: '16px',
                                            border: '1px solid var(--color-stroke-horizontal-rule)',
                                            borderRadius: '8px',
                                            backgroundColor: '#dddddd'
                                        }, children: _jsx("div", { style: { width: '300px' }, children: _jsx(RadioInline, { showDivider: false, label: "Breakfast Kit \u2014 Chicken", price: "$40" }) }) })] })] }), _jsxs("div", { style: { marginBottom: '32px' }, children: [_jsx("h3", { style: { fontSize: '18px', fontWeight: '600', marginBottom: '16px' }, children: "SelectItem" }), _jsxs("div", { style: { marginBottom: '16px' }, children: [_jsx("h4", { style: { fontSize: '16px', fontWeight: '600', marginBottom: '8px' }, children: "All States" }), _jsxs("div", { style: {
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '0px',
                                            padding: '16px',
                                            border: '1px solid var(--color-stroke-horizontal-rule)',
                                            borderRadius: '8px',
                                            backgroundColor: '#dddddd'
                                        }, children: [_jsx("div", { style: { width: '200px' }, children: _jsx(SelectItem, { state: "default", children: "No peanuts" }) }), _jsx("div", { style: { width: '200px' }, children: _jsx(SelectItem, { state: "hover", children: "No peanuts" }) }), _jsx("div", { style: { width: '200px' }, children: _jsx(SelectItem, { selected: true, children: "No peanuts" }) })] })] })] }), _jsxs("div", { style: { marginBottom: '32px' }, children: [_jsx("h3", { style: { fontSize: '18px', fontWeight: '600', marginBottom: '16px' }, children: "SelectList" }), _jsxs("div", { style: { marginBottom: '16px' }, children: [_jsx("h4", { style: { fontSize: '16px', fontWeight: '600', marginBottom: '8px' }, children: "Default" }), _jsx("div", { style: {
                                            padding: '16px',
                                            border: '1px solid var(--color-stroke-horizontal-rule)',
                                            borderRadius: '8px',
                                            backgroundColor: '#dddddd'
                                        }, children: _jsx("div", { style: { width: '200px' }, children: _jsx(SelectList, {}) }) })] }), _jsxs("div", { style: { marginBottom: '16px' }, children: [_jsx("h4", { style: { fontSize: '16px', fontWeight: '600', marginBottom: '8px' }, children: "With Selection" }), _jsx("div", { style: {
                                            padding: '16px',
                                            border: '1px solid var(--color-stroke-horizontal-rule)',
                                            borderRadius: '8px',
                                            backgroundColor: '#dddddd'
                                        }, children: _jsx("div", { style: { width: '200px' }, children: _jsx(SelectList, { selectedIndex: 1 }) }) })] }), _jsxs("div", { style: { marginBottom: '16px' }, children: [_jsx("h4", { style: { fontSize: '16px', fontWeight: '600', marginBottom: '8px' }, children: "Custom Items" }), _jsx("div", { style: {
                                            padding: '16px',
                                            border: '1px solid var(--color-stroke-horizontal-rule)',
                                            borderRadius: '8px',
                                            backgroundColor: '#dddddd'
                                        }, children: _jsx("div", { style: { width: '200px' }, children: _jsx(SelectList, { items: ['Option 1', 'Option 2', 'Option 3', 'Option 4'], selectedIndex: 2 }) }) })] })] }), _jsxs("div", { style: { marginBottom: '32px' }, children: [_jsx("h3", { style: { fontSize: '18px', fontWeight: '600', marginBottom: '16px' }, children: "Tile" }), _jsxs("div", { style: { marginBottom: '16px' }, children: [_jsx("h4", { style: { fontSize: '16px', fontWeight: '600', marginBottom: '8px' }, children: "Default" }), _jsx("div", { style: {
                                            padding: '16px',
                                            border: '1px solid var(--color-stroke-horizontal-rule)',
                                            borderRadius: '8px',
                                            backgroundColor: '#dddddd'
                                        }, children: _jsx("div", { style: { width: '350px' }, children: _jsx(Tile, {}) }) })] }), _jsxs("div", { style: { marginBottom: '16px' }, children: [_jsx("h4", { style: { fontSize: '16px', fontWeight: '600', marginBottom: '8px' }, children: "Active" }), _jsx("div", { style: {
                                            padding: '16px',
                                            border: '1px solid var(--color-stroke-horizontal-rule)',
                                            borderRadius: '8px',
                                            backgroundColor: '#dddddd'
                                        }, children: _jsx("div", { style: { width: '350px' }, children: _jsx(Tile, { state: "active" }) }) })] }), _jsxs("div", { style: { marginBottom: '16px' }, children: [_jsx("h4", { style: { fontSize: '16px', fontWeight: '600', marginBottom: '8px' }, children: "Custom Content" }), _jsx("div", { style: {
                                            padding: '16px',
                                            border: '1px solid var(--color-stroke-horizontal-rule)',
                                            borderRadius: '8px',
                                            backgroundColor: '#dddddd'
                                        }, children: _jsx("div", { style: { width: '350px' }, children: _jsx(Tile, { title: "Premium Package", description: "Includes all features and priority support", rightLabel: "$99" }) }) })] })] }), _jsxs("div", { style: { marginBottom: '32px' }, children: [_jsx("h3", { style: { fontSize: '18px', fontWeight: '600', marginBottom: '16px' }, children: "TileMultiItem" }), _jsxs("div", { style: { marginBottom: '16px' }, children: [_jsx("h4", { style: { fontSize: '16px', fontWeight: '600', marginBottom: '8px' }, children: "Default" }), _jsx("div", { style: {
                                            padding: '16px',
                                            border: '1px solid var(--color-stroke-horizontal-rule)',
                                            borderRadius: '8px',
                                            backgroundColor: '#dddddd'
                                        }, children: _jsx("div", { style: { width: '350px' }, children: _jsx(TileMultiItem, {}) }) })] }), _jsxs("div", { style: { marginBottom: '16px' }, children: [_jsx("h4", { style: { fontSize: '16px', fontWeight: '600', marginBottom: '8px' }, children: "With Selection" }), _jsx("div", { style: {
                                            padding: '16px',
                                            border: '1px solid var(--color-stroke-horizontal-rule)',
                                            borderRadius: '8px',
                                            backgroundColor: '#dddddd'
                                        }, children: _jsx("div", { style: { width: '350px' }, children: _jsx(TileMultiItem, { selectedId: "2" }) }) })] }), _jsxs("div", { style: { marginBottom: '16px' }, children: [_jsx("h4", { style: { fontSize: '16px', fontWeight: '600', marginBottom: '8px' }, children: "Custom Options" }), _jsx("div", { style: {
                                            padding: '16px',
                                            border: '1px solid var(--color-stroke-horizontal-rule)',
                                            borderRadius: '8px',
                                            backgroundColor: '#dddddd'
                                        }, children: _jsx("div", { style: { width: '350px' }, children: _jsx(TileMultiItem, { options: [
                                                    { id: '1', label: 'Basic Plan', price: '$9/month' },
                                                    { id: '2', label: 'Pro Plan', price: '$19/month' },
                                                    { id: '3', label: 'Enterprise', price: '$49/month' },
                                                ], selectedId: "2" }) }) })] })] }), _jsxs("div", { style: { marginBottom: '32px' }, children: [_jsx("h3", { style: { fontSize: '18px', fontWeight: '600', marginBottom: '16px' }, children: "IconLine" }), _jsxs("div", { style: { marginBottom: '16px' }, children: [_jsx("h4", { style: { fontSize: '16px', fontWeight: '600', marginBottom: '8px' }, children: "Default" }), _jsx("div", { style: {
                                            padding: '16px',
                                            border: '1px solid var(--color-stroke-horizontal-rule)',
                                            borderRadius: '8px',
                                            backgroundColor: '#dddddd'
                                        }, children: _jsx("div", { style: { width: '350px' }, children: _jsx(IconLine, {}) }) })] }), _jsxs("div", { style: { marginBottom: '16px' }, children: [_jsx("h4", { style: { fontSize: '16px', fontWeight: '600', marginBottom: '8px' }, children: "Custom Text" }), _jsx("div", { style: {
                                            padding: '16px',
                                            border: '1px solid var(--color-stroke-horizontal-rule)',
                                            borderRadius: '8px',
                                            backgroundColor: '#dddddd'
                                        }, children: _jsx("div", { style: { width: '350px' }, children: _jsx(IconLine, { children: "Custom text content" }) }) })] }), _jsxs("div", { style: { marginBottom: '16px' }, children: [_jsx("h4", { style: { fontSize: '16px', fontWeight: '600', marginBottom: '8px' }, children: "With Check Icon" }), _jsx("div", { style: {
                                            padding: '16px',
                                            border: '1px solid var(--color-stroke-horizontal-rule)',
                                            borderRadius: '8px',
                                            backgroundColor: '#dddddd'
                                        }, children: _jsx("div", { style: { width: '350px' }, children: _jsx(IconLine, { icon: _jsx(CheckIcon, { size: 20, color: "var(--color-foreground-primary)" }), children: "Completed task" }) }) })] })] }), _jsxs("div", { style: { marginBottom: '32px' }, children: [_jsx("h3", { style: { fontSize: '18px', fontWeight: '600', marginBottom: '16px' }, children: "Banner" }), _jsxs("div", { style: { marginBottom: '16px' }, children: [_jsx("h4", { style: { fontSize: '16px', fontWeight: '600', marginBottom: '8px' }, children: "Default" }), _jsx("div", { style: {
                                            padding: '16px',
                                            border: '1px solid var(--color-stroke-horizontal-rule)',
                                            borderRadius: '8px',
                                            backgroundColor: '#dddddd'
                                        }, children: _jsx("div", { style: { width: '450px' }, children: _jsx(Banner, {}) }) })] }), _jsxs("div", { style: { marginBottom: '16px' }, children: [_jsx("h4", { style: { fontSize: '16px', fontWeight: '600', marginBottom: '8px' }, children: "Success" }), _jsx("div", { style: {
                                            padding: '16px',
                                            border: '1px solid var(--color-stroke-horizontal-rule)',
                                            borderRadius: '8px',
                                            backgroundColor: '#dddddd'
                                        }, children: _jsx("div", { style: { width: '450px' }, children: _jsx(Banner, { type: "success", children: "Success! Your changes have been saved." }) }) })] }), _jsxs("div", { style: { marginBottom: '16px' }, children: [_jsx("h4", { style: { fontSize: '16px', fontWeight: '600', marginBottom: '8px' }, children: "Warning" }), _jsx("div", { style: {
                                            padding: '16px',
                                            border: '1px solid var(--color-stroke-horizontal-rule)',
                                            borderRadius: '8px',
                                            backgroundColor: '#dddddd'
                                        }, children: _jsx("div", { style: { width: '450px' }, children: _jsx(Banner, { type: "warning", children: "Warning: This action cannot be undone." }) }) })] }), _jsxs("div", { style: { marginBottom: '16px' }, children: [_jsx("h4", { style: { fontSize: '16px', fontWeight: '600', marginBottom: '8px' }, children: "Alert" }), _jsx("div", { style: {
                                            padding: '16px',
                                            border: '1px solid var(--color-stroke-horizontal-rule)',
                                            borderRadius: '8px',
                                            backgroundColor: '#dddddd'
                                        }, children: _jsx("div", { style: { width: '450px' }, children: _jsx(Banner, { type: "alert", children: "Error: Something went wrong. Please try again." }) }) })] })] })] }), _jsxs("section", { style: { marginBottom: '48px' }, children: [_jsx("h2", { style: {
                            fontSize: '24px',
                            fontWeight: '600',
                            marginBottom: '24px',
                            color: 'var(--color-foreground-primary)'
                        }, children: "Navigation Molecules" }), _jsxs("div", { style: { marginBottom: '32px' }, children: [_jsx("h3", { style: { fontSize: '18px', fontWeight: '600', marginBottom: '16px' }, children: "CarouselNav" }), _jsxs("div", { style: {
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                                    gap: '16px'
                                }, children: [_jsxs("div", { style: { backgroundColor: '#dddddd', padding: '16px', borderRadius: '8px' }, children: [_jsx("h4", { style: { fontSize: '14px', marginBottom: '8px' }, children: "Default" }), _jsx(CarouselNav, {})] }), _jsxs("div", { style: { backgroundColor: '#dddddd', padding: '16px', borderRadius: '8px' }, children: [_jsx("h4", { style: { fontSize: '14px', marginBottom: '8px' }, children: "Previous Disabled" }), _jsx(CarouselNav, { prevDisabled: true })] }), _jsxs("div", { style: { backgroundColor: '#dddddd', padding: '16px', borderRadius: '8px' }, children: [_jsx("h4", { style: { fontSize: '14px', marginBottom: '8px' }, children: "Next Disabled" }), _jsx(CarouselNav, { nextDisabled: true })] })] })] }), _jsxs("div", { style: { marginBottom: '32px' }, children: [_jsx("h3", { style: { fontSize: '18px', fontWeight: '600', marginBottom: '16px' }, children: "CarouselPips" }), _jsxs("div", { style: {
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                                    gap: '16px'
                                }, children: [_jsxs("div", { style: { backgroundColor: '#dddddd', padding: '16px', borderRadius: '8px' }, children: [_jsx("h4", { style: { fontSize: '14px', marginBottom: '8px' }, children: "Default (3 items)" }), _jsx(CarouselPips, { totalItems: 3, activeIndex: 0 })] }), _jsxs("div", { style: { backgroundColor: '#dddddd', padding: '16px', borderRadius: '8px' }, children: [_jsx("h4", { style: { fontSize: '14px', marginBottom: '8px' }, children: "Second Active" }), _jsx(CarouselPips, { totalItems: 3, activeIndex: 1 })] }), _jsxs("div", { style: { backgroundColor: '#dddddd', padding: '16px', borderRadius: '8px' }, children: [_jsx("h4", { style: { fontSize: '14px', marginBottom: '8px' }, children: "Five Items" }), _jsx(CarouselPips, { totalItems: 5, activeIndex: 2 })] })] })] }), _jsxs("div", { style: { marginBottom: '32px' }, children: [_jsx("h3", { style: { fontSize: '18px', fontWeight: '600', marginBottom: '16px' }, children: "PageHeader" }), _jsxs("div", { style: {
                                    display: 'grid',
                                    gridTemplateColumns: '1fr',
                                    gap: '16px'
                                }, children: [_jsxs("div", { style: { backgroundColor: '#dddddd', padding: '16px', borderRadius: '8px' }, children: [_jsx("h4", { style: { fontSize: '14px', marginBottom: '8px' }, children: "Default" }), _jsx(PageHeader, {})] }), _jsxs("div", { style: { backgroundColor: '#dddddd', padding: '16px', borderRadius: '8px' }, children: [_jsx("h4", { style: { fontSize: '14px', marginBottom: '8px' }, children: "Without Back Button" }), _jsx(PageHeader, { showBackButton: false })] })] })] }), _jsxs("div", { style: { marginBottom: '32px' }, children: [_jsx("h3", { style: { fontSize: '18px', fontWeight: '600', marginBottom: '16px' }, children: "FooterPDP" }), _jsxs("div", { style: {
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                                    gap: '16px'
                                }, children: [_jsxs("div", { style: { backgroundColor: '#dddddd', padding: '16px', borderRadius: '8px' }, children: [_jsx("h4", { style: { fontSize: '14px', marginBottom: '8px' }, children: "Mobile" }), _jsx(FooterPDP, { device: "mobile" })] }), _jsxs("div", { style: { backgroundColor: '#dddddd', padding: '16px', borderRadius: '8px' }, children: [_jsx("h4", { style: { fontSize: '14px', marginBottom: '8px' }, children: "Desktop" }), _jsx(FooterPDP, { device: "desktop" })] })] })] })] }), _jsxs("section", { style: { marginBottom: '48px' }, children: [_jsx("h2", { style: {
                            fontSize: '24px',
                            fontWeight: '600',
                            marginBottom: '24px',
                            color: 'var(--color-foreground-primary)'
                        }, children: "Layout Molecules" }), _jsxs("div", { style: { marginBottom: '32px' }, children: [_jsx("h3", { style: { fontSize: '18px', fontWeight: '600', marginBottom: '16px' }, children: "PageDivider" }), _jsxs("div", { style: {
                                    display: 'grid',
                                    gridTemplateColumns: '1fr',
                                    gap: '16px'
                                }, children: [_jsxs("div", { style: { backgroundColor: '#dddddd', padding: '16px', borderRadius: '8px' }, children: [_jsx("h4", { style: { fontSize: '14px', marginBottom: '8px' }, children: "Default" }), _jsx(PageDivider, {})] }), _jsxs("div", { style: { backgroundColor: '#dddddd', padding: '16px', borderRadius: '8px' }, children: [_jsx("h4", { style: { fontSize: '14px', marginBottom: '8px' }, children: "Labelled" }), _jsx(PageDivider, { variant: "labelled", label: "Or pay by card" })] }), _jsxs("div", { style: { backgroundColor: '#dddddd', padding: '16px', borderRadius: '8px' }, children: [_jsx("h4", { style: { fontSize: '14px', marginBottom: '8px' }, children: "Desktop" }), _jsx(PageDivider, { variant: "desktop" })] }), _jsxs("div", { style: { backgroundColor: '#dddddd', padding: '16px', borderRadius: '8px' }, children: [_jsx("h4", { style: { fontSize: '14px', marginBottom: '8px' }, children: "Blank" }), _jsx(PageDivider, { variant: "blank" })] })] })] }), _jsxs("div", { style: { marginBottom: '32px' }, children: [_jsx("h3", { style: { fontSize: '18px', fontWeight: '600', marginBottom: '16px' }, children: "FAQCell" }), _jsxs("div", { style: {
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                                    gap: '16px'
                                }, children: [_jsxs("div", { style: { backgroundColor: '#dddddd', padding: '16px', borderRadius: '8px' }, children: [_jsx("h4", { style: { fontSize: '14px', marginBottom: '8px' }, children: "Default" }), _jsx(FAQCell, {})] }), _jsxs("div", { style: { backgroundColor: '#dddddd', padding: '16px', borderRadius: '8px' }, children: [_jsx("h4", { style: { fontSize: '14px', marginBottom: '8px' }, children: "Long Question" }), _jsx(FAQCell, { question: "How do I cancel my subscription?", answer: "You can cancel your subscription at any time by going to your account settings." })] })] })] }), _jsxs("div", { style: { marginBottom: '32px' }, children: [_jsx("h3", { style: { fontSize: '18px', fontWeight: '600', marginBottom: '16px' }, children: "StarRating" }), _jsxs("div", { style: {
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                                    gap: '16px'
                                }, children: [_jsxs("div", { style: { backgroundColor: '#dddddd', padding: '16px', borderRadius: '8px' }, children: [_jsx("h4", { style: { fontSize: '14px', marginBottom: '8px' }, children: "5 Stars" }), _jsx(StarRating, { rating: 5 })] }), _jsxs("div", { style: { backgroundColor: '#dddddd', padding: '16px', borderRadius: '8px' }, children: [_jsx("h4", { style: { fontSize: '14px', marginBottom: '8px' }, children: "3 Stars" }), _jsx(StarRating, { rating: 3 })] }), _jsxs("div", { style: { backgroundColor: '#dddddd', padding: '16px', borderRadius: '8px' }, children: [_jsx("h4", { style: { fontSize: '14px', marginBottom: '8px' }, children: "Interactive" }), _jsx(StarRating, { rating: 0, interactive: true })] }), _jsxs("div", { style: { backgroundColor: '#dddddd', padding: '16px', borderRadius: '8px' }, children: [_jsx("h4", { style: { fontSize: '14px', marginBottom: '8px' }, children: "Large" }), _jsx(StarRating, { rating: 4, size: 32 })] })] })] }), _jsxs("div", { style: { marginBottom: '32px' }, children: [_jsx("h3", { style: { fontSize: '18px', fontWeight: '600', marginBottom: '16px' }, children: "AddOn" }), _jsxs("div", { style: {
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                                    gap: '16px'
                                }, children: [_jsxs("div", { style: { backgroundColor: '#dddddd', padding: '16px', borderRadius: '8px' }, children: [_jsx("h4", { style: { fontSize: '14px', marginBottom: '8px' }, children: "Default" }), _jsx(AddOn, {})] }), _jsxs("div", { style: { backgroundColor: '#dddddd', padding: '16px', borderRadius: '8px' }, children: [_jsx("h4", { style: { fontSize: '14px', marginBottom: '8px' }, children: "With Selection" }), _jsx(AddOn, { selectedOptionId: "red" })] }), _jsxs("div", { style: { backgroundColor: '#dddddd', padding: '16px', borderRadius: '8px' }, children: [_jsx("h4", { style: { fontSize: '14px', marginBottom: '8px' }, children: "Custom Options" }), _jsx(AddOn, { title: "Dessert add-on", description: "Sweet treats to complete your meal.", options: [
                                                    { id: 'none', label: 'No dessert', price: '', selected: true },
                                                    { id: 'chocolate', label: 'Chocolate cake', price: '+ $12' },
                                                    { id: 'cheesecake', label: 'New York cheesecake', price: '+ $15' },
                                                ] })] })] })] })] }), _jsxs("section", { style: { marginBottom: '48px' }, children: [_jsx("h2", { style: {
                            fontSize: '24px',
                            fontWeight: '600',
                            marginBottom: '24px',
                            color: 'var(--color-foreground-primary)'
                        }, children: "Complex Molecules" }), _jsxs("div", { style: { marginBottom: '32px' }, children: [_jsx("h3", { style: { fontSize: '18px', fontWeight: '600', marginBottom: '16px' }, children: "Dialogue" }), _jsxs("div", { style: {
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                                    gap: '16px'
                                }, children: [_jsxs("div", { style: { backgroundColor: '#dddddd', padding: '16px', borderRadius: '8px' }, children: [_jsx("h4", { style: { fontSize: '14px', marginBottom: '8px' }, children: "Default" }), _jsx(Dialogue, {})] }), _jsxs("div", { style: { backgroundColor: '#dddddd', padding: '16px', borderRadius: '8px' }, children: [_jsx("h4", { style: { fontSize: '14px', marginBottom: '8px' }, children: "Desktop" }), _jsx(Dialogue, { variant: "desktop" })] }), _jsxs("div", { style: { backgroundColor: '#dddddd', padding: '16px', borderRadius: '8px' }, children: [_jsx("h4", { style: { fontSize: '14px', marginBottom: '8px' }, children: "Without Text Area" }), _jsx(Dialogue, { showTextArea: false })] })] })] }), _jsxs("div", { style: { marginBottom: '32px' }, children: [_jsx("h3", { style: { fontSize: '18px', fontWeight: '600', marginBottom: '16px' }, children: "Lists" }), _jsxs("div", { style: {
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                                    gap: '16px'
                                }, children: [_jsxs("div", { style: { backgroundColor: '#dddddd', padding: '16px', borderRadius: '8px' }, children: [_jsx("h4", { style: { fontSize: '14px', marginBottom: '8px' }, children: "Default" }), _jsx(Lists, {})] }), _jsxs("div", { style: { backgroundColor: '#dddddd', padding: '16px', borderRadius: '8px' }, children: [_jsx("h4", { style: { fontSize: '14px', marginBottom: '8px' }, children: "With Custom Title" }), _jsx(Lists, { title: "Features" })] }), _jsxs("div", { style: { backgroundColor: '#dddddd', padding: '16px', borderRadius: '8px' }, children: [_jsx("h4", { style: { fontSize: '14px', marginBottom: '8px' }, children: "Long List" }), _jsx(Lists, { title: "Menu Items", items: [
                                                    { id: '1', text: 'Appetizers' },
                                                    { id: '2', text: 'Main Courses' },
                                                    { id: '3', text: 'Desserts' },
                                                    { id: '4', text: 'Beverages' },
                                                    { id: '5', text: 'Specials' },
                                                ] })] })] })] })] }), _jsxs("section", { style: { marginBottom: '48px' }, children: [_jsx("h2", { style: {
                            fontSize: '24px',
                            fontWeight: '600',
                            marginBottom: '24px',
                            color: 'var(--color-foreground-primary)'
                        }, children: "Design Tokens" }), _jsxs("div", { style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            gap: '24px',
                            padding: '16px',
                            border: '1px solid var(--color-stroke-horizontal-rule)',
                            borderRadius: '8px'
                        }, children: [_jsxs("div", { children: [_jsx("h3", { style: { fontSize: '18px', fontWeight: '600', marginBottom: '16px' }, children: "Colors" }), _jsxs("div", { style: { display: 'flex', flexDirection: 'column', gap: '8px' }, children: [_jsxs("div", { style: { display: 'flex', alignItems: 'center', gap: '8px' }, children: [_jsx("div", { style: { width: '20px', height: '20px', backgroundColor: 'var(--color-foreground-primary)', borderRadius: '4px' } }), _jsx("span", { children: "--color-foreground-primary (#141414)" })] }), _jsxs("div", { style: { display: 'flex', alignItems: 'center', gap: '8px' }, children: [_jsx("div", { style: { width: '20px', height: '20px', backgroundColor: 'var(--color-foreground-secondary)', borderRadius: '4px' } }), _jsx("span", { children: "--color-foreground-secondary (rgba(0,0,0,0.6))" })] }), _jsxs("div", { style: { display: 'flex', alignItems: 'center', gap: '8px' }, children: [_jsx("div", { style: { width: '20px', height: '20px', backgroundColor: 'var(--color-foreground-invert-primary)', borderRadius: '4px' } }), _jsx("span", { children: "--color-foreground-invert-primary (#ffffff)" })] }), _jsxs("div", { style: { display: 'flex', alignItems: 'center', gap: '8px' }, children: [_jsx("div", { style: { width: '20px', height: '20px', backgroundColor: 'var(--color-foreground-invert-secondary)', borderRadius: '4px' } }), _jsx("span", { children: "--color-foreground-invert-secondary (rgba(255,255,255,0.8))" })] }), _jsxs("div", { style: { display: 'flex', alignItems: 'center', gap: '8px' }, children: [_jsx("div", { style: { width: '20px', height: '20px', backgroundColor: 'var(--color-background-primary)', border: '1px solid var(--color-stroke-primary)', borderRadius: '4px' } }), _jsx("span", { children: "--color-background-primary (#ffffff)" })] }), _jsxs("div", { style: { display: 'flex', alignItems: 'center', gap: '8px' }, children: [_jsx("div", { style: { width: '20px', height: '20px', backgroundColor: 'var(--color-background-accent)', borderRadius: '4px' } }), _jsx("span", { children: "--color-background-accent (#f08e80)" })] }), _jsxs("div", { style: { display: 'flex', alignItems: 'center', gap: '8px' }, children: [_jsx("div", { style: { width: '20px', height: '20px', backgroundColor: 'var(--color-background-invert-primary)', borderRadius: '4px' } }), _jsx("span", { children: "--color-background-invert-primary (#141414)" })] }), _jsxs("div", { style: { display: 'flex', alignItems: 'center', gap: '8px' }, children: [_jsx("div", { style: { width: '20px', height: '20px', backgroundColor: 'var(--color-stroke-primary)', borderRadius: '4px' } }), _jsx("span", { children: "--color-stroke-primary (#141414)" })] }), _jsxs("div", { style: { display: 'flex', alignItems: 'center', gap: '8px' }, children: [_jsx("div", { style: { width: '20px', height: '20px', backgroundColor: 'var(--color-form-controls-disabled)', borderRadius: '4px' } }), _jsx("span", { children: "--color-form-controls-disabled (#d3d3d3)" })] })] })] }), _jsxs("div", { children: [_jsx("h3", { style: { fontSize: '18px', fontWeight: '600', marginBottom: '16px' }, children: "Typography" }), _jsxs("div", { style: { display: 'flex', flexDirection: 'column', gap: '8px' }, children: [_jsx("div", { style: { fontSize: '24px', fontWeight: '600', lineHeight: '32px' }, children: "H2 Heading (24px/600)" }), _jsx("div", { style: { fontSize: '21px', fontWeight: '600', lineHeight: '28px' }, children: "H3 Heading (21px/600)" }), _jsx("div", { style: { fontSize: '16px', fontWeight: '400', lineHeight: '22px' }, children: "Body Text (16px/400)" }), _jsx("div", { style: { fontSize: '14px', fontWeight: '400', lineHeight: '18px' }, children: "Small Text (14px/400)" })] })] })] })] })] }));
};
export default DesignSystemCatalog;
