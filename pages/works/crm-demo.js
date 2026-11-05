import { Container, Heading } from '@chakra-ui/react'
import { Title, Project, Item, Screenshot } from '../../components/work'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="CRM Demo Version">
    <Container>
      <Title>CRM Demo Version</Title>

      <Project name="CRM demo product" period="UC Connect · 2021" stack={['Nuxt.js', 'Bootstrap Vue', 'Node.js', 'Socket.io']}>
        <Item>
          Built real-time LINE and Messenger chat, including group chat.
        </Item>
        <Item>
          Built master data management, and user and role management so administrators control each user&apos;s permissions.
        </Item>
      </Project>

      <Heading as="h4" fontSize={17} mt={4} mb={3}>
        Chat
      </Heading>
      <Screenshot src="/screenshot/CRM-DEMO/Line-chat.png" caption="LINE chat" />
      <Screenshot src="/screenshot/CRM-DEMO/Line-chatGroup.png" caption="LINE group chat" />
      <Screenshot src="/screenshot/CRM-DEMO/messenger-chat.png" caption="Messenger chat" />

      <Heading as="h4" fontSize={17} mt={4} mb={3}>
        Permissions
      </Heading>
      <Screenshot src="/screenshot/CRM-DEMO/Role.png" caption="Role management" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
