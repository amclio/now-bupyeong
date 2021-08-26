import * as AspectRatio from '@radix-ui/react-aspect-ratio'
import { styled } from '../../lib/stitches'

const Flex = styled('div', {
  display: 'flex',
  gap: 4,
})

const FlexItem = styled('div', {
  flex: '1',
})

const Image = styled('img', {
  objectFit: 'cover',
  width: '100%',
  height: '100%',
})

const AspectRatioItem = ({ image }) => (
  <AspectRatio.Root ratio={16 / 9}>
    <Image src={image} alt="" />
  </AspectRatio.Root>
)

const PostPhotos = ({ images, ...props }) => {
  const imageCount = images.length

  if (imageCount <= 2) {
    return (
      <Flex {...props}>
        {images.map((src, i) => (
          <AspectRatioItem key={i} image={src} />
        ))}
      </Flex>
    )
  }

  if (imageCount >= 3) {
    return (
      <Flex {...props}>
        <AspectRatioItem image={images[0]} />
        <Flex css={{ flex: '0 0 35%', flexDirection: 'column' }}>
          <FlexItem>
            <Image src={images[1]} alt="" />
          </FlexItem>
          <FlexItem>
            <Image src={images[2]} alt="" />
          </FlexItem>
        </Flex>
      </Flex>
    )
  }
}

export default PostPhotos
