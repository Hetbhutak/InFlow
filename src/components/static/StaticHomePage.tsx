import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import BusAnimation from "../animations/BusAnimation";

const StaticHomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[hsl(var(--dark-bg-primary))]">
      <BusAnimation size={48} color="#3b82f6" />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold gradient-text glow-text mb-6">
            Bus Surveillance System
          </h1>
          <p className="text-xl md:text-2xl text-[hsl(var(--dark-text-secondary))] mb-10">
            Monitor and track bus activity in real-time with our advanced
            surveillance system
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-[hsl(var(--dark-accent-blue))] hover:bg-[hsl(var(--dark-accent-blue))/80] text-white px-8 py-6 text-lg"
              onClick={() => navigate("/features")}
            >
              Explore Features
            </Button>
            <Button
              variant="outline"
              className="border-[hsl(var(--dark-accent-blue))] text-[hsl(var(--dark-accent-blue))] hover:bg-[hsl(var(--dark-accent-blue))/10] px-8 py-6 text-lg"
              onClick={() => navigate("/dashboard")}
            >
              View Dashboard
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-[hsl(var(--dark-bg-secondary))]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold gradient-text mb-4">
              Key Features
            </h2>
            <p className="text-xl text-[hsl(var(--dark-text-secondary))] max-w-3xl mx-auto">
              Our comprehensive system provides everything you need to monitor
              your bus fleet
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Real-time Tracking",
                description:
                  "Monitor the location of every bus in your fleet in real-time",
                delay: 0.1,
              },
              {
                title: "Route Information",
                description:
                  "Access detailed information about routes, stops, and schedules",
                delay: 0.2,
              },
              {
                title: "Passenger Analytics",
                description:
                  "Track passenger counts and analyze ridership patterns",
                delay: 0.3,
              },
              {
                title: "Maintenance Alerts",
                description:
                  "Receive timely alerts for scheduled maintenance and repairs",
                delay: 0.4,
              },
              {
                title: "Incident Reporting",
                description:
                  "Report and track incidents with detailed documentation",
                delay: 0.5,
              },
              {
                title: "Performance Metrics",
                description:
                  "Analyze key performance indicators for your entire fleet",
                delay: 0.6,
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: feature.delay }}
                viewport={{ once: true }}
                className="bg-[hsl(var(--dark-bg-primary))] p-6 rounded-lg border border-[hsl(var(--dark-border-subtle))] hover:border-[hsl(var(--dark-accent-blue))] transition-all duration-300 hover:shadow-lg hover:shadow-[hsl(var(--dark-accent-blue))]/10"
              >
                <h3 className="text-xl font-bold text-[hsl(var(--dark-text-primary))] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[hsl(var(--dark-text-secondary))]">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <h2 className="text-4xl font-bold gradient-text mb-4">
                Powerful Dashboard
              </h2>
              <p className="text-xl text-[hsl(var(--dark-text-secondary))] mb-6">
                Our intuitive dashboard provides a comprehensive overview of
                your entire bus fleet at a glance.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Real-time location tracking",
                  "Passenger count analytics",
                  "Route performance metrics",
                  "Maintenance scheduling",
                  "Incident reporting and tracking",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-[hsl(var(--dark-accent-blue))]"></div>
                    <span className="text-[hsl(var(--dark-text-secondary))]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <Button
                className="bg-[hsl(var(--dark-accent-blue))] hover:bg-[hsl(var(--dark-accent-blue))/80] text-white px-6 py-2"
                onClick={() => navigate("/dashboard")}
              >
                View Dashboard
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <div className="bg-[hsl(var(--dark-bg-secondary))] rounded-lg border border-[hsl(var(--dark-border-subtle))] overflow-hidden shadow-xl">
                <div className="p-4 border-b border-[hsl(var(--dark-border-subtle))] flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <div className="ml-4 text-sm text-[hsl(var(--dark-text-secondary))]">
                    Bus Surveillance Dashboard
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-[hsl(var(--dark-bg-primary))] p-4 rounded-md border border-[hsl(var(--dark-border-subtle))]">
                      <h4 className="text-sm font-medium text-[hsl(var(--dark-text-secondary))] mb-2">
                        Active Buses
                      </h4>
                      <p className="text-2xl font-bold text-[hsl(var(--dark-accent-blue))]">
                        24
                      </p>
                    </div>
                    <div className="bg-[hsl(var(--dark-bg-primary))] p-4 rounded-md border border-[hsl(var(--dark-border-subtle))]">
                      <h4 className="text-sm font-medium text-[hsl(var(--dark-text-secondary))] mb-2">
                        Total Passengers
                      </h4>
                      <p className="text-2xl font-bold text-[hsl(var(--dark-accent-purple))]">
                        1,248
                      </p>
                    </div>
                  </div>
                  <div className="bg-[hsl(var(--dark-bg-primary))] p-4 rounded-md border border-[hsl(var(--dark-border-subtle))] mb-6">
                    <h4 className="text-sm font-medium text-[hsl(var(--dark-text-secondary))] mb-4">
                      Bus Locations
                    </h4>
                    <div className="h-40 bg-[hsl(var(--dark-bg-secondary))] rounded-md flex items-center justify-center">
                      <p className="text-sm text-[hsl(var(--dark-text-secondary))]">
                        Map View
                      </p>
                    </div>
                  </div>
                  <div className="bg-[hsl(var(--dark-bg-primary))] p-4 rounded-md border border-[hsl(var(--dark-border-subtle))]">
                    <h4 className="text-sm font-medium text-[hsl(var(--dark-text-secondary))] mb-4">
                      Recent Alerts
                    </h4>
                    <div className="space-y-2">
                      <div className="p-2 bg-yellow-500/10 border border-yellow-500/30 rounded-md text-yellow-400 text-xs">
                        Bus #103 requires maintenance in 2 days
                      </div>
                      <div className="p-2 bg-blue-500/10 border border-blue-500/30 rounded-md text-blue-400 text-xs">
                        Route A1 experiencing 10 minute delay
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-6 bg-[hsl(var(--dark-bg-secondary))]"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold gradient-text mb-4">
              Get Started Today
            </h2>
            <p className="text-xl text-[hsl(var(--dark-text-secondary))] max-w-3xl mx-auto">
              Ready to transform your bus fleet management? Contact us to learn
              more about our surveillance system.
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="md:w-1/2 bg-[hsl(var(--dark-bg-primary))] p-8 rounded-lg border border-[hsl(var(--dark-border-subtle))]"
            >
              <h3 className="text-2xl font-bold text-[hsl(var(--dark-text-primary))] mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-[hsl(var(--dark-text-secondary))] font-medium">
                    Email
                  </p>
                  <p className="text-[hsl(var(--dark-accent-blue))]">
                    info@bussurveillance.com
                  </p>
                </div>
                <div>
                  <p className="text-[hsl(var(--dark-text-secondary))] font-medium">
                    Phone
                  </p>
                  <p className="text-[hsl(var(--dark-accent-blue))]">
                    +1 (555) 123-4567
                  </p>
                </div>
                <div>
                  <p className="text-[hsl(var(--dark-text-secondary))] font-medium">
                    Address
                  </p>
                  <p className="text-[hsl(var(--dark-text-primary))]">
                    123 Transit Center
                  </p>
                  <p className="text-[hsl(var(--dark-text-primary))]">
                    Metro City, MC 12345
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="md:w-1/2 bg-[hsl(var(--dark-bg-primary))] p-8 rounded-lg border border-[hsl(var(--dark-border-subtle))]"
            >
              <h3 className="text-2xl font-bold text-[hsl(var(--dark-text-primary))] mb-6">
                Request a Demo
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="text-[hsl(var(--dark-text-secondary))] block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 bg-[hsl(var(--dark-bg-secondary))] border border-[hsl(var(--dark-border-subtle))] rounded-md text-[hsl(var(--dark-text-primary))] focus:border-[hsl(var(--dark-accent-blue))] outline-none transition-colors duration-200"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="text-[hsl(var(--dark-text-secondary))] block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full p-3 bg-[hsl(var(--dark-bg-secondary))] border border-[hsl(var(--dark-border-subtle))] rounded-md text-[hsl(var(--dark-text-primary))] focus:border-[hsl(var(--dark-accent-blue))] outline-none transition-colors duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="text-[hsl(var(--dark-text-secondary))] block mb-2">
                    Message
                  </label>
                  <textarea
                    className="w-full p-3 bg-[hsl(var(--dark-bg-secondary))] border border-[hsl(var(--dark-border-subtle))] rounded-md text-[hsl(var(--dark-text-primary))] focus:border-[hsl(var(--dark-accent-blue))] outline-none transition-colors duration-200 min-h-[120px]"
                    placeholder="Tell us about your needs"
                  ></textarea>
                </div>
                <Button className="w-full bg-[hsl(var(--dark-accent-blue))] hover:bg-[hsl(var(--dark-accent-blue))/80] text-white py-3">
                  Submit Request
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-[hsl(var(--dark-border-subtle))]">
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
            >
              Home
            </Button>
            <Button
              variant="link"
              className="text-[hsl(var(--dark-text-secondary))] hover:text-[hsl(var(--dark-text-primary))]"
            >
              Features
            </Button>
            <Button
              variant="link"
              className="text-[hsl(var(--dark-text-secondary))] hover:text-[hsl(var(--dark-text-primary))]"
            >
              Dashboard
            </Button>
            <Button
              variant="link"
              className="text-[hsl(var(--dark-text-secondary))] hover:text-[hsl(var(--dark-text-primary))]"
            >
              Contact
            </Button>
            <Button
              variant="link"
              className="text-[hsl(var(--dark-text-secondary))] hover:text-[hsl(var(--dark-text-primary))]"
              onClick={() => navigate("/dashboard")}
            >
              Go to Dashboard
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

export default StaticHomePage;
