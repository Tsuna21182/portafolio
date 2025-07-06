import { Btn, NavBar, ScrollFadeIn } from "../components";
import { motion } from "motion/react";

function Header() {
  return (
    <ScrollFadeIn>
      <header
        id="inicio"
        className="glass-card text-TextTitle p-5 rounded-3xl flex flex-col gap-10 items-center"
      >
        <Btn
          name={"download cv"}
          className={"bg-amber-500 hover:bg-amber-600"}
        />
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col gap-5 md:ml-20">
            <p className="text-2xl">Hola! Soy</p>
            <h1 className="font-bold text-4xl md:text-6xl w-fit">
              Freddy Moreno
            </h1>
            <p className="text-amber-400 text-2xl font-semibold">
              Front-end development
            </p>
          </div>
          <motion.article
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="md:hidden mt-5"
          >
            <img src="/image/chococat.png" alt="imagen individuo" />
          </motion.article>
          <motion.article
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: -50 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="hidden md:flex justify-center "
          >
            <img
              src="/image/chococat.png"
              alt="imagen individuo"
              className="w-48 md:w-64 lg:w-80"
            />
          </motion.article>
        </section>

        <NavBar />
      </header>
    </ScrollFadeIn>
  );
}

export default Header;
