import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Nav.module.css'
import Image from 'next/image'
import rbk from '../public/rbk-lined-bright.png'


export default function Nav() {
    return (
        <nav className={styles.nav}>            
            <Link href="/"><a className="axe"><Image src={rbk} alt="RBK logo" width={70} height={60}/></a></Link>

            <ul className={styles.nav_list}>
                <li className={styles.nav_list__items}><Link href="/prose"><a>Prose</a></Link></li>
                <li className={styles.nav_list__items}><Link href="/projects"><a>Projects</a></Link></li>
                <li className={styles.nav_list__items}><a href="https://www.instagram.com/tinkererofwords/" target="_blank">Poems</a></li>
            </ul>
        </nav>
    )
}
