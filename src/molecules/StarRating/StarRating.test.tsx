import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { StarRating } from './StarRating';

describe('StarRating', () => {
    it('renders correct number of stars', () => {
        render(<StarRating maxRating={5} />);
        const stars = screen.getAllByRole('button');
        expect(stars).toHaveLength(5);
    });

    it('renders filled stars up to rating', () => {
        render(<StarRating rating={3} maxRating={5} />);
        const stars = screen.getAllByRole('button');

        // First 3 stars should be filled
        expect(stars[0]).toHaveClass('star-rating__star--filled');
        expect(stars[1]).toHaveClass('star-rating__star--filled');
        expect(stars[2]).toHaveClass('star-rating__star--filled');

        // Last 2 stars should be empty
        expect(stars[3]).toHaveClass('star-rating__star--empty');
        expect(stars[4]).toHaveClass('star-rating__star--empty');
    });

    it('calls onRatingChange when star is clicked in interactive mode', () => {
        const handleRatingChange = jest.fn();
        render(<StarRating interactive={true} onRatingChange={handleRatingChange} />);

        const stars = screen.getAllByRole('button');
        fireEvent.click(stars[2]); // Click 3rd star

        expect(handleRatingChange).toHaveBeenCalledWith(3);
    });

    it('does not call onRatingChange when not interactive', () => {
        const handleRatingChange = jest.fn();
        render(<StarRating interactive={false} onRatingChange={handleRatingChange} />);

        const stars = screen.getAllByRole('button');
        fireEvent.click(stars[2]);

        expect(handleRatingChange).not.toHaveBeenCalled();
    });

    it('disables stars when not interactive', () => {
        render(<StarRating interactive={false} />);
        const stars = screen.getAllByRole('button');
        stars.forEach(star => {
            expect(star).toBeDisabled();
        });
    });

    it('enables stars when interactive', () => {
        render(<StarRating interactive={true} />);
        const stars = screen.getAllByRole('button');
        stars.forEach(star => {
            expect(star).not.toBeDisabled();
        });
    });

    it('applies custom size', () => {
        render(<StarRating size={32} />);
        const stars = screen.getAllByRole('button');
        stars.forEach(star => {
            expect(star).toHaveStyle('width: 32px');
            expect(star).toHaveStyle('height: 32px');
        });
    });

    it('applies custom className', () => {
        render(<StarRating className="custom-class" />);
        expect(screen.getAllByRole('button')[0].closest('.star-rating')).toHaveClass('custom-class');
    });

    it('has correct aria labels', () => {
        render(<StarRating rating={3} maxRating={5} />);
        expect(screen.getByLabelText('3 out of 5 stars')).toBeInTheDocument();
        expect(screen.getByLabelText('Rate 1 out of 5 stars')).toBeInTheDocument();
    });

    it('renders with default props', () => {
        render(<StarRating />);
        const stars = screen.getAllByRole('button');
        expect(stars).toHaveLength(5);
        expect(stars[0]).toHaveClass('star-rating__star--filled');
    });

    it('handles different max ratings', () => {
        render(<StarRating maxRating={10} rating={7} />);
        const stars = screen.getAllByRole('button');
        expect(stars).toHaveLength(10);

        // First 7 should be filled
        for (let i = 0; i < 7; i++) {
            expect(stars[i]).toHaveClass('star-rating__star--filled');
        }

        // Last 3 should be empty
        for (let i = 7; i < 10; i++) {
            expect(stars[i]).toHaveClass('star-rating__star--empty');
        }
    });
});
