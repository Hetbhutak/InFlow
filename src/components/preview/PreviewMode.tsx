import React, { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight, Home, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface PreviewModeProps {
  onClose: () => void;
}

const PreviewMode = ({ onClose }: PreviewModeProps) => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    {
      name: "Dashboard",
      path: "/",
      image: "/preview/dashboard.png",
      description: "Main dashboard with overview of all bus activities",
    },
    {
      name: "Bus Tracking",
      path: "/bus-tracking",
      image: "/preview/bus-tracking.png",
      description: "Real-time tracking of all buses in the system",
    },
    {
      name: "Route Information",
      path: "/route-information",
      image: "/preview/route-info.png",
      description: "Detailed information about all bus routes",
    },
    {
      name: "People Count",
      path: "/people-count",
      image: "/preview/people-count.png",
      description: "Passenger count analytics between stops",
    },
  ];

  const handleNavigate = (path: string) => {
    navigate(path);
    onClose();
  };

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % pages.length);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + pages.length) % pages.length);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl bg-[hsl(var(--dark-bg-secondary))] border-[hsl(var(--dark-border-subtle))]">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold gradient-text">Preview Mode</h2>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="relative overflow-hidden rounded-lg bg-[hsl(var(--dark-bg-primary))] border border-[hsl(var(--dark-border-subtle))] h-[400px] mb-6">
            <div className="absolute top-0 left-0 right-0 h-8 bg-[hsl(var(--dark-bg-secondary))] flex items-center px-3 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <div className="ml-4 text-xs text-[hsl(var(--dark-text-secondary))]">
                {pages[currentPage].name} - Bus Surveillance System
              </div>
            </div>

            <div className="pt-8 h-full flex items-center justify-center">
              <div className="text-center p-4">
                <div className="text-6xl mb-4 text-[hsl(var(--dark-accent-blue))]">
                  <Home className="mx-auto h-16 w-16 animate-float" />
                </div>
                <h3 className="text-xl font-bold mb-2 gradient-text">
                  {pages[currentPage].name}
                </h3>
                <p className="text-[hsl(var(--dark-text-secondary))] mb-4">
                  {pages[currentPage].description}
                </p>
                <Button
                  onClick={() => handleNavigate(pages[currentPage].path)}
                  className="bg-[hsl(var(--dark-accent-blue))] hover:bg-[hsl(var(--dark-accent-blue))/80] glow"
                >
                  Go to {pages[currentPage].name}
                </Button>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <Button
              variant="outline"
              onClick={prevPage}
              className="border-[hsl(var(--dark-border-subtle))] hover:bg-[hsl(var(--dark-bg-secondary))] hover:text-[hsl(var(--dark-accent-blue))]"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Previous
            </Button>

            <div className="flex gap-2">
              {pages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-2 h-2 rounded-full ${currentPage === index ? "bg-[hsl(var(--dark-accent-blue))]" : "bg-[hsl(var(--dark-border-subtle))]"}`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              onClick={nextPage}
              className="border-[hsl(var(--dark-border-subtle))] hover:bg-[hsl(var(--dark-bg-secondary))] hover:text-[hsl(var(--dark-accent-blue))]"
            >
              Next <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PreviewMode;
