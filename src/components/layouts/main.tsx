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
      <Container
        maxW="container.xl"
        position="relative"
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
          h={{ base: '100vh', lg: '93vh' }}
          overflowX="hidden"
          overflowY="scroll"
          pt={6}
          mt={{ base: 8, md: 0 }}
        >
          <List>
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
          <Box>
            <Heading fontSize={16} variant="section-title" mb={6}>
              Projects
            </Heading>
            <List
              pb={6}
              display="flex"
              flexDirection={{ base: 'column', lg: 'row' }}
              justifyContent={{ base: 'center', lg: 'space-between' }}
              alignItems="center"
            >
              <ListItem>
                <ProjectCard />
              </ListItem>
              <ListItem>
                <ProjectCard />
              </ListItem>
            </List>
          </Box>
        </Container>
      </Container>
    </Box>
  )
}

export default Main
