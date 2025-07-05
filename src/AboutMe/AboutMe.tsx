import { motion } from "motion/react";
import { Redes, ScrollFadeIn } from "../components";

function AboutMe() {
  return (
    <ScrollFadeIn>
      <section className="text-white mt-10">
        <section className="grid md:grid-cols-2 items-center">
          <motion.article
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.4 }}
            className=""
          >
            <img src="/image/chococat.png" alt="imagen individuo" />
          </motion.article>
          <div className="flex flex-col gap-5">
            <h2 className="font-bold text-3xl">Sobre - Freddy Moreno</h2>
            <p className="text-amber-400 text-2xl font-semibold">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
              impedit repellendus officia voluptatibus quia consequuntur fugiat
              temporibus, doloribus cupiditate minima rerum rem similique
              aliquid laudantium, iusto iste unde totam velit.
            </p>
            <Redes />
          </div>
        </section>
      </section>
    </ScrollFadeIn>
  );
}

export default AboutMe;
