import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import NavBar from '../navbar'

const Main = ({ children, router }: any) => {
  return (
    <Box as="main" className="bg-[#fffffe]">
      <Head>
        <title>Home | Matheus Fontenele</title>
      </Head>
      <NavBar path={router.asPath} />
      <div>{children}</div>
    </Box>
  )
}

export default Main
