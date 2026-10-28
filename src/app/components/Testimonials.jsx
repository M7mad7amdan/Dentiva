
"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "سارة",
    rating: 5,
    text: "دكتور بشار كتير شاطر وبتعامل معك بكل راحة واهتمام، والتجربة كانت أحسن مما توقعت.",
  },
  {
    id: 2,
    name: "محمد",
    rating: 5,
    text: "من أول زيارة حسّيت إني بالمكان الصح، شرح واضح وتعامل راقي وشغل مرتب.",
  },
  {
    id: 3,
    name: "لين",
    rating: 5,
    text: "كتير مبسوطة بالنتيجة، الدكتور مهتم بأدق التفاصيل وبحرص إنك تكون مرتاح طول الموعد.",
  },
  {
    id: 4,
    name: "أحمد",
    rating: 5,
    text: "كنت متوتر قبل الموعد، بس دكتور بشار خلّاني أرتاح من أولها. تجربة ممتازة وبنصح فيه.",
  },
  {
    id: 5,
    name: "جنى",
    rating: 5,
    text: "العيادة مرتبة والتعامل كتير لطيف، وكل إشي كان واضح ومنظّم. تجربة حلوة أكيد بكررها.",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(1000);

  const containerRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const total = reviews.length;

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver((entries) => {
      setContainerWidth(entries[0].contentRect.width);
    });

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  const cardWidth = Math.min(containerWidth * 0.76, 370);
  const spacing = Math.min(containerWidth * 0.29, 245);
  const isMobile = containerWidth < 640;

  function goTo(index) {
    setActiveIndex((index + total) % total);
  }

  function next() {
    setActiveIndex((current) => (current + 1) % total);
  }

  function previous() {
    setActiveIndex(
      (current) => (current - 1 + total) % total
    );
  }

  function getOffset(index) {
    let offset = index - activeIndex;

    if (offset > total / 2) {
      offset -= total;
    }

    if (offset < -total / 2) {
      offset += total;
    }

    return offset;
  }

  function handlePanEnd(event, info) {
    const distance = info.offset.x;

    if (Math.abs(distance) < 50) return;

    if (distance < 0) {
      next();
    } else {
      previous();
    }
  }

  const spring = reduceMotion
    ? { duration: 0 }
    : {
        type: "spring",
        stiffness: 160,
        damping: 26,
        mass: 0.95,
      };

  return (
    <section
      id="testimonials"
      dir="rtl"
      aria-labelledby="testimonials-heading"
      className="relative scroll-mt-28 overflow-hidden bg-background py-20 md:py-28"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-8 lg:px-10">
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 30,
                }
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
            duration: reduceMotion ? 0 : 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-12 text-center md:mb-16"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span
              aria-hidden="true"
              className="h-px w-10 bg-[#B3A681]"
            />

            <span
              className="text-[15px] text-[#827453]"
              style={{
                fontFamily: '"TajawalCustom", sans-serif',
              }}
            >
              تجارب مرضانا
            </span>

            <span
              aria-hidden="true"
              className="h-px w-10 bg-[#B3A681]"
            />
          </div>

         <h2
  id="testimonials-heading"
  className="text-[46px] font-bold leading-[1.4] text-[#3E4637] sm:text-[58px] lg:text-[66px]"
  style={{
    fontFamily: '"AmiriCustom", serif',
    fontWeight: 700,
  }}
>
  كلمات تعبّر عن الثقة
</h2>

          <p
            className="mx-auto mt-3 max-w-xl text-[16px] leading-8 text-[#62685C] sm:text-[17px]"
            style={{
              fontFamily: '"TajawalCustom", sans-serif',
            }}
          >
            تجارب وآراء شاركها مرضانا حول زيارتهم
            لمركز الدكتور بشار المسالمة.
          </p>
        </motion.div>

        <div
          ref={containerRef}
          className="relative mx-auto h-[430px] w-full overflow-hidden sm:h-[470px]"
          aria-label="آراء المرضى"
          aria-roledescription="عارض تقييمات"
        >
          <motion.div
            className="relative h-full w-full touch-pan-y"
            onPanEnd={handlePanEnd}
          >
            {reviews.map((review, index) => {
              const offset = getOffset(index);
              const distance = Math.abs(offset);
              const isActive = offset === 0;

              const scale = isActive
                ? 1
                : distance === 1
                  ? 0.87
                  : 0.73;

              return (
                <div
                  key={review.id}
                  className="absolute left-1/2 top-5"
                  style={{
                    width: cardWidth,
                    transform: "translateX(-50%)",
                    zIndex: total - distance,
                  }}
                >
                  <motion.article
                    initial={false}
                    animate={{
                      x: -offset * spacing,
                      scale,
                      rotate: isMobile
                        ? offset * 3
                        : offset * 5,
                      y: isActive ? 0 : distance * 16,
                      opacity: isActive
                        ? 1
                        : distance === 1
                          ? 0.82
                          : 0.5,
                    }}
                    transition={spring}
                    aria-hidden={!isActive}
                    className={`relative flex h-[375px] flex-col overflow-hidden rounded-[30px] border shadow-[0_20px_55px_rgba(62,70,55,0.12)] sm:h-[410px] ${
                      isActive
                        ? "border-[#3E4637] bg-[#3E4637]"
                        : "border-[#CFC3A7] bg-[#E1D7B8]"
                    }`}
                  >
                    <div className="flex items-start justify-between px-7 pt-7">
                      <Quote
                        size={34}
                        strokeWidth={1.2}
                        className={
                          isActive
                            ? "text-[#E1D7B8]"
                            : "text-[#8D8065]"
                        }
                        aria-hidden="true"
                      />

                      <span
                        className={`text-[14px] ${
                          isActive
                            ? "text-[#E1D7B8]"
                            : "text-[#8D8065]"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div
                      className="mt-5 flex justify-center gap-1"
                      role="img"
                      aria-label={`${review.rating} من 5 نجوم`}
                    >
                      {Array.from(
                        { length: review.rating },
                        (_, starIndex) => (
                          <Star
                            key={starIndex}
                            size={21}
                            fill="#D8A443"
                            color="#D8A443"
                            strokeWidth={1.2}
                            aria-hidden="true"
                          />
                        )
                      )}
                    </div>

                    <div className="flex flex-1 items-center justify-center px-7 py-5 text-center">
                      <p
                        className={`text-[21px] leading-[1.9] sm:text-[24px] ${
                          isActive
                            ? "text-[#F5F1E7]"
                            : "text-[#3E4637]"
                        }`}
                        style={{
                          fontFamily: '"AmiriCustom", serif',
                        }}
                      >
                        {review.text}
                      </p>
                    </div>

                    <div
                      className={`mx-7 mb-7 border-t pt-5 text-center ${
                        isActive
                          ? "border-white/20"
                          : "border-[#3E4637]/20"
                      }`}
                    >
                      <p
                        className={`text-[19px] ${
                          isActive
                            ? "text-[#F5F1E7]"
                            : "text-[#3E4637]"
                        }`}
                        style={{
                          fontFamily: '"TajawalCustom", sans-serif',
                        }}
                      >
                        {review.name}
                      </p>
                    </div>
                  </motion.article>

                  {!isActive && (
                    <button
                      type="button"
                      onClick={() => goTo(index)}
                      aria-label={`عرض تقييم ${review.name}`}
                      className="absolute inset-0 z-10 cursor-pointer rounded-[30px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3E4637]"
                    />
                  )}
                </div>
              );
            })}
          </motion.div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-5 sm:gap-8">
          <button
            type="button"
            onClick={previous}
            aria-label="التقييم السابق"
            className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-[#B3A681]/50 bg-[#EEE8D9] text-[#3E4637] transition-all duration-300 hover:-translate-y-1 hover:bg-[#3E4637] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3E4637]"
          >
            <ArrowRight size={21} aria-hidden="true" />
          </button>

          <div className="flex items-center gap-2">
            {reviews.map((review, index) => (
              <button
                key={review.id}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`الانتقال إلى تقييم ${review.name}`}
                aria-current={
                  activeIndex === index
                    ? "true"
                    : undefined
                }
                className="flex h-10 items-center justify-center"
              >
                <motion.span
                  animate={{
                    width: activeIndex === index ? 26 : 9,
                    backgroundColor:
                      activeIndex === index
                        ? "#3E4637"
                        : "#CFC6B3",
                  }}
                  transition={spring}
                  className="block h-[9px] rounded-full"
                />
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="التقييم التالي"
            className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-[#B3A681]/50 bg-[#EEE8D9] text-[#3E4637] transition-all duration-300 hover:-translate-y-1 hover:bg-[#3E4637] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3E4637]"
          >
            <ArrowLeft size={21} aria-hidden="true" />
          </button>
        </div>

        <p
          dir="ltr"
          className="mt-4 text-center text-[14px] text-[#74786C]"
        >
          {String(activeIndex + 1).padStart(2, "0")}
          {" / "}
          {String(total).padStart(2, "0")}
        </p>
      </div>
    </section>
  );
}
