import { useNavigate } from 'react-router'
import { RefObject } from 'react'
import Logo from '/logo.svg'

interface NavbarProps {
  scrollRef: RefObject<HTMLElement>
}

const Navbar = ({
  scrollRef
}: NavbarProps) => {

  const navigate = useNavigate()

  const handleScroll = (amount: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: amount,
        behavior: 'smooth'
      })
    }
  }

  const handleNavigate = (amount: number) => {
    navigate('/')
    setTimeout(() => {
      handleScroll(amount)
    }, 0); 
  }

  return (
    <nav className="bg-black/20 h-14 flex-shrink-0 rounded-xl backdrop-blur-xl sticky z-30 top-0 max-w-5xl w-full flex items-center justify-between px-6 ring-1 ring-black/20">
      <button 
        className="text-white text-lg font-medium text-center flex-shrink-0 cursor-pointer"
        onClick={() => handleNavigate(0)} // Scroll to top on home click
      > 
        <img src={Logo} alt="Karlle" className="w-6 h-6" />
      </button>
      <div className="flex items-center w-full justify-end space-x-6">
        <button 
          className="text-gray-400 font-semibold text-sm tracking-tight cursor-pointer" 
          onClick={() => handleNavigate(500)} // Scroll to Skills section
        >
          Skills
        </button>
        <button 
          className="text-gray-400 font-semibold text-sm tracking-tight cursor-pointer" 
          onClick={() => handleNavigate(1000)} // Scroll to Projects section
        >
          Projects
        </button>
      </div>
    </nav>
  )
}

export default Navbar
