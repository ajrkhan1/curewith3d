import Layout from '../components/Layout/Layout'
import { PagesTopLoader } from 'nextjs-toploader/pages';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <PagesTopLoader />
    <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp