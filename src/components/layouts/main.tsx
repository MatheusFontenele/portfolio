import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import { Header } from '../header'

const Main = ({ children, router }: any) => {
  return (
    <Box as="main">
      <Head>
        <title>Home | Matheus Fontenele</title>
      </Head>
      <Header path={router.asPath} />
      <div>{children}</div>
    </Box>
  )
}

export default Main
