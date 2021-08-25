import Header from '../header'
import Menu from '../menu'
import { useSetWindowSize } from '../../states/windowSizeState'

const Layout = ({ children }) => {
  const sizeListener = useSetWindowSize()

  return (
    <>
      {sizeListener}
      <Header />
      <Menu />
      {children}
    </>
  )
}

export default Layout
