import {
  Box,
  Container,
  Heading,
  Image,
  useColorModeValue
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import profilePhoto from '../../assets/profile-pic.png'

const Home: NextPage = () => {
  return (
    <Container>
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
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Matheus Fontenele
          </Heading>
          <p>Web Developer, UI designer and lover of JavaScript </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          display="flex"
          justifyContent="center"
        >
          <Image
            src="https://avatars.githubusercontent.com/u/94790993?v=4"
            maxW="100px"
            display="inline-block"
            alt="profile Photo"
            borderColor="whiteAlpha.800"
            borderStyle="solid"
            borderWidth={2}
            borderRadius="full"
          />
        </Box>
      </Box>
    </Container>
  )
}

export default Home
