import { Box } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'
import { AiOutlineArrowRight } from 'react-icons/ai'

export const ProjectCard = ({ children }) => (
  <Box
    w="90%"
    h={500}
    mb={6}
    display="flex"
    flexDirection="column"
    borderRadius={4}
    boxShadow={useColorModeValue('xl', 'md')}
    className="overflow-hidden bg-[#fffffe]"
  >
    <Box
      w="100%"
      h="50%"
      bg="linear-gradient(180deg, #ff008c 0%, rgb(211, 9, 225) 100%)"
    ></Box>
    <Box
      w="100%"
      display="flex"
      justifyContent="space-between"
      flexDirection="column"
      alignItems="flex-start"
      p={6}
      className="gap-4"
    >
      <Box className="flex justify-between items-center w-full">
        <a
          href=""
          className="text-[#0f0e17] text-2xl font-bold hover:underline"
        >
          E-fic
        </a>
        <span className="text-[#e53170] font-bold">Contabilidade</span>
      </Box>
      <span className="text-[#2e2f3e]  font-bold text-base">
        Black is a very powerful color... Well kind of. Black is the absence of
        color (ie light), which means it is not really a color itself. It has
        very high contrast, especially with white, so it's a popular color to
        use on the web.
      </span>
      <Box className="flex flex-col gap-4">
        <span className="text-[#0f0e17] font-bold text-xl">Tecs</span>
        <Box className="flex flex-wrap gap-1">
          <span className="bg-[#ff8906] text-[#fffffe] font-bold text-sm px-3 py-[10px] rounded-sm">
            Typescript
          </span>
          <span className="bg-[#ff8906] text-[#fffffe] font-bold text-sm px-3 py-[10px] rounded-sm">
            ReactJS
          </span>
          <span className="bg-[#ff8906] text-[#fffffe] font-bold text-sm px-3 py-[10px] rounded-sm">
            NodeJS
          </span>
          <span className="bg-[#ff8906] text-[#fffffe] font-bold text-sm px-3 py-[10px] rounded-sm">
            Postgres
          </span>
          <span className="bg-[#ff8906] text-[#fffffe] font-bold text-sm px-3 py-[10px] rounded-sm">
            tailwind
          </span>
          <span className="bg-[#ff8906] text-[#fffffe] font-bold text-sm px-3 py-[10px] rounded-sm">
            Typescript
          </span>
        </Box>
      </Box>
    </Box>
  </Box>
)
