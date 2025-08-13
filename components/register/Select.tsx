"use client";

import React from "react";

export type SelectProps = {
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options?: string[];
  placeholder?: string;
};

export default function Select({ label, value, onChange, options, placeholder }: SelectProps) {
  return (
    <div className="mb-8">
      {label && (
        <label className="block text-2xl font-semibold text-gray-800 mb-6">
          {label}
        </label>
      )}
      <select
        value={value}
        onChange={onChange}
        className="w-full p-6 text-2xl border-2 border-gray-300 rounded-lg focus:border-teal-700 focus:outline-none"
      >
        <option value="">{placeholder}</option>
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
