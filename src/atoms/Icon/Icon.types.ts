export interface IconProps {
    /**
     * Name of the icon
     */
    name: string;

    /**
     * Size of the icon
     */
    size?: number | string;

    /**
     * Color of the icon
     */
    color?: string;

    /**
     * Additional CSS class name
     */
    className?: string;

    /**
     * Whether the icon is decorative (default: true)
     */
    decorative?: boolean;

    /**
     * Accessibility label (required if not decorative)
     */
    'aria-label'?: string;
}


