import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import {
  Bus,
  Route,
  Users,
  BarChart,
  Activity,
  AlertTriangle,
  Bell,
} from "lucide-react";
import BusAnimation from "../animations/BusAnimation";

const StaticDashboardPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[hsl(var(--dark-bg-primary))]">
      <BusAnimation size={48} color="#3b82f6" />

      {/* Header */}
      <header className="w-full h-20 bg-[hsl(var(--dark-bg-secondary))] border-b border-[hsl(var(--dark-border-subtle))] flex items-center justify-between px-6 sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 bg-[hsl(var(--dark-accent-blue))] rounded-md flex items-center justify-center glow">
            <span className="text-white font-bold text-xl">BS</span>
          </div>
          <h1 className="text-xl font-bold gradient-text glow-text">
            Bus Surveillance System
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="text-[hsl(var(--dark-text-secondary))] hover:text-[hsl(var(--dark-text-primary))] hover:bg-[hsl(var(--dark-bg-primary))]"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </Button>

          <Button
            variant="ghost"
            className="text-[hsl(var(--dark-text-secondary))] hover:text-[hsl(var(--dark-text-primary))] hover:bg-[hsl(var(--dark-bg-primary))]"
            onClick={() => navigate("/")}
          >
            Back to Home
          </Button>
        </div>
      </header>

      {/* Sidebar */}
      <div className="fixed left-0 top-20 bottom-0 w-64 bg-[hsl(var(--dark-bg-secondary))] border-r border-[hsl(var(--dark-border-subtle))] z-10">
        <nav className="p-4">
          <ul className="space-y-2">
            {[
              {
                name: "Dashboard",
                icon: <Bus className="h-5 w-5" />,
                active: true,
              },
              { name: "Bus Tracking", icon: <Bus className="h-5 w-5" /> },
              {
                name: "Route Information",
                icon: <Route className="h-5 w-5" />,
              },
              { name: "People Count", icon: <Users className="h-5 w-5" /> },
              { name: "Analytics", icon: <BarChart className="h-5 w-5" /> },
              { name: "System Status", icon: <Activity className="h-5 w-5" /> },
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Button
                  variant="ghost"
                  className={`w-full justify-start gap-3 ${item.active ? "bg-[hsl(var(--dark-accent-blue))/10] text-[hsl(var(--dark-accent-blue))]" : "text-[hsl(var(--dark-text-secondary))] hover:text-[hsl(var(--dark-text-primary))] hover:bg-[hsl(var(--dark-bg-primary))]"}`}
                  onClick={() => navigate("/contact")}
                >
                  {item.icon}
                  {item.name}
                </Button>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-64">
        <main className="container mx-auto px-4 py-6 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <motion.h1
              className="text-3xl font-bold gradient-text glow-text"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Bus Surveillance Dashboard
            </motion.h1>

            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button className="bg-[hsl(var(--dark-accent-blue))] hover:bg-[hsl(var(--dark-accent-blue))/80] text-white">
                Report Incident
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="bg-yellow-500/20 border border-yellow-500/50 rounded-lg p-4 flex items-start gap-3"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="text-yellow-500 mt-1">
              <AlertTriangle className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-[hsl(var(--dark-text-primary))]">
                Maintenance Alert
              </h3>
              <p className="text-sm text-[hsl(var(--dark-text-secondary))]">
                Bus #103 on Downtown Express route requires scheduled
                maintenance in 2 days. Please review maintenance schedule.
              </p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="text-[hsl(var(--dark-text-secondary))] hover:text-[hsl(var(--dark-text-primary))] hover:bg-yellow-500/10"
            >
              Dismiss
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Bus Tracking",
                description: "Monitor real-time location of all buses",
                count: "24 Active",
                color: "blue",
                delay: 0.1,
              },
              {
                title: "Route Information",
                description: "View details of all active routes",
                count: "8 Routes",
                color: "purple",
                delay: 0.2,
              },
              {
                title: "People Count",
                description: "Track passenger numbers across the fleet",
                count: "1,248 Today",
                color: "teal",
                delay: 0.3,
              },
            ].map((tile, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: tile.delay }}
                className={`bg-[hsl(var(--dark-bg-secondary))] rounded-lg border border-[hsl(var(--dark-border-subtle))] p-6 hover:border-[hsl(var(--dark-accent-${tile.color}))] transition-all duration-300 hover:shadow-lg hover:shadow-[hsl(var(--dark-accent-${tile.color}))]/10`}
              >
                <h3 className="text-xl font-bold text-[hsl(var(--dark-text-primary))] mb-2">
                  {tile.title}
                </h3>
                <p className="text-[hsl(var(--dark-text-secondary))] mb-4">
                  {tile.description}
                </p>
                <div className="flex justify-between items-center">
                  <span
                    className={`text-[hsl(var(--dark-accent-${tile.color}))] font-bold`}
                  >
                    {tile.count}
                  </span>
                  <Button
                    variant="ghost"
                    className="text-[hsl(var(--dark-text-secondary))]"
                  >
                    View Details
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-[hsl(var(--dark-bg-secondary))] rounded-lg border border-[hsl(var(--dark-border-subtle))] p-6"
          >
            <h3 className="text-xl font-bold text-[hsl(var(--dark-text-primary))] mb-4">
              Analytics Overview
            </h3>
            <div className="h-[300px] bg-[hsl(var(--dark-bg-primary))] rounded-md border border-[hsl(var(--dark-border-subtle))] flex items-center justify-center mb-4">
              <p className="text-[hsl(var(--dark-text-secondary))]">
                Analytics Chart
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { label: "Total Passengers", value: "4,826", change: "+12%" },
                { label: "Average Load", value: "68%", change: "+5%" },
                { label: "On-Time Rate", value: "94%", change: "+2%" },
                { label: "Incidents", value: "3", change: "-25%" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-[hsl(var(--dark-bg-primary))] rounded-md border border-[hsl(var(--dark-border-subtle))] p-4"
                >
                  <p className="text-sm text-[hsl(var(--dark-text-secondary))]">
                    {stat.label}
                  </p>
                  <div className="flex items-end justify-between">
                    <p className="text-2xl font-bold text-[hsl(var(--dark-text-primary))]">
                      {stat.value}
                    </p>
                    <p
                      className={`text-sm ${stat.change.startsWith("+") ? "text-green-500" : "text-red-500"}`}
                    >
                      {stat.change}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="flex justify-center mt-8">
            <Button
              variant="outline"
              className="border-[hsl(var(--dark-accent-blue))] text-[hsl(var(--dark-accent-blue))] hover:bg-[hsl(var(--dark-accent-blue))/10]"
              onClick={() => navigate("/contact")}
            >
              Go to Contact Page
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default StaticDashboardPage;
