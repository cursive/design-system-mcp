export interface StarRatingProps {
    /** Current rating (0-5) */
    rating?: number;
    /** Maximum rating (default 5) */
    maxRating?: number;
    /** Whether the rating is interactive */
    interactive?: boolean;
    /** Star size in pixels */
    size?: number;
    /** Additional CSS class name */
    className?: string;
    /** Rating change handler for interactive mode */
    onRatingChange?: (rating: number) => void;
}
