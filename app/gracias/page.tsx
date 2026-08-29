import Link from "next/link";
import { WHATSAPP_LINK } from "@/lib/config";

export default function Gracias() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#39ff14]">¡Gracias por escribirnos!</h1>
      <p className="text-gray-300 max-w-md mb-8">
        Recibimos tu mensaje y te vamos a responder a la brevedad. Si preferís una respuesta más rápida, escribinos directamente por WhatsApp.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <a href={WHATSAPP_LINK} className="bg-[#39ff14] text-black font-semibold px-8 py-3 rounded-full hover:opacity-90 transition">Escribinos por WhatsApp</a>
        <Link href="/" className="border border-[#39ff14]/40 text-[#39ff14] font-semibold px-8 py-3 rounded-full hover:border-[#39ff14] transition">Volver al inicio</Link>
      </div>
    </div>
  );
}