
"use client";

import { useRef } from "react";
import Image from "next/image";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";

import { ArrowUpLeft, CalendarCheck } from "lucide-react";
import DoctorBioCard from "./DoctorBioCard";

const OLIVE = "#3E4637";
const BEIGE = "#E1D7B8";
const GOLD = "#B3A681";
const PAPER = "#F5F1E7";

const headingFont = {
  fontFamily: '"AmiriCustom", serif',
};

const bodyFont = {
  fontFamily: '"TajawalCustom", sans-serif',
};

const EASE = [0.22, 1, 0.36, 1];

const WHATSAPP_NUMBER = "970594151151";

const WHATSAPP_MESSAGE =
  "مرحبًا، أود الاستفسار وحجز موعد لدى مركز الدكتور بشار المسالمة لطب الأسنان.";

const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

function Line({ children, delay, reduce }) {
  return (
    <motion.span
      className="block overflow-visible py-[0.06em]"
      initial={
        reduce
          ? false
          : {
              opacity: 0,
              y: 18,
            }
      }
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: reduce ? 0 : 0.9,
        ease: EASE,
        delay: reduce ? 0 : delay,
      }}
    >
      {children}
    </motion.span>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const scrollY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, reduce ? 0 : 70]
  );

  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const sx = useSpring(mx, {
    stiffness: 70,
    damping: 18,
    mass: 0.6,
  });

  const sy = useSpring(my, {
    stiffness: 70,
    damping: 18,
    mass: 0.6,
  });

  const photoX = useTransform(sx, (v) => v * -12);
  const photoY = useTransform(sy, (v) => v * -10);

  const ringX = useTransform(sx, (v) => v * 22);
  const ringY = useTransform(sy, (v) => v * 18);

  function handlePointerMove(event) {
    if (reduce || event.pointerType !== "mouse") {
      return;
    }

    const rect =
      event.currentTarget.getBoundingClientRect();

    mx.set(
      ((event.clientX - rect.left) / rect.width - 0.5) * 2
    );

    my.set(
      ((event.clientY - rect.top) / rect.height - 0.5) * 2
    );
  }

  function handlePointerLeave() {
    mx.set(0);
    my.set(0);
  }

  const fade = (delay) => ({
    initial: reduce
      ? false
      : {
          opacity: 0,
          y: 18,
        },
    animate: {
      opacity: 1,
      y: 0,
    },
    transition: {
      duration: reduce ? 0 : 0.9,
      ease: EASE,
      delay: reduce ? 0 : delay,
    },
  });

  return (
    <section
      id="home"
      ref={sectionRef}
      dir="rtl"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative isolate overflow-x-clip"
      style={{
        backgroundColor: PAPER,
        color: OLIVE,
        ...bodyFont,
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -z-10 rounded-full blur-3xl"
        style={{
          width: "46rem",
          height: "46rem",
          maxWidth: "120vw",
          insetInlineStart: "-12rem",
          top: "-8rem",
          background: `radial-gradient(closest-side, ${BEIGE}, transparent)`,
          opacity: 0.8,
        }}
      />

      <div className="mx-auto grid min-h-[100svh] max-w-7xl items-center gap-10 px-6 pb-16 pt-28 sm:px-10 md:pt-32 lg:grid-cols-12 lg:gap-6 lg:px-12 lg:pb-20">
        {/* Hero Content */}
        <div className="relative z-20 lg:col-span-7 lg:pe-4">
          <h1
            className="text-[clamp(3.4rem,10vw,8.5rem)] leading-[1.35] tracking-normal sm:leading-[1.3] lg:leading-[1.25]"
            style={{
              ...headingFont,
              fontWeight: 400,
              color: OLIVE,
            }}
          >
            <Line delay={0.2} reduce={reduce}>
              ابتسامتك
            </Line>

            <Line delay={0.32} reduce={reduce}>
              تبدأ بثقة
            </Line>
          </h1>

          <motion.div
            aria-hidden="true"
            className="mt-7 h-px w-24 origin-right sm:mt-8"
            style={{
              backgroundColor: GOLD,
            }}
            initial={reduce ? false : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: reduce ? 0 : 0.8,
              ease: EASE,
              delay: reduce ? 0 : 0.45,
            }}
          />

          <motion.p
            {...fade(0.55)}
            className="mt-7 max-w-[34rem] text-lg font-light leading-[2] sm:text-xl"
            style={{
              color: "#4D5645",
            }}
          >
            في مركز الدكتور بشار المسالمة لطب الأسنان،
            نعتني بأسنانك بدقة واهتمام بالتفاصيل،
            لتجربة علاجية مريحة وابتسامة طبيعية ومتناسقة.
          </motion.p>

          <motion.div
            {...fade(0.7)}
            className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex min-h-14 items-center justify-center gap-3 overflow-hidden rounded-full px-7 py-3 text-base font-light shadow-[0_14px_30px_-14px_rgba(62,70,55,0.7)] transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 active:scale-[0.98] sm:px-9 sm:text-lg"
              style={{
                backgroundColor: OLIVE,
                color: BEIGE,
                outlineColor: GOLD,
              }}
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 origin-right scale-x-0 bg-[#B3A681] transition-transform duration-500 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100"
              />

              <CalendarCheck
                size={20}
                strokeWidth={1.5}
                className="relative z-10 transition-colors duration-500 group-hover:text-[#3E4637]"
                aria-hidden="true"
              />

              <span className="relative z-10 transition-colors duration-500 group-hover:text-[#3E4637]">
                احجز موعدك
              </span>
            </a>

            <a
              href="#services"
              className="group relative inline-flex min-h-14 items-center justify-center gap-3 overflow-hidden rounded-full border border-[#3E4637]/35 bg-transparent px-7 py-3 text-base font-light text-[#3E4637] transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-[#3E4637] hover:shadow-[0_12px_28px_-16px_rgba(62,70,55,0.55)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3E4637] active:scale-[0.98] sm:px-9 sm:text-lg"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 origin-right scale-x-0 rounded-full bg-[#3E4637] transition-transform duration-500 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100"
              />

              <span className="relative z-10 transition-colors duration-300 group-hover:text-[#F5F1E7] group-focus-visible:text-[#F5F1E7]">
                اكتشف خدماتنا
              </span>

              <ArrowUpLeft
                size={18}
                strokeWidth={1.5}
                aria-hidden="true"
                className="relative z-10 transition-[transform,color] duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:text-[#F5F1E7] group-focus-visible:text-[#F5F1E7]"
              />
            </a>
          </motion.div>
        </div>

        {/* Doctor Portrait */}
        <motion.div
          className="relative mx-auto w-full max-w-[26rem] lg:col-span-5 lg:max-w-none lg:justify-self-end"
          style={{
            y: reduce ? 0 : scrollY,
          }}
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[28rem] lg:max-w-[30rem]">
            {/* Decorative Frame */}
            <motion.div
              aria-hidden="true"
              className="absolute inset-0 rounded-t-full border"
              style={{
                borderColor: GOLD,
                x: reduce ? 0 : ringX,
                y: reduce ? 0 : ringY,
                translate: "-1.25rem 1.25rem",
              }}
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: reduce ? 0 : 0.65,
                delay: reduce ? 0 : 0.2,
              }}
            />

            {/* Doctor Image */}
            <div
              className="absolute inset-0 overflow-hidden rounded-t-full"
              style={{
                backgroundColor: OLIVE,
              }}
            >
              <motion.div
                className="absolute -inset-4"
                style={{
                  x: reduce ? 0 : photoX,
                  y: reduce ? 0 : photoY,
                }}
                initial={reduce ? false : { scale: 1.06 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: reduce ? 0 : 1.1,
                  ease: EASE,
                }}
              >
                <Image
                  src="/Doctor.jpeg"
                  alt="الدكتور بشار المسالمة"
                  fill
                  loading="eager"
                  fetchPriority="high"
                  sizes="(min-width: 1024px) 480px, (min-width: 640px) 448px, calc(100vw - 48px)"
                  className="object-cover"
                  style={{
                    objectPosition: "50% 18%",
                  }}
                />
              </motion.div>

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3"
                style={{
                  background: `linear-gradient(to top, ${OLIVE}cc, transparent)`,
                }}
              />
            </div>

            {/* Doctor Name */}
            <motion.div
              className="pointer-events-none absolute inset-x-0 bottom-6 mx-auto w-[78%] text-center"
              initial={
                reduce
                  ? false
                  : {
                      opacity: 0,
                      y: 10,
                    }
              }
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: reduce ? 0 : 0.6,
                ease: EASE,
                delay: reduce ? 0 : 0.35,
              }}
            >
              <p
                className="text-2xl leading-snug"
                style={{
                  ...headingFont,
                  color: BEIGE,
                }}
              >
                الدكتور بشار المسالمة
              </p>

              <p
                className="mt-1 text-sm font-light"
                style={{
                  color: BEIGE,
                }}
              >
                مركز طب الأسنان
              </p>
            </motion.div>

            {/* Interactive Doctor Biography */}
            <DoctorBioCard />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
