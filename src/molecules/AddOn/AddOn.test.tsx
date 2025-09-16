import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { AddOn } from './AddOn';

describe('AddOn', () => {
    it('renders with default props', () => {
        render(<AddOn />);
        expect(screen.getByText('Optional wine pairing')).toBeInTheDocument();
        expect(screen.getByText('Tailored to each month\'s menu.')).toBeInTheDocument();
        expect(screen.getByText('No, thank you')).toBeInTheDocument();
        expect(screen.getByText('1 bottle of red')).toBeInTheDocument();
        expect(screen.getByText('1 bottle of white')).toBeInTheDocument();
    });

    it('renders with custom content', () => {
        render(
            <AddOn
                title="Custom title"
                description="Custom description"
                options={[
                    { id: '1', label: 'Option 1', price: '+ $10' },
                    { id: '2', label: 'Option 2', price: '+ $20' },
                ]}
            />
        );
        expect(screen.getByText('Custom title')).toBeInTheDocument();
        expect(screen.getByText('Custom description')).toBeInTheDocument();
        expect(screen.getByText('Option 1')).toBeInTheDocument();
        expect(screen.getByText('Option 2')).toBeInTheDocument();
    });

    it('renders with image when provided', () => {
        render(<AddOn imageUrl="https://example.com/image.jpg" />);
        const image = screen.getByAltText('Optional wine pairing');
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', 'https://example.com/image.jpg');
    });

    it('highlights selected option by selectedOptionId', () => {
        render(<AddOn selectedOptionId="red" />);
        const options = screen.getAllByRole('radio');
        expect(options[1]).toBeChecked(); // red option
    });

    it('highlights selected option by selected property', () => {
        const options = [
            { id: '1', label: 'Option 1', price: '+ $10' },
            { id: '2', label: 'Option 2', price: '+ $20', selected: true },
        ];
        render(<AddOn options={options} />);
        const radioOptions = screen.getAllByRole('radio');
        expect(radioOptions[1]).toBeChecked();
    });

    it('calls onOptionSelect when option is clicked', () => {
        const handleOptionSelect = jest.fn();
        render(<AddOn onOptionSelect={handleOptionSelect} />);

        const redOption = screen.getByText('1 bottle of red');
        fireEvent.click(redOption);

        expect(handleOptionSelect).toHaveBeenCalledWith('red', expect.objectContaining({
            id: 'red',
            label: '1 bottle of red',
            price: '+ $35'
        }));
    });

    it('applies custom className', () => {
        render(<AddOn className="custom-class" />);
        expect(screen.getByText('Optional wine pairing').closest('.add-on')).toHaveClass('custom-class');
    });

    it('renders title as h3 element', () => {
        render(<AddOn title="Test title" />);
        const title = screen.getByRole('heading', { level: 3 });
        expect(title).toBeInTheDocument();
        expect(title).toHaveTextContent('Test title');
    });

    it('renders description as p element', () => {
        render(<AddOn description="Test description" />);
        const description = screen.getByText('Test description');
        expect(description.tagName).toBe('P');
    });

    it('handles empty options array', () => {
        render(<AddOn options={[]} />);
        expect(screen.getByText('Optional wine pairing')).toBeInTheDocument();
        expect(screen.queryByRole('radio')).not.toBeInTheDocument();
    });

    it('renders dividers between options', () => {
        render(<AddOn />);
        const dividers = screen.getByText('Optional wine pairing').closest('.add-on')?.querySelectorAll('.radio-inline + .radio-inline');
        expect(dividers).toHaveLength(2); // 3 options = 2 dividers
    });
});
