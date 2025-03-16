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
import { Search } from "lucide-react";

interface OriginDestinationFormProps {
  onSubmit?: (data: { origin: string; destination: string }) => void;
  busStops?: Array<{ id: string; name: string }>;
  isLoading?: boolean;
}

const OriginDestinationForm = ({
  onSubmit = () => {},
  busStops = [
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
    onSubmit({ origin, destination });
  };

  return (
    <Card className="w-full max-w-[600px] p-6 bg-white shadow-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <h3 className="text-lg font-medium mb-4">Filter Passenger Data</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="origin">Origin</Label>
            <Select value={origin} onValueChange={setOrigin}>
              <SelectTrigger id="origin" className="w-full">
                <SelectValue placeholder="Select origin stop" />
              </SelectTrigger>
              <SelectContent>
                {busStops.map((stop) => (
                  <SelectItem key={stop.id} value={stop.id}>
                    {stop.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="destination">Destination</Label>
            <Select value={destination} onValueChange={setDestination}>
              <SelectTrigger id="destination" className="w-full">
                <SelectValue placeholder="Select destination stop" />
              </SelectTrigger>
              <SelectContent>
                {busStops.map((stop) => (
                  <SelectItem key={stop.id} value={stop.id}>
                    {stop.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex justify-end">
          <Button
            type="submit"
            disabled={isLoading || !origin || !destination}
            className="flex items-center gap-2"
          >
            <Search size={16} />
            {isLoading ? "Loading..." : "Filter Data"}
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default OriginDestinationForm;
