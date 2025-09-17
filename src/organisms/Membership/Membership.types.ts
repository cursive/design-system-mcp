export interface MembershipProps {
    /** Whether to show the add-on section */
    showAddOn?: boolean;
    /** Whether to show the waitlist banner */
    showWaitlist?: boolean;
    /** Whether to show the plan selection */
    showPlanSelection?: boolean;
    /** Whether to show the gifting option */
    showGifting?: boolean;
    /** Whether to show the how it works section */
    showHowItWorks?: boolean;
    /** Whether to show the member perks section */
    showMemberPerks?: boolean;
    /** Waitlist message text */
    waitlistMessage?: string;
    /** Next order date */
    nextOrderDate?: string;
    /** Additional CSS class name */
    className?: string;
    /** Event handlers */
    onMealSizeChange?: (size: 'one' | 'two') => void;
    onPlanChange?: (plan: 'monthly' | 'annual') => void;
    onWineOptionChange?: (optionId: string) => void;
    onGiftToggle?: (gifted: boolean) => void;
}

export interface MembershipTileProps {
    title: string;
    price?: string;
    selected: boolean;
    description?: string;
    showPill?: boolean;
    pillText?: string;
    onClick?: () => void;
}

export interface WaitlistBannerProps {
    message: string;
    showLink?: boolean;
    linkText?: string;
    onLinkClick?: () => void;
}

export interface PillProps {
    text: string;
}

export interface GiftOptionProps {
    checked: boolean;
    onChange?: (checked: boolean) => void;
}

export interface InfoSectionProps {
    title: string;
    items: Array<{
        id: string;
        text: string;
        showIcon?: boolean;
    }>;
}

export interface AddOnSectionProps {
    onWineOptionChange?: (optionId: string) => void;
}
