import { promises as fs } from 'fs'
import { join } from 'path'
import { remark } from 'remark'
import html from 'remark-html'
import { styled } from '../lib/stitches'

const Container = styled('div', {
  padding: '1.4em',
  margin: '5em 0',
})

const About = ({ content }) => {
  return <Container dangerouslySetInnerHTML={{ __html: content }} />
}

export async function getStaticProps({ locale }) {
  const dir = join(process.cwd(), 'src/assets/about-page')
  const fileDir = `${dir}/${locale}.md`

  const markdown = await fs.readFile(fileDir)
  const content = await remark().use(html).process(markdown)

  return {
    props: {
      content: content.toString(),
    },
  }
}

export default About
