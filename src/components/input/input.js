import { styled } from '../../lib/stitches'

const Input = styled('input', {
  all: 'unset',
  border: '1px solid $gray2',
  borderRadius: '3px',
  padding: '0 0.5em',
  height: '2.3rem',
  fontSize: '0.9rem',
  boxSizing: 'border-box',
  '&:focus': {
    border: '1px solid #000',
  },
})

export default Input
