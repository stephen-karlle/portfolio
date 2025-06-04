import { LOGO } from '@constants/images';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {

  const behance = process.env.NEXT_PUBLIC_BEHANCE!
  const github = process.env.NEXT_PUBLIC_GITHUB!
  const linkedin = process.env.NEXT_PUBLIC_LINKEDIN!
  
  const handleNavigate = (id: string | number) => {
    if (typeof id === "number") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      window.history.replaceState(null, "", `#${id}`);
    }
  };

  const handleRedirect = (name: string) => {
    switch (name) {
      case "behance":
        window.open(behance, "_blank");
        break;
      case "github":
        window.open(github, "_blank");
        break;
      case "linkedin":
        window.open(linkedin, "_blank");
        break;
    }
  }


  return (
    <footer className=" flex-shrink-0 w-full flex items-start justify-center z-10 border-t border-gray-900">

      <section className="flex flex-col sm:flex-row items-center justify-between gap-12 p-8 py-12 max-w-4xl w-full h-full">
        <div className="flex flex-col items-start w-fit justify-between gap-2 h-full">
          <div className="flex flex-col gap-2 items-start justify-start">
            <div className="flex items-center justify-center gap-2">
              <Link 
                className="text-white text-lg font-medium text-center flex-shrink-0 "
                href="/"
              >
                <Image src={LOGO} alt="Karlle" width={20} height={20} />
              </Link> 
              <h1 className="text-lg bg-clip-text text-transparent bg-gradient-to-b from-gray-100 to-gray-300 font-semibold text-start leading-tight z-10 tracking-tight">
                Stephen Karlle
              </h1>
            </div>
            <p className="text-gray-400 text-center sm:text-start text-sm tracking-tight cursor-pointer break-keep ">
              San Fernando, Pampanga<br/>
              Philippines
            </p>
          </div>

          <div className="hidden sm:flex items-end ">
            <div className="flex items-center justify-stendrt w-fit">
              <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 flex items-center justify-center relative">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping flex-shrink-0 absolute" />
              </span>
              <p className="text-gray-100 text-sm tracking-tight cursor-pointer ">
                All Projects Operational
              </p>
            </div>
          </div>
          
        </div>
        
        <div className="flex items-start justify-center gap-8 w-auto">
          <div className="flex flex-col items-center w-fit justify-start gap-4 h-full">
            <p className="text-gray-400 text-xs uppercase tracking-tight cursor-pointer break-keep mb-2 w-20">
              Socials
            </p>
            {["Behance", "GitHub", "LinkedIn", "Indeed"].map((item, index) => {
              return(
                <button
                  key={index}
                  className="text-gray-200 font-normal text-sm tracking-tight cursor-pointer capitalize w-20 text-start hover:underline"
                  onClick={() => handleRedirect(item.toLocaleLowerCase())}
                >
                  {item}
                </button>
              )
            })}
          </div>
          <div className="flex flex-col items-start w-full justify-start gap-4 h-full">
            <p className="text-gray-400 text-xs uppercase tracking-tight cursor-pointer break-keep mb-2 w-20">
              General
            </p>
            {["Home", "Skills", "Projects", "Contact"].map((item, index) => {
              return(
                <button
                  key={index}
                  className="text-gray-200 font-normal text-sm tracking-tight cursor-pointer capitalize w-20 text-start hover:underline"
                  onClick={() => handleNavigate(item.toLocaleLowerCase())}
                >
                  {item}
                </button>
              )
            })}
          </div>
        </div>
      </section>

    </footer>
  )
}

export default Footer
 