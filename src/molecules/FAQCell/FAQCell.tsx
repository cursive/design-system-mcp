import '../../tokens/base.css';
import React from 'react';
import './FAQCell.css';

export interface FAQCellProps {
    /** FAQ question */
    question?: string;
    /** FAQ answer */
    answer?: string;
    /** Additional CSS class name */
    className?: string;
}

export const FAQCell: React.FC<FAQCellProps> = ({
    question = 'How',
    answer = 'Because',
    className = '',
}) => {
    return (
        <div className={`faq-cell ${className}`}>
            <h3 className="faq-cell__question">
                {question}
            </h3>
            <p className="faq-cell__answer">
                {answer}
            </p>
        </div>
    );
};

export default FAQCell;
