
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import AboutDoctor from "./components/AboutDoctor";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

// Temporary Services section
// Replace it with <Services /> when ready.
function PendingServices() {
  return (
    <section
      id="services"
      dir="rtl"
      aria-labelledby="services-title"
      className="scroll-mt-28 bg-[#F7F5EF] px-6 py-24"
    >
      <div className="mx-auto max-w-7xl text-center">
        <h2
          id="services-title"
          className="text-4xl text-[#3E4637] sm:text-5xl"
          style={{
            fontFamily: '"AmiriCustom", serif',
          }}
        >
          خدماتنا
        </h2>

        <p
          className="mt-4 text-base text-[#777C70]"
          style={{
            fontFamily: '"TajawalCustom", sans-serif',
          }}
        >
          قسم الخدمات قيد التجهيز.
        </p>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <NavBar />

      <main
        id="main-content"
        dir="rtl"
        className="min-h-screen bg-[#F7F5EF]"
      >
        {/* 01 — Hero */}
        <Hero />

        {/* 02 — About Doctor */}
        <AboutDoctor />

        {/* 03 — Services */}
        <Services />

        {/* 04 — Why Choose Us */}
        <WhyChooseUs />

        {/* 05 — Testimonials */}
        <Testimonials />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
