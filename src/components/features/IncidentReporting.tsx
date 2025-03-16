import React, { useState } from "react";
import { Card } from "../ui/card";
import { ArrowLeft, AlertTriangle, Camera, Send, MapPin } from "lucide-react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import PageTransition from "../animations/PageTransition";

const IncidentReporting = () => {
  const navigate = useNavigate();
  const [incidentType, setIncidentType] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Mock data for incidents
  const incidents = [
    {
      id: "INC-001",
      type: "Mechanical Failure",
      location: "Downtown Express - Bus #103",
      status: "Under Investigation",
      reportedAt: "2023-06-15 09:45 AM",
      priority: "High",
    },
    {
      id: "INC-002",
      type: "Passenger Disturbance",
      location: "Airport Shuttle - Bus #205",
      status: "Resolved",
      reportedAt: "2023-06-14 02:30 PM",
      priority: "Medium",
    },
    {
      id: "INC-003",
      type: "Traffic Accident",
      location: "University Line - Bus #308",
      status: "In Progress",
      reportedAt: "2023-06-13 11:15 AM",
      priority: "Critical",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setIncidentType("");
        setLocation("");
        setDescription("");
      }, 3000);
    }, 1500);
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-[hsl(var(--dark-bg-primary))]">
        <header className="bg-[hsl(var(--dark-bg-secondary))] border-b border-[hsl(var(--dark-border-subtle))] sticky top-0 z-10">
          <div className="container mx-auto px-4 py-3 flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/")}
              className="mr-2 text-[hsl(var(--dark-text-primary))]"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h2 className="text-xl font-bold gradient-text">
              Incident Reporting
            </h2>
          </div>
        </header>

        <main className="container mx-auto px-4 py-6 space-y-6">
          <Tabs defaultValue="report" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-[hsl(var(--dark-bg-secondary))] text-[hsl(var(--dark-text-secondary))]">
              <TabsTrigger
                value="report"
                className="data-[state=active]:bg-[hsl(var(--dark-accent-blue))] data-[state=active]:text-white"
              >
                Report Incident
              </TabsTrigger>
              <TabsTrigger
                value="history"
                className="data-[state=active]:bg-[hsl(var(--dark-accent-blue))] data-[state=active]:text-white"
              >
                Incident History
              </TabsTrigger>
            </TabsList>

            <TabsContent value="report" className="mt-4">
              <Card className="p-6 bg-[hsl(var(--dark-bg-secondary))] border-[hsl(var(--dark-border-subtle))] shadow-lg">
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="h-8 w-8 text-green-500" />
                    </div>
                    <h3 className="text-xl font-bold text-[hsl(var(--dark-text-primary))] mb-2">
                      Incident Reported
                    </h3>
                    <p className="text-[hsl(var(--dark-text-secondary))]">
                      Your incident has been successfully reported and will be
                      investigated.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="incidentType"
                        className="block text-sm font-medium text-[hsl(var(--dark-text-secondary))] mb-1"
                      >
                        Incident Type
                      </label>
                      <Select
                        value={incidentType}
                        onValueChange={setIncidentType}
                        required
                      >
                        <SelectTrigger className="bg-[hsl(var(--dark-bg-primary))] border-[hsl(var(--dark-border-subtle))]">
                          <SelectValue placeholder="Select incident type" />
                        </SelectTrigger>
                        <SelectContent className="bg-[hsl(var(--dark-bg-secondary))] border-[hsl(var(--dark-border-subtle))]">
                          <SelectItem value="mechanical">
                            Mechanical Failure
                          </SelectItem>
                          <SelectItem value="passenger">
                            Passenger Disturbance
                          </SelectItem>
                          <SelectItem value="traffic">
                            Traffic Accident
                          </SelectItem>
                          <SelectItem value="driver">Driver Issue</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label
                        htmlFor="location"
                        className="block text-sm font-medium text-[hsl(var(--dark-text-secondary))] mb-1"
                      >
                        Location/Bus ID
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[hsl(var(--dark-text-secondary))]" />
                        <Input
                          id="location"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          className="pl-10 bg-[hsl(var(--dark-bg-primary))] border-[hsl(var(--dark-border-subtle))] text-[hsl(var(--dark-text-primary))]"
                          placeholder="Enter bus ID or location"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="description"
                        className="block text-sm font-medium text-[hsl(var(--dark-text-secondary))] mb-1"
                      >
                        Description
                      </label>
                      <Textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="min-h-[120px] bg-[hsl(var(--dark-bg-primary))] border-[hsl(var(--dark-border-subtle))] text-[hsl(var(--dark-text-primary))]"
                        placeholder="Describe the incident in detail"
                        required
                      />
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <Button
                        type="button"
                        variant="outline"
                        className="border-[hsl(var(--dark-border-subtle))] text-[hsl(var(--dark-text-secondary))] hover:bg-[hsl(var(--dark-bg-primary))] hover:text-[hsl(var(--dark-text-primary))]"
                      >
                        <Camera className="mr-2 h-4 w-4" />
                        Attach Photo
                      </Button>
                      <Button
                        type="submit"
                        className="bg-[hsl(var(--dark-accent-blue))] hover:bg-[hsl(var(--dark-accent-blue))/80] text-white glow"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Submit Report"}
                      </Button>
                    </div>
                  </form>
                )}
              </Card>
            </TabsContent>

            <TabsContent value="history" className="mt-4">
              <div className="space-y-4">
                {incidents.map((incident) => (
                  <Card
                    key={incident.id}
                    className="p-4 bg-[hsl(var(--dark-bg-secondary))] border-[hsl(var(--dark-border-subtle))] shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex items-start gap-3">
                        <div
                          className={`p-2 rounded-full ${getPriorityColor(incident.priority)}`}
                        >
                          <AlertTriangle className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-medium text-lg text-[hsl(var(--dark-text-primary))]">
                            #{incident.id}: {incident.type}
                          </h3>
                          <p className="text-sm text-[hsl(var(--dark-text-secondary))]">
                            {incident.location}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium">
                          Status:{" "}
                          <span className={getStatusColor(incident.status)}>
                            {incident.status}
                          </span>
                        </div>
                        <p className="text-xs text-[hsl(var(--dark-text-secondary))]">
                          Reported: {incident.reportedAt}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-end">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-[hsl(var(--dark-border-subtle))] text-[hsl(var(--dark-text-secondary))] hover:bg-[hsl(var(--dark-bg-primary))] hover:text-[hsl(var(--dark-text-primary))]"
                      >
                        View Details
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </PageTransition>
  );
};

// Helper functions for styling
function getPriorityColor(priority: string) {
  switch (priority) {
    case "Critical":
      return "bg-red-500/20 text-red-500";
    case "High":
      return "bg-orange-500/20 text-orange-500";
    case "Medium":
      return "bg-yellow-500/20 text-yellow-500";
    default:
      return "bg-blue-500/20 text-blue-500";
  }
}

function getStatusColor(status: string) {
  switch (status) {
    case "Resolved":
      return "text-green-500";
    case "In Progress":
      return "text-blue-500";
    case "Under Investigation":
      return "text-yellow-500";
    default:
      return "text-[hsl(var(--dark-text-secondary))]";
  }
}

export default IncidentReporting;
