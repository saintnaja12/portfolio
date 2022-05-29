import { Box, Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      {new Date().getFullYear()} Teetouch Asawasupakul Reference from{' '}
      <Link href="https://www.craftz.dog/">
        https://www.craftz.dog/ <ExternalLinkIcon mx="2px" />
      </Link>
    </Box>
  )
}

export default Footer
