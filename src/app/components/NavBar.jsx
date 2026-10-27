
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useReducedMotion,
} from "framer-motion";
import { Menu, X } from "lucide-react";

const WHATSAPP_NUMBER = "970594151151";

const WHATSAPP_MESSAGE =
  "مرحبًا، أود الاستفسار وحجز موعد لدى مركز الدكتور بشار المسالمة ن.";

const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

const links = [
  { label: "الرئيسية", href: "#home" },
{ label: "نتائج المرضى", href: "#about" },
  { label: "خدماتنا", href: "#services" },
  { label: "لماذا نحن", href: "#why-us" },
  { label: "آراء المرضى", href: "#testimonials" },
  {
    label: "تواصل معنا",
    href: WHATSAPP_URL,
    external: true,
  },
];

const spring = {
  type: "spring",
  stiffness: 230,
  damping: 32,
  mass: 1,
};

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [hovered, setHovered] = useState(null);

  const navRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const selected = hovered ?? active;

  const transition = reduceMotion
    ? { duration: 0 }
    : spring;

  useEffect(() => {
    function handleOutside(event) {
      if (!navRef.current?.contains(event.target)) {
        setIsOpen(false);
        setHovered(null);
      }
    }

    function handleEscape(event) {
      if (event.key === "Escape") {
        setIsOpen(false);
        setHovered(null);
      }
    }

    function handleResize() {
      setIsOpen(false);
      setHovered(null);
    }

    document.addEventListener("pointerdown", handleOutside);
    document.addEventListener("keydown", handleEscape);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("pointerdown", handleOutside);
      document.removeEventListener("keydown", handleEscape);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function canHoverDesktop(event) {
    return (
      event.pointerType === "mouse" &&
      window.matchMedia(
        "(min-width: 1280px) and (hover: hover)"
      ).matches
    );
  }

  function navigate(link) {
    if (!link.external) {
      setActive(link.href);
    }

    setHovered(null);
    setIsOpen(false);
  }

  return (
    <header
      dir="rtl"
      className="fixed inset-x-0 top-0 z-50 px-3 pt-4 sm:px-6 sm:pt-5"
    >
      <div className="mx-auto flex max-w-7xl justify-center">
        <motion.nav
          ref={navRef}
          aria-label="التنقل الرئيسي"
          onPointerEnter={(event) => {
            if (canHoverDesktop(event)) {
              setIsOpen(true);
            }
          }}
          onPointerLeave={(event) => {
            if (canHoverDesktop(event)) {
              setIsOpen(false);
              setHovered(null);
            }
          }}
          className="relative max-w-full rounded-full border border-[#B3A681]/50 p-[5px] shadow-[0_14px_45px_rgba(62,70,55,0.13)] sm:p-[6px]"
          style={{
            background:
              "linear-gradient(110deg, #E1D7B8 0%, #F2EBD9 48%, #B3A681 100%)",
          }}
        >
          <div className="flex items-center">
            <button
              type="button"
              aria-label={
                isOpen ? "إغلاق القائمة" : "فتح القائمة"
              }
              aria-expanded={isOpen}
              aria-controls="clinic-navigation"
              onClick={() => setIsOpen((prev) => !prev)}
              className="relative flex h-[64px] w-[145px] shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#B3A681]/20 bg-[#F2EBD9] px-1.5 transition-colors duration-300 hover:bg-[#F2EBD9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3E4637] sm:h-[76px] sm:w-[160px]"
            >
              <Image
                src="/Logo.png"
                alt="مركز الدكتور بشار المسالمة لطب الأسنان"
                width={150}
                height={70}
                className="h-full w-full scale-[1.12] object-contain"
              />
            </button>

            <motion.div
              id="clinic-navigation"
              initial={false}
              animate={{
                width: isOpen ? "auto" : 0,
                opacity: isOpen ? 1 : 0,
              }}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : {
                      width: {
                        type: "spring",
                        stiffness: 220,
                        damping: 32,
                      },
                      opacity: {
                        duration: 0.25,
                      },
                    }
              }
              inert={!isOpen}
              className="hidden overflow-hidden whitespace-nowrap xl:block"
            >
              <LayoutGroup id="clinic-navbar">
                <div
                  className="flex w-max items-center gap-1 py-2 pr-2 pl-1"
                  onPointerLeave={() => setHovered(null)}
                >
                  {links.map((link) => {
                    const highlighted =
                      selected === link.href;

                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        target={
                          link.external
                            ? "_blank"
                            : undefined
                        }
                        rel={
                          link.external
                            ? "noopener noreferrer"
                            : undefined
                        }
                        aria-current={
                          !link.external &&
                          active === link.href
                            ? "location"
                            : undefined
                        }
                        onPointerEnter={(event) => {
                          if (
                            event.pointerType === "mouse"
                          ) {
                            setHovered(link.href);
                          }
                        }}
                        onFocus={() =>
                          setHovered(link.href)
                        }
                        onBlur={() => setHovered(null)}
                        onClick={() => navigate(link)}
                        className="relative isolate flex h-[54px] shrink-0 items-center justify-center rounded-full px-4 text-[15px] outline-offset-4 focus-visible:outline-2 focus-visible:outline-[#3E4637] 2xl:px-5 2xl:text-[16px]"
                      >
                        {highlighted && (
                          <motion.span
                            layoutId="nav-pill"
                            aria-hidden="true"
                            className="absolute inset-0 -z-10 rounded-full shadow-[0_4px_14px_rgba(62,70,55,0.18)]"
                            style={{
                              background:
                                "linear-gradient(115deg, #3E4637 0%, #59654D 65%, #727C61 100%)",
                            }}
                            transition={transition}
                          />
                        )}

                        <span
                          className={`relative z-10 transition-colors duration-300 ${
                            highlighted
                              ? "text-white"
                              : "text-[#3E4637]"
                          }`}
                        >
                          {link.label}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </LayoutGroup>
            </motion.div>

            <span
              aria-hidden="true"
              className="mr-2 flex items-center pl-3 text-[#3E4637] xl:hidden"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </span>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, y: -8, scale: 0.98 }
                }
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={
                  reduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, y: -8, scale: 0.98 }
                }
                transition={{
                  duration: reduceMotion ? 0 : 0.22,
                }}
                className="absolute left-1/2 top-[calc(100%+10px)] w-[min(340px,calc(100vw-24px))] -translate-x-1/2 rounded-[25px] border border-[#B3A681]/40 bg-[#F2EBD9] p-3 shadow-xl xl:hidden"
              >
                <div className="flex flex-col gap-1">
                  {links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      target={
                        link.external
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        link.external
                          ? "noopener noreferrer"
                          : undefined
                      }
                      onClick={() => navigate(link)}
                      aria-current={
                        !link.external &&
                        active === link.href
                          ? "location"
                          : undefined
                      }
                      className={`rounded-xl px-4 py-3 text-center text-[16px] transition-colors duration-200 ${
                        link.external
                          ? "mt-2 bg-[#3E4637] text-white hover:bg-[#59654D]"
                          : active === link.href
                            ? "bg-[#3E4637] text-white"
                            : "text-[#3E4637] hover:bg-[#E1D7B8]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </div>
    </header>
  );
}
