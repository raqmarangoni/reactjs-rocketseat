import { Header } from './components/Header'
import { Post } from './Post'
import './styles.css'

export function App() {
  return (
    <div>
      <Header>
        
      </Header>

      <Post
        author="Raquel Rodrigues"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, asperiores eveniet? Deserunt iure ab natus magnam laborum. Dolorem harum ullam vel quia ipsa, incidunt commodi ipsum, dolore maiores eveniet repudiandae."
      />
      <Post
        author="Gabriel Rodrigues"
        content="Novo post"
      />
    </div>
  )
}
