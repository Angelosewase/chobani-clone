"use client";

import React from "react";

export type ButtonProps = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  disabled?: boolean;
  variant?: "primary" | "secondary";
  size?: "large" | "small";
  fullWidth?: boolean;
};

export default function Button({
  onClick,
  children,
  disabled,
  variant = "primary",
  size = "large",
  fullWidth = false,
}: ButtonProps) {
  const baseClasses = "font-semibold rounded-lg transition-colors";
  const sizeClasses = size === "large" ? "py-6 px-16 text-2xl" : "py-4 px-8 text-lg";
  const variantClasses =
    variant === "primary"
      ? "bg-teal-700 text-white hover:bg-teal-800 disabled:bg-gray-400"
      : "bg-white text-gray-700 border-2 border-gray-300 hover:border-teal-700";
  const widthClasses = fullWidth ? "w-full" : "";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${sizeClasses} ${variantClasses} ${widthClasses} disabled:cursor-not-allowed`}
    >
      {children}
    </button>
  );
}
