import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiRedux,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

import { ScrollFadeIn } from "../components";

const techStack = [
  { name: "React", icon: <FaReact color="#61DAFB" size={40} /> },
  { name: "Next.js", icon: <SiNextdotjs color="#FFFFFF" size={40} /> },
  { name: "Tailwind", icon: <SiTailwindcss color="#38BDF8" size={40} /> },
  { name: "Node.js", icon: <FaNodeJs color="#3C873A" size={40} /> },
  { name: "HTML5", icon: <SiHtml5 color="#E44D26" size={40} /> },
  { name: "CSS3", icon: <SiCss3 color="#264DE4" size={40} /> },
  { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" size={40} /> },
  { name: "TypeScript", icon: <SiTypescript color="#3178C6" size={40} /> },
  { name: "Redux", icon: <SiRedux color="#764ABC" size={40} /> },
  { name: "GitHub", icon: <FaGithub color="#FFFFFF" size={40} /> },
];

export default function Tecnologias() {
  return (
    <section className="bg-black text-white py-12 px-6">
      <h2 className="text-3xl font-bold mb-2">Tecnologías</h2>
      <p className="text-gray-400 mb-8">
        Herramientas y lenguajes que utilizo en mi día a día
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {techStack.map((tech) => (
          <ScrollFadeIn
            key={tech.name}
            className="rounded-xl p-5 flex flex-col items-center justify-center 
                       backdrop-blur-md bg-white/5 border border-white/10 
                       shadow-[0_4px_24px_rgba(155,110,255,0.1)] hover:shadow-[0_0_12px_#9B6EFF] 
                       transition duration-500 ease-in-out"
          >
            {tech.icon}
            <p className="mt-2 text-sm">{tech.name}</p>
          </ScrollFadeIn>
        ))}
      </div>
    </section>
  );
}
