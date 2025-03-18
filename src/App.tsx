import { Suspense } from "react";
import { useRoutes, Routes, Route, Navigate } from "react-router-dom";
import routes from "tempo-routes";
import { AuthProvider } from "./context/AuthContext";
import StaticHomePage from "./components/static/StaticHomePage";
import StaticDashboardPage from "./components/static/StaticDashboardPage";
import StaticContactPage from "./components/static/StaticContactPage";
import StaticFeaturesPage from "./components/static/StaticFeaturesPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<StaticHomePage />} />
      <Route path="/dashboard" element={<StaticDashboardPage />} />
      <Route path="/contact" element={<StaticContactPage />} />
      <Route path="/features" element={<StaticFeaturesPage />} />
      {import.meta.env.VITE_TEMPO === "true" && <Route path="/tempobook/*" />}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center bg-[hsl(var(--dark-bg-primary))]">
            Loading...
          </div>
        }
      >
        <>
          <AppRoutes />
          {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
        </>
      </Suspense>
    </AuthProvider>
  );
}

export default App;
