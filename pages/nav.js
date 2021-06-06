import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Nav.module.css'

export default function Nav() {
    return (
        <nav className={styles.nav}>
            
            
            <Link href="/"><a className="axe"><img src="/rbk-lined-bright.png" alt="RBK logo" className={styles.rbk}/></a></Link>

            <ul className={styles.nav_list}>
                <li className={styles.nav_list__items}><Link href="/prose"><a className="axe">Prose</a></Link></li>
                <li className={styles.nav_list__items}><Link href="/projects"><a className="axe">Projects</a></Link></li>
                <li className={styles.nav_list__items}><a className="axe" href="https://www.instagram.com/tinkererofwords/" target="_blank">Poems</a></li>
            </ul>
        </nav>
    )
}
