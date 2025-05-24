import { 
  ChevronIcon, 
  ClockIcon, 
  DriveIcon, 
  FolderIcon, 
  HomeIcon, 
  LaptopIcon, 
  PlusIcon, 
  StarIcon, 
  TrashIcon 
} from "@icons/index"
import { cloneElement } from "react"
import { motion } from "motion/react"
import { cn } from "@lib/utils"
import Button from "@components/ui/button"
import StorageChart from "../chart/storage-chart"

const folderItems = [ 
  {
    name: 'Home',
    icon: <HomeIcon/>,
    branch: []
  },
  {
    name: 'My Drive',
    icon: <DriveIcon />,
    branch: [
      "Graphics",
      "Designs",
      "Projects",
    ]
  },
  {
    name: 'Computers',
    icon: <LaptopIcon  />,
    branch: []
  },
  {
    name: 'Recent',
    icon: <ClockIcon />,
    branch: []
  },
  {
    name: 'Starred',
    icon: <StarIcon />,
    branch: []
  },
  {
    name: 'Trash',
    icon: <TrashIcon />,
    branch: []
  },
]

type StorageSidebarProps = {
  inView: boolean
}

const StorageSidebar = ({ inView }: StorageSidebarProps) => {

  return (
    <motion.aside 
      className="w-64 flex-shrink-0 h-full border-r border-gray-900 flex flex-col gap-4 "
      initial={{ opacity: 0, y: -180, x: 180, filter: "blur(8px)" }}
      animate={inView ? { opacity: 1, y: 0, x: 0, filter: "blur(0px)"}: {}}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.8 }}
    >
      <div className="flex flex-col gap-4 h-full w-full flex-1 p-4">
        <Button variant="secondary" className="w-full flex items-center justify-start h-10">
          <PlusIcon className="w-5 h-5 stroke-2 stroke-gray-200" />
          New Folder
        </Button>
        <label className="text-gray-400 text-xs uppercase">
          Folders
        </label>
        <div className="flex flex-col ">
          {folderItems.map((item, index) => {
            const isActive = false
            const hasBranch = item.branch.length > 0
            return(
              <div 
                key={index} 
                className={cn("w-full flex flex-col p-2 text-sm ",{
                  " text-gray-200": isActive,
                  " text-gray-500": !isActive
                })}
              >
                <div className="flex items-center justify-start gap-2 relative">
                  {isActive && <ChevronIcon className="w-3 h-3 stroke-2 stroke-gray-200 absolute -left-4 -rotate-90" />}
                  {cloneElement(item.icon, {
                    className: cn("w-5 h-5 stroke-2", {
                      "stroke-gray-200": isActive,
                      "stroke-gray-500": !isActive
                    })
                  })}
                  {item.name}
                </div>
                {hasBranch && (
                  <div className="flex flex-col pl-6 mt-4">
                    {item.branch.map((branch, index) => {
                      const isActive = branch === "Projects"
                      return(
                        <button 
                          key={index} 
                          className={cn("w-full flex items-center justify-start text-sm gap-2 p-2 relative", {
                            "text-gray-200": isActive,
                            "text-gray-500": !isActive
                          })}
                        >
                          {isActive && <ChevronIcon className="w-3 h-3 stroke-2 stroke-gray-200 absolute -left-2 -rotate-90" />}
                          <FolderIcon 
                            className={cn("w-4 h-4 stroke-2", {
                              "stroke-gray-200": isActive,
                              "stroke-gray-500": !isActive
                            })}
                          />
                          {branch}
                        </button>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
      <StorageChart />
    </motion.aside>
  )
}

export default StorageSidebar