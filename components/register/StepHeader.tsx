"use client";

import React from "react";

export default function StepHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-16 text-center">
      <h2 className="text-5xl font-bold text-gray-800 mb-8">{title}</h2>
      {subtitle && <p className="text-xl text-gray-600">{subtitle}</p>}
    </div>
  );
}
