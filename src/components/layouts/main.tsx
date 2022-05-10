import { Box, Container } from '@chakra-ui/react'
import React from 'react'
import NavBar from '../navbar'

const Main = ({ children, router }: any) => {
  return (
    <Box as="main">
      <NavBar path={router.asPath} />
      <Container maxW="container.xl">{children}</Container>
    </Box>
  )
}

export default Main
