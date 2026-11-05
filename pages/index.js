import NextLink from 'next/link'
import {
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  Link,
  List,
  ListItem,
  Stack,
  Text,
  Badge,
  chakra,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon, DownloadIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import { TagList, NowBadge } from '../components/work'
import Image from 'next/image'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Stat = ({ value, label }) => {
  const bg = useColorModeValue('whiteAlpha.600', 'whiteAlpha.100')
  return (
    <Box bg={bg} borderRadius="lg" p={4} textAlign="center">
      <Text fontSize="2xl" fontWeight="bold" color="teal.400">
        {value}
      </Text>
      <Text fontSize="sm">{label}</Text>
    </Box>
  )
}

const Job = ({ period, title, company, href, now, children }) => (
  <Box mb={4}>
    <Text fontSize="sm" opacity={0.7}>
      {period}
    </Text>
    <Text fontWeight="semibold">
      {title} ·{' '}
      {href ? (
        <NextLink href={href} passHref scroll={false}>
          <Link>{company}</Link>
        </NextLink>
      ) : (
        company
      )}
      {now && <NowBadge />}
    </Text>
    {children && <Text fontSize="sm">{children}</Text>}
  </Box>
)

const Home = () => (
  <Container>
    <Box
      borderRadius="lg"
      my={6}
      p={3}
      textAlign="center"
      bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      css={{ backdropFilter: 'blur(10px)' }}
    >
      Hello, I&apos;m a software engineer and UI designer based in Bangkok,
      Thailand.
    </Box>

    <Box display={{ md: 'flex' }}>
      <Box flexGrow={1}>
        <Heading as="h2" variant="page-title">
          Teetouch Asawasupakul
        </Heading>
        <Text fontWeight="semibold">
          Senior Software Engineer · Front-end Developer &amp; UI Designer
        </Text>
        <Text fontSize="sm" mt={2}>
          <Badge colorScheme="green" variant="solid" borderRadius="full" px={2} mr={2}>
            Now
          </Badge>
          Datapro Computer Systems (DCS), Premier Group
        </Text>
      </Box>
      <Box
        flexShrink={0}
        mt={{ base: 4, md: 0 }}
        ml={{ md: 6 }}
        textAlign="center"
      >
        <Box
          borderColor="whiteAlpha.800"
          borderWidth={2}
          borderStyle="solid"
          w="100px"
          h="100px"
          display="inline-block"
          borderRadius="full"
          overflow="hidden"
        >
          <ProfileImage
            src="/img/teetouch-1.jpg"
            alt="Teetouch Asawasupakul"
            borderRadius="full"
            width="100%"
            height="100%"
          />
        </Box>
      </Box>
    </Box>

    <Stack direction={['column', 'row']} spacing={3} mt={6}>
      <NextLink href="/works" passHref scroll={false}>
        <Button as="a" rightIcon={<ChevronRightIcon />} colorScheme="teal">
          View my work
        </Button>
      </NextLink>
      <Button
        as="a"
        href="/resume/CV-1.pdf"
        target="_blank"
        leftIcon={<DownloadIcon />}
        variant="outline"
        colorScheme="teal"
      >
        Download CV
      </Button>
      <Button
        as="a"
        href="mailto:teetouchnaja@gmail.com"
        leftIcon={<EmailIcon />}
        variant="ghost"
        colorScheme="teal"
      >
        Contact me
      </Button>
    </Stack>

    <Section delay={0.1}>
      <Heading as="h3" variant="section-title">
        About
      </Heading>
      <Paragraph>
        I&apos;m a Senior Software Engineer at Datapro Computer Systems (DCS),
        part of Premier Group. Since 2021 I&apos;ve built enterprise web
        applications for insurance, banking and manufacturing clients,
        including MSIG, Krungthai Bank, Nissan Leasing, Denso and Thai Honda. I
        design interfaces in Figma, build them in Angular, Vue and React, and
        write back-end APIs in Java and Node.js, so I can take a feature from
        design to production.
      </Paragraph>
    </Section>

    <Section delay={0.15}>
      <SimpleGrid columns={[1, 3]} gap={4}>
        <Stat value="5+ years" label="building enterprise web apps" />
        <Stat value="Dec 2025" label="MSIG Marine Portal live in production" />
        <Stat value="10+" label="client projects in insurance, banking and manufacturing" />
      </SimpleGrid>
    </Section>

    <Section delay={0.2}>
      <Heading as="h3" variant="section-title">
        Experience
      </Heading>
      <Job
        period="Jun 2024 – Present"
        title="Senior Software Engineer"
        company="Datapro Computer Systems (DCS)"
        href="/works/dcs"
        now
      >
        Front-end, UI design and back-end APIs for MSIG, Nissan Leasing, KTB,
        Denso and Thai Honda.
      </Job>
      <Job
        period="Oct 2022 – May 2024"
        title="Front-end Developer"
        company="Buzzebees"
        href="/works/bzbs"
      >
        Loyalty platform modules used by many client apps.
      </Job>
      <Job
        period="Mar 2022 – Sep 2022"
        title="Front-end Developer"
        company="Riverpark Consultant"
        href="/works/riverpark"
      />
      <Job
        period="Jan 2021 – Feb 2022"
        title="Front-end Developer"
        company="UC Connect"
        href="/works/uc"
      />
      <Job
        period="2020"
        title="B.Sc. Computer Science"
        company="Rajamangala University of Technology Tawan-Ok"
      />
    </Section>

    <Section delay={0.25}>
      <Heading as="h3" variant="section-title">
        Skills
      </Heading>
      <Text fontSize="sm" fontWeight="semibold">
        Front-end
      </Text>
      <TagList
        items={['Angular', 'Vue.js', 'Nuxt.js', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS']}
      />
      <Text fontSize="sm" fontWeight="semibold" mt={3}>
        Back-end &amp; data
      </Text>
      <TagList
        items={['Java', 'Node.js', 'PHP', 'REST APIs', 'MySQL', 'SQL Server', 'MongoDB']}
      />
      <Text fontSize="sm" fontWeight="semibold" mt={3}>
        Design
      </Text>
      <TagList items={['Figma', 'Adobe XD', 'Wireframing', 'Design systems']} />
      <Text fontSize="sm" fontWeight="semibold" mt={3}>
        Delivery
      </Text>
      <TagList items={['Jest', 'SIT / UAT', 'GitLab CI/CD', 'Postman', 'Jira']} />
    </Section>

    <Section delay={0.3}>
      <Heading as="h3" variant="section-title">
        Outside work
      </Heading>
      <Paragraph>
        Music, guitar and singing, surf skating, hiking, photography and travel.
      </Paragraph>
    </Section>

    <Section delay={0.3}>
      <Heading as="h3" variant="section-title">
        Contact
      </Heading>
      <List>
        <ListItem>
          <Link href="mailto:teetouchnaja@gmail.com">
            <Button variant="ghost" colorScheme="teal" leftIcon={<EmailIcon />}>
              teetouchnaja@gmail.com
            </Button>
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="https://www.linkedin.com/in/teetouch-asawasupakul/"
            target="_blank"
          >
            <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<IoLogoLinkedin />}
            >
              @teetouch-asawasupakul
            </Button>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://github.com/saintnaja12" target="_blank">
            <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<IoLogoGithub />}
            >
              @saintnaja12
            </Button>
          </Link>
        </ListItem>
      </List>
    </Section>
  </Container>
)

export default Home
