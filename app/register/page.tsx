"use client";

import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import Input from "@/components/register/Input";
import Select from "@/components/register/Select";
import Button from "@/components/register/Button";
import SelectionButton from "@/components/register/SelectionButton";
import ProgressSteps from "@/components/register/ProgressSteps";
import StepHeader from "@/components/register/StepHeader";
import LoadingSpinner from "@/components/register/LoadingSpinner";
import { CheckCircle } from "lucide-react";

// Inline Input component removed in favor of components/register/Input

// Inline Select component removed in favor of components/register/Select

// Inline Button component removed in favor of components/register/Button

// Inline SelectionButton component removed in favor of components/register/SelectionButton

// Inline ProgressSteps component removed in favor of components/register/ProgressSteps

// Inline StepHeader component removed in favor of components/register/StepHeader

// Inline LoadingSpinner component removed in favor of components/register/LoadingSpinner

// Main Registration Component
const ChobaniRegistration = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    state: "",
    zipCode: "",
    interests: [],
    products: [],
    receiveEmails: true,
    ageConfirmation: false,
  });

  const [passwordError, setPasswordError] = useState("");

  const states = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];

  const interestOptions = [
    "Recipes",
    "New Products",
    "Coupons",
    "Company News",
    "Sweepstakes",
  ];
  const productOptions = [
    "Greek Yogurt",
    "Cold Brew",
    "Complete",
    "Dairy Creamer",
    "Drinks",
    "Flip",
    "Less Sugar",
    "Oatmilk",
    "Plant-Based Creamer",
    "Probiotic",
    "Zero Sugar",
  ];

  const validatePassword = (password: string) => {
    const minLength = password.length >= 12;
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);

    if (
      !minLength ||
      !hasSpecialChar ||
      !hasUpperCase ||
      !hasLowerCase ||
      !hasNumber
    ) {
      return "Password must have 12+ characters, 1 special character, 1 uppercase, 1 lowercase, and 1 number";
    }
    return "";
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (field === "password") {
      const error = validatePassword(value);
      setPasswordError(error);
    }
  };

  const handleArrayChange = (field: string, value: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setFormData((prev: any) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((item: string) => item !== value)
        : [...prev[field], value],
    }));
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  // Step 1 Component
  const Step1 = () => (
    <div className="max-w-2xl mx-auto">
      <div className="flex">
        <div className="w-1/2 pr-12 flex flex-col justify-center">
          <h1 className="text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Welcome!
            <br />
            Let&apos;s create
            <br />
            an account.
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Let&apos;s get started in creating your Chobani® Account
            <br />
            to help personalize your experience.
          </p>
        </div>
        <div className="w-1/2 pl-12">
          <Input
            label="What is your email?"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            placeholder="Email Address"
          />

          <div className="mb-4">
            <label className="block text-xl font-semibold text-gray-800 mb-4">
              Create Password
            </label>
            <p className="text-gray-600 mb-4">
              Requires minimum 12 characters: 1 Special Character - 1 Upper Case
              - 1 Lower Case - 1 Number
            </p>
          </div>

          <Input
            value={formData.password}
            onChange={(e) => handleInputChange("password", e.target.value)}
            placeholder="Password"
            showToggle={true}
            showValue={showPassword}
            onToggle={() => setShowPassword(!showPassword)}
            error={passwordError}
          />

          <Input
            value={formData.confirmPassword}
            onChange={(e) =>
              handleInputChange("confirmPassword", e.target.value)
            }
            placeholder="Confirm Password"
            showToggle={true}
            showValue={showConfirmPassword}
            onToggle={() => setShowConfirmPassword(!showConfirmPassword)}
          />

          <div className="mb-8">
            <Checkbox
              checked={formData.receiveEmails}
              onCheckedChange={(val) =>
                handleInputChange("receiveEmails", val as unknown as string)
              }
            >
              Receive Marketing Emails
            </Checkbox>
          </div>

          <div className="mb-8">
            <Checkbox
              checked={formData.ageConfirmation}
              onCheckedChange={(val) =>
                handleInputChange("ageConfirmation", val as unknown as string)
              }
            >
              By checking the box, you agree that you are at least 18 years of
              age.
            </Checkbox>
          </div>

          <Button
            onClick={nextStep}
            disabled={
              !formData.email ||
              !formData.password ||
              !formData.confirmPassword ||
              !formData.ageConfirmation ||
              passwordError
            }
            fullWidth={true}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );

  // Step 2 Component
  const Step2 = () => (
    <div className="max-w-4xl mx-auto">
      <StepHeader title="Account Information" />

      <div className="grid grid-cols-2 gap-12 mb-12">
        <Input
          label="What is your first name?"
          value={formData.firstName}
          onChange={(e) => handleInputChange("firstName", e.target.value)}
          placeholder="First Name"
        />
        <Input
          label="What is your last name?"
          value={formData.lastName}
          onChange={(e) => handleInputChange("lastName", e.target.value)}
          placeholder="Last Name"
        />
      </div>

      <div className="grid grid-cols-2 gap-12 mb-16">
        <Select
          label="Which state are you in?"
          value={formData.state}
          onChange={(e) => handleInputChange("state", e.target.value)}
          options={states}
          placeholder="Select State"
        />
        <Input
          label="What's your zip code?"
          value={formData.zipCode}
          onChange={(e) => handleInputChange("zipCode", e.target.value)}
          placeholder="Zip Code"
        />
      </div>

      <div className="text-center">
        <Button
          onClick={nextStep}
          disabled={
            !formData.firstName ||
            !formData.lastName ||
            !formData.state ||
            !formData.zipCode
          }
        >
          Next
        </Button>
      </div>
    </div>
  );

  // Step 3 Component
  const Step3 = () => (
    <div className="max-w-6xl mx-auto">
      <div className="flex">
        <div className="w-1/3 pr-12">
          <h2 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Let&apos;s get
            <br />
            started
          </h2>
          <p className="text-xl text-gray-600">
            Tell us a little bit about yourself
          </p>
        </div>
        <div className="w-2/3 pl-12">
          <div className="mb-12">
            <label className="block text-2xl font-semibold text-gray-800 mb-6">
              What are you interested in knowing about?
            </label>
            <div className="flex flex-wrap gap-4 mb-6">
              {interestOptions.map((interest) => (
                <SelectionButton
                  key={interest}
                  selected={formData.interests.includes(interest)}
                  onClick={() => handleArrayChange("interests", interest)}
                >
                  {interest}
                </SelectionButton>
              ))}
            </div>
            <input
              type="text"
              placeholder="Other"
              className="w-full p-4 text-lg border-b-2 border-gray-300 focus:border-teal-700 focus:outline-none bg-transparent"
            />
          </div>

          <div className="mb-12">
            <label className="block text-2xl font-semibold text-gray-800 mb-6">
              Which Chobani™ products interest you?
            </label>
            <div className="grid grid-cols-3 gap-4">
              {productOptions.map((product) => (
                <SelectionButton
                  key={product}
                  selected={formData.products.includes(product)}
                  onClick={() => handleArrayChange("products", product)}
                >
                  {product}
                </SelectionButton>
              ))}
            </div>
          </div>

          <div className="text-left">
            <Button onClick={nextStep}>Next</Button>
          </div>
        </div>
      </div>
    </div>
  );

  // Step 4 Component
  const Step4 = () => (
    <div className="max-w-4xl mx-auto text-center">
      <div className="flex justify-center mb-12">
        {[1, 2, 3].map((step) => (
          <div key={step} className="flex items-center">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-semibold bg-teal-700 text-white">
              <CheckCircle className="w-6 h-6" />
            </div>
            <span className="ml-3 text-lg font-medium text-gray-700">
              {step === 1
                ? "Email Address"
                : step === 2
                ? "Account Info"
                : "Preferences"}
            </span>
            {step < 3 && <div className="w-16 h-1 bg-teal-700 mx-6"></div>}
          </div>
        ))}
      </div>

      <h1 className="text-6xl font-bold text-gray-800 mb-8 leading-tight">
        Give us a minute
        <br />
        while we get your
        <br />
        account ready
      </h1>
      <p className="text-xl text-gray-600 mb-4">
        Let&apos;s get started in creating your Chobani ®
      </p>
      <p className="text-xl text-gray-600">
        Account to help personalize your experience.
      </p>

      <LoadingSpinner />
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-8">
        {currentStep < 4 && <ProgressSteps currentStep={currentStep} />}

        {currentStep === 1 && <Step1 />}
        {currentStep === 2 && <Step2 />}
        {currentStep === 3 && <Step3 />}
        {currentStep === 4 && <Step4 />}
      </div>
    </div>
  );
};

export default ChobaniRegistration;
