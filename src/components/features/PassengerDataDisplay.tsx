import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { motion } from "framer-motion";
import { Users, TrendingUp, Clock } from "lucide-react";

const PassengerDataDisplay = () => {
  // Mock data for passenger counts by hour
  const hourlyData = [
    { hour: "6 AM", count: 120 },
    { hour: "7 AM", count: 350 },
    { hour: "8 AM", count: 580 },
    { hour: "9 AM", count: 420 },
    { hour: "10 AM", count: 280 },
    { hour: "11 AM", count: 220 },
    { hour: "12 PM", count: 310 },
    { hour: "1 PM", count: 340 },
    { hour: "2 PM", count: 290 },
    { hour: "3 PM", count: 320 },
    { hour: "4 PM", count: 490 },
    { hour: "5 PM", count: 570 },
    { hour: "6 PM", count: 430 },
    { hour: "7 PM", count: 250 },
    { hour: "8 PM", count: 180 },
    { hour: "9 PM", count: 120 },
  ];

  const maxCount = Math.max(...hourlyData.map((data) => data.count));
  const totalCount = hourlyData.reduce((sum, data) => sum + data.count, 0);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="gradient-text">
              Passenger Count by Hour
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-end space-x-2">
              {hourlyData.map((data, index) => {
                const height = (data.count / maxCount) * 100;
                return (
                  <motion.div
                    key={index}
                    className="flex-1 flex flex-col items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.02 }}
                  >
                    <div className="w-full group relative">
                      <motion.div
                        className="bg-[hsl(var(--dark-accent-blue))] rounded-t w-full transition-all hover:bg-[hsl(var(--dark-accent-blue))/80]"
                        style={{ height: `${height}%` }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 bg-[hsl(var(--dark-bg-secondary))] text-[hsl(var(--dark-text-primary))] text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-[hsl(var(--dark-border-subtle))]">
                          {data.count} passengers
                        </div>
                      </motion.div>
                    </div>
                    <div className="text-xs mt-1 text-[hsl(var(--dark-text-secondary))]">
                      {data.hour}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <motion.div variants={item}>
          <Card className="hover:border-[hsl(var(--dark-accent-blue))] transition-all duration-300 hover:shadow-lg">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Users className="h-4 w-4 text-[hsl(var(--dark-accent-blue))]" />
                Total Passengers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{totalCount}</div>
              <p className="text-xs text-[hsl(var(--dark-text-secondary))] mt-1">
                Between selected stops today
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="hover:border-[hsl(var(--dark-accent-purple))] transition-all duration-300 hover:shadow-lg">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Clock className="h-4 w-4 text-[hsl(var(--dark-accent-purple))]" />
                Peak Hour
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">8 AM</div>
              <p className="text-xs text-[hsl(var(--dark-text-secondary))] mt-1">
                580 passengers
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={item}>
          <Card className="hover:border-[hsl(var(--dark-accent-teal))] transition-all duration-300 hover:shadow-lg">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-[hsl(var(--dark-accent-teal))]" />
                Average Per Hour
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                {Math.round(totalCount / hourlyData.length)}
              </div>
              <p className="text-xs text-[hsl(var(--dark-text-secondary))] mt-1">
                Across all hours
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PassengerDataDisplay;
