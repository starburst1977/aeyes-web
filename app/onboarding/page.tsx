"use client";

import { useState } from "react";
import { PersonalInfoUserOnboarding } from "./personalinfo";
import { AccountInfoUserOnboarding } from "./accountinfo";
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

interface FormData {
  personalInfo: PersonalInfoData;
  accountInfo: AccountInfoData;
}

function ConfirmationStage({ formData, onBack }: { formData: FormData; onBack: () => void }) {
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
              <Link href="#" className="flex items-center text-2xl font-semibold">
                <img
                  alt=""
                  src="./aeyes-logo.svg"
                  className="mr-2 h-8"
                />
              </Link>
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
              <li className="flex text-primary-800 items-center after:mx-6 dark:after:border-b-gray-700 sm:after:inline-block xl:after:mx-10">
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
                    Confirmation
                  </span>
                </div>
              </li>
            </ol>
            <h1 className="mb-4 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:mb-6">
              Setup Complete!
            </h1>
            <div className="mb-6 rounded-lg bg-green-200 p-6 dark:bg-green-900/20">
              <div className="flex items-center">
                <svg
                  className="mr-3 h-6 w-6 text-green-500"
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
                <h3 className="text-lg font-medium text-green-800 dark:text-green-200">
                  Welcome to Aeyes!
                </h3>
              </div>
              <p className="mt-2 text-green-700 dark:text-green-300">
                Your account has been created successfully. You can now start using our platform with your 30-day free trial.
              </p>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                <h4 className="mb-2 font-medium text-gray-900 dark:text-white">Personal Information</h4>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <p><strong>Name:</strong> {formData.personalInfo.fullName}</p>
                  <p><strong>Email:</strong> {formData.personalInfo.email}</p>
                  <p><strong>Country:</strong> {formData.personalInfo.country}</p>
                </div>
              </div>
              <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                <h4 className="mb-2 font-medium text-gray-900 dark:text-white">Company Information</h4>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <p><strong>Company:</strong> {formData.accountInfo.companyName}</p>
                  <p><strong>Job Title:</strong> {formData.accountInfo.jobTitle}</p>
                  <p><strong>Industry:</strong> {formData.accountInfo.industry}</p>
                  <p><strong>Team Size:</strong> {formData.accountInfo.teamSize}</p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex flex-col space-y-3 md:flex-row md:space-x-3 md:space-y-0">
              <button
                onClick={onBack}
                className="rounded-lg border border-secondary-200 px-5 py-2.5 text-center text-sm font-medium text-secondary-600 hover:bg-secondary-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 md:w-1/2"
              >
                Back to Edit
              </button>
              <Link
                href="./dashboard"
                className="rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 md:w-1/2"
              >
                Go to Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AllUserOnboarding() {
  const [currentStage, setCurrentStage] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    personalInfo: {},
    accountInfo: {}
  });

  const handleNext = (stageData: PersonalInfoData) => {
    setFormData(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, ...stageData }
    }));
    setCurrentStage(2);
  };

  const handlePrevious = () => {
    setCurrentStage(1);
  };

  const handleComplete = (stageData: AccountInfoData) => {
    setFormData(prev => ({
      ...prev,
      accountInfo: { ...prev.accountInfo, ...stageData }
    }));
    setCurrentStage(3);
  };

  const handleBackFromConfirmation = () => {
    setCurrentStage(2);
  };

  return (
    <>
      {currentStage === 1 && (
        <PersonalInfoUserOnboarding 
          onNext={handleNext}
          initialData={formData.personalInfo}
        />
      )}
      {currentStage === 2 && (
        <AccountInfoUserOnboarding 
          onNext={handleComplete}
          onPrevious={handlePrevious}
          initialData={formData.accountInfo}
        />
      )}
      {currentStage === 3 && (
        <ConfirmationStage 
          formData={formData}
          onBack={handleBackFromConfirmation}
        />
      )}
    </>
  );
}
