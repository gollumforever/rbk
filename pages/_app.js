import Layout from "../components/Layout";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <title>{Component?.meta?.title + " | Rizwana Akmal Khan"}</title>
        <meta name="description" content={Component?.meta?.description} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@rizbizkits" />
        <meta
          name="twitter:title"
          content={Component?.meta?.title + " | Rizwana Akmal Khan"}
        />
        <meta
          name="twitter:description"
          content={Component?.meta?.description}
        />
        <meta
          name="twitter:image"
          content="https://rizwanakhan.com/summary_card.png"
        />
        {Component?.meta?.title ? (
          <meta
            property="og:title"
            content={Component?.meta?.title + " | Rizwana Akmal Khan"}
          />
        ) : (
          ""
        )}

        {Component?.meta?.description ? (
          <meta
            property="og:description"
            content={Component?.meta?.description}
          />
        ) : (
          ""
        )}

        <meta
          property="og:url"
          content={`https://rizwanakhan.com${router.asPath}`}
        />
        <meta
          property="og:image"
          content="https://rizwanakhan.com/summary_card.png"
        />

        <link
          rel="canonical"
          href={`https://rizwanakhan.com${router.asPath}`}
        />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Arbutus+Slab&display=swap"
          rel="stylesheet"
        />
      </Head>
      {router.pathname === "/" ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}

export default MyApp;
