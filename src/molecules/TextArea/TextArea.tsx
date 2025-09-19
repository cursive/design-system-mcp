import '../../tokens/base.css';
import React from 'react';
import './TextArea.css';

export interface TextAreaProps {
    /** Label text for the textarea field */
    label?: string;
    /** Placeholder text */
    placeholder?: string;
    /** Current value of the textarea */
    value?: string;
    /** Error message to display */
    errorMessage?: string;
    /** Whether to show the label */
    showLabel?: boolean;
    /** Whether to show an error message */
    showError?: boolean;
    /** Visual state of the textarea */
    state?: 'default' | 'hover' | 'active' | 'filled' | 'error' | 'error-filled';
    /** Additional CSS class name */
    className?: string;
    /** Textarea change handler */
    onChange?: (value: string) => void;
    /** Textarea focus handler */
    onFocus?: () => void;
    /** Textarea blur handler */
    onBlur?: () => void;
    /** Whether the textarea is disabled */
    disabled?: boolean;
    /** Number of rows for the textarea */
    rows?: number;
}

export const TextArea: React.FC<TextAreaProps> = ({
    label = 'Label',
    placeholder = 'Value',
    value = '',
    errorMessage = 'Required',
    showLabel = true,
    showError = false,
    state = 'default',
    className = '',
    onChange,
    onFocus,
    onBlur,
    disabled = false,
    rows = 4,
}) => {
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (onChange) {
            onChange(e.target.value);
        }
    };

    const getStateClass = () => {
        if (disabled) return 'textarea--disabled';
        return `textarea--${state}`;
    };

    const getTextAreaClass = () => {
        const baseClass = 'textarea__field';
        if (disabled) return `${baseClass} textarea__field--disabled`;
        return `${baseClass} textarea__field--${state}`;
    };

    const getErrorMessage = () => {
        if (state === 'error' || state === 'error-filled') {
            return state === 'error-filled' ? 'Explainer' : errorMessage;
        }
        return null;
    };

    return (
        <div className={`textarea ${getStateClass()} ${className}`}>
            {showLabel && (
                <label className="textarea__label">
                    {label}
                </label>
            )}
            <div className="textarea__field-container">
                <textarea
                    className={getTextAreaClass()}
                    placeholder={placeholder}
                    value={value}
                    disabled={disabled}
                    rows={rows}
                    onChange={handleChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                />
            </div>
            {getErrorMessage() && (
                <div className="textarea__error">
                    {getErrorMessage()}
                </div>
            )}
        </div>
    );
};

export default TextArea;
