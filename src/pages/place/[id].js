import { useQuery } from 'react-query'
import { useRouter } from 'next/router'
import { styled } from '../../lib/stitches'
import { getPlace } from '../../lib/api'
import { useLocale } from '../../lib/locale'
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

  const { data, isLoading } = useQuery(['places', id], () => getPlace(id))

  if (isLoading) {
    return (
      <Container>
        <PostPlaceholder />
      </Container>
    )
  }

  const place = data[0]

  return (
    <Container>
      <Post
        title={place.name[locale]}
        subTitle={localeSet[place.type][locale]}
        image={place.photo}
        contents={place.description[locale]}
      />
    </Container>
  )
}

export default PlaceId
