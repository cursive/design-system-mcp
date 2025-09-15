export interface TileMultiItemOption {
    /** Unique identifier for the option */
    id: string;
    /** Label text for the option */
    label: string;
    /** Price or value text */
    price?: string;
    /** Whether this option is selected */
    selected?: boolean;
}

export interface TileMultiItemProps {
    /** Array of options to display */
    options?: TileMultiItemOption[];
    /** Currently selected option ID */
    selectedId?: string;
    /** Whether the tile is disabled */
    disabled?: boolean;
    /** Additional CSS class name */
    className?: string;
    /** Option selection handler */
    onOptionSelect?: (optionId: string, option: TileMultiItemOption) => void;
}
