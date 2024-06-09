"use client";

import { Description } from "@radix-ui/react-dialog";
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
    "Highly motivated BE CSE student with a strong foundation in computer science. Preparing for competitive examssuch as GATE, demonstrating exceptional problem-solving skills and analytical thinking.",
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
} from "@/components/ui/Tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl-py-8"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="education"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skill">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* education */}
            <TabsContent value="education" className="w-full">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{education.tittle}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                        {education.items.map((item,index)=>{
                            return (
                                <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                    <span className="text-accent">{item.duration}</span>
                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.description}</h3>
                                    <div className="flex items-center gap-3">
                                        {/* dot */}
                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                        <p className="text-white/60">{item.college}</p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </ScrollArea>
                </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skill" className="w-full h-full">
                <div className="flex flex-col gap-[30px]">
                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                        <h3 className="text-4xl font-bold">{skill.tittle}</h3>
                        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skill.description}</p>
                    </div>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                        {skill.skilllist.map((skill,index)=>{
                            return <li key={index}>
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p className="capitalize">{skill.name}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </li>
                        })}
                    </ul>
                </div>
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
                <div className="flex flex-col gap-[30px]">
                    <h3 className="text-4xl font-bold">{about.tittle}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                        {about.info.map((item,index)=>{
                            return <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                <span className="text-white/60">{item.fieldName}</span>
                                <span className="text-xl">{item.FieldValue}</span>

                            </li>
                        })}
                    </ul>
                </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
