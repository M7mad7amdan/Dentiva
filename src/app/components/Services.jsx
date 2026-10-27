
"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  animate,
  useMotionValue,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { ChevronRight, Check } from "lucide-react";

const WHATSAPP_NUMBER = "970594151151";

const CLINIC_NAME =
  "مركز الدكتور بشار المسالمة لطب الأسنان";

function createWhatsAppUrl(serviceName) {
  const message =
    `مرحبًا، أود الاستفسار عن خدمة ${serviceName} ` +
    `وحجز موعد لدى ${CLINIC_NAME}.`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;
}

const services = [
  {
    id: 1,
    title: "علاج تسوسات الأسنان",
    description:
      "العناية بالأسنان المتأثرة بالتسوس، مع الاهتمام بصحة السن والحفاظ عليه.",
  },
  {
    id: 2,
    title: "علاج العصب",
    description:
      "تقييم حالة السن وتحديد العلاج المناسب للمحافظة عليه كلما أمكن.",
  },
  {
    id: 3,
    title: "زراعة الأسنان",
    description:
      "التعرّف على خيارات تعويض الأسنان المفقودة وفقًا لحالة الفم والأسنان.",
  },
  {
    id: 4,
    title: "فينيرز وتلبيس الزيركون",
    description:
      "حلول تجميلية تهتم بمظهر الأسنان وتناسقها مع ابتسامتك.",
  },
  {
    id: 5,
    title: "حشوات تجميلية",
    description:
      "ترميم الأسنان مع مراعاة المظهر الطبيعي وتناسق اللون والشكل.",
  },
  {
    id: 6,
    title: "علاجات اللثة",
    description:
      "تقييم صحة اللثة والعناية بها باعتبارها جزءًا أساسيًا من صحة الفم.",
  },
  {
    id: 7,
    title: "تقويم شفاف وتقويم",
    description:
      "خيارات لتقويم الأسنان وتحسين اصطفافها بحسب احتياجات كل حالة.",
  },
  {
    id: 8,
    title: "تبييض الأسنان",
    description:
      "التعرّف على خيارات تبييض الأسنان للوصول إلى مظهر أكثر إشراقًا.",
  },
];

function SlideToWhatsApp({ serviceName }) {
  const trackRef = useRef(null);
  const handleRef = useRef(null);

  const [maxDrag, setMaxDrag] = useState(0);
  const [isUnlocked, setIsUnlocked] = useState(false);

  const x = useMotionValue(0);
  const reduceMotion = useReducedMotion();

  const whatsappUrl = createWhatsAppUrl(serviceName);

  const textOpacity = useTransform(x, (value) => {
    if (maxDrag <= 0) return 1;

    return Math.max(0, 1 - (value / maxDrag) * 1.6);
  });

  const progressWidth = useTransform(
    x,
    (value) => `${Math.max(0, value + 56)}px`
  );

  useEffect(() => {
    const track = trackRef.current;
    const handle = handleRef.current;

    if (!track || !handle) return;

    const observer = new ResizeObserver(() => {
      const distance = Math.max(
        0,
        track.clientWidth - handle.offsetWidth - 8
      );

      setMaxDrag(distance);
      x.set(0);
    });

    observer.observe(track);

    return () => observer.disconnect();
  }, [x]);

  function unlock() {
    if (isUnlocked) return;

    setIsUnlocked(true);
    window.location.assign(whatsappUrl);
  }

  function handleDragEnd() {
    if (maxDrag <= 0 || isUnlocked) return;

    if (x.get() >= maxDrag * 0.8) {
      unlock();
    } else {
      animate(x, 0, {
        type: "spring",
        stiffness: 450,
        damping: 35,
      });
    }
  }

  return (
    <div className="w-full min-w-0">
      <div
        ref={trackRef}
        dir="ltr"
        className="relative h-[58px] w-full min-w-0 overflow-hidden rounded-full bg-[#EBE7DD]"
      >
        <motion.div
          aria-hidden="true"
          style={{ width: progressWidth }}
          className="pointer-events-none absolute inset-y-0 left-0 rounded-full bg-[#D8D8C9]"
        />

        <motion.span
          style={{
            opacity: textOpacity,
            fontFamily: '"TajawalCustom", sans-serif',
          }}
          className="pointer-events-none absolute inset-y-0 left-[60px] right-2 flex items-center justify-center text-center text-[13px] leading-5 text-[#3E4637]"
        >
          اسحب للاستفسار
        </motion.span>

        <motion.button
          ref={handleRef}
          type="button"
          drag="x"
          dragConstraints={{ left: 0, right: maxDrag }}
          dragElastic={0}
          dragMomentum={false}
          onDragEnd={handleDragEnd}
          onKeyDown={(event) => {
            if (
              event.key === "Enter" ||
              event.key === " "
            ) {
              event.preventDefault();
              unlock();
            }
          }}
          disabled={isUnlocked}
          aria-label={`اسحب أو اضغط للاستفسار عن ${serviceName} عبر واتساب`}
          title="اسحب لفتح واتساب أو اضغط Enter"
          style={{
            x,
            touchAction: "none",
          }}
          className="absolute left-1 top-1 z-10 flex h-[50px] w-[50px] cursor-grab items-center justify-center rounded-full bg-[#3E4637] text-white shadow-[0_5px_15px_rgba(62,70,55,0.18)] outline-offset-2 active:cursor-grabbing focus-visible:outline-2 focus-visible:outline-[#3E4637] disabled:cursor-default"
          whileTap={
            reduceMotion ? undefined : { scale: 0.96 }
          }
          whileHover={
            reduceMotion ? undefined : { scale: 1.04 }
          }
        >
          {isUnlocked ? (
            <Check size={23} strokeWidth={2} />
          ) : (
            <ChevronRight size={24} strokeWidth={2} />
          )}
        </motion.button>
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-flex min-h-8 items-center justify-center text-[13px] leading-5 text-[#59634F] underline underline-offset-4 transition-colors hover:text-[#3E4637] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3E4637]"
      >
        أو اضغط هنا للاستفسار
      </a>
    </div>
  );
}

function ServiceCard({ service, index }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: reduceMotion ? 0 : 24,
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
        duration: reduceMotion ? 0 : 0.55,
        delay: reduceMotion ? 0 : (index % 4) * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative flex min-h-[310px] min-w-0 flex-col justify-between rounded-[26px] border border-[#B3A681]/35 bg-white px-6 py-6 shadow-[0_10px_35px_rgba(62,70,55,0.05)] transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-[#B3A681]/70 hover:shadow-[0_18px_40px_rgba(62,70,55,0.1)] sm:min-h-[325px] 2xl:px-7"
    >
      <div>
        <div className="mb-7 flex items-center justify-between">
          <span className="text-[14px] tracking-[0.12em] text-[#84765B]">
            {String(service.id).padStart(2, "0")}
          </span>

          <div
            aria-hidden="true"
            className="h-px w-9 bg-[#B3A681]/65"
          />
        </div>

        <h3
          className="text-[27px] leading-[1.55] text-[#3E4637] sm:text-[28px]"
          style={{
            fontFamily: '"AmiriCustom", serif',
          }}
        >
          {service.title}
        </h3>

        <p
          className="mt-3 max-w-[24rem] text-[15px] leading-[1.9] text-[#596154]"
          style={{
            fontFamily: '"TajawalCustom", sans-serif',
          }}
        >
          {service.description}
        </p>
      </div>

      <div className="mt-7">
        <SlideToWhatsApp serviceName={service.title} />
      </div>
    </motion.article>
  );
}

export default function Services() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="services"
      dir="rtl"
      aria-labelledby="services-title"
      className="scroll-mt-28 bg-[#F5F1E7] px-5 py-20 sm:px-8 md:py-28 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 24,
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
            duration: reduceMotion ? 0 : 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-12 text-center"
        >
          <h2
            id="services-title"
            className="text-[42px] leading-relaxed text-[#3E4637] sm:text-[54px] lg:text-[62px]"
            style={{
              fontFamily: '"AmiriCustom", serif',
            }}
          >
            خدماتنا
          </h2>

          <div
            aria-hidden="true"
            className="mx-auto mt-1 h-px w-24 bg-[#B3A681]"
          />

          <p
            className="mx-auto mt-5 max-w-xl text-[16px] leading-8 text-[#596154] sm:text-[18px]"
            style={{
              fontFamily: '"TajawalCustom", sans-serif',
            }}
          >
            تعرّف على خدمات العناية بالأسنان، واختر الخدمة
            التي تود الاستفسار عنها.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
