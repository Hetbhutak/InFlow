import React, { useEffect, useState } from "react";
import { Bus } from "lucide-react";
import { motion } from "framer-motion";

interface BusAnimationProps {
  color?: string;
  size?: number;
}

const BusAnimation = ({ color = "#3b82f6", size = 32 }: BusAnimationProps) => {
  const [yPosition, setYPosition] = useState(100);
  const [xPosition, setXPosition] = useState(50);

  useEffect(() => {
    const handleScroll = () => {
      // Update Y position based on scroll
      const scrollPercentage =
        window.scrollY / (document.body.scrollHeight - window.innerHeight);
      const newYPosition = 100 + scrollPercentage * 300; // Keep bus between 100px and 400px from top

      // Make the bus move horizontally too based on scroll
      const newXPosition = 50 + Math.sin(scrollPercentage * Math.PI * 2) * 30;

      setYPosition(newYPosition);
      setXPosition(newXPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="bus-animation"
      style={{
        top: `${yPosition}px`,
        left: `${xPosition}%`,
        color: color,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <motion.div
          whileHover={{ scale: 1.2, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Bus size={size} className="animate-float" />
        </motion.div>
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-blue-500 opacity-30 rounded-full blur-md animate-pulse-slow"></div>
        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-purple-500 opacity-20 rounded-full blur-lg animate-pulse-slow"></div>
      </div>
    </motion.div>
  );
};

export default BusAnimation;
