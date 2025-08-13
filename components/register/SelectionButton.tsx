"use client";

import React from "react";

export type SelectionButtonProps = {
  selected?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
};

export default function SelectionButton({ selected, onClick, children }: SelectionButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-8 py-4 text-lg rounded-full border-2 transition-colors ${
        selected
          ? "bg-teal-700 text-white border-teal-700"
          : "bg-white text-gray-700 border-gray-300 hover:border-teal-700"
      }`}
    >
      {children}
    </button>
  );
}
