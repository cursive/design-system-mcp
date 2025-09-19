import '../../tokens/base.css';
import React from 'react';
import { PanelHeader } from '../../molecules/PanelHeader';
import { FAQProps } from './FAQ.types';
import './FAQ.css';

export const FAQ: React.FC<FAQProps> = ({
    showIcon = true,
    className = '',
}) => {
    return (
        <div className={`faq ${className}`} data-name="FAQ" data-node-id="5824:38713">
            <div className="faq__panel" data-name="Panel" data-node-id="5832:65439">
                <PanelHeader
                    title="FAQ"
                    className="faq__header"
                    showEyebrow={false}
                    showIcon={showIcon}
                    showSub={false}
                />
            </div>
        </div>
    );
};

export default FAQ;
