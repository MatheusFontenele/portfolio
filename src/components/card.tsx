import { Box, Heading, useColorModeValue } from '@chakra-ui/react'
import { motion, useMotionValue, useTransform, Variants } from 'framer-motion'
import Description from './description'
import Title from './title'

const cardVariants: Variants = {
  offscreen: {
    y: 300
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
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [30, -30])
  const rotateY = useTransform(x, [-100, 100], [-30, 30])
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div variants={cardVariants}>
        <Box
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          w={{ base: 440, md: '100%' }}
          p={6}
          mb={6}
          display="flex"
          justifyContent="space-between"
          flexDirection="column"
          borderRadius={8}
        >
          <Heading fontSize={16} variant="section-title">
            Work
          </Heading>
          <Title>Lorem ipsum dolor</Title>
          <Description>
            Sit amet consectetur adipisicing elit. Voluptatum, dicta iure
            officiis sunt maxime reprehenderit veritatis laborum! Ipsam
            molestias quae, nam alias, hic mollitia, laborum repudiandae quaerat
            maiores fugiat soluta.
          </Description>
        </Box>
      </motion.div>
    </motion.div>
  )
}
