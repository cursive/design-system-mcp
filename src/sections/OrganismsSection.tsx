import React from 'react';
import { ComponentSection } from '../components';
import { Hero, FAQ, Reviews, Supporting, Carousel, HowItWorks, Membership } from '../organisms';

export const OrganismsSection: React.FC = () => {
    return (
        <section>
            <h2 className="section-title">Organisms</h2>

            <ComponentSection
                title="Hero"
                component={
                    (() => {
                        const [variant, setVariant] = React.useState<'desktop' | 'default'>('desktop');
                        const [subtitle, setSubtitle] = React.useState<string>('THE SUPPER CLUB');
                        const [description, setDescription] = React.useState<string>('Each month we bring you a tasting menu featuring signature dishes to prepare at home, and some members-only surprises');
                        const [rating, setRating] = React.useState<number>(5);
                        const [reviewCount, setReviewCount] = React.useState<string>('Based on 83 reviews');

                        (window as any).__CATALOG_HERO__ = {
                            variant, setVariant,
                            subtitle, setSubtitle,
                            description, setDescription,
                            rating, setRating,
                            reviewCount, setReviewCount,
                        };

                        return (
                            <div style={{ width: '100%', maxWidth: '1200px' }}>
                                <Hero
                                    variant={variant}
                                    subtitle={subtitle}
                                    description={description}
                                    rating={rating}
                                    reviewCount={reviewCount}
                                />
                            </div>
                        );
                    })()
                }
                controls={
                    <div>
                        <div className="control-group">
                            <label>Variant</label>
                            <select
                                defaultValue="desktop"
                                onChange={(e) => (window as any).__CATALOG_HERO__?.setVariant?.(e.target.value as any)}
                            >
                                <option value="desktop">Desktop</option>
                                <option value="default">Default</option>
                            </select>
                        </div>

                        <div className="control-group">
                            <label>Subtitle</label>
                            <input
                                type="text"
                                defaultValue="THE SUPPER CLUB"
                                onInput={(e) => (window as any).__CATALOG_HERO__?.setSubtitle?.((e.target as HTMLInputElement).value)}
                            />
                        </div>

                        <div className="control-group">
                            <label>Description</label>
                            <textarea
                                defaultValue="Each month we bring you a tasting menu featuring signature dishes to prepare at home, and some members-only surprises"
                                onInput={(e) => (window as any).__CATALOG_HERO__?.setDescription?.((e.target as HTMLTextAreaElement).value)}
                            />
                        </div>

                        <div className="control-group">
                            <label>Rating</label>
                            <input
                                type="number"
                                min="0"
                                max="5"
                                step="0.1"
                                defaultValue="5"
                                onInput={(e) => (window as any).__CATALOG_HERO__?.setRating?.(parseFloat((e.target as HTMLInputElement).value) || 0)}
                            />
                        </div>

                        <div className="control-group">
                            <label>Review Count</label>
                            <input
                                type="text"
                                defaultValue="Based on 83 reviews"
                                onInput={(e) => (window as any).__CATALOG_HERO__?.setReviewCount?.((e.target as HTMLInputElement).value)}
                            />
                        </div>
                    </div>
                }
            />

            <ComponentSection
                title="FAQ"
                component={
                    (() => {
                        const [showIcon, setShowIcon] = React.useState<boolean>(true);

                        (window as any).__CATALOG_FAQ__ = {
                            showIcon, setShowIcon,
                        };

                        return (
                            <div style={{ width: '100%', maxWidth: '640px' }}>
                                <FAQ
                                    showIcon={showIcon}
                                />
                            </div>
                        );
                    })()
                }
                controls={
                    <div>
                        <div className="control-group">
                            <label>
                                <input
                                    type="checkbox"
                                    defaultChecked
                                    onChange={(e) => (window as any).__CATALOG_FAQ__?.setShowIcon?.(e.currentTarget.checked)}
                                />
                                Show Icon
                            </label>
                        </div>
                    </div>
                }
            />

            <ComponentSection
                title="Reviews"
                component={
                    (() => {
                        const [reviews, setReviews] = React.useState([
                            {
                                id: '1',
                                date: 'Feb 25',
                                text: 'Loved everything about this box—each dish was rich, comforting, and clearly made with care. The pork was especially tender, and the sauces added great depth.',
                                rating: 5
                            },
                            {
                                id: '2',
                                date: 'Feb 25',
                                text: 'Loved everything about this box—each dish was rich, comforting, and clearly made with care. The pork was especially tender, and the sauces added great depth.',
                                rating: 5
                            },
                            {
                                id: '3',
                                date: 'Feb 25',
                                text: 'Loved everything about this box—each dish was rich, comforting, and clearly made with care. The pork was especially tender, and the sauces added great depth.',
                                rating: 5
                            }
                        ]);

                        (window as any).__CATALOG_REVIEWS__ = {
                            reviews, setReviews,
                        };

                        return (
                            <div style={{ width: '100%', maxWidth: '600px' }}>
                                <Reviews
                                    reviews={reviews}
                                />
                            </div>
                        );
                    })()
                }
                controls={
                    <div>
                        <div className="control-group">
                            <label>Reviews</label>
                            <p>Interactive review cards with star ratings</p>
                        </div>
                    </div>
                }
            />

            <ComponentSection
                title="Supporting"
                component={
                    (() => {
                        const [variant, setVariant] = React.useState<'desktop' | 'default'>('desktop');
                        const [showImage, setShowImage] = React.useState<boolean>(true);

                        (window as any).__CATALOG_SUPPORTING__ = {
                            variant, setVariant,
                            showImage, setShowImage,
                        };

                        return (
                            <div style={{ width: '100%', maxWidth: '800px' }}>
                                <Supporting
                                    variant={variant}
                                    showImage={showImage}
                                />
                            </div>
                        );
                    })()
                }
                controls={
                    <div>
                        <div className="control-group">
                            <label>Variant</label>
                            <select
                                defaultValue="desktop"
                                onChange={(e) => (window as any).__CATALOG_SUPPORTING__?.setVariant?.(e.target.value as any)}
                            >
                                <option value="desktop">Desktop</option>
                                <option value="default">Default</option>
                            </select>
                        </div>
                        <div className="control-group">
                            <label>
                                <input
                                    type="checkbox"
                                    defaultChecked
                                    onChange={(e) => (window as any).__CATALOG_SUPPORTING__?.setShowImage?.(e.currentTarget.checked)}
                                />
                                Show Image
                            </label>
                        </div>
                    </div>
                }
            />

            <ComponentSection
                title="Carousel"
                component={
                    (() => {
                        const [variant, setVariant] = React.useState<'desktop' | 'default' | 'mobile-desktop'>('desktop');

                        (window as any).__CATALOG_CAROUSEL__ = {
                            variant, setVariant,
                        };

                        return (
                            <div style={{ width: '100%', maxWidth: '1200px' }}>
                                <Carousel
                                    variant={variant}
                                />
                            </div>
                        );
                    })()
                }
                controls={
                    <div>
                        <div className="control-group">
                            <label>Variant</label>
                            <select
                                defaultValue="desktop"
                                onChange={(e) => (window as any).__CATALOG_CAROUSEL__?.setVariant?.(e.target.value as any)}
                            >
                                <option value="desktop">Desktop</option>
                                <option value="default">Default</option>
                                <option value="mobile-desktop">Mobile Desktop</option>
                            </select>
                        </div>
                    </div>
                }
            />

            <ComponentSection
                title="How It Works"
                component={
                    (() => {
                        const [variant, setVariant] = React.useState<'desktop' | 'default'>('desktop');
                        const [showImage, setShowImage] = React.useState<boolean>(true);

                        (window as any).__CATALOG_HOWITWORKS__ = {
                            variant, setVariant,
                            showImage, setShowImage,
                        };

                        return (
                            <div style={{ width: '100%', maxWidth: '600px' }}>
                                <HowItWorks
                                    variant={variant}
                                    showImage={showImage}
                                />
                            </div>
                        );
                    })()
                }
                controls={
                    <div>
                        <div className="control-group">
                            <label>Variant</label>
                            <select
                                defaultValue="desktop"
                                onChange={(e) => (window as any).__CATALOG_HOWITWORKS__?.setVariant?.(e.target.value as any)}
                            >
                                <option value="desktop">Desktop</option>
                                <option value="default">Default</option>
                            </select>
                        </div>
                        <div className="control-group">
                            <label>
                                <input
                                    type="checkbox"
                                    defaultChecked
                                    onChange={(e) => (window as any).__CATALOG_HOWITWORKS__?.setShowImage?.(e.currentTarget.checked)}
                                />
                                Show Image
                            </label>
                        </div>
                    </div>
                }
            />

            <ComponentSection
                title="Membership"
                component={
                    (() => {
                        const [showAddOn, setShowAddOn] = React.useState<boolean>(true);
                        const [showWaitlist, setShowWaitlist] = React.useState<boolean>(true);
                        const [showPlanSelection, setShowPlanSelection] = React.useState<boolean>(true);
                        const [showGifting, setShowGifting] = React.useState<boolean>(true);
                        const [showHowItWorks, setShowHowItWorks] = React.useState<boolean>(true);
                        const [showMemberPerks, setShowMemberPerks] = React.useState<boolean>(true);

                        (window as any).__CATALOG_MEMBERSHIP__ = {
                            showAddOn, setShowAddOn,
                            showWaitlist, setShowWaitlist,
                            showPlanSelection, setShowPlanSelection,
                            showGifting, setShowGifting,
                            showHowItWorks, setShowHowItWorks,
                            showMemberPerks, setShowMemberPerks,
                        };

                        return (
                            <div style={{ width: '100%', maxWidth: '400px' }}>
                                <Membership
                                    showAddOn={showAddOn}
                                    showWaitlist={showWaitlist}
                                    showPlanSelection={showPlanSelection}
                                    showGifting={showGifting}
                                    showHowItWorks={showHowItWorks}
                                    showMemberPerks={showMemberPerks}
                                />
                            </div>
                        );
                    })()
                }
                controls={
                    <div>
                        <div className="control-group">
                            <label>
                                <input
                                    type="checkbox"
                                    defaultChecked
                                    onChange={(e) => (window as any).__CATALOG_MEMBERSHIP__?.setShowAddOn?.(e.currentTarget.checked)}
                                />
                                Show Add-on
                            </label>
                        </div>
                        <div className="control-group">
                            <label>
                                <input
                                    type="checkbox"
                                    defaultChecked
                                    onChange={(e) => (window as any).__CATALOG_MEMBERSHIP__?.setShowWaitlist?.(e.currentTarget.checked)}
                                />
                                Show Waitlist
                            </label>
                        </div>
                        <div className="control-group">
                            <label>
                                <input
                                    type="checkbox"
                                    defaultChecked
                                    onChange={(e) => (window as any).__CATALOG_MEMBERSHIP__?.setShowPlanSelection?.(e.currentTarget.checked)}
                                />
                                Show Plan Selection
                            </label>
                        </div>
                        <div className="control-group">
                            <label>
                                <input
                                    type="checkbox"
                                    defaultChecked
                                    onChange={(e) => (window as any).__CATALOG_MEMBERSHIP__?.setShowGifting?.(e.currentTarget.checked)}
                                />
                                Show Gifting
                            </label>
                        </div>
                        <div className="control-group">
                            <label>
                                <input
                                    type="checkbox"
                                    defaultChecked
                                    onChange={(e) => (window as any).__CATALOG_MEMBERSHIP__?.setShowHowItWorks?.(e.currentTarget.checked)}
                                />
                                Show How It Works
                            </label>
                        </div>
                        <div className="control-group">
                            <label>
                                <input
                                    type="checkbox"
                                    defaultChecked
                                    onChange={(e) => (window as any).__CATALOG_MEMBERSHIP__?.setShowMemberPerks?.(e.currentTarget.checked)}
                                />
                                Show Member Perks
                            </label>
                        </div>
                    </div>
                }
            />
        </section>
    );
};
