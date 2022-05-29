import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbLmsAxa from '../public/screenshot/LMS-AXA/eCert-Create.png'
import thumbCrmDemo from '../public/screenshot/CRM-DEMO/Line-chat.png'
import thumbTtb from '../public/screenshot/CRM-TTB/masterData.png'
import thumbDeMusic from '../public/screenshot/DeMusic/Desktop - 1-1.png'
import thumbMargelo from '../public/images/works/margelo_eyecatch.png'
import thumbModeTokyo from '../public/images/works/modetokyo_eyecatch.png'
import thumbStyly from '../public/images/works/styly_eyecatch.png'
import thumbPichu2 from '../public/images/works/pichu2_eyecatch.png'
import thumbFreeDBTagger from '../public/images/works/freedbtagger_eyecatch.png'
import thumbAmembo from '../public/images/works/amembo_eyecatch.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="axa-lms"
            title="AXA Insurance Thailand (Development)"
            thumbnail={thumbLmsAxa}
          >
            E-learning management system using Next.ts
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="crm-demo"
            title="CRM Demo Version (Development) - Nuxt.js"
            thumbnail={thumbCrmDemo}
          >
            Customer Relationship Management system using Nuxt.js
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="ttb" title="TTB - Vue.js" thumbnail={thumbTtb}>
            Customer Relationship Management system using Vue.js
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="de-music"
            thumbnail={thumbDeMusic}
            title="De Music App"
          >
            Design Wireframe and UI
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
