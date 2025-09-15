export type SelectState = 'default' | 'hover' | 'active';

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
    state?: SelectState;
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
