"use client";

import { Button, Checkbox, Label, Select, TextInput } from "flowbite-react";
import { useState } from "react";
import Link from "next/link";

interface AccountInfoData {
  companyName?: string;
  jobTitle?: string;
  industry?: string;
  teamSize?: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
  additionalInfo?: string;
}

interface AccountInfoUserOnboardingProps {
  onNext: (data: AccountInfoData) => void;
  onPrevious: () => void;
  initialData?: AccountInfoData;
}

export function AccountInfoUserOnboarding({ onNext, onPrevious, initialData = {} }: AccountInfoUserOnboardingProps) {
  const [formData, setFormData] = useState<AccountInfoData>(initialData);

  const handleInputChange = (field: keyof AccountInfoData, value: string) => {
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
              href="/"
              className="flex items-center text-2xl font-semibold text-white"
            >
              <img
                alt=""
                src="/aeyes-logo-text.svg"
                className="mr-2 h-8"
              />
            </Link>
            <Link
              href="/"
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
                  src="/aeyes-logo.svg"
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
              <li className="flex text-primary-800 items-center after:mx-6 after:hidden after:h-1 after:w-12 after:border-b after:border-b-secondary-200 after:content-[''] dark:after:border-b-gray-700 sm:after:inline-block xl:after:mx-10">
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
                    Account <span className="hidden sm:inline-flex">Info</span>
                  </span>
                </div>
              </li>
              <li className="flex items-center sm:block">
                <div className="mr-2 sm:mx-auto sm:mb-2">3</div>
                Confirmation
              </li>
            </ol>
            <h1 className="mb-4 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:mb-6">
              Company Information
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="my-6 grid gap-5 sm:grid-cols-2">
                <div>
                  <Label
                    htmlFor="company-name"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Company Name
                  </Label>
                  <TextInput
                    name="company-name"
                    id="company-name"
                    placeholder="Your Company"
                    value={formData.companyName || ""}
                    onChange={(e) => handleInputChange("companyName", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label
                    htmlFor="job-title"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Job Title
                  </Label>
                  <TextInput
                    name="job-title"
                    id="job-title"
                    placeholder="Software Engineer"
                    value={formData.jobTitle || ""}
                    onChange={(e) => handleInputChange("jobTitle", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label
                    htmlFor="industry"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Industry
                  </Label>
                  <Select 
                    id="industry"
                    value={formData.industry || ""}
                    onChange={(e) => handleInputChange("industry", e.target.value)}
                  >
                    <option value="">Choose your industry</option>
                    <option value="Technology">Technology</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Finance">Finance</option>
                    <option value="Education">Education</option>
                    <option value="Retail">Retail</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Other">Other</option>
                  </Select>
                </div>
                <div>
                  <Label
                    htmlFor="team-size"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Team Size
                  </Label>
                  <Select 
                    id="team-size"
                    value={formData.teamSize || ""}
                    onChange={(e) => handleInputChange("teamSize", e.target.value)}
                  >
                    <option value="">Choose team size</option>
                    <option value="1-5">1-5 employees</option>
                    <option value="6-25">6-25 employees</option>
                    <option value="26-100">26-100 employees</option>
                    <option value="100+">100+ employees</option>
                  </Select>
                </div>
                <div>
                  <Label
                    htmlFor="project-type"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Project Type
                  </Label>
                  <Select 
                    id="project-type"
                    value={formData.projectType || ""}
                    onChange={(e) => handleInputChange("projectType", e.target.value)}
                  >
                    <option value="">Choose project type</option>
                    <option value="Web Application">Web Application</option>
                    <option value="Mobile App">Mobile App</option>
                    <option value="API Development">API Development</option>
                    <option value="Data Analysis">Data Analysis</option>
                    <option value="Other">Other</option>
                  </Select>
                </div>
                <div>
                  <Label
                    htmlFor="budget"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Budget Range
                  </Label>
                  <Select 
                    id="budget"
                    value={formData.budget || ""}
                    onChange={(e) => handleInputChange("budget", e.target.value)}
                  >
                    <option value="">Choose budget range</option>
                    <option value="Under $10k">Under $10k</option>
                    <option value="$10k - $50k">$10k - $50k</option>
                    <option value="$50k - $100k">$50k - $100k</option>
                    <option value="$100k+">$100k+</option>
                  </Select>
                </div>
              </div>
              <div className="mb-6">
                <Label
                  htmlFor="timeline"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Project Timeline
                </Label>
                <Select 
                  id="timeline"
                  value={formData.timeline || ""}
                  onChange={(e) => handleInputChange("timeline", e.target.value)}
                >
                  <option value="">Choose timeline</option>
                  <option value="1-3 months">1-3 months</option>
                  <option value="3-6 months">3-6 months</option>
                  <option value="6-12 months">6-12 months</option>
                  <option value="12+ months">12+ months</option>
                </Select>
              </div>
              <div className="mb-6">
                <Label
                  htmlFor="additional-info"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Additional Information
                </Label>
                <textarea
                  id="additional-info"
                  rows={4}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                  placeholder="Tell us more about your project requirements..."
                  value={formData.additionalInfo || ""}
                  onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-3 md:flex-row md:space-x-3 md:space-y-0">
                <Button
                  type="button"
                  onClick={onPrevious}
                  className="text-secondary-600 bg-transparent border border-secondary-200 hover:bg-secondary-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white md:w-1/2 [&>span]:py-3 [&>span]:text-sm"
                >
                  Previous: Personal Info
                </Button>
                <Button
                  type="submit"
                  className="md:w-1/2 [&>span]:text-sm"
                >
                  Complete Setup
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
