"use client";

import { BsArrowDownRight } from "react-icons/bs";

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
      "Comprehensive database solutions including design, implementation, optimization, and maintenance. Expertise in both SQL databases (MySQL, PostgreSQL, SQLite) and NoSQL databases (MongoDB, Firebase). Proficient in database modeling, query optimization, indexing strategies, data migration, backup and recovery procedures. Experience with database security, user management, and performance tuning. Skilled in creating efficient database schemas, writing complex queries, stored procedures, and implementing database-driven applications with proper normalization and relationships.",
    href: "",
  },
  {
    num: "03",
    tittle: "Software Development",
    description:
      "End-to-end software development using modern programming languages and frameworks. Proficient in Python for data analysis, automation, and backend development, Java for enterprise applications and Android development, C++ for system programming and performance-critical applications. Experience with software design patterns, algorithms, data structures, and object-oriented programming principles. Skilled in version control with Git, testing methodologies, debugging, code review processes, and agile development practices. Capable of developing desktop applications, mobile apps, web services, and APIs with clean, maintainable, and scalable code.",
    href: "",
  },
];

import { motion } from "framer-motion";

const ServicesSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center py-12 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.2, duration: 0.5, ease: "easeOut" },
          }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            My <span className="text-accent">Services</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            I provide a comprehensive range of development services to help bring your ideas to life
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.4, duration: 0.6, ease: "easeOut" },
          }}
          className="grid grid-cols-1 gap-6"
        >
          {services.map((service, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { 
                    delay: 0.6 + index * 0.1, 
                    duration: 0.5, 
                    ease: "easeOut" 
                  },
                }}
                className="group relative bg-[#232329] rounded-xl p-8 hover:bg-[#2a2a32] transition-all duration-500 border border-white/10 hover:border-accent/30"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8">
                  {/* Left side - Number and Title */}
                  <div className="flex-shrink-0 lg:w-80">
                    <div className="flex items-center gap-6 mb-4 lg:mb-0">
                      <div className="text-5xl lg:text-6xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                        {service.num}
                      </div>
                      <div>
                        <h3 className="text-2xl lg:text-3xl font-bold leading-tight text-white group-hover:text-accent transition-all duration-500">
                          {service.tittle}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Right side - Description and Arrow */}
                  <div className="flex-grow flex items-center justify-between gap-6">
                    {/* Service Description */}
                    <p className="text-white/60 leading-relaxed group-hover:text-white/80 transition-all duration-500 text-base lg:text-lg">
                      {service.description}
                    </p>

                    {/* Arrow */}
                    <div className="flex-shrink-0 w-14 h-14 rounded-full bg-white/10 group-hover:bg-accent transition-all duration-500 flex justify-center items-center group-hover:rotate-45 cursor-pointer">
                      <BsArrowDownRight className="text-white group-hover:text-primary text-xl transition-colors duration-500" />
                    </div>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;