import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

function Header() {
  return (
    <header>
      <Link to="/">
        <h2 className="logo">Memento</h2>
      </Link>

      <nav>
        <ul>
          <li>
            <Link to="/score">Minhas pontuações</Link>
          </li>
        </ul>
      </nav>

      <button className="switcher" type="button">
        <span />
      </button>
    </header>
  );
}

export default Header;
