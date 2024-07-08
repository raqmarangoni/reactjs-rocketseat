import styles from './Comment.module.css';
import { Trash, ThumbsUp } from '@phosphor-icons/react';

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://avatars.githubusercontent.com/u/140920598?v=4" alt=""></img>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Raquel Rodrigues</strong>
              <time title="01 de Julho às 08:13h" dateTime="2024-07-01 08:13:30">Cerca de 1h atrás</time>
            </div>
            <button title="Deletar comentário">
            <Trash size={20}/>
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>

    </div>
  )
}