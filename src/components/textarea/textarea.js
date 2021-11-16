import { styled } from '../../lib/stitches'

const Textarea = styled('textarea', {
  all: 'unset',
  border: '1px solid $gray2',
  borderRadius: '3px',
  fontSize: '0.9rem',
  boxSizing: 'border-box',
  padding: '0.5em',
  resize: 'none',
  '&:focus': {
    border: '1px solid #000',
  },
})

export default Textarea
