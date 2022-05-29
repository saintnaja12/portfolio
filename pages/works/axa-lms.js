import {
  Container,
  Link,
  List,
  ListItem,
  Box,
  Heading,
  Center
} from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="AXA Insurance Thailand">
    <Container>
      <Title>AXA Insurance Thailand - LMS </Title>
      <P>
        e-learning management system is online teaching management system
        through the Internet network that provides important tools for teachers,
        learners and administrators.
      </P>
      <P>
        I developed the E-Testing module. In this module it is possible to
        create tests for insurance agents. There are 7 types in total: Single
        Choice. Multiple Choice, Weight, Match, True-False, and Paragraph.
      </P>
      <P>And the E-Certificate module To view and edit certificates.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, Next.ts</span>
        </ListItem>
      </List>

      <Box>
        <Heading as="h4" fontSize={16} mt={3} mb={2}>
          <Center>E-Testing - Table List</Center>
        </Heading>
        <Link
          href="http://localhost:3000/screenshot/LMS-AXA/eTesting-TableList.png"
          isExternal
        >
          <WorkImage
            src="/screenshot/LMS-AXA/eTesting-TableList.png"
            alt="AXA Insurance Thailand"
          />
        </Link>
      </Box>

      <Box>
        <Heading as="h4" fontSize={16} mt={3} mb={2}>
          <Center>E-Testing - Create</Center>
        </Heading>
        <Link
          href="http://localhost:3000/screenshot/LMS-AXA/eTesting-Create.png"
          isExternal
        >
          <WorkImage
            src="/screenshot/LMS-AXA/eTesting-Create.png"
            alt="AXA Insurance Thailand"
          />
        </Link>
        <Link
          href="http://localhost:3000/screenshot/LMS-AXA/eTesting-Create-2.png"
          isExternal
        >
          <WorkImage
            src="/screenshot/LMS-AXA/eTesting-Create-2.png"
            alt="AXA Insurance Thailand"
          />
        </Link>
      </Box>

      <Box>
        <Heading as="h4" fontSize={16} mt={3} mb={2}>
          <Center>E-Certificate - Table List</Center>
        </Heading>
        <Link
          href="http://localhost:3000/screenshot/LMS-AXA/eCert-TableList.png"
          isExternal
        >
          <WorkImage
            src="/screenshot/LMS-AXA/eCert-TableList.png"
            alt="AXA Insurance Thailand"
          />
        </Link>
      </Box>

      <Box>
        <Heading as="h4" fontSize={16} mt={3} mb={2}>
          <Center>E-Certificate - Create</Center>
        </Heading>
        <Link
          href="http://localhost:3000/screenshot/LMS-AXA/eCert-Create.png"
          isExternal
        >
          <WorkImage
            src="/screenshot/LMS-AXA/eCert-Create.png"
            alt="AXA Insurance Thailand"
          />
        </Link>
      </Box>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
