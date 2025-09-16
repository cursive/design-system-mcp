export interface ListItem {
    /** Item ID */
    id: string;
    /** Item text */
    text: string;
    /** Item icon */
    icon?: React.ReactNode;
}

export interface ListsProps {
    /** List title */
    title?: string;
    /** List items */
    items?: ListItem[];
    /** Additional CSS class name */
    className?: string;
    /** Item click handler */
    onItemClick?: (item: ListItem) => void;
}
