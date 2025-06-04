import BeamBorder from "@components/animations/beam-border"
import Vignette from "@components/effects/vignette"
import Topbar from "./topbar"
import Panels from "./panels"
import { UserIcon } from "@icons"




const About = () => {

  return (
    <section id="about" className="w-full flex flex-col justify-center items-center z-10 max-w-4xl relative">

      <div className="w-full flex flex-col items-center md:items-start justify-center mb-12"> 
        <div className="flex flex-row items-center justify-center mb-4 mt-24">
          <UserIcon className="w-4 h-4 stroke-2 stroke-green-500" />
          <p className="text-gray-200 text-sm font-medium ml-2 ">
            Background
          </p>
        </div>
        <h1 className="text-4xl sm:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-gray-100 to-gray-300 font-semibold text-center md:text-start leading-tight tracking-tight ">
          Behind the Code
        </h1>
        <p className="text-gray-400 text-center md:text-start text-sm md:text-base mt-2 md:leading-7">
          A closer look into the process, passion, <br />
          and purpose that shape every line of code.
        </p>
      </div>

      <section className="min-h-[40rem] max-h-[40rem] md:min-h-[50rem] md:max-h-[50rem] h-full flex items-center justify-center w-full rounded-xl p-2 relative bg-primary">
        <BeamBorder size={200} />
        <div className="hidden md:flex flex-col w-4 h-full items-end justify-center absolute left-4 z-20">
          {[1,2,3,4].map((_, index) => (
            <span key={index} className="w-2 h-px bg-gray-500 rounded-full mb-2"/>
          ))}
        </div>
        <div className=" border-1 border-gray-900 w-full h-full rounded-lg relative overflow-hidden bg-secondary flex flex-col items-center justify-center">
          <Topbar />
          <Panels />
        </div>
        <Vignette bottom size="80" color=" from-primary to-transparent " className="w-[101%]" />
      </section>
      {/* <section className="border-t border-gray-900 h-fit hidden md:flex flex-col z-20 mt-6 pt-12 items-center justify-center">
        <AsteriskIcon className="stroke-2 stroke-gray-200 w-6 h-6 mb-4" />
        <h1 className="text-xl font-medium tracking-tight text-gray-200">
          What I can bring to the team.
        </h1>
        <p className="text-gray-400 text-base text-center w-8/12 ">
          Each qualities represents a unique facet of my expertise.
        </p>
        <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mt-12">
          {qualities.map((item, index) => (

            <div key={index} className="w-full flex-col items-center justify-start text-center">
              <div className="flex items-center justify-start gap-2 ">
                <item.icon size={40} className="stroke-2 stroke-gray-200 w-4 h-4" />
                <h1 className="text-base font-medium tracking-tight text-gray-200">{item.title}</h1>
              </div>
              <p className="text-gray-400 text-base text-start mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </section> */}
    </section>
  )
}

export default About