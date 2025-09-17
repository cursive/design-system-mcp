export interface PDPTemplateProps {
    variant?: 'default' | 'mcp';
    showCarousel?: boolean;
    showHero?: boolean;
    showMembership?: boolean;
    showSupporting?: boolean;
    showHowItWorks?: boolean;
    showFAQ?: boolean;
    showReviews?: boolean;
    showDividers?: boolean;
    className?: string;
}

export interface TemplateSectionProps {
    children: React.ReactNode;
    className?: string;
}
