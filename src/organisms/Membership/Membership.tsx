import React from 'react';
import { RadioIcon } from '../../atoms/RadioIcon';
import { CheckIcon } from '../../atoms/CheckIcon';
import { TileMultiItem } from '../../molecules/TileMultiItem';
import { PanelHeader } from '../../molecules/PanelHeader';
import { MembershipProps, MembershipTileProps, WaitlistBannerProps, PillProps, GiftOptionProps, InfoSectionProps, AddOnSectionProps } from './Membership.types';
import './Membership.css';

export const Membership: React.FC<MembershipProps> = ({
    showAddOn = true,
    showWaitlist = true,
    showPlanSelection = true,
    showGifting = true,
    showHowItWorks = true,
    showMemberPerks = true,
    waitlistMessage = 'Due to high demand this program now has a waitlist',
    nextOrderDate = 'June 2025',
    className = '',
    onMealSizeChange,
    onPlanChange,
    onWineOptionChange,
    onGiftToggle,
}) => {
    // Internal state
    const [selectedMealSize, setSelectedMealSize] = React.useState<'one' | 'two'>('one');
    const [selectedPlan, setSelectedPlan] = React.useState<'monthly' | 'annual'>('monthly');
    const [selectedWineOption, setSelectedWineOption] = React.useState<string>('3');
    const [isGifted, setIsGifted] = React.useState<boolean>(false);

    // Internal sub-components
    const MembershipTile: React.FC<MembershipTileProps> = ({
        title,
        price,
        selected,
        description,
        showPill = false,
        pillText,
        onClick,
    }) => {
        const tileClass = selected ? 'membership-tile--selected' : 'membership-tile--unselected';

        return (
            <div className={`membership-tile ${tileClass}`} onClick={onClick}>
                <div className="membership-tile__content">
                    <div className="membership-tile__header">
                        <div className="membership-tile__left">
                            <div className="membership-tile__title">
                                <p>{title}</p>
                            </div>
                        </div>
                        <div className="membership-tile__right">
                            {price && (
                                <div className="membership-tile__price">
                                    <p>{price}</p>
                                </div>
                            )}
                            {showPill && pillText && (
                                <div className="membership-tile__pill">
                                    <div className="membership-tile__pill-text">
                                        <p>{pillText}</p>
                                    </div>
                                </div>
                            )}
                            <div className="membership-tile__radio">
                                <RadioIcon
                                    size="regular"
                                    state={selected ? 'checked' : 'unchecked'}
                                />
                            </div>
                        </div>
                    </div>
                    {description && (
                        <div className="membership-tile__description">
                            <p>{description}</p>
                        </div>
                    )}
                </div>
            </div>
        );
    };

    const WaitlistBanner: React.FC<WaitlistBannerProps> = ({
        message,
        showLink = true,
        linkText = 'Tell me more',
        onLinkClick,
    }) => {
        return (
            <div className="membership__waitlist-banner">
                <div className="membership__waitlist-content">
                    <div className="membership__waitlist-text">
                        <div className="membership__waitlist-message">
                            <p>{message}</p>
                        </div>
                        {showLink && (
                            <div className="membership__waitlist-link" onClick={onLinkClick}>
                                <div className="membership__waitlist-link-text">
                                    <p>{linkText}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    };

    const Pill: React.FC<PillProps> = ({ text }) => {
        return (
            <div className="pill">
                <div className="pill__text">
                    <p>{text}</p>
                </div>
            </div>
        );
    };

    const GiftOption: React.FC<GiftOptionProps> = ({ checked, onChange }) => {
        return (
            <div className="membership__gifting" onClick={() => onChange?.(!checked)}>
                <div className="membership__gifting-icon">
                    <CheckIcon size={20} />
                </div>
                <div className="membership__gifting-text">
                    <p>Gift this membership</p>
                </div>
            </div>
        );
    };

    const InfoSection: React.FC<InfoSectionProps> = ({ title, items }) => {
        return (
            <div className="membership__info-section">
                <div className="membership__info-title">
                    <p>{title}</p>
                </div>
                {items.map((item) => (
                    <div key={item.id} className="membership__info-item">
                        {item.showIcon && (
                            <div className="membership__info-item-icon">
                                <CheckIcon size={20} />
                            </div>
                        )}
                        <div className="membership__info-item-content">
                            <div className="membership__info-item-text">
                                <p>{item.text}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    const AddOnSection: React.FC<AddOnSectionProps> = ({ onWineOptionChange }) => {
        const wineOptions = [
            { id: '1', label: '2 bottles', price: '+ $45' },
            { id: '2', label: '4 bottles', price: '+ $90' },
            { id: '3', label: 'No, thank you', price: '', selected: true },
        ];

        return (
            <div className="membership__addon-group">
                <div className="membership__addon-title">
                    <div className="membership__addon-title-text">
                        <p>Sake pairing add-on</p>
                    </div>
                </div>
                <div style={{ width: '353px' }}>
                    <TileMultiItem
                        options={wineOptions}
                        selectedId={selectedWineOption}
                        onOptionSelect={(id) => {
                            setSelectedWineOption(id);
                            onWineOptionChange?.(id);
                        }}
                    />
                </div>
            </div>
        );
    };

    // Event handlers
    const handleMealSizeChange = (size: 'one' | 'two') => {
        setSelectedMealSize(size);
        onMealSizeChange?.(size);
    };

    const handlePlanChange = (plan: 'monthly' | 'annual') => {
        setSelectedPlan(plan);
        onPlanChange?.(plan);
    };

    const handleGiftToggle = (gifted: boolean) => {
        setIsGifted(gifted);
        onGiftToggle?.(gifted);
    };

    // Data for info sections
    const howItWorksItems = [
        { id: '1', text: 'Pick-up or delivery', showIcon: true },
        { id: '2', text: `Next order ${nextOrderDate}`, showIcon: true },
        { id: '3', text: 'Pause or cancel any time', showIcon: true },
    ];

    const memberPerksItems = [
        { id: '1', text: 'Priority reservations', showIcon: true },
        { id: '2', text: 'Wine selection', showIcon: true },
        { id: '3', text: 'In-store discounts', showIcon: true },
    ];

    return (
        <div className={`membership ${className}`} data-name="Membership" data-node-id="6105:55910">
            <PanelHeader
                title="Your monthly membership"
                className="membership__header"
                showEyebrow={false}
                showIcon={false}
                showSub={false}
            />

            <div className="membership__content" data-name="content" data-node-id="6105:55912">
                <div className="membership__main-group" data-name="Main group" data-node-id="6105:55915">
                    <MembershipTile
                        title="Meal for one"
                        price="$110"
                        selected={selectedMealSize === 'one'}
                        onClick={() => handleMealSizeChange('one')}
                    />
                    <MembershipTile
                        title="Meal for two"
                        price="$190"
                        selected={selectedMealSize === 'two'}
                        onClick={() => handleMealSizeChange('two')}
                    />
                </div>

                {showAddOn && <AddOnSection onWineOptionChange={onWineOptionChange} />}

                {showWaitlist && (
                    <WaitlistBanner
                        message={waitlistMessage}
                        onLinkClick={() => console.log('Tell me more clicked')}
                    />
                )}

                {showPlanSelection && (
                    <div className="membership__plan-group" data-name="Plan group" data-node-id="6105:55928">
                        <div className="membership__plan-title" data-name="title" data-node-id="6105:55929">
                            <div className="membership__plan-title-text" data-node-id="6105:55930">
                                <p>Choose a plan</p>
                            </div>
                        </div>
                        <MembershipTile
                            title="Monthly membership"
                            selected={selectedPlan === 'monthly'}
                            description="Description"
                            onClick={() => handlePlanChange('monthly')}
                        />
                        <MembershipTile
                            title="Annual membership"
                            selected={selectedPlan === 'annual'}
                            description="12 orders for $112/month"
                            showPill={true}
                            pillText="Save 10%"
                            onClick={() => handlePlanChange('annual')}
                        />
                    </div>
                )}

                {showGifting && (
                    <GiftOption
                        checked={isGifted}
                        onChange={handleGiftToggle}
                    />
                )}

                {showHowItWorks && (
                    <InfoSection
                        title="How it works"
                        items={howItWorksItems}
                    />
                )}

                {showMemberPerks && (
                    <InfoSection
                        title="Member perks"
                        items={memberPerksItems}
                    />
                )}
            </div>
        </div>
    );
};

export default Membership;
