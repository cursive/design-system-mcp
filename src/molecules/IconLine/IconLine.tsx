import React from 'react';
import './IconLine.css';

export interface IconLineProps {
    /** Text content for the icon line */
    children?: string;
    /** Custom icon component */
    icon?: React.ReactNode;
    /** Whether the icon line is disabled */
    disabled?: boolean;
    /** Additional CSS class name */
    className?: string;
    /** Click handler */
    onClick?: () => void;
}

export const IconLine: React.FC<IconLineProps> = ({
    children = 'Text',
    icon,
    disabled = false,
    className = '',
    onClick,
}) => {
    const handleClick = () => {
        if (!disabled && onClick) {
            onClick();
        }
    };

    const getDefaultIcon = () => (
        <svg width="20" height="20" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M14.3333 1L5.16667 10.1667L1 6"
                stroke="var(--color-foreground-primary)"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );

    return (
        <div
            className={`icon-line ${disabled ? 'icon-line--disabled' : ''} ${className}`}
            onClick={handleClick}
            role={onClick ? 'button' : undefined}
            tabIndex={onClick && !disabled ? 0 : undefined}
            aria-disabled={disabled}
        >
            <div className="icon-line__icon">
                {icon || getDefaultIcon()}
            </div>
            <div className="icon-line__content">
                <span className="icon-line__text">{children}</span>
            </div>
        </div>
    );
};

export default IconLine;
