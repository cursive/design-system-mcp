import React from 'react';
import './Textfield.css';

export interface TextfieldProps {
    /** Label text for the input field */
    label?: string;
    /** Placeholder text */
    placeholder?: string;
    /** Current value of the input */
    value?: string;
    /** Error message to display */
    errorMessage?: string;
    /** Whether the field is disabled */
    disabled?: boolean;
    /** Whether to show the label */
    showLabel?: boolean;
    /** Whether to show an icon */
    showIcon?: boolean;
    /** Visual state of the textfield */
    state?: 'default' | 'hover' | 'active' | 'filled' | 'disabled' | 'error' | 'error-filled';
    /** Additional CSS class name */
    className?: string;
    /** Input change handler */
    onChange?: (value: string) => void;
    /** Input focus handler */
    onFocus?: () => void;
    /** Input blur handler */
    onBlur?: () => void;
}

export const Textfield: React.FC<TextfieldProps> = ({
    label = 'Label',
    placeholder = 'Value',
    value = '',
    errorMessage = 'Required',
    disabled = false,
    showLabel = true,
    showIcon = false,
    state = 'default',
    className = '',
    onChange,
    onFocus,
    onBlur,
}) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(e.target.value);
        }
    };

    const getStateClass = () => {
        if (disabled) return 'textfield--disabled';
        return `textfield--${state}`;
    };

    const getInputClass = () => {
        const baseClass = 'textfield__input';
        if (disabled) return `${baseClass} textfield__input--disabled`;
        return `${baseClass} textfield__input--${state}`;
    };

    const getErrorMessage = () => {
        if (state === 'error' || state === 'error-filled') {
            return state === 'error-filled' ? 'Explainer' : errorMessage;
        }
        return null;
    };

    return (
        <div className={`textfield ${getStateClass()} ${className}`}>
            {showLabel && (
                <label className="textfield__label">
                    {label}
                </label>
            )}
            <div className="textfield__input-container">
                <input
                    type="text"
                    className={getInputClass()}
                    placeholder={placeholder}
                    value={value}
                    disabled={disabled}
                    onChange={handleChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                />
                {showIcon && (
                    <div className="textfield__icon">
                        {/* Icon placeholder - can be replaced with actual icon component */}
                    </div>
                )}
            </div>
            {getErrorMessage() && (
                <div className="textfield__error">
                    {getErrorMessage()}
                </div>
            )}
        </div>
    );
};

export default Textfield;
