import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import GoogleAuthButton from "./GoogleAuthButton";
import { Card } from "../ui/card";
import {
  signInWithEmail,
  signUpWithEmail,
  signInWithGoogle,
} from "../../lib/auth";
import { useAuth } from "../../context/AuthContext";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const { setUser, error, setError } = useAuth();

  const handleLoginSubmit = async (values: {
    email: string;
    password: string;
  }) => {
    setIsLoading(true);
    setError(null);

    try {
      const { user } = await signInWithEmail(values.email, values.password);
      if (user) {
        setUser({
          id: user.id,
          email: user.email || "",
          name: user.user_metadata.name,
        });
      }
      setIsLoading(false);
    } catch (err: any) {
      console.error("Login error:", err);
      setError(
        err.message || "An error occurred during login. Please try again.",
      );
      setIsLoading(false);
    }
  };

  const handleSignupSubmit = async (values: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) => {
    setIsLoading(true);
    setError(null);

    try {
      const { user } = await signUpWithEmail(
        values.email,
        values.password,
        values.name,
      );
      if (user) {
        setUser({
          id: user.id,
          email: user.email || "",
          name: values.name,
        });
        setIsLogin(true);
      } else {
        // Email confirmation might be required
        setError("Please check your email to confirm your account.");
      }
      setIsLoading(false);
    } catch (err: any) {
      console.error("Signup error:", err);
      setError(
        err.message || "An error occurred during signup. Please try again.",
      );
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    setError(null);

    try {
      await signInWithGoogle();
      // The redirect will happen automatically, no need to set user here
      setIsLoading(false);
    } catch (err: any) {
      console.error("Google sign-in error:", err);
      setError(
        err.message ||
          "An error occurred during Google sign-in. Please try again.",
      );
      setIsLoading(false);
    }
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900">
            Bus Surveillance System
          </h1>
          <p className="mt-2 text-gray-600">
            Monitor and track bus activity in real-time
          </p>
        </div>

        {isLogin ? (
          <>
            <LoginForm
              onSubmit={handleLoginSubmit}
              isLoading={isLoading}
              error={error}
            />
            <div className="mt-4">
              <Card className="p-4 bg-white shadow-sm">
                <div className="flex flex-col space-y-4">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">
                        Or continue with
                      </span>
                    </div>
                  </div>
                  <GoogleAuthButton
                    onClick={handleGoogleSignIn}
                    isLoading={isLoading}
                  />
                  <p className="text-center text-sm text-gray-600">
                    Don't have an account?{" "}
                    <button
                      onClick={toggleAuthMode}
                      className="font-medium text-primary hover:underline"
                    >
                      Sign up
                    </button>
                  </p>
                </div>
              </Card>
            </div>
          </>
        ) : (
          <>
            <SignupForm onSubmit={handleSignupSubmit} isLoading={isLoading} />
            <div className="mt-4">
              <Card className="p-4 bg-white shadow-sm">
                <div className="flex flex-col space-y-4">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">
                        Or continue with
                      </span>
                    </div>
                  </div>
                  <GoogleAuthButton
                    onClick={handleGoogleSignIn}
                    isLoading={isLoading}
                  />
                  <p className="text-center text-sm text-gray-600">
                    Already have an account?{" "}
                    <button
                      onClick={toggleAuthMode}
                      className="font-medium text-primary hover:underline"
                    >
                      Log in
                    </button>
                  </p>
                </div>
              </Card>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
