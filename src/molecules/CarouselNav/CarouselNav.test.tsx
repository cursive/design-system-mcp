import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { CarouselNav } from './CarouselNav';

describe('CarouselNav', () => {
    it('renders both navigation buttons', () => {
        render(<CarouselNav />);
        expect(screen.getByRole('button', { name: 'Previous item' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Next item' })).toBeInTheDocument();
    });

    it('calls onPrevious when previous button is clicked', () => {
        const handlePrevious = jest.fn();
        render(<CarouselNav onPrevious={handlePrevious} />);

        const prevButton = screen.getByRole('button', { name: 'Previous item' });
        fireEvent.click(prevButton);

        expect(handlePrevious).toHaveBeenCalled();
    });

    it('calls onNext when next button is clicked', () => {
        const handleNext = jest.fn();
        render(<CarouselNav onNext={handleNext} />);

        const nextButton = screen.getByRole('button', { name: 'Next item' });
        fireEvent.click(nextButton);

        expect(handleNext).toHaveBeenCalled();
    });

    it('disables previous button when prevDisabled is true', () => {
        render(<CarouselNav prevDisabled={true} />);
        const prevButton = screen.getByRole('button', { name: 'Previous item' });
        expect(prevButton).toBeDisabled();
        expect(prevButton).toHaveClass('carousel-nav__button--disabled');
    });

    it('disables next button when nextDisabled is true', () => {
        render(<CarouselNav nextDisabled={true} />);
        const nextButton = screen.getByRole('button', { name: 'Next item' });
        expect(nextButton).toBeDisabled();
        expect(nextButton).toHaveClass('carousel-nav__button--disabled');
    });

    it('does not call handlers when buttons are disabled', () => {
        const handlePrevious = jest.fn();
        const handleNext = jest.fn();
        render(<CarouselNav prevDisabled={true} nextDisabled={true} onPrevious={handlePrevious} onNext={handleNext} />);

        const prevButton = screen.getByRole('button', { name: 'Previous item' });
        const nextButton = screen.getByRole('button', { name: 'Next item' });

        fireEvent.click(prevButton);
        fireEvent.click(nextButton);

        expect(handlePrevious).not.toHaveBeenCalled();
        expect(handleNext).not.toHaveBeenCalled();
    });

    it('applies custom className', () => {
        render(<CarouselNav className="custom-class" />);
        expect(screen.getByRole('button', { name: 'Previous item' }).closest('.carousel-nav')).toHaveClass('custom-class');
    });

    it('renders divider between buttons', () => {
        render(<CarouselNav />);
        const divider = screen.getByRole('button', { name: 'Previous item' }).closest('.carousel-nav')?.querySelector('.carousel-nav__divider');
        expect(divider).toBeInTheDocument();
    });
});
