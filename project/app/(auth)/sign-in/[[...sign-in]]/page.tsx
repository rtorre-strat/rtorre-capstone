// app/(auth)/sign-in/[[...sign-in]]

'use client';

import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";



export default function CustomSignIn() {
  const { isLoaded, signIn, setActive } = useSignIn();
  const router = useRouter();

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev);
  };

  if (!isLoaded) return null;

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const result = await signIn.create({
        identifier,
        password,
      });

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        router.push("/dashboard");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err: any) {
      setError(err.errors?.[0]?.message || "Sign-in failed.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-platinum-900 to-outer_space-600 px-4">
      <div className="w-full max-w-md bg-white dark:bg-outer_space-500 p-8 rounded-xl shadow-lg border border-french_gray-300 dark:border-payne's_gray-400">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-outer_space-700 dark:text-platinum-100">
            Welcome Back
          </h1>
          <p className="text-payne's_gray-500 dark:text-french_gray-400 text-sm">
            Sign in to access your projects
          </p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 rounded text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSignIn} className="space-y-4">
          {/* Username or Email */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-white">
              Username or Email
            </label>
            <input
              type="text"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-french_gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue_munsell-500 dark:bg-outer_space-400 dark:text-white"
              placeholder="Enter your username or email"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-white">
              Password
            </label>
            <div className="flex flex-row">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-french_gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue_munsell-500 dark:bg-outer_space-400 dark:text-white"
                placeholder="••••••••"
                required
              />
              <button type="button" onClick={togglePasswordVisibility} className="ml-4 text-gray-700">
                {showPassword ? <RiEyeFill /> : <RiEyeOffFill />}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2 bg-blue_munsell-500 hover:bg-blue_munsell-600 text-white font-semibold rounded-md transition"
          >
            Sign In
          </button>
        </form>

        {/* Link to sign up */}
        <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-300">
          Don’t have an account?{" "}
          <a
            href="/sign-up"
            className="text-blue_munsell-500 hover:underline font-medium"
          >
            Sign up here
          </a>
        </p>
      </div>
    </div>
  );
}
