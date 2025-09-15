import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { SelectList } from './SelectList';

describe('SelectList', () => {
    it('renders with default props', () => {
        render(<SelectList />);
        expect(screen.getByText('Item')).toBeInTheDocument();
        expect(screen.getAllByText('Item')).toHaveLength(4);
        expect(screen.getByText('Litem')).toBeInTheDocument();
    });

    it('renders with custom items', () => {
        render(<SelectList items={['Option 1', 'Option 2']} />);
        expect(screen.getByText('Option 1')).toBeInTheDocument();
        expect(screen.getByText('Option 2')).toBeInTheDocument();
    });

    it('highlights selected item', () => {
        render(<SelectList selectedIndex={1} />);
        const items = screen.getAllByRole('option');
        expect(items[1]).toHaveAttribute('aria-selected', 'true');
    });

    it('applies disabled state to all items', () => {
        render(<SelectList disabled={true} />);
        const items = screen.getAllByRole('option');
        items.forEach(item => {
            expect(item).toHaveAttribute('aria-disabled', 'true');
        });
    });

    it('calls onItemSelect when item is clicked', () => {
        const handleItemSelect = jest.fn();
        render(<SelectList onItemSelect={handleItemSelect} />);

        const firstItem = screen.getAllByRole('option')[0];
        fireEvent.click(firstItem);

        expect(handleItemSelect).toHaveBeenCalledWith(0, 'Item');
    });

    it('calls onItemHover when item is hovered', () => {
        const handleItemHover = jest.fn();
        render(<SelectList onItemHover={handleItemHover} />);

        const firstItem = screen.getAllByRole('option')[0];
        fireEvent.mouseEnter(firstItem);

        expect(handleItemHover).toHaveBeenCalledWith(0, 'Item');
    });

    it('applies custom className', () => {
        render(<SelectList className="custom-class" />);
        expect(screen.getByRole('listbox')).toHaveClass('custom-class');
    });

    it('does not call handlers when disabled', () => {
        const handleItemSelect = jest.fn();
        const handleItemHover = jest.fn();
        render(
            <SelectList
                disabled={true}
                onItemSelect={handleItemSelect}
                onItemHover={handleItemHover}
            />
        );

        const firstItem = screen.getAllByRole('option')[0];
        fireEvent.click(firstItem);
        fireEvent.mouseEnter(firstItem);

        expect(handleItemSelect).not.toHaveBeenCalled();
        expect(handleItemHover).not.toHaveBeenCalled();
    });

    it('renders empty list gracefully', () => {
        render(<SelectList items={[]} />);
        expect(screen.queryByRole('option')).not.toBeInTheDocument();
    });
});
