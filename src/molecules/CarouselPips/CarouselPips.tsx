import React from 'react';
import './CarouselPips.css';

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

export const CarouselPips: React.FC<CarouselPipsProps> = ({
    totalItems = 3,
    activeIndex = 0,
    className = '',
    onPipClick,
}) => {
    const handlePipClick = (index: number) => {
        if (onPipClick) {
            onPipClick(index);
        }
    };

    return (
        <div className={`carousel-pips ${className}`}>
            {Array.from({ length: totalItems }, (_, index) => (
                <button
                    key={index}
                    className={`carousel-pips__pip ${index === activeIndex ? 'carousel-pips__pip--active' : ''}`}
                    onClick={() => handlePipClick(index)}
                    aria-label={`Go to item ${index + 1}`}
                    type="button"
                >
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle
                            cx="4"
                            cy="4"
                            r="4"
                            fill="var(--color-foreground-secondary)"
                            opacity={index === activeIndex ? 1 : 0.3}
                        />
                    </svg>
                </button>
            ))}
        </div>
    );
};

export default CarouselPips;
