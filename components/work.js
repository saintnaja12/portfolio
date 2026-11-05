import NextLink from 'next/link'
import {
  Heading,
  Box,
  Flex,
  Image,
  Link,
  Badge,
  Text,
  Wrap,
  WrapItem,
  Tag,
  UnorderedList,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => (
  <Box>
    <NextLink href="/works" passHref>
      <Link>Works</Link>
    </NextLink>
    <span>
      {' '}
      <ChevronRightIcon />{' '}
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)

export const WorkImage = ({ src, alt }) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)

export const Meta = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
)

export const NowBadge = () => (
  <Badge
    colorScheme="green"
    variant="solid"
    borderRadius="full"
    px={2}
    ml={2}
    fontSize="0.7em"
    verticalAlign="middle"
  >
    Now
  </Badge>
)

export const TagList = ({ items }) => (
  <Wrap spacing={2} mt={2}>
    {items.map(item => (
      <WrapItem key={item}>
        <Tag size="sm" colorScheme="teal" variant="subtle">
          {item}
        </Tag>
      </WrapItem>
    ))}
  </Wrap>
)

// Company header used at the top of each work page
export const CompanyHeader = ({
  logo,
  company,
  role,
  period,
  location,
  now,
  children
}) => {
  const border = useColorModeValue('blackAlpha.200', 'whiteAlpha.200')
  return (
    <Flex
      align="center"
      borderWidth={1}
      borderColor={border}
      borderRadius="lg"
      p={4}
      mb={6}
      gap={4}
    >
      {logo && (
        <Box
          flexShrink={0}
          w="72px"
          h="72px"
          bg="white"
          borderRadius="md"
          overflow="hidden"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Image src={logo} alt={company} maxW="100%" maxH="100%" />
        </Box>
      )}
      <Box>
        <Heading as="h2" fontSize={20}>
          {company}
          {now && <NowBadge />}
        </Heading>
        <Text fontWeight="semibold">{role}</Text>
        <Text fontSize="sm" opacity={0.7}>
          {period}
          {location ? ` · ${location}` : ''}
        </Text>
        {children && (
          <Text fontSize="sm" mt={2}>
            {children}
          </Text>
        )}
      </Box>
    </Flex>
  )
}

// One project on a work page: name, client/period line, bullets and tech tags
export const Project = ({ name, period, stack = [], children, links }) => {
  const border = useColorModeValue('blackAlpha.200', 'whiteAlpha.200')
  return (
    <Box borderLeftWidth={3} borderColor="teal.400" pl={4} mb={8}>
      <Heading as="h4" fontSize={17} mb={1}>
        {name}
      </Heading>
      {period && (
        <Text fontSize="sm" opacity={0.7} mb={2}>
          {period}
        </Text>
      )}
      <UnorderedList ml={5} spacing={1}>
        {children}
      </UnorderedList>
      {stack.length > 0 && <TagList items={stack} />}
      {links && (
        <Box
          mt={3}
          pt={2}
          borderTopWidth={1}
          borderColor={border}
          fontSize="sm"
        >
          {links}
        </Box>
      )}
    </Box>
  )
}

export const Item = ({ children }) => <ListItem>{children}</ListItem>

export const Screenshot = ({ src, caption }) => (
  <Box mb={6}>
    <Link href={src} isExternal>
      <WorkImage src={src} alt={caption} />
    </Link>
    <Text fontSize="sm" textAlign="center" opacity={0.7} mt={-2}>
      {caption}
    </Text>
  </Box>
)
