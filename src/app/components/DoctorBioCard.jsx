
"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { ArrowUpLeft, X } from "lucide-react";

const doctorBio =
  "يجمع الدكتور بشار المسالمة بين الممارسة المهنية والاطلاع على أحدث أساليب طب الأسنان، مدعومًا بتدريب في نخبة من أبرز العيادات الألمانية. يحرص على تقديم رعاية سنية قائمة على الدقة والمعايير العلمية، مع الاهتمام بأدق التفاصيل لتحقيق صحة فموية أفضل وابتسامة طبيعية ومتناسقة.";

export default function DoctorBioCard() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isOpen) return;

    function handlePointerDown(event) {
      if (!containerRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener(
      "pointerdown",
      handlePointerDown
    );
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener(
        "pointerdown",
        handlePointerDown
      );
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      dir="rtl"
      className="absolute left-4 top-5 z-30 sm:left-6 sm:top-6"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-expanded={isOpen}
        aria-controls="doctor-bio-content"
        className="group flex min-h-11 items-center gap-2 rounded-full border border-white/60 bg-[#F5F1E7]/95 px-4 py-2.5 text-[13px] text-[#3E4637] shadow-[0_8px_30px_rgba(0,0,0,0.12)] backdrop-blur-md transition-colors duration-300 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:text-[14px]"
        style={{
          fontFamily: '"TajawalCustom", sans-serif',
        }}
      >
        تعرّف على الدكتور

        <ArrowUpLeft
          size={15}
          strokeWidth={1.7}
          aria-hidden="true"
          className="transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="doctor-bio-content"
            role="region"
            aria-label="نبذة عن الدكتور بشار المسالمة"
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: -10,
                    scale: 0.97,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -8,
              scale: 0.98,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute left-0 top-[calc(100%+12px)] w-[min(330px,calc(100vw-68px))] rounded-[22px] border border-[#B3A681]/50 bg-[#F5F1E7]/98 p-5 text-right shadow-[0_20px_60px_rgba(20,28,17,0.2)] backdrop-blur-xl sm:w-[350px] sm:p-6"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3
                  className="text-[26px] leading-[1.4] text-[#3E4637] sm:text-[29px]"
                  style={{
                    fontFamily: '"AmiriCustom", serif',
                  }}
                >
                  د. بشار المسالمة
                </h3>

                <p
                  className="mt-1 text-[13px] text-[#968667]"
                  style={{
                    fontFamily: '"TajawalCustom", sans-serif',
                  }}
                >
                  طبيب أسنان
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="إغلاق نبذة الدكتور"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[#3E4637] transition-colors hover:bg-[#E1D7B8]/60 focus-visible:outline-2 focus-visible:outline-[#3E4637]"
              >
                <X size={18} aria-hidden="true" />
              </button>
            </div>

            <div
              aria-hidden="true"
              className="my-4 h-px w-full bg-[#B3A681]/40"
            />

            <p
              className="text-[14px] leading-[2] text-[#596154] sm:text-[15px]"
              style={{
                fontFamily: '"TajawalCustom", sans-serif',
              }}
            >
              {doctorBio}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
