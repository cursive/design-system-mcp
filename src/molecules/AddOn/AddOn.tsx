import '../../tokens/base.css';
import React from 'react';
import { RadioInline } from '../RadioInline';
import './AddOn.css';

export interface AddOnOption {
    /** Option ID */
    id: string;
    /** Option label */
    label: string;
    /** Option price */
    price?: string;
    /** Whether this option is selected */
    selected?: boolean;
}

export interface AddOnProps {
    /** Add-on title */
    title?: string;
    /** Add-on description */
    description?: string;
    /** Add-on image URL */
    imageUrl?: string;
    /** Available options */
    options?: AddOnOption[];
    /** Currently selected option ID */
    selectedOptionId?: string;
    /** Additional CSS class name */
    className?: string;
    /** Option selection handler */
    onOptionSelect?: (optionId: string, option: AddOnOption) => void;
}

export const AddOn: React.FC<AddOnProps> = ({
    title = 'Optional wine pairing',
    description = 'Tailored to each month\'s menu.',
    imageUrl,
    options = [
        { id: 'none', label: 'No, thank you', price: '', selected: true },
        { id: 'red', label: '1 bottle of red', price: '+ $35' },
        { id: 'white', label: '1 bottle of white', price: '+ $35' },
    ],
    selectedOptionId,
    className = '',
    onOptionSelect,
}) => {
    const handleOptionSelect = (option: AddOnOption) => {
        if (onOptionSelect) {
            onOptionSelect(option.id, option);
        }
    };

    const isOptionSelected = (option: AddOnOption) => {
        return selectedOptionId ? option.id === selectedOptionId : option.selected || false;
    };

    return (
        <div className={`add-on ${className}`}>
            <div className="add-on__content">
                <div className="add-on__header">
                    <div className="add-on__text">
                        <h3 className="add-on__title">
                            {title}
                        </h3>
                        <p className="add-on__description">
                            {description}
                        </p>
                    </div>
                    {imageUrl && (
                        <div className="add-on__image">
                            <img
                                src={imageUrl}
                                alt={title}
                                className="add-on__image-content"
                            />
                        </div>
                    )}
                </div>

                <div className="add-on__options">
                    {options.map((option, index) => (
                        <div key={option.id} className="add-on__option">
                            <RadioInline
                                label={option.label}
                                price={option.price}
                                selected={isOptionSelected(option)}
                                state={isOptionSelected(option) ? 'checked' : 'unchecked'}
                                showDivider={index < options.length - 1}
                                onClick={() => handleOptionSelect(option)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AddOn;
