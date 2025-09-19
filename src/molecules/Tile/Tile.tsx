import '../../tokens/base.css';
import React from 'react';
import { RadioIcon } from '../../atoms/RadioIcon';
import './Tile.css';

export interface TileProps {
    /** Title text for the tile */
    title?: string;
    /** Description text for the tile */
    description?: string;
    /** Right side label text */
    rightLabel?: string;
    /** Whether to show the right label */
    showRightLabel?: boolean;
    /** Whether to show the description */
    showDescription?: boolean;
    /** Whether to show a pill/badge */
    showPill?: boolean;
    /** Whether to show the left icon */
    showIcon?: boolean;
    /** Custom left icon component */
    leftIcon?: React.ReactNode;
    /** Visual state of the tile */
    state?: 'default' | 'active';
    /** Whether the tile is disabled */
    disabled?: boolean;
    /** Additional CSS class name */
    className?: string;
    /** Click handler */
    onClick?: () => void;
}

export const Tile: React.FC<TileProps> = ({
    title = 'Title',
    description = 'Description',
    rightLabel = 'Label',
    showRightLabel = true,
    showDescription = true,
    showPill = false,
    showIcon = true,
    leftIcon,
    state = 'default',
    disabled = false,
    className = '',
    onClick,
}) => {
    const handleClick = () => {
        if (!disabled && onClick) {
            onClick();
        }
    };

    const getStateClass = () => {
        if (disabled) return 'tile--disabled';
        return `tile--${state}`;
    };

    const isActive = state === 'active';

    return (
        <div
            className={`tile ${getStateClass()} ${className}`}
            onClick={handleClick}
            role={onClick ? 'button' : undefined}
            tabIndex={onClick && !disabled ? 0 : undefined}
            aria-pressed={isActive}
            aria-disabled={disabled}
        >
            <div className="tile__content">
                <div className="tile__top">
                    <div className="tile__left">
                        {showIcon && (
                            <div className="tile__left-icon">
                                {leftIcon || (
                                    <svg width="24" height="24" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M18 12C19.49 10.54 21 8.79 21 6.5C21 5.04131 20.4205 3.64236 19.3891 2.61091C18.3576 1.57946 16.9587 1 15.5 1C13.74 1 12.5 1.5 11 3C9.5 1.5 8.26 1 6.5 1C5.04131 1 3.64236 1.57946 2.61091 2.61091C1.57946 3.64236 1 5.04131 1 6.5C1 8.8 2.5 10.55 4 12L11 19L18 12Z"
                                            stroke="var(--color-foreground-primary)"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                )}
                            </div>
                        )}
                        <div className="tile__title">
                            {title}
                        </div>
                    </div>
                    <div className="tile__right">
                        {showRightLabel && (
                            <div className="tile__right-label">
                                {rightLabel}
                            </div>
                        )}
                        <div className="tile__right-icon">
                            <RadioIcon
                                size="regular"
                                state={isActive ? 'checked' : 'unchecked'}
                                color="var(--color-foreground-primary)"
                            />
                        </div>
                    </div>
                </div>
                {showDescription && (
                    <div className="tile__description">
                        {description}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Tile;
