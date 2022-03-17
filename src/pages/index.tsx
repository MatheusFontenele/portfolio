import {
  Box,
  Container,
  Heading,
  Image,
  useColorModeValue,
  Text,
  List,
  ListItem,
  Link,
  IconButton,
  Button,
  Icon
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import profilePhoto from '../../assets/profile-pic.png'
import Paragraph from '../components/paragraph'
import Section from '../components/sections'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoDiscord,
  IoLogoLinkedin
} from 'react-icons/io5'
import { NodeNextRequest } from 'next/dist/server/base-http/node'
import Card from '../components/card'

const Home: NextPage = () => {
  return (
    <Container position={{ base: 'relative', md: 'sticky' }}>
      <Box
        h="90vh"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box>
          <Box
            borderRadius="lg"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            p={3}
            mb={6}
            mt={6}
            textAlign="center"
          >
            Hello, I&apos;m a full-stack developer based in Brazil!
          </Box>

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
            <Heading as="h3" variant="section-title">
              Me
            </Heading>
            <Paragraph>
              Matheus is someone who is passionate about technology, sports and
              history. Someone who is fascinated to learn new things involving
              code lines, always looking improve my knowledge to solve the more
              simple real-life problem with code{' '}
            </Paragraph>
          </Section>
        </Box>

        <Section delay={0.3}>
          <List display="flex" flexDirection={{ base: 'column', md: 'row' }}>
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
    </Container>
  )
}

export default Home
