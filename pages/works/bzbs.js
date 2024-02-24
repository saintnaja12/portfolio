import {
  Container,
  List,
  ListItem,
  Heading,
  Center,
  Divider,
  Link,
  Text
} from '@chakra-ui/react'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const uc = () => (
    <Layout title="UC Connect Co.,Ltd.">
        <Container>
            <Title>Buzzebees Template - Vue.js, React.js</Title>
            <Heading as="h4" fontSize={16} mt={3} mb={2}>
                <Center>Buzzebees Template</Center>
            </Heading>
            <P>
                Develop systems and update templates follow <Text as='b'>Test Cases</Text>.
            </P>
            <P>
                This template can be used for a variety of projects.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>Vue.js, React.js, Node.js</span>
                </ListItem>
                <ListItem>
                    <Meta>Framework CSS</Meta>
                    <span>Sass, Tailwind</span>
                </ListItem>
                <ListItem>
                    <Meta>Library</Meta>
                    <span>socket.io, LineLiff</span>
                </ListItem>
            </List>
            <Divider mb={4} />

            <Heading as="h4" fontSize={16} mt={3} mb={2}>
                <Center>Buzzebees Projects -
                    <Link href="https://101truedigitalpark.buzzebees-dev.com" target="_blank">
                        101 True Digital Park
                    </Link>
                    ,&nbsp;
                    <Link href="https://seaconplus.buzzebees-dev.com" target="_blank">
                        Seacon Plus
                    </Link>
                </Center>
            </Heading>
            <P>
                Bring <Text as='b'>Template</Text> to develop a system assigned to work assignments, using <Text as='b'>LineLiff</Text> mostly.
            </P>
            <P>
                Within the system, there is a campaign or privilege exchange for those who come to redeem.
            </P>
            <P>
                Sometimes custom features may be added to the project.
            </P>
            <P>
                Projects are connected to the <Text as='b'>Shopping cart & My order</Text> system so that users can purchase campaign or privilege.
            </P>
            <P>
                Using Node.js to control the use of Vue.js, such as logging in or using various routes.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>Vue.js, Node.js</span>
                </ListItem>
                <ListItem>
                    <Meta>Framework CSS</Meta>
                    <span>Sass, Tailwind</span>
                </ListItem>
                <ListItem>
                    <Meta>Library</Meta>
                    <span>socket.io, LineLiff</span>
                </ListItem>
            </List>
            <Divider my={2} />

            <Heading as="h4" fontSize={16} mt={3} mb={2}>
                <Center>Productization - Shopping cart & My order</Center>
            </Heading>
            <P>Developed <Text as='b'>Shopping cart & My order</Text> system to support applications connected to this system.</P>
            <P><Text as='b'>Main Features:</Text> Supports the use of the <Text as='b'>Bath</Text> and <Text as='b'>Points</Text> feature.</P>
            <P><Text as='b'>Discount Features:</Text> Discount Features: Promo codes, Coupons, Points to Discounts and Auto Discount.</P>
            <P><Text as='b'>Partial point Feature:</Text> Is the use of <Text as='b'>Bath</Text> together with <Text as='b'>Points</Text>.</P>
            <P><Text as='b'>Campaign Related Feature:</Text> Show products or campaigns that are related or that users might be interested in to encourage purchases or redemption.</P>
            <P><Text as='b'>Address Feature:</Text> Delivery address and Tax address.</P>
            <P><Text as='b'>Cart Type Feature:</Text> It will display only campaigns filter by <Text as='b'>Cart Type</Text>.</P>
            <P><Text as='b'>Payment Feature:</Text> Develop or solve issue from the original code.</P>
            <P><Text as='b'>Theme Config:</Text> Change the theme color according to the application being used.</P>
            <P>Management various configs from API</P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>Vue.js, Node.js</span>
                </ListItem>
                <ListItem>
                    <Meta>Framework CSS</Meta>
                    <span>Sass, Tailwind</span>
                </ListItem>
                <ListItem>
                    <Meta>Library</Meta>
                    <span>socket.io, LineLiff</span>
                </ListItem>
            </List>
            <Divider my={2} />

            <Heading as="h4" fontSize={16} mt={3} mb={2}>
                <Center>Productization - Buzzebees Demo</Center>
            </Heading>
            <P>Develop and upgrade a system from <Text as='b'>Template</Text>.</P>
            <P>
                This project was developed to be used by customers who want to use the system (Subscription).
            </P>
            <P>
                Research and develop the Design Token to be used as a feature in the system.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>Vue.js, Node.js</span>
                </ListItem>
                <ListItem>
                    <Meta>Framework CSS</Meta>
                    <span>Sass, Tailwind</span>
                </ListItem>
                <ListItem>
                    <Meta>Library</Meta>
                    <span>socket.io, LineLiff</span>
                </ListItem>
            </List>
            <Divider my={2} />

            <Heading as="h4" fontSize={16} mt={3} mb={2}>
                <Center>Productization - Buzzebees POS</Center>
            </Heading>
            <P>Develop a system user management system for various insurance agents.</P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>Vue.js, Node.js</span>
                </ListItem>
                <ListItem>
                    <Meta>Framework CSS</Meta>
                    <span>Sass, Tailwind</span>
                </ListItem>
                <ListItem>
                    <Meta>Library</Meta>
                    <span>socket.io</span>
                </ListItem>
            </List>
        </Container>
    </Layout>
)

export default uc
export { getServerSideProps } from '../../components/chakra'
