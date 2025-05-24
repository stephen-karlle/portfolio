import { ChevronIcon, GridIcon, ListIcon } from '@icons/index'

const Header = () => {
  return (
    <div className="w-full p-6 flex items-center justify-start flex-shrink-0">
      <div className="w-full h-full flex items-center justify-start gap-4">
        <h1 className="text-xl bg-clip-text text-transparent bg-gradient-to-b from-gray-100 to-gray-300 font-semibold text-start leading-tight z-10 tracking-tight">
          My Drive
        </h1>
        <ChevronIcon className="w-5 h-5 stroke-2 stroke-gray-200 -rotate-90" />
        <h1 className="text-xl bg-clip-text text-transparent bg-gradient-to-b from-gray-100 to-gray-300 font-semibold text-start leading-tight z-10 tracking-tight">
          Projects
        </h1> 
      </div>
      <div className="w-full h-full flex items-center justify-end"> 
        <div className="flex items-center justify-center gap-1 mr-4">
          <h1 className="text-lg text-gray-200 font-medium">3</h1>
          <label className="text-sm text-gray-500">Folders</label>
        </div>
        <div className="flex items-center justify-center gap-1">
          <h1 className="text-lg text-gray-200 font-medium">5</h1>
          <label className="text-sm text-gray-500">Files</label>
        </div>
        <span className="w-[1px] h-full bg-gray-900 mx-6" />
        <div className="px-4 py-2 flex items-center justify-center rounded-l-lg ring-1 ring-gray-900 bg-gray-900">
          <GridIcon className="w-5 h-5 stroke-2 stroke-gray-200" />
        </div>
        <div className="px-4 py-2 flex items-center justify-center rounded-r-lg ring-1 ring-gray-900 ">
          <ListIcon className="w-5 h-5 stroke-2 stroke-gray-500" />
        </div>

      </div>
    </div>
  )
}

export default Header