import { styled } from '../../lib/stitches'

const Container = styled('div', {})

const Line = styled('p', {})

const PostContents = ({ contents, ...props }) => {
  return (
    <Container {...props}>
      {contents.map((words, i) => (
        <Line key={i}>{words}</Line>
      ))}
    </Container>
  )
}

export default PostContents
