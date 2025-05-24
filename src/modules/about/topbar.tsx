import { useEffect, useRef, useState } from "react";
import { activeTabAtom, prevTabAtom } from "@stores/atom";
import { useAtom, useSetAtom } from "jotai";
import { informationsData } from "@data/informations";
import { motion } from "framer-motion";
import { cn } from "@lib/utils"

const Topbar = () => {

  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const setPrevTab = useSetAtom(prevTabAtom);
  const [activeTab, setActiveTab ] = useAtom(activeTabAtom);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0});

  useEffect(() => {
    const activeIndex = informationsData.findIndex((tab) => tab.name === activeTab);
    const el = tabRefs.current[activeIndex];
    if (el) {
      const timeout = setTimeout(() => {
        const { offsetLeft } = el;
        setIndicatorStyle({ left: offsetLeft});
      }, 1);
      return () => clearTimeout(timeout);
    }
  }, [activeTab]);

  const handleTabChange = (newTab: string) => {
    setPrevTab(activeTab);
    setActiveTab(newTab);
  };

  return (
    <div className="w-full border-b border-gray-900 relative">
      <div className="flex items-center justify-around gap-2 px-4 py-2 w-full min-h-12 relative z-20 bg-transparent">
        {informationsData.map((info, index) => {
          const isActive = activeTab === info.name;
          return (
            <motion.button
              key={index}
              type="button"
              onClick={() => handleTabChange(info.name)}
              animate={{ width: isActive ? 160 : 40 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="relative max-w-40 flex items-center justify-center text-white py-2 overflow-hidden cursor-pointer h-10 px-2 "
            >
              <motion.div
                initial={false}
                animate={{ width: 20 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-center flex-shrink-0"
              >
                <info.icon
                  className={cn(
                    "w-5 h-5 stroke-2 flex-shrink-0 fill-transparent transition-colors duration-300 ease-in",
                    {
                      "stroke-gray-500": !isActive,
                      "stroke-gray-200": isActive,
                    }
                  )}
                />
              </motion.div>
              <motion.span
                initial={false}
                animate={{
                  opacity: isActive ? 1 : 0,
                  width: isActive ? "auto" : 0,
                  marginLeft: isActive ? 8 : 0,
                }}
                transition={{ duration: 0.1, ease: "easeInOut" }}
                className="text-sm font-medium whitespace-nowrap overflow-hidden"
              >
                {info.name}
              </motion.span>
            </motion.button>

          );
        })}
      </div>
      <div className="flex items-center justify-around gap-2 px-4 py-2 w-full min-h-12 absolute z-10 top-0 left-0">
        {informationsData.map((info, index) => {
          const isActive = activeTab === info.name;
          return (
            <motion.button
              key={info.name}
              layoutId="dummy-tab"
              ref={(el) => { tabRefs.current[index] = el; }}
              type="button"
              animate={{ width: isActive ? 160 : 40 }}
              transition={{ duration: 0 }}
              className="relative max-w-40 "
              disabled
            />
          );
        })}
        {/* Glow */}
        <motion.div
          initial={false}
          layoutId="glow"
          className="absolute -bottom-2 h-1 w-px bg-gradient-to-r from-transparent via-gray-200 to-transparent blur-lg rounded-full"
          animate={{
            left: indicatorStyle.left,
            width: 160,
          }}
          transition={{ duration: 0.3, ease: "easeIn" }}
        />
        {/* Flare */}
        <motion.div
          initial={false}
          layoutId="flare"
          className="absolute -bottom-2 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent rounded-full"
          animate={{
            left: indicatorStyle.left,
            width: 130,
          }}
          transition={{ duration: 0.3, ease: "easeIn" }}
        />
      </div>
    </div>
  );
};

export default Topbar;

