import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Lists } from './Lists';

describe('Lists', () => {
    it('renders with default props', () => {
        render(<Lists />);
        expect(screen.getByText('title')).toBeInTheDocument();
        expect(screen.getAllByText('Text')).toHaveLength(3);
    });

    it('renders with custom content', () => {
        const items = [
            { id: '1', text: 'Item 1' },
            { id: '2', text: 'Item 2' },
        ];
        render(<Lists title="Custom Title" items={items} />);
        expect(screen.getByText('Custom Title')).toBeInTheDocument();
        expect(screen.getByText('Item 1')).toBeInTheDocument();
        expect(screen.getByText('Item 2')).toBeInTheDocument();
    });

    it('renders title as h3 element', () => {
        render(<Lists title="Test Title" />);
        const title = screen.getByRole('heading', { level: 3 });
        expect(title).toBeInTheDocument();
        expect(title).toHaveTextContent('Test Title');
    });

    it('calls onItemClick when item is clicked', () => {
        const handleItemClick = jest.fn();
        const items = [
            { id: '1', text: 'Item 1' },
            { id: '2', text: 'Item 2' },
        ];
        render(<Lists items={items} onItemClick={handleItemClick} />);

        const item1 = screen.getByText('Item 1');
        fireEvent.click(item1);

        expect(handleItemClick).toHaveBeenCalledWith(items[0]);
    });

    it('applies custom className', () => {
        render(<Lists className="custom-class" />);
        expect(screen.getByText('title').closest('.lists')).toHaveClass('custom-class');
    });

    it('renders with custom icons', () => {
        const items = [
            { id: '1', text: 'Item 1', icon: <span data-testid="icon-1">Icon1</span> },
            { id: '2', text: 'Item 2', icon: <span data-testid="icon-2">Icon2</span> },
        ];
        render(<Lists items={items} />);
        expect(screen.getByTestId('icon-1')).toBeInTheDocument();
        expect(screen.getByTestId('icon-2')).toBeInTheDocument();
    });

    it('handles empty items array', () => {
        render(<Lists items={[]} />);
        expect(screen.getByText('title')).toBeInTheDocument();
        expect(screen.queryByText('Text')).not.toBeInTheDocument();
    });

    it('renders correct number of items', () => {
        const items = [
            { id: '1', text: 'Item 1' },
            { id: '2', text: 'Item 2' },
            { id: '3', text: 'Item 3' },
            { id: '4', text: 'Item 4' },
        ];
        render(<Lists items={items} />);
        expect(screen.getAllByText(/Item \d/)).toHaveLength(4);
    });

    it('renders items with unique keys', () => {
        const items = [
            { id: 'unique-1', text: 'Item 1' },
            { id: 'unique-2', text: 'Item 2' },
        ];
        render(<Lists items={items} />);
        expect(screen.getByText('Item 1')).toBeInTheDocument();
        expect(screen.getByText('Item 2')).toBeInTheDocument();
    });

    it('passes icon to IconLine component', () => {
        const customIcon = <span data-testid="custom-icon">Custom</span>;
        const items = [
            { id: '1', text: 'Item 1', icon: customIcon },
        ];
        render(<Lists items={items} />);
        expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
    });
});
