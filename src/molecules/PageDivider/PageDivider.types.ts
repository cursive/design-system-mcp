export type PageDividerVariant = 'default' | 'labelled' | 'blank' | 'desktop';

export interface PageDividerProps {
    /** Divider variant */
    variant?: PageDividerVariant;
    /** Label text for labelled variant */
    label?: string;
    /** Additional CSS class name */
    className?: string;
}
