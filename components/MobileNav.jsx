"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState, useEffect } from "react";
import { CiMenuFries } from "react-icons/ci";

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

const MobileNav = () => {
    const [activeSection, setActiveSection] = useState("home");
    const [isOpen, setIsOpen] = useState(false);

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
            setIsOpen(false);
        }
    };

  return <Sheet open={isOpen} onOpenChange={setIsOpen}>
    <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent"/>
    </SheetTrigger>
    <SheetContent className="flex flex-col">
    {/* logo */}
    <div className="mt-32 mb-40 text-center text-2xl">
        <a href="#home" onClick={(e) => handleClick(e, "#home")}>
            <h1 className="text-4xl font-semibold">Varun<span className="text-accent">.</span></h1>
        </a>
    </div>
    {/* Nav */}
    <nav className="flex flex-col justify-center items-center gap-8">
        {links.map((link,index)=>{
            return (
                <a 
                    href={link.path} 
                    key={index} 
                    onClick={(e) => handleClick(e, link.path)}
                    className={`${link.name === activeSection && "text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent transition-all cursor-pointer`}
                >
                    {link.name}
                </a>
            )
        })}
    </nav>
    </SheetContent>
  </Sheet>;
};

export default MobileNav;
