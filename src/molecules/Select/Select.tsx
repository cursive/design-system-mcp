import React from 'react';
import { ChevronDownIcon } from '../../atoms/ChevronDownIcon';
import './Select.css';

export interface SelectProps {
    /** Label text for the select field */
    label?: string;
    /** Placeholder text */
    placeholder?: string;
    /** Current selected value */
    value?: string;
    /** Hint text below the select */
    hint?: string;
    /** Whether to show the label */
    showLabel?: boolean;
    /** Whether to show the hint */
    showHint?: boolean;
    /** Visual state of the select */
    state?: 'default' | 'hover' | 'active';
    /** Additional CSS class name */
    className?: string;
    /** Select change handler */
    onChange?: (value: string) => void;
    /** Select focus handler */
    onFocus?: () => void;
    /** Select blur handler */
    onBlur?: () => void;
    /** Whether the select is disabled */
    disabled?: boolean;
}

export const Select: React.FC<SelectProps> = ({
    label = 'Label',
    placeholder = 'Select a country',
    value = '',
    hint = 'Hint',
    showLabel = true,
    showHint = true,
    state = 'default',
    className = '',
    onChange,
    onFocus,
    onBlur,
    disabled = false,
}) => {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(e.target.value);
        }
    };

    const getStateClass = () => {
        if (disabled) return 'select--disabled';
        return `select--${state}`;
    };

    const getSelectClass = () => {
        const baseClass = 'select__field';
        if (disabled) return `${baseClass} select__field--disabled`;
        return `${baseClass} select__field--${state}`;
    };

    return (
        <div className={`select ${getStateClass()} ${className}`}>
            {showLabel && (
                <label className="select__label">
                    {label}
                </label>
            )}
            <div className="select__field-container">
                <select
                    className={getSelectClass()}
                    value={value}
                    disabled={disabled}
                    onChange={handleChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                >
                    <option value="" disabled>
                        {placeholder}
                    </option>
                    <option value="us">United States</option>
                    <option value="ca">Canada</option>
                    <option value="uk">United Kingdom</option>
                    <option value="au">Australia</option>
                </select>
                <div className="select__icon">
                    <ChevronDownIcon size={24} color="var(--color-foreground-primary)" />
                </div>
            </div>
            {showHint && (
                <div className="select__hint">
                    {hint}
                </div>
            )}
        </div>
    );
};

export default Select;
