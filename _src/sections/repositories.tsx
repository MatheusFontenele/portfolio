import Card from "../components/card"

interface RepoProps {
  id: number
  name: string
  description: string
  language: string
}

interface RepositoriesProps {
  repositoriesData: RepoProps[]
}

const Repositories = ({repositoriesData}: RepositoriesProps) => {
  return (
    <div className="max-w-6xl mx-auto mt-8 flex flex-col justify-center">
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
  );
}
 
export default Repositories;