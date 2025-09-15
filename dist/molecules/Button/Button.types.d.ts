export interface ButtonProps {
    children?: React.ReactNode;
    style?: 'accent' | 'primary' | 'secondary';
    state?: 'default' | 'disabled' | 'hover';
    showIcon?: boolean;
    icon?: React.ReactNode;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
}
