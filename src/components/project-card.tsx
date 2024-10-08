import { Box } from '@chakra-ui/react'

export const ProjectCard = () => (
  <div
    className="h-[500px] relative flex flex-col rounded w-full mb-6 overflow-hidden"
  >
    <Box
      w="100%"
      h="100%"
      bg="linear-gradient(180deg, #ff008c 0%, rgb(211, 9, 225) 100%)"
      className="relative "
    ></Box>
    <Box
      display="flex"
      justifyContent="space-between"
      flexDirection="column"
      alignItems="flex-start"
      p={6}
      className="gap-4 absolute h-full"
    >
      <Box className="gap-4 flex flex-col">
        <Box className="flex justify-between items-center w-full">
          <a
            href=""
            className="text-[#ccd6f6] text-2xl font-bold hover:underline"
          >
            E-fic
          </a>
          <span className="text-[#e53170] font-bold">Contabilidade</span>
        </Box>
        <span className="text-[#2e2f3e]  font-bold text-base">
          Black is a very powerful color... Well kind of. Black is the absence
          of color (ie light), which means it is not really a color itself. It
          has very high contrast, especially with white, so it's a popular color
          to use on the web.
        </span>
      </Box>
      <Box className="flex justify-end flex-col gap-4">
        <span className="text-[#0f0e17] font-bold text-xl">Tecs</span>
        <Box className="flex flex-wrap gap-1">
          <span className="bg-[#ff8906] text-[#fffffe] font-bold text-sm px-3 py-[4px] rounded">
            Typescript
          </span>
          <span className="bg-[#ff8906] text-[#fffffe] font-bold text-sm px-3 py-[4px] rounded">
            ReactJS
          </span>
          <span className="bg-[#ff8906] text-[#fffffe] font-bold text-sm px-3 py-[4px] rounded">
            NodeJS
          </span>
          <span className="bg-[#ff8906] text-[#fffffe] font-bold text-sm px-3 py-[4px] rounded">
            Postgres
          </span>
          <span className="bg-[#ff8906] text-[#fffffe] font-bold text-sm px-3 py-[4px] rounded">
            tailwind
          </span>
        </Box>
      </Box>
    </Box>
  </div>
)
