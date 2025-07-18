"use client";

import { Button, Checkbox, Label, Select, TextInput } from "flowbite-react";
import { useState, useEffect } from "react";
import Link from "next/link";

interface PersonalInfoData {
  fullName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  country?: string;
  phoneNumber?: string;
  termsAccepted?: boolean;
  newsletter?: boolean;
}

interface PersonalInfoUserOnboardingProps {
  onNext: (data: PersonalInfoData) => void;
  initialData?: PersonalInfoData;
}

export function PersonalInfoUserOnboarding({ onNext, initialData = {} }: PersonalInfoUserOnboardingProps) {
  const [formData, setFormData] = useState<PersonalInfoData>(initialData);

  const handleInputChange = (field: keyof PersonalInfoData, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext(formData);
  };

  return (
    <section className="bg-secondary-50 py-8 dark:bg-gray-900 lg:py-0">
      <div className="lg:flex">
        <div className="hidden w-full max-w-md bg-linear-to-b from-black to-primary-900 p-12 lg:block lg:h-screen">
          <div className="mb-8 flex items-center space-x-4">
            <Link
              href="./"
              className="flex items-center text-2xl font-semibold text-white"
            >
              <img
                alt=""
                src="./aeyes-logo-text.svg"
                className="mr-2 h-8"
              />
            </Link>
            <Link
              href="./"
              className="inline-flex items-center text-sm font-medium text-primary-100 hover:text-white"
            >
              <svg
                className="mr-1 h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Go back
            </Link>
          </div>
          <div className="block rounded-lg bg-primary-950 p-8 text-white">
            <h3 className="mb-1 text-2xl font-semibold">Why you should sign up</h3>
            <p className="mb-4 text-primary-400 sm:text-lg">
              30-day free trial
            </p>
            <ul className="space-y-4 text-left">
              <li className="flex items-center space-x-3">
                <svg
                  className="h-5 w-5 shrink-0 text-green-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Save time and effort</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="h-5 w-5 shrink-0 text-green-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>No setup, or hidden fees</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="h-5 w-5 shrink-0 text-green-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  Team size: <span className="font-semibold">1 developer</span>
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="h-5 w-5 shrink-0 text-green-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  Premium support:&nbsp;
                  <span className="font-semibold">6 months</span>
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="h-5 w-5 shrink-0 text-green-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  Free updates: <span className="font-semibold">6 months</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-auto flex items-center md:w-[42rem] md:px-8 xl:px-0">
          <div className="w-full">
            <div className="mb-8 flex items-center justify-center space-x-4 lg:hidden">
              <a href="#" className="flex items-center text-2xl font-semibold">
                <img
                  alt=""
                  src="./aeyes-logo.svg"
                  className="mr-2 h-8"
                />
              </a>
            </div>
            <ol className="mb-6 flex items-center text-center text-sm font-medium text-secondary-300 dark:text-gray-400 sm:text-base lg:mb-12">
              <li className="flex items-center text-primary-800 after:mx-6 after:hidden after:h-1 after:w-12 after:border-b after:border-b-secondary-200 dark:text-primary-800 dark:after:border-b-gray-700 sm:after:inline-block sm:after:content-[''] xl:after:mx-10">
                <div className="flex items-center after:mx-2 after:after:text-secondary-400 after:content-['/'] dark:after:text-gray-500 sm:after:hidden md:flex-col">
                  <svg
                    className="mr-2 h-4 w-4 sm:mx-auto sm:mb-2 sm:h-6 sm:w-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    Personal <span className="hidden sm:inline-flex">Info</span>
                  </span>
                </div>
              </li>
              <li className="flex items-center after:mx-6 after:hidden after:h-1 after:w-12 after:border-b after:border-b-secondary-200 after:content-[''] dark:after:border-b-gray-700 sm:after:inline-block xl:after:mx-10">
                <div className="flex items-center after:mx-2 after:after:text-secondary-400 after:content-['/'] dark:after:text-gray-500 sm:block sm:after:hidden">
                  <div className="mr-2 sm:mx-auto sm:mb-2">2</div>
                  Account <span className="hidden sm:inline-flex">Info</span>
                </div>
              </li>
              <li className="flex items-center sm:block">
                <div className="mr-2 sm:mx-auto sm:mb-2">3</div>
                Confirmation
              </li>
            </ol>
            <h1 className="mb-4 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:mb-6">
              Account details
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="my-6 grid gap-5 sm:grid-cols-2">
                <div>
                  <Label
                    htmlFor="full-name"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Full Name
                  </Label>
                  <TextInput
                    name="full-name"
                    id="full-name"
                    placeholder="Bonnie"
                    value={formData.fullName || ""}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </Label>
                  <TextInput
                    type="email"
                    name="email"
                    id="email"
                    placeholder="name@company.com"
                    value={formData.email || ""}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label
                    htmlFor="password"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </Label>
                  <TextInput
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    value={formData.password || ""}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label
                    htmlFor="confirm-password"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirm password
                  </Label>
                  <TextInput
                    type="password"
                    name="confirm-password"
                    id="confirm-password"
                    placeholder="••••••••"
                    value={formData.confirmPassword || ""}
                    onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label
                    htmlFor="country"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Country
                  </Label>
                  <Select 
                    id="country"
                    value={formData.country || ""}
                    onChange={(e) => handleInputChange("country", e.target.value)}
                  >
                    <option value="">Choose your country</option>
                    <option value="USA">USA</option>
                    <option value="UK">United Kingdom</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                    <option value="ES">Spain</option>
                    <option value="JP">Japan</option>
                    <option value="AUS">Australia</option>
                  </Select>
                </div>
                <div>
                  <Label
                    htmlFor="phone-number"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Phone
                  </Label>
                  <TextInput
                    type="number"
                    name="phone-number"
                    id="phone-number"
                    placeholder="+123 567 890"
                    value={formData.phoneNumber || ""}
                    onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="mb-6 space-y-3">
                <div className="flex items-start">
                  <div className="flex gap-3">
                    <Checkbox 
                      id="terms" 
                      checked={formData.termsAccepted || false}
                      onChange={(e) => handleInputChange("termsAccepted", e.target.checked)}
                    />
                    <Label
                      htmlFor="terms"
                      className="text-gray-500 dark:text-gray-400"
                    >
                      By signing up, you are creating a Aeyes account, and
                      you agree to Aeyes&apos;s&nbsp;
                      <a
                        className="font-medium text-primary-800 hover:underline dark:text-primary-500"
                        href="#"
                      >
                        Terms of Use
                      </a>
                      &nbsp;and&nbsp;
                      <a
                        className="font-medium text-primary-800 hover:underline dark:text-primary-500"
                        href="#"
                      >
                        Privacy Policy
                      </a>
                      .
                    </Label>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center gap-3">
                    <Checkbox 
                      id="newsletter" 
                      checked={formData.newsletter || false}
                      onChange={(e) => handleInputChange("newsletter", e.target.checked)}
                    />
                    <Label
                      htmlFor="newsletter"
                      className="text-gray-500 dark:text-gray-400"
                    >
                      Email me about product updates and resources.
                    </Label>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-3 md:flex-row md:space-x-3 md:space-y-0">
                <Button
                  color="outline"
                  type="button"
                  className="text-secondary-200 hover:bg-secondary-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white md:w-1/2 [&>span]:text-sm"
                >
                  Prev: Personal Info
                </Button>
                <Button
                  type="submit"
                  className="md:w-1/2 [&>span]:text-sm"
                >
                  Next: Account Info
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
