"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    setIsSending(true);
    setStatus("Sending your message...");

    try {
      await emailjs.sendForm(
        "service_2svpnuu",
        "template_4zk3xe9",
        form,
        {
          publicKey: "b9EErIhfstefEyjGc",
        }
      );

      setStatus("Message sent successfully! ✨");
      form.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("Something went wrong. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white">

      {/* Hero */}
      <section className="px-6 pb-12 pt-40 text-center">

        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-yellow-400">
          Get In Touch
        </p>

        <h1 className="mt-3 text-4xl font-bold md:text-6xl">
          Let's{" "}
          <span className="text-yellow-400">
            Connect
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl leading-7 text-gray-400">
          Have a project, opportunity or idea? Feel free to
          contact me. I would be happy to connect with you.
        </p>

      </section>

      {/* Contact Content */}
      <section className="mx-auto max-w-6xl px-6 pb-24">

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Contact Information */}
          <div className="rounded-2xl border border-yellow-500/20 bg-zinc-950 p-8">

            <p className="text-sm uppercase tracking-widest text-yellow-400">
              Contact Information
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Let's Start a{" "}
              <span className="text-yellow-400">
                Conversation
              </span>
            </h2>

            <p className="mt-5 leading-7 text-gray-400">
              I am always interested in learning, collaborating
              and working on creative web development projects.
            </p>

            {/* Email */}
            <a
              href="mailto:mantashanoor2011@gmail.com"
              className="mt-8 flex items-center gap-4 rounded-xl border border-yellow-500/20 bg-black p-4 transition hover:border-yellow-400/60"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400/10 text-xl">
                ✉
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-yellow-500">
                  Email
                </p>

                <p className="mt-1 text-sm text-gray-300">
                  mantashanoor2011@gmail.com
                </p>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/mantashanoor2762011-byte"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center gap-4 rounded-xl border border-yellow-500/20 bg-black p-4 transition hover:border-yellow-400/60"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400/10 text-xl">
                G
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-yellow-500">
                  GitHub
                </p>

                <p className="mt-1 text-sm text-gray-300">
                  Mantasha Noor
                </p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center gap-4 rounded-xl border border-yellow-500/20 bg-black p-4 transition hover:border-yellow-400/60"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400/10 text-xl font-bold">
                in
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-yellow-500">
                  LinkedIn
                </p>

                <p className="mt-1 text-sm text-gray-300">
                  Connect with me
                </p>
              </div>
            </a>

          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-yellow-500/20 bg-zinc-950 p-8">

            <p className="text-sm uppercase tracking-widest text-yellow-400">
              Send a Message
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Contact{" "}
              <span className="text-yellow-400">
                Me
              </span>
            </h2>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm text-gray-300"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-yellow-500/20 bg-black px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-yellow-400"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm text-gray-300"
                >
                  Your Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-yellow-500/20 bg-black px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-yellow-400"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm text-gray-300"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-xl border border-yellow-500/20 bg-black px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-yellow-400"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={isSending}
                className="w-full rounded-xl border border-yellow-400 bg-yellow-400 px-6 py-3 font-semibold text-black transition hover:bg-transparent hover:text-yellow-400 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>

              {/* Status */}
              {status && (
                <p className="text-center text-sm text-yellow-400">
                  {status}
                </p>
              )}

            </form>

          </div>

        </div>

      </section>

      {/* Bottom CTA */}
      <section className="border-t border-yellow-500/20 bg-zinc-950 px-6 py-16 text-center">

        <h2 className="text-2xl font-bold md:text-3xl">
          Thank You for{" "}
          <span className="text-yellow-400">
            Visiting
          </span>
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-gray-400">
          I appreciate your interest in my portfolio and look
          forward to connecting with you.
        </p>

        <Link
          href="/"
          className="mt-7 inline-block rounded-full border border-yellow-400 px-8 py-3 font-semibold text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
        >
          Back to Home
        </Link>

      </section>

    </main>
  );
}