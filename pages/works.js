import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbDcs from '../public/screenshot/dcs.png'
import thumbBzbs from '../public/screenshot/bzbs.jpg'
import thumbRiver from '../public/screenshot/riverpark.jpg'
import thumbUC from '../public/screenshot/UC.jpg'
import thumbDeMusic from '../public/screenshot/de-music-app.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Experience
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="dcs"
            title="Datapro Computer Systems (DCS)"
            thumbnail={thumbDcs}
            period="Senior Software Engineer · Jun 2024 – Present"
            now
          >
            MSIG Marine Insurance Portal, Nissan Leasing, KTB, Denso and Thai
            Honda
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="bzbs"
            title="Buzzebees"
            thumbnail={thumbBzbs}
            period="Front-end Developer · Oct 2022 – May 2024"
          >
            Loyalty platform modules: Shopping Cart &amp; My Order, template
            and Design Tokens
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="riverpark"
            title="Riverpark Consultant"
            thumbnail={thumbRiver}
            period="Front-end Developer · Mar 2022 – Sep 2022"
          >
            Tokio Marine PDPA Agent document management system
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="uc"
            title="UC Connect"
            thumbnail={thumbUC}
            period="Front-end Developer · Jan 2021 – Feb 2022"
          >
            AXA LMS, TTB CRM and CRM products with real-time chat
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Design projects
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.2}>
          <WorkGridItem
            id="de-music"
            title="De Music"
            thumbnail={thumbDeMusic}
            period="UX/UI design · 2021"
          >
            Music NFT app, from wireframes to UI in Figma
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
