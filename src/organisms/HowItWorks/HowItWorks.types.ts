export interface HowItWorksStep {
    /** Unique identifier for the step */
    id: string;
    /** Step description text */
    description: string;
    /** Icon name for the step */
    iconName: string;
}

export interface HowItWorksProps {
    /** Whether to show the image */
    showImage?: boolean;
    /** Variant for responsive design */
    variant?: 'desktop' | 'default';
    /** Additional CSS class name */
    className?: string;
}
