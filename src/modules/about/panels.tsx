import { AnimatePresence, motion } from 'framer-motion';
import { informationsData } from '@data/informations';
import { activeTabAtom } from '@stores/atom';
import { useAtomValue } from 'jotai';
import Panel from './panel';

export const colors = {
  Experience: "bg-violet-500",
  Education: "bg-indigo-500",
  Technologies: "bg-red-500",
  Interests: "bg-amber-500",
}

const Panels = () => {
  
  const activeTab = useAtomValue(activeTabAtom);
  const prevTab = useAtomValue(activeTabAtom);

  return (
    <div className="flex flex-col items-start justify-start w-full h-full relative z-10 bg-secondary overflow-x-hidden overflow-y-auto">
      <div className={`pointer-events-none absolute left-0 top-0 w-40 h-40 opacity-10 blur-3xl z-10 transition-colors duration-300 ease-in-out rounded-full ${colors[activeTab as keyof typeof colors]}`} />
      <AnimatePresence mode="wait">
        {informationsData.map((info, index) => {

          const isActive = info.name === activeTab;
          if (!isActive) return null;

          const activeIndex = informationsData.findIndex(item => item.name === activeTab);
          const prevIndex = informationsData.findIndex(item => item.name === prevTab); // You'll need to track this one line below.
          const direction = activeIndex > prevIndex ? -1 : 1;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 200 * direction, filter: "blur(8px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: 200 * direction, filter: "blur(8px)" }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-full h-full"
            >
              <Panel {...info} />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  )
}

export default Panels