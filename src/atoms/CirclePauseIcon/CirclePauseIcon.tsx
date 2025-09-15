import React from 'react';
import { CirclePauseIconProps } from './CirclePauseIcon.types';
import './CirclePauseIcon.css';

export const CirclePauseIcon: React.FC<CirclePauseIconProps> = ({
    size = 24,
    className = '',
    color = 'currentColor',
}) => {
    return (
        <svg
            className={`circle-pause-icon ${className}`}
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
        >
            <circle
                cx="12"
                cy="12"
                r="10"
                stroke={color}
                strokeWidth="2"
                fill="none"
            />
            <rect
                x="8"
                y="6"
                width="2"
                height="12"
                fill={color}
            />
            <rect
                x="14"
                y="6"
                width="2"
                height="12"
                fill={color}
            />
        </svg>
    );
};
