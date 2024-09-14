import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Header from './Header';

describe('Header Component', () => {
  it('renders header with title and children', () => {
    const title = 'Test Header';
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

  it('applies custom classNames correctly', () => {
    const title = 'Custom Header';
    const customClass = 'custom-header';
    const customTitleClass = 'custom-title';
    const customContainerClass = 'custom-container';

    const { container } = render(
      <Header
        title={title}
        className={customClass}
        titleClassName={customTitleClass}
        containerClassName={customContainerClass}
      >
        <div>Header content</div>
      </Header>,
    );

    const headerElement = container.firstChild as HTMLElement;
    const titleElement = headerElement.querySelector(`.${customTitleClass}`);
    const containerElement = headerElement.querySelector(`.${customContainerClass}`);

    expect(headerElement).toHaveClass(customClass);
    expect(titleElement).toHaveClass(customTitleClass);
    expect(containerElement).toHaveClass(customContainerClass);
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
