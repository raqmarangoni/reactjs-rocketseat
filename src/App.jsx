import { Header } from './components/Header';
import { Post } from './components/Post';
import styles from './App.module.css';
import './global.css'
import { Sidebar } from './components/Sidebar'

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Raquel Rodrigues"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, asperiores eveniet? Deserunt iure ab natus magnam laborum. Dolorem harum ullam vel quia ipsa, incidunt commodi ipsum, dolore maiores eveniet repudiandae."
          />
          <Post
            author="Gabriel Rodrigues"
            content="Novo post"
          />
        </main>
      </div>
    </div>
  )
}
