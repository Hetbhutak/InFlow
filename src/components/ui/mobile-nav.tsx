import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./button";
import {
  Menu,
  X,
  Home,
  Bus,
  Route,
  Users,
  BarChart,
  Activity,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

interface MobileNavProps {
  onLogout?: () => void;
}

const MobileNav = ({ onLogout }: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: "Dashboard", icon: <Home className="h-5 w-5" />, path: "/" },
    {
      name: "Bus Tracking",
      icon: <Bus className="h-5 w-5" />,
      path: "/bus-tracking",
    },
    {
      name: "Route Information",
      icon: <Route className="h-5 w-5" />,
      path: "/route-information",
    },
    {
      name: "People Count",
      icon: <Users className="h-5 w-5" />,
      path: "/people-count",
    },
    {
      name: "Analytics",
      icon: <BarChart className="h-5 w-5" />,
      path: "/analytics",
    },
    {
      name: "System Status",
      icon: <Activity className="h-5 w-5" />,
      path: "/system-status",
    },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  const handleLogout = () => {
    if (onLogout) onLogout();
    setIsOpen(false);
  };

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden text-[hsl(var(--dark-text-secondary))] hover:text-[hsl(var(--dark-text-primary))] hover:bg-[hsl(var(--dark-bg-primary))]"
        onClick={() => setIsOpen(true)}
      >
        <Menu className="h-6 w-6" />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 left-0 bottom-0 w-64 bg-[hsl(var(--dark-bg-secondary))] z-50 overflow-y-auto"
            >
              <div className="flex justify-between items-center p-4 border-b border-[hsl(var(--dark-border-subtle))]">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-[hsl(var(--dark-accent-blue))] rounded-md flex items-center justify-center glow">
                    <span className="text-white font-bold text-xl">BS</span>
                  </div>
                  <h1 className="text-xl font-bold gradient-text glow-text">
                    Bus Surveillance
                  </h1>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="text-[hsl(var(--dark-text-secondary))] hover:text-[hsl(var(--dark-text-primary))]"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <nav className="p-4">
                <ul className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Button
                        variant="ghost"
                        className={`w-full justify-start text-[hsl(var(--dark-text-secondary))] hover:text-[hsl(var(--dark-text-primary))] hover:bg-[hsl(var(--dark-bg-primary))] gap-3`}
                        onClick={() => handleNavigation(item.path)}
                      >
                        {item.icon}
                        {item.name}
                      </Button>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-[hsl(var(--dark-border-subtle))]">
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-[hsl(var(--dark-text-secondary))] hover:text-[hsl(var(--dark-text-primary))] hover:bg-[hsl(var(--dark-bg-primary))] gap-3"
                    onClick={handleLogout}
                  >
                    <LogOut className="h-5 w-5" />
                    Logout
                  </Button>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;
