import { render, screen } from '@testing-library/react';
import { describe, expect, it, test, vi } from 'vitest';
import Header from './Header';

vi.mock('./Header.module.css', () => ({
  headerClass: 'headerClassName',
  titleClass: 'titleClassName',
}));

describe('Header Component', () => {

  const title = 'Test Header';

  test('renders logo image', () => {
    render(<Header />);
    const logo = screen.getByAltText('picture');
    expect(logo).toBeInTheDocument();
  });

  test('renders title when provided', () => {
    render(<Header title={title} />);
    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
  });


  it('renders header with title and children', () => {
    const { getByText } = render(
      <Header title={title}>
        <div>Header content</div>
      </Header>,
    );
    expect(getByText('Header content')).toBeInTheDocument();
  });

  it('handles default props', () => {
    const title = 'Header without Children';
    const { getByText } = render(<Header title={title} />);
    expect(getByText(title)).toBeInTheDocument();
  });

  test('applies custom class names correctly', () => {
    const headerClassName = 'headerClassName';
    const titleClassName = 'titleClassName';

    render(
      <Header
        title={title}
        headerClassName={headerClassName}
        titleClassName={titleClassName}
      >
        <div>Header content</div>
      </Header>,
    );

    const headerElement = screen.getByRole('banner');
    const titleElement = screen.getByText(title);

    expect(headerElement).toHaveClass(headerClassName);
    expect(titleElement).toHaveClass(titleClassName);
  });

  it('handles edge cases', () => {
    const longTitle = 'This is a very long title that might overflow';
    const emptyChildren = null;

    const { getByText } = render(<Header title={longTitle}>{emptyChildren}</Header>);

    expect(getByText(longTitle)).toBeInTheDocument();
  });

  it('renders header with role banner', () => {
    const title = 'Accessible Header';

    render(
      <Header title={title}>
        <div>Search Component</div>
      </Header>,
    );

    expect(screen.getByRole('banner')).toBeInTheDocument();
  });
});
