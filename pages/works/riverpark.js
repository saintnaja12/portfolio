import {
  Container,
  Link,
  List,
  ListItem,
  Box,
  Heading,
  Center,
  Divider
} from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const riverpark = () => (
  <Layout title="Riverpark Consultant Company Limited">
    <Container>
      <Title>Riverpark Consultant Company Limited</Title>
      <Heading as="h4" fontSize={16} mt={3} mb={2}>
        <Center>
          Tokio marine Life Insurance (Thailand) PCL. - PDPA Agent Project (DMS)
        </Center>
      </Heading>
      <P>
        DMS stands for Document Management System, which is a comprehensive
        document management system in digital manner. Helping to store documents
        (Store), manage documents (Manage), track documents (Track) in
        electronic documents (Electronic).
      </P>
      <P>Work in an agile culture</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Next.js, Material-UI</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default riverpark
export { getServerSideProps } from '../../components/chakra'
