import React from "react";
import { QRCodeSVG } from "qrcode.react";
import logo from "../Assets/QR+Logo.png";

function LuxuryBlackDemo() {
  const whatsappUrl = "https://wa.me/5491169671848";
  const linkedinUrl =
    "https://www.linkedin.com/in/jorge-diego-arredondo/";
  const portfolioUrl = "https://jdstudioweb.com.ar/";
  const demoUrl = `${window.location.origin}/tarjetas-virtuales/luxury-black`;

  return (
    <main className="min-h-screen bg-[#070707] text-[#f1f0ec]">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[#c8a96b]/15">
        <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[#c8a96b]/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-[10px] font-bold tracking-[4px] text-[#c8a96b]">
              DEMO · TARJETA DIGITAL
            </span>

            <h1 className="mt-5 text-4xl font-normal tracking-tight text-[#f5ead3] md:text-6xl">
              Luxury Black Card
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-500 md:text-base">
              Una demostración del modelo Luxury Black de JD Studio Web.
              Una propuesta elegante y sofisticada para profesionales,
              marcas y negocios que buscan una presencia digital exclusiva.
            </p>
          </div>
        </div>
      </section>

      {/* DEMO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-1/3 top-24 h-72 w-72 rounded-full bg-[#c8a96b]/[0.06] blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[minmax(280px,420px)_1fr] lg:items-center">

            {/* CARD PREVIEW */}
            <div className="flex justify-center">
              <div className="w-full max-w-[340px] rounded-[44px] border border-[#c8a96b]/20 bg-[#11100d] p-5 shadow-[0_40px_120px_rgba(0,0,0,0.65)]">

                <div className="mb-5 flex justify-center">
                  <div className="h-1.5 w-20 rounded-full bg-[#c8a96b]/20" />
                </div>

                <div className="overflow-hidden rounded-[36px] border border-[#c8a96b]/15 bg-[#0d0c0a] p-3">

                  <div className="relative overflow-hidden rounded-[30px] bg-gradient-to-b from-[#17140f] via-[#0d0c0a] to-[#050505] p-4">

                    {/* DETALLES DE LUZ */}
                    <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#c8a96b]/10 blur-3xl" />

                    <div className="pointer-events-none absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-[#c8a96b]/[0.06] blur-3xl" />

                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c8a96b] to-transparent" />

                    <div className="relative space-y-4">

                      {/* PERFIL */}
                      <div className="rounded-[28px] border border-[#c8a96b]/20 bg-[#11100d]/95 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">

                        <div className="flex items-center gap-3">

                          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#c8a96b]/50 bg-gradient-to-br from-[#272019] to-[#0c0b09] text-lg font-semibold text-[#d8bb7a]">
                            JD
                          </div>

                          <div className="min-w-0">
                            <p className="text-sm font-semibold leading-tight text-[#f5ead3]">
                              Jorge Diego Arredondo
                            </p>

                            <p className="mt-1 max-w-[135px] text-[10px] uppercase tracking-[0.12em] leading-tight break-words text-white/55">
                              Desarrollador Web
                            </p>

                            <p className="mt-1 text-[10px] font-medium text-[#c8a96b]">
                              JD Studio Web
                            </p>
                          </div>

                        </div>

                        {/* WHATSAPP */}
                        <div className="mt-4 rounded-[26px] border border-[#c8a96b]/15 bg-black/30 p-3">

                          <p className="text-[10px] uppercase tracking-[0.24em] text-[#c8a96b]/60">
                            WhatsApp
                          </p>

                          <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 block rounded-2xl border border-[#c8a96b]/40 bg-gradient-to-r from-[#c8a96b] to-[#e0c98d] px-3 py-2 text-center text-sm font-semibold leading-tight text-[#17130c] transition hover:-translate-y-0.5 hover:from-[#d7ba78] hover:to-[#edd9a5]"
                          >
                            <span className="block">+54 9 11</span>
                            <span className="block">6967-1848</span>
                          </a>

                        </div>
                      </div>

                      {/* REDES */}
                      <div className="grid grid-cols-3 gap-2">

                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-3xl border border-[#c8a96b]/15 bg-black/30 px-2 py-2 text-center text-[10px] uppercase tracking-[0.20em] text-[#d8c79f]/75 transition hover:-translate-y-0.5 hover:border-[#c8a96b]/50 hover:text-[#e0c98d]"
                        >
                          WA
                        </a>

                        <a
                          href={linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-3xl border border-[#c8a96b]/15 bg-black/30 px-2 py-2 text-center text-[10px] uppercase tracking-[0.20em] text-[#d8c79f]/75 transition hover:-translate-y-0.5 hover:border-[#c8a96b]/50 hover:text-[#e0c98d]"
                        >
                          LI
                        </a>

                        <a
                          href={portfolioUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-3xl border border-[#c8a96b]/15 bg-black/30 px-2 py-2 text-center text-[10px] uppercase tracking-[0.20em] text-[#d8c79f]/75 transition hover:-translate-y-0.5 hover:border-[#c8a96b]/50 hover:text-[#e0c98d]"
                        >
                          WEB
                        </a>

                      </div>

                      {/* QR */}
                      <div className="rounded-[28px] border border-[#c8a96b]/15 bg-white p-4 text-center">

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
                <span className="text-[10px] font-bold tracking-[3px] text-[#c8a96b]">
                  LUXURY BLACK
                </span>

                <h2 className="mt-3 text-3xl font-normal tracking-tight text-[#f5ead3] md:text-4xl">
                  Elegancia que deja huella.
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-gray-500">
                  Este modelo combina negro profundo, detalles champagne y
                  una estética sofisticada para crear una tarjeta digital
                  exclusiva y memorable.
                </p>
              </div>

              {/* INCLUYE */}
              <div className="rounded-2xl border border-[#c8a96b]/15 bg-[#11100d] p-6">

                <p className="text-[10px] font-bold tracking-[3px] text-[#c8a96b]">
                  INCLUYE
                </p>

                <div className="mt-5 space-y-2">

                  {[
                    "Diseño Luxury Black",
                    "WhatsApp directo",
                    "Redes sociales",
                    "Código QR personalizado",
                    "Adaptación a tu identidad",
                  ].map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 rounded-lg border border-[#c8a96b]/10 bg-[#0b0a08] px-4 py-3 text-sm text-gray-400"
                    >
                      <span className="text-[#c8a96b]">+</span>
                      {feature}
                    </div>
                  ))}

                </div>
              </div>

              {/* CTA */}
              <div className="rounded-2xl border border-[#c8a96b]/25 bg-[#c8a96b]/[0.05] p-6">

                <p className="text-lg font-medium text-[#f1e5c9]">
                  ¿Querés una tarjeta como esta?
                </p>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Podemos personalizar el diseño con tu nombre, profesión,
                  empresa, redes, WhatsApp y código QR.
                </p>

                <a
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-3 rounded-md bg-gradient-to-r from-[#c8a96b] to-[#e0c98d] px-5 py-3 text-sm font-semibold text-[#17130c] transition hover:-translate-y-1"
                >
                  Quiero mi tarjeta
                  <span className="text-lg">→</span>
                </a>

              </div>

              {/* VOLVER */}
              <a
                href="/tarjetas-virtuales"
                className="inline-flex text-sm text-gray-500 transition hover:text-[#c8a96b]"
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

export default LuxuryBlackDemo;