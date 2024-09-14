import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Button from './Button';

describe('Button component', () => {
  it('renders correctly with children', () => {
    render(<Button onClick={() => {}}>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick handler when clicked', () => {
    const mockHandleClick = vi.fn();
    render(<Button onClick={mockHandleClick}>Click me</Button>);
    fireEvent.click(screen.getByText('Click me'));
    expect(mockHandleClick).toHaveBeenCalledTimes(1);
  });
});
