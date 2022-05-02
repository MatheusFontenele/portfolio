import { Box, Container, Heading, List, ListItem } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import Card from '../card'
import NavBar from '../navbar'
import { ProjectCard } from '../project-card'

const Main = ({ children, router }: any) => {
  return (
    <Box as="main">
      <NavBar path={router.asPath} />
      <Container maxW="container.xl">{children}</Container>
    </Box>
  )
}

export default Main
