import Head from 'next/head'
import styles from '../styles/Nav.module.css'

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <img src="/rbk-lined-bright.png" alt="RBK" className={styles.rbk}/>

            {/* <img src="/rizbizkits-logo.png" alt="RBK" className={styles.rbk}/> */}

            <ul className={styles.nav_list}>
                <li className={styles.nav_list__items}><a href="/blog">Prose</a></li>
                <li className={styles.nav_list__items}><a href="/blog">Projects</a></li>
                <li className={styles.nav_list__items}><a href="/blog">Poems</a></li>

            </ul>
        </nav>
    )
}
