import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { FooterPDP } from './FooterPDP';

describe('FooterPDP', () => {
    it('renders with default props', () => {
        render(<FooterPDP />);
        expect(screen.getByText('Become a member')).toBeInTheDocument();
        expect(screen.getByText('$123 / month')).toBeInTheDocument();
    });

    it('renders with custom content', () => {
        render(
            <FooterPDP
                buttonText="Subscribe now"
                priceText="$99 / year"
            />
        );
        expect(screen.getByText('Subscribe now')).toBeInTheDocument();
        expect(screen.getByText('$99 / year')).toBeInTheDocument();
    });

    it('applies mobile device class', () => {
        render(<FooterPDP device="mobile" />);
        expect(screen.getByText('Become a member').closest('.footer-pdp')).toHaveClass('footer-pdp--mobile');
    });

    it('applies desktop device class', () => {
        render(<FooterPDP device="desktop" />);
        expect(screen.getByText('Become a member').closest('.footer-pdp')).toHaveClass('footer-pdp--desktop');
    });

    it('calls onButtonClick when button is clicked', () => {
        const handleButtonClick = jest.fn();
        render(<FooterPDP onButtonClick={handleButtonClick} />);

        const button = screen.getByText('Become a member');
        fireEvent.click(button);

        expect(handleButtonClick).toHaveBeenCalled();
    });

    it('applies custom className', () => {
        render(<FooterPDP className="custom-class" />);
        expect(screen.getByText('Become a member').closest('.footer-pdp')).toHaveClass('custom-class');
    });

    it('renders button with correct type', () => {
        render(<FooterPDP />);
        const button = screen.getByText('Become a member');
        expect(button).toHaveAttribute('type', 'button');
    });

    it('renders with different device layouts', () => {
        const { rerender } = render(<FooterPDP device="mobile" />);
        expect(screen.getByText('Become a member').closest('.footer-pdp')).toHaveClass('footer-pdp--mobile');

        rerender(<FooterPDP device="desktop" />);
        expect(screen.getByText('Become a member').closest('.footer-pdp')).toHaveClass('footer-pdp--desktop');
    });

    it('handles long text content', () => {
        const longButtonText = 'Join our premium membership program with exclusive benefits';
        const longPriceText = '$299.99 / month with annual discount';

        render(
            <FooterPDP
                buttonText={longButtonText}
                priceText={longPriceText}
            />
        );

        expect(screen.getByText(longButtonText)).toBeInTheDocument();
        expect(screen.getByText(longPriceText)).toBeInTheDocument();
    });
});
