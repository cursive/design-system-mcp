import React from 'react';
import { render, screen } from '@testing-library/react';
import { FAQCell } from './FAQCell';

describe('FAQCell', () => {
    it('renders with default props', () => {
        render(<FAQCell />);
        expect(screen.getByText('How')).toBeInTheDocument();
        expect(screen.getByText('Because')).toBeInTheDocument();
    });

    it('renders with custom content', () => {
        render(
            <FAQCell
                question="What is this?"
                answer="This is a test answer."
            />
        );
        expect(screen.getByText('What is this?')).toBeInTheDocument();
        expect(screen.getByText('This is a test answer.')).toBeInTheDocument();
    });

    it('renders question as h3 element', () => {
        render(<FAQCell question="Test question" />);
        const question = screen.getByRole('heading', { level: 3 });
        expect(question).toBeInTheDocument();
        expect(question).toHaveTextContent('Test question');
    });

    it('renders answer as p element', () => {
        render(<FAQCell answer="Test answer" />);
        const answer = screen.getByText('Test answer');
        expect(answer.tagName).toBe('P');
    });

    it('applies custom className', () => {
        render(<FAQCell className="custom-class" />);
        expect(screen.getByText('How').closest('.faq-cell')).toHaveClass('custom-class');
    });

    it('has correct styling classes', () => {
        render(<FAQCell />);
        const faqCell = screen.getByText('How').closest('.faq-cell');
        expect(faqCell?.querySelector('.faq-cell__question')).toHaveClass('faq-cell__question');
        expect(faqCell?.querySelector('.faq-cell__answer')).toHaveClass('faq-cell__answer');
    });

    it('handles long content', () => {
        const longQuestion = 'This is a very long question that should wrap properly and not overflow the container';
        const longAnswer = 'This is a very long answer that should also wrap properly and maintain good readability';

        render(
            <FAQCell
                question={longQuestion}
                answer={longAnswer}
            />
        );

        expect(screen.getByText(longQuestion)).toBeInTheDocument();
        expect(screen.getByText(longAnswer)).toBeInTheDocument();
    });

    it('renders with empty strings', () => {
        render(<FAQCell question="" answer="" />);
        expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('');
        expect(screen.getByText('')).toBeInTheDocument();
    });
});
