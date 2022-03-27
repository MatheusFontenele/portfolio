import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useColorModeValue } from '@chakra-ui/react'

export const ProjectCard = ({ children }) => (
  <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
    <Box
      w={240}
      h={300}
      mr={6}
      mb={6}
      display="flex"
      flexDirection="column"
      borderRadius={12}
      bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
    >
      <Box
        w="100%"
        h="50%"
        bg="linear-gradient(180deg, #ff008c 0%, rgb(211, 9, 225) 100%)"
        borderRadius="12px"
      ></Box>
      <Box
        h="50%"
        w="100%"
        display="flex"
        justifyContent="space-between"
        flexDirection="column"
        alignItems="flex-start"
        p={6}
      >
        <span>
          <strong>E-fic Contabilidade</strong>
        </span>
        <span
          style={{
            textDecoration: 'underline'
          }}
        >
          <a href="">Saiba mais</a>
        </span>
      </Box>
    </Box>
  </motion.button>
)
