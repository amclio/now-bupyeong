import { styled } from '../../lib/stitches'

const SubTitle = styled('div', {
  color: '$gray6',
})

const PostSubTitle = ({ children, ...props }) => {
  return <SubTitle {...props}>{children}</SubTitle>
}

export default PostSubTitle
