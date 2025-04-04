import React from 'react'
import { useState, useEffect } from "react";

const navbarLinks = [
    {
        id: 1,
        title: "Home",
        link: "/",
    },
    {
        id: 2,
        title: "Properties",
        link: "/",
    },
    {
        id: 3,
        title: "Contact",
        link: "/",
    },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full ${
        scrolled
          ? "fixed top-0 left-0 bg-[rgb(25,101,30)] shadow-md"
          : "absolute top-0 left-0 bg-transparent"
      } z-2 transition-all duration-300 ease-in-out`}
    >
      <nav className="flex justify-between py-5 px-4 items-center text-lg md:text-l">
        <h1 className="text-sm md:text-2xl font-bold text-white"
        >
          Logo
        </h1>
        <ul className="flex gap-6 text-[22px] font-medium">
          {navbarLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.link}
                className="text-white hover:bg-gray-400/30 p-4"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};


export default Navbar
