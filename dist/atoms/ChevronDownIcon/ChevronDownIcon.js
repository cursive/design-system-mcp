import { jsx as _jsx } from "react/jsx-runtime";
import './ChevronDownIcon.css';
export const ChevronDownIcon = ({ size = 24, className = '', color = 'currentColor', }) => {
    return (_jsx("svg", { className: `chevron-down-icon ${className}`, width: size, height: size, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", focusable: "false", children: _jsx("path", { d: "M6 9L12 15L18 9", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }));
};
