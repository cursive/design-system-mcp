import '../../tokens/base.css';
import React from 'react';
import { CheckIcon } from '../../atoms/CheckIcon';
import './CheckboxLine.css';

export interface CheckboxLineProps {
    /** Label text for the checkbox */
    label?: string;
    /** Whether the checkbox is checked */
    checked?: boolean;
    /** Whether the checkbox is disabled */
    disabled?: boolean;
    /** Visual state of the checkbox */
    state?: 'default' | 'active';
    /** Additional CSS class name */
    className?: string;
    /** Checkbox change handler */
    onChange?: (checked: boolean) => void;
    /** Checkbox click handler */
    onClick?: () => void;
}

export const CheckboxLine: React.FC<CheckboxLineProps> = ({
    label = 'This is a gift',
    checked = false,
    disabled = false,
    state = 'default',
    className = '',
    onChange,
    onClick,
}) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(e.target.checked);
        }
    };

    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    const getStateClass = () => {
        if (disabled) return 'checkbox-line--disabled';
        return `checkbox-line--${state}`;
    };

    const isChecked = checked || state === 'active';

    return (
        <div className={`checkbox-line ${getStateClass()} ${className}`}>
            <label className="checkbox-line__label">
                <input
                    type="checkbox"
                    className="checkbox-line__input"
                    checked={isChecked}
                    disabled={disabled}
                    onChange={handleChange}
                    onClick={handleClick}
                />
                <div className="checkbox-line__checkbox">
                    {isChecked && (
                        <div className="checkbox-line__check-icon">
                            <CheckIcon size={11} color="var(--color-foreground-invert-primary)" />
                        </div>
                    )}
                </div>
                <span className="checkbox-line__text">{label}</span>
            </label>
        </div>
    );
};

export default CheckboxLine;
