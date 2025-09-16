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
