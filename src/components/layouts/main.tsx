import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import NavBar from '../navbar'
import { Sidebar } from '../sidebar'

const Main = ({ children, router }: any) => {
  return (
    <Box as="main">
      <Head>
        <title>Home | Matheus Fontenele</title>
      </Head>
      <NavBar path={router.asPath} />
      <Sidebar />
      <div>{children}</div>
    </Box>
  )
}

export default Main
