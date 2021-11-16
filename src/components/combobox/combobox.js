import { styled } from '../../lib/stitches'
import { List } from './comboboxList'

const Container = styled('div', {
  position: 'relative',

  [`& ${List}`]: {
    marginTop: '0.3em',
  },
})

const Combobox = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>
}

export default Combobox
