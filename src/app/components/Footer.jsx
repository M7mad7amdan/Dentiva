
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

const WHATSAPP_NUMBER = "970594151151";

const WHATSAPP_MESSAGE =
  "مرحبًا، أود الاستفسار وحجز موعد لدى مركز الدكتور بشار المسالمة لطب الأسنان.";

const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

const footerLinks = [
  { label: "الرئيسية", href: "#home" },
  { label: "من نحن", href: "#about" },
  { label: "خدماتنا", href: "#services" },
  { label: "لماذا نحن", href: "#why-us" },
  { label: "آراء المرضى", href: "#testimonials" },
  {
    label: "تواصل معنا",
    href: WHATSAPP_URL,
    external: true,
  },
];

const socialLinks = [
  {
    name: "Instagram",
    Icon: FaInstagram,
    href: "",
  },
  {
    name: "Facebook",
    Icon: FaFacebookF,
    href: "",
  },
  {
    name: "LinkedIn",
    Icon: FaLinkedinIn,
    href: "",
  },
  {
    name: "YouTube",
    Icon: FaYoutube,
    href: "",
  },
];

export default function Footer() {
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 25,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const animationTransition = {
    duration: reduceMotion ? 0 : 0.7,
    ease: [0.22, 1, 0.36, 1],
  };

  return (
    <footer
      dir="rtl"
      className="relative w-full overflow-hidden bg-background text-[#3E4637]"
    >
      <div className="mx-auto h-px max-w-7xl bg-[#B3A681]/35" />

      <div className="mx-auto max-w-7xl px-5 pb-7 pt-16 sm:px-8 md:pt-20 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={animationTransition}
          className="flex flex-col items-center text-center"
        >
          <Link
            href="#home"
            aria-label="العودة إلى الرئيسية"
            className="group relative mb-12 flex h-[180px] w-[180px] items-center justify-center overflow-hidden rounded-full border border-[#B3A681]/50 bg-[#E1D7B8]/40 shadow-[0_8px_35px_rgba(62,70,55,0.08)] transition-all duration-500 hover:border-[#B3A681] hover:shadow-[0_12px_40px_rgba(62,70,55,0.15)]"
          >
            <Image
              src="/Logo.png"
              alt="شعار مركز الدكتور بشار المسالمة لطب الأسنان"
              width={180}
              height={180}
              sizes="180px"
              className="h-full w-full scale-[1.8] object-contain transition-transform duration-500 group-hover:scale-[1.9]"
            />
          </Link>

          <nav
            aria-label="روابط التذييل"
            className="w-full"
          >
            <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-5 sm:gap-x-10 lg:gap-x-12">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    target={
                      link.external ? "_blank" : undefined
                    }
                    rel={
                      link.external
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group relative inline-block py-1 text-[17px] text-[#3E4637] transition-colors duration-300 hover:text-[#9B8967] sm:text-[19px]"
                    style={{
                      fontFamily:
                        '"TajawalCustom", sans-serif',
                    }}
                  >
                    {link.label}

                    <span
                      aria-hidden="true"
                      className="absolute bottom-0 right-0 h-px w-0 bg-[#B3A681] transition-all duration-300 group-hover:w-full"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-5 sm:gap-7">
            {socialLinks.map(({ name, Icon, href }) => {
              const icon = (
                <Icon size={23} aria-hidden="true" />
              );

              if (!href) {
                return (
                  <span
                    key={name}
                    role="img"
                    aria-label={`${name} — الرابط غير متاح حاليًا`}
                    title={`${name} — الرابط غير متاح حاليًا`}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-[#B3A681]/40 text-[#3E4637]/65"
                  >
                    {icon}
                  </span>
                );
              }

              return (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-[#B3A681]/40 text-[#3E4637] transition-all duration-300 hover:-translate-y-1 hover:border-[#3E4637] hover:bg-[#3E4637] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3E4637]"
                >
                  {icon}
                </a>
              );
            })}
          </div>
        </motion.div>

        <div className="mt-16 border-t border-[#B3A681]/30 pt-7">
          <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-right">
            <p
              className="text-[13px] leading-6 text-[#77796D] sm:text-sm"
              style={{
                fontFamily:
                  '"TajawalCustom", sans-serif',
              }}
            >
              © 2026 مركز الدكتور بشار المسالمة لطب الأسنان.
              {" "}جميع الحقوق محفوظة.
            </p>

            <Link
              href="#home"
              className="text-[13px] text-[#77796D] transition-colors duration-300 hover:text-[#3E4637] sm:text-sm"
              style={{
                fontFamily:
                  '"TajawalCustom", sans-serif',
              }}
            >
              العودة إلى الأعلى ↑
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
