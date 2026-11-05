import NextLink from 'next/link'
import { Container, Link } from '@chakra-ui/react'
import {
  Title,
  CompanyHeader,
  Project,
  Item
} from '../../components/work'
import Layout from '../../components/layouts/article'

const Screens = ({ href }) => (
  <NextLink href={href} passHref>
    <Link>View screenshots →</Link>
  </NextLink>
)

const Uc = () => (
  <Layout title="UC Connect">
    <Container>
      <Title>UC Connect</Title>

      <CompanyHeader
        logo="/screenshot/UC.jpg"
        company="UC Connect Co., Ltd."
        role="Front-end Developer"
        period="Jan 2021 – Feb 2022"
        location="Bangkok"
      />

      <Project
        name="AXA Insurance Thailand · Learning Management System"
        stack={['Next.js', 'TypeScript', 'React-Bootstrap', 'Adobe XD']}
        links={<Screens href="/works/axa-lms" />}
      >
        <Item>
          Designed the wireframes and UI for stock management, monthly plan,
          training plan and class management before development.
        </Item>
        <Item>
          Built the E-Testing module, where admins create tests for insurance
          agents with six question types: single choice, multiple choice,
          weighted, matching, true/false and paragraph.
        </Item>
        <Item>Built the E-Certificate module to view and edit certificates.</Item>
      </Project>

      <Project
        name="TTB · CRM"
        stack={['Vue.js', 'Vuexy', 'Socket.io']}
        links={<Screens href="/works/ttb" />}
      >
        <Item>
          Built the ticket module and real-time LINE and Messenger chat modules,
          and trained the LINE chatbot.
        </Item>
        <Item>
          Connected tickets to an embedded webview (iframe) with two-way data
          exchange, and built master data management for the whole project.
        </Item>
      </Project>

      <Project
        name="CRM Demo Version"
        stack={['Nuxt.js', 'Bootstrap Vue', 'Socket.io']}
        links={<Screens href="/works/crm-demo" />}
      >
        <Item>Built the LINE chat module with real-time messaging.</Item>
        <Item>
          Built master data management, and user and role management so
          administrators control each user&apos;s permissions.
        </Item>
      </Project>

      <Project
        name="EMCS Thai · CRM Phase 2"
        stack={['Nuxt.js', 'Bootstrap Vue', 'UIkit', 'Billboard.js', 'MongoDB']}
      >
        <Item>
          Built a report module that charts data from MongoDB, with full CRUD
          for data management.
        </Item>
      </Project>
    </Container>
  </Layout>
)

export default Uc
export { getServerSideProps } from '../../components/chakra'
