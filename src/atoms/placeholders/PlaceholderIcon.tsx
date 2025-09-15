import React from 'react';

export interface PlaceholderIconProps {
    size?: number | string;
    color?: string;
    className?: string;
}

export const PlaceholderIcon: React.FC<PlaceholderIconProps> = ({
    size = '1em',
    color = 'currentColor',
    className,
}) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            className={className}
            style={{ color }}
            aria-hidden="true"
            focusable="false"
        >
            <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="2"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
            />
            <path
                d="M9 9h6v6H9z"
                fill="currentColor"
                fillOpacity="0.3"
            />
        </svg>
    );
};


