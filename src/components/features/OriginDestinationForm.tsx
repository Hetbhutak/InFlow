import React from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Search, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface OriginDestinationFormProps {
  onSubmit?: (origin: string, destination: string) => void;
  busStops?: Array<{ id: string; name: string }>;
  isLoading?: boolean;
}

const OriginDestinationForm = ({
  onSubmit = () => {},
  busStops = [
    { id: "", name: "All Locations" },
    { id: "1", name: "Downtown Terminal" },
    { id: "2", name: "University Campus" },
    { id: "3", name: "Shopping Mall" },
    { id: "4", name: "Hospital" },
    { id: "5", name: "Airport" },
    { id: "6", name: "Residential Area" },
  ],
  isLoading = false,
}: OriginDestinationFormProps) => {
  const [origin, setOrigin] = React.useState<string>("");
  const [destination, setDestination] = React.useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(origin, destination);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="w-full max-w-[600px] p-6 bg-[hsl(var(--dark-bg-secondary))] border border-[hsl(var(--dark-border-subtle))] shadow-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <h3 className="text-lg font-medium mb-4 text-[hsl(var(--dark-text-primary))]">
            Filter Passenger Data
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
            <div className="space-y-2">
              <Label
                htmlFor="origin"
                className="text-[hsl(var(--dark-text-secondary))]"
              >
                Origin
              </Label>
              <Select value={origin} onValueChange={setOrigin}>
                <SelectTrigger
                  id="origin"
                  className="w-full bg-[hsl(var(--dark-bg-primary))] border-[hsl(var(--dark-border-subtle))] text-[hsl(var(--dark-text-primary))]"
                >
                  <SelectValue placeholder="Select origin stop" />
                </SelectTrigger>
                <SelectContent className="bg-[hsl(var(--dark-bg-secondary))] border-[hsl(var(--dark-border-subtle))]">
                  {busStops.map((stop) => (
                    <SelectItem
                      key={stop.id}
                      value={stop.id}
                      className="text-[hsl(var(--dark-text-primary))]"
                    >
                      {stop.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="hidden md:flex items-center justify-center">
              <ArrowRight className="h-5 w-5 text-[hsl(var(--dark-text-secondary))]" />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="destination"
                className="text-[hsl(var(--dark-text-secondary))]"
              >
                Destination
              </Label>
              <Select value={destination} onValueChange={setDestination}>
                <SelectTrigger
                  id="destination"
                  className="w-full bg-[hsl(var(--dark-bg-primary))] border-[hsl(var(--dark-border-subtle))] text-[hsl(var(--dark-text-primary))]"
                >
                  <SelectValue placeholder="Select destination stop" />
                </SelectTrigger>
                <SelectContent className="bg-[hsl(var(--dark-bg-secondary))] border-[hsl(var(--dark-border-subtle))]">
                  {busStops.map((stop) => (
                    <SelectItem
                      key={stop.id}
                      value={stop.id}
                      className="text-[hsl(var(--dark-text-primary))]"
                    >
                      {stop.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-xs text-[hsl(var(--dark-text-secondary))]">
              {origin === "" && destination === ""
                ? "Showing all passenger data for today"
                : `Filtering passengers from ${origin ? busStops.find((s) => s.id === origin)?.name : "any origin"} to ${destination ? busStops.find((s) => s.id === destination)?.name : "any destination"}`}
            </p>

            <Button
              type="submit"
              disabled={isLoading}
              className="bg-[hsl(var(--dark-accent-blue))] hover:bg-[hsl(var(--dark-accent-blue))/80] text-white flex items-center gap-2"
            >
              <Search size={16} />
              {isLoading ? "Loading..." : "Filter Data"}
            </Button>
          </div>
        </form>
      </Card>
    </motion.div>
  );
};

export default OriginDestinationForm;
