"use client";

import { useState, useEffect } from "react";

const links = [
  {
    name: "home",
    path: "#home",
  },
  {
    name: "services",
    path: "#services",
  },
  {
    name: "resume",
    path: "#resume",
  },
  {
    name: "work",
    path: "#work",
  },
  {
    name: "contact",
    path: "#contact",
  },
];

const Nav = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "resume", "work", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e, path) => {
    e.preventDefault();
    const targetId = path.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <a
            href={link.path}
            key={index}
            onClick={(e) => handleClick(e, link.path)}
            className={`${
              link.name === activeSection && "text-accent border-b-2 border-accent"
            } capitalize font-medium hover:text-accent transition-all cursor-pointer`}
          >
            {link.name}
          </a>
        );
      })}
    </nav>
  );
};

export default Nav;
