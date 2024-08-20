import { Post } from './Post'
import { Header } from './components/Header'

import styles from './App.module.css'

import './global.css'
import { Sidebar } from './components/Sidebar'


export function App() {

  return (
    <>
      <Header />
     <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post 
          author="esse é o primeiro post" 
          content="essa é macão o brabo do nordeste"
          />     
          <Post 
            author="esse é o segundo post" 
            content="Vasco da gama e nada mais"
          />    
        </main>
      </div> 
    </>
  )
}

