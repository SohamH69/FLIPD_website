
import styles from "../homepage/TextAnimation.module.css";
import { useIntersection } from "../../interaction";

function OurStory() {
  const [sectionRef, isVisible] = useIntersection({ threshold: 0.15 });
  return (
    <div ref={sectionRef} className="flex flex-col md:flex-row items-center gap-8 md:gap-10 lg:gap-20 bg-[#0a0a0a] h-full">
      <div className="w-full md:w-1/2 h-full">
        <img src="src/assets/about/section1.png" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="w-full md:w-1/2 px-5 sm:px-8 md:pl-0 md:pr-8 lg:pr-20 py-8 md:py-10 lg:py-0">
        <p
          className={`${styles.animatedFloatLeft} ${isVisible ? styles.active : ""} uppercase tracking-[0.2em] text-white mb-6 text-xs sm:text-sm`}
          style={{ "--delay": "0s" }}
        >
          Our story
        </p>
        <h1
          className={`${styles.animatedFloatRight} ${isVisible ? styles.active : ""} uppercase font-bold text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl text-white mb-6`}
          style={{ "--delay": "0.2s" }}
        >
          It started with a simple frustration
        </h1>

        <p
          className={`${styles.animatedFloatUp} ${isVisible ? styles.active : ""} text-white text-sm sm:text-base md:text-base lg:text-lg leading-relaxed`}
          style={{ "--delay": "0.4s" }}
        >
          We were tired of seeing the same recycled ideas, same tired visuals
          and the same predictable campaigns. So we built FLIPD - a place for
          fresh thinking, bold ideas and work that actually means something.
        </p>
      </div>
    </div>
  );
}

export default OurStory;
