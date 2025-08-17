import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import ServicesSection from "@/components/ServicesSection";
import ResumeSection from "@/components/ResumeSection";
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
                  As a dedicated and ambitious third-year Computer Science and
                  Engineering student, I have honed my skills in various programming
                  languages including Python, frontend, and C++. My academic journey
                  has been complemented by practical experiences, such as developing
                  a dynamic web application for a local business using React.js and
                  Node.js.
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
      <section id="work" className="min-h-screen flex items-center justify-center py-12 relative z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                My <span className="text-accent">Work</span>
              </h2>
              
              <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                I'm currently working on some exciting projects that showcase my skills in web development, 
                software engineering, and innovative problem-solving. These will be featured here soon.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="bg-[#232329] p-8 rounded-xl border border-white/10 hover:border-accent/30 transition-all duration-300 group">
                    <div className="w-full h-48 bg-gradient-to-br from-accent/20 to-accent/5 rounded-lg mb-6 flex items-center justify-center">
                      <span className="text-white/40 text-sm">Project {item}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                      Coming Soon
                    </h3>
                    <p className="text-white/60 text-sm">
                      Exciting project in development that will showcase cutting-edge technology and innovative solutions.
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="mt-12">
                <Button 
                  variant="outline" 
                  className="px-8 py-6 text-lg hover:bg-accent hover:text-primary hover:border-accent transition-all duration-300"
                >
                  View All Projects
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/3 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 relative z-20">
        <ContactSection />
      </section>
    </div>
  );
};

export default Home;
