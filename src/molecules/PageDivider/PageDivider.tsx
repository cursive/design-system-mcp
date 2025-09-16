import React from 'react';
import './PageDivider.css';

export interface PageDividerProps {
    /** Divider variant */
    variant?: 'default' | 'labelled' | 'blank' | 'desktop';
    /** Label text for labelled variant */
    label?: string;
    /** Additional CSS class name */
    className?: string;
}

export const PageDivider: React.FC<PageDividerProps> = ({
    variant = 'default',
    label = 'Or pay by card',
    className = '',
}) => {
    if (variant === 'blank') {
        return <div className={`page-divider page-divider--blank ${className}`} />;
    }

    return (
        <div className={`page-divider page-divider--${variant} ${className}`}>
            {variant === 'labelled' ? (
                <>
                    <div className="page-divider__line" />
                    <div className="page-divider__label">
                        {label}
                    </div>
                    <div className="page-divider__line" />
                </>
            ) : (
                <div className="page-divider__line" />
            )}
        </div>
    );
};

export default PageDivider;
