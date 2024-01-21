import React, { useState } from "react";
import { Outlet, Link,useNavigate } from 'react-router-dom';
import { styles } from "../styles";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  // Function to handle the click on the "About" link
  const handleAboutClick = () => {
    setActive("About");
    navigate('/');
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleContactClick = () => {
    setActive("Contact");
    navigate('/');
    const ContactSection = document.getElementById("contact");
    if ( ContactSection) {
      ContactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleOngoingInitiativesClick = () => {
    setActive("Ongoing Initiatives");
    navigate('/');
    const OngoingInitiativesSection = document.getElementById("Ongoing Initiatives");
    if ( OngoingInitiativesSection) {
      OngoingInitiativesSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between item-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex intems-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex pt-1">
            Ecell <span className="sm:block hidden"></span>
          </p>
        </Link>

        {/* Desktop Navigation */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          <li
            className={`${active === "About" ? "text-white" : "text-secondary"} hover:text-white text-[18px] front-medium cursor-pointer`}
            onClick={handleAboutClick}
          >
            <a href="#about">About</a>
          </li>
          {/* Ongoing Initiatives */}
          <li
            className={`${active === "Ongoing Initiatives" ? "text-white" : "text-secondary"} hover:text-white text-[18px] front-medium cursor-pointer`}
            onClick={handleOngoingInitiativesClick}
          >
            <a href="#work">Ongoing Initiatives</a>
          </li>
          {/* Contact */}
          <li
            className={`${active === "Contact" ? "text-white" : "text-secondary"} hover:text-white text-[18px] front-medium cursor-pointer`}
            onClick={handleContactClick}
          >
            <a href="#contact">Contact</a>
          </li>
          {/* Archives */}
          <li
            className={`${active === "Archives" ? "text-white" : "text-secondary"} hover:text-white text-[18px] front-medium cursor-pointer`}
            onClick={() => setActive("Archives")}
          >
            <Link to="/archives">Archives</Link>
          </li>
          {/* Team */}
          <li
            className={`${active === "Team" ? "text-white" : "text-secondary"} hover:text-white text-[18px] front-medium cursor-pointer`}
            onClick={() => setActive("Team")}
          >
            <Link to="/team">Team</Link>
          </li>
        </ul>

        {/* Mobile Navigation */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {/* ... Repeat for mobile links */}
              {/* About */}
              <li
                className={`${active === "About" ? "text-white" : "text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`}
                onClick={handleAboutClick}
              >
                <a href="#about">About</a>
              </li>
              {/* Ongoing Initiatives */}
              <li
                className={`${active === "Ongoing Initiatives" ? "text-white" : "text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`}
                onClick={handleOngoingInitiativesClick}
              >
                <a href="#work">Ongoing Initiatives</a>
              </li>
              {/* Contact */}
              <li
                className={`${active === "Contact" ? "text-white" : "text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`}
                onClick={handleContactClick}
              >
                <a href="#contact">Contact</a>
              </li>
              {/* Archives */}
              <li
                className={`${active === "Archives" ? "text-white" : "text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`}
                onClick={() => {
                  setToggle(false);
                  setActive("Archives");
                }}
              >
                <Link to="/archives">Archives</Link>
              </li>
              {/* Team */}
              <li
                className={`${active === "Team" ? "text-white" : "text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive("Team");
                }}
              >
                <Link to="/team">Team</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Outlet/>
    </nav>
  );
};

export default Navbar;
