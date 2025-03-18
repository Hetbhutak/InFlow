import React from "react";
import { Card } from "../ui/card";
import { Clock, MapPin } from "lucide-react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import Header from "../dashboard/Header";

const RouteInformation = () => {
  const navigate = useNavigate();

  // Mock data for routes
  const routes = [
    {
      id: "A1",
      name: "Downtown Express",
      stops: 12,
      frequency: "10 min",
      status: "Active",
    },
    {
      id: "B2",
      name: "Airport Shuttle",
      stops: 8,
      frequency: "15 min",
      status: "Active",
    },
    {
      id: "C3",
      name: "University Line",
      stops: 15,
      frequency: "12 min",
      status: "Active",
    },
    {
      id: "D4",
      name: "Mall Connector",
      stops: 6,
      frequency: "20 min",
      status: "Delayed",
    },
  ];

  // Mock data for stops on a selected route
  const routeStops = [
    { name: "Central Station", time: "5:00 AM - 11:00 PM", nextBus: "5 min" },
    { name: "City Hall", time: "5:05 AM - 11:05 PM", nextBus: "15 min" },
    { name: "Market Street", time: "5:10 AM - 11:10 PM", nextBus: "25 min" },
    {
      name: "Convention Center",
      time: "5:15 AM - 11:15 PM",
      nextBus: "35 min",
    },
    { name: "University", time: "5:20 AM - 11:20 PM", nextBus: "45 min" },
    { name: "Hospital", time: "5:25 AM - 11:25 PM", nextBus: "55 min" },
    { name: "Shopping Mall", time: "5:30 AM - 11:30 PM", nextBus: "65 min" },
    { name: "Airport", time: "5:35 AM - 11:35 PM", nextBus: "75 min" },
  ];

  return (
    <div className="min-h-screen bg-[hsl(var(--dark-bg-primary))]">
      <Header />
      <div className="lg:ml-64">
        <div className="container mx-auto px-4 py-6">
          <h2 className="text-2xl font-bold gradient-text mb-6">
            Route Information
          </h2>

          <Tabs defaultValue="routes">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="routes">Routes</TabsTrigger>
              <TabsTrigger value="stops">Stops</TabsTrigger>
            </TabsList>

            <TabsContent value="routes" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {routes.map((route) => (
                  <Card key={route.id} className="p-4 bg-white shadow-sm">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-lg">{route.name}</h3>
                        <p className="text-sm text-gray-500">
                          Route ID: {route.id}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium">
                          Status:{" "}
                          <span
                            className={
                              route.status === "Active"
                                ? "text-green-500"
                                : "text-amber-500"
                            }
                          >
                            {route.status}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1 text-gray-500" />
                        <span>{route.stops} stops</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1 text-gray-500" />
                        <span>Every {route.frequency}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="mt-4 w-full">
                      View Details
                    </Button>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="stops" className="mt-4">
              <Card className="p-4 bg-white shadow-sm">
                <h3 className="font-medium text-lg mb-4">
                  Downtown Express (Route A1)
                </h3>
                <div className="space-y-4">
                  {routeStops.map((stop, index) => (
                    <div
                      key={index}
                      className="border-b pb-3 last:border-0 last:pb-0"
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex items-center">
                          <div className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-xs mr-2">
                            {index + 1}
                          </div>
                          <h4 className="font-medium">{stop.name}</h4>
                        </div>
                        <div className="text-right text-sm">
                          <div>
                            Next bus:{" "}
                            <span className="font-medium">{stop.nextBus}</span>
                          </div>
                          <div className="text-gray-500">{stop.time}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default RouteInformation;
