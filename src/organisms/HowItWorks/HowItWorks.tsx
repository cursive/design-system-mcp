import React from 'react';
import { CirclePauseIcon } from '../../atoms/CirclePauseIcon';
import { HowItWorksProps, HowItWorksStep } from './HowItWorks.types';
import './HowItWorks.css';

export const HowItWorks: React.FC<HowItWorksProps> = ({
    showImage = true,
    variant = 'desktop',
    className = '',
}) => {
    const steps: HowItWorksStep[] = [
        {
            id: '1',
            description: 'Each month we prepare a multi-course meal that reflects what we\'re excited to share',
            iconName: 'preparation'
        },
        {
            id: '2',
            description: 'Make any adjustments you need a few days before your pick-up or delivery',
            iconName: 'adjustments'
        },
        {
            id: '3',
            description: 'Unpack your feast and enjoy the luxury of a chef-made meal in the comfort of your home',
            iconName: 'enjoy'
        }
    ];

    const title = (
        <div className="how-it-works__title-content" data-name="Title">
            <div className="how-it-works__title-text">
                <p>How it works</p>
            </div>
        </div>
    );

    const renderStep = (step: HowItWorksStep, index: number) => (
        <div key={step.id} className="how-it-works__step" data-name="step">
            <div className="how-it-works__step-icon" data-name="how it works icons">
                <CirclePauseIcon size={40} />
            </div>
            <div className="how-it-works__step-content">
                <div className="how-it-works__step-text">
                    <p>{step.description}</p>
                </div>
            </div>
        </div>
    );

    const renderDivider = (key: string) => (
        <div key={key} className="how-it-works__divider">
            <div className="how-it-works__divider-line" style={{ "--stroke-0": "rgba(245, 245, 245, 1)" } as React.CSSProperties}>
                <svg width="100%" height="1" viewBox="0 0 100 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0" y1="0.5" x2="100" y2="0.5" stroke="currentColor" />
                </svg>
            </div>
        </div>
    );

    if (variant === 'default') {
        return (
            <div className={`how-it-works how-it-works--default ${className}`} data-name="Property 1=Default" data-node-id="6118:34773">
                {title}
                <div className="how-it-works__content" data-name="Content" data-node-id="6118:34775">
                    {renderStep(steps[0], 0)}
                    {renderDivider('divider-1')}
                    {renderStep(steps[1], 1)}
                    {renderDivider('divider-2')}
                    {renderStep(steps[2], 2)}
                </div>
            </div>
        );
    }

    return (
        <div className={`how-it-works how-it-works--desktop ${className}`} data-name="Property 1=_Desktop" data-node-id="5512:24693">
            {title}
            <div className="how-it-works__content" data-name="Content" data-node-id="5503:24590">
                {renderStep(steps[0], 0)}
                {renderDivider('divider-1')}
                {renderStep(steps[1], 1)}
                {renderDivider('divider-2')}
                {renderStep(steps[2], 2)}
            </div>
        </div>
    );
};

export default HowItWorks;
