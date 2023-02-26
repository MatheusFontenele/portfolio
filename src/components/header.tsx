import NextLink from 'next/link'
import { useState } from 'react'

const LinkItem = ({ href, path, children }: any) => {
  const active = path === href
  return (
    <NextLink href={href}>
      <a className="text-xl font-medium p-2"> {children} </a>
    </NextLink>
  )
}
//any temporario
export const Header = (props: any) => {
  const { path } = props
  
  const [menuOpened, setMenuOpened] = useState(false)

  function openMenu(){
    setMenuOpened(!menuOpened);
    console.log(menuOpened);
  }

  return (
    <nav
      className="w-full" 
      {...props}
    >
      <div
        className="max-w-full p-8 flex flex-wrap items-center justify-between"
      >
        <button className="flex flex-col gap-1 m-4" onClick={openMenu}>
          <div className="w-4 h-[3px] mx-auto bg-slate-100 rounded-sm"></div>
          <div className="w-6 h-[3px] bg-slate-100 rounded-full"></div>
          <div className="w-4 h-[3px] mx-auto bg-slate-100 rounded-sm"></div>
        </button>

        <div className="gap-4 flex flex-1 justify-end">
          <div className='flex items-center'>
          </div>
        </div>
      </div>
    </nav>
  )
}

