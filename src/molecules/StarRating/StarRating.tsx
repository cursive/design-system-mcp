import '../../tokens/base.css';
import React from 'react';
import './StarRating.css';

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

export const StarRating: React.FC<StarRatingProps> = ({
    rating = 5,
    maxRating = 5,
    interactive = false,
    size = 20,
    className = '',
    onRatingChange,
}) => {
    const handleStarClick = (starRating: number) => {
        if (interactive && onRatingChange) {
            onRatingChange(starRating);
        }
    };

    const renderStar = (index: number) => {
        const starRating = index + 1;
        const isFilled = starRating <= rating;

        return (
            <button
                key={index}
                className={`star-rating__star ${isFilled ? 'star-rating__star--filled' : 'star-rating__star--empty'} ${interactive ? 'star-rating__star--interactive' : ''}`}
                onClick={() => handleStarClick(starRating)}
                disabled={!interactive}
                aria-label={`Rate ${starRating} out of ${maxRating} stars`}
                type="button"
                style={{ width: size, height: size }}
            >
                <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9.04894 3.92705C9.3483 3.00574 10.6517 3.00574 10.9511 3.92705L12.0206 7.21885C12.1545 7.63087 12.5385 7.90983 12.9717 7.90983H16.4329C17.4016 7.90983 17.8044 9.14945 17.0207 9.71885L14.2205 11.7533C13.87 12.0079 13.7234 12.4593 13.8572 12.8713L14.9268 16.1631C15.2261 17.0844 14.1717 17.8506 13.388 17.2812L10.5878 15.2467C10.2373 14.9921 9.7627 14.9921 9.41221 15.2467L6.61204 17.2812C5.82833 17.8506 4.77385 17.0844 5.0732 16.1631L6.14277 12.8713C6.27665 12.4593 6.12999 12.0079 5.7795 11.7533L2.97933 9.71885C2.19562 9.14945 2.59839 7.90983 3.56712 7.90983H7.02832C7.46154 7.90983 7.8455 7.63087 7.97937 7.21885L9.04894 3.92705Z"
                        fill={isFilled ? 'var(--color-star-filled)' : 'var(--color-star-empty)'}
                    />
                </svg>
            </button>
        );
    };

    return (
        <div className={`star-rating ${className}`} role="img" aria-label={`${rating} out of ${maxRating} stars`}>
            {Array.from({ length: maxRating }, (_, index) => renderStar(index))}
        </div>
    );
};

export default StarRating;
