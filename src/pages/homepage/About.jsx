
import { MoveRight } from "lucide-react";
import { useIntersection } from "../../interaction"; // Double check this path matches your folder structure
import styles from './TextAnimation.module.css';

function About() {
  // 1. Create the hook to track when this section crosses onto the screen
  const [sectionRef, isVisible] = useIntersection({ threshold: 0.55 });

  return (
    <div 
      ref={sectionRef} // 2. Attach the ref to the parent section
      className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center bg-[#0b0b0b] px-5 sm:px-8 md:px-12 lg:px-20 py-12 sm:py-16 lg:py-20"
    >
      <div className="flex flex-col gap-7 sm:gap-9 lg:gap-12 text-white w-full lg:w-1/2">
        
        {/* 3. Added \${isVisible ? styles.active : ''} and custom inline CSS variable delays to stagger them */}
        <p 
          className={`${styles.animatedFloatLeft} ${isVisible ? styles.active : ''} uppercase tracking-[0.2em] text-xs sm:text-sm`}
          style={{ '--delay': '0s' }}
        >
          02<span className="mx-4">/</span>Our approach
        </p>
        
        <h1 
          className={`${styles.animatedFloatRight} ${isVisible ? styles.active : ''} uppercase font-bold text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl`}
          style={{ '--delay': '0.2s' }}
        >
          We Turn brands into <span className="text-[#dcff3b]">culture.</span>
        </h1>
        
        <p 
          className={`${styles.animatedFloatUp} ${isVisible ? styles.active : ''} text-sm sm:text-base md:text-lg leading-relaxed`}
          style={{ '--delay': '0.4s' }}
        >
          We start with a simple belief, people don't just buy product's, they
          buy what those products make them feel.
        </p>
        
        <a 
          href="" 
          className={`${styles.animatedFloatRight} ${isVisible ? styles.active : ''}`}
          style={{ '--delay': '0.6s' }}
        >
          <div className="flex gap-2 items-center">
            <p>Know more </p>
            <MoveRight color="#ffffff" />
          </div>
        </a>
        
      </div>
      <div className="w-full lg:w-1/2">
        <video
          autoPlay
          muted
          loop
          src="https://flipdadvertising.com/wp-content/uploads/2026/10/Flipd-Advertising-Showreel-for-website-and-Youtube.mp4"
          className="w-full h-auto object-cover"
        ></video>
      </div>
    </div>
  );
}

export default About;
