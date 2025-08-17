"use client";

import { motion } from "framer-motion";

const FloatingShapes = () => {
  const shapes = [
    {
      id: 1,
      type: "circle",
      size: "w-20 h-20",
      position: "top-20 left-10",
      delay: 0,
      duration: 20,
    },
    {
      id: 2,
      type: "square",
      size: "w-16 h-16",
      position: "top-40 right-20",
      delay: 2,
      duration: 25,
    },
    {
      id: 3,
      type: "triangle",
      size: "w-12 h-12",
      position: "bottom-32 left-1/4",
      delay: 4,
      duration: 18,
    },
    {
      id: 4,
      type: "circle",
      size: "w-8 h-8",
      position: "top-1/3 right-1/3",
      delay: 1,
      duration: 22,
    },
    {
      id: 5,
      type: "square",
      size: "w-6 h-6",
      position: "bottom-20 right-10",
      delay: 3,
      duration: 28,
    },
  ];

  const ShapeComponent = ({ shape }) => {
    const baseClasses = `absolute ${shape.position} ${shape.size} opacity-10`;
    
    let shapeElement;
    if (shape.type === "circle") {
      shapeElement = (
        <div className={`${baseClasses} rounded-full bg-gradient-to-br from-accent to-accent/50`} />
      );
    } else if (shape.type === "square") {
      shapeElement = (
        <div className={`${baseClasses} bg-gradient-to-br from-accent/30 to-accent/10 rotate-45`} />
      );
    } else if (shape.type === "triangle") {
      shapeElement = (
        <div 
          className={`${baseClasses} bg-gradient-to-br from-accent/20 to-accent/5`}
          style={{
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          }}
        />
      );
    }

    return (
      <motion.div
        initial={{ y: 0, rotate: 0, scale: 0.8 }}
        animate={{
          y: [-20, 20, -20],
          rotate: [0, 180, 360],
          scale: [0.8, 1.2, 0.8],
        }}
        transition={{
          duration: shape.duration,
          delay: shape.delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none"
      >
        {shapeElement}
      </motion.div>
    );
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
      {shapes.map((shape) => (
        <ShapeComponent key={shape.id} shape={shape} />
      ))}
    </div>
  );
};

export default FloatingShapes;