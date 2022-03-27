import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'
import logoImage from '../../assets/Logo.png'
import logoImageWhite from '../../assets/Math-white.png'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  line-height: 30px;
  padding: 10px;
`
const Logo = () => {
  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image
            src={useColorModeValue(logoImage, logoImageWhite)}
            width={50}
            height={50}
            alt="logo"
          />
          <Text
            color={useColorModeValue('gray.900', 'whiteAlpha.900')}
            fontFamily="M PLUS Rounder 1c"
            fontWeight="bold"
            ml={6}
          >
            Matheus Fontenele
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
