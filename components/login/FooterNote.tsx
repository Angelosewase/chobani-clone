"use client";

import React from "react";

export default function FooterNote() {
  return (
    <div className="text-center text-xs text-gray-500 pt-8">
      By continuing, you agree to the{" "}
      <a href="#" className="underline hover:text-gray-700">
        Terms of Service
      </a>{" "}
      and acknowledge our{" "}
      <a href="#" className="underline hover:text-gray-700">
        Privacy Policy
      </a>
      .
    </div>
  );
}
