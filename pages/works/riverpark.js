import { Container } from '@chakra-ui/react'
import {
  Title,
  CompanyHeader,
  Project,
  Item
} from '../../components/work'
import Layout from '../../components/layouts/article'

const Riverpark = () => (
  <Layout title="Riverpark Consultant">
    <Container>
      <Title>Riverpark Consultant</Title>

      <CompanyHeader
        logo="/screenshot/riverpark.jpg"
        company="Riverpark Consultant Co., Ltd."
        role="Front-end Developer"
        period="Mar 2022 – Sep 2022"
        location="Bangkok"
      />

      <Project
        name="Tokio Marine Life Insurance (Thailand) · PDPA Agent Project (DMS)"
        stack={['Next.js', 'Material UI']}
      >
        <Item>
          Built the user management system for insurance agents in a document
          management system (DMS) that stores, manages and tracks documents
          electronically.
        </Item>
        <Item>Worked in an agile team with regular sprints.</Item>
      </Project>
    </Container>
  </Layout>
)

export default Riverpark
export { getServerSideProps } from '../../components/chakra'
