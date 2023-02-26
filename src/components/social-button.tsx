import { ReactNode } from "react"
import { motion } from 'framer-motion'

interface SocialButtonProps {
  children: ReactNode
  mouseEnterButton: () => void
  mouseLeave: () => void
  delay: number
}

export function SocialButton({children, mouseEnterButton, mouseLeave, delay}: SocialButtonProps) {
  return (
    <motion.a
      onMouseEnter={mouseEnterButton}
      onMouseLeave={mouseLeave}
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: delay }}
      className="rounded-md w-[40px] h-[40px] flex items-center justify-center cursor-pointer "
      href='https://github.com/MatheusFontenele'
      target="_blank"
    >
      {children}
    </motion.a>
  )
}
