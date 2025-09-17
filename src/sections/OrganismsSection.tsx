import React from 'react';
import { ComponentSection } from '../components';
import { Hero } from '../organisms';

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
        </section>
    );
};
