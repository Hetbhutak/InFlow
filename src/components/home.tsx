import React from "react";
import AuthPage from "./auth/AuthPage";
import Dashboard from "./dashboard/Dashboard";
import { useAuth } from "../context/AuthContext";

function Home() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">Loading...</h2>
          <p className="text-gray-600">Please wait while we load your data.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-screen h-screen">
      {user ? <Dashboard /> : <AuthPage />}
    </div>
  );
}

export default Home;
