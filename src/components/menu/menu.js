import { styled } from '../../lib/stitches'
import MenuItem from './menuItem'
import { FaMap, FaMapMarkerAlt } from 'react-icons/fa'

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'space-around',
  position: 'fixed',
  width: '100%',
  textAlign: 'center',
  padding: '0.8em',
  background: '#FFF',
  minHeight: 55,
  right: 0,
  bottom: 0,
  zIndex: 5,
  borderTopLeftRadius: 30,
  borderTopRightRadius: 30,
  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
})

const Menu = () => {
  return (
    <Container>
      <MenuItem Icon={FaMap} href="/">
        지도
      </MenuItem>
      <MenuItem Icon={FaMapMarkerAlt} href="/place">
        장소
      </MenuItem>
    </Container>
  )
}

export default Menu
