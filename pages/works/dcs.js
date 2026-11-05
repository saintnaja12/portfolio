import {
  Container,
  List,
  ListItem,
  Heading,
  Center,
  Divider,
  Text,
  UnorderedList
} from '@chakra-ui/react'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = ({ name, period, children, stack, tools }) => (
  <>
    <Heading as="h4" fontSize={16} mt={3} mb={1}>
      <Center textAlign="center">{name}</Center>
    </Heading>
    <Text fontSize={14} opacity={0.7} textAlign="center" mb={2}>
      {period}
    </Text>
    <UnorderedList ml={6} spacing={1}>
      {children}
    </UnorderedList>
    <List ml={4} my={4}>
      {stack && (
        <ListItem>
          <Meta>Stack</Meta>
          <span>{stack}</span>
        </ListItem>
      )}
      {tools && (
        <ListItem>
          <Meta>Tools</Meta>
          <span>{tools}</span>
        </ListItem>
      )}
    </List>
    <Divider my={2} />
  </>
)

const Item = ({ children }) => <ListItem>{children}</ListItem>

const dcs = () => (
  <Layout title="DCS (Premier Group)">
    <Container>
      <Title>DCS (Premier Group) - Senior Software Engineer</Title>
      <P>
        Since June 2024 I have worked in the Technical Programming Unit at DCS,
        delivering <Text as="b">front-end development</Text>,{' '}
        <Text as="b">UI design</Text> and <Text as="b">back-end APIs</Text>{' '}
        for enterprise clients, from requirements through SIT and UAT to
        production go-live.
      </P>
      <Divider my={4} />

      <Project
        name="MSIG - Marine Insurance Portal"
        period="Oct 2025 - Present"
        stack="Angular, TypeScript, Jest"
        tools="Figma, Jira, GitLab"
      >
        <Item>
          <Text as="b">Phase 1.1 went live in production in Dec 2025.</Text>{' '}
          Built user and role management, node &amp; email and group
          maintenance, new login and password-recovery flows, and encrypted
          data in local storage.
        </Item>
        <Item>
          <Text as="b">Phase 1.2</Text> (from Jan 2026): set up the front-end
          structure with Jest unit tests and built the policy, certificate
          (edit, inquiry, copy, endorse, cancel), monthly processing, request
          authorization, report and system-setting modules from my own Figma
          mock-ups.
        </Item>
        <Item>
          Wrote the premium calculation formulas for endorsing and cancelling
          policies in every policy class, which the client confirmed, and
          documented the flows for SIT.
        </Item>
      </Project>

      <Project
        name="Nissan Leasing - Loan Insurance System (integrated with MSIG)"
        period="Jun 2026 - Present"
        stack="Java, JavaScript, REST API, Webhook"
        tools="GitLab CI/CD, GitHub, Postman"
      >
        <Item>
          Built the system full-stack. The front-end covers OTP login, a
          premium calculator for hire-purchase and balloon loans, draft and
          submit flows, PDF application forms, policy inquiry and Excel export.
        </Item>
        <Item>
          Built back-end APIs that connect to MSIG services, including a webhook
          that updates policies, plus API logging, email notifications and
          reconcile reports.
        </Item>
        <Item>
          Fixed issues found in penetration testing and patched dependency
          vulnerabilities. The system passed UAT and is being prepared for
          production go-live.
        </Item>
      </Project>

      <Project
        name="Krungthai Bank (KTB) - DLP (Data Loss Prevention) Platform"
        period="Aug - Sep 2025"
        tools="Jira"
      >
        <Item>
          Built the front-end for Data Asset Monitoring &amp; Remediation,
          Quarantined Email, Inquiry, Department and Approval Process, applied
          the bank&apos;s theme, and connected the pages to the APIs.
        </Item>
      </Project>

      <Project
        name="Denso - Frontier, CSA, Claim & Inventory Control"
        period="Jan 2025 - Apr 2026"
        tools="Figma, Mazer Admin, Jira"
      >
        <Item>
          <Text as="b">Frontier Phase 2:</Text> Repositioning Plan input with a
          downloadable report, plus Daily Usage Plan forms and actual/plan
          tables.
        </Item>
        <Item>
          <Text as="b">CSA (New Design):</Text> rebuilt the UI through three
          rounds of mock-up reviews with the client, revised the whole system
          from feedback and deployed it to the test environment.
        </Item>
        <Item>
          <Text as="b">Claim and Inventory Control:</Text> work breakdown and
          feedback fixes for the Claim system, and a full-stack CRUD module for
          Inventory Control.
        </Item>
      </Project>

      <Project
        name="Thai Honda - Corporate Web Portal & Web Career"
        period="Jul - Dec 2024"
        tools="Figma, Visily, GitLab"
      >
        <Item>
          Designed desktop and mobile UI in Figma, with reusable components
          and user-flow presentations for the client.
        </Item>
        <Item>
          Designed a 10-module admin back-office in about three weeks: users,
          roles &amp; permissions, consent, homepage, job careers, job
          applications, news &amp; events, company profile and contact.
        </Item>
        <Item>
          Built the web portal front-end, connected the APIs and deployed
          through a GitLab pipeline. Launched Web Career with image upload.
        </Item>
      </Project>

      <Project name="Other work" period="2024 - 2026">
        <Item>
          Built AutoSpec Generator for the internal hackathon: UI design,
          project setup and presentation.
        </Item>
        <Item>
          Built a LINE OA table-reservation POC for Shuang Hor, and created
          the proposal and UI for an online scholarship system.
        </Item>
        <Item>Coached teammates on Figma and on Marine Portal modules.</Item>
      </Project>
    </Container>
  </Layout>
)

export default dcs
export { getServerSideProps } from '../../components/chakra'
