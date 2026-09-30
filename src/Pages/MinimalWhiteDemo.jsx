import React from "react";
import { QRCodeSVG } from "qrcode.react";
import logo from "../Assets/QR+Logo.png";

function MinimalWhiteDemo() {
  const whatsappUrl = "https://wa.me/5491169671848";
  const linkedinUrl = "https://www.linkedin.com/in/jorge-diego-arredondo/";
  const portfolioUrl = "https://jdstudioweb.com.ar/";
  const demoUrl = `${window.location.origin}/tarjetas-virtuales/minimal-white`;

  return (
    <main className="min-h-screen bg-[#f4f5f3] text-[#18201f]">
      {/* HERO */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-[10px] font-bold tracking-[4px] text-[#0d9488]">
              DEMO · TARJETA DIGITAL
            </span>

            <h1 className="mt-5 text-4xl font-normal tracking-tight text-slate-900 md:text-6xl">
              Minimal White Card
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 md:text-base">
              Una demostración del modelo Minimal White de JD Studio Web.
              Diseño limpio, elegante y adaptable a diferentes profesionales y
              negocios.
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
              <div className="w-full max-w-[340px] rounded-[44px] border border-slate-200 bg-white p-5 shadow-[0_35px_100px_rgba(15,23,42,0.12)]">

                <div className="mb-5 flex justify-center">
                  <div className="h-1.5 w-20 rounded-full bg-slate-200" />
                </div>

                <div className="overflow-hidden rounded-[36px] border border-slate-200 bg-[#f8faf9] p-3">

                  <div className="relative overflow-hidden rounded-[30px] bg-white p-4">

                    {/* Línea superior */}
                    <div className="absolute inset-x-0 top-0 h-1 bg-[#0d9488]" />

                    <div className="relative space-y-4">

                      {/* PERFIL */}
                      <div className="rounded-[28px] border border-slate-200 bg-white p-4 shadow-sm">

                        <div className="flex items-center gap-3">

                          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-slate-900 text-lg font-semibold text-white">
                            JD
                          </div>

                          <div className="min-w-0">
                            <p className="text-sm font-semibold leading-tight text-slate-900">
                              Jorge Diego Arredondo
                            </p>

                            <p className="mt-1 max-w-[145px] text-[10px] uppercase tracking-[0.12em] leading-tight break-words text-slate-500">
                              Desarrollador Web
                            </p>

                            <p className="mt-1 text-[10px] text-[#0d9488]">
                              JD Studio Web
                            </p>
                          </div>

                        </div>

                        {/* WHATSAPP */}
                        <div className="mt-4 rounded-[26px] border border-slate-200 bg-slate-50 p-3">

                          <p className="text-[10px] uppercase tracking-[0.24em] text-slate-400">
                            WhatsApp
                          </p>

                          <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 block rounded-2xl bg-[#0d9488] px-3 py-2 text-center text-sm font-semibold leading-tight text-white transition hover:-translate-y-0.5 hover:bg-[#0f766e]"
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
                          className="rounded-3xl border border-slate-200 bg-white px-2 py-2 text-center text-[10px] uppercase tracking-[0.20em] text-slate-600 transition hover:-translate-y-0.5 hover:border-[#0d9488]/50 hover:text-[#0d9488]"
                        >
                          WA
                        </a>

                        <a
                          href={linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-3xl border border-slate-200 bg-white px-2 py-2 text-center text-[10px] uppercase tracking-[0.20em] text-slate-600 transition hover:-translate-y-0.5 hover:border-[#0d9488]/50 hover:text-[#0d9488]"
                        >
                          LI
                        </a>

                        <a
                          href={portfolioUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-3xl border border-slate-200 bg-white px-2 py-2 text-center text-[10px] uppercase tracking-[0.20em] text-slate-600 transition hover:-translate-y-0.5 hover:border-[#0d9488]/50 hover:text-[#0d9488]"
                        >
                          WEB
                        </a>

                      </div>

                      {/* QR */}
                      <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-4 text-center">

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

                        <p className="mt-3 text-[10px] uppercase tracking-[0.24em] text-slate-400">
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
                  MINIMAL WHITE
                </span>

                <h2 className="mt-3 text-3xl font-normal tracking-tight text-slate-900 md:text-4xl">
                  Elegancia sin exceso.
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500">
                  Este modelo está pensado para quienes buscan una tarjeta
                  digital profesional, limpia y sofisticada, con una estética
                  clara y fácil de adaptar a diferentes identidades visuales.
                </p>
              </div>

              {/* INCLUYE */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

                <p className="text-[10px] font-bold tracking-[3px] text-[#0d9488]">
                  INCLUYE
                </p>

                <div className="mt-5 space-y-2">

                  {[
                    "Diseño Minimal White",
                    "WhatsApp directo",
                    "Redes sociales",
                    "Código QR personalizado",
                    "Adaptación a tu identidad",
                  ].map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 rounded-lg border border-slate-100 bg-slate-50 px-4 py-3 text-sm text-slate-500"
                    >
                      <span className="text-[#0d9488]">+</span>
                      {feature}
                    </div>
                  ))}

                </div>
              </div>

              {/* CTA */}
              <div className="rounded-2xl border border-[#0d9488]/20 bg-[#0d9488]/[0.05] p-6">

                <p className="text-lg font-medium text-slate-800">
                  ¿Querés una tarjeta como esta?
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-500">
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
                className="inline-flex text-sm text-slate-500 transition hover:text-[#0d9488]"
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

export default MinimalWhiteDemo;