
"use client";

import { useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";

const stats = [
  {
    id: "services",
    value: 8,
    suffix: "",
    title: "خدمات متخصصة",
    description: "مجموعة من خدمات العناية بالأسنان",
    colors: ["#E1D7B8", "#B3A681", "#D5DCCB"],
    layout: "md:col-span-2",
  },
  {
    id: "results",
    value: 4,
    suffix: "",
    title: "حالات معروضة",
    description: "صور من معرض نتائج المرضى",
    colors: ["#D4DDCA", "#E1D7B8", "#B3A681"],
    layout: "",
  },
  {
    id: "booking",
    value: 1,
    suffix: "",
    title: "حجز مباشر",
    description: "تواصل سهل عبر واتساب",
    colors: ["#E1D7B8", "#DED5BD", "#C6D0BD"],
    layout: "",
  },
  {
    id: "devices",
    value: 3,
    suffix: "",
    title: "تجربة متجاوبة",
    description: "هاتف، تابلت، وكمبيوتر",
    colors: ["#D4DDCA", "#B3A681", "#E1D7B8"],
    layout: "md:col-span-2",
  },
];

const gradientPositions = [
  {
    top: "-35%",
    left: "-15%",
    width: "75%",
    height: "115%",
    delay: "0s",
  },
  {
    top: "15%",
    left: "45%",
    width: "80%",
    height: "110%",
    delay: "-7s",
  },
  {
    top: "55%",
    left: "-20%",
    width: "85%",
    height: "100%",
    delay: "-13s",
  },
];

function AnimatedGradient({ colors }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >h2
      {colors.map((color, index) => {
        const position = gradientPositions[index];

        return (
          <div
            key={`${color}-${index}`}
            className="dentiva-gradient-blob absolute rounded-full opacity-40 blur-[55px] motion-reduce:animate-none"
            style={{
              backgroundColor: color,
              top: position.top,
              left: position.left,
              width: position.width,
              height: position.height,
              animationDelay: position.delay,
            }}
          />
        );
      })}
    </div>
  );
}

function CountUp({ value, suffix = "" }) {
  const numberRef = useRef(null);

  const isInView = useInView(numberRef, {
    once: true,
    amount: 0.5,
  });

  const reduceMotion = useReducedMotion();

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView || reduceMotion) return;

    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(latest) {
        setCount(Math.round(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, value, reduceMotion]);

  const displayValue =
    reduceMotion && isInView ? value : count;

  return (
    <span
      ref={numberRef}
      className="inline-flex items-baseline tabular-nums"
      dir="ltr"
      aria-label={`${value}${suffix}`}
    >
      {String(displayValue).padStart(2, "0")}
      {suffix}
    </span>
  );
}

function StatCard({ stat, index }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={
        reduceMotion
          ? false
          : { opacity: 0, y: 22 }
      }
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: reduceMotion ? 0 : 0.65,
        delay: reduceMotion ? 0 : index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group relative isolate min-h-[190px] overflow-hidden rounded-[25px] border border-[#B3A681]/35 bg-[#F0ECE1] shadow-[0_12px_35px_rgba(62,70,55,0.045)] sm:min-h-[225px] ${stat.layout}`}
    >
      <AnimatedGradient colors={stat.colors} />

      <div className="pointer-events-none absolute inset-0 bg-white/15" />

      <div className="relative z-10 flex h-full min-h-[190px] flex-col justify-between p-5 sm:min-h-[225px] sm:p-7">
        <div className="flex items-center justify-between gap-3">
          <span
            className="text-[14px] leading-6 text-[#56604F] sm:text-[16px]"
            style={{
              fontFamily: '"TajawalCustom", sans-serif',
            }}
          >
            {stat.title}
          </span>

          <span className="text-[12px] tracking-[0.15em] text-[#84765B]">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div>
          <div
            className="text-[65px] leading-none text-[#3E4637] sm:text-[83px] lg:text-[94px]"
            style={{
              fontFamily: '"AmiriCustom", serif',
            }}
          >
            <CountUp
              value={stat.value}
              suffix={stat.suffix}
            />
          </div>

          <div
            aria-hidden="true"
            className="my-4 h-[2px] w-10 rounded-full bg-[#9F9272]"
          />

          <p
            className="text-[13px] leading-7 text-[#596154] sm:text-[15px]"
            style={{
              fontFamily: '"TajawalCustom", sans-serif',
            }}
          >
            {stat.description}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

export default function NumbersSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="numbers"
      dir="rtl"
      aria-labelledby="numbers-heading"
      className="relative scroll-mt-28 bg-background px-5 py-20 sm:px-8 md:py-24 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={
            reduceMotion
              ? false
              : { opacity: 0, y: 20 }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-10 text-center md:mb-12"
        >
          

       <h2
  id="numbers-heading"
  className="text-[42px] font-bold leading-[1.5] text-[#3E4637] sm:text-[56px]"
  style={{
    fontFamily: '"AmiriCustom", serif',
    fontWeight: 700,
  }}
>
  نظرة أقرب إلى خدماتنا
</h2>

          <p
            className="mx-auto mt-3 max-w-xl text-[15px] leading-8 text-[#62685C] sm:text-[17px]"
            style={{
              fontFamily: '"TajawalCustom", sans-serif',
            }}
          >
            أرقام بسيطة تعرّفك على ما يمكنك
            استكشافه داخل موقع المركز.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 md:gap-5">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.id}
              stat={stat}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
