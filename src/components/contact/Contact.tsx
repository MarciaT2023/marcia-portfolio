import React from 'react';
import styles from '../nav/Navbar.module.css';
import github from '../../assets/github-mark-white.svg';
import linkedIn from '../../assets/icons8-linkedin.svg';

const Contact: React.FC = () => {
  return (
    <div className={styles.contactLinks}>
      <span>
        <a rel="noopener" target="_blank" href="mailto:marciatmerritt@gmail.com">
          marciatmerritt@gmail.com
        </a>
      </span>
      <span>
        <a href="https://www.linkedin.com/in/marcia-merritt-58662761/" target="_blank" rel="noopener noreferrer">
          <img src={linkedIn} alt="LinkedIn" />
        </a>
      </span>
      <span>
        <a href="https://github.com/marciatmerritt" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="GitHub" />
        </a>
      </span>
    </div>
  );
};

export default Contact;
