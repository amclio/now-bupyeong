import { styled } from '../../lib/stitches'
import Logo from '../../assets/logo.svg'

const HeaderContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1em',
  background: '#FFF',
  boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
  zIndex: 5,
  position: 'fixed',
  top: 0,
  width: '100%',
})

const HeaderCenter = styled('div', {
  fontWeight: 700,
})

const HeaderSide = styled('div', {})

const Header = (props) => {
  return (
    <HeaderContainer {...props}>
      <HeaderSide></HeaderSide>
      <HeaderCenter>
        <Logo />
      </HeaderCenter>
      <HeaderSide></HeaderSide>
    </HeaderContainer>
  )
}

export default Header
