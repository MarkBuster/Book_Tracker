import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import { BookList } from './BookList';

describe('BookList Component', () => {
    const mockBooks = [
        {
            id: '1',
            title: 'Test Book 1',
            author: 'Test Author 1',
            summary: 'Test Summary 1',
            completed: false
        },
        {
            id: '2',
            title: 'Test Book 2',
            author: 'Test Author 2',
            summary: 'Test Summary 2',
            completed: true
        }
    ];

    const mockToggle = vi.fn();
    const mockDelete = vi.fn();

    it('renders list of books correctly', () => {
        render(
            <BookList 
                books={mockBooks}
                toggleBook={mockToggle}
                deleteBook={mockDelete}
            />
        );

        expect(screen.getByText('Test Book 1')).toBeInTheDocument();
        expect(screen.getByText('Test Author 1')).toBeInTheDocument();
        expect(screen.getByText('Test Book 2')).toBeInTheDocument();
        expect(screen.getByText('Test Author 2')).toBeInTheDocument();
    });

    it('displays "No Books" when books array is empty', () => {
        render(
            <BookList 
                books={[]}
                toggleBook={mockToggle}
                deleteBook={mockDelete}
            />
        );

        expect(screen.getByText('No Books')).toBeInTheDocument();
    });

    it('passes correct functions to EachBook components', () => {
        render(
            <BookList 
                books={mockBooks}
                toggleBook={mockToggle}
                deleteBook={mockDelete}
            />
        );

        const checkboxes = screen.getAllByRole('checkbox');
        fireEvent.click(checkboxes[0]);

        const deleteButtons = screen.getAllByRole('button', { name: /delete/i });
        fireEvent.click(deleteButtons[0]);

        // Were called with correct arguments?
        expect(mockToggle).toHaveBeenCalledWith('1', true);
        expect(mockDelete).toHaveBeenCalledWith('1');
    });
});