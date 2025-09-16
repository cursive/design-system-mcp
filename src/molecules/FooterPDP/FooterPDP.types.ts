export type FooterPDPDevice = 'mobile' | 'desktop';

export interface FooterPDPProps {
    /** Device type for responsive layout */
    device?: FooterPDPDevice;
    /** Button text */
    buttonText?: string;
    /** Price text */
    priceText?: string;
    /** Additional CSS class name */
    className?: string;
    /** Button click handler */
    onButtonClick?: () => void;
}
