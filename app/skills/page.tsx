"use client";

import { motion } from "framer-motion";

const skills = [
  {
    name: "HTML",
    category: "Frontend",
    level: "Advanced Beginner",
    percentage: 85,
    description: "Building semantic and well-structured web pages.",
  },
  {
    name: "CSS",
    category: "Frontend",
    level: "Intermediate",
    percentage: 80,
    description: "Creating responsive layouts, animations and modern UI designs.",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    level: "Intermediate",
    percentage: 75,
    description: "Building interactive and dynamic web experiences.",
  },
  {
    name: "React",
    category: "Frontend",
    level: "Learning",
    percentage: 70,
    description: "Developing reusable components and interactive interfaces.",
  },
  {
    name: "Next.js",
    category: "Full Stack",
    level: "Learning",
    percentage: 65,
    description: "Building modern applications using the Next.js App Router.",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    level: "Intermediate",
    percentage: 75,
    description: "Creating responsive interfaces with utility-first CSS.",
  },
  {
    name: "Node.js",
    category: "Backend",
    level: "Learning",
    percentage: 60,
    description: "Learning server-side JavaScript and backend development.",
  },
  {
    name: "Express.js",
    category: "Backend",
    level: "Learning",
    percentage: 55,
    description: "Learning REST APIs and backend application development.",
  },
  {
    name: "MongoDB",
    category: "Database",
    level: "Learning",
    percentage: 50,
    description: "Learning database design, queries and backend integration.",
  },
  {
    name: "Git & GitHub",
    category: "Tools",
    level: "Intermediate",
    percentage: 80,
    description: "Managing projects, repositories and version control.",
  },
];

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-black text-white">



      {/* Hero */}
      <section className="px-6 pb-16 pt-40 text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-3 text-sm font-semibold uppercase tracking-[0.4em] text-yellow-400"
        >
          My Technical Skills
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl font-bold md:text-6xl"
        >
          Skills &{" "}
          <span className="text-yellow-400">
            Technologies
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mx-auto mt-6 max-w-2xl leading-7 text-gray-400"
        >
          I am continuously learning and improving my development
          skills while building real-world projects with modern
          web technologies.
        </motion.p>
      </section>

      {/* Skills */}
      <section className="mx-auto max-w-7xl px-6 pb-24">

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className="group rounded-2xl border border-yellow-500/20 bg-gradient-to-br from-zinc-950 to-zinc-900 p-6 shadow-lg transition duration-300 hover:border-yellow-400/70 hover:shadow-yellow-500/10"
            >

              {/* Top */}
              <div className="mb-5 flex items-center justify-between">

                <div>
                  <span className="text-xs uppercase tracking-widest text-yellow-500">
                    {skill.category}
                  </span>

                  <h2 className="mt-2 text-2xl font-bold">
                    {skill.name}
                  </h2>
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-yellow-500/40 bg-yellow-500/10">
                  <span className="font-bold text-yellow-400">
                    {skill.percentage}%
                  </span>
                </div>

              </div>

              {/* Description */}
              <p className="mb-6 min-h-[48px] text-sm leading-6 text-gray-400">
                {skill.description}
              </p>

              {/* Progress */}
              <div className="mb-2 flex justify-between text-xs">
                <span className="text-gray-500">
                  Learning Progress
                </span>

                <span className="text-yellow-400">
                  {skill.level}
                </span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-zinc-800">

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="h-full rounded-full bg-gradient-to-r from-yellow-600 via-yellow-400 to-amber-200"
                />

              </div>

            </motion.div>
          ))}

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-yellow-500/20 bg-zinc-950 px-6 py-20 text-center">

        <h2 className="text-3xl font-bold md:text-4xl">
          Always{" "}
          <span className="text-yellow-400">
            Learning & Building
          </span>
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-gray-400">
          My goal is to continuously improve my development
          skills by creating practical and creative projects.
        </p>

        <a
          href="/#projects"
          className="mt-8 inline-block rounded-full border border-yellow-400 bg-yellow-400 px-8 py-3 font-semibold text-black transition hover:bg-transparent hover:text-yellow-400"
        >
          View My Projects
        </a>

      </section>

    </main>
  );
}