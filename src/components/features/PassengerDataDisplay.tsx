import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const PassengerDataDisplay = () => {
  // Mock data for passenger counts by hour
  const hourlyData = [
    { hour: "6 AM", count: 120 },
    { hour: "7 AM", count: 350 },
    { hour: "8 AM", count: 580 },
    { hour: "9 AM", count: 420 },
    { hour: "10 AM", count: 280 },
    { hour: "11 AM", count: 220 },
    { hour: "12 PM", count: 310 },
    { hour: "1 PM", count: 340 },
    { hour: "2 PM", count: 290 },
    { hour: "3 PM", count: 320 },
    { hour: "4 PM", count: 490 },
    { hour: "5 PM", count: 570 },
    { hour: "6 PM", count: 430 },
    { hour: "7 PM", count: 250 },
    { hour: "8 PM", count: 180 },
    { hour: "9 PM", count: 120 },
  ];

  const maxCount = Math.max(...hourlyData.map((data) => data.count));
  const totalCount = hourlyData.reduce((sum, data) => sum + data.count, 0);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Passenger Count by Hour</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] flex items-end space-x-2">
            {hourlyData.map((data, index) => {
              const height = (data.count / maxCount) * 100;
              return (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div className="w-full group relative">
                    <div
                      className="bg-primary rounded-t w-full transition-all hover:bg-primary/80"
                      style={{ height: `${height}%` }}
                    >
                      <div className="absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {data.count} passengers
                      </div>
                    </div>
                  </div>
                  <div className="text-xs mt-1 text-gray-500">{data.hour}</div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Total Passengers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{totalCount}</div>
            <p className="text-xs text-gray-500 mt-1">
              Between selected stops today
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Peak Hour</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">8 AM</div>
            <p className="text-xs text-gray-500 mt-1">580 passengers</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Average Per Hour
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {Math.round(totalCount / hourlyData.length)}
            </div>
            <p className="text-xs text-gray-500 mt-1">Across all hours</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PassengerDataDisplay;
