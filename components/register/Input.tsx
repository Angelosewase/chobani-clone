"use client";

import React from "react";
import { Eye, EyeOff } from "lucide-react";

export type InputProps = {
  label?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
  showToggle?: boolean;
  onToggle?: () => void;
  showValue?: boolean;
  disabled?: boolean;
};

export default function Input({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  error,
  showToggle,
  onToggle,
  showValue,
  disabled,
}: InputProps) {
  return (
    <div className="mb-8">
      {label && (
        <label className="block text-xl font-semibold text-gray-800 mb-4">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type={showToggle ? (showValue ? "text" : "password") : type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className="w-full p-6 text-lg border-2 border-gray-300 rounded-lg focus:border-teal-700 focus:outline-none pr-16"
        />
        {showToggle && (
          <button
            type="button"
            onClick={onToggle}
            className="absolute right-6 top-1/2 transform -translate-y-1/2"
          >
            {showValue ? (
              <EyeOff className="w-6 h-6 text-gray-500" />
            ) : (
              <Eye className="w-6 h-6 text-gray-500" />
            )}
          </button>
        )}
      </div>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
}
