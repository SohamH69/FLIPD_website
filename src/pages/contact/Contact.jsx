
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Connect your backend or email service here.
    console.log("Contact form data:", formData);
    setSubmitted(true);
  };

  const inputClass =
    "w-full border-b border-white/20 bg-transparent py-4 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-[#c7ff38]";

  const labelClass =
    "mb-1 block text-[10px] uppercase tracking-[0.2em] text-white/55";

  return (
    <main className="overflow-hidden bg-[#090909] text-[#f5f5f5]">
      {/* 01 — Banner */}
      <section className="relative isolate flex min-h-[500px] items-end border-b border-white/10 sm:min-h-[580px] lg:min-h-[650px]">
        <img
          src="https://img.magnific.com/free-photo/3d-abstract-wave-pattern-background_53876-104422.jpg?semt=ais_hybrid&w=740&q=80"
          alt="Cinematic monochrome photography for ROGUE"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/90 via-black/45 to-black/10" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/60 to-transparent" />

        <div className="w-full px-5 pb-12 pt-24 sm:px-10 sm:pb-16 lg:px-16 lg:pb-20">
          <p className="mb-7 text-[10px] uppercase tracking-[0.3em] text-[#c7ff38]">
            01 / Let's talk
          </p>

          <h1 className="max-w-5xl text-6xl font-black uppercase leading-[0.82]  sm:text-8xl lg:text-[clamp(2rem,8vw,8rem)]">
            Got something
            <br />
            worth saying<span className="text-[#c7ff38]">?</span>
          </h1>

          <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-md text-sm leading-6 text-white/70 sm:text-base">
              A big idea, a difficult brief, or just a feeling that something
              could be better. We'd love to hear it.
            </p>

            <a
              href="#contact-form"
              className="group inline-flex w-fit items-center gap-3 text-xs uppercase tracking-wider"
            >
              Start a conversation
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c7ff38] text-[#c7ff38] transition-colors group-hover:bg-[#c7ff38] group-hover:text-black">
                ↘
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* 02 — Contact Details */}
      <section className="border-b border-white/10 px-5 py-14 sm:px-10 sm:py-20 lg:px-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#c7ff38]">
              02 / Find us
            </p>
            <h2 className="mt-4 text-3xl font-black uppercase tracking-tight">
              Let's connect<span className="text-[#c7ff38]">.</span>
            </h2>
          </div>

          <div>
            <p className={labelClass}>Email</p>
            <a
              href="mailto:hello@rogue.agency"
              className="mt-2 inline-block text-sm transition-colors hover:text-[#c7ff38]"
            >
              hello@flipd.agency ↗
            </a>
            <p className="mt-3 text-xs leading-5 text-white/40">
              For projects, collaborations and everything in between.
            </p>
          </div>

          <div>
            <p className={labelClass}>Phone</p>
            <a
              href="tel:+910000000000"
              className="mt-2 inline-block text-sm transition-colors hover:text-[#c7ff38]"
            >
              +91 00000 00000 ↗
            </a>
            <p className="mt-3 text-xs leading-5 text-white/40">
              Prefer a conversation? Give us a call.
            </p>
          </div>

          <div>
            <p className={labelClass}>Follow along</p>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-sm">
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="hover:text-[#c7ff38]">
                Instagram ↗
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-[#c7ff38]">
                LinkedIn ↗
              </a>
            </div>
            <p className="mt-3 text-xs leading-5 text-white/40">
              Ideas, experiments and things we can't stop thinking about.
            </p>
          </div>
        </div>
      </section>

      {/* 03 — Contact Form */}
      <section
        id="contact-form"
        className="relative isolate px-5 py-16 sm:px-10 sm:py-24 lg:px-16 lg:py-28"
      >
        <div className="pointer-events-none absolute right-[-5%] top-10 -z-10 select-none text-[32vw] font-black leading-none text-white/[0.025]">
          FLIPD.
        </div>

        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Form introduction */}
          <div className="lg:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#c7ff38]">
              Tell us about it
            </p>

            <h2 className="mt-6 text-5xl font-black uppercase leading-[0.88] tracking-[-0.06em] sm:text-6xl">
              Let's make
              <br />
              something
              <br />
              matter<span className="text-[#c7ff38]">.</span>
            </h2>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/55">
              Tell us what you're working on, what you're imagining, or what
              you're trying to solve. We'll take it from there.
            </p>

            <div className="mt-12 border-l border-[#c7ff38] pl-5">
              <p className="font-serif text-2xl italic leading-snug text-[#c7ff38]">
                Good ideas
                <br />
                start somewhere.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 lg:col-start-6">
            <form onSubmit={handleSubmit} className="space-y-9">
              <div className="grid gap-8 sm:grid-cols-2 sm:gap-10">
                <div>
                  <label htmlFor="name" className={labelClass}>
                    Your name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="What should we call you?"
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className={labelClass}>
                  Company / Brand
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  placeholder="Where do you make things happen?"
                  value={formData.company}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div className="grid gap-8 sm:grid-cols-2 sm:gap-10">
                <div>
                  <label htmlFor="service" className={labelClass}>
                    What do you need?
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`${inputClass} appearance-none`}
                  >
                    <option value="" className="bg-[#111]">
                      Select a service
                    </option>
                    <option value="Creative Campaign" className="bg-[#111]">
                      Creative Campaign
                    </option>
                    <option value="Campaign Strategy" className="bg-[#111]">
                      Campaign Strategy
                    </option>
                    <option value="Creative Concept" className="bg-[#111]">
                      Creative Concept
                    </option>
                    <option value="Art Direction" className="bg-[#111]">
                      Art Direction
                    </option>
                    <option value="Something Else" className="bg-[#111]">
                      Something Else
                    </option>
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className={labelClass}>
                    Estimated budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className={`${inputClass} appearance-none`}
                  >
                    <option value="" className="bg-[#111]">
                      Select a range
                    </option>
                    <option value="Under ₹1 lakh" className="bg-[#111]">
                      Under ₹1 lakh
                    </option>
                    <option value="₹1–5 lakh" className="bg-[#111]">
                      ₹1–5 lakh
                    </option>
                    <option value="₹5–10 lakh" className="bg-[#111]">
                      ₹5–10 lakh
                    </option>
                    <option value="₹10 lakh+" className="bg-[#111]">
                      ₹10 lakh+
                    </option>
                    <option value="To be discussed" className="bg-[#111]">
                      To be discussed
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>
                  Tell us about your project *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="The idea, the challenge, the ambition. We're listening..."
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-y`}
                  required
                />
              </div>

              <div className="flex flex-col gap-5 pt-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-xs text-xs leading-5 text-white/35">
                  Your details will only be used to respond to your enquiry.
                </p>

                <button
                  type="submit"
                  className="group inline-flex min-h-14 items-center justify-center gap-8 bg-[#c7ff38] px-7 py-4 text-xs font-bold uppercase tracking-[0.12em] text-black transition-colors hover:bg-white"
                >
                  Send your brief
                  <span className="text-lg transition-transform group-hover:translate-x-1">
                    ↗
                  </span>
                </button>
              </div>

              {submitted && (
                <p role="status" className="text-sm text-[#c7ff38]">
                  Your form passed validation. Connect the submit handler to
                  your email service or backend to send your enquiry.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

    </main>
  );
}
