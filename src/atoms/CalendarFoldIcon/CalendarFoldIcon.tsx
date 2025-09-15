import React from 'react';
import { CalendarFoldIconProps } from './CalendarFoldIcon.types';
import './CalendarFoldIcon.css';

export const CalendarFoldIcon: React.FC<CalendarFoldIconProps> = ({
    size = 24,
    className = '',
    color = 'currentColor',
}) => {
    return (
        <svg
            className={`calendar-fold-icon ${className}`}
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
        >
            <rect
                x="3"
                y="4"
                width="18"
                height="18"
                rx="2"
                ry="2"
                stroke={color}
                strokeWidth="2"
                fill="none"
            />
            <line
                x1="16"
                y1="2"
                x2="16"
                y2="6"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
            />
            <line
                x1="8"
                y1="2"
                x2="8"
                y2="6"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
            />
            <line
                x1="3"
                y1="10"
                x2="21"
                y2="10"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
            />
            <path
                d="M8 14H8.01"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12 14H12.01"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M16 14H16.01"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M8 18H8.01"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12 18H12.01"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M16 18H16.01"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};
