import '../../tokens/base.css';
import React from 'react';
import { ChevronDownIconProps } from './ChevronDownIcon.types';
import './ChevronDownIcon.css';

export const ChevronDownIcon: React.FC<ChevronDownIconProps> = ({
    size = 24,
    className = '',
    color = 'currentColor',
}) => {
    return (
        <svg
            className={`chevron-down-icon ${className}`}
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
        >
            <path
                d="M6 9L12 15L18 9"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

