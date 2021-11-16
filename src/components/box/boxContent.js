import { styled } from '../../lib/stitches'

const Container = styled('div', {
  padding: '1em',
})

const Title = styled('div', {
  fontWeight: 'bold',
  fontSize: '1.25em',
  marginBottom: 12,
})

const SubTitle = styled('div', {
  fontSize: '0.9rem',
})

const Content = styled('div', {
  marginTop: '1.5em',
  marginBottom: '1em',
})

const BoxContent = ({ title, subTitle, children, ...props }) => {
  return (
    <Container {...props}>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
      <Content>{children}</Content>
    </Container>
  )
}

export default BoxContent
