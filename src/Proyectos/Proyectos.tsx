import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import proyectos from "../DB/datosProyectos";
import { ScrollFadeIn } from "../components";

function Proyectos() {
  const [selectedId, setSelectedId] = useState<number | boolean | null>(null);

  return (
    <ScrollFadeIn>
      <section className="mt-10 text-white">
        <h2 className=" text-4xl font-semibold">Proyectos Destacados</h2>
        <p>Una selección de mis trabajos más recientes y relevantes</p>
        <div className=" bg-gradient-to-br from-BackgroundCard to-BackgroundBright p-10 grid grid-cols-1 md:grid-cols-3 gap-10 rounded-2xl">
          {proyectos.map((card) => (
            <motion.div
              key={card.id}
              layoutId={`card-${card.id}`}
              className="bg-white/10 border border-white/20 backdrop-blur-lg p-6 rounded-2xl shadow-xl cursor-pointer"
              onClick={() => setSelectedId(card.id)}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <h2 className="text-white text-xl font-semibold">{card.title}</h2>
              <p className="text-white/70 mt-2">{card.descripcion}</p>
            </motion.div>
          ))}
          <AnimatePresence>
            {selectedId && (
              <motion.div
                layoutId={`card-${selectedId}`}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
                onClick={() => setSelectedId(null)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="bg-white/10 border border-white/30 backdrop-blur-lg p-10 rounded-2xl w-[90%] md:w-[600px] text-white"
                  onClick={(e) => e.stopPropagation()}
                >
                  <h2 className="text-2xl font-bold">
                    {proyectos.find((c) => c.id === selectedId)?.title}
                  </h2>
                  <p className="mt-4 text-white/80">
                    Aquí puedes poner más detalles de la app seleccionada.
                    Incluso botones o previews.
                  </p>
                  <button
                    className="mt-6 bg-white/20 px-4 py-2 rounded hover:bg-white/30 transition"
                    onClick={() => setSelectedId(null)}
                  >
                    Cerrar
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </ScrollFadeIn>
  );
}

export default Proyectos;
