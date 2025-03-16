import React, { useEffect, useState } from "react";
import Header from "./Header";
import BusTrackingTile from "./BusTrackingTile";
import RouteInfoTile from "./RouteInfoTile";
import PeopleCountTile from "./PeopleCountTile";
import AnalyticsDisplay from "./AnalyticsDisplay";
import { motion } from "framer-motion";
import BusAnimation from "../animations/BusAnimation";
import { Button } from "../ui/button";
import { AlertTriangle, Bell, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PageTransition from "../animations/PageTransition";

const Dashboard = () => {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    // Show alert after 5 seconds
    const timer = setTimeout(() => {
      setShowAlert(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleIncidentReportClick = () => {
    navigate("/incident-reporting");
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-[hsl(var(--dark-bg-primary))]">
        <Header />
        <BusAnimation />

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
              <Button
                onClick={handleIncidentReportClick}
                className="bg-[hsl(var(--dark-accent-blue))] hover:bg-[hsl(var(--dark-accent-blue))/80] text-white"
              >
                <Plus className="mr-2 h-4 w-4" />
                Report Incident
              </Button>
            </motion.div>
          </div>

          {showAlert && (
            <motion.div
              className="bg-yellow-500/20 border border-yellow-500/50 rounded-lg p-4 flex items-start gap-3"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
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
                onClick={() => setShowAlert(false)}
                className="text-[hsl(var(--dark-text-secondary))] hover:text-[hsl(var(--dark-text-primary))] hover:bg-yellow-500/10"
              >
                Dismiss
              </Button>
            </motion.div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <BusTrackingTile />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <RouteInfoTile />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <PeopleCountTile />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <AnalyticsDisplay />
          </motion.div>
        </main>
      </div>
    </PageTransition>
  );
};

export default Dashboard;
