export type CheckboxLineState = 'default' | 'active';

export interface CheckboxLineProps {
    /** Label text for the checkbox */
    label?: string;
    /** Whether the checkbox is checked */
    checked?: boolean;
    /** Whether the checkbox is disabled */
    disabled?: boolean;
    /** Visual state of the checkbox */
    state?: CheckboxLineState;
    /** Additional CSS class name */
    className?: string;
    /** Checkbox change handler */
    onChange?: (checked: boolean) => void;
    /** Checkbox click handler */
    onClick?: () => void;
}
