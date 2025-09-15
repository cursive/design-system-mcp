export type SelectItemState = 'default' | 'hover';

export interface SelectItemProps {
    /** Text content of the select item */
    children?: string;
    /** Whether the item is selected */
    selected?: boolean;
    /** Whether the item is disabled */
    disabled?: boolean;
    /** Visual state of the select item */
    state?: SelectItemState;
    /** Additional CSS class name */
    className?: string;
    /** Click handler */
    onClick?: () => void;
    /** Mouse enter handler */
    onMouseEnter?: () => void;
    /** Mouse leave handler */
    onMouseLeave?: () => void;
}
