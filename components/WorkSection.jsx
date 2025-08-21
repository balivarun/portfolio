"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const WorkSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-12 relative z-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
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
                software engineering, and innovative problem-solving. These will be featured here soon.
              </p>
            </motion.div>
            
            {/* Projects Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { delay: 0.4, duration: 0.6, ease: "easeOut" },
              }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
            >
              {[1, 2, 3].map((item, index) => (
                <motion.div
                  key={item}
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
                  <div className="w-full h-48 bg-gradient-to-br from-accent/20 to-accent/5 rounded-lg mb-6 flex items-center justify-center">
                    <span className="text-white/40 text-sm">Project {item}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                    Coming Soon
                  </h3>
                  <p className="text-white/60 text-sm">
                    Exciting project in development that will showcase cutting-edge technology and innovative solutions.
                  </p>
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