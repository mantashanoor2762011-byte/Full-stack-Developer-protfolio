"use client";

import Link from "next/link";
import {
  Code2,
  Globe,
  Smartphone,
  Palette,
  PenTool,
  Gem,
  Scissors,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description:
      "Modern, responsive and functional web applications built with clean and scalable code.",
  },
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Professional websites designed to provide a smooth experience across desktop, tablet and mobile.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Websites that look beautiful and work perfectly on all screen sizes and devices.",
  },
  {
    icon: Palette,
    title: "UI Design",
    description:
      "Elegant and user-friendly interfaces with a strong focus on creativity, simplicity and usability.",
  },
  {
    icon: PenTool,
    title: "Calligraphy & Art",
    description:
      "Creative calligraphy, sketching and artistic work that brings a unique personal touch to projects.",
  },
  {
    icon: Gem,
    title: "Jewelry Design",
    description:
      "Creative handmade jewelry concepts combining traditional craftsmanship with modern aesthetics.",
  },
  {
    icon: Scissors,
    title: "Stitching & Craft",
    description:
      "Creative handmade craft and stitching work with attention to detail and presentation.",
  },
  {
    icon: Sparkles,
    title: "Creative Projects",
    description:
      "Unique creative solutions combining technology, art and imagination to create memorable experiences.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#080808] text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-24 md:px-12 lg:px-20">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
            What I Offer
          </p>

          <h1 className="text-4xl font-bold md:text-6xl">
            My{" "}
            <span className="text-[#D4AF37]">
              Services
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
            I combine technology and creativity to build modern digital
            experiences and unique creative projects.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 pb-24 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-2xl border border-[#D4AF37]/20 bg-[#111111] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#D4AF37]/70 hover:shadow-[0_15px_45px_rgba(212,175,55,0.12)]"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-[#D4AF37]/30 bg-[#D4AF37]/10 transition-all duration-300 group-hover:bg-[#D4AF37]">
                  <Icon className="h-7 w-7 text-[#D4AF37] transition-colors duration-300 group-hover:text-black" />
                </div>

                <h2 className="mb-3 text-xl font-semibold text-[#F5E6B3]">
                  {service.title}
                </h2>

                <p className="text-sm leading-7 text-gray-400">
                  {service.description}
                </p>

                <div className="mt-6 h-px w-12 bg-[#D4AF37]/50 transition-all duration-300 group-hover:w-20" />
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Me */}
      <section className="border-y border-[#D4AF37]/10 bg-[#0d0d0d] px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
            My Approach
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Creativity Meets Technology
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-400">
            Every project is an opportunity to learn, create and build
            something meaningful. I focus on clean design, responsive
            development, attention to detail and a creative approach.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {[
              "Creative Thinking",
              "Clean Code",
              "Responsive Design",
              "Attention to Detail",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#D4AF37]/30 px-5 py-2 text-sm text-[#F5E6B3]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 md:px-12">
        <div className="mx-auto max-w-4xl rounded-3xl border border-[#D4AF37]/30 bg-gradient-to-br from-[#171717] to-[#0b0b0b] px-6 py-14 text-center shadow-[0_0_60px_rgba(212,175,55,0.08)] md:px-12">
          <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
            Have a Project?
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            Let's Create Something{" "}
            <span className="text-[#D4AF37]">Amazing</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-gray-400">
            Have an idea or project in mind? Let's turn your vision into
            something beautiful and functional.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-7 py-3 font-semibold text-black transition-all duration-300 hover:bg-[#F5E6B3] hover:shadow-[0_0_25px_rgba(212,175,55,0.35)]"
          >
            Get In Touch
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}