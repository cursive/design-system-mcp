import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { TextArea } from './TextArea';

describe('TextArea', () => {
    it('renders with default props', () => {
        render(<TextArea />);
        expect(screen.getByText('Label')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Value')).toBeInTheDocument();
    });

    it('renders with custom label and placeholder', () => {
        render(
            <TextArea
                label="Custom Label"
                placeholder="Custom Placeholder"
            />
        );
        expect(screen.getByText('Custom Label')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Custom Placeholder')).toBeInTheDocument();
    });

    it('renders without label when showLabel is false', () => {
        render(<TextArea showLabel={false} />);
        expect(screen.queryByText('Label')).not.toBeInTheDocument();
    });

    it('applies disabled state correctly', () => {
        render(<TextArea disabled={true} />);
        const textarea = screen.getByRole('textbox');
        expect(textarea).toBeDisabled();
    });

    it('shows error message for error states', () => {
        render(<TextArea state="error" errorMessage="Custom Error" />);
        expect(screen.getByText('Custom Error')).toBeInTheDocument();
    });

    it('shows different error message for error-filled state', () => {
        render(<TextArea state="error-filled" />);
        expect(screen.getByText('Explainer')).toBeInTheDocument();
    });

    it('calls onChange when textarea value changes', () => {
        const handleChange = jest.fn();
        render(<TextArea onChange={handleChange} />);

        const textarea = screen.getByRole('textbox');
        fireEvent.change(textarea, { target: { value: 'test' } });

        expect(handleChange).toHaveBeenCalledWith('test');
    });

    it('calls onFocus when textarea is focused', () => {
        const handleFocus = jest.fn();
        render(<TextArea onFocus={handleFocus} />);

        const textarea = screen.getByRole('textbox');
        fireEvent.focus(textarea);

        expect(handleFocus).toHaveBeenCalled();
    });

    it('calls onBlur when textarea loses focus', () => {
        const handleBlur = jest.fn();
        render(<TextArea onBlur={handleBlur} />);

        const textarea = screen.getByRole('textbox');
        fireEvent.blur(textarea);

        expect(handleBlur).toHaveBeenCalled();
    });

    it('applies custom className', () => {
        render(<TextArea className="custom-class" />);
        expect(screen.getByRole('textbox').closest('.textarea')).toHaveClass('custom-class');
    });

    it('renders with different states', () => {
        const { rerender } = render(<TextArea state="hover" />);
        expect(screen.getByRole('textbox').closest('.textarea')).toHaveClass('textarea--hover');

        rerender(<TextArea state="active" />);
        expect(screen.getByRole('textbox').closest('.textarea')).toHaveClass('textarea--active');

        rerender(<TextArea state="filled" />);
        expect(screen.getByRole('textbox').closest('.textarea')).toHaveClass('textarea--filled');
    });

    it('applies custom rows prop', () => {
        render(<TextArea rows={6} />);
        const textarea = screen.getByRole('textbox') as HTMLTextAreaElement;
        expect(textarea.rows).toBe(6);
    });

    it('displays value correctly', () => {
        render(<TextArea value="Sample text" />);
        const textarea = screen.getByRole('textbox') as HTMLTextAreaElement;
        expect(textarea.value).toBe('Sample text');
    });
});
