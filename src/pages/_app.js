import 'sanitize.css/sanitize.css'
import { globalStyles } from '../lib/stitches'
import { RecoilRoot } from 'recoil'
import { QueryClient, QueryClientProvider } from 'react-query'

import Head from 'next/head'
import Layout from '../components/layout'

const queryClient = new QueryClient()

function App({ Component, pageProps }) {
  globalStyles()

  return (
    <>
      <Head>
        <title>지금, 부평상가</title>
      </Head>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </QueryClientProvider>
      </RecoilRoot>
    </>
  )
}

export default App
