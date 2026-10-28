
"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "970594151151";

const CLINIC_NAME =
  "مركز الدكتور بشار المسالمة لطب الأسنان";

const services = [
  "علاج تسوسات الأسنان",
  "علاج العصب",
  "زراعة الأسنان",
  "فينيرز وتلبيس الزيركون",
  "حشوات تجميلية",
  "علاجات اللثة",
  "تقويم شفاف وتقويم",
  "تبييض الأسنان",
];

const initialForm = {
  service: "",
  name: "",
  phone: "",
  notes: "",
};

const inputClassName = `
  w-full
  rounded-[14px]
  border border-[#DED8C9]
  bg-[#FAF9F5]
  px-4 py-3.5
  text-[16px]
  text-[#3E4637]
  placeholder:text-[#999B90]
  outline-none
  transition-colors duration-200
  hover:border-[#B3A681]
  focus:border-[#3E4637]
  focus:bg-white
  focus:ring-2
  focus:ring-[#3E4637]/10
`;

const labelClassName =
  "mb-2 block text-[15px] text-[#3E4637]";

export default function BookingForm() {
  const reduceMotion = useReducedMotion();

  const [form, setForm] = useState(initialForm);

  function updateField(field, value) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const service = form.service.trim();
    const name = form.name.trim();
    const phone = form.phone.trim();
    const notes = form.notes.trim();

    if (!services.includes(service) || !name || !phone) {
      return;
    }

    const message = [
      `مرحبًا، أود حجز موعد لدى ${CLINIC_NAME}.`,
      "",
      `الخدمة المطلوبة: ${service}`,
      `الاسم: ${name}`,
      `رقم الهاتف: ${phone}`,
      ...(notes ? [`ملاحظات: ${notes}`] : []),
      "",
      "يرجى التواصل معي لتحديد الموعد المناسب.",
    ].join("\n");

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );
  }

  const animation = {
    initial: reduceMotion
      ? false
      : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: {
      duration: reduceMotion ? 0 : 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  };

  return (
    <section
      id="booking"
      dir="rtl"
      aria-labelledby="booking-heading"
      className="scroll-mt-28 bg-background px-5 py-20 sm:px-8 md:py-28 lg:px-10"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20 xl:gap-28">

        {/* Right Side - Content */}
        <motion.div
          {...animation}
          className="mx-auto w-full max-w-[490px] text-center lg:mx-0 lg:text-right"
        >
          <p
            className="mb-5 text-[15px] tracking-wide text-[#968667]"
            style={{
              fontFamily: '"TajawalCustom", sans-serif',
            }}
          >
            تواصل معنا
          </p>

          <h2
  id="booking-heading"
  className="text-[50px] font-bold leading-[1.45] text-[#3E4637] sm:text-[65px] lg:text-[75px]"
  style={{
    fontFamily: '"AmiriCustom", serif',
    fontWeight: 700,
  }}
>
  موعدك يبدأ
  <br />
  من هنا
</h2>
          <div
            aria-hidden="true"
            className="mx-auto mt-5 h-px w-20 bg-[#B3A681] lg:mr-0 lg:ml-auto"
          />

          <p
            className="mx-auto mt-7 max-w-[420px] text-[17px] leading-[2.1] text-[#62685C] lg:mx-0"
            style={{
              fontFamily: '"TajawalCustom", sans-serif',
            }}
          >
            اختر الخدمة التي تحتاجها، وأدخل بياناتك
            بكل سهولة. سنجهّز لك رسالة واتساب تحتوي
            تفاصيل طلبك للتواصل مباشرة مع المركز.
          </p>

          <p
            className="mx-auto mt-6 max-w-[420px] text-[14px] leading-7 text-[#8B8D80] lg:mx-0"
            style={{
              fontFamily: '"TajawalCustom", sans-serif',
            }}
          >
            يتم تأكيد الموعد من العيادة حسب المواعيد المتاحة.
          </p>
        </motion.div>

        {/* Left Side - Form */}
        <motion.div
          {...animation}
          transition={{
            ...animation.transition,
            delay: reduceMotion ? 0 : 0.1,
          }}
          className="w-full"
        >
          <div className="rounded-[28px] border border-[#E1D7B8] bg-white p-6 shadow-[0_15px_55px_rgba(62,70,55,0.045)] sm:p-9 lg:p-10">

            {/* Form Heading */}
            <div className="mb-8 border-b border-[#E8E3D7] pb-6">
              <h3
                className="text-[32px] leading-[1.5] text-[#3E4637] sm:text-[37px]"
                style={{
                  fontFamily: '"AmiriCustom", serif',
                }}
              >
                احجز استشارتك
              </h3>

              <p
                className="mt-1 text-[14px] leading-7 text-[#7C8074]"
                style={{
                  fontFamily: '"TajawalCustom", sans-serif',
                }}
              >
                املأ البيانات التالية للمتابعة عبر واتساب.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              {/* Service */}
              <div>
                <label
                  htmlFor="booking-service"
                  className={labelClassName}
                >
                  الخدمة المطلوبة *
                </label>

                <select
                  id="booking-service"
                  name="service"
                  required
                  value={form.service}
                  onChange={(event) =>
                    updateField(
                      "service",
                      event.target.value
                    )
                  }
                  className={`${inputClassName} cursor-pointer`}
                  style={{
                    fontFamily: '"TajawalCustom", sans-serif',
                  }}
                >
                  <option value="" disabled>
                    اختر الخدمة المناسبة
                  </option>

                  {services.map((service) => (
                    <option
                      key={service}
                      value={service}
                    >
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="booking-name"
                    className={labelClassName}
                  >
                    الاسم *
                  </label>

                  <input
                    id="booking-name"
                    name="name"
                    type="text"
                    required
                    maxLength={80}
                    autoComplete="name"
                    placeholder="الاسم الكامل"
                    value={form.name}
                    onChange={(event) =>
                      updateField(
                        "name",
                        event.target.value
                      )
                    }
                    className={inputClassName}
                    style={{
                      fontFamily: '"TajawalCustom", sans-serif',
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="booking-phone"
                    className={labelClassName}
                  >
                    رقم الهاتف *
                  </label>

                  <input
                    id="booking-phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    required
                    minLength={7}
                    maxLength={20}
                    autoComplete="tel"
                    dir="ltr"
                    placeholder="05XXXXXXXX"
                    value={form.phone}
                    onChange={(event) =>
                      updateField(
                        "phone",
                        event.target.value
                      )
                    }
                    className={`${inputClassName} text-right`}
                    style={{
                      fontFamily: '"TajawalCustom", sans-serif',
                    }}
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label
                  htmlFor="booking-notes"
                  className={labelClassName}
                >
                  ملاحظات إضافية (اختياري)
                </label>

                <textarea
                  id="booking-notes"
                  name="notes"
                  rows={4}
                  maxLength={500}
                  placeholder="هل هناك تفاصيل تود مشاركتها معنا؟"
                  value={form.notes}
                  onChange={(event) =>
                    updateField(
                      "notes",
                      event.target.value
                    )
                  }
                  className={`${inputClassName} resize-none`}
                  style={{
                    fontFamily: '"TajawalCustom", sans-serif',
                  }}
                />
              </div>

              {/* Submit */}
              <div className="pt-2">
                <motion.button
                  type="submit"
                  whileHover={
                    reduceMotion
                      ? undefined
                      : { y: -2 }
                  }
                  whileTap={
                    reduceMotion
                      ? undefined
                      : { scale: 0.99 }
                  }
                  className="flex min-h-[58px] w-full items-center justify-center gap-3 rounded-full bg-[#3E4637] px-6 py-4 text-[17px] text-white shadow-[0_8px_25px_rgba(62,70,55,0.12)] transition-colors duration-300 hover:bg-[#505C46] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3E4637]"
                  style={{
                    fontFamily: '"TajawalCustom", sans-serif',
                  }}
                >
                  <MessageCircle
                    size={19}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />

                  متابعة عبر واتساب
                </motion.button>

                <p
                  className="mt-5 text-center text-[13px] leading-6 text-[#85887C]"
                  style={{
                    fontFamily: '"TajawalCustom", sans-serif',
                  }}
                >
                  لن يتم تأكيد الموعد تلقائيًا؛
                  يتم التنسيق مباشرة مع العيادة.
                </p>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
