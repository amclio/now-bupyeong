import { styled } from '../../lib/stitches'
import PostTitle from './postTitle'
import PostSubTitle from './postSubTitle'
import PostPhotos from './postPhotos'
import PostContents from './postContents'
import PostPlaceholder from './postPlaceholder'

const Container = styled('div', {
  paddingBottom: 80,
})

const StyledTitle = styled(PostTitle, {
  marginBottom: '1em',
})

const StyledContents = styled(PostContents, {
  marginTop: '2em',
})

const Post = ({ title, subTitle, image, contents, ...props }) => {
  const imageUrls = typeof image === 'string' ? [image] : image

  return (
    <Container {...props}>
      <PostSubTitle>{subTitle}</PostSubTitle>
      <StyledTitle>{title}</StyledTitle>
      <PostPhotos images={imageUrls} />
      <StyledContents contents={contents} />
    </Container>
  )
}

export default Post
