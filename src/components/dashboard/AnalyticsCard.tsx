import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { motion } from "framer-motion";

interface AnalyticsCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon: React.ReactNode;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
  delay?: number;
}

const AnalyticsCard = ({
  title,
  value,
  description,
  icon,
  trend = "neutral",
  trendValue,
  delay = 0,
}: AnalyticsCardProps) => {
  const trendColor =
    trend === "up"
      ? "text-green-500"
      : trend === "down"
        ? "text-red-500"
        : "text-blue-500";
  const trendIcon = trend === "up" ? "↑" : trend === "down" ? "↓" : "→";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
    >
      <Card className="bg-[hsl(var(--dark-bg-secondary))] border-[hsl(var(--dark-border-subtle))] overflow-hidden">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-md font-medium text-[hsl(var(--dark-text-secondary))]">
              {title}
            </CardTitle>
            <div className="text-[hsl(var(--dark-accent-blue))]">{icon}</div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col">
            <div className="text-2xl font-bold text-[hsl(var(--dark-text-primary))]">
              {value}
            </div>
            {description && (
              <div className="flex items-center mt-1">
                <p className="text-xs text-[hsl(var(--dark-text-secondary))]">
                  {description}
                </p>
                {trendValue && (
                  <span
                    className={`ml-2 text-xs ${trendColor} flex items-center`}
                  >
                    {trendIcon} {trendValue}
                  </span>
                )}
              </div>
            )}
          </div>
        </CardContent>
        <div className="h-1 w-full bg-[hsl(var(--dark-border-subtle))]">
          <motion.div
            className="h-1 bg-[hsl(var(--dark-accent-blue))]"
            initial={{ width: 0 }}
            animate={{ width: "60%" }}
            transition={{ duration: 1, delay: delay * 0.1 + 0.3 }}
          />
        </div>
      </Card>
    </motion.div>
  );
};

export default AnalyticsCard;
