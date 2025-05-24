import { FolderIcon } from '@icons/index'

const FolderCard = ({project}: {project: string}) => {
  return (
    <div
      className="group h-20 w-full bg-secondary backdrop-blur-xl ring-1 ring-gray-900 rounded-lg flex items-center justify-start gap-4 flex-shrink-0 p-4 "
    >
      <figure className="w-10 h-10 flex-shrink-0 rounded-lg bg-gray-900 flex items-center justify-center">
        <FolderIcon className="w-5 h-5 stroke-2 stroke-gray-200" />
      </figure>
      <div className="flex flex-col items-start justify-center">
        <h1 className="text-gray-200 text-base ">{project}</h1>
        <p className="text-gray-500 text-sm">{project.length} files</p>
      </div>
    </div>
  )
}

export default FolderCard