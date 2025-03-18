import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import BusAnimation from "../animations/BusAnimation";

const StaticContactPage = () => {
  const navigate = useNavigate();

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
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold gradient-text glow-text mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-[hsl(var(--dark-text-secondary))] max-w-3xl mx-auto">
            Have questions about our Bus Surveillance System? We're here to
            help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[hsl(var(--dark-bg-secondary))] rounded-lg border border-[hsl(var(--dark-border-subtle))] p-8"
          >
            <h2 className="text-2xl font-bold text-[hsl(var(--dark-text-primary))] mb-6">
              Get in Touch
            </h2>
            <form className="space-y-6">
              <div>
                <label
                  className="block text-[hsl(var(--dark-text-secondary))] mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 bg-[hsl(var(--dark-bg-primary))] border border-[hsl(var(--dark-border-subtle))] rounded-md text-[hsl(var(--dark-text-primary))] focus:border-[hsl(var(--dark-accent-blue))] outline-none transition-colors duration-200"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  className="block text-[hsl(var(--dark-text-secondary))] mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 bg-[hsl(var(--dark-bg-primary))] border border-[hsl(var(--dark-border-subtle))] rounded-md text-[hsl(var(--dark-text-primary))] focus:border-[hsl(var(--dark-accent-blue))] outline-none transition-colors duration-200"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label
                  className="block text-[hsl(var(--dark-text-secondary))] mb-2"
                  htmlFor="subject"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full p-3 bg-[hsl(var(--dark-bg-primary))] border border-[hsl(var(--dark-border-subtle))] rounded-md text-[hsl(var(--dark-text-primary))] focus:border-[hsl(var(--dark-accent-blue))] outline-none transition-colors duration-200"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label
                  className="block text-[hsl(var(--dark-text-secondary))] mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full p-3 bg-[hsl(var(--dark-bg-primary))] border border-[hsl(var(--dark-border-subtle))] rounded-md text-[hsl(var(--dark-text-primary))] focus:border-[hsl(var(--dark-accent-blue))] outline-none transition-colors duration-200"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>
              <Button className="w-full bg-[hsl(var(--dark-accent-blue))] hover:bg-[hsl(var(--dark-accent-blue))/80] text-white py-3">
                Send Message
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-[hsl(var(--dark-bg-secondary))] rounded-lg border border-[hsl(var(--dark-border-subtle))] p-8">
              <h2 className="text-2xl font-bold text-[hsl(var(--dark-text-primary))] mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-[hsl(var(--dark-text-primary))] mb-2">
                    Address
                  </h3>
                  <p className="text-[hsl(var(--dark-text-secondary))]">
                    123 Transit Center
                  </p>
                  <p className="text-[hsl(var(--dark-text-secondary))]">
                    Metro City, MC 12345
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[hsl(var(--dark-text-primary))] mb-2">
                    Email
                  </h3>
                  <p className="text-[hsl(var(--dark-accent-blue))]">
                    info@bussurveillance.com
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[hsl(var(--dark-text-primary))] mb-2">
                    Phone
                  </h3>
                  <p className="text-[hsl(var(--dark-text-secondary))]">
                    +1 (555) 123-4567
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[hsl(var(--dark-text-primary))] mb-2">
                    Hours
                  </h3>
                  <p className="text-[hsl(var(--dark-text-secondary))]">
                    Monday - Friday: 9AM - 5PM
                  </p>
                  <p className="text-[hsl(var(--dark-text-secondary))]">
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[hsl(var(--dark-bg-secondary))] rounded-lg border border-[hsl(var(--dark-border-subtle))] p-8">
              <h2 className="text-2xl font-bold text-[hsl(var(--dark-text-primary))] mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-[hsl(var(--dark-text-primary))] mb-2">
                    How secure is the system?
                  </h3>
                  <p className="text-[hsl(var(--dark-text-secondary))]">
                    Our system uses enterprise-grade encryption and follows
                    industry best practices for data security.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[hsl(var(--dark-text-primary))] mb-2">
                    Can I integrate with existing systems?
                  </h3>
                  <p className="text-[hsl(var(--dark-text-secondary))]">
                    Yes, our platform offers APIs and integration options for
                    most common transit management systems.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="flex justify-center mt-12">
          <Button
            variant="outline"
            className="border-[hsl(var(--dark-accent-blue))] text-[hsl(var(--dark-accent-blue))] hover:bg-[hsl(var(--dark-accent-blue))/10]"
            onClick={() => navigate("/")}
          >
            Back to Home
          </Button>
        </div>
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

export default StaticContactPage;
