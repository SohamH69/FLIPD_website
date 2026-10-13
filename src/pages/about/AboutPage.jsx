import AboutBanner from "./AboutBanner";
import OurPeople from "./OurPeople";
import OurStory from "./OurStory";
import OurValues from "./OurValues";
import AboutContact from "./AboutContact";

function AboutPage() {
  return (
    <div>
      <section className="h-screen sticky top-0 flex items-center justify-center bg-[#0a0a0a]">
        <AboutBanner />
      </section>
      <section className="h-screen sticky top-0 flex items-center bg-[#0a0a0a]">
        <OurStory />
      </section>
      <section className="h-screen sticky top-0 flex items-center bg-[#0a0a0a]">
        <OurValues />
      </section>
      <section className="h-screen sticky top-0 flex items-center bg-[#0a0a0a]">
        <OurPeople />
      </section>
      <section className="h-screen sticky top-0 flex items-center bg-[#0a0a0a]">
        <AboutContact/>
      </section>
    </div>
  );
}

export default AboutPage;
