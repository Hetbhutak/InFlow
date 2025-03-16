import React, { useEffect, useState } from "react";
import { Bus } from "lucide-react";

interface BusAnimationProps {
  color?: string;
  size?: number;
}

const BusAnimation = ({ color = "#3b82f6", size = 32 }: BusAnimationProps) => {
  const [position, setPosition] = useState(0);
  const [visible, setVisible] = useState(false);
  const [yPosition, setYPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Only show bus animation when scrolling
      if (!visible && window.scrollY > 100) {
        setVisible(true);
      }

      // Update Y position based on scroll
      const scrollPercentage =
        window.scrollY / (document.body.scrollHeight - window.innerHeight);
      const newYPosition = 100 + scrollPercentage * 300; // Keep bus between 100px and 400px from top
      setYPosition(newYPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visible]);

  // Reset animation when it completes
  useEffect(() => {
    if (!visible) return;

    const animationDuration = 15000; // 15 seconds
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => setVisible(true), 100);
    }, animationDuration);

    return () => clearInterval(interval);
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="bus-animation"
      style={{
        top: `${yPosition}px`,
        color: color,
      }}
    >
      <div className="relative">
        <Bus size={size} className="animate-float" />
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-10 h-1 bg-blue-500 opacity-30 rounded-full blur-sm animate-pulse-slow"></div>
      </div>
    </div>
  );
};

export default BusAnimation;
