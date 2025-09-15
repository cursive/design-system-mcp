export interface PanelHeaderProps {
    /**
     * Hierarchy variant of the panel header
     */
    hierarchy?: 'Default' | 'Secondary';

    /**
     * Whether to show the eyebrow text
     */
    showEyebrow?: boolean;

    /**
     * Whether to show the icon
     */
    showIcon?: boolean;

    /**
     * Whether to show the subtitle
     */
    showSub?: boolean;

    /**
     * Custom icon override
     */
    icon?: React.ReactNode;

    /**
     * Main title text
     */
    title?: string;

    /**
     * Eyebrow text (appears above title)
     */
    eyebrow?: string;

    /**
     * Subtitle text (appears below title)
     */
    subtitle?: string;

    /**
     * Additional CSS class name
     */
    className?: string;
}


