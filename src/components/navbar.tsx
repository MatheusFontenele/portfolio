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
import { BiMenuAltRight } from 'react-icons/bi'
import ThemeToggleButton from './theme-toggle-button'
import { useState } from 'react'

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

  const [menuOpened, setMenuOpened] = useState(true)
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
        flexWrap="wrap"
        alignItems="center"
        justifyContent="space-between"
        className="max-w-full p-8 z-10"
      >
        <button className="flex flex-col gap-1 m-4">
          <div className="w-4 h-[3px] mx-auto bg-slate-100 rounded-sm"></div>
          <div className="w-6 h-[3px] bg-slate-100 rounded-full"></div>
          <div className="w-4 h-[3px] mx-auto bg-slate-100 rounded-sm"></div>
        </button>

        <ThemeToggleButton />
        <Box ml={2} mb={2} display="inline-block">
          <Menu></Menu>
        </Box>
        <Box className="gap-4" flex={1} display="flex" justifyContent="end">
          <Flex align="center">
            <Heading as="h1" size="lg" letterSpacing={'tighter'}>
              <Logo />
            </Heading>
          </Flex>
        </Box>
      </Box>
    </Box>
  )
}

export default NavBar
