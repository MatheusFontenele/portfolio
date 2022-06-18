import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'
import logoImage from '../../assets/Logo.png'
import logoImageWhite from '/public/Math-white.png'

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
          <Image src={logoImageWhite} width={50} height={50} alt="logo" />
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
