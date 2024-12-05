import { FC, ReactNode } from 'react';
import styles from './List.module.css';

interface UlProps {
  className?: string;
  children: ReactNode;
}

const Ul: FC<UlProps> = ({ className = '', children }) => {
  return <ul className={`${styles.ul} ${className}`}>{children}</ul>;
};

export default Ul;
