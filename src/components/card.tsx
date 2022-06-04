import { Box, Heading, useColorModeValue } from '@chakra-ui/react'
import { motion, Variants } from 'framer-motion'
import { useEffect, useRef } from 'react'
import VanillaTilt from 'vanilla-tilt'

const cardVariants: Variants = {
  offscreen: {
    y: 100
  },
  onscreen: {
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8
    },
    opacity: 1
  }
}
interface CardProps {
  name: string
  description: string
  language: string
}
export default function Card({ name, description, language }: CardProps) {
  const card = useRef()
  //data-tilt
  //data-tilt-reverse="true"
  useEffect(() => {
    VanillaTilt.init('.card', {
      max: 30,
      speed: 400
    })
  }, [])

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
    >
      <Box
        className="glass"
        w={{ base: '100%', md: '80%', lg: '100%' }}
        p={6}
        mb={6}
        display="flex"
        justifyContent="space-between"
        flexDirection="column"
        borderRadius={8}
        boxShadow={useColorModeValue('xl', 'md')}
      >
        <Heading fontSize={16} variant="section-title">
          Work
        </Heading>
        <span
          style={{
            fontFamily: 'Roboto Mono',
            fontSize: '18px',
            marginBottom: '6px',
            fontWeight: 'bold',
            color: useColorModeValue('#000', '#FFF')
          }}
        >
          {name}
        </span>
        <span
          style={{
            fontFamily: 'Roboto Mono',
            fontSize: '14px',
            margin: '12px 0'
          }}
        >
          {description}
        </span>
        <span
          style={{
            color: useColorModeValue('#000', '#FFF')
          }}
        >
          Language:
          <strong> {language}</strong>
        </span>
      </Box>
    </motion.div>
  )
}
