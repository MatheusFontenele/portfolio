import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Heading,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  IconButton,
  useColorModeValue,
  Stack
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { BiMenuAltRight } from 'react-icons/bi'
import ThemeToggleButton from './theme-toggle-button'

const LinkItem = ({ href, path, children }: any) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray.200', 'whiteAlpha.900')
  return (
    <NextLink href={href}>
      <Link
        p={2}
        bg={active ? 'glassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
        className="text-xl font-medium"
      >
        {children}
      </Link>
    </NextLink>
  )
}

const NavBar = props => {
  const { path } = props
  return (
    <Box
      className="bg-[#0a192f]"
      as="nav"
      w="100%"
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      position="relative"
      {...props}
    >
      <Box
        display="flex"
        paddingX={5}
        paddingY={3}
        flexWrap="wrap"
        alignItems="center"
        justifyContent="space-between"
        className="max-w-full z-10"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Box className="gap-4" flex={1} display="flex" justifyContent="end">
          <Stack
            direction={{ base: 'column', md: 'row' }}
            display={{ base: 'none', md: 'flex' }}
            width={{ base: 'full', md: 'auto' }}
            alignItems="center"
            mt={{ base: 4, md: 0 }}
          >
            <LinkItem
              color={useColorModeValue('gray.900', 'whiteAlpha.900')}
              href="/works"
              path={path}
            >
              Works
            </LinkItem>
            <LinkItem href="/posts" path={path}>
              Posts
            </LinkItem>
          </Stack>
          <ThemeToggleButton />
          <Box ml={2} mb={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<BiMenuAltRight size={40} />}
                background="transparent"
                arial-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href="/works" passHref>
                  <MenuItem as={Link}>Works</MenuItem>
                </NextLink>
                <NextLink href="/posts" passHref>
                  <MenuItem as={Link}>posts</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default NavBar
