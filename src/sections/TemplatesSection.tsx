import React from 'react';
import { ComponentSection } from '../components';
import { PDPTemplate } from '../templates';

export const TemplatesSection: React.FC = () => {
    return (
        <section>
            <h2 className="section-title">Templates</h2>

            <ComponentSection
                title="PDP Mobile Template"
                component={
                    (() => {
                        const [variant, setVariant] = React.useState<'default' | 'mcp'>('default');
                        const [showCarousel, setShowCarousel] = React.useState<boolean>(true);
                        const [showHero, setShowHero] = React.useState<boolean>(true);
                        const [showMembership, setShowMembership] = React.useState<boolean>(true);
                        const [showSupporting, setShowSupporting] = React.useState<boolean>(true);
                        const [showHowItWorks, setShowHowItWorks] = React.useState<boolean>(true);
                        const [showFAQ, setShowFAQ] = React.useState<boolean>(true);
                        const [showReviews, setShowReviews] = React.useState<boolean>(true);
                        const [showDividers, setShowDividers] = React.useState<boolean>(true);

                        (window as any).__CATALOG_PDP_TEMPLATE__ = {
                            variant, setVariant,
                            showCarousel, setShowCarousel,
                            showHero, setShowHero,
                            showMembership, setShowMembership,
                            showSupporting, setShowSupporting,
                            showHowItWorks, setShowHowItWorks,
                            showFAQ, setShowFAQ,
                            showReviews, setShowReviews,
                            showDividers, setShowDividers,
                        };

                        return (
                            <div style={{ width: '100%', maxWidth: '400px', margin: '0 auto' }}>
                                <PDPTemplate
                                    variant={variant}
                                    showCarousel={showCarousel}
                                    showHero={showHero}
                                    showMembership={showMembership}
                                    showSupporting={showSupporting}
                                    showHowItWorks={showHowItWorks}
                                    showFAQ={showFAQ}
                                    showReviews={showReviews}
                                    showDividers={showDividers}
                                />
                            </div>
                        );
                    })()
                }
                controls={
                    <div>
                        <div className="control-group">
                            <label>
                                <span>Variant:</span>
                                <select
                                    value={(window as any).__CATALOG_PDP_TEMPLATE__?.variant || 'default'}
                                    onChange={(e) => (window as any).__CATALOG_PDP_TEMPLATE__?.setVariant?.(e.target.value as 'default' | 'mcp')}
                                >
                                    <option value="default">Default</option>
                                    <option value="mcp">MCP</option>
                                </select>
                            </label>
                        </div>

                        <div className="control-group">
                            <label>
                                <input
                                    type="checkbox"
                                    defaultChecked
                                    onChange={(e) => (window as any).__CATALOG_PDP_TEMPLATE__?.setShowCarousel?.(e.currentTarget.checked)}
                                />
                                Show Carousel
                            </label>
                        </div>

                        <div className="control-group">
                            <label>
                                <input
                                    type="checkbox"
                                    defaultChecked
                                    onChange={(e) => (window as any).__CATALOG_PDP_TEMPLATE__?.setShowHero?.(e.currentTarget.checked)}
                                />
                                Show Hero
                            </label>
                        </div>

                        <div className="control-group">
                            <label>
                                <input
                                    type="checkbox"
                                    defaultChecked
                                    onChange={(e) => (window as any).__CATALOG_PDP_TEMPLATE__?.setShowMembership?.(e.currentTarget.checked)}
                                />
                                Show Membership
                            </label>
                        </div>

                        <div className="control-group">
                            <label>
                                <input
                                    type="checkbox"
                                    defaultChecked
                                    onChange={(e) => (window as any).__CATALOG_PDP_TEMPLATE__?.setShowSupporting?.(e.currentTarget.checked)}
                                />
                                Show Supporting
                            </label>
                        </div>

                        <div className="control-group">
                            <label>
                                <input
                                    type="checkbox"
                                    defaultChecked
                                    onChange={(e) => (window as any).__CATALOG_PDP_TEMPLATE__?.setShowHowItWorks?.(e.currentTarget.checked)}
                                />
                                Show How It Works
                            </label>
                        </div>

                        <div className="control-group">
                            <label>
                                <input
                                    type="checkbox"
                                    defaultChecked
                                    onChange={(e) => (window as any).__CATALOG_PDP_TEMPLATE__?.setShowFAQ?.(e.currentTarget.checked)}
                                />
                                Show FAQ
                            </label>
                        </div>

                        <div className="control-group">
                            <label>
                                <input
                                    type="checkbox"
                                    defaultChecked
                                    onChange={(e) => (window as any).__CATALOG_PDP_TEMPLATE__?.setShowReviews?.(e.currentTarget.checked)}
                                />
                                Show Reviews
                            </label>
                        </div>

                        <div className="control-group">
                            <label>
                                <input
                                    type="checkbox"
                                    defaultChecked
                                    onChange={(e) => (window as any).__CATALOG_PDP_TEMPLATE__?.setShowDividers?.(e.currentTarget.checked)}
                                />
                                Show Dividers
                            </label>
                        </div>
                    </div>
                }
            />
        </section>
    );
};
