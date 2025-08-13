"use client";

import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="flex-1 space-y-4">
      <div className="space-y-4">
        <input
          type="email"
          placeholder="Email Address"
          className="h-20  text-4xl border-black placeholder:text-gray-400  placeholder:text-4xl"
        />

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            className="h-20  text-4xl  placeholder:text-gray-400  placeholder:text-4xl border border-black"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 "
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="remember"
            checked={rememberMe}
            onCheckedChange={(e) => setRememberMe(e as unknown as boolean)}
            className="h-4 w-4"
          />
          <label
            htmlFor="remember"
            className="text-lg text-gray-600 cursor-pointer"
          >
            Remember me
          </label>
        </div>
        <a
          href="#"
          className="text-lg text-gray-600 hover:text-gray-800 underline"
        >
          Forgot your password?
        </a>
      </div>

      <Button className="w-full h-12 bg-green-800 hover:bg-green-900 text-white font-medium">
        Log In
      </Button>
    </div>
  );
}
