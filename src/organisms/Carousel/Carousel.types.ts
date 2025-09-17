export interface CarouselImage {
    /** Unique identifier for the image */
    id: string;
    /** Image source URL */
    src: string;
    /** Image alt text */
    alt: string;
    /** Image aspect ratio */
    aspectRatio?: string;
}

export interface CarouselProps {
    /** Variant for responsive design */
    variant?: 'desktop' | 'default' | 'mobile-desktop';
    /** Array of images to display */
    images?: CarouselImage[];
    /** Additional CSS class name */
    className?: string;
}
