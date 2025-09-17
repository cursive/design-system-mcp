export interface TabProps {
    /** Tab label */
    label: string;
    /** Whether the tab is active */
    active?: boolean;
    /** Click handler */
    onClick?: () => void;
    /** Additional CSS class name */
    className?: string;
}
