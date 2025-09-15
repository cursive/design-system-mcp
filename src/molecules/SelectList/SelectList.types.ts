export interface SelectListProps {
    /** Array of items to display */
    items?: string[];
    /** Currently selected item index */
    selectedIndex?: number;
    /** Whether the list is disabled */
    disabled?: boolean;
    /** Additional CSS class name */
    className?: string;
    /** Item selection handler */
    onItemSelect?: (index: number, item: string) => void;
    /** Item hover handler */
    onItemHover?: (index: number, item: string) => void;
}
