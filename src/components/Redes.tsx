"use client";

import {
  faFacebook,
  faInstagram,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import type { Transition } from "motion/react";
import * as motion from "motion/react-client";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type IconItem = {
  id: string;
  icon: IconDefinition;
  color: string;
};

const initialIcons: IconItem[] = [
  { id: "facebook", icon: faFacebook, color: "#1877F2" },
  { id: "instagram", icon: faInstagram, color: "#E1306C" },
  { id: "github", icon: faGithub, color: "#fafafa" },
  { id: "twitter", icon: faTwitter, color: "#1DA1F2" },
];

const spring: Transition = {
  type: "spring",
  damping: 50,
  stiffness: 800,
};

function Redes() {
  const [icons, setIcons] = useState<IconItem[]>(initialIcons);

  function shuffle(array: IconItem[]): IconItem[] {
    return [...array].sort(() => Math.random() - 0.5);
  }

  useEffect(() => {
    const timeout = setTimeout(() => setIcons(shuffle(icons)), 3000);
    return () => clearTimeout(timeout);
  }, [icons]);

  return (
    <div className="flex flex-wrap justify-center items-center gap-3 py-8">
      {icons.map(({ id, icon, color }) => (
        <motion.div
          key={id}
          layout
          transition={spring}
          className="w-[60px] h-[60px] flex items-center justify-center 
                     rounded-xl cursor-pointer 
                     bg-white/5 backdrop-blur-md 
                     border border-white/10 
                     shadow-[0_4px_24px_rgba(155,110,255,0.1)] 
                     hover:shadow-[0_0_12px_#9B6EFF] 
                     transition duration-300 ease-in-out"
          style={{ color }}
        >
          <FontAwesomeIcon icon={icon} size="2x" />
        </motion.div>
      ))}
    </div>
  );
}

export default Redes;
