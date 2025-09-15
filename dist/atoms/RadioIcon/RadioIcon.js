import { jsx as _jsx } from "react/jsx-runtime";
import './RadioIcon.css';
export const RadioIcon = ({ size = 'regular', state = 'unchecked', className = '', sizeOverride, color, }) => {
    const sizeClass = size === 'small' ? 'radio-icon--small' : 'radio-icon--regular';
    const combinedClassName = `radio-icon ${sizeClass} ${className}`.trim();
    const style = {
        ...(sizeOverride && { width: sizeOverride, height: sizeOverride }),
        ...(color && { color }),
    };
    if (size === 'small' && state === 'unchecked') {
        return (_jsx("div", { className: combinedClassName, style: style, "data-node-id": "5357:44645", children: _jsx("svg", { className: "radio-icon__svg", viewBox: "0 0 17 17", children: _jsx("path", { className: "radio-icon__path", d: "M8.33333 0C3.73333 0 0 3.73333 0 8.33333C0 12.9333 3.73333 16.6667 8.33333 16.6667C12.9333 16.6667 16.6667 12.9333 16.6667 8.33333C16.6667 3.73333 12.9333 0 8.33333 0ZM8.33333 15C4.65 15 1.66667 12.0167 1.66667 8.33333C1.66667 4.65 4.65 1.66667 8.33333 1.66667C12.0167 1.66667 15 4.65 15 8.33333C15 12.0167 12.0167 15 8.33333 15Z" }) }) }));
    }
    if (size === 'regular' && state === 'checked') {
        return (_jsx("div", { className: combinedClassName, style: style, "data-node-id": "5357:44642", children: _jsx("svg", { className: "radio-icon__svg", viewBox: "0 0 20 20", children: _jsx("path", { className: "radio-icon__path", clipRule: "evenodd", d: "M9.6 19.2C14.9019 19.2 19.2 14.9019 19.2 9.6C19.2 4.29807 14.9019 0 9.6 0C4.29807 0 0 4.29807 0 9.6C0 14.9019 4.29807 19.2 9.6 19.2ZM14.0485 8.04853C14.5172 7.5799 14.5172 6.8201 14.0485 6.35147C13.5799 5.88284 12.8201 5.88284 12.3515 6.35147L8.4 10.3029L6.84853 8.75147C6.3799 8.28284 5.6201 8.28284 5.15147 8.75147C4.68284 9.2201 4.68284 9.9799 5.15147 10.4485L7.55147 12.8485C8.0201 13.3172 8.7799 13.3172 9.24853 12.8485L14.0485 8.04853Z", fillRule: "evenodd" }) }) }));
    }
    if (size === 'small' && state === 'checked') {
        return (_jsx("div", { className: combinedClassName, style: style, "data-node-id": "5357:44643", children: _jsx("svg", { className: "radio-icon__svg", viewBox: "0 0 16 16", children: _jsx("path", { className: "radio-icon__path", clipRule: "evenodd", d: "M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM11.7071 6.70711C12.0976 6.31658 12.0976 5.68342 11.7071 5.29289C11.3166 4.90237 10.6834 4.90237 10.2929 5.29289L7 8.58579L5.70711 7.29289C5.31658 6.90237 4.68342 6.90237 4.29289 7.29289C3.90237 7.68342 3.90237 8.31658 4.29289 8.70711L6.29289 10.7071C6.68342 11.0976 7.31658 11.0976 7.70711 10.7071L11.7071 6.70711Z", fillRule: "evenodd" }) }) }));
    }
    // Default: regular, unchecked
    return (_jsx("div", { className: combinedClassName, style: style, "data-node-id": "5357:44644", children: _jsx("svg", { className: "radio-icon__svg", viewBox: "0 0 20 20", children: _jsx("path", { className: "radio-icon__path", d: "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z" }) }) }));
};
