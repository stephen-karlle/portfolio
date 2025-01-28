import { RefObject } from 'react'
import Logo from '/logo.svg'

interface NavbarProps {
  scrollRef: RefObject<HTMLElement>
}

const Navbar = ({
  scrollRef
}: NavbarProps
) => {

  const handleScroll = (amount: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: amount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <nav className="bg-black/20 h-14 flex-shrink-0 rounded-xl backdrop-blur-xl sticky z-20 top-0 max-w-5xl w-full flex items-center justify-between px-6 ring-1 ring-black/20">
      <button 
        className="text-white text-lg font-medium text-center flex-shrink-0 cursor-pointer"
        onClick={() => handleScroll(0)}
      > 
        <img src={Logo} alt="Karlle" className="w-6 h-6" />
      </button>
      <div className="flex items-center w-full justify-end space-x-6">
        <button className="text-gray-400 font-semibold text-sm tracking-tight cursor-pointer" onClick={() => handleScroll(500)}>Skills</button>
        <button className="text-gray-400 font-semibold text-sm tracking-tight cursor-pointer" onClick={() => handleScroll(1000)}>Projects</button>
      </div>
    </nav>
  )
}

export default Navbar
