import Image from "next/image";
import { SocialButton } from "../../_src/components/social-button";
import { DiscordLogo, GithubLogo, Heart, InstagramLogo, LinkedinLogo, XLogo } from "@phosphor-icons/react/dist/ssr";

export default function Home() {
  return (
    <main className="wrapper">
      <section className="hello">
        <Image
          priority
          src="/hello.svg"
          height={200}
          width={200}
          alt="hello"
          className="flex-1"
        />
        <div className="hidden md:flex">
          <div className="mouse">
            <div className="scroll"/>
          </div>
        </div>
      </section>

      <section className=" flex flex-col items-center  lg:flex-row lg:justify-between lg:h-screen">
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
          <div className="text-[#a8b2d1] md:fixed right-10 bottom-0 md:flex items-center flex-col after:content-[''] after:md:w-[1px] after:md:h-24 after:mx-auto after:bg-[#a8b2d1] md:gap-8 hidden">
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
