"use client";

import Link from "next/link";

const projects = [
  {
    name: "Noor-e-Qalam",
    type: "Calligraphy Website",
    technology: "Next.js • React • CSS",
    description:
      "A personal calligraphy website created to showcase calligraphy work and creative content with a clean and elegant design.",
    image: "/images/calligraphy-web.png",
    github: "https://github.com/mantashanoor2762011-byte",
    live: "https://calligraphy-website-dgp1wzwob-mantasha-noor.vercel.app/",
  },
  {
    name: "Salt'n Pepper Website",
    type: "Restaurant Website",
    technology: "JavaScript • Vite • CSS",
    description:
      "A restaurant website project created to practice frontend development, responsive layouts and interactive web design.",
    image: "/images/2java.png",
    github: "https://github.com/mantashanoor2762011-byte",
    live: "https://mantasha-salt-79wegid5s-mantasha-noor.vercel.app/",
  },
  {
    name: "Luxury Jewelry Website",
    type: "E-commerce / Product Website",
    technology: "React • Vite • CSS",
    description:
      "A luxury jewelry website created to practice responsive UI design, product presentation and modern frontend development.",
    image: "/images/react1.png",
    github: "https://github.com/mantashanoor2762011-byte",
    live: "https://react-jewerelly-ldmk7g1yv-mantasha-noor.vercel.app/",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full border-b border-yellow-500/20 bg-black/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <Link
            href="/"
            className="text-xl font-bold tracking-widest text-yellow-400"
          >
            MANTASHA NOOR
          </Link>

          <div className="flex gap-5 text-sm">

            <Link
              href="/"
              className="transition hover:text-yellow-400"
            >
              Home
            </Link>

            <Link
              href="/About"
              className="transition hover:text-yellow-400"
            >
              About
            </Link>

            <Link
              href="/skills"
              className="transition hover:text-yellow-400"
            >
              Skills
            </Link>

            <Link
              href="/projects"
              className="font-semibold text-yellow-400"
            >
              Projects
            </Link>

            <Link
              href="/#services"
              className="transition hover:text-yellow-400"
            >
              Services
            </Link>

            <Link
              href="/#contact"
              className="transition hover:text-yellow-400"
            >
              Contact
            </Link>

          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 pb-16 pt-40 text-center">

        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.4em] text-yellow-400">
          My Work
        </p>

        <h1 className="text-4xl font-bold md:text-6xl">
          My{" "}
          <span className="text-yellow-400">
            Projects
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl leading-7 text-gray-400">
          A collection of projects I have created while learning
          and improving my frontend and full-stack development
          skills.
        </p>

      </section>

      {/* Projects */}
      <section className="mx-auto max-w-7xl px-6 pb-24">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => (

            <article
              key={project.name}
              className="group overflow-hidden rounded-2xl border border-yellow-500/20 bg-zinc-950 transition duration-300 hover:-translate-y-2 hover:border-yellow-400/70 hover:shadow-2xl hover:shadow-yellow-500/10"
            >

              {/* Image */}
              <div className="relative h-60 overflow-hidden bg-zinc-900">

                <img
                  src={project.image}
                  alt={project.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                <span className="absolute bottom-4 left-4 rounded-full border border-yellow-400/40 bg-black/80 px-4 py-2 text-xs font-medium text-yellow-400 backdrop-blur">
                  {project.type}
                </span>

              </div>

              {/* Content */}
              <div className="p-6">

                <h2 className="text-2xl font-bold transition group-hover:text-yellow-400">
                  {project.name}
                </h2>

                <p className="mt-2 text-sm font-medium text-yellow-500">
                  {project.technology}
                </p>

                <p className="mt-4 text-sm leading-6 text-gray-400">
                  {project.description}
                </p>

                <div className="mt-6 flex gap-3">

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-yellow-400 px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-yellow-300"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-yellow-400/50 px-5 py-2.5 text-sm font-semibold text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
                  >
                    GitHub
                  </a>

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>

      {/* More Assignments */}
      <section className="border-t border-yellow-500/20 bg-zinc-950 px-6 py-20">

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-yellow-400">
            Practice & Learning
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-5xl">
            More{" "}
            <span className="text-yellow-400">
              Assignments
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-400">
            Explore my other web development assignments and
            practice projects created during my learning journey.
          </p>

          <a
            href="YOUR_ASSIGNMENT_WEBSITE_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full border border-yellow-400 bg-yellow-400 px-8 py-3 font-semibold text-black transition hover:bg-transparent hover:text-yellow-400"
          >
            View More Assignments
          </a>

        </div>

      </section>

      {/* Bottom */}
      <section className="border-t border-yellow-500/20 bg-black px-6 py-20 text-center">

        <h2 className="text-3xl font-bold md:text-4xl">
          Learning Through{" "}
          <span className="text-yellow-400">
            Projects
          </span>
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-gray-400">
          Every project and assignment helps me improve my
          development skills and learn new technologies.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block rounded-full border border-yellow-400 px-8 py-3 font-semibold text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
        >
          Back to Home
        </Link>

      </section>

    </main>
  );
}