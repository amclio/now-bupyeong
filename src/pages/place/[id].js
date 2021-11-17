import { useQuery } from 'react-query'
import { useRouter } from 'next/router'
import { styled } from '../../lib/stitches'
import { getPlaceById } from '../../lib/api'
import { useTranslation, useLocale } from '../../hooks'
import Post, { PostPlaceholder } from '../../components/post'

const Container = styled('div', {
  marginTop: 100,
  padding: '1em',
})

const PlaceId = () => {
  const router = useRouter()
  const id = router.query.id

  const translation = useTranslation()
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
        subTitle={translation.detail[data.type]}
        image={data.photo}
        contents={data.description[locale]}
      />
    </Container>
  )
}

export default PlaceId
