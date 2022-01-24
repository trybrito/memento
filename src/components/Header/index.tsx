import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

function Header() {
  return (
    <header>
      <Link to="/">
        <h2 className={styles.logo}>Memento</h2>
      </Link>

      <nav>
        <ul>
          <li>
            <Link to="/score">Minhas pontuações</Link>
          </li>
        </ul>
      </nav>

      <button type="button" className={styles.switcher}>
        <span />
      </button>
    </header>
  );
}

export default Header;
