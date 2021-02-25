import Head from 'next/head'
import styles from '../styles/Nav.module.css'

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <img src="/rbk-lined-bright.png" alt="RBK logo" className={styles.rbk}/>

            <ul className={styles.nav_list}>
                <li className={styles.nav_list__items}><a href="#">Prose</a></li>
                <li className={styles.nav_list__items}><a href="#">Projects</a></li>
                <li className={styles.nav_list__items}><a href="#">Poems</a></li>
            </ul>
        </nav>
    )
}
