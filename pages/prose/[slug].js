import Head from 'next/head'
import Link from 'next/link'
import Nav from '../nav'
import { getAllPostSlugs, getPostData } from '../../lib/posts'
import Footer from '../footer'
import Date from '../../components/date'

export default function proseItem({ postData }) {
    return (
        <div className="outer">
        <Nav></Nav>
        <section>
            <div className={"pt-3 pb-2"}>
                <h1 className="heading">{postData.title}</h1>
                <p><Date dateString={postData.date}/></p>
            </div>
            <div>
            <section className={"pb-3"} >
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </section>
            </div>
        </section>

        <Footer></Footer>   
        </div>
    )
}

export async function getStaticPaths() {
    // Return a list of possible value for slug
    const paths = getAllPostSlugs()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.slug
    const postData = await getPostData(params.slug)
    return {
        props: {
            postData
        }
    }
}