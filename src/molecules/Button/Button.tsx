import React from 'react';
import { ButtonProps } from './Button.types';
import { PlaceholderIcon } from '../../atoms/placeholders';
import { ChevronDownIcon } from '../../atoms/ChevronDownIcon';
import './Button.css';

export const Button: React.FC<ButtonProps> = ({
    children = 'Label',
    style = 'accent',
    state = 'default',
    showIcon = true,
    icon,
    onClick,
    className = '',
    disabled = false,
}) => {
    const isDisabled = disabled || state === 'disabled';

    const buttonClassName = [
        'button',
        `button--${style}`,
        className
    ].filter(Boolean).join(' ');

    const handleClick = () => {
        if (!isDisabled && onClick) {
            onClick();
        }
    };

    const iconElement = showIcon && (
        <div className="button__icon" data-node-id="786:20089">
            {icon || <ChevronDownIcon size={24} color="currentColor" />}
        </div>
    );

    return (
        <button
            className={buttonClassName}
            onClick={handleClick}
            disabled={isDisabled}
            data-name={`Style=${style}, State=${state}`}
            data-node-id="786:20093"
        >
            <div className="button__content" data-node-id="786:20083">
                <p>{children}</p>
            </div>
            {iconElement}
        </button>
    );
};
