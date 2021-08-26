import 'sanitize.css/sanitize.css'
import { globalStyles } from '../lib/stitches'
import { RecoilRoot } from 'recoil'
import { QueryClient, QueryClientProvider } from 'react-query'

import Layout from '../components/layout'

const queryClient = new QueryClient()

function App({ Component, pageProps }) {
  globalStyles()

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </RecoilRoot>
  )
}

export default App
