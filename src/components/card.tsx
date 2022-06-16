import { Box, Heading, useColorModeValue } from '@chakra-ui/react'
import { motion, Variants } from 'framer-motion'
import { useEffect, useRef } from 'react'
import VanillaTilt from 'vanilla-tilt'
import { FaRegFolder } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import { HiExternalLink } from 'react-icons/hi'

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
        className="w-80 h-72 bg-[#0f0e17]"
        p={6}
        display="flex"
        justifyContent="space-between"
        flexDirection="column"
        borderRadius={4}
        boxShadow={useColorModeValue('xl', 'md')}
      >
        <Box className="flex justify-between mb-2">
          <FaRegFolder />{' '}
          <Box className="flex justify-between gap-2 ">
            <BsGithub /> <HiExternalLink />
          </Box>
        </Box>
        <span
          style={{
            fontFamily: 'Roboto Mono',
            fontSize: '18px',
            marginBottom: '6px',
            fontWeight: 'bold',
            color: '#fffffe'
          }}
        >
          {name}
        </span>
        <span
          className="my-2 text-sm text-[#a7a9be]"
          style={{
            fontFamily: 'Roboto Mono'
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
