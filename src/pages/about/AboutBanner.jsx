
import { Mouse } from "lucide-react";
import styles from "../homepage/TextAnimation.module.css";
import { useIntersection } from "../../interaction";

function AboutBanner() {
  const [sectionRef, isVisible] = useIntersection({ threshold: 0.15 });
  return (
    <div ref={sectionRef} className="relative top-0 w-full">
      <img
        src="src/assets/about/AboutBanner.png"
        alt=""
        className="w-full h-[85vh] min-h-[500px] sm:h-screen sm:min-h-[600px] object-cover"
        style={{ objectFit: "cover" }}
      />
      <div className="absolute flex flex-col gap-5 sm:gap-6 md:gap-8 left-[5%] sm:left-[7%] lg:left-[9.5%] top-[20%] sm:top-[25%] md:top-[30%] w-[90%] sm:w-[85%] lg:w-auto">
        <p
            className={`${styles.animatedFloatLeft} ${isVisible ? styles.active : ""} uppercase tracking-[0.2em] text-white font-semibold text-xs sm:text-sm`}
            style={{ "--delay": "0s" }}
        >
            About
        </p>
        <h1
            className={`${styles.animatedFloatLeft} ${isVisible ? styles.active : ""} text-white font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl w-full lg:w-150 uppercase tracking-tighter`}
        >
            We're not just an agency. We're a creative{" "}
            <span className="text-[#dcff3b]">partner.</span>
        </h1>
        <p
            className={`${styles.animatedFloatUp} ${isVisible ? styles.active : ""} text-white text-sm sm:text-base md:text-lg w-full lg:w-120`}
        >
            FLIPD is a creative agency for brands that want to be remembered.We combine strategy, creativity and culture to build ideas that move people - and make an impact.
        </p>
      </div>
      <div className="absolute flex gap-2 items-center right-[5%] bottom-[5%] sm:bottom-[7%] md:bottom-[10%]">
        <Mouse color="#ffffff" size={20} className="sm:w-6 sm:h-6" />
        <p className="text-white text-xs sm:text-sm md:text-base">Scroll to explore</p>
      </div>
    </div>
  );
}

export default AboutBanner;
