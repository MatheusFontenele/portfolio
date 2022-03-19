import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'

export const ProjectCard = ({ children }) => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    style={{
      background: 'linear-gradient(180deg, #ff008c 0%, rgb(211, 9, 225) 100%)',
      borderRadius: '8px'
    }}
  >
    <Box
      w={240}
      h={200}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {children}
    </Box>
  </motion.button>
)
