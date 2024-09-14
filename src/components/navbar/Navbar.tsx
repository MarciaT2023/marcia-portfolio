import { FC } from 'react';
import styles from './Navbar.module.css';

interface NavbarProps {
  links: { label: string; href: string }[];
  listClassName?: string;
  itemClassName?: string;
}

const Navbar: FC<NavbarProps> = ({ links, listClassName = '', itemClassName = '' }) => {
  return (
    <nav className={styles.navbar} role="navigation" aria-label="Main Navigation">
      <div className={styles.container}>
        <a className={styles.navbarBrand} href="#">
          Marcia
        </a>
        <div>
          <ul className={styles.navbarNav}>
            {links.map((link, index) => (
              <li key={index} className={`${styles.navItem} ${itemClassName}`}>
                <a className={styles.navLink} href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// https://codetheweb.blog/style-a-navigation-bar-css/
