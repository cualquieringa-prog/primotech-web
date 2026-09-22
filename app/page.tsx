"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import CircuitBackground from "@/components/CircuitBackground";
import { WHATSAPP_NUMBER, WEB3FORMS_ACCESS_KEY } from "@/lib/config";

const WHATSAPP_MESSAGE = "\u00a1Hola PrimoTech! Quiero consultar por una reparaci\u00f3n.";

function buildWaLink() {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
}

const PAGE_HTML = `  <nav data-m="nav" style="position: fixed; top: 0; left: 0; right: 0; z-index: 60; display: flex; align-items: center; justify-content: space-between; gap: clamp(11px, 2.2vw, 24px); padding: clamp(11px, 1.6vw, 16px) clamp(18px, 5vw, 64px) clamp(13px, 1.6vw, 16px); background: rgba(4,7,4,.72); backdrop-filter: blur(14px) saturate(140%); -webkit-backdrop-filter: blur(14px) saturate(140%); border-bottom: 1px solid rgba(57,255,20,.16);">
    <a href="#inicio" style="display: flex; align-items: center; gap: 10px; color: #f2fff0;">
      <img data-m="mark" src="/assets/primotech-wordmark-nav.png" alt="PrimoTech" style="display: block; height: clamp(23px, 3.2vw, 30px); width: auto; filter: drop-shadow(0 0 10px rgba(57,255,20,.45));">
    </a>
    <div data-m="navlinks" style="display: flex; align-items: center; gap: clamp(15px, 2.4vw, 34px); font-family: 'IBM Plex Mono', monospace; font-size: clamp(11px, 1.2vw, 12px); letter-spacing: clamp(.07em, .3vw, .12em); text-transform: uppercase;">
      <a href="#inicio" style="color: #cfe0cc; padding: 6px 2px; border-bottom: 1px solid transparent;" style-hover="color: #39ff14; border-bottom: 1px solid rgba(57,255,20,.6);">Inicio</a>
      <a href="#servicios" style="color: #cfe0cc; padding: 6px 2px; border-bottom: 1px solid transparent;" style-hover="color: #39ff14; border-bottom: 1px solid rgba(57,255,20,.6);">Servicios</a>
      <a href="#nosotros" style="color: #cfe0cc; padding: 6px 2px; border-bottom: 1px solid transparent;" style-hover="color: #39ff14; border-bottom: 1px solid rgba(57,255,20,.6);">Nosotros</a>
      <a href="#contacto" style="color: #cfe0cc; padding: 6px 2px; border-bottom: 1px solid transparent;" style-hover="color: #39ff14; border-bottom: 1px solid rgba(57,255,20,.6);">Contacto</a>
      <a href="{{ waLink }}" target="_blank" rel="noopener" style="display: none; color: #040604; background: #39ff14; padding: 9px 16px; border-radius: 999px; font-weight: 600; letter-spacing: .1em; box-shadow: 0 0 24px rgba(57,255,20,.35);" style-hover="background: #a8ff96;">WhatsApp</a>
    </div>
  </nav>

  <section id="inicio" data-m="hero" data-screen-label="Inicio" style="position: relative; z-index: 1; min-height: min(100vh, 780px); display: flex; align-items: center; padding: clamp(72px, 8vw, 76px) clamp(18px, 5vw, 64px) clamp(72px, 9vw, 90px);">
    <div style="position: absolute; top: -22vh; left: 50%; transform: translateX(-50%); width: min(1200px, 130vw); height: 90vh; pointer-events: none; background: radial-gradient(50% 50% at 50% 50%, rgba(57,255,20,.20) 0%, rgba(57,255,20,.06) 42%, transparent 72%); filter: blur(10px);"></div>
    <div style="position: absolute; inset: 0; pointer-events: none; background-image: linear-gradient(90deg, rgba(57,255,20,.07) 1px, transparent 1px); background-size: 120px 100%; mask-image: linear-gradient(180deg, transparent, #000 30%, #000 70%, transparent); -webkit-mask-image: linear-gradient(180deg, transparent, #000 30%, #000 70%, transparent);"></div>
    <div style="position: absolute; right: -140px; bottom: -160px; width: 520px; height: 520px; border: 1px solid rgba(57,255,20,.14); border-radius: 50%; pointer-events: none;"></div>
    <div style="position: absolute; right: -60px; bottom: -80px; width: 340px; height: 340px; border: 1px dashed rgba(57,255,20,.16); border-radius: 50%; pointer-events: none;"></div>

    <div data-reveal style="position: relative; width: 100%; max-width: 1080px; margin: 0 auto; transition: opacity .8s ease, transform .8s cubic-bezier(.2,.7,.2,1);">
      <h1 style="margin: 0; font-size: 0; line-height: 0; text-align: center;">
        <canvas id="pt-logo-canvas" role="img" aria-label="PrimoTech — especialistas en dispositivos" style="display: inline-block; width: min(88%, 980px); height: auto; margin: 0 auto;"></canvas>
      </h1>
      <p style="margin: 18px 0 0; text-align: center; font-family: 'IBM Plex Mono', monospace; font-size: 13px; letter-spacing: .12em; text-transform: uppercase; color: #a8ff96;">Ituzaingó 444, Local 2, Nueva Córdoba, Córdoba Capital</p>
      <div style="position: relative; width: 100%; height: 16px; margin: 4px 0 0;">
        <div style="position: absolute; left: 0; right: 0; top: 50%; height: 1px; background: linear-gradient(90deg, transparent, rgba(57,255,20,.35), transparent); pointer-events: none;"></div>
        <div style="position: absolute; left: 12%; top: 50%; width: 7px; height: 7px; margin-top: -3px; border-radius: 50%; background: #39ff14; box-shadow: 0 0 14px #39ff14; animation: pt-pulse 3.2s ease-in-out infinite; pointer-events: none;"></div>
        <div style="position: absolute; right: 22%; top: 50%; width: 5px; height: 5px; margin-top: -2px; border-radius: 50%; background: #39ff14; box-shadow: 0 0 12px #39ff14; animation: pt-pulse 4.1s ease-in-out infinite; pointer-events: none;"></div>
      </div>
      <p style="margin: 30px 0 0; max-width: 640px; font-size: clamp(16px, 2.1vw, 20px); line-height: 1.6; color: #b6c8b3; text-wrap: pretty;">Reparamos notebooks, iPhones, MacBooks, smartphones, consolas, parlantes portátiles y PCs de escritorio. Diagnóstico en el centro de Nueva Córdoba.</p>
      <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 18px; margin-top: 42px;">
        <a href="#servicios" style="display: inline-flex; align-items: center; gap: 10px; padding: 20px 24px; font-family: 'IBM Plex Mono', monospace; font-size: 12px; letter-spacing: .16em; text-transform: uppercase; color: #cfe0cc; border-bottom: 1px solid rgba(57,255,20,.3);" style-hover="color: #39ff14; border-bottom: 1px solid #39ff14;">Ver servicios ↓</a>
      </div>
    </div>
  </section>

  <section id="servicios" data-screen-label="Servicios" style="position: relative; z-index: 1; padding: clamp(80px, 10vw, 140px) clamp(18px, 5vw, 64px); border-top: 1px solid rgba(57,255,20,.12); background: linear-gradient(180deg, rgba(57,255,20,.035), transparent 60%);">
    <div style="max-width: 1180px; margin: 0 auto;">
      <div data-reveal style="display: flex; flex-wrap: wrap; align-items: flex-end; justify-content: space-between; gap: 24px; transition: opacity .8s ease, transform .8s cubic-bezier(.2,.7,.2,1);">
        <div>
          <p style="margin: 0 0 14px; font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: .28em; text-transform: uppercase; color: #39ff14;">Servicios</p>
          <h2 style="margin: 0; font-size: clamp(34px, 5.4vw, 60px); line-height: 1.02; font-weight: 700; letter-spacing: -.035em; color: #f4fff1;">Qué reparamos</h2>
        </div>
        <p style="margin: 0; max-width: 420px; font-size: 16px; line-height: 1.65; color: #9fb29c;">Diagnóstico sin cargo y presupuesto antes de tocar el equipo, siempre que se pueda. Trabajamos con microsoldadura, cambio de módulos y recuperación de datos.</p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 18px; margin-top: 56px;">

        <div data-reveal style="position: relative; overflow: hidden; padding: 30px 28px 34px; border: 1px solid rgba(57,255,20,.16); border-radius: 6px; background: linear-gradient(160deg, rgba(20,30,18,.9), rgba(6,10,6,.9)); transition: opacity .8s ease, transform .45s cubic-bezier(.2,.7,.2,1), border-color .35s ease, box-shadow .35s ease;" style-hover="transform: translateY(-10px); border-color: rgba(57,255,20,.5); box-shadow: 0 24px 50px rgba(0,0,0,.6), 0 0 34px rgba(57,255,20,.16);">
          <div style="position: absolute; inset: 0; pointer-events: none; background-image: radial-gradient(circle at 1px 1px, rgba(57,255,20,.16) 1px, transparent 1.3px); background-size: 22px 22px; opacity: .35; mask-image: radial-gradient(80% 60% at 100% 0%, #000, transparent); -webkit-mask-image: radial-gradient(80% 60% at 100% 0%, #000, transparent);"></div>
          <h3 style="position: relative; margin: 0 0 12px; font-size: 24px; font-weight: 600; letter-spacing: -.02em; color: #f4fff1;">iPhones</h3>
          <p style="position: relative; margin: 0; font-size: 15px; line-height: 1.6; color: #a3b6a0;">Cambio de pantalla y batería sin aviso de pieza desconocida, Face ID, periféricos internos y placa nivel componente.</p>
        </div>

        <div data-reveal style="position: relative; overflow: hidden; padding: 30px 28px 34px; border: 1px solid rgba(57,255,20,.16); border-radius: 6px; background: linear-gradient(160deg, rgba(20,30,18,.9), rgba(6,10,6,.9)); transition: opacity .8s ease, transform .45s cubic-bezier(.2,.7,.2,1), border-color .35s ease, box-shadow .35s ease;" style-hover="transform: translateY(-10px); border-color: rgba(57,255,20,.5); box-shadow: 0 24px 50px rgba(0,0,0,.6), 0 0 34px rgba(57,255,20,.16);">
          <div style="position: absolute; inset: 0; pointer-events: none; background-image: radial-gradient(circle at 1px 1px, rgba(57,255,20,.16) 1px, transparent 1.3px); background-size: 22px 22px; opacity: .35; mask-image: radial-gradient(80% 60% at 100% 0%, #000, transparent); -webkit-mask-image: radial-gradient(80% 60% at 100% 0%, #000, transparent);"></div>
          <h3 style="position: relative; margin: 0 0 12px; font-size: 24px; font-weight: 600; letter-spacing: -.02em; color: #f4fff1;">Notebooks</h3>
          <p style="position: relative; margin: 0; font-size: 15px; line-height: 1.6; color: #a3b6a0;">Cambio de pantalla, teclado, bisagras y batería, limpieza y cambio de pasta térmica, metal líquido o pads térmicos, reparación de placa a nivel componente.</p>
        </div>

        <div data-reveal style="position: relative; overflow: hidden; padding: 30px 28px 34px; border: 1px solid rgba(57,255,20,.16); border-radius: 6px; background: linear-gradient(160deg, rgba(20,30,18,.9), rgba(6,10,6,.9)); transition: opacity .8s ease, transform .45s cubic-bezier(.2,.7,.2,1), border-color .35s ease, box-shadow .35s ease;" style-hover="transform: translateY(-10px); border-color: rgba(57,255,20,.5); box-shadow: 0 24px 50px rgba(0,0,0,.6), 0 0 34px rgba(57,255,20,.16);">
          <div style="position: absolute; inset: 0; pointer-events: none; background-image: radial-gradient(circle at 1px 1px, rgba(57,255,20,.16) 1px, transparent 1.3px); background-size: 22px 22px; opacity: .35; mask-image: radial-gradient(80% 60% at 100% 0%, #000, transparent); -webkit-mask-image: radial-gradient(80% 60% at 100% 0%, #000, transparent);"></div>
          <h3 style="position: relative; margin: 0 0 12px; font-size: 24px; font-weight: 600; letter-spacing: -.02em; color: #f4fff1;">MacBooks</h3>
          <p style="position: relative; margin: 0; font-size: 15px; line-height: 1.6; color: #a3b6a0;">Diagnóstico de logic board, daño por líquido, trackpad, batería y flex de pantalla. Microsoldadura.</p>
        </div>

        <div data-reveal style="position: relative; overflow: hidden; padding: 30px 28px 34px; border: 1px solid rgba(57,255,20,.16); border-radius: 6px; background: linear-gradient(160deg, rgba(20,30,18,.9), rgba(6,10,6,.9)); transition: opacity .8s ease, transform .45s cubic-bezier(.2,.7,.2,1), border-color .35s ease, box-shadow .35s ease;" style-hover="transform: translateY(-10px); border-color: rgba(57,255,20,.5); box-shadow: 0 24px 50px rgba(0,0,0,.6), 0 0 34px rgba(57,255,20,.16);">
          <div style="position: absolute; inset: 0; pointer-events: none; background-image: radial-gradient(circle at 1px 1px, rgba(57,255,20,.16) 1px, transparent 1.3px); background-size: 22px 22px; opacity: .35; mask-image: radial-gradient(80% 60% at 100% 0%, #000, transparent); -webkit-mask-image: radial-gradient(80% 60% at 100% 0%, #000, transparent);"></div>
          <h3 style="position: relative; margin: 0 0 12px; font-size: 24px; font-weight: 600; letter-spacing: -.02em; color: #f4fff1;">Smartphones</h3>
          <p style="position: relative; margin: 0; font-size: 15px; line-height: 1.6; color: #a3b6a0;">Cambio de módulo express, pin de carga, batería y cámaras. Android de todas las marcas.</p>
        </div>

        <div data-reveal style="position: relative; overflow: hidden; padding: 30px 28px 34px; border: 1px solid rgba(57,255,20,.16); border-radius: 6px; background: linear-gradient(160deg, rgba(20,30,18,.9), rgba(6,10,6,.9)); transition: opacity .8s ease, transform .45s cubic-bezier(.2,.7,.2,1), border-color .35s ease, box-shadow .35s ease;" style-hover="transform: translateY(-10px); border-color: rgba(57,255,20,.5); box-shadow: 0 24px 50px rgba(0,0,0,.6), 0 0 34px rgba(57,255,20,.16);">
          <div style="position: absolute; inset: 0; pointer-events: none; background-image: radial-gradient(circle at 1px 1px, rgba(57,255,20,.16) 1px, transparent 1.3px); background-size: 22px 22px; opacity: .35; mask-image: radial-gradient(80% 60% at 100% 0%, #000, transparent); -webkit-mask-image: radial-gradient(80% 60% at 100% 0%, #000, transparent);"></div>
          <h3 style="position: relative; margin: 0 0 12px; font-size: 24px; font-weight: 600; letter-spacing: -.02em; color: #f4fff1;">PCs de escritorio</h3>
          <p style="position: relative; margin: 0; font-size: 15px; line-height: 1.6; color: #a3b6a0;">Mantenimiento, instalación de sistema y optimización.</p>
        </div>

        <div data-reveal style="position: relative; overflow: hidden; padding: 30px 28px 34px; border: 1px solid rgba(57,255,20,.16); border-radius: 6px; background: linear-gradient(160deg, rgba(20,30,18,.9), rgba(6,10,6,.9)); transition: opacity .8s ease, transform .45s cubic-bezier(.2,.7,.2,1), border-color .35s ease, box-shadow .35s ease;" style-hover="transform: translateY(-10px); border-color: rgba(57,255,20,.5); box-shadow: 0 24px 50px rgba(0,0,0,.6), 0 0 34px rgba(57,255,20,.16);">
          <div style="position: absolute; inset: 0; pointer-events: none; background-image: radial-gradient(circle at 1px 1px, rgba(57,255,20,.16) 1px, transparent 1.3px); background-size: 22px 22px; opacity: .35; mask-image: radial-gradient(80% 60% at 100% 0%, #000, transparent); -webkit-mask-image: radial-gradient(80% 60% at 100% 0%, #000, transparent);"></div>
          <h3 style="position: relative; margin: 0 0 12px; font-size: 24px; font-weight: 600; letter-spacing: -.02em; color: #f4fff1;">Parlantes portátiles</h3>
          <p style="position: relative; margin: 0; font-size: 15px; line-height: 1.6; color: #a3b6a0;">Baterías, plaquetas y pin de carga, conectores, drivers y fallas de Bluetooth. JBL, Sony y similares.</p>
        </div>

        <div data-reveal style="position: relative; overflow: hidden; grid-column: 1 / -1; padding: 36px 32px; border: 1px solid rgba(57,255,20,.22); border-radius: 6px; background: linear-gradient(120deg, rgba(24,40,20,.95), rgba(6,10,6,.9) 60%); transition: opacity .8s ease, transform .45s cubic-bezier(.2,.7,.2,1), border-color .35s ease, box-shadow .35s ease;" style-hover="transform: translateY(-10px); border-color: rgba(57,255,20,.55); box-shadow: 0 24px 50px rgba(0,0,0,.6), 0 0 40px rgba(57,255,20,.18);">
          <div style="position: absolute; inset: 0; pointer-events: none; background-image: linear-gradient(90deg, rgba(57,255,20,.1) 1px, transparent 1px); background-size: 60px 100%; opacity: .6;"></div>
          <div style="position: relative; max-width: 760px;">
            <h3 style="margin: 0 0 12px; font-size: 28px; font-weight: 600; letter-spacing: -.02em; color: #f4fff1;">Consolas</h3>
            <p style="margin: 0; font-size: 15px; line-height: 1.6; color: #a3b6a0;">PlayStation, Xbox y Nintendo Switch: mantenimiento, cambio de pasta térmica, metal líquido o pads térmicos, lectora, HDMI, reparación de joysticks y drift, sobrecalentamiento, ventilación y reparación de placa a nivel componente.</p>
          </div>
        </div>

      </div>

      <div data-reveal style="display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 18px; margin-top: 34px; transition: opacity .8s ease, transform .8s cubic-bezier(.2,.7,.2,1);">
        <p style="margin: 0; font-size: 16px; color: #9fb29c;">¿No ves tu equipo en la lista? Consultanos igual.</p>
        <a href="{{ waLink }}" target="_blank" rel="noopener" style="display: inline-flex; align-items: center; gap: 10px; padding: 16px 28px; border: 1px solid #39ff14; border-radius: 4px; color: #39ff14; font-family: 'IBM Plex Mono', monospace; font-size: 12px; letter-spacing: .14em; text-transform: uppercase; transition: background .25s ease, color .25s ease, transform .25s ease;" style-hover="background: #39ff14; color: #040604; transform: translateY(-2px);">Consultar reparación</a>
      </div>
    </div>
  </section>

  <section id="nosotros" data-screen-label="Nosotros" style="position: relative; z-index: 1; padding: clamp(80px, 10vw, 140px) clamp(18px, 5vw, 64px); border-top: 1px solid rgba(57,255,20,.12); overflow: hidden;">
    <div style="position: absolute; left: -160px; top: 20%; width: 420px; height: 420px; pointer-events: none; background: radial-gradient(50% 50% at 50% 50%, rgba(57,255,20,.14), transparent 70%); filter: blur(6px);"></div>
    <div style="position: relative; max-width: 1180px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: clamp(32px, 6vw, 80px); align-items: start;">
      <div data-reveal style="transition: opacity .8s ease, transform .8s cubic-bezier(.2,.7,.2,1);">
        <p style="margin: 0 0 14px; font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: .28em; text-transform: uppercase; color: #39ff14;">Nosotros</p>
        <h2 style="margin: 0 0 26px; font-size: clamp(34px, 5.4vw, 60px); line-height: 1.02; font-weight: 700; letter-spacing: -.035em; color: #f4fff1;">Un taller, no una caja negra</h2>
        <p style="margin: 0 0 20px; font-size: 17px; line-height: 1.7; color: #b6c8b3; text-wrap: pretty;">PrimoTech es un local de reparación de dispositivos electrónicos en Nueva Córdoba. Recibimos el equipo, hacemos el diagnóstico y te explicamos qué falla, qué se cambia y cuánto cuesta antes de avanzar. Reparamos a nivel componente cuando se puede, en vez de cambiar todo por defecto.</p>
        <p style="margin: 0; font-size: 17px; line-height: 1.7; color: #8fa38c;">Trabajos con garantía escrita y seguimiento por WhatsApp mientras tu equipo está en el taller.</p>
      </div>
      <div data-reveal style="display: grid; gap: 14px; transition: opacity .8s ease .12s, transform .8s cubic-bezier(.2,.7,.2,1) .12s;">
        <div style="position: relative; overflow: hidden; padding: 28px; border: 1px solid rgba(57,255,20,.18); border-radius: 6px; background: linear-gradient(160deg, rgba(20,30,18,.9), rgba(6,10,6,.9));">
          <div style="position: absolute; inset: 0; pointer-events: none; background-image: radial-gradient(circle at 1px 1px, rgba(57,255,20,.14) 1px, transparent 1.3px); background-size: 20px 20px; opacity: .4;"></div>
          <p style="position: relative; margin: 0 0 10px; font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: .22em; text-transform: uppercase; color: rgba(57,255,20,.75);">Dirección</p>
          <p style="position: relative; margin: 0; font-size: 22px; font-weight: 600; letter-spacing: -.015em; color: #f4fff1;">Ituzaingó 444, Local 2</p>
          <p style="position: relative; margin: 6px 0 0; font-size: 16px; color: #9fb29c;">Nueva Córdoba, Córdoba Capital</p>
        </div>
        <div style="position: relative; overflow: hidden; padding: 28px; border: 1px solid rgba(57,255,20,.18); border-radius: 6px; background: linear-gradient(160deg, rgba(20,30,18,.9), rgba(6,10,6,.9));">
          <div style="position: absolute; inset: 0; pointer-events: none; background-image: radial-gradient(circle at 1px 1px, rgba(57,255,20,.14) 1px, transparent 1.3px); background-size: 20px 20px; opacity: .4;"></div>
          <p style="position: relative; margin: 0 0 10px; font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: .22em; text-transform: uppercase; color: rgba(57,255,20,.75);">Horarios</p>
          <p style="position: relative; margin: 0; font-size: 18px; color: #e6f5e3;">Lunes a viernes · 9 a 19 hs</p>
          <p style="position: relative; margin: 6px 0 0; font-size: 18px; color: #e6f5e3;">Sábados · 9 a 14 hs</p>
        </div>
      </div>
    </div>
  </section>

  <section id="contacto" data-screen-label="Contacto" style="position: relative; z-index: 1; padding: clamp(80px, 10vw, 140px) clamp(18px, 5vw, 64px) clamp(60px, 8vw, 110px); border-top: 1px solid rgba(57,255,20,.12); background: linear-gradient(180deg, transparent, rgba(57,255,20,.04));">
    <div style="max-width: 1180px; margin: 0 auto;">
      <div data-reveal style="transition: opacity .8s ease, transform .8s cubic-bezier(.2,.7,.2,1);">
        <p style="margin: 0 0 14px; font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: .28em; text-transform: uppercase; color: #39ff14;">Contacto</p>
        <h2 style="margin: 0 0 18px; font-size: clamp(34px, 5.4vw, 60px); line-height: 1.02; font-weight: 700; letter-spacing: -.035em; color: #f4fff1;">Contanos en qué te podemos ayudar</h2>
        <p style="margin: 0 0 36px; max-width: 560px; font-size: 17px; line-height: 1.65; color: #9fb29c;">Escribinos por WhatsApp para una respuesta rápida, o dejanos tu consulta y te contestamos por mail.</p>
        <a href="{{ waLink }}" target="_blank" rel="noopener" style="display: inline-flex; align-items: center; gap: 14px; padding: 18px 30px; border-radius: 4px; background: #39ff14; color: #040604; font-size: 16px; font-weight: 700; box-shadow: 0 0 0 1px rgba(57,255,20,.6), 0 16px 44px rgba(57,255,20,.25); transition: transform .25s ease, background .25s ease;" style-hover="background: #6bff4f; transform: translateY(-3px);">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#040604" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm0 18.02h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.16 8.16 0 0 1-1.25-4.35c0-4.54 3.7-8.23 8.23-8.23 4.54 0 8.23 3.7 8.23 8.23 0 4.54-3.7 8.21-8.24 8.21Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.8-.23-.09-.39-.13-.56.12-.16.25-.64.8-.78.97-.15.16-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.29-.29.43-.44.15-.14.19-.25.29-.41.1-.17.05-.31-.05-.44-.1-.12-.51-1.22-.69-1.67-.19-.45-.37-.39-.51-.4h-.44c-.15 0-.4.06-.61.31-.21.25-.8.79-.8 1.92 0 1.13.82 2.22.94 2.38.11.15 1.6 2.54 3.88 3.46.54.24.97.38 1.3.48.55.18 1.05.15 1.45.09.44-.06 1.42-.58 1.63-1.15.2-.56.2-1.05.14-1.15-.06-.1-.22-.16-.47-.28Z"></path></svg>
          Abrir chat de WhatsApp
        </a>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 22px; margin-top: 54px;">
        <form data-reveal id="pt-contact-form" style="position: relative; overflow: hidden; display: grid; gap: 16px; padding: clamp(24px, 3vw, 36px); border: 1px solid rgba(57,255,20,.18); border-radius: 6px; background: linear-gradient(160deg, rgba(20,30,18,.92), rgba(6,10,6,.92)); transition: opacity .8s ease, transform .8s cubic-bezier(.2,.7,.2,1);">
          <div style="position: absolute; inset: 0; pointer-events: none; background-image: radial-gradient(circle at 1px 1px, rgba(57,255,20,.13) 1px, transparent 1.3px); background-size: 22px 22px; opacity: .35; mask-image: radial-gradient(70% 60% at 0% 0%, #000, transparent); -webkit-mask-image: radial-gradient(70% 60% at 0% 0%, #000, transparent);"></div>
          <p style="position: relative; margin: 0 0 6px; font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: .22em; text-transform: uppercase; color: rgba(57,255,20,.75);">Formulario de consulta</p>
          <label style="position: relative; display: grid; gap: 8px; font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: .16em; text-transform: uppercase; color: #8fa38c;">
            Nombre
            <input type="text" name="nombre" required placeholder="Tu nombre" style="width: 100%; padding: 14px 16px; border: 1px solid rgba(57,255,20,.2); border-radius: 4px; background: rgba(4,7,4,.7); color: #eafce7; font-family: 'Space Grotesk', sans-serif; font-size: 16px; letter-spacing: 0; text-transform: none; outline: none; transition: border-color .25s ease, box-shadow .25s ease;" style-focus="border-color: #39ff14; box-shadow: 0 0 0 3px rgba(57,255,20,.14);">
          </label>
          <label style="position: relative; display: grid; gap: 8px; font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: .16em; text-transform: uppercase; color: #8fa38c;">
            Email
            <input type="email" name="email" required placeholder="tu@mail.com" style="width: 100%; padding: 14px 16px; border: 1px solid rgba(57,255,20,.2); border-radius: 4px; background: rgba(4,7,4,.7); color: #eafce7; font-family: 'Space Grotesk', sans-serif; font-size: 16px; letter-spacing: 0; text-transform: none; outline: none; transition: border-color .25s ease, box-shadow .25s ease;" style-focus="border-color: #39ff14; box-shadow: 0 0 0 3px rgba(57,255,20,.14);">
          </label>
          <label style="position: relative; display: grid; gap: 8px; font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: .16em; text-transform: uppercase; color: #8fa38c;">
            Mensaje
            <textarea name="mensaje" rows="4" required placeholder="Qué equipo es y qué falla tiene" style="width: 100%; padding: 14px 16px; border: 1px solid rgba(57,255,20,.2); border-radius: 4px; background: rgba(4,7,4,.7); color: #eafce7; font-family: 'Space Grotesk', sans-serif; font-size: 16px; line-height: 1.5; letter-spacing: 0; text-transform: none; resize: vertical; outline: none; transition: border-color .25s ease, box-shadow .25s ease;" style-focus="border-color: #39ff14; box-shadow: 0 0 0 3px rgba(57,255,20,.14);"></textarea>
          </label>
          <p style="position: relative; margin: -4px 0 0; font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: .1em; color: #6f806c;">Se envía a primotech.cba@gmail.com</p>
          <button type="submit" style="position: relative; margin-top: 6px; padding: 16px 24px; border: 1px solid #39ff14; border-radius: 4px; background: rgba(57,255,20,.1); color: #39ff14; font-family: 'IBM Plex Mono', monospace; font-size: 12px; letter-spacing: .18em; text-transform: uppercase; cursor: pointer; transition: background .25s ease, color .25s ease;" style-hover="background: #39ff14; color: #040604;">Enviar consulta</button>
          <p id="pt-form-msg" style="position: relative; margin: 0; min-height: 20px; font-family: 'IBM Plex Mono', monospace; font-size: 12px; color: #39ff14;"></p>
        </form>

        <div data-reveal data-m="map" style="position: relative; overflow: hidden; min-height: clamp(300px, 40vw, 380px); border: 1px solid rgba(57,255,20,.18); border-radius: 6px; transition: opacity .8s ease .1s, transform .8s cubic-bezier(.2,.7,.2,1) .1s;">
          <iframe title="Mapa de PrimoTech — Ituzaingó 444, Local 2, Nueva Córdoba" src="https://www.google.com/maps?q=Ituzaing%C3%B3%20444%2C%20Nueva%20C%C3%B3rdoba%2C%20C%C3%B3rdoba%2C%20Argentina&z=16&output=embed" style="width: 100%; height: 100%; min-height: clamp(300px, 40vw, 380px); border: 0; filter: grayscale(1) invert(.92) hue-rotate(75deg) contrast(1.05) brightness(.95);" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <div style="position: absolute; left: 16px; bottom: 16px; padding: 10px 14px; border: 1px solid rgba(57,255,20,.35); border-radius: 4px; background: rgba(4,7,4,.86); backdrop-filter: blur(6px); font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: .14em; text-transform: uppercase; color: #a8ff96;">Ituzaingó 444, Local 2 · Nueva Córdoba</div>
        </div>
      </div>
    </div>
  </section>

  <footer style="position: relative; z-index: 1; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 18px; padding: 30px clamp(18px, 5vw, 64px); border-top: 1px solid rgba(57,255,20,.14); font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: .16em; text-transform: uppercase; color: #6f806c;">
    <span>PrimoTech · especialistas en dispositivos</span>
    <a href="https://instagram.com/primotech.cba" target="_blank" rel="noopener" style="display: inline-flex; align-items: center; gap: 9px; color: #a8ff96; letter-spacing: .12em; transition: color .25s ease;" style-hover="color: #39ff14;">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5"></rect>
        <circle cx="12" cy="12" r="4"></circle>
        <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none"></circle>
      </svg>
      @primotech.cba
    </a>
    <a href="https://tiktok.com/@primotech.cba" target="_blank" rel="noopener" style="display: inline-flex; align-items: center; gap: 9px; color: #a8ff96; letter-spacing: .12em; transition: color .25s ease;" style-hover="color: #39ff14;">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 1 1-1.84-2.48V9.79a5.68 5.68 0 1 0 4.93 5.63V8.87a7.35 7.35 0 0 0 4.3 1.38V7.16a4.28 4.28 0 0 1-3.24-1.34Z"></path>
      </svg>
      TikTok
    </a>
    <a href="https://facebook.com/primotech.cba" target="_blank" rel="noopener" style="display: inline-flex; align-items: center; gap: 9px; color: #a8ff96; letter-spacing: .12em; transition: color .25s ease;" style-hover="color: #39ff14;">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.87.24-1.46 1.48-1.46h1.58V4.45c-.27-.04-1.2-.11-2.29-.11-2.27 0-3.82 1.38-3.82 3.92v2.24H7.7v3h2.75V21h3.05Z"></path>
      </svg>
      Facebook
    </a>
    <span>Ituzaingó 444, Local 2, Nueva Córdoba · Córdoba, AR</span>
  </footer>

  <a href="{{ waLink }}" target="_blank" rel="noopener" aria-label="Escribinos por WhatsApp" style="position: fixed; right: clamp(16px, 3vw, 32px); bottom: clamp(16px, 3vw, 32px); z-index: 90; display: flex; align-items: center; justify-content: center; width: 62px; height: 62px; border-radius: 50%; background: #25d366; box-shadow: 0 0 0 1px rgba(57,255,20,.35), 0 14px 36px rgba(0,0,0,.55), 0 0 28px rgba(37,211,102,.45); animation: pt-float 4.5s ease-in-out infinite; transition: transform .25s ease, box-shadow .25s ease;" style-hover="transform: scale(1.08); box-shadow: 0 0 0 1px rgba(57,255,20,.6), 0 18px 44px rgba(0,0,0,.6), 0 0 40px rgba(37,211,102,.65);">
    <svg width="34" height="34" viewBox="0 0 24 24" fill="#040604" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm0 18.02h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.16 8.16 0 0 1-1.25-4.35c0-4.54 3.7-8.23 8.23-8.23 4.54 0 8.23 3.7 8.23 8.23 0 4.54-3.7 8.21-8.24 8.21Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.8-.23-.09-.39-.13-.56.12-.16.25-.64.8-.78.97-.15.16-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.29-.29.43-.44.15-.14.19-.25.29-.41.1-.17.05-.31-.05-.44-.1-.12-.51-1.22-.69-1.67-.19-.45-.37-.39-.51-.4h-.44c-.15 0-.4.06-.61.31-.21.25-.8.79-.8 1.92 0 1.13.82 2.22.94 2.38.11.15 1.6 2.54 3.88 3.46.54.24.97.38 1.3.48.55.18 1.05.15 1.45.09.44-.06 1.42-.58 1.63-1.15.2-.56.2-1.05.14-1.15-.06-.1-.22-.16-.47-.28Z"></path></svg>
  </a>
`;

export default function Home() {
  const router = useRouter();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    document.documentElement.setAttribute("data-reveal-on", "");

    const revealEls = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));
    const revealScan = () => {
      revealEls.forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.94) {
          el.setAttribute("data-revealed", "");
        }
      });
    };
    revealScan();
    const revealTimer = setInterval(revealScan, 400);
    window.addEventListener("scroll", revealScan, { passive: true });

    const cleanupFns: Array<() => void> = [];

    root.querySelectorAll<HTMLElement>("[style-hover]").forEach((el) => {
      const base = el.getAttribute("style") || "";
      const hover = el.getAttribute("style-hover") || "";
      const enter = () => { el.style.cssText = base + ";" + hover; };
      const leave = () => { el.style.cssText = base; };
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
      cleanupFns.push(() => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    });

    root.querySelectorAll<HTMLElement>("[style-focus]").forEach((el) => {
      const base = el.getAttribute("style") || "";
      const focus = el.getAttribute("style-focus") || "";
      const onFocus = () => { el.style.cssText = base + ";" + focus; };
      const onBlur = () => { el.style.cssText = base; };
      el.addEventListener("focus", onFocus);
      el.addEventListener("blur", onBlur);
      cleanupFns.push(() => {
        el.removeEventListener("focus", onFocus);
        el.removeEventListener("blur", onBlur);
      });
    });

    let logoDead = false;
    let logoRaf = 0;
    let logoTimer: ReturnType<typeof setInterval> | undefined;

    async function bootLogo() {
      if (!root) return;
      const canvas = root.querySelector<HTMLCanvasElement>("#pt-logo-canvas");
      if (!canvas) return;

      const readyImg = (el: HTMLImageElement) =>
        new Promise<HTMLImageElement>((res) => {
          if (el.complete && el.naturalWidth) return res(el);
          el.addEventListener("load", () => res(el), { once: true });
          el.addEventListener("error", () => res(el), { once: true });
        });

      const baseImg = new Image();
      baseImg.src = "/assets/primotech-logo-base.png";
      const circuitImg = new Image();
      circuitImg.src = "/assets/primotech-logo-circuit.png";

      const [base, circuit] = await Promise.all([readyImg(baseImg), readyImg(circuitImg)]);
      if (logoDead || !circuit.naturalWidth) return;

      const OW = 1288, OH = 488, CX = 1166, CY = 515, START = 297;
      const W = circuit.naturalWidth, H = circuit.naturalHeight;

      const mk = (w: number, h: number) => {
        const c = document.createElement("canvas");
        c.width = w; c.height = h;
        return c;
      };

      const c0 = mk(W, H);
      c0.getContext("2d")!.drawImage(circuit, 0, 0);
      const cp = c0.getContext("2d")!.getImageData(0, 0, W, H).data;

      const travel = (X: number, y: number) => {
        const a = (Math.atan2(y - CY, X - CX) * 180) / Math.PI;
        return ((START - ((a + 360) % 360)) + 720) % 360;
      };

      const seq: Array<[number, number, number, number]> = [];
      let tMin = 1e9, tMax = -1;
      for (let i = 0; i < W * H; i++) {
        if (cp[i * 4 + 3] < 30) continue;
        const X = i % W, y = (i / W) | 0, tv = travel(X, y);
        seq.push([X, y, Math.min(1, (cp[i * 4 + 3] / 255) * 0.92), tv]);
        if (tv < tMin) tMin = tv;
        if (tv > tMax) tMax = tv;
      }
      seq.sort((a, b) => a[3] - b[3]);
      const arc = { from: tMin - 9, to: tMax };

      const baseS = mk(OW, OH);
      baseS.getContext("2d")!.drawImage(base, 0, 0, OW, OH);
      const circuitS = mk(OW, OH);
      circuitS.getContext("2d")!.drawImage(circuit, 0, 0, OW, OH);
      const trailCanvas = mk(W, H);
      const t = trailCanvas.getContext("2d")!;
      const headCanvas = mk(W, H);
      const h = headCanvas.getContext("2d")!;
      const GW = OW >> 1, GH = OH >> 1;
      const glowCanvas = mk(GW, GH);
      const g = glowCanvas.getContext("2d")!;

      canvas.width = OW;
      canvas.height = OH;
      const o = canvas.getContext("2d")!;

      let cursor = 0;
      let lastPhase = 0;
      const t0 = performance.now();
      const LOOP_SECONDS = 6;
      const GHOST_OPACITY = 0.2;

      function ray(ctx: CanvasRenderingContext2D, tv: number) {
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.translate(CX, CY);
        ctx.rotate(((START - tv) * Math.PI) / 180);
        const grad = ctx.createLinearGradient(0, 0, 1496, 0);
        grad.addColorStop(0, "rgba(120,225,88,0.22)");
        grad.addColorStop(1, "rgba(200,245,180,0.8)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.arc(0, 0, 1700, -0.055, 0.055);
        ctx.closePath();
        ctx.fill();
        ctx.setTransform(1, 0, 0, 1, 0, 0);
      }

      function render(phase: number) {
        const drawEnd = 0.74, holdEnd = 0.9;
        let progress: number, alpha: number;
        if (phase < drawEnd) { progress = phase / drawEnd; alpha = 1; }
        else if (phase < holdEnd) { progress = 1; alpha = 1; }
        else { progress = 1; alpha = 1 - (phase - holdEnd) / (1 - holdEnd); }

        const ang = arc.from + progress * (arc.to - arc.from);
        if (phase < lastPhase) { t.clearRect(0, 0, W, H); cursor = 0; }
        lastPhase = phase;

        while (cursor < seq.length && seq[cursor][3] <= ang) {
          const p = seq[cursor++];
          t.fillStyle = "rgba(96,222,76," + p[2].toFixed(3) + ")";
          t.fillRect(p[0], p[1], 2.4, 2.4);
        }

        h.clearRect(0, 0, W, H);
        if (phase < drawEnd) {
          h.save();
          ray(h, ang);
          h.globalCompositeOperation = "destination-in";
          h.drawImage(circuit, 0, 0);
          h.restore();
        }

        g.clearRect(0, 0, GW, GH);
        g.globalCompositeOperation = "source-over";
        g.globalAlpha = 0.7;
        g.drawImage(trailCanvas, 0, 0, GW, GH);
        g.globalCompositeOperation = "lighter";
        g.globalAlpha = 0.85;
        g.drawImage(headCanvas, 0, 0, GW, GH);
        g.globalCompositeOperation = "source-over";
        g.globalAlpha = 1;

        o.globalCompositeOperation = "source-over";
        o.filter = "none";
        o.globalAlpha = 1;
        o.clearRect(0, 0, OW, OH);
        o.drawImage(baseS, 0, 0);
        o.globalCompositeOperation = "lighter";
        o.globalAlpha = 0.05 + 0.05 * Math.sin(phase * Math.PI * 2);
        o.drawImage(baseS, 0, 0);
        o.globalAlpha = GHOST_OPACITY;
        o.drawImage(circuitS, 0, 0);
        o.globalAlpha = alpha * 0.8;
        o.filter = "blur(4px)";
        o.drawImage(glowCanvas, 0, 0, OW, OH);
        o.filter = "none";
        o.globalAlpha = alpha;
        o.drawImage(trailCanvas, 0, 0, OW, OH);
        o.drawImage(headCanvas, 0, 0, OW, OH);
        o.globalCompositeOperation = "source-over";
        o.globalAlpha = 1;
      }

      function frame() {
        if (logoDead) return;
        const loop = LOOP_SECONDS * 1000;
        render(((performance.now() - t0) % loop) / loop);
      }

      function tick() {
        if (logoDead) return;
        logoRaf = requestAnimationFrame(tick);
        frame();
      }

      tick();
      logoTimer = setInterval(() => {
        if (!logoDead && document.hidden) frame();
      }, 200);
    }
    bootLogo();

    const form = root.querySelector<HTMLFormElement>("#pt-contact-form");
    const msgEl = root.querySelector<HTMLElement>("#pt-form-msg");
    const submitBtn = form?.querySelector<HTMLButtonElement>('button[type="submit"]') ?? null;

    async function onSubmit(e: Event) {
      e.preventDefault();
      if (!form) return;
      const nombre = (form.elements.namedItem("nombre") as HTMLInputElement | null)?.value.trim() || "";
      const email = (form.elements.namedItem("email") as HTMLInputElement | null)?.value.trim() || "";
      const mensaje = (form.elements.namedItem("mensaje") as HTMLTextAreaElement | null)?.value.trim() || "";

      if (submitBtn) submitBtn.disabled = true;
      if (msgEl) msgEl.textContent = "Enviando\u2026";

      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            subject: "Consulta web \u2014 " + (nombre || "sin nombre"),
            from_name: "Web PrimoTech",
            name: nombre,
            email: email,
            message: mensaje,
          }),
        });
        const data = await res.json();
        if (data.success) {
          form.reset();
          router.push("/gracias");
        } else {
          if (msgEl) msgEl.textContent = "No se pudo enviar. Escribinos por WhatsApp.";
        }
      } catch {
        if (msgEl) msgEl.textContent = "Sin conexi\u00f3n. Escribinos por WhatsApp.";
      } finally {
        if (submitBtn) submitBtn.disabled = false;
      }
    }

    form?.addEventListener("submit", onSubmit);

    return () => {
      logoDead = true;
      cancelAnimationFrame(logoRaf);
      if (logoTimer) clearInterval(logoTimer);
      document.documentElement.removeAttribute("data-reveal-on");
      clearInterval(revealTimer);
      window.removeEventListener("scroll", revealScan);
      cleanupFns.forEach((fn) => fn());
      form?.removeEventListener("submit", onSubmit);
    };
  }, [router]);

  const html = PAGE_HTML.replaceAll("{{ waLink }}", buildWaLink());

  return (
    <div
      ref={rootRef}
      style={{ position: "relative", minHeight: "100vh", background: "#040604", isolation: "isolate" }}
    >
      <CircuitBackground />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
