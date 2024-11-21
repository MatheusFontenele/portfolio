export function Sidebar() {
  return (
    <aside className="fixed top-0 z-30 h-full  w-full backdrop-blur-sm">
      <div className="w-[500px] h-screen flex flex-col bg-[#020c1b] p-8">
        <div className="flex flex-1 items-center h-full">
          <div className="flex w-full gap-14">
            <ul className="flex flex-col gap-5">
              <h2 className="text-lg mb-4 text-[#8892b0]">Menu</h2>
              {/* <li className="text-5xl font-medium">Work</li>
              <li className="text-5xl font-medium">About</li>
              <li className="text-5xl font-medium">Services</li>
              <li className="text-5xl font-medium">Articles</li>
              <li className="text-5xl font-medium">Contacts</li> */}
            </ul>
            <ul className="flex flex-col gap-6">
              <h2 className="text-lg mb-4 text-[#8892b0]">Social</h2>
              <li className="text-xl font-medium">Linkedin</li>
              <li className="text-xl font-medium">Instagram</li>
              <li className="text-xl font-medium">Github</li>
              <li className="text-xl font-medium">Twitter</li>
              <li className="text-xl font-medium">Twitch</li>
            </ul>
          </div>
        </div>
        <div className="mb-12">
          <span className="block text-[#8892b0]">Get in touch</span>
          <span className="border-b pb-1">matheus.fontenele@icloud.com</span>
        </div>
      </div>
    </aside>
  )
}
