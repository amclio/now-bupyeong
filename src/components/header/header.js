import NextLink from 'next/link'
import { styled } from '../../lib/stitches'
import Logo from '../../assets/logo.svg'
import { GoMarkGithub as GithubIcon } from 'react-icons/go'
import { BsInfoCircleFill as InfoIcon } from 'react-icons/bs'

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

const Link = styled('a', {
  color: '$gray7',
})

const Header = (props) => {
  return (
    <HeaderContainer {...props}>
      <HeaderSide>
        <NextLink href="/about" passHref>
          <Link>
            <InfoIcon size="0.8em" />
          </Link>
        </NextLink>
      </HeaderSide>
      <HeaderCenter>
        <NextLink href="/" passHref>
          <Link>
            <Logo />
          </Link>
        </NextLink>
      </HeaderCenter>
      <HeaderSide>
        <Link href="https://github.com/Linkmclio/now-bupyeong">
          <GithubIcon size="0.8em" />
        </Link>
      </HeaderSide>
    </HeaderContainer>
  )
}

export default Header
