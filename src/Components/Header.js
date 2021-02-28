import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
          <Link className={styles.login} to="/">
            Login / Criar
          </Link>
      </nav>
    </header>
  );
};

export default Header;
