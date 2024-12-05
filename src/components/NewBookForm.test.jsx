import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import { NewBookForm } from './NewBookForm';

describe('NewBookForm Component', () => {
    const mockSubmit = vi.fn();

    beforeEach(() => {
        mockSubmit.mockClear();
    });

    it('renders form inputs correctly', () => {
        render(<NewBookForm onSubmit={mockSubmit} />);
        
        expect(screen.getByPlaceholderText('Title')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Author')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Summary / Notes')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /add/i })).toBeInTheDocument();
    });

    it('handles form submission', () => {
        render(<NewBookForm onSubmit={mockSubmit} />);
        
        const titleInput = screen.getByPlaceholderText('Title');
        const authorInput = screen.getByPlaceholderText('Author');
        const summaryInput = screen.getByPlaceholderText('Summary / Notes');
        
        fireEvent.change(titleInput, { target: { value: 'New Book' } });
        fireEvent.change(authorInput, { target: { value: 'New Author' } });
        fireEvent.change(summaryInput, { target: { value: 'New Summary' } });
        
        const addButton = screen.getByRole('button', { name: /add/i });
        fireEvent.click(addButton);
        
        expect(mockSubmit).toHaveBeenCalledWith('New Book', 'New Author', 'New Summary');
    });

    it('prevents submission with empty title', () => {
        render(<NewBookForm onSubmit={mockSubmit} />);
        
        //test for empty title
        const addButton = screen.getByRole('button', { name: /add/i });
        fireEvent.click(addButton);
        
        expect(mockSubmit).not.toHaveBeenCalled();
    });
});