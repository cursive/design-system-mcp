import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { TileMultiItem } from './TileMultiItem';

describe('TileMultiItem', () => {
    it('renders with default options', () => {
        render(<TileMultiItem />);
        expect(screen.getByText('2 bottles')).toBeInTheDocument();
        expect(screen.getByText('4 bottles')).toBeInTheDocument();
        expect(screen.getByText('No, thank you')).toBeInTheDocument();
    });

    it('renders with custom options', () => {
        const options = [
            { id: '1', label: 'Option 1', price: '$10' },
            { id: '2', label: 'Option 2', price: '$20' },
        ];
        render(<TileMultiItem options={options} />);
        expect(screen.getByText('Option 1')).toBeInTheDocument();
        expect(screen.getByText('Option 2')).toBeInTheDocument();
    });

    it('highlights selected option by selectedId', () => {
        render(<TileMultiItem selectedId="2" />);
        const options = screen.getAllByRole('radio');
        expect(options[1]).toBeChecked();
    });

    it('highlights selected option by selected property', () => {
        const options = [
            { id: '1', label: 'Option 1', price: '$10' },
            { id: '2', label: 'Option 2', price: '$20', selected: true },
        ];
        render(<TileMultiItem options={options} />);
        const radioOptions = screen.getAllByRole('radio');
        expect(radioOptions[1]).toBeChecked();
    });

    it('applies disabled state to all options', () => {
        render(<TileMultiItem disabled={true} />);
        const options = screen.getAllByRole('radio');
        options.forEach(option => {
            expect(option).toBeDisabled();
        });
    });

    it('calls onOptionSelect when option is clicked', () => {
        const handleOptionSelect = jest.fn();
        render(<TileMultiItem onOptionSelect={handleOptionSelect} />);

        const firstOption = screen.getByText('2 bottles');
        fireEvent.click(firstOption);

        expect(handleOptionSelect).toHaveBeenCalledWith('1', expect.objectContaining({
            id: '1',
            label: '2 bottles',
            price: '+ $45'
        }));
    });

    it('does not call onOptionSelect when disabled', () => {
        const handleOptionSelect = jest.fn();
        render(<TileMultiItem disabled={true} onOptionSelect={handleOptionSelect} />);

        const firstOption = screen.getByText('2 bottles');
        fireEvent.click(firstOption);

        expect(handleOptionSelect).not.toHaveBeenCalled();
    });

    it('applies custom className', () => {
        render(<TileMultiItem className="custom-class" />);
        expect(screen.getByText('2 bottles').closest('.tile-multi-item')).toHaveClass('custom-class');
    });

    it('renders empty options gracefully', () => {
        render(<TileMultiItem options={[]} />);
        expect(screen.queryByRole('radio')).not.toBeInTheDocument();
    });

    it('handles option selection correctly', () => {
        const options = [
            { id: '1', label: 'Option 1', price: '$10' },
            { id: '2', label: 'Option 2', price: '$20' },
        ];
        render(<TileMultiItem options={options} selectedId="1" />);

        const radioOptions = screen.getAllByRole('radio');
        expect(radioOptions[0]).toBeChecked();
        expect(radioOptions[1]).not.toBeChecked();
    });
});
