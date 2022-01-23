import React from 'react';
import Header from '../../components/Header';
import './styles.scss';

function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="menu-card">
          <h1>Menu</h1>

          <div className="option-group">
            <label htmlFor="player-name">Informe o nome do seu jogador:</label>
            <input
              type="text"
              id="player-name"
              name="player-name"
              placeholder="mastermind"
            />
          </div>
          <div className="option-group">
            <p>Escolha a quantidade de pares:</p>

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
