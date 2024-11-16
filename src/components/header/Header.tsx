import { CSSProperties, FC, ReactNode } from 'react';
import './header.css';

interface HeaderProps {
  children?: ReactNode;
  title?: string;
  className?: string;
  style?: CSSProperties;
  role?: string;
}

const Header: FC<HeaderProps> = ({ children, title, className = '', style = {}, role = 'banner' }) => {
  const composedClassName = ['header', className].filter(Boolean).join(' ');
  return (
    <header className={composedClassName} style={style} role={role} aria-label={title || 'Site Header'}>
      {title && <h1 className="title">{title}</h1>}
      {children}
    </header>
  );
};

export default Header;
