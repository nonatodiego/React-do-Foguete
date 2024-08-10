import { Post } from './Post'
import { Header } from './components/Header'

import './styles.css'


export function App() {

  return (
    <>
      <Header />
      <Post 
        author="Diego Nonato" 
        content="essa é macão o brabo do nordeste"
      />
      <Post 
        author="Laisa Vitoria" 
        content="oi ola hello world"
      />
    </>
  )
}

