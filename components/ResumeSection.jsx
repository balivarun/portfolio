"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

//about data
const about = {
  tittle: "About me",
  description:
    "I am a passionate and dedicated Computer Science Engineering student at Chitkara University with a deep enthusiasm for technology and innovation. My journey in the world of programming began with curiosity and has evolved into a strong foundation across multiple technologies including Python, Java, C++, and modern web development frameworks. I thrive on solving complex problems and building innovative solutions that make a real-world impact. With hands-on experience in full-stack development, database management, and software engineering principles, I continuously seek opportunities to learn, grow, and contribute to cutting-edge projects. My goal is to leverage my technical skills and creative mindset to develop solutions that bridge the gap between technology and human needs.",
  info: [
    {
      fieldName: "Name",
      FieldValue: "Varun Bali",
    },
    {
      fieldName: "Phone",
      FieldValue: "(+91) 9996094192",
    },
    {
      fieldName: "Nationality",
      FieldValue: "Indian",
    },
    {
      fieldName: "Email",
      FieldValue: "varubali345@gmail.com",
    },
    {
      fieldName: "Freelance",
      FieldValue: "Available",
    },
  ],
};

// education data
const education = {
  tittle: "My Education",
  description:"My coursework has provided a robust foundation in core computer science principles, including algorithms, data structures, software engineering, and database management.",
  items: [
    {
      college: "Chitkara University",
      description: "Doing BE in computer science",
      duration: "2022-2026",
    },
    {
      college: "P.K.R Jain Senior Secondary Public School",
      description: "12th and 11th from this School",
      duration: "2019-2022",
    },
    {
      college: "St. Joseph School, Ambala City",
      description: "Upto 10th",
      duration: "2007-20019",
    },
  ],
};

//skills data
const skill = {
  tittle: "My Skills",
  description:
    "As a computer science student, I have honed a diverse set of technical and soft skills through academic projects and hands-on experience. In web development, I am proficient in HTML, CSS, and JavaScript, and adept at using frameworks like React.js to create responsive and dynamic web applications",
  skilllist: [
    {
      icon: <FaHtml5 />,
      name: "Html 5",
    },
    {
      icon: <FaCss3 />,
      name: "Css",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";

const ResumeSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-12 w-full">
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
            My <span className="text-accent">Resume</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Discover my educational background, technical skills, and personal information
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.4, duration: 0.6, ease: "easeOut" },
          }}
        >
          <Tabs
            defaultValue="education"
            className="grid grid-cols-1 lg:grid-cols-4 gap-8"
          >
            {/* Tab Navigation */}
            <div className="lg:col-span-1">
              <TabsList className="flex lg:flex-col w-full gap-4 bg-transparent">
                <TabsTrigger 
                  value="education" 
                  className="w-full justify-start text-left p-4 bg-[#232329] border border-white/10 hover:border-accent/30 data-[state=active]:bg-accent data-[state=active]:text-primary transition-all duration-300"
                >
                  Education
                </TabsTrigger>
                <TabsTrigger 
                  value="skill" 
                  className="w-full justify-start text-left p-4 bg-[#232329] border border-white/10 hover:border-accent/30 data-[state=active]:bg-accent data-[state=active]:text-primary transition-all duration-300"
                >
                  Skills
                </TabsTrigger>
                <TabsTrigger 
                  value="about" 
                  className="w-full justify-start text-left p-4 bg-[#232329] border border-white/10 hover:border-accent/30 data-[state=active]:bg-accent data-[state=active]:text-primary transition-all duration-300"
                >
                  About me
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Tab Content */}
            <div className="lg:col-span-3">
              {/* Education */}
              <TabsContent value="education" className="w-full mt-0">
                <div className="space-y-8">
                  <div className="text-center lg:text-left">
                    <h3 className="text-3xl lg:text-4xl font-bold mb-4">{education.tittle}</h3>
                    <p className="text-white/60 text-lg leading-relaxed">{education.description}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {education.items.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          transition: { delay: 0.1 * index, duration: 0.5 },
                        }}
                        className="bg-[#232329] p-6 rounded-xl border border-white/10 hover:border-accent/30 transition-all duration-300 group"
                      >
                        <span className="text-accent font-semibold">{item.duration}</span>
                        <h4 className="text-xl font-bold mt-2 mb-3 group-hover:text-accent transition-colors">
                          {item.description}
                        </h4>
                        <div className="flex items-center gap-3">
                          <span className="w-2 h-2 rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.college}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Skills */}
              <TabsContent value="skill" className="w-full mt-0">
                <div className="space-y-8">
                  <div className="text-center lg:text-left">
                    <h3 className="text-3xl lg:text-4xl font-bold mb-4">{skill.tittle}</h3>
                    <p className="text-white/60 text-lg leading-relaxed">{skill.description}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    {skill.skilllist.map((skillItem, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                          transition: { delay: 0.1 * index, duration: 0.5 },
                        }}
                      >
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-32 bg-[#232329] rounded-xl flex justify-center items-center group border border-white/10 hover:border-accent/30 transition-all duration-300 hover:scale-105">
                              <div className="text-4xl lg:text-5xl group-hover:text-accent transition-all duration-300">
                                {skillItem.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize font-medium">{skillItem.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* About */}
              <TabsContent value="about" className="w-full mt-0">
                <div className="space-y-8">
                  <div className="text-center lg:text-left">
                    <h3 className="text-3xl lg:text-4xl font-bold mb-4">{about.tittle}</h3>
                    <p className="text-white/60 text-lg leading-relaxed">{about.description}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {about.info.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{
                          opacity: 1,
                          x: 0,
                          transition: { delay: 0.1 * index, duration: 0.5 },
                        }}
                        className="flex items-center gap-4 p-4 bg-[#232329] rounded-xl border border-white/10 hover:border-accent/30 transition-all duration-300"
                      >
                        <span className="text-white/60 font-medium min-w-[100px]">{item.fieldName}:</span>
                        <span className="text-white font-semibold">{item.FieldValue}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;