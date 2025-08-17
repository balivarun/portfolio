"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    tittle: "Phone",
    description: "(+91) 9996094192",
  },
  {
    icon: <FaEnvelope />,
    tittle: "Email",
    description: "varunbali47@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    tittle: "Address",
    description: "34/23 Civl line, Ambala City",
  },
];

import { motion } from "framer-motion";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
            Get In <span className="text-accent">Touch</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Ready to work together? Let's discuss your next project and bring your ideas to life
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.4, duration: 0.6, ease: "easeOut" },
          }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-12"
        >
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { delay: 0.6, duration: 0.5 },
              }}
              className="bg-[#232329] p-8 rounded-2xl border border-white/10"
            >
              <h3 className="text-3xl font-bold text-accent mb-4">Let's work together</h3>
              <p className="text-white/60 mb-8 leading-relaxed">
                With a passion for creativity and a commitment to excellence, I
                have undertaken diverse projects. Each piece reflects my
                dedication to quality and my ability to deliver innovative
                solutions.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input 
                    type="text" 
                    name="firstName"
                    placeholder="First Name" 
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="bg-[#27272c] border-white/10 focus:border-accent transition-colors"
                  />
                  <Input 
                    type="text" 
                    name="lastName"
                    placeholder="Last Name" 
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="bg-[#27272c] border-white/10 focus:border-accent transition-colors"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input 
                    type="email" 
                    name="email"
                    placeholder="Email Address" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-[#27272c] border-white/10 focus:border-accent transition-colors"
                  />
                  <Input 
                    type="tel" 
                    name="phone"
                    placeholder="Phone Number" 
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="bg-[#27272c] border-white/10 focus:border-accent transition-colors"
                  />
                </div>
                <Textarea 
                  name="message"
                  className="h-32 bg-[#27272c] border-white/10 focus:border-accent transition-colors resize-none" 
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
                
                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="text-accent text-sm font-medium bg-accent/10 p-3 rounded-lg border border-accent/20">
                    ✓ Message sent successfully! I'll get back to you soon.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="text-red-400 text-sm font-medium bg-red-400/10 p-3 rounded-lg border border-red-400/20">
                    ✗ Failed to send message. Please try again or email me directly at varunbali47@gmail.com
                  </div>
                )}
                
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-8 py-6 bg-accent hover:bg-accent/90 text-primary font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </Button>
              </form>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { delay: 0.8, duration: 0.5 },
              }}
              className="space-y-8"
            >
              {info.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 1 + index * 0.1, duration: 0.5 },
                  }}
                  className="group flex items-center gap-6 p-6 bg-[#232329] rounded-xl border border-white/10 hover:border-accent/30 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-accent/10 text-accent rounded-xl flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-all duration-300">
                    <div className="text-2xl">{item.icon}</div>
                  </div>
                  <div>
                    <p className="text-white/60 font-medium mb-1">{item.tittle}</p>
                    <h3 className="text-white font-semibold group-hover:text-accent transition-colors">
                      {item.description}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;