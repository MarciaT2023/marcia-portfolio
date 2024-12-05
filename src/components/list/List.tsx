import { FC, ReactNode } from 'react';
import styles from './List.module.css';

interface ListProps {
  items: { label: string; href: string }[];
  listClassName?: string;
  itemClassName?: string;
  children?: ReactNode;
}

const List: FC<ListProps> = ({ items, itemClassName = '', listClassName = '' }) => {
  return (
    <ul className={`${styles.list} ${styles[listClassName]}`}>
      {items.map((item) => (
        <li key={item.href} className={`${styles.listItem} ${styles[itemClassName]}`}>
          <a href={item.href}>{item.label}</a>
        </li>
      ))}
    </ul>
  );
};

export default List;
