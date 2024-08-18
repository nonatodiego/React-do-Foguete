import { Post } from './Post'
import { Header } from './components/Header'

import './global.css'


export function App() {

  return (
    <>
      <Header />
      <Post 
        author="esse é o primeiro post" 
        content="essa é macão o brabo do nordeste"
      />     
      <Post 
        author="esse é o segundo post" 
        content="Vasco da gama e nada mais"
      />     
    </>
  )
}

