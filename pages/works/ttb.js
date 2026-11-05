import { Container, Heading } from '@chakra-ui/react'
import { Title, Project, Item, Screenshot } from '../../components/work'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="TTB · CRM">
    <Container>
      <Title>TTB · CRM</Title>

      <Project name="Customer relationship management for TTB Broker" period="UC Connect · 2021" stack={['Vue.js', 'Vuexy', 'Node.js', 'Socket.io']}>
        <Item>
          Built the ticket module and real-time LINE chat module, and trained the LINE chatbot.
        </Item>
        <Item>
          Connected tickets to an embedded webview (iframe) with two-way data exchange.
        </Item>
        <Item>
          Built master data management used across the whole project.
        </Item>
      </Project>

      <Heading as="h4" fontSize={17} mt={4} mb={3}>
        LINE chat
      </Heading>
      <Screenshot src="/screenshot/CRM-TTB/chat-line.png" caption="Real-time LINE chat" />

      <Heading as="h4" fontSize={17} mt={4} mb={3}>
        Tickets
      </Heading>
      <Screenshot src="/screenshot/CRM-TTB/ticket-list.png" caption="Ticket list" />
      <Screenshot src="/screenshot/CRM-TTB/ticket-edit.png" caption="Edit a ticket" />

      <Heading as="h4" fontSize={17} mt={4} mb={3}>
        Master data
      </Heading>
      <Screenshot src="/screenshot/CRM-TTB/masterData.png" caption="Master data management" />

      <Heading as="h4" fontSize={17} mt={4} mb={3}>
        Chatbot training
      </Heading>
      <Screenshot src="/screenshot/CRM-TTB/train-bot-line.png" caption="Chatbot intents" />
      <Screenshot src="/screenshot/CRM-TTB/train-bot-line-edit.png" caption="Edit chatbot responses" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
