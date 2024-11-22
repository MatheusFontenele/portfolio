import Image from "next/image";
import { SocialButton } from "../../_src/components/social-button";
import { DiscordLogo, GithubLogo, Heart, InstagramLogo, LinkedinLogo, XLogo } from "@phosphor-icons/react/dist/ssr";
import { CardStory } from "@/components/card";
import { FlipWords } from "@/components/ui/flip-words";

export default function Home() {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
    <main className="wrapper">
      <div className="max-w-[84rem] w-full mx-auto relative z-20">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 pb-10">
          <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center">
            
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_1%,black)]"></div>
            {/* <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
            </p> */}

            <div className="h-[40rem] flex flex-col justify-center px-4">

              <button className="bg-neutral-50 dark:bg-neutral-700 no-underline group cursor-pointer relative md:shadow-2xl shadow-zinc-900 rounded-full p-px text-[10px] sm:text-xs font-semibold leading-6  text-neutral-700 dark:text-neutral-200 inline-block w-fit mb-4">
                  <div className="relative flex space-x-2 items-center z-10 rounded-full bg-neutral-100 dark:bg-neutral-800 py-1.5 px-4 ring-1 ring-green-400 ">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-green-400">Available</span>
                    <svg fill="none" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M10.75 8.75L14.25 12L10.75 15.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></svg>
                  </div>
                  <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-neutral-400/0 via-neutral-400/90 to-neutral-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
              </button>

              <h1 className="text-4xl md:text-7xl font-bold mb-6 relative text-left dark:text-zinc-100 text-zinc-700 max-w-4xl">
                Build
                <FlipWords words={words} /> <br />
                websites with Aceternity UI
              </h1>
              <h2 className="relative text-sm sm:text-xl text-zinc-500 dark:text-zinc-300 tracking-wide mb-8 text-left max-w-2xl antialiased leading-loose">Copy paste the most trending components and use them in your websites without having to worry about styling and animations.</h2>
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
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-6 mt-4">
              <CardStory/>
              <CardStory/>
            </div>
          </div>
        </div>
      </div>

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
