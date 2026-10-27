
"use client";

import { motion, useReducedMotion } from "framer-motion";
import WhyChooseUsGallery from "./WhyChooseUsGallery";
export default function AboutDoctor() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="why-us"
      dir="rtl"
      aria-labelledby="why-us-heading"
      className="scroll-mt-32 overflow-hidden bg-background py-20 md:py-28 lg:py-32"
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
              id="why-us-heading"
              className="shrink-0 whitespace-nowrap text-[clamp(30px,6vw,64px)] leading-[1.6] text-[#3E4637]"
              style={{
                fontFamily: '"AmiriCustom", serif',
                fontWeight: 400,
              }}
            >
              لماذا تختارنا؟
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
            className="mt-4 max-w-2xl text-[16px] leading-8 text-[#62685C] sm:text-[18px]"
            style={{
              fontFamily: '"TajawalCustom", sans-serif',
            }}
          >
            لأن العناية المميزة تبدأ بالمعرفة والدقة
            والاهتمام بكل تفصيلة، نحرص على تقديم
            تجربة علاجية تجمع بين الراحة والثقة.
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
          <WhyChooseUsGallery />
        </motion.div>
      </div>
    </section>
  );
}
