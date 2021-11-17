import { useQuery } from 'react-query'
import { useRouter } from 'next/router'
import { styled } from '../../lib/stitches'
import { getPlaceById } from '../../lib/api'
import { useLocale } from '../../hooks/use-locale'
import Post, { PostPlaceholder } from '../../components/post'

const localeSet = {
  exit: {
    english: 'Exit',
    korean: '출구',
  },
}

const Container = styled('div', {
  marginTop: 100,
  padding: '1em',
})

const PlaceId = () => {
  const router = useRouter()
  const id = router.query.id

  const locale = useLocale()

  const { data, isLoading } = useQuery(['places', id], () => getPlaceById(id))

  if (isLoading) {
    return (
      <Container>
        <PostPlaceholder />
      </Container>
    )
  }

  return (
    <Container>
      <Post
        title={data.name[locale]}
        subTitle={localeSet[data.type][locale]}
        image={data.photo}
        contents={data.description[locale]}
      />
    </Container>
  )
}

export default PlaceId
