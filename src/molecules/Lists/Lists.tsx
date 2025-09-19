import '../../tokens/base.css';
import React from 'react';
import { IconLine } from '../IconLine';
import './Lists.css';

export interface ListItem {
    /** Item ID */
    id: string;
    /** Item text */
    text: string;
    /** Item icon */
    icon?: React.ReactNode;
}

export interface ListsProps {
    /** List title */
    title?: string;
    /** List items */
    items?: ListItem[];
    /** Additional CSS class name */
    className?: string;
}

export const Lists: React.FC<ListsProps> = ({
    title = 'title',
    items = [
        { id: '1', text: 'Text' },
        { id: '2', text: 'Text' },
        { id: '3', text: 'Text' },
    ],
    className = '',
}) => {

    return (
        <div className={`lists ${className}`}>
            <h3 className="lists__title">
                {title}
            </h3>
            <div className="lists__items">
                {items.map((item) => (
                    <div key={item.id} className="lists__item">
                        <IconLine
                            icon={item.icon}
                        >
                            {item.text}
                        </IconLine>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Lists;
