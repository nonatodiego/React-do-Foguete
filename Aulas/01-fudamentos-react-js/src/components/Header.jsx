import styles from './Header.module.css'

import trapfeed from '../assets/trapfeed.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={trapfeed} alt="Logo tipo do trapstar " />
        </header>
    )
}