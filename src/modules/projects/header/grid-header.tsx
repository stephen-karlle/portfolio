
const GridHeader = ({ name } : {name: string}) => {
  return (
    <div className="w-full flex items-center justify-between px-6 py-1">
      <label className="text-gray-200 text-xs uppercase">{name}</label>
      <div className="flex items-center justify-start gap-2">
        <label className="text-gray-500 text-xs">
          Sort by:
        </label>
        <label className="text-gray-200 text-xs">
          Name: A to Z
        </label>
      </div>
    </div>
  )
}

export default GridHeader