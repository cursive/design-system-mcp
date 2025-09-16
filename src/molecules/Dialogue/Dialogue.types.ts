export type DialogueVariant = 'default' | 'desktop';

export interface DialogueProps {
    /** Dialogue title */
    title?: string;
    /** Dialogue description */
    description?: string;
    /** Primary button text */
    primaryButtonText?: string;
    /** Secondary button text */
    secondaryButtonText?: string;
    /** Whether to show the text area */
    showTextArea?: boolean;
    /** Text area placeholder */
    textAreaPlaceholder?: string;
    /** Dialogue variant */
    variant?: DialogueVariant;
    /** Whether the dialogue is open */
    isOpen?: boolean;
    /** Additional CSS class name */
    className?: string;
    /** Primary button click handler */
    onPrimaryClick?: () => void;
    /** Secondary button click handler */
    onSecondaryClick?: () => void;
    /** Close handler */
    onClose?: () => void;
}
