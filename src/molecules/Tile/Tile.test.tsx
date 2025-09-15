import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Tile } from './Tile';

describe('Tile', () => {
    it('renders with default props', () => {
        render(<Tile />);
        expect(screen.getByText('Title')).toBeInTheDocument();
        expect(screen.getByText('Description')).toBeInTheDocument();
        expect(screen.getByText('Label')).toBeInTheDocument();
    });

    it('renders with custom content', () => {
        render(
            <Tile
                title="Custom Title"
                description="Custom Description"
                rightLabel="Custom Label"
            />
        );
        expect(screen.getByText('Custom Title')).toBeInTheDocument();
        expect(screen.getByText('Custom Description')).toBeInTheDocument();
        expect(screen.getByText('Custom Label')).toBeInTheDocument();
    });

    it('applies active state correctly', () => {
        render(<Tile state="active" />);
        const tile = screen.getByRole('button');
        expect(tile).toHaveAttribute('aria-pressed', 'true');
        expect(tile).toHaveClass('tile--active');
    });

    it('applies disabled state correctly', () => {
        render(<Tile disabled={true} />);
        const tile = screen.getByRole('button');
        expect(tile).toHaveAttribute('aria-disabled', 'true');
        expect(tile).toHaveClass('tile--disabled');
    });

    it('renders without description when showDescription is false', () => {
        render(<Tile showDescription={false} />);
        expect(screen.queryByText('Description')).not.toBeInTheDocument();
    });

    it('renders without right label when showRightLabel is false', () => {
        render(<Tile showRightLabel={false} />);
        expect(screen.queryByText('Label')).not.toBeInTheDocument();
    });

    it('renders without icon when showIcon is false', () => {
        render(<Tile showIcon={false} />);
        // Icon container should still be there but empty
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('calls onClick when clicked', () => {
        const handleClick = jest.fn();
        render(<Tile onClick={handleClick} />);

        const tile = screen.getByRole('button');
        fireEvent.click(tile);

        expect(handleClick).toHaveBeenCalled();
    });

    it('does not call onClick when disabled', () => {
        const handleClick = jest.fn();
        render(<Tile disabled={true} onClick={handleClick} />);

        const tile = screen.getByRole('button');
        fireEvent.click(tile);

        expect(handleClick).not.toHaveBeenCalled();
    });

    it('applies custom className', () => {
        render(<Tile className="custom-class" />);
        expect(screen.getByRole('button')).toHaveClass('custom-class');
    });

    it('renders with different states', () => {
        const { rerender } = render(<Tile state="active" />);
        expect(screen.getByRole('button')).toHaveClass('tile--active');

        rerender(<Tile state="default" />);
        expect(screen.getByRole('button')).toHaveClass('tile--default');
    });

    it('renders as div when no onClick provided', () => {
        render(<Tile />);
        expect(screen.queryByRole('button')).not.toBeInTheDocument();
        expect(screen.getByText('Title').closest('.tile')).toBeInTheDocument();
    });
});
