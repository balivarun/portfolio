"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { Description } from "@radix-ui/react-dialog";
import { Herr_Von_Muellerhoff } from "next/font/google";

// contains my information.
const services = [
  {
    num: "01",
    tittle: "Web Development",
    description:
      "Web development involves creating and maintaining websites and web applications. It covers front-end development, which uses HTML, CSS, and JavaScript to build user interfaces, and back-end development, which involves server-side logic with languages like PHP and Python, and databases like MySQL. Full-stack development combines both front-end and back-end skills. Web design focuses on the visual and interactive aspects, ensuring websites are user-friendly and responsive across various devices",
    href: "",
  },
  {
    num: "02",
    tittle: "Database Management",
    description:
      "Designing, implementing, and managing databases using SQL and NoSQL databases like MySQL, PostgreSQL, and MongoDB",
    href: "",
  },
  {
    num: "03",
    tittle: "Software Development",
    description:
      "Creating and maintaining software applications using languages like Java, Python, C++, and others",
    href: "",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div key={index} className="flex-1 flex flex-col gap-5 group">
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:rotate-45">
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* tittlr */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.tittle}</h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* bordeer */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
