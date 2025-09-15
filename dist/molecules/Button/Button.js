import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChevronDownIcon } from '../../atoms/ChevronDownIcon';
import './Button.css';
export const Button = ({ children = 'Label', style = 'accent', state = 'default', showIcon = true, icon, onClick, className = '', disabled = false, }) => {
    const isDisabled = disabled || state === 'disabled';
    const buttonClassName = [
        'button',
        `button--${style}`,
        className
    ].filter(Boolean).join(' ');
    const handleClick = () => {
        if (!isDisabled && onClick) {
            onClick();
        }
    };
    const iconElement = showIcon && (_jsx("div", { className: "button__icon", "data-node-id": "786:20089", children: icon || _jsx(ChevronDownIcon, { size: 24, color: "currentColor" }) }));
    return (_jsxs("button", { className: buttonClassName, onClick: handleClick, disabled: isDisabled, "data-name": `Style=${style}, State=${state}`, "data-node-id": "786:20093", children: [_jsx("div", { className: "button__content", "data-node-id": "786:20083", children: _jsx("p", { children: children }) }), iconElement] }));
};
