import { FC, ReactNode } from 'react';
import styles from './Header.module.css';
import logo from '../../assets/logo.png';

interface HeaderProps {
  children?: ReactNode;
  title?: string;
  headerClassName?: string;
  titleClassName?: string;
}
const Header: FC<HeaderProps> = ({ children = null, title, headerClassName, titleClassName }) => {
  return (
    <header className={headerClassName ? styles[headerClassName] : undefined} role="banner">
      {/* <div className={styles.logo}> */}
      {/* <img className={styles.logo} src={logo} alt="picture" /> */}
      {/* </div> */}
      {title && <h1 className={titleClassName ? styles[titleClassName] : undefined}>{title}</h1>}
      {children}
    </header>
  );
};

export default Header;
