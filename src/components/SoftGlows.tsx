
type SoftGlowsProps = {
  position: 'top' | 'bottom';
}

const SoftGlows = ({
  position
}: SoftGlowsProps) => {
  return (
    position === 'top' ? (
      <section className="-top-12 flex absolute w-full h-full max-w-5xl items-center justify-center">
        <div className="-top-20 -left-20 absolute w-[20rem] h-40 rounded-full blur-3xl opacity-20  bg-gradient-to-r from-blue-500 via-blue-400  to-blue-500  " />
        <div className="-top-40 absolute w-72 h-80 rounded-full blur-3xl opacity-20  bg-gradient-to-r from-purple-500 via-purple-400  to-purple-500  " />
        <div className="-top-40 left-48 absolute w-48 h-64 rounded-full blur-3xl opacity-50  bg-gradient-to-r from-violet-500 via-violet-400  to-violet-500  " />
        <div className="top-12 left-80 absolute w-24 h-28 rounded-full blur-3xl opacity-50  bg-gradient-to-r from-purple-600 via-purple-400  to-purple-600  " />
        <div className="-top-20 -right-20 absolute w-[32rem] h-40 rounded-full blur-3xl opacity-20  bg-gradient-to-r from-indigo-500 via-indigo-400  to-indigo-500  " />
        <div className="top-50 absolute w-[32rem] h-40 rounded-full blur-3xl opacity-20  bg-gradient-to-r from-indigo-500 via-indigo-400  to-indigo-500 -rotate-45  " />
      </section>
    ) : (
      <section className="flex  absolute w-full h-full max-w-5xl items-center justify-center">
        <div className="right-10 absolute w-[20rem] h-16 rounded-full blur-3xl opacity-40  bg-gradient-to-r from-indigo-500 via-indigo-400  to-indigo-500  " />
        <div className="left-10 absolute w-[20rem] h-16 rounded-full blur-3xl opacity-30  bg-gradient-to-r from-purple-500 via-purple-400  to-purple-500 rotate-1 " />
        <div className="absolute w-[20rem] h-16 rounded-full blur-3xl opacity-40  bg-gradient-to-r from-violet-500 via-violet-400  to-violet-500 rotate-1 " />        
      </section>

    )
  )
}

export default SoftGlows