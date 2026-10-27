
"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpLeft, ChevronLeft } from "lucide-react";

const WHATSAPP_NUMBER = "970594151151";

const WHATSAPP_MESSAGE =
  "مرحبًا، أرغب في حجز موعد لدى مركز الدكتور بشار المسالمة لطب الأسنان.";

const defaultImages = [
  {
    src: "/AboutUsImg/FirstImg.png",
    alt: "صورة توضيحية لبيئة علاج الأسنان",
    title: "الممارسة المهنية",
    description:
      "يجمع الدكتور بشار المسالمة بين الممارسة المهنية والاطلاع على أحدث أساليب طب الأسنان،",
  },
  {
    src: "/AboutUsImg/SecondImg.png",
    alt: "صورة تعبيرية عن الابتسامة الطبيعية",
    title: "التدريب في ألمانيا",
    description:
      "مدعومًا بتدريب في نخبة من أبرز العيادات الألمانية.",
  },
  {
    src: "/AboutUsImg/ThirdImg.png",
    alt: "صورة تعبيرية عن العناية بالأسنان",
    title: "الدقة والمعايير العلمية",
    description:
      "يحرص على تقديم رعاية سنية قائمة على الدقة والمعايير العلمية، مع الاهتمام بأدق التفاصيل",
  },
  {
    src: "/AboutUsImg/ForthImg.png",
    alt: "صورة توضيحية لفحص الأسنان",
    title: "صحة فموية وابتسامة طبيعية",
    description:
      "لتحقيق صحة فموية أفضل وابتسامة طبيعية ومتناسقة.",
  },
];

function GalleryContent({ image, whatsappUrl, compact = false }) {
  return (
    <div className="flex items-end justify-between gap-3">
      <div className="min-w-0 flex-1 text-right">
        <h3
          className={`mb-2 leading-[1.5] text-white ${
            compact
              ? "text-[23px] sm:text-[25px]"
              : "text-[25px] xl:text-[28px]"
          }`}
          style={{ fontFamily: '"AmiriCustom", serif' }}
        >
          {image.title}
        </h3>

        <p
          className={`text-white/90 ${
            compact
              ? "text-[14px] leading-7"
              : "text-[14px] leading-7 xl:text-[15px] xl:leading-8"
          }`}
          style={{
            fontFamily: '"TajawalCustom", sans-serif',
          }}
        >
          {image.description}
        </p>
      </div>

      {whatsappUrl && (
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`احجز موعدك عبر واتساب - ${image.title}`}
          title="احجز موعدك عبر واتساب"
          className={`flex shrink-0 items-center justify-center rounded-full bg-[#E1D7B8] text-[#3E4637] transition-all duration-300 hover:-translate-y-1 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
            compact ? "h-10 w-10" : "h-12 w-12"
          }`}
        >
          <ArrowUpLeft
            size={compact ? 18 : 20}
            aria-hidden="true"
          />
        </a>
      )}
    </div>
  );
}

export default function GalleryAnimation({
  images = defaultImages,
}) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);
  const galleryRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const spring = reduceMotion
    ? { duration: 0 }
    : {
        type: "spring",
        stiffness: 145,
        damping: 26,
        mass: 1.05,
      };

  const whatsappNumber = WHATSAPP_NUMBER.replace(/\D/g, "");

  const whatsappUrl = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        WHATSAPP_MESSAGE
      )}`
    : null;

  function handleGalleryScroll() {
    const container = galleryRef.current;
    if (!container) return;

    const cards = container.querySelectorAll(
      "[data-gallery-card]"
    );

    let closest = 0;
    let minDistance = Infinity;

    cards.forEach((card, index) => {
      const distance = Math.abs(
        card.getBoundingClientRect().right -
          container.getBoundingClientRect().right
      );

      if (distance < minDistance) {
        minDistance = distance;
        closest = index;
      }
    });

    setActiveMobileIndex((previous) =>
      previous === closest ? previous : closest
    );
  }

  if (!images.length) return null;

  return (
    <>
      <div
        dir="rtl"
        className="hidden h-[510px] w-full gap-3 lg:flex"
        onPointerLeave={() => setHoveredIndex(null)}
      >
        {images.map((image, index) => {
          const isHovered = hoveredIndex === index;

          return (
            <motion.div
              key={image.src}
              tabIndex={0}
              role="group"
              aria-label={`${image.title}: ${image.description}`}
              onPointerEnter={(event) => {
                if (event.pointerType === "mouse") {
                  setHoveredIndex(index);
                }
              }}
              onClick={() => setHoveredIndex(index)}
              onFocusCapture={() => setHoveredIndex(index)}
              onBlurCapture={(event) => {
                if (
                  !event.currentTarget.contains(
                    event.relatedTarget
                  )
                ) {
                  setHoveredIndex(null);
                }
              }}
              onKeyDown={(event) => {
                if (
                  event.target === event.currentTarget &&
                  (event.key === "Enter" || event.key === " ")
                ) {
                  event.preventDefault();
                  setHoveredIndex(index);
                }
              }}
              className="group relative min-w-0 cursor-pointer overflow-hidden rounded-[28px] bg-[#E1D7B8] outline-offset-4 focus-visible:outline-2 focus-visible:outline-[#3E4637]"
              animate={{
                flex:
                  hoveredIndex === null
                    ? 1
                    : isHovered
                      ? 3.1
                      : 0.65,
              }}
              transition={spring}
            >
              <motion.div
                className="absolute inset-0"
                animate={{
                  scale: isHovered ? 1.04 : 1,
                  filter: isHovered
                    ? "brightness(1.05) saturate(1)"
                    : "brightness(0.83) saturate(0.82)",
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.55,
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 45vw, 80vw"
                  className="object-cover"
                />
              </motion.div>

              <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[#182018]"
                animate={{
                  opacity: isHovered ? 0.03 : 0.13,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.4,
                }}
              />

              <motion.div
                initial={false}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  y: isHovered ? 0 : 25,
                  scale: isHovered ? 1 : 0.96,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.42,
                  ease: [0.22, 1, 0.36, 1],
                }}
                aria-hidden={!isHovered}
                inert={!isHovered}
                className={`absolute inset-x-4 bottom-4 z-20 min-w-0 rounded-[24px] border border-white/20 bg-[#172018]/75 p-5 shadow-[0_15px_50px_rgba(0,0,0,0.18)] backdrop-blur-xl xl:inset-x-5 xl:bottom-5 xl:p-6 ${
                  isHovered
                    ? "pointer-events-auto"
                    : "pointer-events-none"
                }`}
              >
                <GalleryContent
                  image={image}
                  whatsappUrl={whatsappUrl}
                />
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      <div className="lg:hidden">
        <div
          ref={galleryRef}
          dir="rtl"
          aria-label="معلومات عن الدكتور بشار المسالمة"
          onScroll={handleGalleryScroll}
          className="flex w-full snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-5"
          style={{
            WebkitOverflowScrolling: "touch",
            touchAction: "pan-x pan-y",
          }}
        >
          {images.map((image) => (
            <article
              key={image.src}
              data-gallery-card
              className="relative h-[440px] w-[86%] max-w-[370px] shrink-0 snap-start overflow-hidden rounded-[26px] bg-[#E1D7B8] sm:w-[44%] sm:max-w-none"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 86vw, 44vw"
                className="object-cover"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#172018]/70 via-[#172018]/10 to-transparent"
              />

              <div className="absolute inset-x-4 bottom-4 rounded-[22px] border border-white/20 bg-[#172018]/75 p-5 text-white backdrop-blur-lg">
                <GalleryContent
                  image={image}
                  whatsappUrl={whatsappUrl}
                  compact
                />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-3 flex items-center justify-between gap-4 px-1">
          <div
            className="flex items-center gap-2 text-[#797D71]"
            aria-hidden="true"
          >
            <ChevronLeft size={18} />
            <span className="text-[13px]">
              اسحب لاستكشاف المزيد
            </span>
          </div>

          <span
            dir="ltr"
            className="text-[13px] tracking-wider text-[#8B8068]"
          >
            {String(activeMobileIndex + 1).padStart(2, "0")}
            {" / "}
            {String(images.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </>
  );
}
