export type TextAreaState =
    | 'default'
    | 'hover'
    | 'active'
    | 'filled'
    | 'error'
    | 'error-filled';

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
    state?: TextAreaState;
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
