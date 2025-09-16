export interface CarouselPipsProps {
    /** Total number of items */
    totalItems?: number;
    /** Currently active item index (0-based) */
    activeIndex?: number;
    /** Additional CSS class name */
    className?: string;
    /** Pip click handler */
    onPipClick?: (index: number) => void;
}
