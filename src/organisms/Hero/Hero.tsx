import '../../tokens/base.css';
import React from 'react';
import { StarRating } from '../../molecules/StarRating';
import './Hero.css';

export interface HeroProps {
    /** Hero variant */
    variant?: 'desktop' | 'default';
    /** Logo image source */
    logoSrc?: string;
    /** Logo alt text */
    logoAlt?: string;
    /** Subtitle text */
    subtitle?: string;
    /** Description text */
    description?: string;
    /** Star rating (0-5) */
    rating?: number;
    /** Review count text */
    reviewCount?: string;
    /** Additional CSS class name */
    className?: string;
}

export const Hero: React.FC<HeroProps> = ({
    variant = 'desktop',
    logoSrc,
    logoAlt = 'Logo',
    subtitle = 'THE SUPPER CLUB',
    description = 'Each month we bring you a tasting menu featuring signature dishes to prepare at home, and some members-only surprises',
    rating = 5,
    reviewCount = 'Based on 83 reviews',
    className = '',
}) => {
    return (
        <div className={`hero hero--${variant} ${className}`}>
            <div className="hero__content">
                {logoSrc && (
                    <div className="hero__logo">
                        <img src={logoSrc} alt={logoAlt} />
                    </div>
                )}

                <div className="hero__subtitle">
                    {subtitle}
                </div>

                {variant === 'default' && (
                    <div className="hero__description">
                        {description}
                    </div>
                )}

                <div className="hero__rating">
                    <StarRating
                        rating={rating}
                        interactive={false}
                        size={variant === 'desktop' ? 16 : 20}
                    />
                    <div className="hero__review-count">
                        {reviewCount}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
