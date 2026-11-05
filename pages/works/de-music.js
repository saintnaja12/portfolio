import { Container, Heading } from '@chakra-ui/react'
import { Title, Project, Item, Screenshot } from '../../components/work'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="De Music">
    <Container>
      <Title>De Music</Title>

      <Project name="Music NFT app: UX/UI design project" period="UXUI.STUDIO · 2021" stack={['Figma', 'Wireframing', 'UI design']}>
        <Item>
          Designed a music NFT app from wireframes to high-fidelity UI as the final project of the Unlock Skill UX/UI course.
        </Item>
      </Project>

      <Heading as="h4" fontSize={17} mt={4} mb={3}>
        Wireframes
      </Heading>
      <Screenshot src="/screenshot/DeMusic/Wireframe - 1-1.png" caption="Wireframe 1" />
      <Screenshot src="/screenshot/DeMusic/Wireframe - 2-1.png" caption="Wireframe 2" />
      <Screenshot src="/screenshot/DeMusic/Wireframe - 3-1.png" caption="Wireframe 3" />
      <Screenshot src="/screenshot/DeMusic/Wireframe - 4-1.png" caption="Wireframe 4" />
      <Screenshot src="/screenshot/DeMusic/Wireframe - 5-1.png" caption="Wireframe 5" />
      <Screenshot src="/screenshot/DeMusic/Wireframe - 6-1.png" caption="Wireframe 6" />

      <Heading as="h4" fontSize={17} mt={4} mb={3}>
        User interface
      </Heading>
      <Screenshot src="/screenshot/DeMusic/Desktop - 1-1.png" caption="Desktop screen 1" />
      <Screenshot src="/screenshot/DeMusic/Desktop - 2-1.png" caption="Desktop screen 2" />
      <Screenshot src="/screenshot/DeMusic/Desktop - 3-1.png" caption="Desktop screen 3" />
      <Screenshot src="/screenshot/DeMusic/Desktop - 4-1.png" caption="Desktop screen 4" />
      <Screenshot src="/screenshot/DeMusic/Desktop - 5-1.png" caption="Desktop screen 5" />
      <Screenshot src="/screenshot/DeMusic/Desktop - 6-1.png" caption="Desktop screen 6" />
      <Screenshot src="/screenshot/DeMusic/Desktop - 7-1.png" caption="Desktop screen 7" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
