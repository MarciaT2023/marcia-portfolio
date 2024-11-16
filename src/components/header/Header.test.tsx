import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';
import Header from './Header';

describe('Header Component', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders without crashing', () => {
    render(<Header />);
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toHaveClass('header');
    expect(headerElement.tagName).toBe('HEADER');
  });

  it.each([
    ['Short Title'],
    ['This is a moderately long title'],
    ['This is a very long title that might overflow and test edge cases'],
    [
      "This is a very long title that should test the component's ability to handle text overflow properly without breaking the layout",
    ],
  ])('renders title correctly: %s', (testTitle) => {
    render(<Header title={testTitle} />);
    const headerElement = screen.getByRole('banner');
    const titleElement = screen.getByText(testTitle);
    expect(titleElement).toBeInTheDocument();
    expect(titleElement.tagName).toBe('H1');
    expect(titleElement).toHaveClass('title');
    expect(headerElement).toHaveAttribute('aria-label', testTitle);
  });

  it('applies custom className when provided', () => {
    const customClass = 'custom-class';
    render(<Header className={customClass} />);
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toHaveClass('header');
    expect(headerElement).toHaveClass(customClass);
  });

  it('applies custom styles when provided', () => {
    const customStyle = { backgroundColor: '#F5E5C0', padding: '100px' };
    render(<Header style={customStyle} />);
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toHaveStyle('background-color: #F5E5C0');
    expect(headerElement).toHaveStyle('padding: 100px');
    expect(headerElement).toHaveClass('header');
  });

  it('renders title and children within the header element', () => {
    render(
      <Header title="Test Header">
        <div>Header Content</div>
      </Header>,
    );
    const headerElement = screen.getByRole('banner');
    const titleElement = screen.getByText('Test Header');
    const childContent = screen.getByText('Header Content');

    expect(headerElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
    expect(headerElement.tagName).toBe('HEADER');
    expect(titleElement.tagName).toBe('H1');
    expect(childContent).toBeInTheDocument();
  });

  it('renders child content correctly inside the header element', () => {
    render(
      <Header>
        <p>Child Content</p>
      </Header>,
    );
    const childElement = screen.getByText('Child Content');
    expect(childElement).toBeInTheDocument();
  });

  it('applies the correct role when provided', () => {
    render(<Header role="navigation" />);
    const headerElement = screen.getByRole('navigation');
    expect(headerElement).toBeInTheDocument();
  });

  it('renders correctly with title, children, and custom className', () => {
    const customClass = 'custom-class';
    const testTitle = 'Test Title';
    render(
      <Header title={testTitle} className={customClass}>
        <p>Child Content</p>
      </Header>,
    );
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toHaveClass(customClass);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Child Content')).toBeInTheDocument();
    expect(headerElement).toHaveAttribute('aria-label', testTitle);
  });

  it.each([
    ['', 'when an empty string is passed'],
    [' ', 'when only whitespace is passed'],
  ])('does not render title %s%s', (testTitle) => {
    render(<Header title={testTitle} />);
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toBeInTheDocument();
    expect(headerElement).not.toContainHTML('<h1>');
  });

  it('does not render the title when no title is provided', () => {
    render(<Header />);
    const titleElement = screen.queryByText(/Test Header/i);
    expect(titleElement).not.toBeInTheDocument();
  });

  it('does not render children when null is passed', () => {
    render(<Header>{null}</Header>);
    const childContent = screen.queryByText(/child content/i);
    expect(childContent).not.toBeInTheDocument();
  });

  it('uses default aria-label when title is not provided', () => {
    render(<Header />);
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toHaveAttribute('aria-label', 'Site Header');
  });

  it('matches snapshot', () => {
    const { asFragment } = render(
      <Header title="Snapshot Test">
        <div>Snapshot Content</div>
      </Header>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
