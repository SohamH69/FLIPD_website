
import ProfileCard from "../../components/ui/ProfileCard";

function OurPeople() {
  return (
    <div className="w-full px-5 sm:px-8 md:px-12 lg:px-20 py-10 sm:py-14 lg:py-20 bg-[#0a0a0a]">
      <h1 className="uppercase font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6 text-center">Our Team</h1>
      <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-8 sm:gap-8 lg:gap-10">
        <ProfileCard
          name="Partha Chowdhury"
          title="Founder"
          handle="javicodes"
          status="Online"
          contactText="Contact"
          avatarUrl="src/assets/about/partha.png"
          iconUrl="/assets/demo/iconpattern.png"
          holo={0.8}
          glare={0.5}
          tiltStrength={12}
          parallax={8}
          radius={16}
          enableTilt
          intro
          showUserInfo
          enableMobileTilt={false}
          theme="dark"
          onContactClick={() => console.log("Contact clicked")}
        />
        <ProfileCard
          name="Partha Chowdhury"
          title="Founder"
          handle="javicodes"
          status="Online"
          contactText="Contact"
          avatarUrl="src/assets/about/partha.png"
          iconUrl="/assets/demo/iconpattern.png"
          holo={0.8}
          glare={0.5}
          tiltStrength={12}
          parallax={8}
          radius={16}
          enableTilt
          intro
          showUserInfo
          enableMobileTilt={false}
          theme="dark"
          onContactClick={() => console.log("Contact clicked")}
        />
      </div>
    </div>
  );
}

export default OurPeople;
