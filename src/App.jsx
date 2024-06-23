import { Post } from './Post'

export function App() {
  return (
    <div>
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
