// @modules/testimonials/index.tsx
import BeamBorder from "@components/animations/beam-border"

const testimonials = [
  {
    quote: "Stephen has an exceptional eye for detail and consistently delivered clean, maintainable code. He translated Figma designs into pixel-perfect interfaces faster than anyone on the team.",
    name: "Jane Doe",
    role: "Engineering Lead",
    company: "Hooli Software",
  },
  // add more as you get them
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="w-full flex flex-col justify-center items-center z-10 max-w-4xl relative">

      <div className="w-full flex flex-col items-center md:items-start justify-center mb-12">
        <div className="flex flex-row items-center justify-center mb-4 mt-24">
          {/* <QuoteIcon className="w-4 h-4 stroke-2 stroke-blue-500" /> */}
          <p className="text-gray-200 text-sm font-medium ml-2">
            Testimonials
          </p>
        </div>
        <h1 className="text-4xl sm:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-gray-100 to-gray-300 font-semibold text-center md:text-start leading-tight tracking-tight">
          What people say
        </h1>
        <p className="text-gray-400 text-center md:text-start text-sm md:text-base mt-2 md:leading-7">
          Feedback from colleagues and collaborators <br />
          I've had the pleasure of working with.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="relative rounded-xl p-2 bg-primary"
          >
            <BeamBorder size={150} />
            <div className="border border-gray-900 w-full h-full rounded-lg bg-secondary flex flex-col gap-4 p-6">
              {/* <QuoteIcon className="w-4 h-4 stroke-1 stroke-gray-600" /> */}
              <p className="text-gray-300 text-sm leading-7">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-900">
                <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-xs text-gray-400 font-mono flex-shrink-0">
                  {item.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="text-gray-200 text-sm font-medium tracking-tight">{item.name}</p>
                  <p className="text-gray-500 text-xs font-mono">{item.role} · {item.company}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Testimonials