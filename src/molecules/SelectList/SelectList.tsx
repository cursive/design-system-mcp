import '../../tokens/base.css';
import React from 'react';
import { SelectItem } from '../SelectItem';
import './SelectList.css';

export interface SelectListProps {
    /** Array of items to display */
    items?: string[];
    /** Currently selected item index */
    selectedIndex?: number;
    /** Whether the list is disabled */
    disabled?: boolean;
    /** Additional CSS class name */
    className?: string;
    /** Item selection handler */
    onItemSelect?: (index: number, item: string) => void;
    /** Item hover handler */
    onItemHover?: (index: number, item: string) => void;
}

export const SelectList: React.FC<SelectListProps> = ({
    items = ['Item', 'Item', 'Item', 'Litem', 'Item'],
    selectedIndex = -1,
    disabled = false,
    className = '',
    onItemSelect,
    onItemHover,
}) => {
    const handleItemClick = (index: number, item: string) => {
        if (!disabled && onItemSelect) {
            onItemSelect(index, item);
        }
    };

    const handleItemHover = (index: number, item: string) => {
        if (!disabled && onItemHover) {
            onItemHover(index, item);
        }
    };

    return (
        <div className={`select-list ${className}`}>
            <div className="select-list__container">
                {items.map((item, index) => (
                    <SelectItem
                        key={index}
                        selected={index === selectedIndex}
                        disabled={disabled}
                        state={index === selectedIndex ? 'hover' : 'default'}
                        onClick={() => handleItemClick(index, item)}
                        onMouseEnter={() => handleItemHover(index, item)}
                    >
                        {item}
                    </SelectItem>
                ))}
            </div>
        </div>
    );
};

export default SelectList;
