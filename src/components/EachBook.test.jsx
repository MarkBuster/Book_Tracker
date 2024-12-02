import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import { EachBook } from './EachBook';

describe('EachBook Component', () => {
  const mockBook = {
    id: '1',
    title: 'Test Book',
    author: 'Test Author',
    summary: 'Test Summary',
    completed: false
  };

  const mockToggle = vi.fn();
  const mockDelete = vi.fn();

  it('renders book information correctly', () => {
    render(
      <EachBook 
        {...mockBook}
        toggleBook={mockToggle}
        deleteBook={mockDelete}
      />
    );

    expect(screen.getByText('Test Book')).toBeInTheDocument();
    expect(screen.getByText('Test Author')).toBeInTheDocument();
    expect(screen.getByText('Test Summary')).toBeInTheDocument();
  });

  it('calls toggleBook when checkbox is clicked', () => {
    render(
        <EachBook 
            {...mockBook}
            toggleBook={mockToggle} 
            deleteBook={mockDelete}
        />
    );
    
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    
    expect(mockToggle).toHaveBeenCalledWith('1', true);
  });

  it('calls deleteBook when delete button is clicked', () => {
    render(
        <EachBook 
            {...mockBook}
            toggleBook={mockToggle} 
            deleteBook={mockDelete}
        />
    );
    
    const deleteButton = screen.getByRole('button', { name: /delete/i });
    fireEvent.click(deleteButton);
    
    expect(mockDelete).toHaveBeenCalledWith('1');
  });
});