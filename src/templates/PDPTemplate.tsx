import React from 'react';
import { Carousel } from '../organisms/Carousel';
import { Hero } from '../organisms/Hero';
import { Membership } from '../organisms/Membership';
import { Supporting } from '../organisms/Supporting';
import { HowItWorks } from '../organisms/HowItWorks';
import { FAQ } from '../organisms/FAQ';
import { Reviews } from '../organisms/Reviews';
import { PageDivider } from '../molecules/PageDivider';
import { PDPTemplateProps, TemplateSectionProps } from './PDPTemplate.types';
import './PDPTemplate.css';

const TemplateSection: React.FC<TemplateSectionProps> = ({ children, className = '' }) => (
    <div className={`pdp-template__section ${className}`}>
        {children}
    </div>
);

export const PDPTemplate: React.FC<PDPTemplateProps> = ({
    variant = 'default',
    showCarousel = true,
    showHero = true,
    showMembership = true,
    showSupporting = true,
    showHowItWorks = true,
    showFAQ = true,
    showReviews = true,
    showDividers = true,
    className = '',
}) => {
    const isMcpVariant = variant === 'mcp';

    return (
        <div
            className={`pdp-template ${isMcpVariant ? 'pdp-template--mcp' : ''} ${className}`}
            data-name="PDP Mobile Template"
        >
            {/* Carousel Section */}
            {showCarousel && (
                <TemplateSection>
                    <div className="pdp-template__container pdp-template__container--full">
                        <Carousel />
                    </div>
                </TemplateSection>
            )}

            {/* Hero Section */}
            {showHero && (
                <TemplateSection>
                    <div className="pdp-template__container">
                        <Hero />
                    </div>
                </TemplateSection>
            )}

            {/* First Divider */}
            {showDividers && (
                <TemplateSection>
                    <div className="pdp-template__divider">
                        <PageDivider />
                    </div>
                </TemplateSection>
            )}

            {/* Membership Section */}
            {showMembership && (
                <TemplateSection>
                    <div className={`pdp-template__container ${isMcpVariant ? 'pdp-template__container--full' : ''}`}>
                        <div className={`pdp-template__membership ${isMcpVariant ? 'pdp-template__membership--mcp' : ''}`}>
                            <Membership />
                        </div>
                    </div>
                </TemplateSection>
            )}

            {/* Second Divider */}
            {showDividers && (
                <TemplateSection>
                    <div className="pdp-template__divider">
                        <PageDivider />
                    </div>
                </TemplateSection>
            )}

            {/* Supporting Section */}
            {showSupporting && (
                <TemplateSection>
                    <div className="pdp-template__container">
                        <Supporting />
                    </div>
                </TemplateSection>
            )}

            {/* Third Divider */}
            {showDividers && (
                <TemplateSection>
                    <div className="pdp-template__divider">
                        <PageDivider />
                    </div>
                </TemplateSection>
            )}

            {/* How It Works Section */}
            {showHowItWorks && (
                <TemplateSection>
                    <div className="pdp-template__container">
                        <HowItWorks />
                    </div>
                </TemplateSection>
            )}

            {/* Fourth Divider */}
            {showDividers && (
                <TemplateSection>
                    <div className="pdp-template__divider">
                        <PageDivider />
                    </div>
                </TemplateSection>
            )}

            {/* FAQ Section */}
            {showFAQ && (
                <TemplateSection>
                    <div className="pdp-template__container">
                        <FAQ />
                    </div>
                </TemplateSection>
            )}

            {/* Fifth Divider */}
            {showDividers && (
                <TemplateSection>
                    <div className="pdp-template__divider">
                        <PageDivider />
                    </div>
                </TemplateSection>
            )}

            {/* Reviews Section */}
            {showReviews && (
                <TemplateSection>
                    <div className="pdp-template__container">
                        <Reviews />
                    </div>
                </TemplateSection>
            )}
        </div>
    );
};
