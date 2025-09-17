import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsxs("div", { className: "design-system-catalog-page", children: [_jsx("h1", { className: "page-title", children: "Design System" }), _jsxs("section", { className: "component-section", children: [_jsx("h2", { className: "section-title", children: "Atoms" }), _jsxs("div", { className: "component-section", children: [_jsx("h3", { className: "component-title", children: "RadioIcon" }), _jsxs("div", { className: "grid-demo", children: [_jsxs("div", { style: { textAlign: 'center' }, children: [_jsx(RadioIcon, { size: "regular", state: "unchecked" }), _jsx("div", { style: { fontSize: '12px', marginTop: '4px' }, children: "Regular Unchecked" })] }), _jsxs("div", { style: { textAlign: 'center' }, children: [_jsx(RadioIcon, { size: "regular", state: "checked" }), _jsx("div", { style: { fontSize: '12px', marginTop: '4px' }, children: "Regular Checked" })] }), _jsxs("div", { style: { textAlign: 'center' }, children: [_jsx(RadioIcon, { size: "small", state: "unchecked" }), _jsx("div", { style: { fontSize: '12px', marginTop: '4px' }, children: "Small Unchecked" })] }), _jsxs("div", { style: { textAlign: 'center' }, children: [_jsx(RadioIcon, { size: "small", state: "checked" }), _jsx("div", { style: { fontSize: '12px', marginTop: '4px' }, children: "Small Checked" })] })] })] }), _jsxs("div", { className: "component-section", children: [_jsx("h3", { className: "component-title", children: "Icon" }), _jsx("div", { className: "grid-demo", children: ['search', 'edit', 'local-shipping', 'storefront', 'credit-card', 'account-circle'].map((iconName) => (_jsxs("div", { style: { textAlign: 'center' }, children: [_jsx(Icon, { name: iconName, size: 24 }), _jsx("div", { style: { fontSize: '12px', marginTop: '4px' }, children: iconName })] }, iconName))) })] }), _jsxs("div", { className: "component-section", children: [_jsx("h3", { className: "component-title", children: "Large Icons (40px)" }), _jsx("div", { className: "container", children: _jsx("div", { className: "grid-demo-5", children: ['gift-large', 'wine-large', 'car-large', 'chef-hat-large', 'house-large'].map((iconName) => (_jsxs("div", { style: { textAlign: 'center' }, children: [_jsx(Icon, { name: iconName, size: 40 }), _jsx("div", { style: { fontSize: '12px', marginTop: '4px' }, children: iconName })] }, iconName))) }) })] }), _jsxs("div", { className: "component-section", children: [_jsx("h3", { className: "component-title", children: "PlaceholderIcon" }), _jsx("div", { className: "container", children: _jsxs("div", { className: "flex-demo", children: [_jsx(PlaceholderIcon, { size: 20 }), _jsx(PlaceholderIcon, { size: 24 }), _jsx(PlaceholderIcon, { size: 32 }), _jsx(PlaceholderIcon, { size: 40 })] }) })] }), _jsxs("div", { className: "component-section", children: [_jsx("h3", { className: "component-title", children: "Individual Icons" }), _jsx("div", { className: "container", children: _jsxs("div", { className: "grid-demo-5", children: [_jsxs("div", { style: { textAlign: 'center' }, children: [_jsx(CheckIcon, { size: 24 }), _jsx("div", { style: { fontSize: '12px', marginTop: '4px' }, children: "CheckIcon" })] }), _jsxs("div", { style: { textAlign: 'center' }, children: [_jsx(ChevronDownIcon, { size: 24 }), _jsx("div", { style: { fontSize: '12px', marginTop: '4px' }, children: "ChevronDownIcon" })] }), _jsxs("div", { style: { textAlign: 'center' }, children: [_jsx(PackageIcon, { size: 24 }), _jsx("div", { style: { fontSize: '12px', marginTop: '4px' }, children: "PackageIcon" })] }), _jsxs("div", { style: { textAlign: 'center' }, children: [_jsx(CalendarFoldIcon, { size: 24 }), _jsx("div", { style: { fontSize: '12px', marginTop: '4px' }, children: "CalendarFoldIcon" })] }), _jsxs("div", { style: { textAlign: 'center' }, children: [_jsx(CirclePauseIcon, { size: 24 }), _jsx("div", { style: { fontSize: '12px', marginTop: '4px' }, children: "CirclePauseIcon" })] })] }) })] })] }), _jsxs("section", { className: "component-section", children: [_jsx("h2", { className: "section-title", children: "Molecules" }), _jsxs("div", { className: "component-section", children: [_jsx("h3", { className: "component-title", children: "Button" }), _jsxs("div", { className: "component-demo", children: [_jsx("div", { className: "left", children: (() => {
                                            const [buttonStyle, setButtonStyle] = React.useState('accent');
                                            const [state, setState] = React.useState('default');
                                            const [showIcon, setShowIcon] = React.useState(true);
                                            const [disabled, setDisabled] = React.useState(false);
                                            const [label, setLabel] = React.useState('Label');
                                            const [className, setClassName] = React.useState('');
                                            // expose state setters via a tiny inline context to controls pane
                                            window.__CATALOG_BUTTON__ = {
                                                buttonStyle, setButtonStyle,
                                                state, setState,
                                                showIcon, setShowIcon,
                                                disabled, setDisabled,
                                                label, setLabel,
                                                className, setClassName,
                                            };
                                            return (_jsx(Button, { style: buttonStyle, state: state, showIcon: showIcon, disabled: disabled, className: className, children: label }));
                                        })() }), _jsxs("div", { className: "right", children: [_jsx("h4", { className: "subtitle", children: "Controls" }), _jsxs("div", { className: "control-group", children: [_jsx("label", { children: "Label" }), _jsx("input", { type: "text", defaultValue: "Label", onInput: (e) => window.__CATALOG_BUTTON__?.setLabel?.(e.target.value) })] }), _jsxs("div", { className: "control-group", children: [_jsx("label", { children: "Style" }), _jsxs("select", { defaultValue: "accent", onChange: (e) => window.__CATALOG_BUTTON__?.setButtonStyle?.(e.target.value), children: [_jsx("option", { value: "accent", children: "accent" }), _jsx("option", { value: "primary", children: "primary" }), _jsx("option", { value: "secondary", children: "secondary" })] })] }), _jsxs("div", { className: "control-group", children: [_jsx("label", { children: "State" }), _jsxs("select", { defaultValue: "default", onChange: (e) => window.__CATALOG_BUTTON__?.setState?.(e.target.value), children: [_jsx("option", { value: "default", children: "Default" }), _jsx("option", { value: "hover", children: "Hover" }), _jsx("option", { value: "disabled", children: "Disabled" })] })] }), _jsx("div", { className: "control-group", children: _jsxs("label", { children: [_jsx("input", { type: "checkbox", defaultChecked: true, onChange: (e) => window.__CATALOG_BUTTON__?.setShowIcon?.(e.currentTarget.checked) }), "Show Icon"] }) }), _jsx("div", { className: "control-group", children: _jsxs("label", { children: [_jsx("input", { type: "checkbox", onChange: (e) => window.__CATALOG_BUTTON__?.setDisabled?.(e.currentTarget.checked) }), "Disabled"] }) })] })] })] }), _jsxs("div", { className: "component-section", children: [_jsx("h3", { className: "component-title", children: "PanelHeader" }), _jsxs("div", { className: "component-demo", children: [_jsx("div", { className: "left", children: (() => {
                                            const [hierarchy, setHierarchy] = React.useState('Default');
                                            const [showEyebrow, setShowEyebrow] = React.useState(true);
                                            const [showIcon, setShowIcon] = React.useState(true);
                                            const [showSub, setShowSub] = React.useState(true);
                                            const [title, setTitle] = React.useState("What you'll get");
                                            const [eyebrow, setEyebrow] = React.useState("What you'll get");
                                            const [subtitle, setSubtitle] = React.useState("Sub");
                                            const [className, setClassName] = React.useState('');
                                            // expose state setters via a tiny inline context to controls pane
                                            window.__CATALOG_PANELHEADER__ = {
                                                hierarchy, setHierarchy,
                                                showEyebrow, setShowEyebrow,
                                                showIcon, setShowIcon,
                                                showSub, setShowSub,
                                                title, setTitle,
                                                eyebrow, setEyebrow,
                                                subtitle, setSubtitle,
                                                className, setClassName,
                                            };
                                            return (_jsx(PanelHeader, { hierarchy: hierarchy, showEyebrow: showEyebrow, showIcon: showIcon, showSub: showSub, title: title, eyebrow: eyebrow, subtitle: subtitle, className: className }));
                                        })() }), _jsxs("div", { className: "right", children: [_jsx("h4", { className: "subtitle", children: "Controls" }), _jsxs("div", { className: "control-group", children: [_jsx("label", { children: "Title" }), _jsx("input", { type: "text", defaultValue: "What you'll get", onInput: (e) => window.__CATALOG_PANELHEADER__?.setTitle?.(e.target.value) })] }), _jsxs("div", { className: "control-group", children: [_jsx("label", { children: "Eyebrow" }), _jsx("input", { type: "text", defaultValue: "What you'll get", onInput: (e) => window.__CATALOG_PANELHEADER__?.setEyebrow?.(e.target.value) })] }), _jsxs("div", { className: "control-group", children: [_jsx("label", { children: "Subtitle" }), _jsx("input", { type: "text", defaultValue: "Sub", onInput: (e) => window.__CATALOG_PANELHEADER__?.setSubtitle?.(e.target.value) })] }), _jsxs("div", { className: "control-group", children: [_jsx("label", { children: "Hierarchy" }), _jsxs("select", { defaultValue: "Default", onChange: (e) => window.__CATALOG_PANELHEADER__?.setHierarchy?.(e.target.value), children: [_jsx("option", { value: "Default", children: "Default" }), _jsx("option", { value: "Secondary", children: "Secondary" })] })] }), _jsx("div", { className: "control-group", children: _jsxs("label", { children: [_jsx("input", { type: "checkbox", defaultChecked: true, onChange: (e) => window.__CATALOG_PANELHEADER__?.setShowEyebrow?.(e.currentTarget.checked) }), "Show Eyebrow"] }) }), _jsx("div", { className: "control-group", children: _jsxs("label", { children: [_jsx("input", { type: "checkbox", defaultChecked: true, onChange: (e) => window.__CATALOG_PANELHEADER__?.setShowIcon?.(e.currentTarget.checked) }), "Show Icon"] }) }), _jsx("div", { className: "control-group", children: _jsxs("label", { children: [_jsx("input", { type: "checkbox", defaultChecked: true, onChange: (e) => window.__CATALOG_PANELHEADER__?.setShowSub?.(e.currentTarget.checked) }), "Show Subtitle"] }) })] })] })] }), _jsxs("div", { className: "component-section", children: [_jsx("h3", { className: "component-title", children: "Textfield" }), _jsxs("div", { className: "component-demo", children: [_jsx("div", { className: "left", children: (() => {
                                            const [state, setState] = React.useState('default');
                                            const [showLabel, setShowLabel] = React.useState(true);
                                            const [showIcon, setShowIcon] = React.useState(false);
                                            const [label, setLabel] = React.useState('Label');
                                            const [placeholder, setPlaceholder] = React.useState('Enter text');
                                            const [value, setValue] = React.useState('');
                                            const [errorMessage, setErrorMessage] = React.useState('');
                                            const [className, setClassName] = React.useState('');
                                            window.__CATALOG_TEXTFIELD__ = {
                                                state, setState,
                                                showLabel, setShowLabel,
                                                showIcon, setShowIcon,
                                                label, setLabel,
                                                placeholder, setPlaceholder,
                                                value, setValue,
                                                errorMessage, setErrorMessage,
                                                className, setClassName,
                                            };
                                            return (_jsx("div", { style: { width: '300px' }, children: _jsx(Textfield, { state: state, showLabel: showLabel, showIcon: showIcon, label: label, placeholder: placeholder, value: value, errorMessage: errorMessage, disabled: state === 'disabled', className: className }) }));
                                        })() }), _jsxs("div", { className: "right", children: [_jsx("h4", { className: "subtitle", children: "Controls" }), _jsxs("div", { className: "control-group", children: [_jsx("label", { children: "State" }), _jsxs("select", { defaultValue: "default", onChange: (e) => window.__CATALOG_TEXTFIELD__?.setState?.(e.target.value), children: [_jsx("option", { value: "default", children: "Default" }), _jsx("option", { value: "hover", children: "Hover" }), _jsx("option", { value: "active", children: "Active" }), _jsx("option", { value: "filled", children: "Filled" }), _jsx("option", { value: "disabled", children: "Disabled" }), _jsx("option", { value: "error", children: "Error" }), _jsx("option", { value: "error-filled", children: "Error Filled" })] })] }), _jsx("div", { className: "control-group", children: _jsxs("label", { children: [_jsx("input", { type: "checkbox", defaultChecked: true, onChange: (e) => window.__CATALOG_TEXTFIELD__?.setShowLabel?.(e.currentTarget.checked) }), "Show Label"] }) }), _jsx("div", { className: "control-group", children: _jsxs("label", { children: [_jsx("input", { type: "checkbox", onChange: (e) => window.__CATALOG_TEXTFIELD__?.setShowIcon?.(e.currentTarget.checked) }), "Show Icon"] }) }), _jsxs("div", { className: "control-group", children: [_jsx("label", { children: "Label" }), _jsx("input", { type: "text", defaultValue: "Label", onInput: (e) => window.__CATALOG_TEXTFIELD__?.setLabel?.(e.target.value) })] }), _jsxs("div", { className: "control-group", children: [_jsx("label", { children: "Placeholder" }), _jsx("input", { type: "text", defaultValue: "Enter text", onInput: (e) => window.__CATALOG_TEXTFIELD__?.setPlaceholder?.(e.target.value) })] }), _jsxs("div", { className: "control-group", children: [_jsx("label", { children: "Value" }), _jsx("input", { type: "text", onInput: (e) => window.__CATALOG_TEXTFIELD__?.setValue?.(e.target.value) })] }), _jsxs("div", { className: "control-group", children: [_jsx("label", { children: "Error Message" }), _jsx("input", { type: "text", onInput: (e) => window.__CATALOG_TEXTFIELD__?.setErrorMessage?.(e.target.value) })] })] })] })] }), _jsxs("div", { className: "component-section", children: [_jsx("h3", { className: "component-title", children: "Select" }), _jsxs("div", { className: "component-demo", children: [_jsx("div", { className: "left", children: (() => {
                                            const [state, setState] = React.useState('default');
                                            const [value, setValue] = React.useState('');
                                            const [label, setLabel] = React.useState('Label');
                                            const [placeholder, setPlaceholder] = React.useState('Select a country');
                                            const [hint, setHint] = React.useState('Choose your country');
                                            const [showLabel, setShowLabel] = React.useState(true);
                                            const [showHint, setShowHint] = React.useState(true);
                                            const [disabled, setDisabled] = React.useState(false);
                                            const [className, setClassName] = React.useState('');
                                            window.__CATALOG_SELECT__ = {
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
                                            return (_jsx("div", { style: { width: '300px' }, children: _jsx(Select, { state: state, value: value, label: label, placeholder: placeholder, hint: hint, showLabel: showLabel, showHint: showHint, disabled: disabled, className: className }) }));
                                        })() }), _jsxs("div", { className: "right", children: [_jsx("h4", { className: "subtitle", children: "Controls" }), _jsxs("div", { className: "control-group", children: [_jsx("label", { children: "State" }), _jsxs("select", { defaultValue: "default", onChange: (e) => window.__CATALOG_SELECT__?.setState?.(e.target.value), children: [_jsx("option", { value: "default", children: "Default" }), _jsx("option", { value: "hover", children: "Hover" }), _jsx("option", { value: "active", children: "Active" })] })] }), _jsxs("div", { className: "control-group", children: [_jsx("label", { children: "Value" }), _jsx("input", { type: "text", onInput: (e) => window.__CATALOG_SELECT__?.setValue?.(e.target.value) })] }), _jsxs("div", { className: "control-group", children: [_jsx("label", { children: "Label" }), _jsx("input", { type: "text", defaultValue: "Label", onInput: (e) => window.__CATALOG_SELECT__?.setLabel?.(e.target.value) })] }), _jsxs("div", { className: "control-group", children: [_jsx("label", { children: "Placeholder" }), _jsx("input", { type: "text", defaultValue: "Select a country", onInput: (e) => window.__CATALOG_SELECT__?.setPlaceholder?.(e.target.value) })] }), _jsxs("div", { className: "control-group", children: [_jsx("label", { children: "Hint" }), _jsx("input", { type: "text", defaultValue: "Choose your country", onInput: (e) => window.__CATALOG_SELECT__?.setHint?.(e.target.value) })] }), _jsx("div", { className: "control-group", children: _jsxs("label", { children: [_jsx("input", { type: "checkbox", defaultChecked: true, onChange: (e) => window.__CATALOG_SELECT__?.setShowLabel?.(e.currentTarget.checked) }), "Show Label"] }) }), _jsx("div", { className: "control-group", children: _jsxs("label", { children: [_jsx("input", { type: "checkbox", defaultChecked: true, onChange: (e) => window.__CATALOG_SELECT__?.setShowHint?.(e.currentTarget.checked) }), "Show Hint"] }) }), _jsx("div", { className: "control-group", children: _jsxs("label", { children: [_jsx("input", { type: "checkbox", onChange: (e) => window.__CATALOG_SELECT__?.setDisabled?.(e.currentTarget.checked) }), "Disabled"] }) })] })] })] }), _jsxs("div", { className: "component-section", children: [_jsx("h3", { className: "component-title", children: "TextArea" }), _jsxs("div", { className: "component-demo", children: [_jsx("div", { className: "left", children: (() => {
                                            const [state, setState] = React.useState('default');
                                            const [label, setLabel] = React.useState('Label');
                                            const [placeholder, setPlaceholder] = React.useState('Enter your message');
                                            const [value, setValue] = React.useState('');
                                            const [errorMessage, setErrorMessage] = React.useState('');
                                            const [showLabel, setShowLabel] = React.useState(true);
                                            const [showError, setShowError] = React.useState(false);
                                            const [disabled, setDisabled] = React.useState(false);
                                            const [rows, setRows] = React.useState(4);
                                            const [className, setClassName] = React.useState('');
                                            window.__CATALOG_TEXTAREA__ = {
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
                                            return (_jsx("div", { style: { width: '300px' }, children: _jsx(TextArea, { state: state, label: label, placeholder: placeholder, value: value, errorMessage: errorMessage, showLabel: showLabel, showError: showError, disabled: disabled, rows: rows, className: className }) }));
                                        })() }), _jsxs("div", { className: "right", children: [_jsx("h4", { className: "subtitle", children: "Controls" }), _jsxs("div", { className: "control-group", children: [_jsx("label", { children: "State" }), _jsxs("select", { defaultValue: "default", onChange: (e) => window.__CATALOG_TEXTAREA__?.setState?.(e.target.value), children: [_jsx("option", { value: "default", children: "Default" }), _jsx("option", { value: "hover", children: "Hover" }), _jsx("option", { value: "active", children: "Active" }), _jsx("option", { value: "filled", children: "Filled" }), _jsx("option", { value: "error", children: "Error" }), _jsx("option", { value: "error-filled", children: "Error Filled" })] })] }), _jsx("div", { className: "control-group", children: _jsxs("label", { children: [_jsx("input", { type: "checkbox", defaultChecked: true, onChange: (e) => window.__CATALOG_TEXTAREA__?.setShowLabel?.(e.currentTarget.checked) }), "Show Label"] }) }), _jsxs("div", { className: "control-group", children: [_jsx("label", { children: "Label" }), _jsx("input", { type: "text", defaultValue: "Label", onInput: (e) => window.__CATALOG_TEXTAREA__?.setLabel?.(e.target.value) })] }), _jsxs("div", { className: "control-group", children: [_jsx("label", { children: "Placeholder" }), _jsx("input", { type: "text", defaultValue: "Enter your message", onInput: (e) => window.__CATALOG_TEXTAREA__?.setPlaceholder?.(e.target.value) })] }), _jsxs("div", { className: "control-group", children: [_jsx("label", { children: "Value" }), _jsx("input", { type: "text", onInput: (e) => window.__CATALOG_TEXTAREA__?.setValue?.(e.target.value) })] }), _jsx("div", { className: "control-group", children: _jsxs("label", { children: [_jsx("input", { type: "checkbox", onChange: (e) => window.__CATALOG_TEXTAREA__?.setShowError?.(e.currentTarget.checked) }), "Show Error"] }) }), _jsxs("div", { className: "control-group", children: [_jsx("label", { children: "Error Message" }), _jsx("input", { type: "text", onInput: (e) => window.__CATALOG_TEXTAREA__?.setErrorMessage?.(e.target.value) })] }), _jsxs("div", { className: "control-group", children: [_jsx("label", { children: "Rows" }), _jsx("input", { type: "number", defaultValue: "4", onInput: (e) => window.__CATALOG_TEXTAREA__?.setRows?.(parseInt(e.target.value) || 4) })] }), _jsx("div", { className: "control-group", children: _jsxs("label", { children: [_jsx("input", { type: "checkbox", onChange: (e) => window.__CATALOG_TEXTAREA__?.setDisabled?.(e.currentTarget.checked) }), "Disabled"] }) })] })] })] }), _jsxs("div", { className: "component-section", children: [_jsx("h3", { className: "component-title", children: "CheckboxLine" }), _jsxs("div", { className: "component-demo", children: [_jsx("div", { className: "left", children: (() => {
                                            const [state, setState] = React.useState('default');
                                            const [label, setLabel] = React.useState('This is a gift');
                                            const [checked, setChecked] = React.useState(false);
                                            const [disabled, setDisabled] = React.useState(false);
                                            const [className, setClassName] = React.useState('');
                                            window.__CATALOG_CHECKBOXLINE__ = {
                                                state, setState,
                                                label, setLabel,
                                                checked, setChecked,
                                                disabled, setDisabled,
                                                className, setClassName,
                                            };
                                            return (_jsx("div", { style: { width: '300px' }, children: _jsx(CheckboxLine, { state: state, label: label, checked: checked, disabled: disabled, className: className }) }));
                                        })() }), _jsxs("div", { className: "right", children: [_jsx("h4", { className: "subtitle", children: "Controls" }), _jsxs("div", { className: "control-group", children: [_jsx("label", { children: "State" }), _jsxs("select", { defaultValue: "default", onChange: (e) => window.__CATALOG_CHECKBOXLINE__?.setState?.(e.target.value), children: [_jsx("option", { value: "default", children: "Default" }), _jsx("option", { value: "active", children: "Active" })] })] }), _jsxs("div", { className: "control-group", children: [_jsx("label", { children: "Label" }), _jsx("input", { type: "text", defaultValue: "This is a gift", onInput: (e) => window.__CATALOG_CHECKBOXLINE__?.setLabel?.(e.target.value) })] }), _jsx("div", { className: "control-group", children: _jsxs("label", { children: [_jsx("input", { type: "checkbox", onChange: (e) => window.__CATALOG_CHECKBOXLINE__?.setChecked?.(e.currentTarget.checked) }), "Checked"] }) }), _jsx("div", { className: "control-group", children: _jsxs("label", { children: [_jsx("input", { type: "checkbox", onChange: (e) => window.__CATALOG_CHECKBOXLINE__?.setDisabled?.(e.currentTarget.checked) }), "Disabled"] }) })] })] })] }), _jsxs("div", { className: "component-section", children: [_jsx("h3", { className: "component-title", children: "RadioInline" }), _jsxs("div", { className: "component-demo", children: [_jsx("div", { className: "left", children: (() => {
                                            const [state, setState] = React.useState('unchecked');
                                            const [label, setLabel] = React.useState('Breakfast Kit — Chicken');
                                            const [price, setPrice] = React.useState('$40');
                                            const [selected, setSelected] = React.useState(false);
                                            const [disabled, setDisabled] = React.useState(false);
                                            const [showDivider, setShowDivider] = React.useState(true);
                                            const [className, setClassName] = React.useState('');
                                            window.__CATALOG_RADIOINLINE__ = {
                                                state, setState,
                                                label, setLabel,
                                                price, setPrice,
                                                selected, setSelected,
                                                disabled, setDisabled,
                                                showDivider, setShowDivider,
                                                className, setClassName,
                                            };
                                            return (_jsx("div", { style: { width: '300px' }, children: _jsx(RadioInline, { state: state, label: label, price: price, selected: selected, disabled: disabled, showDivider: showDivider, className: className }) }));
                                        })() }), _jsxs("div", { className: "right", children: [_jsx("h4", { className: "subtitle", children: "Controls" }), _jsxs("div", { className: "control-group", children: [_jsx("label", { children: "State" }), _jsxs("select", { defaultValue: "unchecked", onChange: (e) => window.__CATALOG_RADIOINLINE__?.setState?.(e.target.value), children: [_jsx("option", { value: "unchecked", children: "Unchecked" }), _jsx("option", { value: "hover", children: "Hover" }), _jsx("option", { value: "checked", children: "Checked" })] })] }), _jsxs("div", { className: "control-group", children: [_jsx("label", { children: "Label" }), _jsx("input", { type: "text", defaultValue: "Breakfast Kit \u2014 Chicken", onInput: (e) => window.__CATALOG_RADIOINLINE__?.setLabel?.(e.target.value) })] }), _jsxs("div", { className: "control-group", children: [_jsx("label", { children: "Price" }), _jsx("input", { type: "text", defaultValue: "$40", onInput: (e) => window.__CATALOG_RADIOINLINE__?.setPrice?.(e.target.value) })] }), _jsx("div", { className: "control-group", children: _jsxs("label", { children: [_jsx("input", { type: "checkbox", onChange: (e) => window.__CATALOG_RADIOINLINE__?.setSelected?.(e.currentTarget.checked) }), "Selected"] }) }), _jsx("div", { className: "control-group", children: _jsxs("label", { children: [_jsx("input", { type: "checkbox", onChange: (e) => window.__CATALOG_RADIOINLINE__?.setDisabled?.(e.currentTarget.checked) }), "Disabled"] }) }), _jsx("div", { className: "control-group", children: _jsxs("label", { children: [_jsx("input", { type: "checkbox", defaultChecked: true, onChange: (e) => window.__CATALOG_RADIOINLINE__?.setShowDivider?.(e.currentTarget.checked) }), "Show Divider"] }) })] })] })] }), _jsxs("div", { className: "component-section", children: [_jsx("h3", { className: "component-title", children: "SelectItem" }), _jsxs("div", { className: "component-demo", children: [_jsx("div", { className: "left", children: (() => {
                                            const [state, setState] = React.useState('default');
                                            const [selected, setSelected] = React.useState(false);
                                            const [disabled, setDisabled] = React.useState(false);
                                            const [children, setChildren] = React.useState('No peanuts');
                                            const [className, setClassName] = React.useState('');
                                            window.__CATALOG_SELECTITEM__ = {
                                                state, setState,
                                                selected, setSelected,
                                                disabled, setDisabled,
                                                children, setChildren,
                                                className, setClassName,
                                            };
                                            return (_jsx("div", { style: { width: '200px' }, children: _jsx(SelectItem, { state: state, selected: selected, disabled: disabled, className: className, children: children }) }));
                                        })() }), _jsxs("div", { className: "right", children: [_jsx("h4", { className: "subtitle", children: "Controls" }), _jsxs("div", { className: "control-group", children: [_jsx("label", { children: "State" }), _jsxs("select", { defaultValue: "default", onChange: (e) => window.__CATALOG_SELECTITEM__?.setState?.(e.target.value), children: [_jsx("option", { value: "default", children: "Default" }), _jsx("option", { value: "hover", children: "Hover" })] })] }), _jsxs("div", { className: "control-group", children: [_jsx("label", { children: "Text" }), _jsx("input", { type: "text", defaultValue: "No peanuts", onInput: (e) => window.__CATALOG_SELECTITEM__?.setChildren?.(e.target.value) })] }), _jsx("div", { className: "control-group", children: _jsxs("label", { children: [_jsx("input", { type: "checkbox", onChange: (e) => window.__CATALOG_SELECTITEM__?.setSelected?.(e.currentTarget.checked) }), "Selected"] }) }), _jsx("div", { className: "control-group", children: _jsxs("label", { children: [_jsx("input", { type: "checkbox", onChange: (e) => window.__CATALOG_SELECTITEM__?.setDisabled?.(e.currentTarget.checked) }), "Disabled"] }) })] })] })] }), _jsxs("div", { className: "component-section", children: [_jsx("h3", { className: "component-title", children: "SelectList" }), _jsxs("div", { className: "component-demo", children: [_jsx("div", { className: "left", children: (() => {
                                            const [selectedIndex, setSelectedIndex] = React.useState(-1);
                                            const [items, setItems] = React.useState(['Option 1', 'Option 2', 'Option 3', 'Option 4']);
                                            const [disabled, setDisabled] = React.useState(false);
                                            const [className, setClassName] = React.useState('');
                                            window.__CATALOG_SELECTLIST__ = {
                                                selectedIndex, setSelectedIndex,
                                                items, setItems,
                                                disabled, setDisabled,
                                                className, setClassName,
                                            };
                                            return (_jsx("div", { style: { width: '200px' }, children: _jsx(SelectList, { selectedIndex: selectedIndex, items: items, disabled: disabled, className: className }) }));
                                        })() }), _jsxs("div", { className: "right", children: [_jsx("h4", { className: "subtitle", children: "Controls" }), _jsxs("div", { className: "control-group", children: [_jsx("label", { children: "Selected Index" }), _jsx("input", { type: "number", defaultValue: "-1", onInput: (e) => window.__CATALOG_SELECTLIST__?.setSelectedIndex?.(parseInt(e.target.value) || -1) })] }), _jsxs("div", { className: "control-group", children: [_jsx("label", { children: "Items (comma-separated)" }), _jsx("input", { type: "text", defaultValue: "Option 1, Option 2, Option 3, Option 4", onInput: (e) => window.__CATALOG_SELECTLIST__?.setItems?.(e.target.value.split(',').map(item => item.trim())) })] }), _jsx("div", { className: "control-group", children: _jsxs("label", { children: [_jsx("input", { type: "checkbox", onChange: (e) => window.__CATALOG_SELECTLIST__?.setDisabled?.(e.currentTarget.checked) }), "Disabled"] }) })] })] })] }), _jsxs("div", { className: "component-section", children: [_jsx("h3", { className: "component-title", children: "Tile" }), _jsxs("div", { className: "component-demo", children: [_jsx("div", { className: "left", children: (() => {
                                            const [state, setState] = React.useState('default');
                                            const [title, setTitle] = React.useState('');
                                            const [description, setDescription] = React.useState('');
                                            const [rightLabel, setRightLabel] = React.useState('');
                                            const [showRightLabel, setShowRightLabel] = React.useState(true);
                                            const [showDescription, setShowDescription] = React.useState(true);
                                            const [showPill, setShowPill] = React.useState(false);
                                            const [showIcon, setShowIcon] = React.useState(false);
                                            const [disabled, setDisabled] = React.useState(false);
                                            const [className, setClassName] = React.useState('');
                                            window.__CATALOG_TILE__ = {
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
                                            return (_jsx("div", { style: { width: '350px' }, children: _jsx(Tile, { state: state, title: title, description: description, rightLabel: rightLabel, showRightLabel: showRightLabel, showDescription: showDescription, showPill: showPill, showIcon: showIcon, disabled: disabled, className: className }) }));
                                        })() }), _jsxs("div", { className: "right", children: [_jsx("h4", { className: "subtitle", children: "Controls" }), _jsxs("div", { className: "control-group", children: [_jsx("label", { children: "State" }), _jsxs("select", { defaultValue: "default", onChange: (e) => window.__CATALOG_TILE__?.setState?.(e.target.value), children: [_jsx("option", { value: "default", children: "Default" }), _jsx("option", { value: "active", children: "Active" })] })] }), _jsxs("div", { className: "control-group", children: [_jsx("label", { children: "Title" }), _jsx("input", { type: "text", onInput: (e) => window.__CATALOG_TILE__?.setTitle?.(e.target.value) })] }), _jsxs("div", { className: "control-group", children: [_jsx("label", { children: "Description" }), _jsx("input", { type: "text", onInput: (e) => window.__CATALOG_TILE__?.setDescription?.(e.target.value) })] }), _jsxs("div", { className: "control-group", children: [_jsx("label", { children: "Right Label" }), _jsx("input", { type: "text", onInput: (e) => window.__CATALOG_TILE__?.setRightLabel?.(e.target.value) })] }), _jsx("div", { className: "control-group", children: _jsxs("label", { children: [_jsx("input", { type: "checkbox", defaultChecked: true, onChange: (e) => window.__CATALOG_TILE__?.setShowRightLabel?.(e.currentTarget.checked) }), "Show Right Label"] }) }), _jsx("div", { className: "control-group", children: _jsxs("label", { children: [_jsx("input", { type: "checkbox", defaultChecked: true, onChange: (e) => window.__CATALOG_TILE__?.setShowDescription?.(e.currentTarget.checked) }), "Show Description"] }) }), _jsx("div", { className: "control-group", children: _jsxs("label", { children: [_jsx("input", { type: "checkbox", onChange: (e) => window.__CATALOG_TILE__?.setShowPill?.(e.currentTarget.checked) }), "Show Pill"] }) }), _jsx("div", { className: "control-group", children: _jsxs("label", { children: [_jsx("input", { type: "checkbox", onChange: (e) => window.__CATALOG_TILE__?.setShowIcon?.(e.currentTarget.checked) }), "Show Icon"] }) }), _jsx("div", { className: "control-group", children: _jsxs("label", { children: [_jsx("input", { type: "checkbox", onChange: (e) => window.__CATALOG_TILE__?.setDisabled?.(e.currentTarget.checked) }), "Disabled"] }) })] })] })] }), _jsxs("div", { className: "component-section", children: [_jsx("h3", { className: "component-title", children: "TileMultiItem" }), _jsxs("div", { className: "component-demo", children: [_jsx("div", { className: "left", children: (() => {
                                            const [options, setOptions] = React.useState([
                                                { id: '1', label: '2 bottles', price: '+ $45' },
                                                { id: '2', label: '4 bottles', price: '+ $90' },
                                                { id: '3', label: 'No, thank you', price: '', selected: true }
                                            ]);
                                            const [selectedId, setSelectedId] = React.useState('3');
                                            const [disabled, setDisabled] = React.useState(false);
                                            const [className, setClassName] = React.useState('');
                                            window.__CATALOG_TILEMULTIITEM__ = {
                                                options, setOptions,
                                                selectedId, setSelectedId,
                                                disabled, setDisabled,
                                                className, setClassName,
                                            };
                                            return (_jsx("div", { style: { width: '350px' }, children: _jsx(TileMultiItem, { options: options, selectedId: selectedId, disabled: disabled, className: className }) }));
                                        })() }), _jsxs("div", { className: "right", children: [_jsx("h4", { className: "subtitle", children: "Controls" }), _jsxs("div", { className: "control-group", children: [_jsx("label", { children: "Selected ID" }), _jsx("input", { type: "text", defaultValue: "3", onInput: (e) => window.__CATALOG_TILEMULTIITEM__?.setSelectedId?.(e.target.value) })] }), _jsxs("div", { className: "control-group", children: [_jsx("label", { children: "Options (JSON format)" }), _jsx("textarea", { rows: 4, defaultValue: JSON.stringify([
                                                            { id: '1', label: '2 bottles', price: '+ $45' },
                                                            { id: '2', label: '4 bottles', price: '+ $90' },
                                                            { id: '3', label: 'No, thank you', price: '', selected: true }
                                                        ], null, 2), onInput: (e) => {
                                                            try {
                                                                const parsed = JSON.parse(e.target.value);
                                                                window.__CATALOG_TILEMULTIITEM__?.setOptions?.(parsed);
                                                            }
                                                            catch (e) {
                                                                // Invalid JSON, ignore
                                                            }
                                                        } })] }), _jsx("div", { className: "control-group", children: _jsxs("label", { children: [_jsx("input", { type: "checkbox", onChange: (e) => window.__CATALOG_TILEMULTIITEM__?.setDisabled?.(e.currentTarget.checked) }), "Disabled"] }) })] })] })] }), _jsxs("div", { className: "component-section", children: [_jsx("h3", { className: "component-title", children: "IconLine" }), _jsxs("div", { className: "component-demo", children: [_jsx("div", { className: "left", children: (() => {
                                            const [children, setChildren] = React.useState('Custom text content');
                                            const [disabled, setDisabled] = React.useState(false);
                                            const [className, setClassName] = React.useState('');
                                            window.__CATALOG_ICONLINE__ = {
                                                children, setChildren,
                                                disabled, setDisabled,
                                                className, setClassName,
                                            };
                                            return (_jsx("div", { style: { width: '350px' }, children: _jsx(IconLine, { disabled: disabled, className: className, children: children }) }));
                                        })() }), _jsxs("div", { className: "right", children: [_jsx("h4", { className: "subtitle", children: "Controls" }), _jsxs("div", { className: "control-group", children: [_jsx("label", { children: "Text Content" }), _jsx("input", { type: "text", defaultValue: "Custom text content", onInput: (e) => window.__CATALOG_ICONLINE__?.setChildren?.(e.target.value) })] }), _jsx("div", { className: "control-group", children: _jsxs("label", { children: [_jsx("input", { type: "checkbox", onChange: (e) => window.__CATALOG_ICONLINE__?.setDisabled?.(e.currentTarget.checked) }), "Disabled"] }) })] })] })] }), _jsxs("div", { className: "component-section", children: [_jsx("h3", { className: "component-title", children: "Banner" }), _jsxs("div", { className: "component-demo", children: [_jsx("div", { className: "left", children: (() => {
                                            const [children, setChildren] = React.useState('Success! Your changes have been saved.');
                                            const [type, setType] = React.useState('success');
                                            const [showLeftIcon, setShowLeftIcon] = React.useState(true);
                                            const [showRightIcon, setShowRightIcon] = React.useState(true);
                                            const [dismissible, setDismissible] = React.useState(true);
                                            const [className, setClassName] = React.useState('');
                                            window.__CATALOG_BANNER__ = {
                                                children, setChildren,
                                                type, setType,
                                                showLeftIcon, setShowLeftIcon,
                                                showRightIcon, setShowRightIcon,
                                                dismissible, setDismissible,
                                                className, setClassName,
                                            };
                                            return (_jsx("div", { style: { width: '450px' }, children: _jsx(Banner, { type: type, showLeftIcon: showLeftIcon, showRightIcon: showRightIcon, dismissible: dismissible, className: className, children: children }) }));
                                        })() }), _jsxs("div", { className: "right", children: [_jsx("h4", { className: "subtitle", children: "Controls" }), _jsxs("div", { className: "control-group", children: [_jsx("label", { children: "Content" }), _jsx("input", { type: "text", defaultValue: "Success! Your changes have been saved.", onInput: (e) => window.__CATALOG_BANNER__?.setChildren?.(e.target.value) })] }), _jsxs("div", { className: "control-group", children: [_jsx("label", { children: "Type" }), _jsxs("select", { defaultValue: "success", onChange: (e) => window.__CATALOG_BANNER__?.setType?.(e.target.value), children: [_jsx("option", { value: "default", children: "Default" }), _jsx("option", { value: "success", children: "Success" }), _jsx("option", { value: "warning", children: "Warning" }), _jsx("option", { value: "alert", children: "Alert" })] })] }), _jsx("div", { className: "control-group", children: _jsxs("label", { children: [_jsx("input", { type: "checkbox", defaultChecked: true, onChange: (e) => window.__CATALOG_BANNER__?.setShowLeftIcon?.(e.currentTarget.checked) }), "Show Left Icon"] }) }), _jsx("div", { className: "control-group", children: _jsxs("label", { children: [_jsx("input", { type: "checkbox", defaultChecked: true, onChange: (e) => window.__CATALOG_BANNER__?.setShowRightIcon?.(e.currentTarget.checked) }), "Show Right Icon"] }) }), _jsx("div", { className: "control-group", children: _jsxs("label", { children: [_jsx("input", { type: "checkbox", defaultChecked: true, onChange: (e) => window.__CATALOG_BANNER__?.setDismissible?.(e.currentTarget.checked) }), "Dismissible"] }) })] })] })] })] }), _jsxs("section", { style: { marginBottom: '48px' }, children: [_jsx("h2", { style: {
                            fontSize: '24px',
                            fontWeight: '600',
                            marginBottom: '24px',
                            color: 'var(--color-foreground-primary)'
                        }, children: "Navigation Molecules" }), _jsxs("div", { className: "component-section", children: [_jsx("h3", { className: "component-title", children: "CarouselNav" }), _jsxs("div", { className: "component-demo", children: [_jsx("div", { className: "left", children: (() => {
                                            const [prevDisabled, setPrevDisabled] = React.useState(false);
                                            const [nextDisabled, setNextDisabled] = React.useState(false);
                                            const [className, setClassName] = React.useState('');
                                            window.__CATALOG_CAROUSELNAV__ = {
                                                prevDisabled, setPrevDisabled,
                                                nextDisabled, setNextDisabled,
                                                className, setClassName,
                                            };
                                            return (_jsx("div", { style: { width: '200px' }, children: _jsx(CarouselNav, { prevDisabled: prevDisabled, nextDisabled: nextDisabled, className: className }) }));
                                        })() }), _jsxs("div", { className: "right", children: [_jsx("h4", { className: "subtitle", children: "Controls" }), _jsx("div", { className: "control-group", children: _jsxs("label", { children: [_jsx("input", { type: "checkbox", onChange: (e) => window.__CATALOG_CAROUSELNAV__?.setPrevDisabled?.(e.currentTarget.checked) }), "Previous Disabled"] }) }), _jsx("div", { className: "control-group", children: _jsxs("label", { children: [_jsx("input", { type: "checkbox", onChange: (e) => window.__CATALOG_CAROUSELNAV__?.setNextDisabled?.(e.currentTarget.checked) }), "Next Disabled"] }) })] })] })] }), _jsxs("div", { className: "component-section", children: [_jsx("h3", { className: "component-title", children: "CarouselPips" }), _jsxs("div", { className: "component-demo", children: [_jsx("div", { className: "left", children: (() => {
                                            const [totalItems, setTotalItems] = React.useState(3);
                                            const [activeIndex, setActiveIndex] = React.useState(0);
                                            const [className, setClassName] = React.useState('');
                                            window.__CATALOG_CAROUSELPIPS__ = {
                                                totalItems, setTotalItems,
                                                activeIndex, setActiveIndex,
                                                className, setClassName,
                                            };
                                            return (_jsx("div", { style: { width: '200px' }, children: _jsx(CarouselPips, { totalItems: totalItems, activeIndex: activeIndex, className: className }) }));
                                        })() }), _jsxs("div", { className: "right", children: [_jsx("h4", { className: "subtitle", children: "Controls" }), _jsxs("div", { className: "control-group", children: [_jsx("label", { children: "Total Items" }), _jsx("input", { type: "number", defaultValue: "3", min: "1", max: "10", onInput: (e) => window.__CATALOG_CAROUSELPIPS__?.setTotalItems?.(parseInt(e.target.value) || 3) })] }), _jsxs("div", { className: "control-group", children: [_jsx("label", { children: "Active Index" }), _jsx("input", { type: "number", defaultValue: "0", min: "0", onInput: (e) => window.__CATALOG_CAROUSELPIPS__?.setActiveIndex?.(parseInt(e.target.value) || 0) })] })] })] })] }), _jsxs("div", { className: "component-section", children: [_jsx("h3", { className: "component-title", children: "PageHeader" }), _jsxs("div", { className: "component-demo", children: [_jsx("div", { className: "left", children: (() => {
                                            const [backText, setBackText] = React.useState('Back');
                                            const [title, setTitle] = React.useState('Page Title');
                                            const [subtitle, setSubtitle] = React.useState('Page Subtitle');
                                            const [showBackButton, setShowBackButton] = React.useState(true);
                                            const [className, setClassName] = React.useState('');
                                            window.__CATALOG_PAGEHEADER__ = {
                                                backText, setBackText,
                                                title, setTitle,
                                                subtitle, setSubtitle,
                                                showBackButton, setShowBackButton,
                                                className, setClassName,
                                            };
                                            return (_jsx("div", { style: { width: '400px' }, children: _jsx(PageHeader, { backText: backText, title: title, subtitle: subtitle, showBackButton: showBackButton, className: className }) }));
                                        })() }), _jsxs("div", { className: "right", children: [_jsx("h4", { className: "subtitle", children: "Controls" }), _jsxs("div", { className: "control-group", children: [_jsx("label", { children: "Back Text" }), _jsx("input", { type: "text", defaultValue: "Back", onInput: (e) => window.__CATALOG_PAGEHEADER__?.setBackText?.(e.target.value) })] }), _jsxs("div", { className: "control-group", children: [_jsx("label", { children: "Title" }), _jsx("input", { type: "text", defaultValue: "Page Title", onInput: (e) => window.__CATALOG_PAGEHEADER__?.setTitle?.(e.target.value) })] }), _jsxs("div", { className: "control-group", children: [_jsx("label", { children: "Subtitle" }), _jsx("input", { type: "text", defaultValue: "Page Subtitle", onInput: (e) => window.__CATALOG_PAGEHEADER__?.setSubtitle?.(e.target.value) })] }), _jsx("div", { className: "control-group", children: _jsxs("label", { children: [_jsx("input", { type: "checkbox", defaultChecked: true, onChange: (e) => window.__CATALOG_PAGEHEADER__?.setShowBackButton?.(e.currentTarget.checked) }), "Show Back Button"] }) })] })] })] }), _jsxs("div", { className: "component-section", children: [_jsx("h3", { className: "component-title", children: "FooterPDP" }), _jsxs("div", { className: "component-demo", children: [_jsx("div", { className: "left", children: (() => {
                                            const [device, setDevice] = React.useState('mobile');
                                            const [buttonText, setButtonText] = React.useState('Add to Cart');
                                            const [priceText, setPriceText] = React.useState('$29.99');
                                            const [className, setClassName] = React.useState('');
                                            window.__CATALOG_FOOTERPDP__ = {
                                                device, setDevice,
                                                buttonText, setButtonText,
                                                priceText, setPriceText,
                                                className, setClassName,
                                            };
                                            return (_jsx("div", { style: { width: '300px' }, children: _jsx(FooterPDP, { device: device, buttonText: buttonText, priceText: priceText, className: className }) }));
                                        })() }), _jsxs("div", { className: "right", children: [_jsx("h4", { className: "subtitle", children: "Controls" }), _jsxs("div", { className: "control-group", children: [_jsx("label", { children: "Device" }), _jsxs("select", { defaultValue: "mobile", onChange: (e) => window.__CATALOG_FOOTERPDP__?.setDevice?.(e.target.value), children: [_jsx("option", { value: "mobile", children: "Mobile" }), _jsx("option", { value: "desktop", children: "Desktop" })] })] }), _jsxs("div", { className: "control-group", children: [_jsx("label", { children: "Button Text" }), _jsx("input", { type: "text", defaultValue: "Add to Cart", onInput: (e) => window.__CATALOG_FOOTERPDP__?.setButtonText?.(e.target.value) })] }), _jsxs("div", { className: "control-group", children: [_jsx("label", { children: "Price Text" }), _jsx("input", { type: "text", defaultValue: "$29.99", onInput: (e) => window.__CATALOG_FOOTERPDP__?.setPriceText?.(e.target.value) })] })] })] })] })] }), _jsxs("section", { style: { marginBottom: '48px' }, children: [_jsx("h2", { style: {
                            fontSize: '24px',
                            fontWeight: '600',
                            marginBottom: '24px',
                            color: 'var(--color-foreground-primary)'
                        }, children: "Layout Molecules" }), _jsxs("div", { className: "component-section", children: [_jsx("h3", { className: "component-title", children: "PageDivider" }), _jsxs("div", { className: "component-demo", children: [_jsx("div", { className: "left", children: (() => {
                                            const [variant, setVariant] = React.useState('default');
                                            const [label, setLabel] = React.useState('Or pay by card');
                                            const [className, setClassName] = React.useState('');
                                            window.__CATALOG_PAGEDIVIDER__ = {
                                                variant, setVariant,
                                                label, setLabel,
                                                className, setClassName,
                                            };
                                            return (_jsx("div", { style: { width: '400px' }, children: _jsx(PageDivider, { variant: variant, label: label, className: className }) }));
                                        })() }), _jsxs("div", { className: "right", children: [_jsx("h4", { className: "subtitle", children: "Controls" }), _jsxs("div", { className: "control-group", children: [_jsx("label", { children: "Variant" }), _jsxs("select", { defaultValue: "default", onChange: (e) => window.__CATALOG_PAGEDIVIDER__?.setVariant?.(e.target.value), children: [_jsx("option", { value: "default", children: "Default" }), _jsx("option", { value: "labelled", children: "Labelled" }), _jsx("option", { value: "blank", children: "Blank" }), _jsx("option", { value: "desktop", children: "Desktop" })] })] }), _jsxs("div", { className: "control-group", children: [_jsx("label", { children: "Label" }), _jsx("input", { type: "text", defaultValue: "Or pay by card", onInput: (e) => window.__CATALOG_PAGEDIVIDER__?.setLabel?.(e.target.value) })] })] })] })] }), _jsxs("div", { className: "component-section", children: [_jsx("h3", { className: "component-title", children: "FAQCell" }), _jsxs("div", { className: "component-demo", children: [_jsx("div", { className: "left", children: (() => {
                                            const [question, setQuestion] = React.useState('How do I cancel my subscription?');
                                            const [answer, setAnswer] = React.useState('You can cancel your subscription at any time by going to your account settings.');
                                            const [className, setClassName] = React.useState('');
                                            window.__CATALOG_FAQCELL__ = {
                                                question, setQuestion,
                                                answer, setAnswer,
                                                className, setClassName,
                                            };
                                            return (_jsx("div", { style: { width: '300px' }, children: _jsx(FAQCell, { question: question, answer: answer, className: className }) }));
                                        })() }), _jsxs("div", { className: "right", children: [_jsx("h4", { className: "subtitle", children: "Controls" }), _jsxs("div", { className: "control-group", children: [_jsx("label", { children: "Question" }), _jsx("input", { type: "text", defaultValue: "How do I cancel my subscription?", onInput: (e) => window.__CATALOG_FAQCELL__?.setQuestion?.(e.target.value) })] }), _jsxs("div", { className: "control-group", children: [_jsx("label", { children: "Answer" }), _jsx("textarea", { rows: 3, defaultValue: "You can cancel your subscription at any time by going to your account settings.", onInput: (e) => window.__CATALOG_FAQCELL__?.setAnswer?.(e.target.value) })] })] })] })] }), _jsxs("div", { className: "component-section", children: [_jsx("h3", { className: "component-title", children: "StarRating" }), _jsxs("div", { className: "component-demo", children: [_jsx("div", { className: "left", children: (() => {
                                            const [rating, setRating] = React.useState(3);
                                            const [maxRating, setMaxRating] = React.useState(5);
                                            const [interactive, setInteractive] = React.useState(false);
                                            const [size, setSize] = React.useState(20);
                                            const [className, setClassName] = React.useState('');
                                            window.__CATALOG_STARRATING__ = {
                                                rating, setRating,
                                                maxRating, setMaxRating,
                                                interactive, setInteractive,
                                                size, setSize,
                                                className, setClassName,
                                            };
                                            return (_jsx("div", { style: { width: '200px' }, children: _jsx(StarRating, { rating: rating, maxRating: maxRating, interactive: interactive, size: size, className: className }) }));
                                        })() }), _jsxs("div", { className: "right", children: [_jsx("h4", { className: "subtitle", children: "Controls" }), _jsxs("div", { className: "control-group", children: [_jsx("label", { children: "Rating" }), _jsx("input", { type: "number", defaultValue: "3", min: "0", max: "5", onInput: (e) => window.__CATALOG_STARRATING__?.setRating?.(parseInt(e.target.value) || 0) })] }), _jsxs("div", { className: "control-group", children: [_jsx("label", { children: "Max Rating" }), _jsx("input", { type: "number", defaultValue: "5", min: "1", max: "10", onInput: (e) => window.__CATALOG_STARRATING__?.setMaxRating?.(parseInt(e.target.value) || 5) })] }), _jsxs("div", { className: "control-group", children: [_jsx("label", { children: "Size (px)" }), _jsx("input", { type: "number", defaultValue: "20", min: "10", max: "50", onInput: (e) => window.__CATALOG_STARRATING__?.setSize?.(parseInt(e.target.value) || 20) })] }), _jsx("div", { className: "control-group", children: _jsxs("label", { children: [_jsx("input", { type: "checkbox", onChange: (e) => window.__CATALOG_STARRATING__?.setInteractive?.(e.currentTarget.checked) }), "Interactive"] }) })] })] })] }), _jsxs("div", { className: "component-section", children: [_jsx("h3", { className: "component-title", children: "AddOn" }), _jsxs("div", { className: "component-demo", children: [_jsx("div", { className: "left", children: (() => {
                                            const [title, setTitle] = React.useState('Optional wine pairing');
                                            const [description, setDescription] = React.useState('Tailored to each month\'s menu.');
                                            const [imageUrl, setImageUrl] = React.useState('');
                                            const [options, setOptions] = React.useState([
                                                { id: 'none', label: 'No, thank you', price: '', selected: true },
                                                { id: 'red', label: '1 bottle of red', price: '+ $35' },
                                                { id: 'white', label: '1 bottle of white', price: '+ $35' },
                                            ]);
                                            const [selectedOptionId, setSelectedOptionId] = React.useState('none');
                                            const [className, setClassName] = React.useState('');
                                            window.__CATALOG_ADDON__ = {
                                                title, setTitle,
                                                description, setDescription,
                                                imageUrl, setImageUrl,
                                                options, setOptions,
                                                selectedOptionId, setSelectedOptionId,
                                                className, setClassName,
                                            };
                                            return (_jsx("div", { style: { width: '300px' }, children: _jsx(AddOn, { title: title, description: description, imageUrl: imageUrl, options: options, selectedOptionId: selectedOptionId, className: className }) }));
                                        })() }), _jsxs("div", { className: "right", children: [_jsx("h4", { className: "subtitle", children: "Controls" }), _jsxs("div", { className: "control-group", children: [_jsx("label", { children: "Title" }), _jsx("input", { type: "text", defaultValue: "Optional wine pairing", onInput: (e) => window.__CATALOG_ADDON__?.setTitle?.(e.target.value) })] }), _jsxs("div", { className: "control-group", children: [_jsx("label", { children: "Description" }), _jsx("textarea", { rows: 2, defaultValue: "Tailored to each month's menu.", onInput: (e) => window.__CATALOG_ADDON__?.setDescription?.(e.target.value) })] }), _jsxs("div", { className: "control-group", children: [_jsx("label", { children: "Image URL" }), _jsx("input", { type: "text", onInput: (e) => window.__CATALOG_ADDON__?.setImageUrl?.(e.target.value) })] }), _jsxs("div", { className: "control-group", children: [_jsx("label", { children: "Selected Option ID" }), _jsx("input", { type: "text", defaultValue: "none", onInput: (e) => window.__CATALOG_ADDON__?.setSelectedOptionId?.(e.target.value) })] }), _jsxs("div", { className: "control-group", children: [_jsx("label", { children: "Options (JSON format)" }), _jsx("textarea", { rows: 4, defaultValue: JSON.stringify([
                                                            { id: 'none', label: 'No, thank you', price: '', selected: true },
                                                            { id: 'red', label: '1 bottle of red', price: '+ $35' },
                                                            { id: 'white', label: '1 bottle of white', price: '+ $35' },
                                                        ], null, 2), onInput: (e) => {
                                                            try {
                                                                const parsed = JSON.parse(e.target.value);
                                                                window.__CATALOG_ADDON__?.setOptions?.(parsed);
                                                            }
                                                            catch (e) {
                                                                // Invalid JSON, ignore
                                                            }
                                                        } })] })] })] })] })] }), _jsxs("section", { style: { marginBottom: '48px' }, children: [_jsx("h2", { style: {
                            fontSize: '24px',
                            fontWeight: '600',
                            marginBottom: '24px',
                            color: 'var(--color-foreground-primary)'
                        }, children: "Complex Molecules" }), _jsxs("div", { className: "component-section", children: [_jsx("h3", { className: "component-title", children: "Dialogue" }), _jsxs("div", { className: "component-demo", children: [_jsx("div", { className: "left", children: (() => {
                                            const [title, setTitle] = React.useState('Modal template');
                                            const [description, setDescription] = React.useState('Body copy');
                                            const [primaryButtonText, setPrimaryButtonText] = React.useState('Primary');
                                            const [secondaryButtonText, setSecondaryButtonText] = React.useState('Secondary');
                                            const [showTextArea, setShowTextArea] = React.useState(true);
                                            const [textAreaPlaceholder, setTextAreaPlaceholder] = React.useState('Text area');
                                            const [variant, setVariant] = React.useState('default');
                                            const [isOpen, setIsOpen] = React.useState(true);
                                            const [inline, setInline] = React.useState(true);
                                            const [className, setClassName] = React.useState('');
                                            window.__CATALOG_DIALOGUE__ = {
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
                                            return (_jsx("div", { style: { width: '400px' }, children: _jsx(Dialogue, { title: title, description: description, primaryButtonText: primaryButtonText, secondaryButtonText: secondaryButtonText, showTextArea: showTextArea, textAreaPlaceholder: textAreaPlaceholder, variant: variant, isOpen: isOpen, inline: inline, className: className }) }));
                                        })() }), _jsxs("div", { className: "right", children: [_jsx("h4", { className: "subtitle", children: "Controls" }), _jsxs("div", { className: "control-group", children: [_jsx("label", { children: "Title" }), _jsx("input", { type: "text", defaultValue: "Modal template", onInput: (e) => window.__CATALOG_DIALOGUE__?.setTitle?.(e.target.value) })] }), _jsxs("div", { className: "control-group", children: [_jsx("label", { children: "Description" }), _jsx("input", { type: "text", defaultValue: "Body copy", onInput: (e) => window.__CATALOG_DIALOGUE__?.setDescription?.(e.target.value) })] }), _jsxs("div", { className: "control-group", children: [_jsx("label", { children: "Primary Button Text" }), _jsx("input", { type: "text", defaultValue: "Primary", onInput: (e) => window.__CATALOG_DIALOGUE__?.setPrimaryButtonText?.(e.target.value) })] }), _jsxs("div", { className: "control-group", children: [_jsx("label", { children: "Secondary Button Text" }), _jsx("input", { type: "text", defaultValue: "Secondary", onInput: (e) => window.__CATALOG_DIALOGUE__?.setSecondaryButtonText?.(e.target.value) })] }), _jsxs("div", { className: "control-group", children: [_jsx("label", { children: "Text Area Placeholder" }), _jsx("input", { type: "text", defaultValue: "Text area", onInput: (e) => window.__CATALOG_DIALOGUE__?.setTextAreaPlaceholder?.(e.target.value) })] }), _jsxs("div", { className: "control-group", children: [_jsx("label", { children: "Variant" }), _jsxs("select", { defaultValue: "default", onChange: (e) => window.__CATALOG_DIALOGUE__?.setVariant?.(e.target.value), children: [_jsx("option", { value: "default", children: "Default" }), _jsx("option", { value: "desktop", children: "Desktop" })] })] }), _jsx("div", { className: "control-group", children: _jsxs("label", { children: [_jsx("input", { type: "checkbox", defaultChecked: true, onChange: (e) => window.__CATALOG_DIALOGUE__?.setShowTextArea?.(e.currentTarget.checked) }), "Show Text Area"] }) }), _jsx("div", { className: "control-group", children: _jsxs("label", { children: [_jsx("input", { type: "checkbox", defaultChecked: true, onChange: (e) => window.__CATALOG_DIALOGUE__?.setIsOpen?.(e.currentTarget.checked) }), "Is Open"] }) }), _jsx("div", { className: "control-group", children: _jsxs("label", { children: [_jsx("input", { type: "checkbox", defaultChecked: true, onChange: (e) => window.__CATALOG_DIALOGUE__?.setInline?.(e.currentTarget.checked) }), "Inline"] }) })] })] })] }), _jsxs("div", { className: "component-section", children: [_jsx("h3", { className: "component-title", children: "Lists" }), _jsxs("div", { className: "component-demo", children: [_jsx("div", { className: "left", children: (() => {
                                            const [title, setTitle] = React.useState('title');
                                            const [items, setItems] = React.useState([
                                                { id: '1', text: 'Text' },
                                                { id: '2', text: 'Text' },
                                                { id: '3', text: 'Text' },
                                            ]);
                                            const [className, setClassName] = React.useState('');
                                            window.__CATALOG_LISTS__ = {
                                                title, setTitle,
                                                items, setItems,
                                                className, setClassName,
                                            };
                                            return (_jsx("div", { style: { width: '250px' }, children: _jsx(Lists, { title: title, items: items, className: className }) }));
                                        })() }), _jsxs("div", { className: "right", children: [_jsx("h4", { className: "subtitle", children: "Controls" }), _jsxs("div", { className: "control-group", children: [_jsx("label", { children: "Title" }), _jsx("input", { type: "text", defaultValue: "title", onInput: (e) => window.__CATALOG_LISTS__?.setTitle?.(e.target.value) })] }), _jsxs("div", { className: "control-group", children: [_jsx("label", { children: "Items (JSON format)" }), _jsx("textarea", { rows: 4, defaultValue: JSON.stringify([
                                                            { id: '1', text: 'Text' },
                                                            { id: '2', text: 'Text' },
                                                            { id: '3', text: 'Text' },
                                                        ], null, 2), onInput: (e) => {
                                                            try {
                                                                const parsed = JSON.parse(e.target.value);
                                                                window.__CATALOG_LISTS__?.setItems?.(parsed);
                                                            }
                                                            catch (e) {
                                                                // Invalid JSON, ignore
                                                            }
                                                        } })] })] })] })] })] }), _jsxs("section", { className: "component-section", children: [_jsx("h2", { className: "section-title", children: "Design Tokens" }), _jsxs("div", { className: "tokens-grid", children: [_jsxs("div", { children: [_jsx("h3", { className: "component-title", children: "Colors" }), _jsxs("div", { style: { display: 'flex', flexDirection: 'column', gap: '8px' }, children: [_jsxs("div", { className: "token-item", children: [_jsx("div", { className: "token-name", children: "--color-foreground-primary" }), _jsx("div", { className: "token-value", children: "#141414" })] }), _jsxs("div", { style: { display: 'flex', alignItems: 'center', gap: '8px' }, children: [_jsx("div", { style: { width: '20px', height: '20px', backgroundColor: 'var(--color-foreground-secondary)', borderRadius: '4px' } }), _jsx("span", { children: "--color-foreground-secondary (rgba(0,0,0,0.6))" })] }), _jsxs("div", { style: { display: 'flex', alignItems: 'center', gap: '8px' }, children: [_jsx("div", { style: { width: '20px', height: '20px', backgroundColor: 'var(--color-foreground-invert-primary)', borderRadius: '4px' } }), _jsx("span", { children: "--color-foreground-invert-primary (#ffffff)" })] }), _jsxs("div", { style: { display: 'flex', alignItems: 'center', gap: '8px' }, children: [_jsx("div", { style: { width: '20px', height: '20px', backgroundColor: 'var(--color-foreground-invert-secondary)', borderRadius: '4px' } }), _jsx("span", { children: "--color-foreground-invert-secondary (rgba(255,255,255,0.8))" })] }), _jsxs("div", { style: { display: 'flex', alignItems: 'center', gap: '8px' }, children: [_jsx("div", { style: { width: '20px', height: '20px', backgroundColor: 'var(--color-background-primary)', border: '1px solid var(--color-stroke-primary)', borderRadius: '4px' } }), _jsx("span", { children: "--color-background-primary (#ffffff)" })] }), _jsxs("div", { style: { display: 'flex', alignItems: 'center', gap: '8px' }, children: [_jsx("div", { style: { width: '20px', height: '20px', backgroundColor: 'var(--color-background-accent)', borderRadius: '4px' } }), _jsx("span", { children: "--color-background-accent (#f08e80)" })] }), _jsxs("div", { style: { display: 'flex', alignItems: 'center', gap: '8px' }, children: [_jsx("div", { style: { width: '20px', height: '20px', backgroundColor: 'var(--color-background-invert-primary)', borderRadius: '4px' } }), _jsx("span", { children: "--color-background-invert-primary (#141414)" })] }), _jsxs("div", { style: { display: 'flex', alignItems: 'center', gap: '8px' }, children: [_jsx("div", { style: { width: '20px', height: '20px', backgroundColor: 'var(--color-stroke-primary)', borderRadius: '4px' } }), _jsx("span", { children: "--color-stroke-primary (#141414)" })] }), _jsxs("div", { style: { display: 'flex', alignItems: 'center', gap: '8px' }, children: [_jsx("div", { style: { width: '20px', height: '20px', backgroundColor: 'var(--color-form-controls-disabled)', borderRadius: '4px' } }), _jsx("span", { children: "--color-form-controls-disabled (#d3d3d3)" })] })] })] }), _jsxs("div", { children: [_jsx("h3", { className: "component-title", children: "Typography" }), _jsxs("div", { style: { display: 'flex', flexDirection: 'column', gap: '8px' }, children: [_jsx("div", { style: { fontSize: '24px', fontWeight: '600', lineHeight: '32px' }, children: "H2 Heading (24px/600)" }), _jsx("div", { style: { fontSize: '21px', fontWeight: '600', lineHeight: '28px' }, children: "H3 Heading (21px/600)" }), _jsx("div", { style: { fontSize: '16px', fontWeight: '400', lineHeight: '22px' }, children: "Body Text (16px/400)" }), _jsx("div", { style: { fontSize: '14px', fontWeight: '400', lineHeight: '18px' }, children: "Small Text (14px/400)" })] })] })] })] })] }));
};
export default DesignSystemCatalog;
