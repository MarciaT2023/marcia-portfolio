import { FC, ReactNode } from 'react';
import styles from './List.module.css';

interface LiProps {
  className?: string;
  children: ReactNode;
}

const Li: FC<LiProps> = ({ className = '', children }) => {
  return <li className={`${styles.li} ${className}`}>{children}</li>;
};

export default Li;
