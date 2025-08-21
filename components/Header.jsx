"use client";

import Link from "next/link";
import { Button } from "./ui/button";

//components file importing
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  const handleHireMeClick = (e) => {
    e.preventDefault();
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="py-12 xl:py-16 text-white">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <Link href="/">
          <h1 className="text-5xl xl:text-6xl font-semibold">
            Varun Bali <span className="text-accent">.</span>
          </h1>
        </Link>

        {/* desktop nav and hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Button onClick={handleHireMeClick} className="hover:scale-105 transition-transform duration-300">
            Hire me
          </Button>
        </div>

        {/* mobile navbar*/}
        <div className="xl:hidden">
          <MobileNav/>
        </div>



      </div>
    </header>
  );
};

export default Header;
