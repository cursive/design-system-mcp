import '../../tokens/base.css';
import React from 'react';
import './SelectItem.css';

export interface SelectItemProps {
    /** Text content of the select item */
    children?: string;
    /** Whether the item is selected */
    selected?: boolean;
    /** Whether the item is disabled */
    disabled?: boolean;
    /** Visual state of the select item */
    state?: 'default' | 'hover';
    /** Additional CSS class name */
    className?: string;
    /** Click handler */
    onClick?: () => void;
    /** Mouse enter handler */
    onMouseEnter?: () => void;
    /** Mouse leave handler */
    onMouseLeave?: () => void;
}

export const SelectItem: React.FC<SelectItemProps> = ({
    children = 'No peanuts',
    selected = false,
    disabled = false,
    state = 'default',
    className = '',
    onClick,
    onMouseEnter,
    onMouseLeave,
}) => {
    const getStateClass = () => {
        if (disabled) return 'select-item--disabled';
        if (selected) return 'select-item--selected';
        return `select-item--${state}`;
    };

    return (
        <div
            className={`select-item ${getStateClass()} ${className}`}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            role="option"
            aria-selected={selected}
            aria-disabled={disabled}
        >
            <span className="select-item__text">{children}</span>
        </div>
    );
};

export default SelectItem;
