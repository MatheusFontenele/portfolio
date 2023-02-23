import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface BoxCardProps { children: ReactNode, delay: number }

const BoxCard = ({ children, delay = 0 }: BoxCardProps) => (
  <motion.div
    initial={{ x: 25, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay }}
  >
    {children}
  </motion.div>
)

export default BoxCard
