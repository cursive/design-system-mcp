import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { CarouselPips } from './CarouselPips';

describe('CarouselPips', () => {
    it('renders correct number of pips', () => {
        render(<CarouselPips totalItems={5} />);
        const pips = screen.getAllByRole('button');
        expect(pips).toHaveLength(5);
    });

    it('highlights active pip', () => {
        render(<CarouselPips totalItems={3} activeIndex={1} />);
        const pips = screen.getAllByRole('button');
        expect(pips[0]).not.toHaveClass('carousel-pips__pip--active');
        expect(pips[1]).toHaveClass('carousel-pips__pip--active');
        expect(pips[2]).not.toHaveClass('carousel-pips__pip--active');
    });

    it('calls onPipClick when pip is clicked', () => {
        const handlePipClick = jest.fn();
        render(<CarouselPips totalItems={3} onPipClick={handlePipClick} />);

        const pips = screen.getAllByRole('button');
        fireEvent.click(pips[1]);

        expect(handlePipClick).toHaveBeenCalledWith(1);
    });

    it('renders with default props', () => {
        render(<CarouselPips />);
        const pips = screen.getAllByRole('button');
        expect(pips).toHaveLength(3);
        expect(pips[0]).toHaveClass('carousel-pips__pip--active');
    });

    it('applies custom className', () => {
        render(<CarouselPips className="custom-class" />);
        expect(screen.getAllByRole('button')[0].closest('.carousel-pips')).toHaveClass('custom-class');
    });

    it('has correct aria labels', () => {
        render(<CarouselPips totalItems={3} />);
        expect(screen.getByLabelText('Go to item 1')).toBeInTheDocument();
        expect(screen.getByLabelText('Go to item 2')).toBeInTheDocument();
        expect(screen.getByLabelText('Go to item 3')).toBeInTheDocument();
    });

    it('handles edge case with single item', () => {
        render(<CarouselPips totalItems={1} activeIndex={0} />);
        const pips = screen.getAllByRole('button');
        expect(pips).toHaveLength(1);
        expect(pips[0]).toHaveClass('carousel-pips__pip--active');
    });

    it('handles active index out of bounds', () => {
        render(<CarouselPips totalItems={3} activeIndex={5} />);
        const pips = screen.getAllByRole('button');
        // No pip should be active if index is out of bounds
        pips.forEach(pip => {
            expect(pip).not.toHaveClass('carousel-pips__pip--active');
        });
    });
});
