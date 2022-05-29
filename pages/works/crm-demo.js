import {
  Container,
  Link,
  List,
  ListItem,
  Heading,
  Center,
  Box
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="CRM Demo Version">
    <Container>
      <Title>CRM Demo Version</Title>
      <P>CRM stands for Customer Relationship Management System.</P>
      <P>I developed a chat-line module using vue-socket.io</P>
      <P>
        Master data management and this dataset will be used for the entire
        project.
      </P>
      <P>
        And user and role management (permission module) is that the user will
        be limited by the administrator
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>STACK</Meta>
          <span>NodeJS, Nust.js</span>
        </ListItem>
      </List>

      <Box>
        <Heading as="h4" fontSize={16} mt={3} mb={2}>
          <Center>Line chat</Center>
        </Heading>

        <Link
          href="https://teetouch-portfolio.vercel.app/screenshot/CRM-DEMO/Line-chat.png"
          isExternal
        >
          <WorkImage
            src="/screenshot/CRM-DEMO/Line-chat.png"
            alt="CRM Demo Version"
          />
        </Link>
      </Box>

      <Box>
        <Heading as="h4" fontSize={16} mt={3} mb={2}>
          <Center>Line chat group</Center>
        </Heading>
        <Link
          href="https://teetouch-portfolio.vercel.app/screenshot/CRM-DEMO/Line-chatGroup.png"
          isExternal
        >
          <WorkImage
            src="/screenshot/CRM-DEMO/Line-chatGroup.png"
            alt="CRM Demo Version"
          />
        </Link>
      </Box>

      <Box>
        <Heading as="h4" fontSize={16} mt={3} mb={2}>
          <Center>Messenger chat</Center>
        </Heading>
        <Link
          href="https://teetouch-portfolio.vercel.app/screenshot/CRM-DEMO/messenger-chat.png"
          isExternal
        >
          <WorkImage
            src="/screenshot/CRM-DEMO/messenger-chat.png"
            alt="CRM Demo Version"
          />
        </Link>
      </Box>
      <Box>
        <Heading as="h4" fontSize={16} mt={3} mb={2}>
          <Center>Messenger chat</Center>
        </Heading>
        <Link
          href="https://teetouch-portfolio.vercel.app/screenshot/CRM-DEMO/Role.png"
          isExternal
        >
          <WorkImage
            src="/screenshot/CRM-DEMO/Role.png"
            alt="CRM Demo Version"
          />
        </Link>
      </Box>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
