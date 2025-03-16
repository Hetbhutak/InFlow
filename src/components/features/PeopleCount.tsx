import React from "react";
import { Card } from "../ui/card";
import { ArrowLeft } from "lucide-react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import OriginDestinationForm from "./OriginDestinationForm";
import PassengerDataDisplay from "./PassengerDataDisplay";

const PeopleCount = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/")}
            className="mr-2"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h2 className="text-xl font-bold">People Count</h2>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-6">
        <Card className="p-4 bg-white shadow-sm">
          <h3 className="font-medium text-lg mb-4">Filter Passenger Data</h3>
          <OriginDestinationForm />
        </Card>

        <PassengerDataDisplay />
      </main>
    </div>
  );
};

export default PeopleCount;
