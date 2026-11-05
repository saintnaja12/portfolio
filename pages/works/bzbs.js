import { Container, Link, Text } from '@chakra-ui/react'
import {
  Title,
  CompanyHeader,
  Project,
  Item
} from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Bzbs = () => (
  <Layout title="Buzzebees">
    <Container>
      <Title>Buzzebees</Title>

      <CompanyHeader
        logo="/screenshot/bzbs.jpg"
        company="Buzzebees Co., Ltd."
        role="Front-end Developer"
        period="Oct 2022 – May 2024"
        location="Bangkok"
      >
        Loyalty and CRM platform used by brands across Thailand.
      </CompanyHeader>

      <P>
        I built product modules and client apps on top of the Buzzebees
        template, mostly for campaigns and privileges that members redeem with
        Baht, points or both.
      </P>

      <Project
        name="Shopping Cart & My Order (product module)"
        stack={['Vue.js', 'Node.js', 'Sass', 'Tailwind CSS']}
      >
        <Item>
          Built a cart and order system that many client apps plug into, with
          payment in <Text as="b">Baht, points, or a mix of both</Text>.
        </Item>
        <Item>
          Added discounts (promo codes, coupons, points-to-discount and auto
          discount), related-campaign suggestions, delivery and tax addresses,
          and filtering by cart type.
        </Item>
        <Item>
          Made the theme and other settings configurable from the API, so one
          codebase serves each client&apos;s brand.
        </Item>
      </Project>

      <Project
        name="Buzzebees Template & Demo (subscription product)"
        stack={['Vue.js', 'React', 'Node.js', 'Style Dictionary']}
      >
        <Item>
          Maintained the template that client projects start from, and updated
          it against test cases.
        </Item>
        <Item>
          Researched and implemented <Text as="b">Design Tokens</Text> so the
          demo product could switch themes for each subscriber.
        </Item>
      </Project>

      <Project
        name="Client projects · 101 True Digital Park, Seacon Plus"
        stack={['Vue.js', 'Node.js', 'LINE LIFF']}
        links={
          <>
            Live:{' '}
            <Link href="https://101truedigitalpark.buzzebees-dev.com" isExternal>
              101 True Digital Park
            </Link>
            {' · '}
            <Link href="https://seaconplus.buzzebees-dev.com" isExternal>
              Seacon Plus
            </Link>
          </>
        }
      >
        <Item>
          Built campaign and privilege redemption apps on LINE LIFF, connected
          to Shopping Cart &amp; My Order, with Node.js handling login and
          routing.
        </Item>
      </Project>

      <Project name="Buzzebees POS" stack={['Vue.js', 'Node.js']}>
        <Item>Built the campaign and privilege data management system.</Item>
      </Project>
    </Container>
  </Layout>
)

export default Bzbs
export { getServerSideProps } from '../../components/chakra'
