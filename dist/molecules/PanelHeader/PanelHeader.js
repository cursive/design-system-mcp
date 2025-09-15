import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChevronDownIcon } from '../../atoms/ChevronDownIcon';
import './PanelHeader.css';
export const PanelHeader = ({ hierarchy = 'Default', showEyebrow = true, showIcon = true, showSub = true, icon, title = "What you'll get", eyebrow = "What you'll get", subtitle = "Sub", className = '', }) => {
    const combinedClassName = `panel-header ${className}`.trim();
    const eyebrowElement = showEyebrow && (_jsx("div", { className: "panel-header__eyebrow", "data-node-id": "6105:56203", children: _jsx("p", { children: eyebrow }) }));
    const iconElement = showIcon && (_jsx("div", { className: "panel-header__icon", "data-node-id": "6105:56206", children: icon || _jsx(ChevronDownIcon, { size: 24, color: "var(--color-foreground-primary)" }) }));
    const subtitleElement = showSub && (_jsx("div", { className: "panel-header__subtitle", "data-node-id": "6105:56207", children: _jsx("p", { children: subtitle }) }));
    const titleClassName = `panel-header__title panel-header__title--${hierarchy.toLowerCase()}`;
    if (hierarchy === 'Secondary') {
        return (_jsxs("div", { className: combinedClassName, "data-name": "Hierarchy=Secondary", "data-node-id": "6105:56208", children: [eyebrowElement, _jsxs("div", { className: "panel-header__title-container", "data-name": "Title", "data-node-id": "6105:56210", children: [_jsx("div", { className: titleClassName, "data-node-id": "6105:56211", children: _jsx("p", { children: title }) }), iconElement] }), subtitleElement] }));
    }
    // Default hierarchy
    return (_jsxs("div", { className: combinedClassName, "data-name": "Hierarchy=Default", "data-node-id": "6105:56202", children: [eyebrowElement, _jsxs("div", { className: "panel-header__title-container", "data-name": "Title", "data-node-id": "6105:56204", children: [_jsx("div", { className: titleClassName, "data-node-id": "6105:56205", children: _jsx("p", { children: title }) }), iconElement] }), subtitleElement] }));
};
