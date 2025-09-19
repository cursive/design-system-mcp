import '../../tokens/base.css';
import React from 'react';
import { CheckIconProps } from './CheckIcon.types';
import './CheckIcon.css';

export const CheckIcon: React.FC<CheckIconProps> = ({
    size = 24,
    className = '',
    color = 'currentColor',
}) => {
    return (
        <svg
            className={`check-icon ${className}`}
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            data-testid="check-icon"
        >
            <path
                d="M20 6L9 17L4 12"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

