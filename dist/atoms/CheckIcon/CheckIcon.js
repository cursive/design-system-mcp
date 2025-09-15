import { jsx as _jsx } from "react/jsx-runtime";
import './CheckIcon.css';
export const CheckIcon = ({ size = 24, className = '', color = 'currentColor', }) => {
    return (_jsx("svg", { className: `check-icon ${className}`, width: size, height: size, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", focusable: "false", children: _jsx("path", { d: "M20 6L9 17L4 12", stroke: color, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }));
};
