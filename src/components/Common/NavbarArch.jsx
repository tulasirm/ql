'use client';
import React, { useRef, useEffect } from "react";
import { Link } from "react-scroll";
//= Scripts
import { handleDropdown, handleMobileDropdown } from "@/common/navbar";
//= Static Data
import appData from "@/data/app.json";

function NavbarArch({ theme }) {
  const navbarRef = useRef();

  function handleScroll() {
    if (navbarRef.current) {
      if (window.scrollY > 300) {
        navbarRef.current.classList.add("nav-scroll");
      } else {
        navbarRef.current.classList.remove("nav-scroll");
      }
    }
  }

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
  <nav className="navbar navbar-expand-lg navbar-black-bg" ref={navbarRef} style={{ backgroundColor: '#111', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
      <div className="container">
        <a className="logo" href="/">
          <img src={appData.lightLogo} alt="logo" style={{ filter: 'brightness(0) invert(1)' }} />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          onClick={handleMobileDropdown}
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                data-scroll-nav="0"
              >
                Home
              </span>
              <div className="dropdown-menu">
                <a
                  className="dropdown-item"
                  href={`/homepage/home1-dark`}
                >
                  Main Home
                </a>
                <a
                  className="dropdown-item"
                  href={`/homepage/home2-dark`}
                >
                  Creative Agency
                </a>
                <a
                  className="dropdown-item"
                  href={`/homepage/home5-dark`}
                >
                  Digital Agency
                </a>
                <a
                  className="dropdown-item"
                  href={`/homepage/home4-dark`}
                >
                  Business One Page
                </a>
                <a
                  className="dropdown-item"
                  href={`/homepage/home3-dark`}
                >
                  Corporate Business
                </a>
                <a
                  className="dropdown-item"
                  href={`/homepage/home6-dark`}
                >
                  Modern Agency
                </a>
                <a
                  className="dropdown-item"
                  href={`/homepage/home7-dark`}
                >
                  Freelancer
                </a>
                <a
                  className="dropdown-item"
                  href={`/homepage/home8-dark`}
                >
                  Architecture
                </a>
              </div>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="po-arch"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Works
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="team-arch"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Team
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="testimonials"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Testimonials
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="blogs"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarArch;
