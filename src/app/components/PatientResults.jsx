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

import { Plus, X, ArrowUpLeft, ChevronLeft, ChevronRight } from "lucide-react";

const results = [
  {
    id: "patient-result-01",
    number: "01",
    image: "/PatientResult/FirstImg.png",
    alt: "صور مقارنة قبل وبعد للحالة الأولى",
    title: "ابتسامة بثقة متجددة",
    subtitle: "فرق يظهر في تفاصيل الابتسامة",
    description:
      "تُظهر الصور التغيّر في مظهر الابتسامة قبل العلاج وبعده، مع الاهتمام بتناسق الأسنان ومظهرها العام.",
  },
  {
    id: "patient-result-02",
    number: "02",
    image: "/PatientResult/SecondImg.png",
    alt: "صور مقارنة قبل وبعد للحالة الثانية",
    title: "جمال في كل تفصيلة",
    subtitle: "عناية بالمظهر والتناسق الطبيعي",
    description:
      "مقارنة بصرية توضح اختلاف مظهر الأسنان والابتسامة بين الصورتين، وتبرز أهمية العناية بالتفاصيل الجمالية.",
  },
  {
    id: "patient-result-03",
    number: "03",
    image: "/PatientResult/ThirdImg.png",
    alt: "صور مقارنة قبل وبعد للحالة الثالثة",
    title: "لمسة جمالية متناسقة",
    subtitle: "تفاصيل تصنع فرقًا في الابتسامة",
    description:
      "تُبرز الصور التغيّر في شكل الابتسامة وتناسق الأسنان. تختلف خيارات العلاج والنتائج بحسب تقييم كل حالة.",
  },
  {
    id: "patient-result-04",
    number: "04",
    image: "/PatientResult/ForthImg.png",
    alt: "صور متعددة لنتائج الحالة الرابعة",
    title: "لكل ابتسامة حكاية",
    subtitle: "رحلة نحو ابتسامة أكثر تناسقًا",
    description:
      "مجموعة صور توضح جوانب مختلفة من مظهر الابتسامة، مع إبراز التفاصيل التي تسهم في جمالها وتناسقها.",
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

function ResultDialog({
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
              aria-labelledby={`result-dialog-title-${selected.id}`}
              aria-describedby={`result-dialog-description-${selected.id}`}
              layoutId={`result-card-${selected.id}`}
              transition={transition}
              dir="rtl"
              className="relative z-10 flex max-h-[90dvh] w-full max-w-[850px] flex-col overflow-y-auto rounded-[30px] border border-[#B3A681]/40 bg-background shadow-[0_30px_100px_rgba(0,0,0,0.25)]"
            >
              <motion.div
                layoutId={`result-image-${selected.id}`}
                className="relative h-[270px] w-full shrink-0 overflow-hidden sm:h-[400px]"
              >
                <Image
                  src={selected.image}
                  alt={selected.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 850px"
                  className="bg-[#E1D7B8]/25 object-contain"
                />
              </motion.div>

              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                aria-label="إغلاق تفاصيل الحالة"
                className="absolute left-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-background/95 text-[#3E4637] shadow-md transition-all duration-300 hover:rotate-90 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3E4637]"
              >
                <X size={22} aria-hidden="true" />
              </button>

              <div className="px-6 pb-8 pt-7 sm:px-10 sm:pb-10 sm:pt-9">
                <motion.h3
                  id={`result-dialog-title-${selected.id}`}
                  layoutId={`result-title-${selected.id}`}
                  className="text-[37px] font-bold leading-[1.4] text-[#3E4637] sm:text-[48px]"
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
                    id={`result-dialog-description-${selected.id}`}
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
                      العودة للنتائج
                      <ArrowUpLeft size={16} aria-hidden="true" />
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

export default function PatientResults() {
  const [selected, setSelected] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const carouselRef = useRef(null);
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

  function openResult(result, event) {
    triggerRef.current = event.currentTarget;
    setSelected(result);
  }

  function closeResult() {
    setSelected(null);
  }

  function handleCarouselScroll() {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const cards = Array.from(carousel.children);
    const containerRect = carousel.getBoundingClientRect();
    const containerCenter =
      containerRect.left + containerRect.width / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    cards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;
      const distance = Math.abs(
        cardCenter - containerCenter
      );

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex((current) =>
      current === closestIndex ? current : closestIndex
    );
  }

  function scrollToResult(index) {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const targetIndex = Math.max(0, Math.min(index, results.length - 1));
    const target = carousel.children[targetIndex];
    if (!target) return;

    const targetRect = target.getBoundingClientRect();
    const viewportRect = carousel.getBoundingClientRect();
    carousel.scrollBy({
      left: targetRect.right - viewportRect.right,
      behavior: reduceMotion ? "instant" : "smooth",
    });

    setActiveIndex(targetIndex);
  }

  return (
    <section
      id="patient-results"
      dir="rtl"
      aria-labelledby="patient-results-heading"
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
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: reduceMotion ? 0 : 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-12 flex flex-col items-center text-center"
        >
          <div className="flex items-center justify-center gap-4 sm:gap-7">
            <div
              aria-hidden="true"
              className="h-px w-8 bg-[#B3A681]/75 sm:w-16"
            />

            <h2
              id="patient-results-heading"
              className="text-[43px] font-bold leading-[1.5] text-[#3E4637] sm:text-[56px] lg:text-[62px]"
              style={{
                fontFamily: '"AmiriCustom", serif',
              }}
            >
              نتائج المرضى
            </h2>

            <div
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
            لمحات من نتائج الحالات التي نعتز بمشاركتها،
            حيث تُظهر كل ابتسامة تفاصيل مختلفة
            من رحلة العناية بالأسنان.
          </p>
        </motion.div>

        <LayoutGroup id="patient-results-layout">
          {/* Mobile: Swipe Carousel / Tablet & Desktop: Grid */}
          <div
            ref={carouselRef}
            dir="rtl"
            onScroll={handleCarouselScroll}
            aria-label="معرض نتائج المرضى"
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-4 [scrollbar-width:none] sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:pb-0 lg:grid-cols-4 [&::-webkit-scrollbar]:hidden"
          >
            {results.map((result, index) => (
              <motion.div
                key={result.id}
                className="w-full min-w-0 shrink-0 snap-center sm:w-auto sm:shrink"
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
                  layoutId={`result-card-${result.id}`}
                  onClick={(event) =>
                    openResult(result, event)
                  }
                  aria-haspopup="dialog"
                  aria-label={`عرض تفاصيل ${result.title}`}
                  className="group relative flex h-[385px] w-full flex-col overflow-hidden rounded-[26px] border border-[#B3A681]/35 bg-[#E1D7B8] text-right shadow-[0_10px_35px_rgba(62,70,55,0.07)] outline-offset-4 transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(62,70,55,0.16)] focus-visible:outline-2 focus-visible:outline-[#3E4637]"
                  whileHover={
                    reduceMotion ? undefined : { y: -5 }
                  }
                  transition={transition}
                >
                  <div className="relative h-[260px] w-full shrink-0 overflow-hidden">
                    <motion.div
                      layoutId={`result-image-${result.id}`}
                      className="relative h-full w-full"
                    >
                      <Image
                        src={result.image}
                        alt={result.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </motion.div>

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#172018]/25 via-transparent to-transparent" />

                    <div
                      aria-hidden="true"
                      className="absolute right-4 top-4 rounded-full border border-white/30 bg-[#3E4637]/65 px-3 py-1.5 text-[12px] text-white backdrop-blur-md"
                    >
                      {result.number}
                    </div>
                  </div>

                  <div className="flex min-h-0 flex-1 items-center justify-between gap-3 px-5 py-5">
                    <div className="min-w-0 flex-1">
                      <motion.h3
                        layoutId={`result-title-${result.id}`}
                        className="text-[27px] font-bold leading-[1.5] text-[#3E4637] xl:text-[29px]"
                        style={{
                          fontFamily: '"AmiriCustom", serif',
                        }}
                      >
                        {result.title}
                      </motion.h3>

                      <p
                        className="mt-1 text-[13px] leading-6 text-[#62685C]"
                        style={{
                          fontFamily: '"TajawalCustom", sans-serif',
                        }}
                      >
                        {result.subtitle}
                      </p>
                    </div>

                    <div
                      aria-hidden="true"
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#3E4637] text-white transition-transform duration-300 group-hover:rotate-90 group-hover:bg-[#59654D]"
                    >
                      <Plus size={21} aria-hidden="true" />
                    </div>
                  </div>
                </motion.button>
              </motion.div>
            ))}
          </div>

          {/* Mobile Pagination */}
          <div className="mt-5 flex flex-col items-center gap-2 sm:hidden">
            <p className="flex items-center gap-2 text-[13px] text-[#62685C]">
              اسحب لاستكشاف المزيد من النتائج
              <ChevronLeft size={16} aria-hidden="true" />
            </p>

            <div className="flex items-center justify-center gap-1">
              {results.map((result, index) => (
                <button
                  key={result.id}
                  type="button"
                  onClick={() => scrollToResult(index)}
                  aria-label={`الانتقال إلى ${result.title}`}
                  aria-current={
                    activeIndex === index ? "true" : undefined
                  }
                  className="flex h-10 items-center justify-center px-1.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3E4637]"
                >
                  <motion.div
                    animate={{
                      width: activeIndex === index ? 24 : 7,
                      backgroundColor:
                        activeIndex === index
                          ? "#3E4637"
                          : "#C9BEA5",
                    }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.25,
                    }}
                    className="h-[7px] rounded-full"
                  />
                </button>
              ))}
            </div>

            <p
              dir="ltr"
              className="text-[13px] tracking-wider text-[#84765B]"
              aria-live="polite"
            >
              {String(activeIndex + 1).padStart(2, "0")}
              {" / "}
              {String(results.length).padStart(2, "0")}
            </p>
          </div>

            <div className="mt-2 flex items-center justify-center gap-4 sm:hidden">
              <button type="button" onClick={() => scrollToResult(activeIndex - 1)} disabled={activeIndex === 0} aria-label="النتيجة السابقة" className="flex h-11 w-11 items-center justify-center rounded-full border border-[#B3A681]/60 text-[#3E4637] transition-colors hover:bg-[#E1D7B8]/60 disabled:cursor-not-allowed disabled:opacity-30 focus-visible:outline-2 focus-visible:outline-[#3E4637]">
                <ChevronRight size={20} aria-hidden="true" />
              </button>
              <button type="button" onClick={() => scrollToResult(activeIndex + 1)} disabled={activeIndex === results.length - 1} aria-label="النتيجة التالية" className="flex h-11 w-11 items-center justify-center rounded-full bg-[#3E4637] text-white transition-colors hover:bg-[#59654D] disabled:cursor-not-allowed disabled:opacity-30 focus-visible:outline-2 focus-visible:outline-[#3E4637]">
                <ChevronLeft size={20} aria-hidden="true" />
              </button>
            </div>
          <ResultDialog
            selected={selected}
            onClose={closeResult}
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
