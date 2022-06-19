import { Box, Text, Link } from '@chakra-ui/react'
import type { GetStaticProps } from 'next'
import { motion } from 'framer-motion'

import Section from '../components/sections'
import { RiDiscordLine } from 'react-icons/ri'
import { FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi'
import { BsInstagram } from 'react-icons/bs'
import { FcLike } from 'react-icons/fc'

import Card from '../components/card'
import { ProjectCard } from '../components/project-card'
import axios from 'axios'
import { MouseEvent, useEffect, useState } from 'react'

interface RepoProps {
  id: string
  name: string
  description: string
  language: string
}

interface homeProps {
  reposositoriesData: RepoProps[]
}

export default function Home({ reposositoriesData }: homeProps) {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  })

  const [cursorVariant, setCursorVariant] = useState('default')

  useEffect(() => {
    const mouseMove = event => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY
      })
    }
    window.addEventListener('mousemove', mouseMove)

    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16
    },
    text: {
      width: 150,
      height: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      mixBlendMode: 'difference',
      backgroundColor: 'yellow'
    }
  }

  console.log(cursorVariant)

  const mouseEnterText = () => setCursorVariant('text')
  const mouseLeaveText = () => setCursorVariant('default')

  return (
    <Box className=" relative md:gap-6 flex flex-col ">
      <motion.div
        className="bg-[#a8b2d1] w-8 h-8 rounded-full fixed top-0 left-0 pointer-events-none"
        variants={variants}
        animate={cursorVariant}
      />
      <Box className=" h-screen md:h-[90vh] py-12">
        <Box className="max-w-4xl sm:px-24 lg:px-8 px-8  mx-auto md:justify-between h-full w-full flex flex-col items-center justify-center md:flex-row">
          <Section delay={0.2}>
            <Box className="mb-20 flex flex-col ">
              <span className="mb-6 font-semibold">Hi, my name is, hi</span>
              <h2
                onMouseEnter={mouseEnterText}
                onMouseLeave={mouseLeaveText}
                className=" text-4xl text-[#ccd6f6] font-bold"
              >
                Matheus Oliveira
              </h2>
              <h2 className=" text-4xl mt-2 text-[#8892b0] font-bold mb-6">
                I build things for the web.
              </h2>
              <Text fontFamily="Roboto Mono" className="text-lg text-[#8892b0]">
                Matheus is someone who is passionate about technology, sports
                and history. Someone who is fascinated to learn new things
                involving code lines, always looking improve my knowledge to
                solve the more simple real-life problem with code{' '}
              </Text>
            </Box>
            <button className="bg-transparent w-80 h-16 border border-[#ccd6f6] rounded-lg text-xl text-[#ccd6f6]">
              Check out my resume
            </button>
          </Section>
        </Box>
      </Box>
      <Box className="max-w-6xl mx-auto mt-8 flex flex-col justify-center">
        <Box>
          <Box className="flex flex-col justify-center  items-center w-full my-8">
            <h2 className="text-[#ccd6f6] font-bold text-2xl mb-8">
              Other Noteworthy Projects
            </h2>
            <span></span>
          </Box>
          <Box className="flex-1 grid md:grid-cols-3 gap-4">
            {reposositoriesData.map(repo => {
              return (
                <Card
                  key={repo.id}
                  name={repo.name}
                  description={repo.description}
                  language={repo.language}
                />
              )
            })}
          </Box>
        </Box>
      </Box>

      <Box className="mt-12 px-8">
        <Box className="flex flex-col md:flex-row max-w-6xl w-full justify-between py-24 relative mx-auto gap-8">
          <Box className="flex max-w-md h-full md:sticky md:top-16 flex-col gap-4">
            <h2 className="text-2xl font-bold text-[#fffffe]">
              Some Things I’ve Built
            </h2>
            <span className="text-lg text-[#8892b0]">
              Each color portrays a different feeling or emotion, and by
              understanding the psychology of color, you can choose a color that
              will resonate with your target audience and give off the vibe &
              emotion you want.
            </span>
          </Box>
          <Box className="flex items-center md:items-end flex-1 flex-col">
            <ProjectCard>
              <h1>a</h1>
            </ProjectCard>
            <ProjectCard>
              <h1>a</h1>
            </ProjectCard>
            <ProjectCard>
              <h1>a</h1>
            </ProjectCard>
            <ProjectCard>
              <h1>a</h1>
            </ProjectCard>
          </Box>
        </Box>
      </Box>

      <footer className=" flex flex-col h-[60vh]">
        <Box className="flex justify-between h-full items-center flex-col mx-auto gap-3">
          <Box className="text-[#a8b2d1] md:fixed right-10 bottom-0 md:flex items-center flex-col after:content-[''] after:md:w-[1px] after:md:h-24 after:mx-auto after:bg-[#a8b2d1] md:gap-8 hidden">
            <a
              href=""
              className="font-bold text-base md:visible"
              style={{
                writingMode: 'vertical-lr',
                textOrientation: 'mixed'
              }}
            >
              matheus.fontenele@icloud.com
            </a>
          </Box>

          <Box className="text-center items-center max-w-md flex flex-col px-6">
            <span className="text-[#8892b0] font-semibold">
              Thanks for scrolling.
            </span>
            <h2 className="text-4xl font-semibold my-3">Get In Touch</h2>
            <span className="text-[#8892b0] text-lg ">
              I'm looking for new opportunities at the moment, my inbox is
              always open. If you have a question or just want to say hi, I will
              try my best to answer it for you!
            </span>

            <button className="h-12 w-40 border mt-12 font-semibold text-[#a8b2d1] border-[#a8b2d1] rounded-lg">
              Say hi
            </button>
          </Box>

          <Section delay={0.3}>
            <Box className=" justify-center items-center flex md:flex-col flex-row md:bottom-0 md:left-10 md:fixed ">
              <Box className=" flex md:flex-col w-full justify-between items-center after:md:content-[''] after:md:w-[1px] after:h-24 after:md:mx-auto after:bg-[#a8b2d1] md:gap-4">
                <Link
                  href="/"
                  className="rounded-md   w-[40px] h-[40px] flex items-center justify-center"
                >
                  <FiGithub size={24} color="#a8b2d1" />
                </Link>

                <Link
                  href="/"
                  className="rounded-md  w-[40px] h-[40px] flex items-center justify-center"
                >
                  <BsInstagram size={24} color="#a8b2d1" />
                </Link>

                <Link
                  href="/"
                  className="rounded-md   w-[40px] h-[40px] flex items-center justify-center"
                >
                  <FiTwitter size={24} color="#a8b2d1" />
                </Link>

                <Link
                  href="/"
                  className="rounded-md   w-[40px] h-[40px] flex items-center justify-center"
                >
                  <FiLinkedin size={24} color="#a8b2d1" />
                </Link>

                <Link
                  href="/"
                  className="rounded-md   w-[40px] h-[40px] flex items-center justify-center md:mb-8"
                >
                  <RiDiscordLine size={24} color="#a8b2d1" />
                </Link>
              </Box>
            </Box>
            <span className="flex items-center gap-1 justify-center text-[#8892b0]">
              Build with <FcLike /> by Matheus
            </span>
          </Section>
        </Box>
      </footer>
    </Box>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const user = await axios.get('https://api.github.com/users/MatheusFontenele')
  const repositories = await axios.get(
    'https://api.github.com/users/MatheusFontenele/repos'
  )

  const reposositoriesData = repositories.data.map((repo: RepoProps) => {
    return {
      id: repo.id,
      name: repo.name,
      description: repo.description,
      language: repo.language
    }
  })
  const data = user.data
  return {
    props: { data, reposositoriesData }
  }
}
