import 'sanitize.css/sanitize.css'
import { globalStyles } from '../lib/stitches'
import { RecoilRoot } from 'recoil'

import Layout from '../components/layout'

function App({ Component, pageProps }) {
  globalStyles()

  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  )
}

export default App
