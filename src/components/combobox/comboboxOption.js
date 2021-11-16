import { styled } from '../../lib/stitches'
import { forwardRef } from 'react'

export const Option = styled('li', {
  all: 'unset',
  display: 'block',
  lineHeight: '220%',
  cursor: 'pointer',
  borderRadius: '3px',
  padding: '0 0.7em',
  fontSize: '0.9rem',
  background: '#FFF',
  transition: 'background 0.08s',
  zIndex: 5,
  variants: {
    activated: {
      true: {
        background: '$gray1',
      },
    },
  },
})

const ComboboxOption = ({ children, ...props }, ref) => {
  return (
    <Option ref={ref} {...props}>
      {children}
    </Option>
  )
}

export default forwardRef(ComboboxOption)
