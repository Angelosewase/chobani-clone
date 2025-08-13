"use client";

import React from "react";

export default function LoadingSpinner() {
  return (
    <div className="mt-16">
      <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-teal-700 border-t-transparent"></div>
    </div>
  );
}
