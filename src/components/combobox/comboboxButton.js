import { styled, css } from '../../lib/stitches'
import { BsChevronDown as ArrowIcon } from 'react-icons/bs'
import { forwardRef } from 'react'

const Button = styled('button', {
  all: 'unset',
  cursor: 'pointer',
  border: '1px solid $gray2',
  borderRadius: '3px',
  width: '100%',
})

const Container = styled('div', {
  margin: '0.5em 0.7em',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5em',
})

const StyledArrowIcon = styled(ArrowIcon, {
  marginLeft: 'auto',
})

const Text = styled('div', {
  fontSize: '0.9rem',
})

const ComboboxButton = ({ children, ...props }, ref) => {
  return (
    <Button ref={ref} {...props}>
      <Container>
        <Text>{children}</Text>
        <StyledArrowIcon size="0.8em" />
      </Container>
    </Button>
  )
}

export default forwardRef(ComboboxButton)
