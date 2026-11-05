import { Box, Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Teetouch Asawasupakul. Design based on{' '}
      <Link href="https://www.craftz.dog/">
        craftz.dog <ExternalLinkIcon mx="2px" />
      </Link>
    </Box>
  )
}

export default Footer
