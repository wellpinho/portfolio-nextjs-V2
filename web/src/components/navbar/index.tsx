import Link from "next/link"
import { EnvelopeSimple, GithubLogo, LinkedinLogo, List, User, X } from "@phosphor-icons/react"
import { useState } from "react"

const Navbar = () => {
  const logo = '< Wellpinho />'
  const [nav, setNav] = useState(false)

  const handleNave = () => {
    setNav(!nav)
  }

return (
  <div className="fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300">
    <div className="flex justify-between items-center max-w-screen-lg h-full px-2 2xl:px-16">
      <h2>{logo}</h2>

      <ul className="hidden md:flex">
        <Link href="">
        <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
        </Link>
        <Link href="">
        <li className="ml-10 text-sm uppercase hover:border-b">About</li>
        </Link>
        <Link href="">
        <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
        </Link>
        <Link href="">
        <li className="ml-10 text-sm uppercase hover:border-b">Projects</li>
        </Link>
        <Link href="">
        <li className="ml-10 text-sm uppercase hover:border-b">Contact</li>
        </Link>
      </ul>

      <div onClick={handleNave} className="md:hidden">
        <List size={25} />
      </div>
    </div>

    <div className={nav ? 'md:hidden fixed left-0 w-full h-screen bg-black/70' : ''}>
      <div className={nav 
          ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
          : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
        <div>
          <div className="flex w-full items-center justify-between">
            <div onClick={handleNave} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
              <X size={25} />
            </div>
          </div>
          <div className="border-b border-gray-300 my-4">
            <p className="w-[85%] md:w-[90%] py-4">Let`s build something legendary together</p>
          </div>
        </div>
        <div className="py-4 flex flex-col">
          <ul className="uppercase">
            <Link href="">
            <li className="py-4 text-sm">Home</li>
            </Link>
            <Link href="">
            <li className="py-4 text-sm">About</li>
            </Link>
            <Link href="">
            <li className="py-4 text-sm">Skills</li>
            </Link>
            <Link href="">
            <li className="py-4 text-sm">Projects</li>
            </Link>
            <Link href="">
            <li className="py-4 text-sm">Contact</li>
            </Link>
          </ul>

          <div className="pt-40">
            <p className="uppercase tracking-widest text-[#5651e5]">Let`s Connect</p>

            <div className="flex items-center justify-between my-4 w-full sm:w-[100%]">
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                <LinkedinLogo size={25} weight="thin" />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                <GithubLogo size={25} weight="thin" />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                <EnvelopeSimple size={25} weight="thin" />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-500">
                <User size={25} weight="thin" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
}

export default Navbar