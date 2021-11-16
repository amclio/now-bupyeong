import { styled } from '../../lib/stitches'

const StyledButton = styled('button', {
  all: 'unset',
  cursor: 'pointer',
  background: '#000',
  color: '#FFF',
  borderRadius: '4px',
  transition: 'background 0.2s',
  fontSize: '0.9rem',
  userSelect: 'none',
  '&:hover': {
    background: '$gray9',
  },
})

const Container = styled('div', {
  margin: '0 1.2em',
  padding: '0.4em 0',
})

const Button = ({ children, ...props }) => {
  return (
    <StyledButton {...props}>
      <Container>{children}</Container>
    </StyledButton>
  )
}

export default Button
