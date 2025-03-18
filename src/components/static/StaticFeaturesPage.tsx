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

const StaticFeaturesPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "Real-time Bus Tracking",
      description:
        "Monitor the exact location of every bus in your fleet in real-time. Our GPS tracking system provides accurate location data with minimal latency, allowing you to see where each vehicle is at any moment.",
      icon: <Bus className="h-12 w-12 text-[hsl(var(--dark-accent-blue))]" />,
      delay: 0.1,
    },
    {
      title: "Route Information Management",
      description:
        "Manage and optimize bus routes with comprehensive data on stops, schedules, and performance metrics. Identify bottlenecks and improve efficiency across your entire transit network.",
      icon: (
        <Route className="h-12 w-12 text-[hsl(var(--dark-accent-purple))]" />
      ),
      delay: 0.2,
    },
    {
      title: "Passenger Counting System",
      description:
        "Track passenger counts with advanced sensors that provide accurate data on boardings and alightings at each stop. Analyze ridership patterns to optimize service frequency and vehicle capacity.",
      icon: <Users className="h-12 w-12 text-[hsl(var(--dark-accent-teal))]" />,
      delay: 0.3,
    },
    {
      title: "Analytics Dashboard",
      description:
        "Gain valuable insights with our comprehensive analytics dashboard. Visualize key performance indicators, track trends over time, and generate custom reports to support data-driven decision making.",
      icon: (
        <BarChart className="h-12 w-12 text-[hsl(var(--dark-accent-blue))]" />
      ),
      delay: 0.4,
    },
    {
      title: "System Status Monitoring",
      description:
        "Monitor the health and status of your entire bus fleet in real-time. Receive instant alerts for maintenance issues, delays, or other operational concerns that require attention.",
      icon: (
        <Activity className="h-12 w-12 text-[hsl(var(--dark-accent-purple))]" />
      ),
      delay: 0.5,
    },
    {
      title: "Incident Reporting",
      description:
        "Document and track incidents with our comprehensive reporting system. Capture details, photos, and witness statements to maintain accurate records and improve safety protocols.",
      icon: (
        <AlertTriangle className="h-12 w-12 text-[hsl(var(--dark-accent-teal))]" />
      ),
      delay: 0.6,
    },
  ];

  return (
    <div className="min-h-screen bg-[hsl(var(--dark-bg-primary))]">
      <BusAnimation size={48} color="#3b82f6" />

      {/* Header */}
      <header className="w-full h-20 bg-[hsl(var(--dark-bg-secondary))] border-b border-[hsl(var(--dark-border-subtle))] flex items-center justify-between px-6 sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div
            className="h-10 w-10 bg-[hsl(var(--dark-accent-blue))] rounded-md flex items-center justify-center glow cursor-pointer"
            onClick={() => navigate("/")}
          >
            <span className="text-white font-bold text-xl">BS</span>
          </div>
          <h1
            className="text-xl font-bold gradient-text glow-text cursor-pointer"
            onClick={() => navigate("/")}
          >
            Bus Surveillance System
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            className="text-[hsl(var(--dark-text-secondary))] hover:text-[hsl(var(--dark-text-primary))] hover:bg-[hsl(var(--dark-bg-primary))]"
            onClick={() => navigate("/")}
          >
            Home
          </Button>
          <Button
            variant="ghost"
            className="text-[hsl(var(--dark-text-secondary))] hover:text-[hsl(var(--dark-text-primary))] hover:bg-[hsl(var(--dark-bg-primary))]"
            onClick={() => navigate("/dashboard")}
          >
            Dashboard
          </Button>
          <Button
            variant="ghost"
            className="text-[hsl(var(--dark-text-secondary))] hover:text-[hsl(var(--dark-text-primary))] hover:bg-[hsl(var(--dark-bg-primary))]"
            onClick={() => navigate("/contact")}
          >
            Contact
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold gradient-text glow-text mb-4">
            Our Features
          </h1>
          <p className="text-xl text-[hsl(var(--dark-text-secondary))] max-w-3xl mx-auto">
            Discover the powerful capabilities of our Bus Surveillance System
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: feature.delay }}
              viewport={{ once: true }}
              className="bg-[hsl(var(--dark-bg-secondary))] rounded-lg border border-[hsl(var(--dark-border-subtle))] p-8 hover:border-[hsl(var(--dark-accent-blue))] transition-all duration-300 hover:shadow-lg hover:shadow-[hsl(var(--dark-accent-blue))]/10"
            >
              <div className="flex flex-col items-center md:items-start md:flex-row gap-6">
                <div className="bg-[hsl(var(--dark-bg-primary))] p-4 rounded-lg">
                  {feature.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[hsl(var(--dark-text-primary))] mb-3">
                    {feature.title}
                  </h2>
                  <p className="text-[hsl(var(--dark-text-secondary))]">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16 mb-8"
        >
          <h2 className="text-3xl font-bold gradient-text mb-6">
            Ready to get started?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-[hsl(var(--dark-accent-blue))] hover:bg-[hsl(var(--dark-accent-blue))/80] text-white px-8 py-6 text-lg"
              onClick={() => navigate("/dashboard")}
            >
              View Dashboard
            </Button>
            <Button
              variant="outline"
              className="border-[hsl(var(--dark-accent-blue))] text-[hsl(var(--dark-accent-blue))] hover:bg-[hsl(var(--dark-accent-blue))/10] px-8 py-6 text-lg"
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </Button>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-[hsl(var(--dark-border-subtle))] mt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-3 mb-6 md:mb-0">
            <div className="h-10 w-10 bg-[hsl(var(--dark-accent-blue))] rounded-md flex items-center justify-center glow">
              <span className="text-white font-bold text-xl">BS</span>
            </div>
            <h1 className="text-xl font-bold gradient-text glow-text">
              Bus Surveillance
            </h1>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <Button
              variant="link"
              className="text-[hsl(var(--dark-text-secondary))] hover:text-[hsl(var(--dark-text-primary))]"
              onClick={() => navigate("/")}
            >
              Home
            </Button>
            <Button
              variant="link"
              className="text-[hsl(var(--dark-text-secondary))] hover:text-[hsl(var(--dark-text-primary))]"
              onClick={() => navigate("/dashboard")}
            >
              Dashboard
            </Button>
            <Button
              variant="link"
              className="text-[hsl(var(--dark-text-secondary))] hover:text-[hsl(var(--dark-text-primary))]"
              onClick={() => navigate("/contact")}
            >
              Contact
            </Button>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-[hsl(var(--dark-border-subtle))] text-center text-[hsl(var(--dark-text-secondary))]">
          <p>© 2024 Bus Surveillance System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default StaticFeaturesPage;
