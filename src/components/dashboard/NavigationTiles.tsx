import React from "react";
import { Card, CardContent } from "../ui/card";

interface NavigationTilesProps {
  onTileClick?: (tileType: "busTracking" | "routeInfo" | "peopleCount") => void;
}

const NavigationTiles = ({ onTileClick = () => {} }: NavigationTilesProps) => {
  return (
    <div className="w-full max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Dashboard Navigation
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Bus Tracking Tile */}
        <Card
          className="cursor-pointer transition-all hover:shadow-md"
          onClick={() => onTileClick("busTracking")}
        >
          <CardContent className="p-4">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">
                Bus Tracking
              </h3>
              <p className="text-sm text-gray-500 text-center">
                View real-time locations of all buses in the system
              </p>
              <div className="mt-4 w-full bg-blue-50 rounded-lg p-3">
                <p className="text-xs text-blue-700 text-center">
                  12 buses currently active
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Route Information Tile */}
        <Card
          className="cursor-pointer transition-all hover:shadow-md"
          onClick={() => onTileClick("routeInfo")}
        >
          <CardContent className="p-4">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">
                Route Information
              </h3>
              <p className="text-sm text-gray-500 text-center">
                Access detailed information about bus routes
              </p>
              <div className="mt-4 w-full bg-green-50 rounded-lg p-3">
                <p className="text-xs text-green-700 text-center">
                  8 active routes available
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* People Count Tile */}
        <Card
          className="cursor-pointer transition-all hover:shadow-md"
          onClick={() => onTileClick("peopleCount")}
        >
          <CardContent className="p-4">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-1">
                People Count
              </h3>
              <p className="text-sm text-gray-500 text-center">
                Monitor passenger counts between stops
              </p>
              <div className="mt-4 w-full bg-purple-50 rounded-lg p-3">
                <p className="text-xs text-purple-700 text-center">
                  1,248 passengers today
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NavigationTiles;
