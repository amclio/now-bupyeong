import { styled } from '../../lib/stitches'

const Container = styled('div', {
  border: '1px solid $gray2',
  borderRadius: 5,
  position: 'relative',
})

const Box = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>
}

export default Box
