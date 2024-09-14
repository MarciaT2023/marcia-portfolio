import { FC, ReactNode } from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button className={styles.button} type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
