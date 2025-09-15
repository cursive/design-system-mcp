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
                                        }, children: _jsx(PanelHeader, { hierarchy: "Default", title: "Custom Title", eyebrow: "Custom Eyebrow", subtitle: "Custom subtitle text" }) })] })] })] }), _jsxs("section", { style: { marginBottom: '48px' }, children: [_jsx("h2", { style: {
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
