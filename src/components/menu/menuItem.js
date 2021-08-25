import { styled } from '../../lib/stitches'
import Link from 'next/link'
import { useRouter } from 'next/router'

const LinkContainer = styled('a', {
  color: 'inherit',
  textDecoration: 'none',
})

const Text = styled('div', {
  color: '$gray6',
  fontSize: '0.9rem',
  marginTop: 4,
  variants: {
    active: {
      true: {
        color: '#000',
      },
    },
  },
})

const MenuItem = ({ href, Icon, children, ...props }) => {
  const { pathname } = useRouter()

  const isPathMatch = href === pathname ? true : false

  return (
    <Link href={href} passHref>
      <LinkContainer {...props}>
        {Icon && (
          <Icon color={isPathMatch ? '#000000' : '#868e96'} size="1.3em" />
        )}
        <Text active={isPathMatch}>{children}</Text>
      </LinkContainer>
    </Link>
  )
}

export default MenuItem
