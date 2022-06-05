import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import NavBar from '../navbar'

const Main = ({ children, router }: any) => {
  return (
    <Box as="main">
      <Head>
        <title>Home | Matheus Fontenele</title>
      </Head>
      <NavBar path={router.asPath} />
      <Container maxW="container.xl">{children}</Container>
    </Box>
  )
}

export default Main
