import '../../tokens/base.css';
import React from 'react';
import { RadioIcon } from '../../atoms/RadioIcon';
import './RadioInline.css';

export interface RadioInlineProps {
    /** Label text for the radio option */
    label?: string;
    /** Price or value text */
    price?: string;
    /** Whether the radio is selected */
    selected?: boolean;
    /** Whether the radio is disabled */
    disabled?: boolean;
    /** Visual state of the radio */
    state?: 'unchecked' | 'hover' | 'checked';
    /** Whether to show the divider */
    showDivider?: boolean;
    /** Additional CSS class name */
    className?: string;
    /** Radio change handler */
    onChange?: (selected: boolean) => void;
    /** Radio click handler */
    onClick?: () => void;
}

export const RadioInline: React.FC<RadioInlineProps> = ({
    label = 'Breakfast Kit — Chicken',
    price = '$40',
    selected = false,
    disabled = false,
    state = 'unchecked',
    showDivider = true,
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
        if (disabled) return 'radio-inline--disabled';
        return `radio-inline--${state}`;
    };

    const isSelected = selected || state === 'checked';
    const isHover = state === 'hover';

    return (
        <div className={`radio-inline ${getStateClass()} ${className}`}>
            <label className="radio-inline__label">
                <input
                    type="radio"
                    className="radio-inline__input"
                    checked={isSelected}
                    disabled={disabled}
                    onChange={handleChange}
                    onClick={handleClick}
                />
                <div className="radio-inline__content">
                    <div className="radio-inline__main">
                        <span className={`radio-inline__text ${isHover ? 'radio-inline__text--hover' : ''}`}>
                            {label}
                        </span>
                        <div className="radio-inline__right">
                            <span className="radio-inline__price">{price}</span>
                            <div className="radio-inline__radio">
                                <RadioIcon
                                    size="regular"
                                    color="var(--color-foreground-primary)"
                                    state={isSelected ? 'checked' : 'unchecked'}
                                />
                            </div>
                        </div>
                    </div>
                    {showDivider && (
                        <div className="radio-inline__divider" />
                    )}
                </div>
            </label>
        </div>
    );
};

export default RadioInline;
