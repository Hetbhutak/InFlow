import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Bus, MapPin, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

interface BusTrackingTileProps {
  title?: string;
  description?: string;
  activeBuses?: number;
  totalBuses?: number;
  onClick?: () => void;
}

const BusTrackingTile = ({
  title = "Bus Tracking",
  description = "Track all buses in real-time",
  activeBuses = 12,
  totalBuses = 15,
  onClick = () => {},
}: BusTrackingTileProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/bus-tracking");
    if (onClick) onClick();
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <Card
      className="w-[380px] h-[280px] cursor-pointer hover:shadow-lg transition-shadow duration-300 bg-[hsl(var(--dark-bg-secondary))] border-[hsl(var(--dark-border-subtle))]"
      onClick={handleClick}
    >
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold text-[hsl(var(--dark-text-primary))]">
            {title}
          </CardTitle>
          <Bus className="h-6 w-6 text-blue-500" />
        </div>
        <p className="text-sm text-[hsl(var(--dark-text-secondary))]">
          {description}
        </p>
      </CardHeader>
      <CardContent>
        <motion.div
          className="mt-2 space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="flex items-center justify-between bg-[hsl(var(--dark-bg-primary))] p-3 rounded-lg"
            variants={itemVariants}
          >
            <div className="flex items-center gap-2">
              <Bus className="h-5 w-5 text-blue-500" />
              <span className="font-medium text-[hsl(var(--dark-text-primary))]">
                Active Buses
              </span>
            </div>
            <span className="text-lg font-bold text-[hsl(var(--dark-text-primary))]">
              {activeBuses}
            </span>
          </motion.div>

          <motion.div
            className="flex items-center justify-between bg-[hsl(var(--dark-bg-primary))] p-3 rounded-lg"
            variants={itemVariants}
          >
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-red-500" />
              <span className="font-medium text-[hsl(var(--dark-text-primary))]">
                Total Buses
              </span>
            </div>
            <span className="text-lg font-bold text-[hsl(var(--dark-text-primary))]">
              {totalBuses}
            </span>
          </motion.div>

          <motion.div
            className="h-2 w-full bg-[hsl(var(--dark-border-subtle))] rounded-full mt-2"
            variants={itemVariants}
          >
            <div
              className="h-2 bg-blue-500 rounded-full"
              style={{ width: `${(activeBuses / totalBuses) * 100}%` }}
            ></div>
          </motion.div>
        </motion.div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-[hsl(var(--dark-accent-blue))] hover:bg-[hsl(var(--dark-accent-blue))/80] text-white">
          View Bus Locations
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BusTrackingTile;
