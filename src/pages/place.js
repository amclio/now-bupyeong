import { useQuery } from 'react-query'
import Link from 'next/link'
import { styled } from '../lib/stitches'
import { PostList, PostListPlaceholder } from '../components/list'
import { getPlace } from '../lib/api'
import { useTranslation, useLocale } from '../hooks'

const Container = styled('div', {
  marginTop: 57,
  marginBottom: 100,
})

const LinkTag = styled('a', {
  color: '#000',
  textDecoration: 'none',
})

const localeSet = {
  exit: {
    english: 'Exit',
    korean: '출구',
  },
}

const Place = () => {
  const translation = useTranslation()
  const locale = useLocale()

  const { data, isLoading } = useQuery('places', getPlace)

  if (isLoading) {
    return (
      <Container>
        {[0, 0, 0, 0, 0].map((item, i) => (
          <>
            <PostListPlaceholder key={i} />
          </>
        ))}
      </Container>
    )
  }

  return (
    <Container>
      {data.map(({ id, name, type, photo }) => (
        <Link key={id} href={`/place/${id}`} passHref>
          <LinkTag>
            <PostList
              title={name[locale]}
              subTitle={translation.detail[type]}
              image={photo[0]}
            />
          </LinkTag>
        </Link>
      ))}
    </Container>
  )
}

export default Place
