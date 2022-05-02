import { Box, Heading, useColorModeValue, useMergeRefs } from '@chakra-ui/react'
import { motion, Variants } from 'framer-motion'
import { useEffect, useRef } from 'react'
import Description from './description'
import Title from './title'
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

export default function Card() {
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
        className="card"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        w={{ base: 350, md: '100%', lg: '100%' }}
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
        <Title>Lorem ipsum dolor</Title>
        <Description>
          Sit amet consectetur adipisicing elit. Voluptatum, dicta iure officiis
          sunt maxime reprehenderit veritatis laborum! Ipsam molestias quae, nam
          alias, hic mollitia, laborum repudiandae quaerat maiores fugiat
          soluta.
        </Description>
      </Box>
    </motion.div>
  )
}
