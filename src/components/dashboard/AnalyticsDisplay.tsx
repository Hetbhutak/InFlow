import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  Bus,
  Users,
  Route,
  Clock,
  TrendingUp,
  Activity,
  MapPin,
} from "lucide-react";
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

const AnalyticsDisplay = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState("today");
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading data
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

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
    <Card className="w-full bg-[hsl(var(--dark-bg-secondary))] border-[hsl(var(--dark-border-subtle))] shadow-md">
      <CardHeader className="pb-2">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <CardTitle className="text-xl font-bold text-[hsl(var(--dark-text-primary))]">
            <span className="gradient-text">System Analytics</span>
          </CardTitle>
          <div className="flex items-center gap-4">
            <Select
              value={selectedTimeframe}
              onValueChange={setSelectedTimeframe}
            >
              <SelectTrigger className="w-[180px] bg-[hsl(var(--dark-bg-primary))] border-[hsl(var(--dark-border-subtle))]">
                <SelectValue placeholder="Select timeframe" />
              </SelectTrigger>
              <SelectContent className="bg-[hsl(var(--dark-bg-secondary))] border-[hsl(var(--dark-border-subtle))]">
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="year">This Year</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6 bg-[hsl(var(--dark-bg-primary))]">
            <TabsTrigger
              value="overview"
              className="data-[state=active]:bg-[hsl(var(--dark-accent-blue))] data-[state=active]:text-white"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="passengers"
              className="data-[state=active]:bg-[hsl(var(--dark-accent-blue))] data-[state=active]:text-white"
            >
              Passengers
            </TabsTrigger>
            <TabsTrigger
              value="routes"
              className="data-[state=active]:bg-[hsl(var(--dark-accent-blue))] data-[state=active]:text-white"
            >
              Routes
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {[...Array(4)].map((_, i) => (
                  <Card
                    key={i}
                    className="bg-[hsl(var(--dark-bg-primary))] border-[hsl(var(--dark-border-subtle))] h-24 animate-pulse"
                  >
                    <div className="h-full w-full bg-[hsl(var(--dark-border-subtle))] opacity-20"></div>
                  </Card>
                ))}
              </div>
            ) : (
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <AnalyticsCard
                  title="Total Passengers"
                  value="1,248"
                  description="Today's count"
                  icon={<Users className="h-5 w-5" />}
                  trend="up"
                  trendValue="13.2%"
                  delay={0}
                />

                <AnalyticsCard
                  title="Active Buses"
                  value="12"
                  description="Out of 15 total"
                  icon={<Bus className="h-5 w-5" />}
                  trend="neutral"
                  trendValue="Same"
                  delay={1}
                />

                <AnalyticsCard
                  title="Active Routes"
                  value="8"
                  description="Out of 12 routes"
                  icon={<Route className="h-5 w-5" />}
                  trend="down"
                  trendValue="1 less"
                  delay={2}
                />

                <AnalyticsCard
                  title="Avg. Wait Time"
                  value="4.2 min"
                  description="Across all stops"
                  icon={<Clock className="h-5 w-5" />}
                  trend="up"
                  trendValue="0.3 min"
                  delay={3}
                />
              </motion.div>
            )}

            <div className="mt-6">
              <h3 className="text-lg font-medium mb-4 text-[hsl(var(--dark-text-primary))]">
                Passenger Activity
              </h3>
              <div className="h-[300px] bg-[hsl(var(--dark-bg-primary))] rounded-lg border border-[hsl(var(--dark-border-subtle))] p-4 flex items-center justify-center">
                {isLoading ? (
                  <div className="w-full h-full bg-[hsl(var(--dark-border-subtle))] opacity-20 animate-pulse rounded-md"></div>
                ) : (
                  <div className="w-full h-full relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-[hsl(var(--dark-text-secondary))]">
                        Interactive chart will be displayed here
                      </p>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-[150px]">
                      <div className="relative h-full">
                        {[...Array(24)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute bottom-0 bg-[hsl(var(--dark-accent-blue))] rounded-t-sm opacity-70 w-[3.5%]"
                            style={{ left: `${i * 4.16}%` }}
                            initial={{ height: 0 }}
                            animate={{ height: `${Math.random() * 100}%` }}
                            transition={{ duration: 1, delay: i * 0.05 }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="passengers">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <AnalyticsCard
                title="Peak Hours"
                value="7-9 AM, 5-7 PM"
                description="Highest passenger volume"
                icon={<Activity className="h-5 w-5" />}
                delay={0}
              />

              <AnalyticsCard
                title="Busiest Route"
                value="Downtown Express"
                description="Route A1"
                icon={<Route className="h-5 w-5" />}
                delay={1}
              />

              <AnalyticsCard
                title="Passenger Growth"
                value="8.5%"
                description="Month over month"
                icon={<TrendingUp className="h-5 w-5" />}
                trend="up"
                trendValue="2.3%"
                delay={2}
              />
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-medium mb-4 text-[hsl(var(--dark-text-primary))]">
                Passenger Distribution by Route
              </h3>
              <div className="h-[300px] bg-[hsl(var(--dark-bg-primary))] rounded-lg border border-[hsl(var(--dark-border-subtle))] p-4">
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-[hsl(var(--dark-text-secondary))]">
                    Passenger distribution chart will be displayed here
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="routes">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <AnalyticsCard
                title="On-Time Performance"
                value="92.7%"
                description="Across all routes"
                icon={<Clock className="h-5 w-5" />}
                trend="up"
                trendValue="1.5%"
                delay={0}
              />

              <AnalyticsCard
                title="Avg. Speed"
                value="18.5 mph"
                description="During operation hours"
                icon={<Bus className="h-5 w-5" />}
                delay={1}
              />

              <AnalyticsCard
                title="Route Coverage"
                value="87.3 miles"
                description="Total route distance"
                icon={<MapPin className="h-5 w-5" />}
                delay={2}
              />
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-medium mb-4 text-[hsl(var(--dark-text-primary))]">
                Route Performance Comparison
              </h3>
              <div className="h-[300px] bg-[hsl(var(--dark-bg-primary))] rounded-lg border border-[hsl(var(--dark-border-subtle))] p-4">
                <div className="w-full h-full flex items-center justify-center">
                  <p className="text-[hsl(var(--dark-text-secondary))]">
                    Route performance chart will be displayed here
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default AnalyticsDisplay;
