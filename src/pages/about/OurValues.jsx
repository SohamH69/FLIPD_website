
import styles from "../homepage/TextAnimation.module.css";
import { useIntersection } from "../../interaction";

function OurValues() {
  const [sectionRef, isVisible] = useIntersection({ threshold: 0.15 });

  const values = [
    {
      id: "01",
      title: "Curiosity",
      desc: "We ask better questions. Always.",
    },
    {
      id: "02",
      title: "Craft",
      desc: "Every detail matters.",
    },
    {
      id: "03",
      title: "Collaboration",
      desc: "Great ideas are a team sport.",
    },
    {
      id: "04",
      title: "Impact",
      desc: "We create work that moves people and builds brands.",
    },
  ];

  return (
    <div ref={sectionRef} className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 bg-[#0a0a0a] px-5 sm:px-8 md:px-12 lg:px-20 py-12 sm:py-16 lg:py-20">
      <div className="w-full lg:w-1/2">
        <p
          className={`${styles.animatedFloatLeft} ${isVisible ? styles.active : ""} uppercase tracking-[0.2em] text-white mb-6 text-xs sm:text-sm`}
          style={{ "--delay": "0s" }}
        >
          Our values
        </p>
        <h1
          className={`${styles.animatedFloatRight} ${isVisible ? styles.active : ""} uppercase font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6`}
          style={{ "--delay": "0.2s" }}
        >
          What drives us.
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 sm:gap-y-10 gap-x-6">
          {values.map((item) => {
            return (
              <div className="flex flex-col gap-2 text-white w-full sm:max-w-[220px]" key={item.id}>
                <h4 className="text-[#dcff3b] text-3xl sm:text-4xl font-semibold">
                  {item.id}
                </h4>
                <h3 className="font-bold text-xl sm:text-2xl lg:text-3xl">{item.title}</h3>
                <p className="text-sm sm:text-base leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <img src="src/assets/about/ourValues.png" alt="" className="w-full h-auto object-cover" />
      </div>
    </div>
  );
}

export default OurValues;
