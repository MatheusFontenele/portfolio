import { Box, Image, Text, Link, Button, Icon } from '@chakra-ui/react'
import type { GetStaticProps } from 'next'

import Section from '../components/sections'
import { RiDiscordLine } from 'react-icons/ri'
import { FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi'
import { BsInstagram } from 'react-icons/bs'

import Card from '../components/card'
import { ProjectCard } from '../components/project-card'

import axios from 'axios'

interface RepoProps {
  name: string
  description: string
  language: string
}

interface homeProps {
  reposositoriesData: RepoProps[]
}

export default function Home({ reposositoriesData }: homeProps) {
  return (
    <Box className=" relative md:gap-6 flex flex-col ">
      <Box className="bg-[#0f0e17] h-[80vh] px-8">
        <Box className="max-w-4xl mx-auto h-full w-full flex flex-col items-center justify-between md:flex-row">
          <Section delay={0.2}>
            <Box className="max-w-md mb-20 flex flex-col gap-14 ">
              <h2 className=" text-5xl text-[#fffffe] font-bold mb-3">
                Who's behind Happy Hues?
              </h2>
              <Text fontFamily="Roboto Mono" className="text-xl text-[#a7a9be]">
                Matheus is someone who is passionate about technology, sports
                and history. Someone who is fascinated to learn new things
                involving code lines, always looking improve my knowledge to
                solve the more simple real-life problem with code{' '}
              </Text>
            </Box>
            <button className="bg-[#ff8906] w-80 h-16 rounded-lg text-xl font-medium">
              Check out my course
            </button>
          </Section>

          <Box>
            <Box className="md:flex md:flex-col">
              <Image
                src="https://avatars.githubusercontent.com/u/94790993?v=4"
                alt="profile Photo"
                className="max-w-[400px] mx-auto rounded-lg grayscale "
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="max-w-6xl mx-auto mt-20 flex flex-col justify-center">
        <Box>
          <Box className="flex flex-col justify-center  items-center w-full my-8">
            <h2 className="text-[#0f0e17] font-bold text-2xl mb-8">
              Other Noteworthy Projects
            </h2>
            <span></span>
          </Box>
          <Box className="flex-1 grid grid-cols-3 gap-4">
            {reposositoriesData.map(repo => {
              return (
                <Card
                  name={repo.name}
                  description={repo.description}
                  language={repo.language}
                />
              )
            })}
          </Box>
        </Box>
      </Box>

      <Box className="mt-12 px-8 bg-[#0f0e17]">
        <Box className="flex max-w-6xl w-full justify-between py-24 relative mx-auto gap-8">
          <Box className="flex max-w-md h-full sticky top-16 flex-col gap-4">
            <h2 className="text-5xl font-bold text-[#fffffe]">
              Some Things I’ve Built
            </h2>
            <span className="text-xl text-[#a7a9be]">
              Each color portrays a different feeling or emotion, and by
              understanding the psychology of color, you can choose a color that
              will resonate with your target audience and give off the vibe &
              emotion you want.
            </span>
          </Box>
          <Box className="flex items-end w-full flex-col">
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

      <footer className=" flex  py-12 items-center flex-col h-[90vh]">
        <Box className="flex justify-center flex-col mx-auto gap-3">
          <Image
            src="../../assets/Math.png"
            alt=""
            width={200}
            height={200}
            className="text-white"
          />

          <Box className="text-[#e53170] fixed right-10 bottom-0 flex items-center flex-col after:content-[''] after:w-[1px] after:h-24 after:mx-auto after:bg-[#e53170] gap-8">
            <a
              href=""
              className="font-bold text-base"
              style={{
                writingMode: 'vertical-lr',
                textOrientation: 'mixed'
              }}
            >
              matheus.fontenele@icloud.com
            </a>
          </Box>

          <span className="text-[#0f0e17]">
            <strong>Thanks for scrolling.</strong> That's all folks{' '}
          </span>

          <Section delay={0.3}>
            <Box className="flex flex-col bottom-0 left-10 gap-2 fixed ">
              <Box className=" flex flex-col after:content-[''] after:w-[1px] after:h-24 after:mx-auto after:bg-[#e53170] gap-6">
                <Link href="/" className="rounded-md  ">
                  <FiGithub size={24} color="#e53170" />
                </Link>

                <Link href="/" className="rounded-md">
                  <BsInstagram size={24} color="#e53170" />
                </Link>

                <Link href="/" className="rounded-md ">
                  <FiTwitter size={24} color="#e53170" />
                </Link>

                <Link href="/" className="rounded-md ">
                  <FiLinkedin size={24} color="#e53170" />
                </Link>

                <Link href="/" className="rounded-md mb-8">
                  <RiDiscordLine size={24} color="#e53170" />
                </Link>
              </Box>
            </Box>
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
