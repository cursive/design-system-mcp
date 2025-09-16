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
