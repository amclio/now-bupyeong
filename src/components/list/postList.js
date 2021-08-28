import { styled } from '../../lib/stitches'
import * as AspectRatio from '@radix-ui/react-aspect-ratio'
import { BsArrowRightShort as ArrowIcon } from 'react-icons/bs'

const Flex = styled('div', {
  display: 'flex',
})

const Container = styled(Flex, {
  $$borderColor: '$colors$gray2',

  borderBottom: '1px solid $$borderColor',
  position: 'relative',
})

const Image = styled('img', {
  objectFit: 'cover',
  width: '100%',
  height: '100%',
  borderRadius: 10,
  boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
})

const ImageBox = ({ src, ...props }) => (
  <AspectRatio.Root>
    <Image src={src} alt="" {...props} />
  </AspectRatio.Root>
)

const LeftItem = styled('div', {
  flex: '0 0 100px',
  padding: '1em',
})

const RightItem = styled(Flex, {
  flex: '1',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '1em 0',
})

const Title = styled('div', {
  fontWeight: 700,
  fontSize: '1.1rem',
})

const SubTitle = styled('div', {
  color: '$gray7',
  fontSize: '0.7rem',
})

const IconContainer = styled('div', {
  position: 'absolute',
  right: '1.1em',
})

const PostList = ({ title, subTitle, image, ...props }) => {
  return (
    <Container {...props}>
      <LeftItem>
        <ImageBox src={image} />
      </LeftItem>
      <RightItem>
        <SubTitle>{subTitle}</SubTitle>
        <Title>{title}</Title>
        <IconContainer>
          <ArrowIcon size="1.4em" color="var(--colors-gray7)" />
        </IconContainer>
      </RightItem>
    </Container>
  )
}

export default PostList
export { Container }
