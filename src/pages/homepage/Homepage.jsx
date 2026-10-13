import Banner from "./Banner";
import About from "./About";
import Work from "./Work";
import Services from "./Services";
import Partners from "./Partners";
import Contact from "./Contact";

function Homepage() {
  return (
    <div className="bg-[#0a0a0a]">
      <section className="h-screen sticky top-0 flex items-center justify-center bg-[#0a0a0a]">
        <Banner />
      </section>
      <section className="h-screen sticky top-0 flex items-center justify-center bg-[#0a0a0a]">
        <About />
      </section>
      <section className="">
        <Work />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <Partners />
      </section>
      <section className="h-screen sticky top-0 flex items-center justify-center bg-[#0a0a0a]">
        <Contact />
      </section>
    </div>
  );
}

export default Homepage;
