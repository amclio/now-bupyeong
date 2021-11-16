import { styled } from '../../lib/stitches'

const Flex = styled('div', {
  display: 'flex',
})

const Container = styled(Flex, {
  minHeight: '2em',
  background: '$gray0',
  width: '100%',
  padding: '1em',
  borderTop: '1px solid $gray2',
  alignItems: 'center',
})

export const BoxBottomLeft = styled(Flex, {})

export const BoxBottomRight = styled(Flex, {
  marginLeft: 'auto',
  justifyContent: 'flex-end',
})

export const BoxBottom = ({ children }) => {
  return <Container>{children}</Container>
}
