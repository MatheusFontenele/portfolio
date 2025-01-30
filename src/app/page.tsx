'use client';
import Image from "next/image";
import { SocialButton } from "../../_src/components/social-button";
import { DiscordLogo, GithubLogo, Heart, InstagramLogo, LinkedinLogo, XLogo } from "@phosphor-icons/react/dist/ssr";
import { CardStory } from "@/components/card";
import { FlipWords } from "@/components/ui/flip-words";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";


export default function Home() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  const words = ["better", "cute", "beautiful", "modern"];

  const people = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Data Scientist",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "UX Designer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    // {
    //   id: 5,
    //   name: "Tyler Durden",
    //   designation: "Soap Developer",
    //   image:
    //     "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    // },
    // {
    //   id: 6,
    //   name: "Dora",
    //   designation: "The Explorer",
    //   image:
    //     "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
    // },
  ];

  const testimonials = [
    {
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "William Shakespeare",
      title: "Hamlet",
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
    },
    {
      quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
    },
    {
      quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
  ];
  
  
  useEffect(() => {
    if (!api) {
      return
    }
 
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
 
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <main className="wrapper">
      <div className="max-w-[84rem] w-full mx-auto relative z-20">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 pb-10">
          <div className="md:h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center">
            
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_1%,black)]"></div>

            <div className="h-[40rem] flex flex-col justify-center px-4">
              <h1 className="text-[44px] md:text-7xl font-bold mb-6 relative text-left dark:text-zinc-100 text-zinc-700 max-w-4xl">
                Build
                <FlipWords words={words} /> <br />
                websites with Aceternity UI
              </h1>
              <h2 className="relative text-sm sm:text-xl text-zinc-500 dark:text-zinc-300 tracking-wide mb-8 text-left max-w-2xl antialiased leading-loose">Copy paste the most trending components and use them in your websites without having to worry about styling and animations.</h2>

              <div className="flex flex-col md:flex-row md:space-x-4 space-y-4">
                <button className="bg-neutral-50 dark:bg-neutral-700 no-underline group cursor-pointer relative md:shadow-2xl shadow-zinc-900 rounded-xl p-px text-[10px] sm:text-xs font-semibold leading-6  text-neutral-700 dark:text-neutral-200 inline-block w-fit mb-4">
                    <div className="relative flex space-x-2 items-center z-10 rounded-md bg-neutral-100 dark:bg-neutral-800 py-1.5 px-4 ring-1 ring-green-400 ">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-green-400 text-base font-normal">Available</span>
                      <svg fill="none" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M10.75 8.75L14.25 12L10.75 15.25" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
                    </div>
                    <span className="absolute left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-neutral-400/0 via-neutral-400/90 to-neutral-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
                </button>

                <div className="flex flex-row mb-10 w-full items-center">
                  <AnimatedTooltip items={people} />
                  <div className="ml-8">
                    <span>
                      <strong>100+ </strong> <br/> Satisfied clients
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
          </div>

          <div className="flex w-full h-full relative flex-col justify-center ">
            <div
              className="row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4"
            >
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
              <div className="group-hover/bento:translate-x-2 transition duration-200">
                teste
                <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
                  teste
                </div>
                <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
                 teste
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-6 gap-y-4 mt-4 items-center">
              <CardStory/>
              <CardStory/>
            </div>
          </div>
        </div>
      </div>
      
      <section>
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/5">
              <Card className="h-44">
                <CardContent className="flex items-center justify-center h-full py-0">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        {/* Slide {current} of {count} */}
        {
          count > 1 && (
            <div className="flex md:hidden justify-center items-center gap-2 mt-4">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`w-2 h-2 rounded-full bg-neutral-200 dark:bg-neutral-700 ${current === index + 1 ? 'bg-neutral-400 dark:bg-neutral-400' : ''}`}
                />
              ))}
            </div>
          )
        }
      </div>

      </section>

      <section>
        <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </section>

      <section className=" flex flex-col items-center  lg:flex-row lg:justify-between">
          <div className="flex flex-col items-center justify-center">
            <div className="">
              <div className="flex flex-col max-w-4xl my-4">
                <span className="mb-6 font-semibold text-[#8892b0]">Hi, my name is, hi</span>
                <h2
                  className=" text-4xl text-[#ccd6f6] font-bold w-80"
                >
                  Matheus Oliveira
                </h2>
                <h2 className=" text-4xl mt-2 text-[#8892b0] font-bold mb-6">
                  I build things for the web.
                </h2>
                <span className="text-lg text-[#8892b0] lg:max-w-[400px]" style={{fontFamily: "Roboto Mono"}}>
                  Matheus is someone who is passionate about technology, sports and history. Someone who is fascinated to learn new things involving code lines, always looking improve my knowledge to solve the more simple real-life problem with code{' '}
                </span>
              </div>
            </div>
          </div>
          <Image 
            src="/profile.png"
            width={300}
            height={200}
            alt=".."
          />
      </section>

      <section>
        <div className="flex flex-col gap-y-4">
          <span className="uppercase text-zinc-500">portfolio</span>
          <span className="capitalize text-4xl font-normal">our latest work</span>
        </div>
        <div className="my-4">
            <span className="text-zinc-500 text-lg ">
              I'm looking for new opportunities at the moment, my inbox is
              always open. If you have a question or just want to say hi, I will
              try my best to answer it for you!
            </span>
        </div>
        <div className="">

        </div>
      </section>

      <footer className=" flex flex-col h-[60vh]">
        <div className="flex justify-between h-full items-center flex-col mx-auto gap-3">
          <div className="text-white md:fixed right-10 bottom-0 md:flex items-center flex-col after:content-[''] after:md:w-[1px] after:md:h-24 after:mx-auto after:bg-white md:gap-8 hidden">
            <a
              href=""
              className="font-bold text-base md:visible [writing-mode:vertical-lr]"
            >
              matheus.fontenele@icloud.com
            </a>
          </div>

          <div className="text-center items-center max-w-md flex flex-col px-6">
            <span className="text-zinc-500 font-normal">
              Thanks for scrolling.
            </span>
            <h2 className="text-4xl font-semibold my-3 text-zinc-100">Get In Touch</h2>
            <span className="text-zinc-500 text-lg ">
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
                  mouseEnterButton={()=>{}}
                  mouseLeave={()=>{}}
                  delay={0.3}
                >
                  <GithubLogo size={24} />

                </SocialButton>

                <SocialButton
                  mouseEnterButton={()=>{}}
                  mouseLeave={()=>{}}
                  delay={0.4}
                >
                  <InstagramLogo size={24} />

                </SocialButton>

                <SocialButton
                  mouseEnterButton={()=>{}}
                  mouseLeave={()=>{}}
                  delay={0.5}
                >
                  <XLogo size={24} />

                </SocialButton>

                <SocialButton
                  mouseEnterButton={()=>{}}
                  mouseLeave={()=>{}}
                  delay={0.6}
                >
                  <LinkedinLogo size={24} />
                </SocialButton>
                
                <SocialButton
                  mouseEnterButton={()=>{}}
                  mouseLeave={()=>{}}
                  delay={0.7}
                >
                  <DiscordLogo size={24} />

                </SocialButton>
              </div>
            </div>
            <span className="flex items-center gap-1 justify-center text-[#8892b0] mb-8">
              Build with <Heart fill="red" size={20} /> by Matheus
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
