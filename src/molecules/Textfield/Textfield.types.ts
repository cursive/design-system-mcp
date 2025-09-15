export type TextfieldState =
    | 'default'
    | 'hover'
    | 'active'
    | 'filled'
    | 'disabled'
    | 'error'
    | 'error-filled';

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
    state?: TextfieldState;
    /** Additional CSS class name */
    className?: string;
    /** Input change handler */
    onChange?: (value: string) => void;
    /** Input focus handler */
    onFocus?: () => void;
    /** Input blur handler */
    onBlur?: () => void;
}
