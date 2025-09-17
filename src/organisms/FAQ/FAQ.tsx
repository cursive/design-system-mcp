import React from 'react';
import { FAQProps } from './FAQ.types';
import './FAQ.css';

export const FAQ: React.FC<FAQProps> = ({
    showIcon = true,
    className = '',
}) => {
    return (
        <div className={`faq ${className}`} data-name="FAQ" data-node-id="5824:38713">
            <div className="faq__panel" data-name="Panel" data-node-id="5832:65439">
                <div className="faq__panel-header" data-name="Panel header" data-node-id="5832:65440">
                    <div className="faq__title" data-name="Title" data-node-id="I5832:65440;828:15113">
                        <div className="faq__title-text" data-node-id="I5832:65440;828:13676">
                            <p>FAQ</p>
                        </div>
                        {showIcon && (
                            <div className="faq__icon" data-name="Icon/Outline/plus" data-node-id="I5832:65440;828:15140">
                                <div className="faq__icon-svg" data-name="Icon" data-node-id="I5832:65440;828:15140;0:224">
                                    <div className="faq__icon-path" style={{ "--stroke-0": "rgba(20, 20, 20, 1)" } as React.CSSProperties}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
