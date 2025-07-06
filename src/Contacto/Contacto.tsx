"use client";

import { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaUser,
  FaPaperPlane,
  FaRegCommentDots,
} from "react-icons/fa";
import { ScrollFadeIn } from "../components";

export default function Contacto() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulario enviado:", form);
    alert("Gracias por tu mensaje 🚀");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <ScrollFadeIn>
      <section id="Contacto" className="w-full bg-black text-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl font-bold mb-4 text-purple-400 flex items-center gap-3">
              <FaRegCommentDots className="text-purple-500" /> Hablemos
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              ¿Tienes una idea o quieres trabajar juntos? Llena el formulario o
              contáctame por correo o redes. Estoy disponible para nuevos retos
              y proyectos.
            </p>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-lg text-purple-400" />
                <a
                  href="mailto:tsunadelanochecer@gmail.com"
                  className="hover:text-purple-300"
                >
                  tsunadelanochecer@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-lg text-purple-400" />
                <a href="tel:+573197731987" className="hover:text-purple-300">
                  +57 3197731987
                </a>
              </li>
            </ul>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white/5 backdrop-blur-md border border-white/10 
                     p-6 rounded-2xl shadow-[0_4px_24px_rgba(155,110,255,0.1)] 
                     hover:shadow-[0_0_12px_#9B6EFF] transition duration-300 space-y-5"
          >
            <div className="relative">
              <FaUser className="absolute left-3 top-3 text-purple-400" />
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Tu nombre"
                required
                className="pl-10 w-full px-4 py-2 bg-black/30 border border-white/20 
                         rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3 text-purple-400" />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="tucorreo@email.com"
                required
                className="pl-10 w-full px-4 py-2 bg-black/30 border border-white/20 
                         rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div className="relative">
              <FaRegCommentDots className="absolute left-3 top-3 text-purple-400" />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Cuéntame algo interesante..."
                required
                className="pl-10 w-full px-4 py-2 bg-black/30 border border-white/20 
                         rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 cursor-pointer"
            >
              <FaPaperPlane /> Enviar mensaje
            </button>

            <p className="text-sm text-gray-500 pt-4">
              ¡Gracias por pasarte! Nos vemos en el siguiente proyecto 🦾
            </p>
          </form>
        </div>
      </section>
    </ScrollFadeIn>
  );
}
