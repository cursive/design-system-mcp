export type RadioInlineState = 'unchecked' | 'hover' | 'checked';

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
    state?: RadioInlineState;
    /** Whether to show the divider */
    showDivider?: boolean;
    /** Additional CSS class name */
    className?: string;
    /** Radio change handler */
    onChange?: (selected: boolean) => void;
    /** Radio click handler */
    onClick?: () => void;
}
