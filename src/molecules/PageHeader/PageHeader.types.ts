export interface PageHeaderProps {
    /** Back button text */
    backText?: string;
    /** Main title */
    title?: string;
    /** Subtitle */
    subtitle?: string;
    /** Whether to show the back button */
    showBackButton?: boolean;
    /** Additional CSS class name */
    className?: string;
    /** Back button click handler */
    onBack?: () => void;
}
