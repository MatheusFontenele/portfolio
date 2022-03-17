import { Box, Center, Container, List, ListItem } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import Card from '../card'
import NavBar from '../navbar'

const Main = ({ children, router }: any) => {
  return (
    <Box as="main" pb={8} h="100vh" w="100vw">
      <Head>
        <title>Home | Matheus Fontenele</title>
        <meta name="description" content="Matheus's website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar path={router.asPath} />
      <Container
        maxW="container.xl"
        position="relative"
        pt={14}
        display="flex"
        flexDirection={{ base: 'column', lg: 'row' }}
      >
        {children}
        <Container
          css={{
            '&::-webkit-scrollbar': {
              display: 'none'
            }
          }}
          overflowX="hidden"
          overflowY="scroll"
          pt={6}
        >
          <List h="91vh">
            <ListItem>
              <Card />
            </ListItem>
            <ListItem>
              <Card />
            </ListItem>
            <ListItem>
              <Card />
            </ListItem>
            <ListItem>
              <Card />
            </ListItem>
            <ListItem>
              <Card />
            </ListItem>
            <ListItem>
              <Card />
            </ListItem>
          </List>
        </Container>
      </Container>
    </Box>
  )
}

export default Main
