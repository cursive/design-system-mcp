import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Textfield } from './Textfield';

describe('Textfield', () => {
    it('renders with default props', () => {
        render(<Textfield />);
        expect(screen.getByText('Label')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Value')).toBeInTheDocument();
    });

    it('renders with custom label and placeholder', () => {
        render(
            <Textfield
                label="Custom Label"
                placeholder="Custom Placeholder"
            />
        );
        expect(screen.getByText('Custom Label')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Custom Placeholder')).toBeInTheDocument();
    });

    it('renders without label when showLabel is false', () => {
        render(<Textfield showLabel={false} />);
        expect(screen.queryByText('Label')).not.toBeInTheDocument();
    });

    it('applies disabled state correctly', () => {
        render(<Textfield disabled={true} />);
        const input = screen.getByPlaceholderText('Value');
        expect(input).toBeDisabled();
    });

    it('shows error message for error states', () => {
        render(<Textfield state="error" errorMessage="Custom Error" />);
        expect(screen.getByText('Custom Error')).toBeInTheDocument();
    });

    it('shows different error message for error-filled state', () => {
        render(<Textfield state="error-filled" />);
        expect(screen.getByText('Explainer')).toBeInTheDocument();
    });

    it('calls onChange when input value changes', () => {
        const handleChange = jest.fn();
        render(<Textfield onChange={handleChange} />);

        const input = screen.getByPlaceholderText('Value');
        fireEvent.change(input, { target: { value: 'test' } });

        expect(handleChange).toHaveBeenCalledWith('test');
    });

    it('calls onFocus when input is focused', () => {
        const handleFocus = jest.fn();
        render(<Textfield onFocus={handleFocus} />);

        const input = screen.getByPlaceholderText('Value');
        fireEvent.focus(input);

        expect(handleFocus).toHaveBeenCalled();
    });

    it('calls onBlur when input loses focus', () => {
        const handleBlur = jest.fn();
        render(<Textfield onBlur={handleBlur} />);

        const input = screen.getByPlaceholderText('Value');
        fireEvent.blur(input);

        expect(handleBlur).toHaveBeenCalled();
    });

    it('applies custom className', () => {
        render(<Textfield className="custom-class" />);
        expect(screen.getByRole('textbox').closest('.textfield')).toHaveClass('custom-class');
    });

    it('renders with different states', () => {
        const { rerender } = render(<Textfield state="hover" />);
        expect(screen.getByRole('textbox').closest('.textfield')).toHaveClass('textfield--hover');

        rerender(<Textfield state="active" />);
        expect(screen.getByRole('textbox').closest('.textfield')).toHaveClass('textfield--active');

        rerender(<Textfield state="filled" />);
        expect(screen.getByRole('textbox').closest('.textfield')).toHaveClass('textfield--filled');
    });
});
