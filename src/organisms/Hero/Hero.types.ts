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
