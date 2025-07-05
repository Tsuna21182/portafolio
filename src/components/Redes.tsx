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

const initialIcons = [
  { id: "facebook", icon: faFacebook, color: "#1877F2" },
  { id: "instagram", icon: faInstagram, color: "#E1306C" },
  { id: "github", icon: faGithub, color: "#fafafa" },
  { id: "twitter", icon: faTwitter, color: "#1DA1F2" },
];

function Redes() {
  const [icons, setIcons] = useState<IconItem[]>(initialIcons);

  function shuffle(array: IconItem[]): IconItem[] {
    return [...array].sort(() => Math.random() - 0.5);
  }

  useEffect(() => {
    const timeout = setTimeout(() => setIcons(shuffle(icons)), 2000);
    return () => clearTimeout(timeout);
  }, [icons]);

  return (
    <div style={container}>
      {icons.map(({ id, icon, color }) => (
        <motion.div
          key={id}
          layout
          transition={spring}
          style={{
            ...item,
            color,
          }}
        >
          <FontAwesomeIcon icon={icon} size="2x" />
        </motion.div>
      ))}
    </div>
  );
}

export default Redes;

const spring: Transition = {
  type: "spring",
  damping: 20,
  stiffness: 300,
};

const container: React.CSSProperties = {
  display: "flex",
  gap: 12,
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  padding: "2rem",
};

const item: React.CSSProperties = {
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(10px)",
  width: 60,
  height: 60,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "12px",
  cursor: "pointer",
};
