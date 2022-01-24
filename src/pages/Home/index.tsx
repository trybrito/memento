import React from 'react';
import Header from '../../components/Header';
import PlayIcon from '../../assets/play.svg';
import styles from './styles.module.scss';

function Home() {
  return (
    <>
      <Header />
      <main className={styles['page-content']}>
        <div className={styles['menu-card']}>
          <h1 className={styles['main-title']}>Menu</h1>

          <div className={styles['menu-content']}>
            <div>
              <div className={styles['option-group']}>
                <label htmlFor="player-name">
                  Digite o nome do seu jogador:
                </label>
                <input
                  type="text"
                  id="player-name"
                  name="player-name"
                  placeholder="Mastermind"
                />
              </div>
              <div className={styles['option-group']}>
                <p>Escolha a quantidade de pares:</p>

                <div className={styles['pairs-selector-container']}>
                  <button type="button">2</button>
                  <button type="button">8</button>
                  <button type="button">18</button>
                </div>
              </div>
            </div>

            <button type="button" className={styles['start-game']}>
              <p className="sr-only">Jogar</p>
              <img src={PlayIcon} alt="" />
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
