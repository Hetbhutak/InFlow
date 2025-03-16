import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabase";

export default function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuthCallback = async () => {
      const { error } = await supabase.auth.getSession();

      if (error) {
        console.error("Error during auth callback:", error);
      }

      // Redirect to home page after processing the OAuth callback
      navigate("/");
    };

    handleAuthCallback();
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-2">
          Completing authentication...
        </h2>
        <p className="text-gray-600">
          Please wait while we complete the sign-in process.
        </p>
      </div>
    </div>
  );
}
