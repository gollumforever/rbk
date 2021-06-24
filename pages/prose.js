import { getSortedPostsData } from '../lib/posts'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/allPostsData.module.css'
import Nav from '../components/nav'
import Date from '../components/date'

Prose.meta = {
    title: "Prose",
    description: "A (sometimes) loose conglomeration of my thoughts dressed into words."
}

export default function Prose({ allPostsData }) {
    return (
        <div className="outer">
            {/* <Nav></Nav> */}
            <section>
                <div className={"pt-3 pb-2"}>
                    <h1 className="heading">Prose</h1>
                    <p className="subheading">A (sometimes) loose conglomeration of my thoughts dressed into words i.e. <span className="i">meaningful stuff tends to reside in <a href="https://www.instagram.com/tinkererofwords/" target="_blank">my poems</a> but occasionally, I'll piece together something that's more 'everyday writing'. </span></p>
                </div>
                <div className={"pb-2"}>

                    {/* <p className={"i fade"}>Okay, so, there are no posts just yet. Check back soon?</p> */}

                    {Object.keys(allPostsData).length > 0 ?
                        allPostsData.map(({ slug, date, title }) => (
                            <Link href={"/prose/" + slug} key={slug}>
                                <a className={"axe " + styles.blog_heading}>
                                    <h5>{title}</h5>
                                    <p className={styles.blog_date}><Date dateString={date} /></p>
                                </a>
                            </Link>
                        )) : <p className={"i fade"}>Okay, so, there are no posts just yet. Check back soon?</p>}

                </div>
            </section>

            <div className={styles.footer_outer}>
                {/* <Footer></Footer>    */}
            </div>
        </div>

    )
}


export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

// {Object.keys(allPostsData).length > 0 ?
//     allPostsData.map(({ slug, date, title }) => (
//         <Link href={"/prose"}>
//         {/* <Link href={"/prose/" + slug} key={slug}> */}
//             <a className={"axe " + styles.blog_heading}>
//                 <h5>{title}</h5>
//                 <p className={styles.blog_date}><Date dateString={date}/></p>
//             </a>
//         </Link>  
//     )) : <p className={"i fade"}>Okay, so, there are no posts just yet. Check back soon?</p>}