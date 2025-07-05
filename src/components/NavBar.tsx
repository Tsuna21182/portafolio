"use client";

import { useState } from "react";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/Proyectos", label: "Proyectos" },
  { href: "/AboutMe", label: "Sobre Mi" },
  { href: "/Contacto", label: "Contactame" },
];

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="md:hidden absolute top-8 right-8"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.nav
              className="fixed top-22 left-0 w-full z-50 flex flex-col justify-center items-center gap-5 font-semibold uppercase text-white"
              initial={{ y: -300, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -300, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="bg-white/30 hover:bg-white/80 hover:text-black w-3/4 rounded-2xl text-center p-3 transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </motion.nav>
          </>
        )}
      </AnimatePresence>

      <nav className="hidden glass-card md:flex justify-center items-center gap-5 rounded-2xl w-xl font-semibold uppercase ">
        {links.map((link) => (
          <a
            href={link.href}
            className="hover:bg-white/80 hover:text-BackgroundBody w-full rounded-2xl text-center p-2 transition-colors duration-300"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </>
  );
}

export default NavBar;
