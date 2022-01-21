import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

function Home() {
  return (
    <>
      <header>
        <h2 className="logo">Memento</h2>

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
      <main>
        <div className="menu-card">
          <h1>Menu</h1>

          <div className="option-group">
            <label htmlFor="player-name">Nome do jogador:</label>
            <input
              type="text"
              id="player-name"
              name="player-name"
              placeholder="mastermind"
            />
          </div>
          <div className="option-group">
            <p>Quantidade de pares:</p>

            <div className="pairs-selector-container">
              <button type="button">2</button>
              <button type="button">8</button>
              <button type="button">18</button>
            </div>
          </div>

          <button type="button" className="start-game">
            Jogar
          </button>
        </div>
      </main>
    </>
  );
}

export default Home;
