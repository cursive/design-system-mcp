import '../../tokens/base.css';
import React from 'react';
import './FooterPDP.css';

export interface FooterPDPProps {
    /** Device type for responsive layout */
    device?: 'mobile' | 'desktop';
    /** Button text */
    buttonText?: string;
    /** Price text */
    priceText?: string;
    /** Additional CSS class name */
    className?: string;
    /** Button click handler */
    onButtonClick?: () => void;
}

export const FooterPDP: React.FC<FooterPDPProps> = ({
    device = 'desktop',
    buttonText = 'Become a member',
    priceText = '$123 / month',
    className = '',
    onButtonClick,
}) => {
    const handleButtonClick = () => {
        if (onButtonClick) {
            onButtonClick();
        }
    };

    return (
        <div className={`footer-pdp footer-pdp--${device} ${className}`}>
            <div className="footer-pdp__content">
                <button
                    className="footer-pdp__button"
                    onClick={handleButtonClick}
                    type="button"
                >
                    {buttonText}
                </button>
                <div className="footer-pdp__price">
                    {priceText}
                </div>
            </div>
        </div>
    );
};

export default FooterPDP;
