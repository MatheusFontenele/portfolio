import type { GetStaticProps } from 'next'
import { motion, Variants } from 'framer-motion'

import { RiDiscordLine } from 'react-icons/ri'
import { FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi'
import { BsInstagram } from 'react-icons/bs'
import { FcLike } from 'react-icons/fc'

import Section from '../components/sections'
import Card from '../components/card'
import { ProjectCard } from '../components/project-card'

import Hello from '../../public/hello.svg'

import axios from 'axios'
import { useRef, useState } from 'react'
import { useFollowPointer } from '../components/Utils/useFollowPointer'
import { SocialButton } from '../components/social-button'

interface RepoProps {
  id: number
  name: string
  description: string
  language: string
}

interface homeProps {
  repositoriesData: RepoProps[]
}

export default function Home({ repositoriesData }: homeProps) {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  const [cursorVariant, setCursorVariant] = useState('default')

  const variants: Variants = {
    default: { x, y },
    text: {
      x, y,
      width: 150,
      height: 150,
      mixBlendMode: 'difference',
      backgroundColor: '#FFFF00',
    },
    button: {
      x, y,
      width: 50,
      height: 50,
      mixBlendMode: 'difference',
      backgroundColor: '#FFFF00'
    }
  }

  const transitionConfig = { 
    type: "spring",
    damping: 8,
    stiffness: 80,
    restDelta: 0.001
  }

  const mouseEnterText = () => setCursorVariant('text')
  const mouseLeave = () => setCursorVariant('default')
  const mouseEnterButton = () => setCursorVariant('button')

  return (
    <div className=" relative md:gap-6 flex flex-col ">
      {/* bolinha que segue o cursor */}
      <motion.div
        ref={ref}
        className="bg-[#8892b0] w-8 h-8 rounded-full fixed top-0 left-0 pointer-events-none z-40 hidden sm:block"
        transition={transitionConfig}
        variants={variants}
        animate={cursorVariant}
      />

      <div className="h-[70vh] md:h-[80vh] mx-auto max-w-4xl flex flex-col justify-center items-center">
        <div className="flex-1 flex items-center max-w-xs">
          <Hello />
        </div>

        <motion.div
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="w-full hidden md:flex justify-center items-end"
        >
          <div className="w-[35px] h-[60px] border-2 border-white rounded-full relative">
            <div className="absolute w-[3px] h-[10px] bg-white rounded-full mx-[14px] mt-3 animate-bounce "/>
          </div>
        </motion.div>
      </div>

      {/* secao de apresentacao */}
      <div className="h-screen md:h-[60vh] mx-auto p-8 before:content-[''] before:p-4 md:before:content-['About'] before:text-[#8892b0]/5 before:absolute before:text-9xl before:font-bold">
        <div className="sm:px-24 md:justify-between h-full flex flex-col items-center justify-center md:flex-row">
          <Section delay={0.2}>
            <div className="mb-20 flex flex-col max-w-4xl">
              <span className="mb-6 font-semibold text-[#8892b0]">Hi, my name is, hi</span>
              <h2
                onMouseEnter={mouseEnterText}
                onMouseLeave={mouseLeave}
                className=" text-4xl text-[#ccd6f6] font-bold w-80"
              >
                Matheus Oliveira
              </h2>
              <h2 className=" text-4xl mt-2 text-[#8892b0] font-bold mb-6">
                I build things for the web.
              </h2>
              <span className="text-lg text-[#8892b0]" style={{fontFamily: "Roboto Mono"}}>
                Matheus is someone who is passionate about technology, sports
                and history. Someone who is fascinated to learn new things
                involving code lines, always looking improve my knowledge to
                solve the more simple real-life problem with code{' '}
              </span>
            </div>
            <a href="#" className="bg-transparent w-52 h-12 border border-[#ccd6f6] rounded text-base text-[#ccd6f6]">
              Check out my resume
            </a>
          </Section>
        </div>
      </div>

      {/* secao dos repositorios */}
      <div className="max-w-6xl mx-auto mt-8 flex flex-col justify-center px-8">
        <div>
          <div className="flex flex-col justify-center items-center w-full my-8">
            <h2 className="text-[#ccd6f6] font-bold text-2xl mb-8">
              Other Noteworthy Projects
            </h2>
            <span></span>
          </div>
          <div className="flex-1 flex justify-center flex-wrap gap-5">
            {repositoriesData.map((repo, index) => {
              return (
                <Card
                  key={repo.id}
                  name={repo.name}
                  description={repo.description}
                  language={repo.language}
                  duration={index}
                />
              )
            })}
          </div>
        </div>
      </div>

      {/* secao dos projetos */}
      <div className="mt-12 px-8 flex relative items-center justify-center flex-col">
        <div className="flex flex-col justify-center items-center w-full my-8">
          <h2 className="text-[#ccd6f6] font-bold text-2xl">
            Main Projects
          </h2>
          <span></span>
        </div>
        <div className="flex flex-col relative md:flex-row w-full max-w-5xl justify-between py-16 gap-8 ">
          <div className="flex max-w-md h-40 md:sticky md:top-8 flex-col gap-4">
            <h2 className="text-2xl font-bold text-[#fffffe]">
              Some Things I’ve Built
            </h2>
            <span className="text-lg text-[#8892b0]">
              Each color portrays a different feeling or emotion, and by
              understanding the psychology of color, you can choose a color that
              will resonate with your target audience and give off the vibe &
              emotion you want.
            </span>
          </div>
          <div className="flex items-center md:items-end flex-1 flex-col">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
      </div>

      {/* footer */}
      <footer className=" flex flex-col h-[60vh]">
        <div className="flex justify-between h-full items-center flex-col mx-auto gap-3">
          <div className="text-[#a8b2d1] md:fixed right-10 bottom-0 md:flex items-center flex-col after:content-[''] after:md:w-[1px] after:md:h-24 after:mx-auto after:bg-[#a8b2d1] md:gap-8 hidden">
            <motion.a
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              href=""
              className="font-bold text-base md:visible [writing-mode:vertical-lr]"
            >
              matheus.fontenele@icloud.com
            </motion.a>
          </div>

          <div className="text-center items-center max-w-md flex flex-col px-6">
            <span className="text-[#8892b0] font-semibold">
              Thanks for scrolling.
            </span>
            <h2 className="text-4xl font-semibold my-3 text-[#ccd6f6]">Get In Touch</h2>
            <span className="text-[#8892b0] text-lg ">
              I'm looking for new opportunities at the moment, my inbox is
              always open. If you have a question or just want to say hi, I will
              try my best to answer it for you!
            </span>

            <button className="h-12 w-40 border mt-12 font-semibold text-[#a8b2d1] border-[#a8b2d1] rounded-lg">
              Say hi
            </button>
          </div>

          <div>
            <div className=" justify-center items-center flex md:flex-col flex-row md:bottom-0 md:left-10 md:fixed ">
              <div className=" flex md:flex-col w-full justify-between items-center after:md:content-[''] after:md:w-[1px] after:h-24 after:md:mx-auto after:bg-[#a8b2d1] md:gap-4">
                <SocialButton
                  mouseEnterButton={mouseEnterButton}
                  mouseLeave={mouseLeave}
                  delay={0.3}
                >
                  <FiGithub size={24} color="#a8b2d1" />
                </SocialButton>

                <SocialButton
                  mouseEnterButton={mouseEnterButton}
                  mouseLeave={mouseLeave}
                  delay={0.4}
                >
                  <BsInstagram size={24} color="#a8b2d1" />
                </SocialButton>

                <SocialButton
                  mouseEnterButton={mouseEnterButton}
                  mouseLeave={mouseLeave}
                  delay={0.5}
                >
                  <FiTwitter size={24} color="#a8b2d1" />
                </SocialButton>

                <SocialButton
                  mouseEnterButton={mouseEnterButton}
                  mouseLeave={mouseLeave}
                  delay={0.6}
                >
                  <FiLinkedin size={24} color="#a8b2d1" />
                </SocialButton>
                
                <SocialButton
                  mouseEnterButton={mouseEnterButton}
                  mouseLeave={mouseLeave}
                  delay={0.7}
                >
                  <RiDiscordLine size={24} color="#a8b2d1" />
                </SocialButton>
              </div>
            </div>
            <span className="flex items-center gap-1 justify-center text-[#8892b0] mb-8">
              Build with <FcLike /> by Matheus
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const repositories = await axios.get(
    'https://api.github.com/users/MatheusFontenele/repos',
    {
      params: {
        per_page: 9
      }
    }
  )

  const repositoriesData = repositories.data.map((repo: RepoProps) => {
    return {
      id: repo.id,
      name: repo.name,
      description: repo.description,
      language: repo.language
    }
  })
  // const data = user.data
  return {
    props: { repositoriesData }
  }
}
