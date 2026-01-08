import Layout from '../components/Layout/Layout'
import { PagesTopLoader } from 'nextjs-toploader/pages';
import '../styles/globals.css'
import { useRouter } from "next/router";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
   const canonicalUrl =
    "https://www.curewith3d.com" +
    (router.asPath === "/" ? "" : router.asPath);
  return (
    <Layout>
       <Head>
        <link rel="canonical" href={canonicalUrl} /> 
      </Head>
      <PagesTopLoader />
    <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp