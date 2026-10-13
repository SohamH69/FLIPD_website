
import { useState } from "react";
import { Link } from 'react-router-dom';
import WorkDetail from "./WorkDetail";
const projects = [
  {
    id: 1,
    title: "The Next Stop Is You.",
    category: "Brand Campaigns",
    description:
      "A campaign for a travel brand that turns everyday journeys into moments of self-discovery.",
    image: "src/assets/keventer.webp",
    number: "02 / 04",
    className: "",
  },
  {
    id: 2,
    title: "Higher Together.",
    category: "Digital",
    description:
      "A visual story for an outdoor brand celebrating exploration and human connection.",
    image: "src/assets/CIMA.webp",
    number: "03 / 04",
    className: "",
  },
  {
    id: 3,
    title: "The Last While.",
    category: "Film & Video",
    description:
      "A short film exploring what we leave behind and what we carry forward.",
    image: "src/assets/RCGC-Cover.webp",
    number: "04 / 04",
    className: "",
  },
];

const filters = [
  "All",
  "Brand Campaigns",
  "Film & Video",
  "Digital",
  "Print",
];

export default function Work() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <main className="overflow-hidden bg-[#090909] text-[#f4f4f0]">

      {/* Hero */}
      <section className="relative isolate flex min-h-[600px] items-end border-b border-white/15 sm:min-h-[650px] lg:min-h-[690px]">
        <img
          src="src/assets/01_hero_portrait.jpg"
          alt="A silhouetted figure beneath a dramatic eclipse"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/55 to-transparent" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/65 via-transparent to-black/15" />

        <div className="grid w-full gap-8 px-5 pb-12 pt-24 sm:px-10 sm:pb-16 lg:grid-cols-12 lg:px-16">
          <div className="lg:col-span-8">
            <p className="mb-6 text-[10px] uppercase tracking-[0.3em] text-white/70">
              Our work / 2026
            </p>

            <h1 className="max-w-4xl text-6xl font-bold uppercase leading-[0.83] tracking-[-0.065em] sm:text-7xl md:text-8xl lg:text-[clamp(3rem,8vw,6rem)]">
              Ideas that
              <br />
              move people<span className="text-[#c7ff38]">.</span>
            </h1>

            <p className="mt-7 max-w-md text-sm leading-6 text-white/75 sm:text-base">
              We create campaigns that don't just get noticed — they get
              people talking, feeling and acting.
            </p>

            <a
              href="#selected-work"
              className="mt-10 inline-flex items-center gap-3 text-xs transition-colors hover:text-[#c7ff38]"
            >
              <span className="flex h-8 w-4 items-center justify-center rounded-full border border-white/70">
                <span className="h-2 w-1 rounded-full bg-[#c7ff38]" />
              </span>
              Scroll to explore
            </a>
          </div>
        </div>
      </section>

      {/* Featured project */}
      <section
        id="selected-work"
        className="grid border-b border-white/15 lg:min-h-[430px] lg:grid-cols-12"
      >
        <a
          href="/workDetails"
          className="group relative min-h-[320px] overflow-hidden sm:min-h-[450px] lg:col-span-7"
          aria-label="View The Red Lip campaign"
        >
        
          <img
            src="src\assets\RCGC-Cover.webp"
            alt="Red-toned conceptual campaign photography"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/15" />

          <span className="absolute left-5 top-5 text-[9px] uppercase tracking-[0.25em] sm:left-10 sm:top-8">
            Featured project
          </span>

          <div className="absolute bottom-7 left-5 sm:bottom-10 sm:left-10">
            <p className="text-[9px] uppercase tracking-[0.2em] text-white/70">
              Brand campaign / 01
            </p>
            <p className="mt-2 text-3xl font-black uppercase tracking-tight sm:text-5xl">
              Royal Calcutta Golf Club<span className="text-[#c7ff38]">.</span>
            </p>
          </div>

          <span className="absolute bottom-8 right-7 flex h-11 w-11 items-center justify-center rounded-full border border-white/50 transition-all duration-300 group-hover:border-[#c7ff38] group-hover:bg-[#c7ff38] group-hover:text-black">
            ↗
          </span>
        </a>

        <div className="flex flex-col justify-center px-6 py-12 sm:px-10 lg:col-span-5 lg:px-12 lg:py-16">
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#c7ff38]">
            A campaign about expression
          </p>

          <h2 className="mt-5 max-w-sm text-3xl font-black uppercase leading-[0.95] tracking-tight sm:text-4xl">
            A bold taste
            <br />
            of freedom.
          </h2>

          <p className="mt-5 max-w-sm text-sm leading-6 text-white/65">
            For a modern lifestyle brand, we created a campaign that turned a
            simple product into a statement of self-expression. The idea was
            not just to sell, but to spark a movement.
          </p>

          <a
            href="/work/the-red-lip"
            className="group mt-8 inline-flex w-fit items-center gap-4 border-b border-white/30 pb-2 text-sm transition-colors hover:border-[#c7ff38] hover:text-[#c7ff38]"
          >
            View case study
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </section>

      {/* Project grid */}
      <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-20">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/50">
              Our works
            </p>
            <h2 className="mt-3 text-3xl font-black uppercase tracking-tight sm:text-5xl">
              Different worlds.
              <br />
              Different ideas.
            </h2>
          </div>
          <span className="hidden text-xs text-white/40 sm:block">
            Scroll to discover ↘
          </span>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <a
                key={project.id}
                href={`/work/${project.id}`}
                className="group flex flex-col border border-white/10 transition-colors duration-300 hover:border-[#c7ff38]/60"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#151515]">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 bg-black/70 px-3 py-2 text-[9px] uppercase tracking-[0.15em]">
                    {project.category}
                  </span>
                  <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#c7ff38] text-lg text-black opacity-100 transition-transform duration-300 group-hover:rotate-45">
                    ↗
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="text-2xl font-black uppercase leading-none tracking-tight sm:text-3xl">
                    {project.title}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-6 text-white/60">
                    {project.description}
                  </p>

                  <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-4">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-white/45">
                      {project.number}
                    </span>
                    <span className="text-xl transition-transform group-hover:translate-x-1 group-hover:text-[#c7ff38]">
                      →
                    </span>
                  </div>
                </div>
              </a>
            ))
          ) : (
            <p className="col-span-full py-16 text-sm text-white/50">
              More projects in this category are coming soon.
            </p>
          )}
        </div>
      </section>

      {/* Explore work / filters */}
      <section className="border-y border-white/15 px-5 py-12 sm:px-10 lg:px-16 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-4">
            <img src="src\assets\01_hero_portrait.jpg" alt="" className=""/>
          </div>

          <div className="lg:col-span-4">
            <p className="text-[9px] uppercase tracking-[0.25em] text-white/50">
              Find your next favourite
            </p>
            <h2 className="mt-3 text-3xl font-black uppercase leading-none tracking-tight">
              Explore all
              <br />
              projects.
            </h2>

            <a
              href="#selected-work"
              className="mt-5 inline-flex items-center gap-3 text-sm transition-colors hover:text-[#c7ff38]"
            >
              Explore work <span>→</span>
            </a>

            <div className="mt-7 border-t border-white/15">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => {
                    setActiveFilter(filter);
                    document
                      .getElementById("selected-work")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  aria-pressed={activeFilter === filter}
                  className={`flex w-full items-center justify-between border-b border-white/10 py-3 text-left text-[10px] uppercase tracking-[0.15em] transition-colors ${
                    activeFilter === filter
                      ? "text-[#c7ff38]"
                      : "text-white/55 hover:text-white"
                  }`}
                >
                  {filter}
                  <span>{activeFilter === filter ? "—" : "+"}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative isolate flex min-h-[380px] items-center overflow-hidden px-5 py-16 sm:min-h-[460px] sm:px-10 lg:min-h-[500px] lg:px-16">
        <img
          src="/images/rogue-contact.jpg"
          alt=""
          loading="lazy"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/75 to-black/20" />

        <div className="grid w-full gap-10 md:grid-cols-2 md:items-end">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/60">
              Let's create something
            </p>

            <h2 className="mt-5 text-5xl font-black uppercase leading-[0.85] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
              Ideas worth
              <br />
              remembering<span className="text-[#c7ff38]">.</span>
            </h2>
          </div>

          <div className="md:justify-self-end">
            <p className="max-w-xs text-sm leading-6 text-white/65">
              Have a project in mind?
              <br />
              Let's make people pay attention.
            </p>

            <a
              href="/contact"
              className="group mt-7 inline-flex items-center gap-4 border-b border-[#c7ff38] pb-3 text-sm text-[#c7ff38]"
            >
              Get in touch
              <span className="transition-transform group-hover:translate-x-2">
                →
              </span>
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
