
import { MoveRight } from "lucide-react";
import { useIntersection } from "../../interaction"; // Double check this path matches your folder structure
import styles from './TextAnimation.module.css';

function Contact() {
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
          05<span className="mx-4">/</span>Let's Create
        </p>
        
        <div>
            <h1 
            className={`${styles.animatedFloatRight} ${isVisible ? styles.active : ''} uppercase font-bold text-4xl sm:text-5xl md:text-6xl mb-4`}
            style={{ '--delay': '0.2s' }}
            >
            Got an <span className="text-[#dcff3b]">Idea?</span>
            </h1>
            
            <p 
            className={`${styles.animatedFloatUp} ${isVisible ? styles.active : ''} text-sm sm:text-base md:text-lg`}
            style={{ '--delay': '0.4s' }}
            >
            We would love to hear it.
            </p>
        </div>
        
        <a 
          href="" 
          className={`${styles.animatedFloatRight} ${isVisible ? styles.active : ''}`}
          style={{ '--delay': '0.6s' }}
        >
          <div className="flex gap-2 items-center">
            <p>Contact Us </p>
            <MoveRight color="#ffffff" />
          </div>
        </a>
        
      </div>
      <div className="w-full lg:w-1/2">
        <img src="/mysterious-doorway-silhouette-stockcake.jpg" alt="" className={`${styles.animatedFloatLeft} ${isVisible ? styles.active : ''} w-full h-auto object-cover`} width={800}/>
      </div>
    </div>
  );
}

export default Contact;
