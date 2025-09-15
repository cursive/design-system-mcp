import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { CheckboxLine } from './CheckboxLine';

describe('CheckboxLine', () => {
    it('renders with default props', () => {
        render(<CheckboxLine />);
        expect(screen.getByText('This is a gift')).toBeInTheDocument();
        expect(screen.getByRole('checkbox')).toBeInTheDocument();
    });

    it('renders with custom label', () => {
        render(<CheckboxLine label="Custom Label" />);
        expect(screen.getByText('Custom Label')).toBeInTheDocument();
    });

    it('applies checked state correctly', () => {
        render(<CheckboxLine checked={true} />);
        const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
        expect(checkbox.checked).toBe(true);
    });

    it('applies active state correctly', () => {
        render(<CheckboxLine state="active" />);
        const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
        expect(checkbox.checked).toBe(true);
    });

    it('applies disabled state correctly', () => {
        render(<CheckboxLine disabled={true} />);
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeDisabled();
    });

    it('calls onChange when checkbox is clicked', () => {
        const handleChange = jest.fn();
        render(<CheckboxLine onChange={handleChange} />);

        const checkbox = screen.getByRole('checkbox');
        fireEvent.click(checkbox);

        expect(handleChange).toHaveBeenCalledWith(true);
    });

    it('calls onClick when label is clicked', () => {
        const handleClick = jest.fn();
        render(<CheckboxLine onClick={handleClick} />);

        const label = screen.getByText('This is a gift');
        fireEvent.click(label);

        expect(handleClick).toHaveBeenCalled();
    });

    it('applies custom className', () => {
        render(<CheckboxLine className="custom-class" />);
        expect(screen.getByRole('checkbox').closest('.checkbox-line')).toHaveClass('custom-class');
    });

    it('renders with different states', () => {
        const { rerender } = render(<CheckboxLine state="active" />);
        expect(screen.getByRole('checkbox').closest('.checkbox-line')).toHaveClass('checkbox-line--active');

        rerender(<CheckboxLine state="default" />);
        expect(screen.getByRole('checkbox').closest('.checkbox-line')).toHaveClass('checkbox-line--default');
    });

    it('shows check icon when checked or active', () => {
        const { rerender } = render(<CheckboxLine checked={true} />);
        expect(screen.getByTestId('check-icon')).toBeInTheDocument();

        rerender(<CheckboxLine state="active" />);
        expect(screen.getByTestId('check-icon')).toBeInTheDocument();
    });
});
