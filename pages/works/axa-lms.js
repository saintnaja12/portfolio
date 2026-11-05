import { Container, Heading } from '@chakra-ui/react'
import { Title, Project, Item, Screenshot } from '../../components/work'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="AXA Insurance Thailand · LMS">
    <Container>
      <Title>AXA Insurance Thailand · LMS</Title>

      <Project name="Learning Management System for insurance agents" period="UC Connect · 2021" stack={['Next.js', 'TypeScript', 'React-Bootstrap', 'Adobe XD']}>
        <Item>
          Built the E-Testing module, where admins create tests with six question types: single choice, multiple choice, weighted, matching, true/false and paragraph.
        </Item>
        <Item>
          Built the E-Certificate module to list, create and edit certificates.
        </Item>
      </Project>

      <Heading as="h4" fontSize={17} mt={4} mb={3}>
        E-Testing
      </Heading>
      <Screenshot src="/screenshot/LMS-AXA/eTesting-TableList.png" caption="Test list" />
      <Screenshot src="/screenshot/LMS-AXA/eTesting-Create.png" caption="Create a test" />
      <Screenshot src="/screenshot/LMS-AXA/eTesting-Create-2.png" caption="Create a test: question types" />

      <Heading as="h4" fontSize={17} mt={4} mb={3}>
        E-Certificate
      </Heading>
      <Screenshot src="/screenshot/LMS-AXA/eCert-TableList.png" caption="Certificate list" />
      <Screenshot src="/screenshot/LMS-AXA/eCert-Create.png" caption="Create a certificate" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
