import React from "react";
import { QRCodeSVG } from "qrcode.react";
import logo from "../Assets/QR+Logo.png";

function CreativeGradientDemo() {
  const whatsappUrl = "https://wa.me/5491169671848";
  const linkedinUrl =
    "https://www.linkedin.com/in/jorge-diego-arredondo/";
  const portfolioUrl = "https://jdstudioweb.com.ar/";
  const demoUrl = `${window.location.origin}/tarjetas-virtuales/creative-gradient`;

  return (
    <main className="min-h-screen bg-[#090711] text-[#f1f0ec]">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/[0.08]">
        <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-[10px] font-bold tracking-[4px] text-cyan-400">
              DEMO · TARJETA DIGITAL
            </span>

            <h1 className="mt-5 bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-violet-400 bg-clip-text text-4xl font-normal tracking-tight text-transparent md:text-6xl">
              Creative Gradient Card
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-500 md:text-base">
              Una demostración del modelo Creative Gradient de JD Studio Web.
              Una propuesta visual, dinámica y personalizable para destacar
              una identidad digital.
            </p>
          </div>
        </div>
      </section>

      {/* DEMO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-1/4 top-20 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="pointer-events-none absolute right-1/4 bottom-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[minmax(280px,420px)_1fr] lg:items-center">

            {/* CARD PREVIEW */}
            <div className="flex justify-center">
              <div className="w-full max-w-[340px] rounded-[44px] border border-white/[0.10] bg-[#11101b] p-5 shadow-[0_40px_120px_rgba(0,0,0,0.55)]">

                <div className="mb-5 flex justify-center">
                  <div className="h-1.5 w-20 rounded-full bg-white/10" />
                </div>

                <div className="overflow-hidden rounded-[36px] border border-white/[0.08] bg-[#0e0d17] p-3">

                  <div className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-[#24103d] via-[#11152c] to-[#071b27] p-4">

                    {/* GRADIENT BACKGROUND */}
                    <div className="pointer-events-none absolute -left-16 -top-16 h-44 w-44 rounded-full bg-fuchsia-500/30 blur-3xl" />

                    <div className="pointer-events-none absolute -right-16 top-20 h-44 w-44 rounded-full bg-cyan-400/25 blur-3xl" />

                    <div className="pointer-events-none absolute -bottom-20 left-10 h-44 w-44 rounded-full bg-violet-500/20 blur-3xl" />

                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-violet-500" />

                    <div className="relative space-y-4">

                      {/* PERFIL */}
                      <div className="rounded-[28px] border border-white/10 bg-black/25 p-4 backdrop-blur-md">

                        <div className="flex items-center gap-3">

                          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 via-violet-500 to-cyan-400 text-lg font-semibold text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.18)]">
                            JD
                          </div>

                          <div className="min-w-0">
                            <p className="text-sm font-semibold leading-tight text-white">
                              Jorge Diego Arredondo
                            </p>

                            <p className="mt-1 max-w-[135px] text-[10px] uppercase tracking-[0.12em] leading-tight break-words text-white/65">
                              Desarrollador Web
                            </p>

                            <p className="mt-1 text-[10px] font-medium text-cyan-300">
                              JD Studio Web
                            </p>
                          </div>

                        </div>

                        {/* WHATSAPP */}
                        <div className="mt-4 rounded-[26px] border border-white/10 bg-black/25 p-3">

                          <p className="text-[10px] uppercase tracking-[0.24em] text-white/50">
                            WhatsApp
                          </p>

                          <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 block rounded-2xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-3 py-2 text-center text-sm font-semibold leading-tight text-slate-950 transition hover:-translate-y-0.5"
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
                          className="rounded-3xl border border-white/10 bg-black/25 px-2 py-2 text-center text-[10px] uppercase tracking-[0.20em] text-white/75 backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-fuchsia-400/50 hover:text-fuchsia-300"
                        >
                          WA
                        </a>

                        <a
                          href={linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-3xl border border-white/10 bg-black/25 px-2 py-2 text-center text-[10px] uppercase tracking-[0.20em] text-white/75 backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-cyan-400/50 hover:text-cyan-300"
                        >
                          LI
                        </a>

                        <a
                          href={portfolioUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-3xl border border-white/10 bg-black/25 px-2 py-2 text-center text-[10px] uppercase tracking-[0.20em] text-white/75 backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-violet-400/50 hover:text-violet-300"
                        >
                          WEB
                        </a>

                      </div>

                      {/* QR */}
                      <div className="rounded-[28px] border border-white/10 bg-white p-4 text-center">

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
                <span className="text-[10px] font-bold tracking-[3px] text-cyan-400">
                  CREATIVE GRADIENT
                </span>

                <h2 className="mt-3 bg-gradient-to-r from-fuchsia-300 via-cyan-200 to-violet-300 bg-clip-text text-3xl font-normal tracking-tight text-transparent md:text-4xl">
                  Color, energía y personalidad.
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-gray-500">
                  Este modelo combina degradados, transparencias y efectos de
                  luz para crear una tarjeta digital más expresiva y visual.
                </p>
              </div>

              {/* INCLUYE */}
              <div className="rounded-2xl border border-white/[0.08] bg-[#10101a] p-6">

                <p className="text-[10px] font-bold tracking-[3px] text-cyan-400">
                  INCLUYE
                </p>

                <div className="mt-5 space-y-2">

                  {[
                    "Diseño Creative Gradient",
                    "WhatsApp directo",
                    "Redes sociales",
                    "Código QR personalizado",
                    "Adaptación a tu identidad",
                  ].map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 rounded-lg border border-white/[0.06] bg-[#0b0b13] px-4 py-3 text-sm text-gray-400"
                    >
                      <span className="text-cyan-400">+</span>
                      {feature}
                    </div>
                  ))}

                </div>
              </div>

              {/* CTA */}
              <div className="rounded-2xl border border-fuchsia-400/20 bg-gradient-to-r from-fuchsia-500/[0.06] via-violet-500/[0.05] to-cyan-400/[0.06] p-6">

                <p className="text-lg font-medium text-gray-200">
                  ¿Querés una tarjeta como esta?
                </p>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Podemos personalizar el diseño con tu nombre, profesión,
                  empresa, redes, WhatsApp y código QR.
                </p>

                <a
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-3 rounded-md bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-1"
                >
                  Quiero mi tarjeta
                  <span className="text-lg">→</span>
                </a>

              </div>

              {/* VOLVER */}
              <a
                href="/tarjetas-virtuales"
                className="inline-flex text-sm text-gray-500 transition hover:text-cyan-400"
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

export default CreativeGradientDemo;