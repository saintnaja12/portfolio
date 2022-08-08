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

const uc = () => (
  <Layout title="UC Connect Co.,Ltd.">
    <Container>
      <Title>UC Connect Co.,Ltd.</Title>
      <Heading as="h4" fontSize={16} mt={3} mb={2}>
        <Center>EMCS Thai Co., Ltd. - CRM</Center>
      </Heading>
      <P>
        I developed a report module for all data from MongoDB database. Display
        data in graph format and can be managed in CRUD.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Nuxt.js, Bootstrap Vue, UI Kit</span>
        </ListItem>
        <ListItem>
          <Meta>Library</Meta>
          <span>Billboard Chart</span>
        </ListItem>
      </List>
      <Divider mb={4} />
      <Heading as="h4" fontSize={16} mt={3} mb={2}>
        <Center>AXA Insurance Thailand - LMS</Center>
      </Heading>
      <P>
        e-learning management system is online teaching management system
        through the Internet network that provides important tools for teachers,
        learners and administrators.
      </P>
      <P>Design Wireframe and UI before development system.</P>
      <P>
        I developed the E-Testing module. In this module it is possible to
        create tests for insurance agents. There are 7 types in total: Single
        Choice. Multiple Choice, Weight, Match, True-False, and Paragraph.
      </P>
      <P>And the E-Certificate module To view and edit certificates.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Next.ts, React-Bootstrap</span>
        </ListItem>
        <ListItem>
          <Meta>TOOL</Meta>
          <span>Adobe XD</span>
        </ListItem>
      </List>
      <Divider my={2} />
      <Heading as="h4" fontSize={16} mt={3} mb={2}>
        <Center>CRM Demo Version</Center>
      </Heading>
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
          <span>Nuxt.js, Bootstrap Vue</span>
        </ListItem>
        <ListItem>
          <Meta>Library</Meta>
          <span>Vue-socket.io</span>
        </ListItem>
      </List>
      <Divider my={2} />
      <Heading as="h4" fontSize={16} mt={3} mb={2}>
        <Center>TTB Broker</Center>
      </Heading>
      <P>CRM stands for Customer Relationship Management System.</P>
      <P>
        I developed a ticket module, line chat and messenger chat module using
        vue-socket.io and training line chat bot.
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
          <span>Vue.js, Vuexy</span>
        </ListItem>
        <ListItem>
          <Meta>Library</Meta>
          <span>Vue-socket.io</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default uc
export { getServerSideProps } from '../../components/chakra'
