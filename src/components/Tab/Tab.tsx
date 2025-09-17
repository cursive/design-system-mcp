import React from 'react';
import './Tab.css';

export interface TabProps {
    /** Tab label */
    label: string;
    /** Whether the tab is active */
    active?: boolean;
    /** Click handler */
    onClick?: () => void;
    /** Additional CSS class name */
    className?: string;
}

export const Tab: React.FC<TabProps> = ({
    label,
    active = false,
    onClick,
    className = '',
}) => {
    return (
        <button
            className={`tab ${active ? 'tab--active' : ''} ${className}`}
            onClick={onClick}
            type="button"
        >
            {label}
        </button>
    );
};

export default Tab;
