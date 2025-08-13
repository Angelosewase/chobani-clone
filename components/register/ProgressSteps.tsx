"use client";

import React from "react";
import { CheckCircle } from "lucide-react";

export default function ProgressSteps({ currentStep }: { currentStep: number }) {
  const steps = [
    { number: 1, label: "Email Address" },
    { number: 2, label: "Account Info" },
    { number: 3, label: "Preferences" },
  ];

  return (
    <div className="flex justify-center mb-12">
      {steps.map((step, index) => (
        <div key={step.number} className="flex items-center">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-semibold ${
              currentStep >= step.number
                ? "bg-teal-700 text-white"
                : "bg-gray-300 text-gray-600"
            }`}
          >
            {currentStep > step.number ? (
              <CheckCircle className="w-6 h-6" />
            ) : (
              step.number
            )}
          </div>
          <span className="ml-3 text-lg font-medium text-gray-700">{step.label}</span>
          {index < steps.length - 1 && <div className="w-16 h-1 bg-gray-300 mx-6"></div>}
        </div>
      ))}
    </div>
  );
}
