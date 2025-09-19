import React from 'react';
import '../../tokens/base.css';
import './Banner.css';

export interface BannerProps {
    /** Banner content text */
    children?: string;
    /** Banner type/color scheme */
    type?: 'default' | 'success' | 'warning' | 'alert';
    /** Whether to show the left icon */
    showLeftIcon?: boolean;
    /** Whether to show the right close icon */
    showRightIcon?: boolean;
    /** Whether the banner is dismissible */
    dismissible?: boolean;
    /** Additional CSS class name */
    className?: string;
    /** Close handler for dismissible banners */
    onClose?: () => void;
}

export const Banner: React.FC<BannerProps> = ({
    children = 'These can go on as many lines as needed, and can include a header too',
    type = 'default',
    showLeftIcon = true,
    showRightIcon = true,
    dismissible = true,
    className = '',
    onClose,
}) => {
    const handleClose = () => {
        if (onClose) {
            onClose();
        }
    };

    const getLeftIcon = () => {
        switch (type) {
            case 'success':
                return (
                    <svg width="11" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11.6667 1L4.33333 8.33333L1 5"
                            stroke="var(--color-foreground-invert-primary)"
                            strokeWidth="1.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                );
            case 'warning':
                return (
                    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.67863 5.00928V7.67594M7.67863 10.3426H7.6853M14.1653 11.0093L8.832 1.67593C8.71571 1.47073 8.54707 1.30006 8.34328 1.18131C8.13949 1.06256 7.90786 1 7.672 1C7.43614 1 7.2045 1.06256 7.00071 1.18131C6.79693 1.30006 6.62829 1.47073 6.512 1.67593L1.17866 11.0093C1.06112 11.2128 0.999483 11.4439 1 11.6789C1.00052 11.914 1.06318 12.1448 1.18163 12.3478C1.30007 12.5509 1.4701 12.719 1.67446 12.8352C1.87883 12.9513 2.11027 13.0114 2.34533 13.0093H13.012C13.2459 13.009 13.4757 12.9472 13.6782 12.8301C13.8807 12.713 14.0488 12.5447 14.1657 12.342C14.2825 12.1394 14.344 11.9095 14.344 11.6756C14.3439 11.4417 14.2823 11.2119 14.1653 11.0093Z"
                            stroke="var(--color-foreground-invert-primary)"
                            strokeWidth="1.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                );
            case 'alert':
                return (
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9 1L1 9M1 1L9 9"
                            stroke="var(--color-foreground-invert-primary)"
                            strokeWidth="1.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                );
            default:
                return (
                    <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M1.66667 14.3333H7M1 6.33333H7.66667M1 6.33333C1 5 1.33333 3.66667 2.33333 1H6.33333C7.33333 3.66667 7.66667 5 7.66667 6.33333M1 6.33333C1 7.21739 1.35119 8.06523 1.97631 8.69036C2.60143 9.31548 3.44928 9.66667 4.33333 9.66667M7.66667 6.33333C7.66667 7.21739 7.31548 8.06523 6.69036 8.69036C6.06523 9.31548 5.21739 9.66667 4.33333 9.66667M4.33333 9.66667V14.3333"
                            stroke="var(--color-foreground-invert-primary)"
                            strokeWidth="1.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                );
        }
    };

    const getRightIcon = () => (
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M9 1L1 9M1 1L9 9"
                stroke="var(--color-foreground-invert-primary)"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );

    return (
        <div className={`banner banner--${type} ${className}`}>
            {showLeftIcon && (
                <div className="banner__left-icon">
                    {getLeftIcon()}
                </div>
            )}
            <div className="banner__content">
                <div className="banner__text">
                    {children}
                </div>
            </div>
            {showRightIcon && dismissible && (
                <button
                    className="banner__close-button"
                    onClick={handleClose}
                    aria-label="Close banner"
                    type="button"
                >
                    {getRightIcon()}
                </button>
            )}
        </div>
    );
};

export default Banner;
