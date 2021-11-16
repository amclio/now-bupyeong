import NextLink from 'next/link'
import { styled } from '../../lib/stitches'
import Logo from '../../assets/logo.svg'
import { BsGear as SettingIcon } from 'react-icons/bs'
import { BsInfo as InfoIcon } from 'react-icons/bs'

const HeaderContainer = styled('div', {
  display: 'flex',
  padding: '1em',
  background: '#FFF',
  boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
  zIndex: 5,
  position: 'fixed',
  top: 0,
  width: '100%',
})

const HeaderCenter = styled('div', {
  flex: '0',
  fontWeight: 700,
})

const HeaderSide = styled('div', {
  flex: 1,
})

const HeaderLeft = styled(HeaderSide, {
  textAlign: 'left',
})

const HeaderRight = styled(HeaderSide, {
  textAlign: 'right',
})

const Link = styled('a', {
  color: '$gray7',
})

const Header = (props) => {
  return (
    <HeaderContainer {...props}>
      <HeaderLeft>
        <NextLink href="/about" passHref>
          <Link>
            <InfoIcon size="1.5em" />
          </Link>
        </NextLink>
      </HeaderLeft>
      <HeaderCenter>
        <NextLink href="/" passHref>
          <Link>
            <Logo />
          </Link>
        </NextLink>
      </HeaderCenter>
      <HeaderRight>
        <NextLink href="/setting" passHref>
          <Link>
            <SettingIcon size="1em" />
          </Link>
        </NextLink>
      </HeaderRight>
    </HeaderContainer>
  )
}

export default Header
