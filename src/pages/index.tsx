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
  Icon,
  useColorModeValue
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
import BannerGif from "/code.gif"
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
    >
      <Box
        h={{ md: '80vh', base: '100%' }}
        ml={{ base: '20px' }}
        display="flex"
        flexDirection="column"
        position={{sm: "relative", md: 'sticky' }}
        top={{base: "0", md: "65px"}}
        justifyContent="space-between"
      >
        <Box marginTop="8vh" >
          <Box 
            flexShrink={0} 
            mt={{ base: 4, md: 0 }} 
            position="relative"
            w={{base: "100%", md: "95%"}}
            overflow="hidden"
            borderRadius="20px"
            h="230px" 
          >
            <Image 
                src="/code.gif" 
                alt="" 
                width="100%" 
                height={{base: "100%", md: "300px"}}
              />
          </Box>
          <Box display={{ md: 'flex' }} flexDirection="column" mt="-5rem" mb={10}position="relative">
            <Image
              src="https://avatars.githubusercontent.com/u/94790993?v=4"
              maxW="150px"
              alt="profile Photo"
              borderRadius="full"
              border="4px"
              m={{base: "auto", md: "1.5rem"}}
              borderColor={useColorModeValue('#FFF', '#000')}
            />
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
            display="grid"
            gridTemplateColumns={{base: "1fr", md: "repeat(2, 1fr)"}}
            gap="1rem"
          >
            <ListItem display="flex" justifyContent="center" alignItems="center" >
              <ProjectCard>
                <h1>a</h1>
              </ProjectCard>
            </ListItem>
            <ListItem display="flex" justifyContent="center" alignItems="center">
              <ProjectCard>
                <h1>a</h1>
              </ProjectCard>
            </ListItem>
            <ListItem display="flex" justifyContent="center" alignItems="center">
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
