import {
  Box,
  Container,
  Heading,
  Image,
  Text,
  List,
  ListItem,
  Link,
  Button,
  Icon
} from '@chakra-ui/react'
import type { GetStaticProps } from 'next'

import Section from '../components/sections'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoDiscord,
  IoLogoLinkedin
} from 'react-icons/io5'

import Card from '../components/card'
import { ProjectCard } from '../components/project-card'

import axios from 'axios'

interface RepoProps {
  name: string
  description: string
  language: string
}

interface homeProps {
  reposositoriesData: RepoProps[]
}
export default function Home({ reposositoriesData }: homeProps) {
  return (
    <Box
      maxW="container.xl"
      position="relative"
      display="flex"
      flexDirection={{ base: 'column', lg: 'row' }}
      css={{
        /* Chrome, Edge, and Safari */
        '&::-webkit-scrollbar': {
          width: '10px'
        },
        '&::-webkit-scrollbar-track': {
          background: '#0A0F13'
        },
        '&::-webkit-scrollbar-thumb': {
          background: '#c9c9c9',
          borderRadius: '5px',
          border: '3px none #ffffff'
        }
      }}
    >
      <Box
        h={{ md: '80vh', base: '100%' }}
        ml={{ base: '20px' }}
        display="flex"
        flexDirection="column"
        position={{ md: 'sticky' }}
        top="65px"
        justifyContent="space-between"
      >
        <Box marginTop="8vh">
          <Box flexShrink={0} mt={{ base: 4, md: 0 }} mb={6}>
            <Image
              src="https://avatars.githubusercontent.com/u/94790993?v=4"
              maxW="150px"
              display="inline-block"
              alt="profile Photo"
              borderRadius="full"
            />
          </Box>
          <Box display={{ md: 'flex' }} mb={10}>
            <Box flexGrow={1}>
              <Heading
                as="h2"
                variant="page-title"
                bgGradient="linear(to-r, blue.300, blue.500, pink.400, pink.300)"
                bgClip="text"
              >
                Hi, I'm <br /> Matheus Fontenele
              </Heading>
            </Box>
          </Box>

          <Section delay={0.2}>
            <Box width={{ md: '70%', base: '80%' }}>
              <Heading as="h3" variant="section-title">
                Me
              </Heading>
              <Text fontSize={['sm', '14px']} fontFamily="Roboto Mono">
                Matheus is someone who is passionate about technology, sports
                and history. Someone who is fascinated to learn new things
                involving code lines, always looking improve my knowledge to
                solve the more simple real-life problem with code{' '}
              </Text>
            </Box>
          </Section>
        </Box>

        <Section delay={0.3}>
          <List
            display="flex"
            flexDirection={{ base: 'column', md: 'row' }}
            marginBottom="6px"
          >
            <ListItem>
              <Link href="/">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  Github
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link href="/">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  Instagram
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link href="/">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoTwitter} />}
                >
                  Twitter
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link href="/">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  Linkedin
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Box>
      <Container>
        <List>
          {reposositoriesData.map(repo => {
            return (
              <ListItem>
                <Card
                  name={repo.name}
                  description={repo.description}
                  language={repo.language}
                />
              </ListItem>
            )
          })}
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
              <ProjectCard>
                <h1>a</h1>
              </ProjectCard>
            </ListItem>
            <ListItem>
              <ProjectCard>
                <h1>a</h1>
              </ProjectCard>
            </ListItem>
          </List>
        </Box>
      </Container>
    </Box>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const user = await axios.get('https://api.github.com/users/MatheusFontenele')
  const repositories = await axios.get(
    'https://api.github.com/users/MatheusFontenele/repos'
  )

  const reposositoriesData = repositories.data.map((repo: RepoProps) => {
    return {
      name: repo.name,
      description: repo.description,
      language: repo.language
    }
  })
  const data = user.data
  return {
    props: { data, reposositoriesData }
  }
}
