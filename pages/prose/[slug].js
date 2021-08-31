import Head from "next/head";
import Link from "next/link";
import { getAllPostSlugs, getPostData } from "../../lib/posts";
import Date from "../../components/date";

// proseItem.meta = {
//   title: "6 Months at Vercel",
//   description: "A rizbizkits reflection",
// };

export default function proseItem({ postData }) {
  return (
    <>
      <Head>
        <meta
          property="og:title"
          content={postData.title + " | Rizwana Akmal Khan"}
          key="title"
        />
        <meta
          property="og:description"
          content={
            postData.description
              ? postData.description
              : "A rizbizkits reflection"
          }
          key="desc"
        />
        <meta
          name="twitter:title"
          content={postData.title + " | Rizwana Akmal Khan"}
          key="twitter-title"
        />
        <meta
          name="twitter:description"
          content={
            postData.description
              ? postData.description
              : "A rizbizkits reflection"
          }
          key="twitter-desc"
        />
      </Head>
      <div className="outer">
        {/* <Nav></Nav> */}
        {Object.keys(postData).length > 0 ? (
          <section>
            <div className={"pt-3 pb-2"}>
              <h1 className="heading">{postData.title}</h1>
              <p>
                <Date dateString={postData.date} />
              </p>
            </div>
            <div>
              <section className={"pb-3"}>
                <div
                  dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
                />
              </section>
            </div>
          </section>
        ) : (
          <p></p>
        )}

        {/* <Footer></Footer>    */}
      </div>
    </>
  );
}

export async function getStaticPaths() {
  // Return a list of possible value for slug
  const paths = getAllPostSlugs();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.slug
  const postData = await getPostData(params.slug);
  return {
    props: {
      postData,
    },
  };
}
