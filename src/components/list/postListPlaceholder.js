import ContentLoader from 'react-content-loader'
import { Container } from './postList'

const Placeholder = (props) => (
  <Container>
    <ContentLoader
      speed={2}
      width="100%"
      height={100}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      preserveAspectRatio="none"
      {...props}
    >
      <rect x="16" y="16" rx="10" ry="10" width="68" height="68" />
      <rect x="100" y="32" rx="4" ry="4" width="40" height="11" />
      <rect x="100" y="50" rx="4" ry="4" width="100" height="19" />
    </ContentLoader>
  </Container>
)

export default Placeholder
