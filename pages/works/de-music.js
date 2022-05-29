import {
  Box,
  Container,
  Link,
  List,
  ListItem,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="De Music">
    <Container>
      <Title>De Music</Title>
      <P>Music NFT design project</P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Tool</Meta>
          <span>Figma</span>
        </ListItem>
      </List>

      <Box>
        <Heading as="h4" fontSize={16} mt={3} mb={2}>
          <Center>Wireframe</Center>
        </Heading>

        <Link
          href="http://localhost:3000/screenshot/DeMusic/Wireframe - 1-1.png"
          isExternal
        >
          <WorkImage src="/screenshot/DeMusic/Wireframe - 1-1.png" alt="TTB" />
        </Link>
        <Link
          href="http://localhost:3000/screenshot/DeMusic/Wireframe - 2-1.png"
          isExternal
        >
          <WorkImage src="/screenshot/DeMusic/Wireframe - 2-1.png" alt="TTB" />
        </Link>
        <Link
          href="http://localhost:3000/screenshot/DeMusic/Wireframe - 3-1.png"
          isExternal
        >
          <WorkImage src="/screenshot/DeMusic/Wireframe - 3-1.png" alt="TTB" />
        </Link>
        <Link
          href="http://localhost:3000/screenshot/DeMusic/Wireframe - 4-1.png"
          isExternal
        >
          <WorkImage src="/screenshot/DeMusic/Wireframe - 4-1.png" alt="TTB" />
        </Link>
        <Link
          href="http://localhost:3000/screenshot/DeMusic/Wireframe - 5-1.png"
          isExternal
        >
          <WorkImage src="/screenshot/DeMusic/Wireframe - 5-1.png" alt="TTB" />
        </Link>
        <Link
          href="http://localhost:3000/screenshot/DeMusic/Wireframe - 6-1.png"
          isExternal
        >
          <WorkImage src="/screenshot/DeMusic/Wireframe - 6-1.png" alt="TTB" />
        </Link>
      </Box>
      <Box>
        <Heading as="h4" fontSize={16} mt={3} mb={2}>
          <Center>User Interface</Center>
        </Heading>

        <Link
          href="http://localhost:3000/screenshot/DeMusic/Desktop - 1-1.png"
          isExternal
        >
          <WorkImage src="/screenshot/DeMusic/Desktop - 1-1.png" alt="TTB" />
        </Link>
        <Link
          href="http://localhost:3000/screenshot/DeMusic/Desktop - 2-1.png"
          isExternal
        >
          <WorkImage src="/screenshot/DeMusic/Desktop - 2-1.png" alt="TTB" />
        </Link>
        <Link
          href="http://localhost:3000/screenshot/DeMusic/Desktop - 3-1.png"
          isExternal
        >
          <WorkImage src="/screenshot/DeMusic/Desktop - 3-1.png" alt="TTB" />
        </Link>
        <Link
          href="http://localhost:3000/screenshot/DeMusic/Desktop - 4-1.png"
          isExternal
        >
          <WorkImage src="/screenshot/DeMusic/Desktop - 4-1.png" alt="TTB" />
        </Link>
        <Link
          href="http://localhost:3000/screenshot/DeMusic/Desktop - 5-1.png"
          isExternal
        >
          <WorkImage src="/screenshot/DeMusic/Desktop - 5-1.png" alt="TTB" />
        </Link>
        <Link
          href="http://localhost:3000/screenshot/DeMusic/Desktop - 6-1.png"
          isExternal
        >
          <WorkImage src="/screenshot/DeMusic/Desktop - 6-1.png" alt="TTB" />
        </Link>
      </Box>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
