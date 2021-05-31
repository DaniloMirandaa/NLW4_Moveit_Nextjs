
import styles from '../styles/components/ChallengBox.module.css'

export function ChallengBox() {
  const hasActiveChalleng = true;

  return (
    <div className={styles.challendBoxContainer}>
      {hasActiveChalleng ? (
        <div className={styles.challendActive}>
          <header>Ganhe 400 xp</header>

          <main>
            <img src="icons/body.svg"/>
            <strong>Novo desafio</strong>
            <p>Levande e se caminhe por 2 minutos.</p>
          </main>

          <footer>
            <button 
            type="button"
            className={styles.challengFailedButton}
            >
              Falhei
            </button>
            <button 
            type="button"
            className={styles.challengSucceededButton}

            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
          <div className={styles.challengNotActive}>
            <strong>Finalize um ciclo para receber um desafio</strong>
            <p>
              <img src="icons/level-up.svg" alt="Leval Up" />
        Avance de level completando desafios.
        </p>
          </div>
        )}

    </div>

  )
}