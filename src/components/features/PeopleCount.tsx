import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import OriginDestinationForm from "./OriginDestinationForm";
import PassengerDataDisplay from "./PassengerDataDisplay";
import Header from "../dashboard/Header";

const PeopleCount = () => {
  const navigate = useNavigate();
  const [origin, setOrigin] = useState<string>("");
  const [destination, setDestination] = useState<string>("");

  const handleFormSubmit = (origin: string, destination: string) => {
    setOrigin(origin);
    setDestination(destination);
    // In a real app, we would fetch filtered data here
  };

  return (
    <div className="min-h-screen bg-[hsl(var(--dark-bg-primary))]">
      <Header />
      <div className="lg:ml-64">
        <div className="container mx-auto px-4 py-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold gradient-text glow-text mb-8">
              People Count Analytics
            </h2>
          </motion.div>

          <OriginDestinationForm onSubmit={handleFormSubmit} />

          <PassengerDataDisplay />
        </div>
      </div>
    </div>
  );
};

export default PeopleCount;
