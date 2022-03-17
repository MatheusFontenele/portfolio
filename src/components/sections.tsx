import { chakra, shouldForwardProp } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const StyleDiv = chakra(motion.div, {
  shouldForwardProp: props => {
    return shouldForwardProp(props) || props === 'transition'
  }
})

const Section = ({ children, delay = 0 }) => (
  <StyleDiv
    initial={{ x: 25, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay }}
    mb={6}
  >
    {children}
  </StyleDiv>
)

export default Section
