"use client";

import React from "react";
import LoginHeader from "@/components/login/LoginHeader";
import LoginForm from "@/components/login/LoginForm";
import Divider from "@/components/login/Divider";
import SignUpOptions from "@/components/login/SignUpOptions";
import FooterNote from "@/components/login/FooterNote";
import AccessibilityFloatingButton from "@/components/login/AccessibilityFloatingButton";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-start pt-40 justify-center px-4 text-lg">
      <div className="w-full max-w-4xl   space-y-40">

        <LoginHeader />

        <div className="flex gap-6">
          <LoginForm />
          <Divider />
          <SignUpOptions />
        </div>

        <FooterNote />
      </div>
      <AccessibilityFloatingButton />
    </div>
  );
}
