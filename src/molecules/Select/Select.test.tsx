import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Select } from './Select';

describe('Select', () => {
    it('renders with default props', () => {
        render(<Select />);
        expect(screen.getByText('Label')).toBeInTheDocument();
        expect(screen.getByText('Select a country')).toBeInTheDocument();
        expect(screen.getByText('Hint')).toBeInTheDocument();
    });

    it('renders with custom label, placeholder, and hint', () => {
        render(
            <Select
                label="Custom Label"
                placeholder="Custom Placeholder"
                hint="Custom Hint"
            />
        );
        expect(screen.getByText('Custom Label')).toBeInTheDocument();
        expect(screen.getByText('Custom Placeholder')).toBeInTheDocument();
        expect(screen.getByText('Custom Hint')).toBeInTheDocument();
    });

    it('renders without label when showLabel is false', () => {
        render(<Select showLabel={false} />);
        expect(screen.queryByText('Label')).not.toBeInTheDocument();
    });

    it('renders without hint when showHint is false', () => {
        render(<Select showHint={false} />);
        expect(screen.queryByText('Hint')).not.toBeInTheDocument();
    });

    it('applies disabled state correctly', () => {
        render(<Select disabled={true} />);
        const select = screen.getByRole('combobox');
        expect(select).toBeDisabled();
    });

    it('calls onChange when select value changes', () => {
        const handleChange = jest.fn();
        render(<Select onChange={handleChange} />);

        const select = screen.getByRole('combobox');
        fireEvent.change(select, { target: { value: 'us' } });

        expect(handleChange).toHaveBeenCalledWith('us');
    });

    it('calls onFocus when select is focused', () => {
        const handleFocus = jest.fn();
        render(<Select onFocus={handleFocus} />);

        const select = screen.getByRole('combobox');
        fireEvent.focus(select);

        expect(handleFocus).toHaveBeenCalled();
    });

    it('calls onBlur when select loses focus', () => {
        const handleBlur = jest.fn();
        render(<Select onBlur={handleBlur} />);

        const select = screen.getByRole('combobox');
        fireEvent.blur(select);

        expect(handleBlur).toHaveBeenCalled();
    });

    it('applies custom className', () => {
        render(<Select className="custom-class" />);
        expect(screen.getByRole('combobox').closest('.select')).toHaveClass('custom-class');
    });

    it('renders with different states', () => {
        const { rerender } = render(<Select state="hover" />);
        expect(screen.getByRole('combobox').closest('.select')).toHaveClass('select--hover');

        rerender(<Select state="active" />);
        expect(screen.getByRole('combobox').closest('.select')).toHaveClass('select--active');

        rerender(<Select state="default" />);
        expect(screen.getByRole('combobox').closest('.select')).toHaveClass('select--default');
    });

    it('displays selected value correctly', () => {
        render(<Select value="us" />);
        const select = screen.getByRole('combobox') as HTMLSelectElement;
        expect(select.value).toBe('us');
    });
});
