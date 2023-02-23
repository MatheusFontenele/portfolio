import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'

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
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
