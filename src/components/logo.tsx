import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'

const LogoBox = styled.span`
  font-weight: bold
  font-size: 18px
  display: inline-flex
  aling-items: center
  height: 30px
  line-height: 30px
  padding: 10px

  &:hover img {
    transform: rotate(20deg) 
  }
`
const Logo = () => {
  const logoImage = `/src/assets/Math${useColorModeValue('', '-white')}.png`
  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={logoImage} width={20} height={20} alt="logo" />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily="M PLUS Rounder 1c"
            fontWeight="bold"
            ml={30}
          >
            Matheus Fontenele
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}
