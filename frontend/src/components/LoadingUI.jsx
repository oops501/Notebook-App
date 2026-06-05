import React from "react";

export default function LoadingUI() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="flex flex-col items-center gap-6">
        {/* Animated Spinner */}
        <span className="loading loading-spinner loading-lg text-green-500"></span>

        {/* Loading Card */}
        <div className="card bg-white shadow-lg border border-green-200 w-80">
          <div className="card-body items-center text-center">
            <h2 className="text-xl font-bold text-green-700 animate-pulse">
              Loading...
            </h2>

            <p className="text-gray-600">
              Please wait while we prepare everything for you.
            </p>

            {/* Animated Dots */}
            <div className="flex gap-1 mt-2">
              <span
                className="w-2 h-2 bg-green-500 rounded-full animate-bounce"
                style={{ animationDelay: "0ms" }}
              />
              <span
                className="w-2 h-2 bg-green-500 rounded-full animate-bounce"
                style={{ animationDelay: "150ms" }}
              />
              <span
                className="w-2 h-2 bg-green-500 rounded-full animate-bounce"
                style={{ animationDelay: "300ms" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
