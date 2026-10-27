
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import NumbersSection from "./components/NumbersSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import Services from "./components/Services";
import PatientResults from "./components/PatientResults";
import Testimonials from "./components/Testimonials";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <NavBar />

      <main
        id="main-content"
        dir="rtl"
        className="min-h-screen bg-background"
      >
        {/* 01 — Hero */}
        <Hero />

        {/* 02 — Numbers */}
        <NumbersSection />

        {/* 03 — Why Choose Us */}
        <WhyChooseUsSection />

        {/* 04 — Services */}
        <Services />

        {/* 05 — Patient Results */}
        <PatientResults />

        {/* 06 — Testimonials */}
        <Testimonials />

        {/* 07 — Booking Form */}
        <BookingForm />
      </main>

      <Footer />
    </>
  );
}
