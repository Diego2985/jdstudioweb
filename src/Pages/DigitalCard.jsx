import React from "react";
import { QRCodeSVG } from "qrcode.react";
import logo from "../Assets/QR+Logo.png";

function DigitalCard() {
  const digitalCardUrl =
    "https://jdstudioweb.com.ar/tarjeta-digital";

  const whatsappUrl =
    "https://wa.me/5491169671848";

  const emailUrl =
    "mailto:arredondojorgediego@gmail.com";

  const linkedinUrl =
    "https://www.linkedin.com/in/jorge-diego-arredondo/";

  return (
    <main className="min-h-screen bg-[#0b111b] text-[#f1f0ec]">

      <section className="flex min-h-screen items-center justify-center px-6 py-16">

        <div
          data-aos="fade-up"
          className="
            relative
            w-full
            max-w-md
            overflow-hidden
            rounded-3xl
            border
            border-[#0d9488]/30
            bg-[#101722]
            shadow-[0_30px_100px_rgba(0,0,0,0.45)]
          "
        >

          {/* Decoración */}

          <div
            className="
              pointer-events-none
              absolute
              -right-24
              -top-24
              h-64
              w-64
              rounded-full
              border
              border-[#0d9488]/20
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -right-12
              -top-12
              h-40
              w-40
              rounded-full
              border
              border-[#0d9488]/10
            "
          />

          <div className="relative px-7 py-10 md:px-10">

            {/* Marca */}

            <div className="mb-10">

              <div className="flex items-center gap-3">

                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-[#0d9488]
                    text-xl
                    font-bold
                    text-[#0d9488]
                  "
                >
                  JD
                </div>

                <div>

                  <div className="text-lg font-bold">
                    JD
                  </div>

                  <div
                    className="
                      text-[9px]
                      font-bold
                      tracking-[3px]
                      text-gray-500
                    "
                  >
                    STUDIO WEB
                  </div>

                </div>

              </div>

            </div>


            {/* Presentación */}

            <div className="mb-8">

              <span
                className="
                  text-[10px]
                  font-bold
                  tracking-[3px]
                  text-[#0d9488]
                "
              >
                DESARROLLADOR WEB
              </span>

              <h1
                className="
                  mt-3
                  text-3xl
                  font-semibold
                  leading-tight
                "
              >
                Jorge Diego
                <br />
                Arredondo
              </h1>

              <p
                className="
                  mt-4
                  text-sm
                  leading-6
                  text-gray-500
                "
              >
                Diseño y desarrollo de sitios web modernos,
                funcionales y adaptados a cada proyecto.
              </p>

            </div>


            {/* QR */}

            <div
              className="
                mb-8
                flex
                flex-col
                items-center
                rounded-2xl
                border
                border-white/[0.08]
                bg-[#0b111b]
                px-6
                py-7
              "
            >

              <div
                className="
                  rounded-xl
                  bg-white
                  p-4
                "
              >

                <QRCodeSVG
                  value={digitalCardUrl}
                  size={180}
                  bgColor="#ffffff"
                  fgColor="#0b111b"
                  level="H"
                  includeMargin={false}
                  imageSettings={{
                    src: logo,
                    height: 42,
                    width: 42,
                    excavate: true,
                  }}
                />

              </div>

              <p
                className="
                  mt-4
                  text-center
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[2px]
                  text-[#0d9488]
                "
              >
                Escaneá para conocer mi trabajo
              </p>

            </div>


            {/* Contacto */}

            <div className="space-y-3">

              {/* WhatsApp */}

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  items-center
                  justify-between
                  rounded-lg
                  border
                  border-[#0d9488]/30
                  bg-[#0d9488]/10
                  px-5
                  py-4
                  text-sm
                  font-semibold
                  transition
                  duration-300
                  hover:border-[#0d9488]
                  hover:bg-[#0d9488]/20
                "
              >
                <span>WhatsApp</span>
                <span>→</span>
              </a>


              {/* Portfolio */}

              <a
                href="https://jdstudioweb.com.ar/"
                className="
                  flex
                  items-center
                  justify-between
                  rounded-lg
                  border
                  border-white/[0.08]
                  px-5
                  py-4
                  text-sm
                  font-semibold
                  transition
                  duration-300
                  hover:border-[#0d9488]/50
                  hover:text-[#0d9488]
                "
              >
                <span>Portfolio</span>
                <span>→</span>
              </a>


              {/* Email */}

              <a
                href={emailUrl}
                className="
                  flex
                  items-center
                  justify-between
                  rounded-lg
                  border
                  border-white/[0.08]
                  px-5
                  py-4
                  text-sm
                  font-semibold
                  transition
                  duration-300
                  hover:border-[#0d9488]/50
                  hover:text-[#0d9488]
                "
              >
                <span>Email</span>
                <span>→</span>
              </a>


              {/* LinkedIn */}

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  items-center
                  justify-between
                  rounded-lg
                  border
                  border-white/[0.08]
                  px-5
                  py-4
                  text-sm
                  font-semibold
                  transition
                  duration-300
                  hover:border-[#0d9488]/50
                  hover:text-[#0d9488]
                "
              >
                <span>LinkedIn</span>
                <span>→</span>
              </a>

            </div>


            {/* Footer de la tarjeta */}

            <div
              className="
                mt-10
                border-t
                border-white/[0.08]
                pt-5
                text-center
              "
            >

              <p
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[3px]
                  text-gray-600
                "
              >
                JD STUDIO WEB
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default DigitalCard;