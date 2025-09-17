export interface ReviewItem {
    /** Unique identifier for the review */
    id: string;
    /** Review date */
    date: string;
    /** Review text content */
    text: string;
    /** Star rating (0-5) */
    rating: number;
}

export interface ReviewsProps {
    /** Array of review items */
    reviews?: ReviewItem[];
    /** Whether to show the image */
    showImage?: boolean;
    /** Additional CSS class name */
    className?: string;
}
