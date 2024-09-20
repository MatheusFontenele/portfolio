import { ProjectCard } from "../components/project-card";

interface ProjectsProps {
  
}
 
const Projects = () => {
  return (
    <div className="mt-12 px-4 max-w-6xl w-full flex relative items-center justify-center flex-col">
        <div className="flex flex-col justify-center items-center w-full my-8">
          <h2 className="text-[#ccd6f6] font-bold text-2xl">
            Main Projects
          </h2>
          <span></span>
        </div>
        <div className="flex flex-col relative md:flex-row w-full justify-center py-16 gap-8">
          <div className="flex max-w-md h-40 md:sticky md:top-8 flex-col gap-4">
            <h2 className="text-2xl font-bold text-[#fffffe]">
              Some Things I’ve Built
            </h2>
            <span className="text-lg text-[#8892b0]">
              This section highlights some of the projects I've developed over time. Each of them reflects my passion for technology and my continuous search for creative and efficient solutions. Check out some of the things I've built.
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
  );
}
 
export default Projects;