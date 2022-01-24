import React from 'react';
import Header from '../../components/Header';
import styles from './styles.module.scss';

function Score() {
  return (
    <>
      <Header />
      <main className={styles['page-content']}>
        <h1 className={styles['main-title']}>Histórico de partidas</h1>

        <div className="separator" />

        <div className={styles['history-wrapper']}>
          <div className={styles['history-card']}>
            <div>
              <h2 className={styles['player-name']}>Mastermind</h2>
              <p>
                Quantidade de pares a serem encontrados: <strong>2</strong>
              </p>
            </div>
            <div>
              <p>Número de jogadas:</p>
              <strong>4</strong>
            </div>
          </div>
          <div className={styles['history-card']}>
            <div>
              <h2 className={styles['player-name']}>Mastermind</h2>
              <p>
                Quantidade de pares a serem encontrados: <strong>2</strong>
              </p>
            </div>
            <div>
              <p>Número de jogadas:</p>
              <strong>4</strong>
            </div>
          </div>
          <div className={styles['history-card']}>
            <div>
              <h2 className={styles['player-name']}>Mastermind</h2>
              <p>
                Quantidade de pares a serem encontrados: <strong>2</strong>
              </p>
            </div>
            <div>
              <p>Número de jogadas:</p>
              <strong>4</strong>
            </div>
          </div>
          <div className={styles['history-card']}>
            <div>
              <h2 className={styles['player-name']}>Mastermind</h2>
              <p>
                Quantidade de pares a serem encontrados: <strong>2</strong>
              </p>
            </div>
            <div>
              <p>Número de jogadas:</p>
              <strong>4</strong>
            </div>
          </div>
          <div className={styles['history-card']}>
            <div>
              <h2 className={styles['player-name']}>Mastermind</h2>
              <p>
                Quantidade de pares a serem encontrados: <strong>2</strong>
              </p>
            </div>
            <div>
              <p>Número de jogadas:</p>
              <strong>4</strong>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Score;
