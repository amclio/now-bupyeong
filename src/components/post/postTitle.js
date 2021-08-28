import { styled } from '../../lib/stitches'

const Title = styled('h1', {
  marginTop: 0,
  fontSize: '2rem',
  fontWeight: 700,
})

const PostTitle = ({ children, ...props }) => {
  return <Title {...props}>{children}</Title>
}

export default PostTitle
