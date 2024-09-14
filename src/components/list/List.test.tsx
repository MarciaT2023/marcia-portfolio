import { render } from '@testing-library/react';
import { expect, test } from 'vitest';
import List from './List';
import styles from './List.module.css';

const items = [
  { name: 'Test 1', description: 'Testing Testing 1' },
  { name: 'Test 2', description: 'Testing Testing 2' },
];

const renderItem = (item: { name: string; description: string }) => (
  <div>
    <h3>{item.name}</h3>
    <p>{item.description}</p>
  </div>
);

test('renders list with items', () => {
  const { getByText } = render(<List items={items} renderItem={renderItem} />);

  expect(getByText('Test 1')).toBeInTheDocument();
  expect(getByText('Testing Testing 1')).toBeInTheDocument();
  expect(getByText('Test 2')).toBeInTheDocument();
  expect(getByText('Testing Testing 2')).toBeInTheDocument();
});

test('renders list items with unique content', () => {
  render(<List items={items} renderItem={renderItem} />);

  const liElements = document.querySelectorAll('li');
  expect(liElements).toHaveLength(items.length);

  liElements.forEach((li, index) => {
    expect(li).toHaveTextContent(items[index].name);
    expect(li).toHaveTextContent(items[index].description);
  });
});

test('applies custom classNames correctly', () => {
  const customUlClassName = 'customUl';
  const customLiClassName = 'customLi';

  const { container } = render(
    <List items={items} renderItem={renderItem} ulClassName={customUlClassName} liClassName={customLiClassName} />,
  );

  const ulElement = container.firstChild as HTMLElement;
  expect(ulElement).toHaveClass(styles.list);
  expect(ulElement).toHaveClass(styles[customUlClassName]);

  const liElements = ulElement.querySelectorAll('li');
  liElements.forEach((li) => {
    expect(li).toHaveClass(styles.listItem);
    expect(li).toHaveClass(styles[customLiClassName]);
  });
});

test('renders empty list without errors', () => {
  const { container } = render(<List items={[]} renderItem={renderItem} />);

  const ulElement = container.querySelector('ul') as HTMLElement;
  expect(ulElement).toBeInTheDocument();
  expect(ulElement.childElementCount).toBe(0);
});
