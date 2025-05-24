import { ArrowIcon } from '@icons/index'
import { Particles } from '@components/effects/particles'
import { Meteors } from '@components/effects/meteor'
import Vignette from '@components/effects/vignette'
import Glows from '@components/effects/glows'
import Button from '@components/ui/button'

const glows = [
  "absolute bottom-40 w-60 h-10 rounded-full blur-2xl opacity-40 bg-gradient-to-r from-violet-500 via-violet-400 to-violet-500 mix-blend-multiply",
  "absolute bottom-40 w-30 h-10 rounded-full blur-2xl opacity-40 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600",
]

const Contact = () => {
  const behance = process.env.NEXT_PUBLIC_LINKEDIN || ""
  return (
    <section id="contact" className="w-full flex flex-col items-center justify-center py-20 md:py-40 overflow-clip px-4 rounded-lg relative max-w-4xl">
      <Meteors number={20} angle={75} />
      <Particles className="w-full h-full absolute opacity-30" size={0.5}  />
      <Vignette top left right size="32" color=" from-primary to-transparent" className="z-40" />
      <Glows glows={glows} />
      <div className="w-full flex flex-col items-center justify-center z-40">
        <h1 className="text-4xl sm:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-gray-100 to-gray-300 font-semibold text-center leading-tight z-10 tracking-tight">
          Ready to work together?
        </h1>
        <p className="text-gray-400 text-sm md:text-base z-10 mt-4 mb-8 md:leading-7 text-center w-10/12 md:w-8/12">
          I&apos;m open to full-time roles and freelance projects. If you&apos;re looking for someone to bring clarity, creativity, and clean code to your team — let&apos;s talk.

        </p>
        <Button 
          beam
          onClick={() => window.open(behance, "_blank")} 
          className="flex flex-row flex-shrink-0 items-center gap-2"
        >
          Get in touch
          <ArrowIcon className="w-4 h-4 stroke-2 stroke-white" />
        </Button>
      </div>
    </section>
  )
}

export default Contact