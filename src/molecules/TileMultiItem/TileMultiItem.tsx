import React from 'react';
import { RadioInline } from '../RadioInline';
import './TileMultiItem.css';

export interface TileMultiItemOption {
    /** Unique identifier for the option */
    id: string;
    /** Label text for the option */
    label: string;
    /** Price or value text */
    price?: string;
    /** Whether this option is selected */
    selected?: boolean;
}

export interface TileMultiItemProps {
    /** Array of options to display */
    options?: TileMultiItemOption[];
    /** Currently selected option ID */
    selectedId?: string;
    /** Whether the tile is disabled */
    disabled?: boolean;
    /** Additional CSS class name */
    className?: string;
    /** Option selection handler */
    onOptionSelect?: (optionId: string, option: TileMultiItemOption) => void;
}

export const TileMultiItem: React.FC<TileMultiItemProps> = ({
    options = [
        { id: '1', label: '2 bottles', price: '+ $45' },
        { id: '2', label: '4 bottles', price: '+ $90' },
        { id: '3', label: 'No, thank you', price: '', selected: true },
    ],
    selectedId,
    disabled = false,
    className = '',
    onOptionSelect,
}) => {
    const handleOptionClick = (option: TileMultiItemOption) => {
        if (!disabled && onOptionSelect) {
            onOptionSelect(option.id, option);
        }
    };

    const isOptionSelected = (option: TileMultiItemOption) => {
        return selectedId ? option.id === selectedId : option.selected || false;
    };

    return (
        <div className={`tile-multi-item ${className}`}>
            <div className="tile-multi-item__container">
                {options.map((option, index) => (
                    <div key={option.id} className="tile-multi-item__option">
                        <RadioInline
                            label={option.label}
                            price={option.price}
                            selected={isOptionSelected(option)}
                            disabled={disabled}
                            state={isOptionSelected(option) ? 'checked' : 'unchecked'}
                            showDivider={index < options.length - 1}
                            onClick={() => handleOptionClick(option)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TileMultiItem;
