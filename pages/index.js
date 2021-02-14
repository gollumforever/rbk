import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Footer from './footer'
import Nav from './nav'

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Rizwana Akmal Khan | Home</title>
				<link rel="preconnect" href="https://fonts.gstatic.com"/>
				<link rel="icon" href="/favicon.ico" />
				<link href="https://fonts.googleapis.com/css2?family=Sarabun:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap" rel="stylesheet"/>
				<link href="https://fonts.googleapis.com/css2?family=Arbutus+Slab&display=swap" rel="stylesheet"/>
			</Head>

			<Nav></Nav>

			<main className={styles.main}>
				<h1 className={styles.h1}>rizwana</h1>
				<p className={styles.eyebrow}>[ridhh-waa-na] <span>noun</span></p>


				{/* <img src="/rizbizkits-logo.png" alt="RBK" className={styles.rbk}/> */}
				<p className={styles.h2}>
				<span className={styles.counter}>1</span>A mix of a <a href="https://github.com/RizBizKits">software developer</a>, polymathic designer, <a href="http://nott.tech/rizpod">podcast rambler</a>, and <a href="https://www.instagram.com/tinkererofwords/">childhood poet</a>. 
				<span className={styles.counter}>2</span>A third culture kid with a suitcase of hellos and goodbyes from homes in different places.
				<span className={styles.counter}>3</span>A work-in-progress.
				</p>

				<p className={styles.h3}>
					<span className={styles.lemon}>Associated with:</span>  co-founding <a href="https://projectfunction.io/">ProjectFunction</a>, working at <a href="https://vercel.com/">Vercel</a>, tweeting <a href="https://twitter.com/rizbizkits">a ton</a>.
				</p>
			</main>

			<Footer></Footer>
		</div>
	)
}
