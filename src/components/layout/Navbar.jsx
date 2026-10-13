import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Homepage from "../../pages/homepage/Homepage";
import { Menu, X } from "lucide-react";

function Navbar() {
  const links = [
    { label: "About", path: "/about" },
    { label: "Work", path: "/work" },
    { label: "Contact", path: "/contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 w-full flex justify-between items-center px-10 lg:px-18 py-6 z-1 ${isScrolled ? "bg-[#0b0b0b]" : "bg-transparent"}` }
    >
      <div>
        <Link to="/">
          <img
            src="src/assets/Flipd-logo-white.png"
            alt="logo"
            className="w-20 sm:w-30"
          />
        </Link>
      </div>
      <div className="lg:flex lg:gap-10 hidden">
        {links.map((item) => {
          return (
            <div className="text-white text-3xl font-semibold uppercase transition-colors hover:text-[#c7ff38]">
              <Link to={item.path}>{item.label}</Link>
              {/* <a href={item.path} key={item.path}>{item.label}</a> */}
            </div>
          );
        })}
      </div>
      <Menu
        color="#ffffff"
        onClick={toggleMenu}
        className={`lg:hidden ${isOpen ? "hidden" : "block"}`}
      />
      <X
        color="#ffffff"
        onClick={toggleMenu}
        className={`${isOpen ? "block" : "hidden"}`}
      />
      {/*Mobile*/}
      <div className={`fixed right-0 top-25 flex flex-col bg-[#0a0a0a] shadow-md items-end px-8 py-4 gap-8 z-100 text-3xl w-full ${isOpen ? "block" : "hidden"}`}>
        {links.map((item) => {
          return (
            <div className="text-white transition-colors hover:text-[#c7ff38]">
              <Link to={item.path}>{item.label}</Link>
              {/* <a href={item.path} key={item.path}>{item.label}</a> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Navbar;

{
  /* <header className="relative z-10 flex items-center justify-between border-b border-white/10 px-5 py-5 sm:px-10 lg:px-16">
        <a
          href="/"
          className="text-2xl font-black tracking-[-0.08em]"
          aria-label="ROGUE home"
        >
          ROGUE.
        </a>

        <nav className="flex items-center gap-4 text-[10px] uppercase tracking-wider sm:gap-8 sm:text-xs">
          <a
            href="/work"
            className="border-b border-[#c7ff38] pb-2 text-[#c7ff38]"
          >
            Work
          </a>
          <a href="/about" className="transition-colors hover:text-[#c7ff38]">
            About
          </a>
          <a
            href="/services"
            className="transition-colors hover:text-[#c7ff38]"
          >
            Services
          </a>
          <a
            href="/contact"
            className="transition-colors hover:text-[#c7ff38]"
          >
            Contact
          </a>
        </nav>
      </header> */
}
