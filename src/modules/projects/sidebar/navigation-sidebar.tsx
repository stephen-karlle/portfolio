import { CalendarIcon, DriveIcon, GridIcon, InboxIcon, MailIcon, UsersIcon } from "@icons/index"
import { motion } from "motion/react"
import { cn } from "@lib/utils"

type NavigationSidebarProps = {
  inView: boolean
}

const NavigationSidebar = ({ inView }: NavigationSidebarProps) => {

  const icons = [
    GridIcon,
    CalendarIcon,
    InboxIcon,
    UsersIcon,
    DriveIcon,
    MailIcon,
  ]

  return (
        
    <motion.aside 
      className="w-16 flex-shrink-0 h-full border-r border-gray-900 p-2"
      initial={{ opacity: 0, y: -180, x: 180, filter: "blur(8px)" }}
      animate={inView ? { opacity: 1, y: 0, x: 0, filter: "blur(0px)"} : {}}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
    >
      {icons.map((Icon, index) => {
        const isActive = index === 4
        return (
          <button
            key={index}
            className={cn(
              "w-full flex items-center justify-center h-10 rounded-lg aspect-square",
              { "bg-gray-900": isActive }
            )}
          >
            <Icon
              className={cn("w-5 h-5 stroke-2", {
                "stroke-gray-200": isActive,
                "stroke-gray-500": !isActive,
              })}
            />
          </button>
        )
      })}
    </motion.aside>
  )
}

export default NavigationSidebar