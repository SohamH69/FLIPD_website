import LogoLoop from '../../components/ui/LogoLoop';

function Partners() {
  const imageLogos = [
    {
      src: "/partners/vayuPrana.webp",
      alt: "Vayu Prana",
      href: "https://company1.com",
    },
    {
      src: "/partners/Tabillo.webp",
      alt: "Company 2",
      href: "https://company2.com",
    },
    {
      src: "/partners/MBSSP-logo-01-scaled.webp",
      alt: "Company 3",
      href: "https://company3.com",
    },
    {
      src: "/partners/erde-logo-01-scaled.webp",
      alt: "Company 3",
      href: "https://company3.com",
    },
  ];

  return (
    <div style={{ height: "200px", position: "relative", overflow: "hidden", backgroundColor:"#0a0a0a"}}>
      {/* Basic horizontal loop */}
      <LogoLoop
        logos={imageLogos}
        speed={100}
        direction="left"
        logoHeight={200}
        gap={0}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#0a0a0a"
        ariaLabel="Technology partners"
      />
    </div>
  );
}

export default Partners;
