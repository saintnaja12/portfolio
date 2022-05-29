import NextLink from 'next/link'
import {
  Container,
  Heading,
  Box,
  Button,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Section from '../components/section'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        my={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a front-end developer based in Thailand
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Teetouch Asawasupakul.
          </Heading>
          <p>Frontend Developer</p>
          {/* Artist / Developer / Designer */}
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
              src="/img/teetouch.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          I&apos;ve been a front-end developer since 2021. The frameworks of
          JavaScript I use are Vue.js, Nuxt.js, React.js, and Next.js.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My Portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1998</BioYear>
          Born in Bangkok, Thailand.
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Completed the Bachelor of Science degree in Computer Science in
          Rajamangala University of Technology Tawan-Ok
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Worked at UC Connect Co., Ltd.
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Works at Riverpark Consultant
        </BioSection>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music, Play Guitars and Sing, Photography , Travel
        </Paragraph>
      </Section>
    </Container>
  )
}

export default Home
