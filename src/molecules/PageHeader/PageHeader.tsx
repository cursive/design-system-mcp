import '../../tokens/base.css';
import React from 'react';
import './PageHeader.css';

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

export const PageHeader: React.FC<PageHeaderProps> = ({
    backText = 'Edit order',
    title = 'Checkout',
    subtitle = 'Slanted Door Supper Club',
    showBackButton = true,
    className = '',
    onBack,
}) => {
    const handleBack = () => {
        if (onBack) {
            onBack();
        }
    };

    return (
        <div className={`page-header ${className}`}>
            <div className="page-header__content">
                {showBackButton && (
                    <div className="page-header__back">
                        <button
                            className="page-header__back-button"
                            onClick={handleBack}
                            aria-label="Go back"
                            type="button"
                        >
                            <svg width="11" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5 9L1 5L5 1"
                                    stroke="var(--color-foreground-primary)"
                                    strokeWidth="1.33333"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                        <span className="page-header__back-text">{backText}</span>
                    </div>
                )}

                <div className="page-header__title-section">
                    {subtitle && (
                        <div className="page-header__subtitle">
                            {subtitle}
                        </div>
                    )}
                    <h1 className="page-header__title">
                        {title}
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default PageHeader;
