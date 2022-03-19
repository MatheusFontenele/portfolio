import { Box, Heading, useColorModeValue } from '@chakra-ui/react'
import { motion, Variants } from 'framer-motion'
import Description from './description'
import Title from './title'
import { motion as motion3d } from 'framer-motion-3d'
;<motion3d.pointLight animate={{ x: 2 }} />

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
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      variants={cardVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Box
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        w={{ base: 440, md: '80%', lg: '100%' }}
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
