import { PencilLine } from 'phosphor-react'
import styles from './Sidebar.module.css'
export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1500099817043-86d46000d58f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />

            <div className={styles.profile}>
                <img
                    className={styles.avatar} 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjSbtjKh7U-QRTa_BU01Hmj8m0NG5jKIMpeQ&s"
                />
                <strong>Japa</strong>
                <span>Universal Music</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}