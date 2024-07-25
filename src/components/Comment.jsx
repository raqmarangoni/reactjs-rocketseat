import { Avatar } from './Avatar';
import styles from './Comment.module.css';
import { Trash, ThumbsUp } from '@phosphor-icons/react';

export function Comment({ content }) {
  function handleDeleteComment (){
    console.log('deletar')
    setComments()
  }
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/140920598?v=4" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Raquel Rodrigues</strong>
              <time title="01 de Julho às 08:13h" dateTime="2024-07-01 08:13:30">Cerca de 1h atrás</time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
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