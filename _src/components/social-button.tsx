import { ReactNode } from "react"

interface SocialButtonProps {
  children: ReactNode
  mouseEnterButton: () => void
  mouseLeave: () => void
  delay: number
}

export function SocialButton({children, mouseEnterButton, mouseLeave, delay}: SocialButtonProps) {
  return (
    <a
      className="rounded-md w-[40px] h-[40px] flex items-center justify-center cursor-pointer "
      href='https://github.com/MatheusFontenele'
      target="_blank"
    >
      {children}
    </a>
  )
}
