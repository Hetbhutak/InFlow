import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Users, TrendingUp, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

interface PeopleCountTileProps {
  title?: string;
  description?: string;
  passengerCount?: number;
  dailyAverage?: number;
  onClick?: () => void;
}

const PeopleCountTile = ({
  title = "Passenger Analytics",
  description = "Monitor passenger counts between stops",
  passengerCount = 1248,
  dailyAverage = 1100,
  onClick = () => {},
}: PeopleCountTileProps) => {
  const navigate = useNavigate();
  const percentChange = Math.round(
    ((passengerCount - dailyAverage) / dailyAverage) * 100,
  );
  const isIncrease = percentChange > 0;

  const handleClick = () => {
    navigate("/people-count");
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
          <Users className="h-6 w-6 text-purple-500" />
        </div>
        <p className="text-sm text-[hsl(var(--dark-text-secondary))]">
          {description}
        </p>
      </CardHeader>
      <CardContent>
        <div className="mt-2 space-y-4">
          <div className="flex items-center justify-between bg-[hsl(var(--dark-bg-primary))] p-3 rounded-lg">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-purple-500" />
              <span className="font-medium text-[hsl(var(--dark-text-primary))]">
                Today's Count
              </span>
            </div>
            <motion.span
              className="text-lg font-bold text-[hsl(var(--dark-text-primary))]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {passengerCount}
            </motion.span>
          </div>

          <div className="flex items-center justify-between bg-[hsl(var(--dark-bg-primary))] p-3 rounded-lg">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-500" />
              <span className="font-medium text-[hsl(var(--dark-text-primary))]">
                vs. Daily Avg
              </span>
            </div>
            <span
              className={`text-lg font-bold ${isIncrease ? "text-green-500" : "text-red-500"}`}
            >
              {isIncrease ? "+" : ""}
              {percentChange}%
            </span>
          </div>

          <motion.div
            className="h-2 w-full bg-[hsl(var(--dark-border-subtle))] rounded-full mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.div
              className="h-2 bg-purple-500 rounded-full"
              initial={{ width: 0 }}
              animate={{
                width: `${(passengerCount / (dailyAverage * 1.5)) * 100}%`,
              }}
              transition={{ duration: 0.8, delay: 0.5 }}
            ></motion.div>
          </motion.div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-[hsl(var(--dark-accent-blue))] hover:bg-[hsl(var(--dark-accent-blue))/80] text-white">
          View Passenger Analytics
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PeopleCountTile;
