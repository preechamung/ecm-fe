import "../styles/globals.css"
import Layout from '../components/layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <div className="ml-24 px-9 py-12">
        <Component {...pageProps} />
      </div>
    </Layout>
  )
}

export default MyApp

