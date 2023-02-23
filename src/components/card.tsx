import { Box } from '@chakra-ui/react'
import { motion, Variants } from 'framer-motion'
import { FaRegFolder } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import { FaExternalLinkAlt } from 'react-icons/fa'

interface CardProps {
  name: string
  description: string
  language: string,
  duration: number
}

export default function Card({ name, description, language, duration }: CardProps) {
  const cardVariants: Variants = {
    offscreen: {
      y: 100
    },

    onscreen: {
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: duration > 3 ? duration / 4 : duration / .5
      },
      opacity: 1
    }
  }

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
    >
      <Box
        className="w-80 h-72 bg-[#112240] shadow-xl"
        p={6}
        display="flex"
        flexDirection="column"
        borderRadius={4}
      >
        <Box className="flex justify-between mb-2">
          <FaRegFolder color='white' />{' '}
          <Box className="flex justify-between gap-2 ">
            <BsGithub color='white' /> <FaExternalLinkAlt color='white' />
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
          className="my-2 text-sm text-[#8892b0]"
          style={{
            fontFamily: 'Roboto Mono'
          }}
        >
          {description}
        </span>
        <span className=" flex items-end text-white">
          Language:
          <strong>{language}</strong>
        </span>
      </Box>
    </motion.div>
  )
}
