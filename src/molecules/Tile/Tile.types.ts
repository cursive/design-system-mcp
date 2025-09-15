export type TileState = 'default' | 'active';

export interface TileProps {
    /** Title text for the tile */
    title?: string;
    /** Description text for the tile */
    description?: string;
    /** Right side label text */
    rightLabel?: string;
    /** Whether to show the right label */
    showRightLabel?: boolean;
    /** Whether to show the description */
    showDescription?: boolean;
    /** Whether to show a pill/badge */
    showPill?: boolean;
    /** Whether to show the left icon */
    showIcon?: boolean;
    /** Custom left icon component */
    leftIcon?: React.ReactNode;
    /** Visual state of the tile */
    state?: TileState;
    /** Whether the tile is disabled */
    disabled?: boolean;
    /** Additional CSS class name */
    className?: string;
    /** Click handler */
    onClick?: () => void;
}
