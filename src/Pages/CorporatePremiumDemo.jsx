import React from "react";
import { QRCodeSVG } from "qrcode.react";
import logo from "../Assets/QR+Logo.png";

function CorporatePremiumDemo() {
  const whatsappUrl = "https://wa.me/5491169671848";
  const linkedinUrl =
    "https://www.linkedin.com/in/jorge-diego-arredondo/";
  const portfolioUrl = "https://jdstudioweb.com.ar/";
  const demoUrl = `${window.location.origin}/tarjetas-virtuales/corporate-premium`;

  return (
    <main className="min-h-screen bg-[#0a1018] text-[#f1f0ec]">
      {/* HERO */}
      <section className="border-b border-white/[0.08] bg-[#0b111b]">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-[10px] font-bold tracking-[4px] text-[#0d9488]">
              DEMO · TARJETA DIGITAL
            </span>

            <h1 className="mt-5 text-4xl font-normal tracking-tight md:text-6xl">
              Corporate Premium Card
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-500 md:text-base">
              Una demostración del modelo Corporate Premium de JD Studio Web.
              Una propuesta sobria y profesional pensada para empresas,
              profesionales y marcas.
            </p>
          </div>
        </div>
      </section>

      {/* DEMO */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[minmax(280px,420px)_1fr] lg:items-center">

            {/* CARD PREVIEW */}
            <div className="flex justify-center">
              <div className="w-full max-w-[340px] rounded-[44px] border border-white/[0.10] bg-[#111a25] p-5 shadow-[0_40px_120px_rgba(0,0,0,0.45)]">

                <div className="mb-5 flex justify-center">
                  <div className="h-1.5 w-20 rounded-full bg-white/10" />
                </div>

                <div className="overflow-hidden rounded-[36px] border border-white/[0.08] bg-[#101722] p-3">

                  <div className="relative overflow-hidden rounded-[30px] bg-gradient-to-b from-[#111a25] via-[#0d151f] to-[#081019] p-4">

                    {/* DETALLES DE FONDO */}
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(13,148,136,0.16),transparent_30%)]" />

                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.05),transparent_30%)]" />

                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0d9488] via-[#2dd4bf] to-[#0d9488]" />

                    <div className="relative space-y-4">

                      {/* PERFIL */}
                      <div className="rounded-[28px] border border-white/[0.10] bg-[#111a25]/95 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">

                        <div className="flex items-center gap-3">

                          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-[#0d9488]/40 bg-[#0d9488]/10 text-lg font-semibold text-[#2dd4bf]">
                            JD
                          </div>

                          <div className="min-w-0">
                            <p className="text-sm font-semibold leading-tight text-white">
                              Jorge Diego Arredondo
                            </p>

                            <p className="mt-1 max-w-[135px] text-[10px] uppercase tracking-[0.12em] leading-tight break-words text-white/60">
                              Desarrollador Web
                            </p>

                            <p className="mt-1 text-[10px] font-medium text-[#2dd4bf]">
                              JD Studio Web
                            </p>
                          </div>

                        </div>

                        {/* CONTACTO */}
                        <div className="mt-4 border-t border-white/[0.08] pt-4">

                          <p className="text-[10px] uppercase tracking-[0.24em] text-white/40">
                            Contacto directo
                          </p>

                          <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 flex items-center justify-between rounded-2xl border border-[#0d9488]/30 bg-[#0d9488]/10 px-3 py-3 transition hover:-translate-y-0.5 hover:border-[#0d9488]/60 hover:bg-[#0d9488]/20"
                          >
                            <span className="text-xs text-white/80">
                              WhatsApp
                            </span>

                            <span className="text-[10px] font-medium text-[#2dd4bf]">
                              +54 9 11 6967-1848
                            </span>
                          </a>

                        </div>
                      </div>

                      {/* REDES */}
                      <div className="grid grid-cols-3 gap-2">

                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-3xl border border-white/10 bg-black/20 px-2 py-2 text-center text-[10px] uppercase tracking-[0.20em] text-white/70 transition hover:-translate-y-0.5 hover:border-[#0d9488]/50 hover:text-[#2dd4bf]"
                        >
                          WA
                        </a>

                        <a
                          href={linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-3xl border border-white/10 bg-black/20 px-2 py-2 text-center text-[10px] uppercase tracking-[0.20em] text-white/70 transition hover:-translate-y-0.5 hover:border-[#0d9488]/50 hover:text-[#2dd4bf]"
                        >
                          LI
                        </a>

                        <a
                          href={portfolioUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-3xl border border-white/10 bg-black/20 px-2 py-2 text-center text-[10px] uppercase tracking-[0.20em] text-white/70 transition hover:-translate-y-0.5 hover:border-[#0d9488]/50 hover:text-[#2dd4bf]"
                        >
                          WEB
                        </a>

                      </div>

                      {/* QR */}
                      <div className="rounded-[28px] border border-white/[0.10] bg-white p-4 text-center">

                        <QRCodeSVG
                          value={demoUrl}
                          size={150}
                          bgColor="#ffffff"
                          fgColor="#0b111b"
                          level="H"
                          includeMargin={false}
                          imageSettings={{
                            src: logo,
                            height: 34,
                            width: 34,
                            excavate: true,
                          }}
                          className="mx-auto rounded-2xl"
                        />

                        <p className="mt-3 text-[10px] uppercase tracking-[0.24em] text-slate-500">
                          Scan QR
                        </p>

                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* INFORMACIÓN */}
            <div className="space-y-6">

              <div>
                <span className="text-[10px] font-bold tracking-[3px] text-[#0d9488]">
                  CORPORATE PREMIUM
                </span>

                <h2 className="mt-3 text-3xl font-normal tracking-tight md:text-4xl">
                  Profesionalismo en cada detalle.
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-gray-500">
                  Este modelo combina una estética corporativa, tonos oscuros
                  y detalles en teal para transmitir una identidad profesional
                  y moderna.
                </p>
              </div>

              {/* INCLUYE */}
              <div className="rounded-2xl border border-white/[0.08] bg-[#101722] p-6">

                <p className="text-[10px] font-bold tracking-[3px] text-[#0d9488]">
                  INCLUYE
                </p>

                <div className="mt-5 space-y-2">

                  {[
                    "Diseño Corporate Premium",
                    "WhatsApp directo",
                    "Redes sociales",
                    "Código QR personalizado",
                    "Adaptación a tu identidad",
                  ].map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 rounded-lg border border-white/[0.06] bg-[#0b111b] px-4 py-3 text-sm text-gray-400"
                    >
                      <span className="text-[#0d9488]">+</span>
                      {feature}
                    </div>
                  ))}

                </div>
              </div>

              {/* CTA */}
              <div className="rounded-2xl border border-[#0d9488]/30 bg-[#0d9488]/[0.05] p-6">

                <p className="text-lg font-medium text-gray-200">
                  ¿Querés una tarjeta como esta?
                </p>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Podemos personalizar el diseño con tu nombre, profesión,
                  empresa, redes, WhatsApp y código QR.
                </p>

                <a
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-3 rounded-md bg-[#0d9488] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#0f766e]"
                >
                  Quiero mi tarjeta
                  <span className="text-lg">→</span>
                </a>

              </div>

              {/* VOLVER */}
              <a
                href="/tarjetas-virtuales"
                className="inline-flex text-sm text-gray-500 transition hover:text-[#0d9488]"
              >
                ← Volver a Tarjetas Virtuales
              </a>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default CorporatePremiumDemo;