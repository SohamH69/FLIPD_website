
import { Mouse } from "lucide-react";
import styles from "./TextAnimation.module.css";
import { useIntersection } from "../../interaction";

function Banner() {
  const [sectionRef, isVisible] = useIntersection({
    threshold: 0.15,
  });

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[85svh] min-h-[500px] sm:h-screen sm:min-h-[600px] lg:min-h-[700px] overflow-hidden"
    >
      {/* Background Image */}
      <img
        src="/src/assets/01_hero_portrait.jpg"
        alt="Creative agency hero"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col justify-end px-5 pb-24 sm:px-8 sm:pb-28 md:px-12 md:pb-32 lg:px-[9.5%] lg:pb-[10%]">

        {/* Heading */}
        <h1
          className={`
            ${styles.animatedFloatLeft}
            ${isVisible ? styles.active : ""}
            text-white font-bold uppercase tracking-tighter
            text-4xl leading-[0.95]
            sm:text-6xl sm:leading-[0.95]
            md:text-7xl
            lg:text-8xl
            xl:text-9xl
            max-w-[95%] sm:max-w-[85%] lg:max-w-[750px]
          `}
        >
          Ideas that move people
        </h1>

        {/* Paragraph */}
        <p
          className={`
            ${styles.animatedFloatUp}
            ${isVisible ? styles.active : ""}
            mt-5 sm:mt-6
            text-white font-normal
            text-sm leading-relaxed
            sm:text-base
            md:text-lg
            lg:text-xl
            max-w-[95%] sm:max-w-[75%] lg:max-w-[650px]
          `}
        >
          We're a creative agency for brands that want to be remembered.
          <br className="hidden sm:block" />
          {" "}Not just seen.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div
        className="
          absolute bottom-5 right-5
          flex items-center gap-2
          sm:bottom-8 sm:right-8
          lg:bottom-10 lg:right-[5%]
        "
      >
        <Mouse
          color="#ffffff"
          size={20}
          strokeWidth={1.5}
          className="shrink-0 sm:h-6 sm:w-6 lg:h-7 lg:w-7"
        />

        <p className="text-white text-xs sm:text-sm lg:text-base whitespace-nowrap">
          Scroll to explore
        </p>
      </div>
    </section>
  );
}

export default Banner;
