
"use client";

import {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";

import Image from "next/image";
import { createPortal } from "react-dom";

import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useReducedMotion,
} from "framer-motion";

import { Plus, X, ArrowUpLeft } from "lucide-react";

const features = [
  {
    id: "modern-approach",
    number: "01",
    image: "/WhyChooseUs/FirstImg.jpg",
    alt: "طبيب أسنان يشرح معلومات علاجية لمريض باستخدام شاشة",
    title: "معرفة تواكب التطور",
    subtitle: "المعرفة أساس العناية",
    description:
      "لأن العناية الأفضل تبدأ من المعرفة، يجمع الدكتور بشار المسالمة بين الممارسة المهنية والاطلاع على أحدث أساليب طب الأسنان.",
  },
  {
    id: "attention-to-detail",
    number: "02",
    image: "/WhyChooseUs/SecondImg.jpg",
    alt: "فحص الأسنان باستخدام أدوات طب الأسنان",
    title: "التفاصيل تصنع الفرق",
    subtitle: "الاهتمام يبدأ من التفاصيل",
    description:
      "نهتم بأدق التفاصيل في الرعاية السنية، لأن كل خطوة مدروسة تساهم في الوصول إلى صحة فموية أفضل.",
  },
  {
    id: "natural-smile",
    number: "03",
    image: "/WhyChooseUs/ThirdImg.jpg",
    alt: "صورة تعبيرية لابتسامة طبيعية",
    title: "ابتسامة تشبهك",
    subtitle: "جمال طبيعي ومتناسق",
    description:
      "هدفنا ابتسامة طبيعية ومتناسقة، تنطلق من الاهتمام بصحة الفم والأسنان دون المبالغة في النتائج أو المظهر.",
  },
  {
    id: "scientific-care",
    number: "04",
    image: "/WhyChooseUs/ForthImg.jpg",
    alt: "صورة تعبيرية عن جمال الابتسامة وصحة الأسنان",
    title: "رعاية بأسس علمية",
    subtitle: "الدقة والمعايير العلمية",
    description:
      "رعاية قائمة على الدقة والمعايير العلمية، مدعومة بتدريب الدكتور بشار المسالمة في نخبة من أبرز العيادات الألمانية.",
  },
];

const cardSpring = {
  type: "spring",
  stiffness: 230,
  damping: 30,
  mass: 0.9,
};

const subscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

function DialogPortal({ children }) {
  const isClient = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot
  );

  if (!isClient) return null;

  return createPortal(children, document.body);
}

function FeatureDialog({
  selected,
  onClose,
  dialogRef,
  closeButtonRef,
  transition,
  reduceMotion,
}) {
  return (
    <DialogPortal>
      <AnimatePresence initial={false}>
        {selected && (
          <div
            key={selected.id}
            className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-5 sm:px-6"
          >
            <motion.div
              aria-hidden="true"
              className="absolute inset-0 bg-[#172018]/70 backdrop-blur-[7px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: reduceMotion ? 0 : 0.3,
              }}
              onClick={onClose}
            />

            <motion.div
              ref={dialogRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby={`feature-dialog-title-${selected.id}`}
              aria-describedby={`feature-dialog-description-${selected.id}`}
              layoutId={`feature-card-${selected.id}`}
              transition={transition}
              dir="rtl"
              className="relative z-10 flex max-h-[90dvh] w-full max-w-[850px] flex-col overflow-y-auto rounded-[30px] border border-[#B3A681]/40 bg-background shadow-[0_30px_100px_rgba(0,0,0,0.25)]"
            >
              <motion.div
                layoutId={`feature-image-${selected.id}`}
                className="relative h-[240px] w-full shrink-0 overflow-hidden sm:h-[340px]"
              >
                <Image
                  src={selected.image}
                  alt={selected.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 850px"
                  className="object-cover"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#172018]/20 to-transparent" />
              </motion.div>

              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                aria-label="إغلاق التفاصيل"
                className="absolute left-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-background/95 text-[#3E4637] shadow-md transition-all duration-300 hover:rotate-90 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3E4637]"
              >
                <X size={22} aria-hidden="true" />
              </button>

              <div className="px-6 pb-8 pt-7 sm:px-10 sm:pb-10 sm:pt-9">
                <motion.h3
                  id={`feature-dialog-title-${selected.id}`}
                  layoutId={`feature-title-${selected.id}`}
                  className="text-[35px] leading-[1.4] text-[#3E4637] sm:text-[46px]"
                  style={{
                    fontFamily: '"AmiriCustom", serif',
                  }}
                >
                  {selected.title}
                </motion.h3>

                <motion.div
                  initial={{
                    opacity: 0,
                    y: reduceMotion ? 0 : 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.35,
                    delay: reduceMotion ? 0 : 0.12,
                  }}
                >
                  <div
                    aria-hidden="true"
                    className="my-5 h-px w-20 bg-[#B3A681]"
                  />

                  <p
                    id={`feature-dialog-description-${selected.id}`}
                    className="max-w-2xl text-[17px] leading-[2] text-[#62685C] sm:text-[19px]"
                    style={{
                      fontFamily: '"TajawalCustom", sans-serif',
                    }}
                  >
                    {selected.description}
                  </p>

                  <div className="mt-8 flex justify-end">
                    <button
                      type="button"
                      onClick={onClose}
                      className="inline-flex items-center gap-2 rounded-full bg-[#3E4637] px-6 py-3 text-[15px] text-white transition-colors duration-300 hover:bg-[#59654D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3E4637]"
                    >
                      العودة للبطاقات
                      <ArrowUpLeft
                        size={16}
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </DialogPortal>
  );
}

export default function WhyChooseUs() {
  const [selected, setSelected] = useState(null);

  const closeButtonRef = useRef(null);
  const dialogRef = useRef(null);
  const triggerRef = useRef(null);

  const reduceMotion = useReducedMotion();

  const transition = reduceMotion
    ? { duration: 0 }
    : cardSpring;

  useEffect(() => {
    if (!selected) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const focusFrame = requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setSelected(null);
        return;
      }

      if (event.key !== "Tab") return;

      const focusableElements =
        dialogRef.current?.querySelectorAll(
          'button:not([disabled]), a[href], input:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );

      if (!focusableElements?.length) return;

      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];

      if (
        event.shiftKey &&
        document.activeElement === first
      ) {
        event.preventDefault();
        last.focus();
      } else if (
        !event.shiftKey &&
        document.activeElement === last
      ) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      cancelAnimationFrame(focusFrame);

      document.body.style.overflow = previousOverflow;

      document.removeEventListener(
        "keydown",
        handleKeyDown
      );

      requestAnimationFrame(() => {
        triggerRef.current?.focus();
      });
    };
  }, [selected]);

  function openFeature(feature, event) {
    triggerRef.current = event.currentTarget;
    setSelected(feature);
  }

  function closeFeature() {
    setSelected(null);
  }

  return (
    <section
      id="why-us"
      dir="rtl"
      aria-labelledby="why-us-heading"
      className="scroll-mt-28 overflow-hidden bg-background px-5 py-24 sm:px-8 md:py-28 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-14 flex flex-col items-center text-center"
        >
          <div className="flex items-center justify-center gap-4 sm:gap-7">
            <span
              aria-hidden="true"
              className="h-px w-8 bg-[#B3A681]/75 sm:w-16"
            />

            <h2
              id="why-us-heading"
              className="text-[38px] leading-relaxed text-[#3E4637] sm:text-[52px] lg:text-[58px]"
              style={{
                fontFamily: '"AmiriCustom", serif',
              }}
            >
              لماذا تختارنا؟
            </h2>

            <span
              aria-hidden="true"
              className="h-px w-8 bg-[#B3A681]/75 sm:w-16"
            />
          </div>

          <p
            className="mt-3 max-w-2xl text-[16px] leading-8 text-[#62685C] sm:text-[18px]"
            style={{
              fontFamily: '"TajawalCustom", sans-serif',
            }}
          >
            لأن ابتسامتك تستحق عناية تقوم على
            المعرفة، والدقة، والاهتمام بالتفاصيل.
          </p>
        </motion.div>

        <LayoutGroup id="why-us-layout">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.65,
                  delay: reduceMotion ? 0 : index * 0.09,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <motion.button
                  type="button"
                  layoutId={`feature-card-${feature.id}`}
                  onClick={(event) => openFeature(feature, event)}
                  aria-haspopup="dialog"
                  aria-label={`عرض تفاصيل ${feature.title}`}
                  className="group relative flex h-[385px] w-full flex-col overflow-hidden rounded-[26px] border border-[#B3A681]/35 bg-[#E1D7B8] text-right shadow-[0_10px_35px_rgba(62,70,55,0.07)] outline-offset-4 transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(62,70,55,0.16)] focus-visible:outline-2 focus-visible:outline-[#3E4637]"
                  whileHover={
                    reduceMotion ? undefined : { y: -5 }
                  }
                  transition={transition}
                >
                  <div className="relative h-[260px] w-full shrink-0 overflow-hidden">
                    <motion.div
                      layoutId={`feature-image-${feature.id}`}
                      className="relative h-full w-full"
                    >
                      <Image
                        src={feature.image}
                        alt={feature.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </motion.div>

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#172018]/25 via-transparent to-transparent" />

                    <span
                      aria-hidden="true"
                      className="absolute right-4 top-4 rounded-full border border-white/30 bg-[#3E4637]/65 px-3 py-1.5 text-[12px] text-white backdrop-blur-md"
                    >
                      {feature.number}
                    </span>
                  </div>

                  <div className="flex min-h-0 flex-1 items-center justify-between gap-3 px-5 py-5">
                    <div className="min-w-0 flex-1">
                      <motion.h3
                        layoutId={`feature-title-${feature.id}`}
                        className="text-[24px] leading-[1.4] text-[#3E4637] xl:text-[26px]"
                        style={{
                          fontFamily: '"AmiriCustom", serif',
                        }}
                      >
                        {feature.title}
                      </motion.h3>

                      <p
                        className="mt-1 text-[13px] leading-6 text-[#62685C]"
                        style={{
                          fontFamily:
                            '"TajawalCustom", sans-serif',
                        }}
                      >
                        {feature.subtitle}
                      </p>
                    </div>

                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#3E4637] text-white transition-transform duration-300 group-hover:rotate-90 group-hover:bg-[#59654D]">
                      <Plus size={21} aria-hidden="true" />
                    </span>
                  </div>
                </motion.button>
              </motion.div>
            ))}
          </div>

          <FeatureDialog
            selected={selected}
            onClose={closeFeature}
            dialogRef={dialogRef}
            closeButtonRef={closeButtonRef}
            transition={transition}
            reduceMotion={reduceMotion}
          />
        </LayoutGroup>
      </div>
    </section>
  );
}
