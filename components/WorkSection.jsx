"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

// Projects data
const projects = [
  {
    id: 1,
    title: "Task Management System",
    description: "Developed a comprehensive task management application utilizing modern web technologies. Implemented RESTful API architecture with MongoDB database integration to ensure scalable data persistence and efficient CRUD operations. Leveraged Vite build tool for optimized development workflow with hot module replacement, while maintaining code quality through ESLint configuration and comprehensive testing framework using Gradle.",
    techStack: "React 19, TypeScript, Spring Boot 3.5, Java 17, MongoDB, REST API, Vite, Gradle, ESLint, Tailwind CSS, CORS, Microservices",
    image: "/todo.avif",
    status: "completed"
  },
  {
    id: 2,
    title: "YouTube Automation with Hand Gestures",
    description: "Developed an intelligent YouTube automation system using computer vision and machine learning. Implemented hand gesture recognition to control video playback including pause/resume functionality, 10-second forward/backward seeking, and volume control. The system uses OpenCV for real-time hand detection, NumPy for efficient data processing, and PyInput for seamless system integration.",
    techStack: "Python, OpenCV, PyInput, NumPy, Computer Vision, Machine Learning, Hand Gesture Recognition",
    image: "/youtube_automation.webp",
    status: "completed"
  },
  {
    id: 3,
    title: "Rock Paper Scissors Game",
    description: "Developed a classic Rock Paper Scissors game using Python with an interactive command-line interface. Implemented game logic with random library for computer choices, user input validation, and dynamic score tracking system. Features include real-time score updates, game statistics, and multiple rounds gameplay with clean user experience and robust error handling.",
    techStack: "Python, Random Library, Command Line Interface, Game Logic, Score Tracking, Input Validation",
    image: "/rock_paper.png",
    status: "completed"
  }
];

const WorkSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-12 relative z-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-8">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.2, duration: 0.5, ease: "easeOut" },
              }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                My <span className="text-accent">Work</span>
              </h2>

              <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                I'm currently working on some exciting projects that showcase my skills in web development,
                software engineering, and innovative problem-solving. They are features as.
              </p>
            </motion.div>

            {/* Projects Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 0.4, duration: 0.6, ease: "easeOut" },
              }}
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12 mt-12"
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
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
                  className="bg-[#232329] p-8 rounded-xl border border-white/10 hover:border-accent/30 transition-all duration-300 group"
                >
                  <div className="w-full h-56 bg-gradient-to-br from-accent/20 to-accent/5 rounded-lg mb-6 flex items-center justify-center overflow-hidden">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={300}
                        height={200}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <span className="text-white/40 text-sm">Project {project.id}</span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-sm mb-4 line-clamp-4">
                    {project.description}
                  </p>
                  {project.techStack && (
                    <div className="mt-4">
                      <p className="text-accent text-xs font-semibold mb-2">Tech Stack:</p>
                      <p className="text-white/50 text-xs leading-relaxed">
                        {project.techStack}
                      </p>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.8, duration: 0.5, ease: "easeOut" },
              }}
              className="mt-12"
            >
              <Button
                variant="outline"
                className="px-8 py-6 text-lg hover:bg-accent hover:text-primary hover:border-accent transition-all duration-300"
              >
                View All Projects
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/3 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default WorkSection;