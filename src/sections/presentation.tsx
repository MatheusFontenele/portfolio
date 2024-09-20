import React from "react";
import Section from "../components/sections";
import Button from "../components/button";

interface PresentationProps {
  mouseEnterText: () => void;
  mouseLeave: () => void;
  mouseEnterResume: () => void;
}
 
const Presentation = ({mouseEnterText, mouseLeave, mouseEnterResume}: PresentationProps) => {
  return (
    <div className="h-scree max-w-6xl md:h-[60vh] mx-auto before:content-[''] before:p-4 md:before:content-['About'] before:text-[#8892b0]/5 before:absolute before:text-9xl before:font-bold">
        <div className="px-4 md:justify-between h-full flex flex-col items-center justify-center md:flex-row">
          <Section delay={0.2}>
            <div className="flex md:gap-x-12 flex-col gap-y-10 md:flex-row items-center">
              <div className="flex-1">
                <div className="mb-16 flex flex-col max-w-4xl">
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
                    Matheus is someone who is passionate about technology, sports and history. Someone who is fascinated to learn new things involving code lines, always looking improve my knowledge to solve the more simple real-life problem with code{' '}
                  </span>
                </div>
                <Button
                  onMouseEnter={mouseEnterResume}
                  onMouseLeave={mouseLeave}
                  text="Check out my resume"
                />
              </div>

              <div className="w-[320px] h-[400px] bg-black rounded-2xl">
                <div className="">.</div>
              </div>
            </div>
          </Section>
        </div>
      </div>
  );
}
 
export default Presentation;