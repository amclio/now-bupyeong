import { styled } from '../../lib/stitches'
import { Option } from './comboboxOption'
import { forwardRef } from 'react'

export const List = styled('ul', {
  all: 'unset',
  display: 'block',
  position: 'absolute',
  width: '100%',
  padding: '0.2em 0',
  borderRadius: '3px',
  boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
  background: '#FFF',
  zIndex: 3,
  [`& ${Option}`]: {
    margin: '0 3px',
  },
})

const ComboboxList = ({ children, ...props }, ref) => {
  return (
    <List ref={ref} {...props}>
      {children}
    </List>
  )
}

export default forwardRef(ComboboxList)
