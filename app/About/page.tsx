export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-20 text-white">
      <section className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="text-center">
          <p className="mb-3 text-sm uppercase tracking-[5px] text-[#D4AF37]">
            About Me
          </p>

          <h1 className="text-5xl font-bold md:text-7xl">
            Mantasha <span className="text-[#D4AF37]">Noor</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Full Stack Developer Intern passionate about building modern,
            responsive and creative web experiences.
          </p>
        </div>

        {/* About Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {/* About Me */}
          <div className="rounded-3xl border border-[#D4AF37]/30 bg-[#111111] p-8 shadow-xl transition duration-300 hover:-translate-y-2 hover:border-[#D4AF37]">
            <h2 className="mb-5 text-3xl font-bold">
              Who <span className="text-[#D4AF37]">I Am</span>
            </h2>

            <p className="leading-8 text-gray-300">
              I am Mantasha Noor, a BS Information Technology student and
              Full Stack Developer Intern. I enjoy learning modern
              technologies and creating responsive and user-friendly websites.
            </p>

            <p className="mt-5 leading-8 text-gray-300">
              I also have a strong interest in creative work including
              calligraphy, sketching, jewelry making, craft work, stitching
              and mehndi.
            </p>
          </div>

          {/* Education */}
          <div className="rounded-3xl border border-[#D4AF37]/30 bg-[#111111] p-8 shadow-xl transition duration-300 hover:-translate-y-2 hover:border-[#D4AF37]">
            <h2 className="mb-6 text-3xl font-bold">
              My <span className="text-[#D4AF37]">Journey</span>
            </h2>

            <div className="space-y-6">

              <div className="border-l-2 border-[#D4AF37] pl-5">
                <h3 className="text-xl font-semibold">
                  BS Information Technology
                </h3>

                <p className="mt-2 text-gray-400">
                  Building my knowledge in information technology,
                  programming and web development.
                </p>
              </div>

              <div className="border-l-2 border-[#D4AF37] pl-5">
                <h3 className="text-xl font-semibold">
                  Full Stack Development
                </h3>

                <p className="mt-2 text-gray-400">
                  Learning and building projects with modern web
                  technologies.
                </p>
              </div>

              <div className="border-l-2 border-[#D4AF37] pl-5">
                <h3 className="text-xl font-semibold">
                  Creative Skills
                </h3>

                <p className="mt-2 text-gray-400">
                  Exploring calligraphy, sketching, crafts, jewelry making
                  and other creative work.
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Focus Section */}
        <section className="mt-20">

          <div className="text-center">
            <p className="text-sm uppercase tracking-[4px] text-[#D4AF37]">
              What I Do
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              My <span className="text-[#D4AF37]">Focus</span>
            </h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {[
              "Frontend Development",
              "Backend Development",
              "Responsive Websites",
              "Creative Design",
            ].map((skill, index) => (
              <div
                key={skill}
                className="group rounded-2xl border border-[#D4AF37]/30 bg-[#111111] p-7 text-center transition duration-300 hover:-translate-y-3 hover:border-[#D4AF37] hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-[#D4AF37] text-xl font-bold text-[#D4AF37] transition group-hover:bg-[#D4AF37] group-hover:text-black">
                  {index + 1}
                </div>

                <h3 className="font-semibold">
                  {skill}
                </h3>
              </div>
            ))}

          </div>
        </section>

        {/* Quote */}
        <section className="mt-20 rounded-3xl border border-[#D4AF37]/40 bg-[#111111] p-10 text-center">

          <p className="text-2xl font-semibold italic md:text-3xl">
            Where Creativity Meets{" "}
            <span className="text-[#D4AF37]">
              Technology
            </span>
          </p>

          <p className="mt-4 text-gray-400">
            Learning, creating and building one project at a time.
          </p>

        </section>

      </section>
    </main>
  );
}