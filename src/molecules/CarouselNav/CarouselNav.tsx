import '../../tokens/base.css';
import React from 'react';
import './CarouselNav.css';

export interface CarouselNavProps {
    /** Whether the previous button is disabled */
    prevDisabled?: boolean;
    /** Whether the next button is disabled */
    nextDisabled?: boolean;
    /** Additional CSS class name */
    className?: string;
    /** Previous button click handler */
    onPrevious?: () => void;
    /** Next button click handler */
    onNext?: () => void;
}

export const CarouselNav: React.FC<CarouselNavProps> = ({
    prevDisabled = false,
    nextDisabled = false,
    className = '',
    onPrevious,
    onNext,
}) => {
    const handlePrevious = () => {
        if (!prevDisabled && onPrevious) {
            onPrevious();
        }
    };

    const handleNext = () => {
        if (!nextDisabled && onNext) {
            onNext();
        }
    };

    return (
        <div className={`carousel-nav ${className}`}>
            <button
                className={`carousel-nav__button carousel-nav__button--prev ${prevDisabled ? 'carousel-nav__button--disabled' : ''}`}
                onClick={handlePrevious}
                disabled={prevDisabled}
                aria-label="Previous item"
                type="button"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M15 18L9 12L15 6"
                        stroke="var(--color-foreground-primary)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>

            <div className="carousel-nav__divider" />

            <button
                className={`carousel-nav__button carousel-nav__button--next ${nextDisabled ? 'carousel-nav__button--disabled' : ''}`}
                onClick={handleNext}
                disabled={nextDisabled}
                aria-label="Next item"
                type="button"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9 18L15 12L9 6"
                        stroke="var(--color-foreground-primary)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
        </div>
    );
};

export default CarouselNav;
