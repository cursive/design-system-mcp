import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { SelectItem } from './SelectItem';

describe('SelectItem', () => {
    it('renders with default props', () => {
        render(<SelectItem />);
        expect(screen.getByText('No peanuts')).toBeInTheDocument();
        expect(screen.getByRole('option')).toBeInTheDocument();
    });

    it('renders with custom children', () => {
        render(<SelectItem>Custom Option</SelectItem>);
        expect(screen.getByText('Custom Option')).toBeInTheDocument();
    });

    it('applies selected state correctly', () => {
        render(<SelectItem selected={true} />);
        const option = screen.getByRole('option');
        expect(option).toHaveAttribute('aria-selected', 'true');
        expect(option).toHaveClass('select-item--selected');
    });

    it('applies disabled state correctly', () => {
        render(<SelectItem disabled={true} />);
        const option = screen.getByRole('option');
        expect(option).toHaveAttribute('aria-disabled', 'true');
        expect(option).toHaveClass('select-item--disabled');
    });

    it('calls onClick when clicked', () => {
        const handleClick = jest.fn();
        render(<SelectItem onClick={handleClick} />);

        const option = screen.getByRole('option');
        fireEvent.click(option);

        expect(handleClick).toHaveBeenCalled();
    });

    it('calls onMouseEnter when mouse enters', () => {
        const handleMouseEnter = jest.fn();
        render(<SelectItem onMouseEnter={handleMouseEnter} />);

        const option = screen.getByRole('option');
        fireEvent.mouseEnter(option);

        expect(handleMouseEnter).toHaveBeenCalled();
    });

    it('calls onMouseLeave when mouse leaves', () => {
        const handleMouseLeave = jest.fn();
        render(<SelectItem onMouseLeave={handleMouseLeave} />);

        const option = screen.getByRole('option');
        fireEvent.mouseLeave(option);

        expect(handleMouseLeave).toHaveBeenCalled();
    });

    it('applies custom className', () => {
        render(<SelectItem className="custom-class" />);
        expect(screen.getByRole('option')).toHaveClass('custom-class');
    });

    it('renders with different states', () => {
        const { rerender } = render(<SelectItem state="hover" />);
        expect(screen.getByRole('option')).toHaveClass('select-item--hover');

        rerender(<SelectItem state="default" />);
        expect(screen.getByRole('option')).toHaveClass('select-item--default');
    });

    it('does not call onClick when disabled', () => {
        const handleClick = jest.fn();
        render(<SelectItem disabled={true} onClick={handleClick} />);

        const option = screen.getByRole('option');
        fireEvent.click(option);

        expect(handleClick).not.toHaveBeenCalled();
    });
});
