export interface IconLineProps {
    /** Text content for the icon line */
    children?: string;
    /** Custom icon component */
    icon?: React.ReactNode;
    /** Whether the icon line is disabled */
    disabled?: boolean;
    /** Additional CSS class name */
    className?: string;
    /** Click handler */
    onClick?: () => void;
}
