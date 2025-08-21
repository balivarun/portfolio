import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import ServicesSection from "@/components/ServicesSection";
import ResumeSection from "@/components/ResumeSection";
import WorkSection from "@/components/WorkSection";
import ContactSection from "@/components/ContactSection";
import AnimatedBackground from "@/components/AnimatedBackground";
import TypewriterEffect from "@/components/TypewriterEffect";
import FloatingShapes from "@/components/FloatingShapes";
import ScrollProgress from "@/components/ScrollProgress";

const Home = () => {
  return (
    <div className="overflow-x-hidden relative">
      {/* Dynamic Components */}
      <AnimatedBackground />
      <FloatingShapes />
      <ScrollProgress />

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center relative z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 xl:gap-12 items-center min-h-[80vh]">
            {/* Content Area */}
            <div className="xl:col-span-7 text-center xl:text-left order-2 xl:order-1">
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
                  <TypewriterEffect
                    texts={["Software Developer", "Full Stack Developer", "Problem Solver", "Tech Innovator"]}
                    className="text-accent font-medium"
                  />
                </div>

                <h1 className="text-4xl sm:text-5xl xl:text-7xl font-bold leading-tight">
                  Hello I'm{" "}
                  <br className="hidden sm:block" />
                  <span className="gradient-text">
                    Varun Bali
                  </span>
                </h1>

                <p className="text-lg text-white/80 max-w-[600px] leading-relaxed mx-auto xl:mx-0">
                  As a dedicated and motivated Computer Science Engineering student, I aim to leverage my strong foundation in
programming, data structures, and software development to contribute to innovative projects.Committed to
continuous learning, problem-solving, and collaborating within dynamic teams to develop impactful technology
solutions.
                </p>

                {/* CTA and Social */}
                <div className="flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-6 pt-4">
                  <a
                    href="/Varun_Bali_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      className="uppercase flex items-center gap-3 px-8 py-6 hover:bg-accent hover:text-primary hover:border-accent transition-all duration-300"
                    >
                      <span>Download CV</span>
                      <FiDownload className="text-xl" />
                    </Button>
                  </a>

                  <Social
                    containerStyles="flex gap-4"
                    iconStyles="w-12 h-12 border-2 border-accent/30 rounded-full flex justify-center items-center text-accent hover:bg-accent hover:text-primary hover:border-accent transition-all duration-300 hover:scale-110"
                  />
                </div>
              </div>
            </div>

            {/* Photo Area */}
            <div className="xl:col-span-5 order-1 xl:order-2 flex justify-center xl:justify-end">
              <div className="relative">
                <Photo />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 relative z-20">
        <ServicesSection />
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-12 relative z-20">
        <ResumeSection />
      </section>

      {/* Work Section */}
      <section id="work" className="py-12 relative z-20">
        <WorkSection />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 relative z-20">
        <ContactSection />
      </section>
    </div>
  );
};

export default Home;
