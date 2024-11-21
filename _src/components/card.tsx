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
        duration: duration > 3 ? duration / 4 : duration / 5
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
      <div
        className="w-80 h-72 flex flex-col bg-[#112240] shadow-xl p-6 rounded"
      >
        <div className="flex justify-between mb-2">
          <FaRegFolder color='white' size={32} />{' '}
          <div className="flex justify-between gap-2 ">
            <BsGithub color='white'/> <FaExternalLinkAlt color='white'/>
          </div>
        </div>
        <div className='flex flex-col justify-between h-full'>
          <div className="flex flex-col">
            <span className='text-lg mb-2 font-bold text-[#ccd6f6]'
              style={{fontFamily: 'Roboto Mono'}}
            >
              {name}
            </span>
            <span
              className="my-2 text-sm text-[#8892b0]"
              style={{ fontFamily: 'Roboto Mono'}}
            >
              {description}
            </span>
          </div>
          <span className=" flex items-end text-[#ccd6f6]">
            Language:
            <strong>{language}</strong>
          </span>
        </div>
      </div>
    </motion.div>
  )
}
