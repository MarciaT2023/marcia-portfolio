import { FC, useState } from 'react';
import './navbar.css';

interface NavbarProps {
  links: { label: string; href: string }[];
  listClassName?: string;
  itemClassName?: string;
}

const Navbar: FC<NavbarProps> = ({ links }) => {
  return (
    <nav className="navbar" role="navigation" aria-label="Main Navigation">
      <ul className="navbar-list">
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
