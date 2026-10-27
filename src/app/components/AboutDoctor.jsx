
"use client";

import { motion, useReducedMotion } from "framer-motion";
import GalleryAnimation from "./GalleryAnimation";

export default function AboutDoctor() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      dir="rtl"
      aria-labelledby="about-title"
      className="scroll-mt-32 overflow-hidden bg-[#F5F1E7] py-20 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 25,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: reduceMotion ? 0 : 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-10 flex flex-col items-center text-center md:mb-14"
        >
          <div className="flex w-full max-w-3xl items-center justify-center gap-2 sm:gap-5 lg:gap-7">
            <div
              aria-hidden="true"
              className="flex min-w-0 flex-1 items-center justify-end gap-2"
            >
              <span className="h-[5px] w-[5px] shrink-0 rotate-45 bg-[#B3A681]" />
              <span className="h-px w-full max-w-20 bg-[#B3A681]/70" />
            </div>

            <h2
              id="about-title"
              className="shrink-0 whitespace-nowrap text-[clamp(26px,6vw,64px)] leading-[1.6] text-[#3E4637]"
              style={{
                fontFamily: '"AmiriCustom", serif',
                fontWeight: 400,
              }}
            >
              د. بشار المسالمة
            </h2>

            <div
              aria-hidden="true"
              className="flex min-w-0 flex-1 items-center gap-2"
            >
              <span className="h-px w-full max-w-20 bg-[#B3A681]/70" />
              <span className="h-[5px] w-[5px] shrink-0 rotate-45 bg-[#B3A681]" />
            </div>
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: reduceMotion ? 0 : 0.9,
              delay: reduceMotion ? 0 : 0.25,
            }}
            className="mt-1 h-[2px] w-24 origin-center rounded-full bg-gradient-to-r from-transparent via-[#B3A681] to-transparent sm:w-36"
            aria-hidden="true"
          />

          <p
            className="mt-4 text-[17px] tracking-wide text-[#9A8C70] sm:text-[19px]"
            style={{
              fontFamily: '"TajawalCustom", sans-serif',
            }}
          >
            طبيب أسنان
          </p>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 30,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            duration: reduceMotion ? 0 : 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <GalleryAnimation />
        </motion.div>
      </div>
    </section>
  );
}
