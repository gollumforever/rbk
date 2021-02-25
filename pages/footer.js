import Head from 'next/head'
import styles from '../styles/Footer.module.css'

export default function Footer() {
	return (
			<footer className={styles.footer}>
                <p>© {new Date().getFullYear()} <span className={styles.caps}>Rizwana Akmal Khan</span></p>
                <div className={styles.footer_icons}>
                    <div>
                        <a href="mailto:rizwana.akmal@hotmail.com" target="_blank" rel="noopener" aria-label="Email"><img src="/icons/mail.svg" alt=""/></a>
                        <a href="https://twitter.com/rizbizkits" target="_blank" rel="noopener" aria-label="Twitter"><img src="/icons/twitter.svg" alt=""/></a>
                        <a href="https://www.linkedin.com/in/riz" target="_blank" rel="noopener" aria-label="LinkedIn"><img src="/icons/linkedin.svg" alt=""/></a>
                        <a href="https://v1.rizwanakhan.com/rss.xml" target="_blank" rel="noopener" aria-label="XML"><img src="/icons/rss.svg" alt=""/></a>
                    </div>
                    <div className={styles.footer_icons__rewind}>
                        <a href="https://v1.rizwanakhan.com/" target="_blank" rel="noopener" aria-label="V1"><img src="/icons/skip-back.svg" alt=""/>V1</a>
                    </div>
                </div>
			</footer>
	)
}
