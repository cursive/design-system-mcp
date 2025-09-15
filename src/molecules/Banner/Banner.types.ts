export type BannerType = 'default' | 'success' | 'warning' | 'alert';

export interface BannerProps {
    /** Banner content text */
    children?: string;
    /** Banner type/color scheme */
    type?: BannerType;
    /** Whether to show the left icon */
    showLeftIcon?: boolean;
    /** Whether to show the right close icon */
    showRightIcon?: boolean;
    /** Whether the banner is dismissible */
    dismissible?: boolean;
    /** Additional CSS class name */
    className?: string;
    /** Close handler for dismissible banners */
    onClose?: () => void;
}
