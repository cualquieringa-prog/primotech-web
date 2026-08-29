"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { WHATSAPP_LINK, WEB3FORMS_ACCESS_KEY } from "@/lib/config";

const servicios = [
  { nombre: "Notebooks", desc: "Pantallas, teclados, placas, bisagras y más." },
  { nombre: "PCs de escritorio", desc: "Armado, mantenimiento y reparación de componentes." },
  { nombre: "MacBooks", desc: "Reparación a nivel de componente y placa lógica." },
  { nombre: "Smartphones", desc: "Pantallas, baterías, puertos de carga y más." },
  { nombre: "iPhones", desc: "Pantallas, baterías, cámaras y componentes internos." },
  { nombre: "Parlantes portátiles", desc: "Baterías, conectores y fallas de audio." },
  { nombre: "Consolas", desc: "PlayStation, Xbox, Nintendo y más." },
];

export default function Home() {
  const router = useRouter();
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEnviando(true);
    setError("");
    const formData = new FormData(e.currentTarget);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        router.push("/gracias");
      } else {
        setError("Hubo un problema al enviar. Probá de nuevo o escribinos por WhatsApp.");
      }
    } catch {
      setError("Hubo un problema al enviar. Probá de nuevo o escribinos por WhatsApp.");
    } finally {
      setEnviando(false);
    }
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur border-b border-[#39ff14]/20">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <span className="text-xl font-bold text-[#39ff14]">Primotech</span>
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#inicio" className="hover:text-[#39ff14] transition">Inicio</a>
            <a href="#servicios" className="hover:text-[#39ff14] transition">Servicios</a>
            <a href="#nosotros" className="hover:text-[#39ff14] transition">Nosotros</a>
            <a href="#contacto" className="hover:text-[#39ff14] transition">Contacto</a>
          </div>
          <div className="flex items-center gap-4">
            <a href={WHATSAPP_LINK} className="hidden md:inline-block bg-[#39ff14] text-black text-sm font-semibold px-4 py-2 rounded-full hover:opacity-90 transition">WhatsApp</a>
            <button onClick={() => setMenuAbierto(!menuAbierto)} className="md:hidden text-[#39ff14]" aria-label="Abrir menú">
              {menuAbierto ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>
        {menuAbierto && (
          <div className="md:hidden flex flex-col items-center gap-6 bg-black border-t border-[#39ff14]/20 py-6">
            <a href="#inicio" onClick={() => setMenuAbierto(false)} className="hover:text-[#39ff14] transition">Inicio</a>
            <a href="#servicios" onClick={() => setMenuAbierto(false)} className="hover:text-[#39ff14] transition">Servicios</a>
            <a href="#nosotros" onClick={() => setMenuAbierto(false)} className="hover:text-[#39ff14] transition">Nosotros</a>
            <a href="#contacto" onClick={() => setMenuAbierto(false)} className="hover:text-[#39ff14] transition">Contacto</a>
            <a href={WHATSAPP_LINK} onClick={() => setMenuAbierto(false)} className="bg-[#39ff14] text-black text-sm font-semibold px-4 py-2 rounded-full hover:opacity-90 transition">WhatsApp</a>
          </div>
        )}
      </header>

      <section id="inicio" className="flex flex-col items-center justify-center text-center min-h-screen px-6 pt-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#39ff14]">
          Primotech
        </h1>
        <p className="text-gray-400 text-sm md:text-base mb-6 tracking-wide uppercase">
          soluciones tecnológicas
        </p>
        <p className="max-w-xl text-gray-300 mb-8">
          Reparación de notebooks, MacBooks, smartphones, iPhones, parlantes portátiles y consolas.
          Diagnóstico rápido y atención personalizada en Ituzaingó 444.
        </p>
        <a href={WHATSAPP_LINK} className="bg-[#39ff14] text-black font-semibold px-8 py-3 rounded-full hover:opacity-90 transition">Hablá con nosotros por WhatsApp</a>
      </section>

      <section id="servicios" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#39ff14]">Servicios</h2>
        <p className="text-center text-gray-400 mb-12">Reparamos y le damos una segunda vida a tus equipos</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {servicios.map((s) => (
            <div key={s.nombre} className="bg-white/5 border border-[#39ff14]/20 rounded-xl p-6 hover:border-[#39ff14]/60 transition">
              <h3 className="text-xl font-semibold mb-2 text-[#39ff14]">{s.nombre}</h3>
              <p className="text-gray-400 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="nosotros" className="py-24 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#39ff14]">Nosotros</h2>
        <p className="text-gray-300 leading-relaxed">
          En Primotech reparamos con dedicación cada equipo que llega a nuestras manos: notebooks, PCs de escritorio,
          MacBooks, smartphones, iPhones, parlantes portátiles y consolas. Buscamos siempre la solución más rápida
          y conveniente para vos, con atención personalizada y diagnóstico claro antes de cualquier reparación.
        </p>
        <p className="text-gray-400 mt-6">
          Nos encontrás en Ituzaingó 444, Nueva Córdoba, Córdoba Capital.
        </p>
        <p className="text-gray-400 mt-2">
          Lunes a viernes de 9 a 19 hs, sábados de 9 a 14 hs.
        </p>
      </section>

      <section id="contacto" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#39ff14]">Contacto</h2>
        <p className="text-center text-gray-400 mb-12">Escribinos y te respondemos a la brevedad</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <a href={WHATSAPP_LINK} className="inline-block bg-[#39ff14] text-black font-semibold px-8 py-3 rounded-full hover:opacity-90 transition mb-6">Escribinos por WhatsApp</a>
            <p className="text-gray-300 mb-1">Ituzaingó 444, Nueva Córdoba, Córdoba Capital.</p>
            <p className="text-gray-400 mb-6">Lunes a viernes de 9 a 19 hs, sábados de 9 a 14 hs.</p>
            <iframe src="https://www.google.com/maps?q=Ituzaing%C3%B3+444%2C+Nueva+C%C3%B3rdoba%2C+C%C3%B3rdoba%2C+Argentina&output=embed" className="w-full h-64 rounded-xl border border-[#39ff14]/20" loading="lazy"></iframe>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
            <input type="hidden" name="subject" value="Nuevo mensaje desde primotech.com.ar" />
            <input type="text" name="name" placeholder="Tu nombre" required className="bg-white/5 border border-[#39ff14]/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#39ff14]" />
            <input type="email" name="email" placeholder="Tu email" required className="bg-white/5 border border-[#39ff14]/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#39ff14]" />
            <textarea name="message" placeholder="Contanos qué necesitás" required rows={5} className="bg-white/5 border border-[#39ff14]/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#39ff14]"></textarea>
            {error && <p className="text-red-400 text-sm">{error}</p>}
            <button type="submit" disabled={enviando} className="bg-[#39ff14] text-black font-semibold px-8 py-3 rounded-full hover:opacity-90 transition disabled:opacity-50">
              {enviando ? "Enviando..." : "Enviar mensaje"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}