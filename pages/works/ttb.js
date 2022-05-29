import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="The four painters">
    <Container>
      <Title>TTB</Title>
      <P>
        I developed a ticket module, line chat module using vue-socket.io and
        training line chat bot.
      </P>
      <P>
        A ticket that connects to a webview (iframe) and sends/receives data
        back and forth on webview.
      </P>
      <P>
        Master data management and this dataset will be used for the entire
        project.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, Vue.js</span>
        </ListItem>
      </List>

      <Box>
        <Heading as="h4" fontSize={16} mt={3} mb={2}>
          <Center>Line chat</Center>
        </Heading>

        <Link
          href="http://localhost:3000/screenshot/CRM-TTB/chat-line.png"
          isExternal
        >
          <WorkImage src="/screenshot/CRM-TTB/chat-line.png" alt="TTB" />
        </Link>
      </Box>
      <Box>
        <Heading as="h4" fontSize={16} mt={3} mb={2}>
          <Center>Ticket List</Center>
        </Heading>

        <Link
          href="http://localhost:3000/screenshot/CRM-TTB/ticket-list.png"
          isExternal
        >
          <WorkImage src="/screenshot/CRM-TTB/ticket-list.png" alt="TTB" />
        </Link>
      </Box>
      <Box>
        <Heading as="h4" fontSize={16} mt={3} mb={2}>
          <Center>Ticket Edit</Center>
        </Heading>

        <Link
          href="http://localhost:3000/screenshot/CRM-TTB/ticket-edit.png"
          isExternal
        >
          <WorkImage src="/screenshot/CRM-TTB/ticket-edit.png" alt="TTB" />
        </Link>
      </Box>
      <Box>
        <Heading as="h4" fontSize={16} mt={3} mb={2}>
          <Center>Master Data</Center>
        </Heading>

        <Link
          href="http://localhost:3000/screenshot/CRM-TTB/masterData.png"
          isExternal
        >
          <WorkImage src="/screenshot/CRM-TTB/masterData.png" alt="TTB" />
        </Link>
      </Box>
      <Box>
        <Heading as="h4" fontSize={16} mt={3} mb={2}>
          <Center>Training Line Chat Bot</Center>
        </Heading>

        <Link
          href="http://localhost:3000/screenshot/CRM-TTB/train-bot-line.png"
          isExternal
        >
          <WorkImage src="/screenshot/CRM-TTB/train-bot-line.png" alt="TTB" />
        </Link>
        <Link
          href="http://localhost:3000/screenshot/CRM-TTB/train-bot-line-edit.png"
          isExternal
        >
          <WorkImage
            src="/screenshot/CRM-TTB/train-bot-line-edit.png"
            alt="TTB"
          />
        </Link>
      </Box>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
