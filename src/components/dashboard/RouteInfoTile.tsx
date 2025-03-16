import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { MapPin, Route, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

interface RouteInfoTileProps {
  title?: string;
  description?: string;
  routeCount?: number;
  activeRoutes?: number;
  onClick?: () => void;
}

const RouteInfoTile = ({
  title = "Route Information",
  description = "View and manage all bus routes",
  routeCount = 12,
  activeRoutes = 8,
  onClick = () => {},
}: RouteInfoTileProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/route-information");
    if (onClick) onClick();
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
          <Route className="h-6 w-6 text-green-500" />
        </div>
        <p className="text-sm text-[hsl(var(--dark-text-secondary))]">
          {description}
        </p>
      </CardHeader>
      <CardContent>
        <div className="mt-2 space-y-4">
          <motion.div
            className="flex items-center justify-between bg-[hsl(var(--dark-bg-primary))] p-3 rounded-lg"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-green-500" />
              <span className="font-medium text-[hsl(var(--dark-text-primary))]">
                Total Routes
              </span>
            </div>
            <span className="text-lg font-bold text-[hsl(var(--dark-text-primary))]">
              {routeCount}
            </span>
          </motion.div>

          <motion.div
            className="flex items-center justify-between bg-[hsl(var(--dark-bg-primary))] p-3 rounded-lg"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <div className="flex items-center gap-2">
              <Info className="h-5 w-5 text-green-500" />
              <span className="font-medium text-[hsl(var(--dark-text-primary))]">
                Active Routes
              </span>
            </div>
            <span className="text-lg font-bold text-[hsl(var(--dark-text-primary))]">
              {activeRoutes}
            </span>
          </motion.div>

          <motion.div
            className="h-2 w-full bg-[hsl(var(--dark-border-subtle))] rounded-full mt-2"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ originX: 0 }}
          >
            <motion.div
              className="h-2 bg-green-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${(activeRoutes / routeCount) * 100}%` }}
              transition={{ duration: 0.8, delay: 0.4 }}
            ></motion.div>
          </motion.div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-[hsl(var(--dark-accent-blue))] hover:bg-[hsl(var(--dark-accent-blue))/80] text-white">
          View Route Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RouteInfoTile;
