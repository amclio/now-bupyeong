import 'sanitize.css/sanitize.css'
import { globalStyles } from '../lib/stitches'
import { RecoilRoot } from 'recoil'
import { QueryClient, QueryClientProvider } from 'react-query'
import { IdProvider as RadixIdProvider } from '@radix-ui/react-id'

import Head from 'next/head'
import Layout from '../components/layout'

const queryClient = new QueryClient()

function App({ Component, pageProps }) {
  globalStyles()

  return (
    <>
      <Head>
        <title>지금, 부평상가</title>
        <link rel="prefetch" href="/intro-images/1-marker.jpg" />
      </Head>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <RadixIdProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </RadixIdProvider>
        </QueryClientProvider>
      </RecoilRoot>
    </>
  )
}

export default App
