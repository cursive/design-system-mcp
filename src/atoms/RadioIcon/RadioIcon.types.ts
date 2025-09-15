export interface RadioIconProps {
    /**
     * Size variant of the radio icon
     */
    size?: 'small' | 'regular';

    /**
     * State of the radio icon
     */
    state?: 'checked' | 'unchecked';

    /**
     * Additional CSS class name
     */
    className?: string;

    /**
     * Size override (overrides size variant)
     */
    sizeOverride?: number | string;

    /**
     * Color override
     */
    color?: string;
}

