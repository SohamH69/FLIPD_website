import { useEffect, useRef, useState } from "react";

const SLIDES = [
  {
    title: ["Royal Calcutta Golf Club"],
    description: ["A campaign for a food brand", "that turned hunger into a movement."],
    image: "/RCGC-Cover.webp",
    fallback: "#5a0d0a",
    href: "#case-study-1",
  },
  {
    title: ["Keventer"],
    description: ["A launch film for a small-batch", "hot sauce that sold out in a day."],
    image: "/keventer.webp",
    fallback: "#3b1a0b",
    href: "#case-study-2",
  },
  {
    title: ["Centre of International", "Modern Art (CIMA)"],
    description: ["A community dinner series that", "filled 40 tables in 6 cities."],
    image: "/CIMA.webp",
    fallback: "#1d2a1f",
    href: "#case-study-3",
  },
];

const VH_PER_SLIDE = 100;

function Work() {
   const sectionRef = useRef(null);
    const [active, setActive] = useState(0);
  
    useEffect(() => {
      let frame = 0;
  
      const update = () => {
        frame = 0;
        const el = sectionRef.current;
        if (!el) return;
  
        const rect = el.getBoundingClientRect();
        const scrollable = el.offsetHeight - window.innerHeight; // distance the sticky stage stays pinned
        const progress = Math.min(Math.max(-rect.top / scrollable, 0), 0.9999);
        const next = Math.floor(progress * SLIDES.length);
        setActive((prev) => (prev === next ? prev : next));
      };
  
      const onScroll = () => {
        if (!frame) frame = requestAnimationFrame(update);
      };
  
      update();
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
      return () => {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
        if (frame) cancelAnimationFrame(frame);
      };
    }, []);
  
    // Clicking an indicator number scrolls to the matching part of the section.
    const goTo = (index) => {
      const el = sectionRef.current;
      if (!el) return;
      const scrollable = el.offsetHeight - window.innerHeight;
      const top =
        el.getBoundingClientRect().top + window.scrollY + (scrollable * (index + 0.5)) / SLIDES.length;
      window.scrollTo({ top, behavior: "smooth" });
    };

  return (
  <section
      ref={sectionRef}
      aria-label="Featured work"
      className="relative bg-black"
      style={{ height: `${(SLIDES.length + 1) * VH_PER_SLIDE}vh` }}
    >
      <div className="sticky top-10 h-screen w-full overflow-hidden text-white">
        {/* Backgrounds */}
        {SLIDES.map((slide, i) => (
          <div
            key={slide.title.join(" ")}
            aria-hidden="true"
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-out motion-reduce:transition-none ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundColor: slide.fallback,
              backgroundImage: `url(${slide.image})`,
            }}
          />
        ))}

        {/* Left-side scrim so text stays legible on any image */}
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/20 to-transparent" />

        {/* Section label */}
        <p className="absolute left-6 top-20 tracking-[0.2em] uppercase sm:left-12">
           03<span className="mx-4">/</span>Featured work
        </p>

        {/* Copy */}
        <div className="absolute inset-y-0 left-6 flex items-center sm:left-12">
          <div className="grid">
            {SLIDES.map((slide, i) => {
              const isActive = i === active;
              return (
                <div
                  key={slide.title.join(" ")}
                  aria-hidden={!isActive}
                  className={`col-start-1 row-start-1 transition-all duration-700 ease-out motion-reduce:transition-none ${
                    isActive
                      ? "translate-y-0 opacity-100"
                      : "pointer-events-none translate-y-4 opacity-0"
                  }`}
                >
                  <h2 className="text-4xl font-medium leading-tight tracking-wide pr-20 sm:text-5xl">
                    {slide.title.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </h2>

                  <p className="mt-8 max-w-xl text-base leading-relaxed text-white/80 pr-20 sm:text-lg">
                    {slide.description.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>

                  <a
                    href={slide.href}
                    tabIndex={isActive ? 0 : -1}
                    className="group mt-10 inline-flex items-center gap-3 pb-1 text-sm text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white pr-20"
                  >
                    View case study
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      aria-hidden="true"
                    >
                      <path d="M3 12h18M15 6l6 6-6 6" />
                    </svg>
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right-side scrim so text stays legible on any image */}
        <div className="absolute inset-0 bg-linear-to-l from-black/50 via-black/0 to-transparent" />

        {/* Right-side indicator */}
        <nav
          aria-label="Featured work slides"
          className="absolute right-6 top-1/2 flex -translate-y-1/2 flex-col items-end gap-5 sm:right-12"
        >
          {SLIDES.map((_, i) => {
            const isActive = i === active;
            return (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to project ${i + 1}`}
                aria-current={isActive ? "true" : undefined}
                className="flex items-center gap-3 text-xs focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <span
                  className={`h-px bg-white transition-all duration-500 motion-reduce:transition-none ${
                    isActive ? "w-6 opacity-100" : "w-0 opacity-0"
                  }`}
                />
                <span
                  className={`tabular-nums transition-opacity duration-500 motion-reduce:transition-none ${
                    isActive ? "opacity-100" : "opacity-50 hover:opacity-80"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </button>
            );
          })}
        </nav>
      </div>
    </section>
);
}

export default Work;
