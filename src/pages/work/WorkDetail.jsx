
import React from "react";

const project = {
  title: "Royal Calcutta Golf Club",
  category: "Brand Campaign",
  year: "2026",
  client: "Lifestyle Brand",
  hero: "/RCGC-Cover.webp",
  description:
    "A campaign about freedom, self-expression, and the confidence to be unapologetically yourself.",
  challenge:
    "In a world where brands compete for attention with the same messages, how do you turn an everyday product into something people connect with?",
  idea:
    "We turned a simple product into a statement of self-expression. Bold visuals, a striking red palette, and an attitude that refuses to blend in.",
  images: [
    "/RCGC-Cover.webp",
    "/RCGC-Cover.webp",
  ],
};

export default function WorkDetail() {
  return (
    <main className="overflow-hidden bg-[#090909] text-[#f4f4f0]">
      
      {/* 01 — Banner */}
      <section className="relative isolate flex min-h-[520px] items-end sm:min-h-[650px] lg:min-h-[660px]">
        <img
          src={project.hero}
          alt="Royal Calcutta Golf Club"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/30 to-black/10" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/60 to-transparent" />

        <div className="w-full px-5 pb-10 sm:px-10 sm:pb-14 lg:px-16 lg:pb-20">
          <div className="mb-8 flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white/65">
            <a href="/work" className="hover:text-[#c7ff38]">
              Work
            </a>
            <span>/</span>
            <span>{project.category}</span>
            <span>/</span>
            <span>{project.year}</span>
          </div>

          <h1 className="max-w-5xl text-6xl font-bold uppercase leading-[0.82] tracking-[-0.065em] sm:text-8xl lg:text-[clamp(3rem,8vw,8rem)]">
            Royal Calcutta
            <br />
            Golf Club<span className="text-[#c7ff38]">.</span>
          </h1>

          <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-md text-sm leading-6 text-white/75 sm:text-base">
              A campaign about freedom, self-expression, and the confidence
              to be unapologetically yourself.
            </p>

            <p className="text-xs uppercase tracking-[0.2em] text-white/65">
              {project.client}
            </p>
          </div>
        </div>
      </section>

      {/* 02 — Project body */}
      <section className="mx-auto max-w-[1600px] px-5 py-16 sm:px-10 sm:py-24 lg:px-16 lg:py-32">
        {/* Project introduction */}
        <div className="grid gap-8 border-b border-white/15 pb-12 sm:pb-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#c7ff38]">
              The project / 01
            </p>
            <h2 className="mt-5 max-w-sm text-3xl font-black uppercase leading-tight tracking-tight sm:text-4xl">
              Not just a product.
              <br />
              A statement.
            </h2>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <p className="max-w-2xl text-lg leading-8 text-white/80 sm:text-2xl sm:leading-10">
              {project.description}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3">
              <div>
                <p className="text-[9px] uppercase tracking-[0.2em] text-white/40">
                  Client
                </p>
                <p className="mt-2 text-sm">{project.client}</p>
              </div>

              <div>
                <p className="text-[9px] uppercase tracking-[0.2em] text-white/40">
                  Discipline
                </p>
                <p className="mt-2 text-sm">Creative Campaign</p>
              </div>

              <div>
                <p className="text-[9px] uppercase tracking-[0.2em] text-white/40">
                  Year
                </p>
                <p className="mt-2 text-sm">{project.year}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Challenge and idea */}
        <div className="grid gap-12 py-14 sm:py-20 lg:grid-cols-2 lg:gap-20">
          <article>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#c7ff38]">
              02 / The challenge
            </p>

            <h3 className="mt-5 text-2xl font-bold leading-tight sm:text-3xl">
              How do you make the ordinary impossible to ignore?
            </h3>

            <p className="mt-5 max-w-lg text-sm leading-7 text-white/60 sm:text-base">
              {project.challenge}
            </p>
          </article>

          <article>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#c7ff38]">
              03 / The idea
            </p>

            <h3 className="mt-5 text-2xl font-bold leading-tight sm:text-3xl">
              Make a statement. Never blend in.
            </h3>

            <p className="mt-5 max-w-lg text-sm leading-7 text-white/60 sm:text-base">
              {project.idea}
            </p>
          </article>
        </div>

        {/* Campaign imagery */}
        <div className="space-y-4 sm:space-y-6">
          <div className="group relative overflow-hidden bg-[#151515]">
            <img
              src={project.images[0]}
              alt="Campaign visual showing the creative direction"
              loading="lazy"
              className="h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02] sm:h-[520px] lg:h-[720px]"
            />
            <span className="absolute bottom-5 left-5 text-[9px] uppercase tracking-[0.2em] text-white/70 sm:bottom-8 sm:left-8">
              The campaign / 01
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="group overflow-hidden bg-[#151515]">
              <img
                src={project.images[1]}
                alt="Campaign art direction detail"
                loading="lazy"
                className="h-[280px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[400px]"
              />
            </div>

            <div className="flex min-h-[280px] flex-col justify-between bg-[#c7ff38] p-6 text-black sm:min-h-[400px] sm:p-10 lg:p-12">
              <span className="text-[10px] uppercase tracking-[0.2em]">
                The ROGUE. approach
              </span>

              <p className="max-w-md text-4xl font-black uppercase leading-[0.9] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                Be bold.
                <br />
                Be felt.
                <br />
                Be remembered.
              </p>

              <span className="text-xs uppercase tracking-[0.15em]">
                Ideas worth remembering. ↗
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — Contact */}
      <section className="relative isolate overflow-hidden border-y border-white/10 px-5 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-32">
        <div className="absolute right-[-5%] top-1/2 -z-10 -translate-y-1/2 select-none text-[35vw] font-black leading-none text-white/[0.025]">
          FLIPD
        </div>

        <p className="text-[10px] uppercase tracking-[0.3em] text-[#c7ff38]">
          Have something in mind?
        </p>

        <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-4xl text-5xl font-black uppercase leading-[0.85] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
            Your idea
            <br />
            deserves attention<span className="text-[#c7ff38]">.</span>
          </h2>

          <a
            href="/contact"
            className="group inline-flex w-fit shrink-0 items-center gap-5 border-b border-[#c7ff38] pb-3 text-sm text-[#c7ff38]"
          >
            Let's talk
            <span className="text-xl transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </a>
        </div>
      </section>
    </main>
  );
}
