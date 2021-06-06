import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Nav from './nav'
import Footer from './footer'

export default function Projects() {
    return (
        <div className="outer">
        <Nav></Nav>
        <section>
            <div className={"pt-3 pb-2"}>
                <p className={"i fade"}>Sit tight, this page isn't ready just yet. Check back soon?</p>
            </div>
        </section>

        <Footer></Footer>   
        </div>
    )
}